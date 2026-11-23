// Примерка на фото: загрузка, участок (нейросеть / свой контур / 4 точки), перспектива, выбор плитки, расчёт и заявка
(function () {
  'use strict';
  const { $, toast, openModal } = window.UI, SP = window.SP;
  const q = new URLSearchParams(location.search);
  const FORMS = SP.PRODUCTS.filter(p => p.cat === 'plitka' && p.patterns && Paving.layouts[p.model]);
  const st = { id: FORMS.some(p => p.id === q.get('id')) ? q.get('id') : 'bruschatka', color: q.get('color') || 'grey', surface: q.get('surface') || 'smooth', pattern: q.get('pattern') };
  const prod = () => SP.byId(st.id);
  const design = () => { const p = prod(); if (!p.patterns.includes(st.pattern)) st.pattern = p.patterns[0]; return { form: p.model, pattern: st.pattern, ...SP.look(st.color), surface: st.surface }; };
  if (!Paving.hasWebGL()) { $('#prDrop b').textContent = 'Браузер не поддерживает WebGL'; return; }
  const fit = Paving.createPhotoFit($('#prCanvas'));
  const texReady = window.Paving ? Paving.preload(SP.COLORS.map(c => c.tex)) : Promise.resolve();

  let img = null, pts = null, moved = false;
  let mode = 'ai', tool = 'add';
  let aiPts = [], poly = [], aiMask = null;   // точки для нейросети (x, y, 1 — двор / 0 — не двор), вершины контура, маска нейросети

  // ================= нейросеть (SlimSAM в отдельном потоке) =================
  const AI = { worker: null, state: 'off', imgId: 0, ready: false, seq: 0, wait: new Map() };
  const aiStatus = (t, cls) => { const e = $('#prAiStatus'); e.textContent = t || ''; e.className = 'pr-ai-status' + (cls ? ' ' + cls : ''); };
  function aiStart() {
    if (AI.worker || AI.state === 'fail') return;
    try { AI.worker = new Worker('js/yard-ai.worker.js?v=5', { type: 'module' }); } catch (e) { return aiFail(); }
    AI.state = 'loading';
    aiStatus('Загружаю нейросеть… (один раз, ~105 МБ — на телефоне может занять минуту)', 'busy');
    AI.worker.onmessage = ({ data: m }) => {
      if (m.type === 'model') { AI.model = m.name; svg.dataset.model = m.name; }
      else if (m.type === 'progress') aiStatus(`Загружаю нейросеть… ${m.value}%`, 'busy');
      else if (m.type === 'loaded') { AI.state = 'on'; if (!img) aiStatus('Нейросеть готова'); }
      else if (m.type === 'ready') { if (m.id !== AI.imgId) return; AI.state = 'on'; AI.ready = true; AI.ground = m.ground || null; aiStatus(''); onAiReady(); }
      else if (m.type === 'mask') { const r = AI.wait.get(m.id); AI.wait.delete(m.id); r && r(m); }
      else if (m.type === 'error') { console.warn('yard-ai:', m.message); const r = AI.wait.get(m.id); AI.wait.delete(m.id); if (r) r(null); else aiFail(); }
    };
    AI.worker.onerror = e => { console.warn('yard-ai worker', e.message); aiFail(); };
  }
  function aiFail() {
    AI.state = 'fail';
    if (AI.worker) AI.worker.terminate(); AI.worker = null;
    aiStatus('Нейросеть не запустилась в этом браузере — обведите двор контуром.', 'err');
    if (mode === 'ai') setMode('poly');
  }
  function aiImage() {   // отдать фото нейросети: она один раз «рассматривает» его, дальше каждый клик — доли секунды
    if (!img || !AI.worker || AI.sent === img) return;
    AI.sent = img; AI.ready = false; AI.imgId++;
    const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
    const g = c.getContext('2d'); g.drawImage(img, 0, 0);
    const d = g.getImageData(0, 0, c.width, c.height);
    if (AI.state !== 'loading') aiStatus('Нейросеть ищет двор на фото…', 'busy');
    AI.worker.postMessage({ type: 'image', id: AI.imgId, w: c.width, h: c.height, data: d.data.buffer }, [d.data.buffer]);
  }
  function aiDecode(points, labels, margin) {
    return new Promise(res => {
      const id = ++AI.seq; AI.wait.set(id, res);
      const W = img.naturalWidth, H = img.naturalHeight;
      AI.worker.postMessage({ type: 'decode', id, points: points.map(p => [p[0] / W, p[1] / H]), labels, margin });
    });
  }
  function maskCanvas(a, w, h) {   // маска (0/255) → canvas (белое — плитка)
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d'), id = g.createImageData(w, h), d = id.data;
    for (let i = 0; i < a.length; i++) { d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = a[i]; d[i * 4 + 3] = 255; }
    g.putImageData(id, 0, 0);
    return c;
  }
  // нейросеть делит площадку на части по рисунку (бордюрные полосы, люки, пятна, швы) — заделываем узкие щели
  // и замкнутые дыры внутри выделения (морфологическое «закрытие» на уменьшенной копии). Внешний край не меняется.
  function closeGaps(a, w, h) {
    const k = Math.min(1, 480 / Math.max(w, h)), sw = Math.max(8, Math.round(w * k)), sh = Math.max(8, Math.round(h * k)), n = sw * sh;
    const id = new ImageData(w, h);
    for (let i = 0; i < w * h; i++) { id.data[i * 4] = id.data[i * 4 + 1] = id.data[i * 4 + 2] = a[i]; id.data[i * 4 + 3] = 255; }
    const src = document.createElement('canvas'); src.width = w; src.height = h; src.getContext('2d').putImageData(id, 0, 0);
    const R = Math.max(2, Math.round(Math.max(sw, sh) * 0.025));
    const pass = (from, thr) => {   // размытие + порог: низкий порог — расширение, высокий — сужение
      const c = document.createElement('canvas'); c.width = sw; c.height = sh;
      const g = c.getContext('2d', { willReadFrequently: true });
      g.fillStyle = '#000'; g.fillRect(0, 0, sw, sh); g.filter = `blur(${R}px)`; g.drawImage(from, 0, 0, sw, sh); g.filter = 'none';
      const d = g.getImageData(0, 0, sw, sh);
      for (let i = 0; i < n; i++) { const v = d.data[i * 4] > thr ? 255 : 0; d.data[i * 4] = d.data[i * 4 + 1] = d.data[i * 4 + 2] = v; }
      g.putImageData(d, 0, 0); return c;
    };
    const cd = pass(pass(src, 20), 235).getContext('2d').getImageData(0, 0, sw, sh).data;
    // замкнутые дыры любого размера: всё, что не связано с краем кадра через «не-двор», — тоже двор
    const out = new Uint8Array(n), st = [];
    for (let x = 0; x < sw; x++) st.push(x, (sh - 1) * sw + x);
    for (let y = 0; y < sh; y++) st.push(y * sw, y * sw + sw - 1);
    while (st.length) { const i = st.pop(); if (out[i] || cd[i * 4]) continue; out[i] = 1; const x = i % sw; if (x > 0) st.push(i - 1); if (x < sw - 1) st.push(i + 1); if (i >= sw) st.push(i - sw); if (i < n - sw) st.push(i + sw); }
    for (let y = 0; y < h; y++) { const yy = Math.min(sh - 1, (y * sh / h) | 0); for (let x = 0; x < w; x++) { if (!out[yy * sw + Math.min(sw - 1, (x * sw / w) | 0)]) a[y * w + x] = 255; } }
  }
  // каждая точка выделяет свой кусок: «+» — кусок двора (с учётом всех «−»), «−» — кусок, который нужно вырезать.
  // Итог = все «+» минус все «−». Куски кэшируются — новый клик считает только себя (~0,3 с).
  let busy = 0;
  const cache = new Map();
  async function piece(pts, labels, margin) {
    const key = JSON.stringify([AI.imgId, pts.map(p => p.map(Math.round)), labels, margin]);
    if (cache.has(key)) return cache.get(key);
    const m = await aiDecode(pts, labels, margin);
    if (m) { if (cache.size > 40) cache.clear(); cache.set(key, m); }
    return m;
  }
  async function aiRun() {
    if (!AI.ready || !aiPts.length) return;
    const my = ++busy;
    aiStatus('Нейросеть выделяет двор…', 'busy');
    const pos = aiPts.filter(p => p[2]), neg = aiPts.filter(p => !p[2]);
    const negXY = neg.map(p => [p[0], p[1]]);
    const add = [], cut = [];
    // мощёный двор нейросеть видит как множество камней: из трёх вариантов выделения берём самый крупный
    // («весь двор», а не «один камень»). Автопоиск — сразу несколько точек по низу кадра: так она берёт всю площадку
    const W = img.naturalWidth, H = img.naturalHeight;
    const G = AI.ground;
    for (const p of pos) {
      const auto = p[3] === 'auto';
      // автопоиск: точки там, где SegFormer нашёл землю; если не нашёл — по низу кадра
      const seeds = auto && G && G.seeds[p[4]] ? G.seeds[p[4]] : [[0.5, 0.86], [0.25, 0.9], [0.75, 0.9], [0.5, 0.72]];
      const src = auto ? seeds.map(([u, v]) => [W * u, H * v]) : [[p[0], p[1]]];
      let m = await piece([...src, ...negXY], [...src.map(() => 1), ...neg.map(() => 0)], auto ? 0.25 : 0.15);
      if (m && auto && G) m = clipGround(m);   // автопоиск не заходит на стены, крыши, машины
      add.push(m);
    }
    for (const p of neg) cut.push(await piece([[p[0], p[1]]], [1], 0.03));
    if (my !== busy || mode !== 'ai') return;
    const ok = add.filter(Boolean);
    if (!ok.length) { aiStatus(pos.length ? 'Не получилось выделить — поставьте точку в другом месте.' : 'Нажмите «+ Добавить» и затем на двор.', pos.length ? 'err' : ''); aiMask = null; applyMask(); return; }
    const { w, h } = ok[0], n = w * h, res = new Uint8Array(n);
    for (const m of ok) { const a = new Uint8Array(m.data); for (let i = 0; i < n; i++) if (a[i]) res[i] = 255; }
    closeGaps(res, w, h);
    for (const m of cut) if (m) { const a = new Uint8Array(m.data); for (let i = 0; i < n; i++) if (a[i]) res[i] = 0; }
    aiMask = maskCanvas(res, w, h);
    $('#prHelp').classList.remove('on');
    applyMask();
    aiStatus('Готово. Не всё выделилось — нажмите «+ Добавить» и нажмите на пропущенное место. Лишнее — «− Убрать».');
  }
  // карта земли от SegFormer, чуть расширенная (на ~3 %): край площадки SAM обводит точнее, SegFormer лишь отсекает лишнее
  function groundGrid() {
    const G = AI.ground;
    if (G.dil) return G.dil;
    const { gw, gh } = G, src = new Uint8Array(G.g);
    let e = src;
    for (let k = 0; k < 4; k++) {
      const o = new Uint8Array(gw * gh);
      for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) { const i = y * gw + x; o[i] = e[i] || (x > 0 && e[i - 1]) || (x < gw - 1 && e[i + 1]) || (y > 0 && e[i - gw]) || (y < gh - 1 && e[i + gw]) ? 1 : 0; }
      e = o;
    }
    return (G.dil = e);
  }
  function clipGround(m) {
    const d = groundGrid(), { gw, gh } = AI.ground, a = new Uint8Array(m.data).slice();
    for (let y = 0; y < m.h; y++) { const gy = Math.min(gh - 1, (y * gh / m.h) | 0) * gw; for (let x = 0; x < m.w; x++) if (a[y * m.w + x] && !d[gy + Math.min(gw - 1, (x * gw / m.w) | 0)]) a[y * m.w + x] = 0; }
    return { ...m, data: a.buffer };
  }
  function onAiReady() {
    if (mode !== 'ai') return;
    if (!aiPts.length) {   // первый раз — нейросеть сама ищет двор: в найденной земле (или внизу по центру кадра)
      const W = img.naturalWidth, H = img.naturalHeight, G = AI.ground;
      aiPts = G && G.seeds.length ? G.seeds.map((s, i) => [W * s[0][0], H * s[0][1], 1, 'auto', i]) : [[W * 0.5, H * 0.86, 1, 'auto']];
      handles();
    }
    aiRun();
  }

  // ================= маска участка =================
  function polyCanvas() {
    const W = img.naturalWidth, H = img.naturalHeight, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'); g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
    g.fillStyle = '#fff'; g.beginPath(); poly.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath(); g.fill();
    return c;
  }
  function applyMask() {
    if (!img) return;
    if (mode === 'ai' && aiMask) fit.setMask(aiMask);
    else if (mode === 'poly' && poly.length >= 3) fit.setMask(polyCanvas());
    else fit.setMask(null);
    depth();
  }
  // ================= разметка на фото (svg поверх) =================
  const svg = $('#prHandles'), wrap = $('#prWrap');
  function handles() {
    if (!img) return;
    const W = img.naturalWidth, H = img.naturalHeight, r = Math.max(W, H) * 0.014;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    let s = '';
    if (mode === 'poly' && poly.length) {
      s += `<polygon class="pr-poly" points="${poly.map(p => p.join(',')).join(' ')}"/>`;
      s += poly.map((p, i) => `<circle class="pv${i === 0 ? ' first' : ''}" cx="${p[0]}" cy="${p[1]}" r="${r * 0.7}" data-v="${i}"/>`).join('');
    }
    if (mode === 'ai') s += aiPts.map(p => `<g class="pa ${p[2] ? 'add' : 'cut'}" transform="translate(${p[0]} ${p[1]})"><circle r="${r * 0.75}"/><path d="M${-r * 0.4} 0H${r * 0.4}${p[2] ? `M0 ${-r * 0.4}V${r * 0.4}` : ''}" stroke-width="${r * 0.16}"/></g>`).join('');
    s += pts.map((p, i) => `<circle class="pp" cx="${p[0]}" cy="${p[1]}" r="${r}" data-i="${i}"/>`).join('');
    svg.innerHTML = s;
  }
  let drag = null, down = null;
  const toImg = e => { const b = svg.getBoundingClientRect(); return [(e.clientX - b.left) / b.width * img.naturalWidth, (e.clientY - b.top) / b.height * img.naturalHeight]; };
  const clampP = ([x, y]) => [Math.max(0, Math.min(img.naturalWidth, x)), Math.max(0, Math.min(img.naturalHeight, y))];
  svg.addEventListener('pointerdown', e => {
    if (!img) return;
    const c = e.target.closest('circle');
    svg.setPointerCapture(e.pointerId); e.preventDefault(); $('#prHelp').classList.remove('on');
    if (c && c.classList.contains('pp')) drag = { k: 'pp', i: +c.dataset.i };
    else if (c && c.classList.contains('pv')) drag = { k: 'pv', i: +c.dataset.v, moved: false };
    else down = { x: e.clientX, y: e.clientY };
  });
  svg.addEventListener('pointermove', e => {
    if (!drag) { if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) down = null; return; }
    const p = clampP(toImg(e));
    if (drag.k === 'pp') { pts[drag.i] = p; moved = true; handles(); fit.setQuad(pts.map(p => p.slice()), false); }
    else { poly[drag.i] = p; drag.moved = true; handles(); }
  });
  const end = e => {
    if (drag) {
      const d = drag; drag = null;
      if (d.k === 'pp') { fit.setQuad(pts.map(p => p.slice()), true); depth(); }
      else if (d.moved) applyMask();
      else if (d.i === 0 && poly.length >= 3) toast('Контур замкнут — можно двигать точки');
      return;
    }
    if (!down || e.type === 'pointercancel') { down = null; return; }
    down = null;
    click(clampP(toImg(e)));
  };
  svg.addEventListener('pointerup', end); svg.addEventListener('pointercancel', end);

  function click(p) {
    if (mode === 'ai') {
      if (!AI.ready) { aiStatus(AI.state === 'fail' ? 'Нейросеть недоступна — выберите «Обвести контур».' : 'Секунду — нейросеть ещё рассматривает фото…', AI.state === 'fail' ? 'err' : 'busy'); return; }
      aiPts.push([p[0], p[1], tool === 'add' ? 1 : 0]); handles(); aiRun();
    } else if (mode === 'poly') {
      poly.push(p); handles();
      if (poly.length >= 3) applyMask();
    }
  }

  // ================= режимы =================
  const HINT = {
    ai: 'Нажмите на двор — нейросеть сама выделит площадку по контуру. Пропустила кусок — «+ Добавить» и нажмите туда; лишнее — «− Убрать».',
    poly: 'Нажимайте по краю площадки — точки соединятся в контур. Точки можно двигать. Клумбы и машины обходите контуром.',
    quad: 'Плитка ляжет в четырёхугольник между оранжевыми точками.',
  };
  function setMode(m) {
    mode = m;
    document.querySelectorAll('#prMode .chip').forEach(b => b.classList.toggle('on', b.dataset.m === m));
    $('#prAiTools').hidden = m === 'quad';
    $('#prToolAdd').hidden = $('#prToolCut').hidden = m !== 'ai';
    $('#prModeHint').textContent = HINT[m];
    if (m !== 'ai') aiStatus('');
    if (m === 'ai' && img) { aiStart(); if (AI.ready) { if (!aiMask) onAiReady(); } else aiImage(); }
    $('#prHelp').textContent = m === 'quad' ? 'Тяните оранжевые точки на углы участка под плитку' : m === 'ai' ? 'Нажмите на двор — нейросеть выделит его сама' : 'Нажимайте по краю двора, чтобы обвести его';
    handles(); applyMask();
  }
  document.querySelectorAll('#prMode .chip').forEach(b => b.addEventListener('click', () => setMode(b.dataset.m)));
  const setTool = t => { tool = t; $('#prToolAdd').classList.toggle('on', t === 'add'); $('#prToolCut').classList.toggle('on', t === 'cut'); };
  $('#prToolAdd').addEventListener('click', () => setTool('add'));
  $('#prToolCut').addEventListener('click', () => setTool('cut'));
  $('#prUndo').addEventListener('click', () => {
    if (mode === 'ai') { aiPts.pop(); handles(); if (aiPts.length) aiRun(); else { aiMask = null; applyMask(); } }
    else if (mode === 'poly') { poly.pop(); handles(); applyMask(); }
  });
  $('#prClear').addEventListener('click', () => {
    if (mode === 'ai') { aiPts = []; aiMask = null; busy++; aiStatus('Нажмите на двор'); }
    else poly = [];
    handles(); applyMask();
  });

  // ================= загрузка =================
  function start(im) {
    img = im; moved = false; aiPts = []; poly = []; aiMask = null; busy++;
    const W = im.naturalWidth, H = im.naturalHeight;
    pts = [[W * 0.08, H * 0.95], [W * 0.92, H * 0.95], [W * 0.72, H * 0.62], [W * 0.28, H * 0.62]];
    $('#prDrop').hidden = true; wrap.hidden = false; $('#prTips').hidden = false;
    wrap.style.aspectRatio = W + ' / ' + H;
    fit.setImage(im, pts.map(p => p.slice()));
    fit.set(design());
    handles(); depth();
    $('#prHelp').classList.add('on');
    if (mode === 'ai') { aiStart(); aiImage(); }
  }
  function fromFile(file) {
    if (!file || !/^image\//.test(file.type)) { toast('Нужен файл с фотографией'); return; }
    const url = URL.createObjectURL(file), im = new Image();
    im.onload = () => {
      // большие фото уменьшаем до 2000 px по длинной стороне
      const k = Math.min(1, 2000 / Math.max(im.naturalWidth, im.naturalHeight));
      if (k < 1) { const c = document.createElement('canvas'); c.width = Math.round(im.naturalWidth * k); c.height = Math.round(im.naturalHeight * k); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); const im2 = new Image(); im2.onload = () => start(im2); im2.src = c.toDataURL('image/jpeg', 0.92); }
      else start(im);
      URL.revokeObjectURL(url);
    };
    im.onerror = () => toast('Не получилось открыть фото. Попробуйте JPG или PNG.');
    im.src = url;
  }
  $('#prFile').addEventListener('change', e => fromFile(e.target.files[0]));
  const drop = $('#prDrop');
  ['dragenter', 'dragover'].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.remove('over'); }));
  drop.addEventListener('drop', e => fromFile(e.dataTransfer.files[0]));
  $('#prNew').addEventListener('click', () => $('#prFile').click());
  // нейросеть начинает грузиться заранее, пока клиент выбирает фото
  $('#prFile').addEventListener('click', () => { if (mode === 'ai') aiStart(); });

  // ================= выбор плитки =================
  const sel = $('#prForm');
  sel.innerHTML = FORMS.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  sel.value = st.id;
  sel.addEventListener('change', () => { st.id = sel.value; st.pattern = null; paint(); apply(); colorsFor = ''; paintColors(); });
  const cb = $('#prColors');
  let colorsFor = '';
  function paintColors() {
    const p = prod();
    if (colorsFor !== p.id) {
      colorsFor = p.id; cb.innerHTML = '';
      SP.colorsOf(p).forEach(c => {
        const b = document.createElement('button');
        b.type = 'button'; b.dataset.id = c.id; b.dataset.name = c.name; b.title = c.name; b.setAttribute('aria-label', c.name);
        b.innerHTML = '<img alt="">';
        b.addEventListener('click', () => { st.color = c.id; paint(); apply(); });
        cb.appendChild(b);
      });
      let i = 0; const d0 = design();
      const next = () => { const b = cb.children[i++]; if (!b || colorsFor !== p.id) return; b.querySelector('img').src = Paving.swatch({ ...d0, ...SP.look(b.dataset.id), surface: 'smooth' }, 100, 0.6); setTimeout(next, 0); };
      texReady.then(() => setTimeout(next, 30));
    }
    cb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === st.color));
    $('#prColorName').textContent = SP.colorById(st.color).name;
  }
  function paint() {
    const p = prod();
    design();
    const host = $('#prPatterns'); host.innerHTML = '';
    $('#prPatWrap').hidden = p.patterns.length < 2;
    p.patterns.forEach(k => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'chip' + (k === st.pattern ? ' on' : ''); b.textContent = SP.PATTERNS[k];
      b.addEventListener('click', () => { st.pattern = k; paint(); apply(); });
      host.appendChild(b);
    });
    paintColors();
    const h = SP.heightsOf(p)[0];
    $('#prProd').textContent = `${p.name} — ${SP.colorById(st.color).name.toLowerCase()}`;
    $('#prSub').textContent = p.onRequest ? 'Цена — по запросу' : `${SP.money(SP.priceOf(p, h, st.surface, st.color))} ₽/м² · толщина ${h} мм`;
  }
  const apply = () => { if (img) fit.set(design()); };
  const wIn = $('#prWidth');
  function depth() {
    $('#prWidthOut').textContent = String(wIn.value).replace('.', ',') + ' м';
    if (!img) return;
    const [, D] = fit.dims();
    $('#prDepth').textContent = `≈ ${D.toFixed(1).replace('.', ',')} м, площадь плитки ≈ ${Math.round(fit.area())} м²`;
  }
  wIn.addEventListener('input', () => { fit.setWidth(+wIn.value); depth(); });
  $('#prSave').addEventListener('click', () => { if (!img) return toast('Сначала загрузите фото'); const a = document.createElement('a'); a.href = fit.snapshot(1800); a.download = 'plitka-na-foto.jpg'; a.click(); });
  $('#prLead').addEventListener('click', () => {
    const p = prod(), h = SP.heightsOf(p)[0], pr = SP.priceOf(p, h, st.surface, st.color);
    const area = img ? Math.round(fit.area()) : 0;
    openModal({ title: 'Отправить фото с плиткой', text: 'Менеджер посмотрит фото, уточнит размеры и пришлёт точный расчёт.', button: 'Отправить', comment: true,
      summary: `${p.name}, ${SP.PATTERNS[st.pattern].toLowerCase()}, ${SP.colorById(st.color).name.toLowerCase()}, ${h} мм\n${area ? 'Участок ≈ ' + area + ' м² → ≈ ' + SP.money(pr * Math.ceil(area * 1.05)) + ' ₽ по прайсу\n' : ''}Фото с плиткой будет приложено к заявке.` });
  });
  paint();
  setMode('ai');
})();
