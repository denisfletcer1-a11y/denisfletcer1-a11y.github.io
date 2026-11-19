// Конструктор двора по образцу propress.ru: дом → форма → цвет → цена «от–до» → «Посмотреть на моём участке»
(function () {
  'use strict';
  const { $, cart, fav, toast, openModal } = window.UI, SP = window.SP;
  const q = new URLSearchParams(location.search);
  const FORMS = SP.PRODUCTS.filter(p => p.cat === 'plitka' && p.patterns && Paving.layouts[p.model]);
  const st = {
    scene: SCENES.some(s => s.id === q.get('house')) ? q.get('house') : SCENES[0].id,
    id: FORMS.some(p => p.id === q.get('id')) ? q.get('id') : 'novy',
    color: q.get('color') || 'malva', surface: q.get('surface') || 'smooth', pattern: q.get('pattern') || null,
  };
  const prod = () => SP.byId(st.id);
  if (window.SCENE_VIEWS) SCENES.forEach(s => { if (SCENE_VIEWS[s.id]) s.views = SCENE_VIEWS[s.id]; });
  const texReady = Paving.preload(SP.COLORS.map(c => c.tex));
  let sceneDone; const sceneReady = new Promise(r => { sceneDone = r; });
  const stage = $('#kbStage');
  if (!Paving.hasWebGL()) { stage.querySelector('.loading span').textContent = 'Браузер не поддерживает WebGL — откройте страницу в свежем Chrome, Яндекс Браузере или Safari.'; return; }
  const kb = Paving.createConstructor($('#kbCanvas'));
  window.__kb = kb;
  const design = () => {
    const p = prod();
    if (!st.pattern || !p.patterns.includes(st.pattern)) st.pattern = p.patterns[0];
    if (!SP.surfacesOf(p).includes(st.surface)) st.surface = 'smooth';
    if (!SP.colorsOf(p).some(c => c.id === st.color)) st.color = SP.colorsOf(p)[0].id;
    return { form: p.model, pattern: st.pattern, ...SP.look(st.color), surface: st.surface };
  };
  // ---------- плавная смена картинки, как у образца: старый кадр растворяется поверх нового ----------
  const cv = $('#kbCanvas');
  let snapEl = null;
  function snap() {
    if (!stage.classList.contains('ready') || !cv.width) return null;
    const c = document.createElement('canvas');
    c.className = 'kc-snap'; c.width = cv.width; c.height = cv.height;
    try { c.getContext('2d').drawImage(cv, 0, 0); } catch (e) { return null; }
    if (snapEl) snapEl.remove();
    stage.insertBefore(c, cv.nextSibling); snapEl = c;
    return c;
  }
  function fade(c, ms) {
    if (!c) return;
    const done = () => { c.remove(); if (snapEl === c) snapEl = null; };
    if (!c.animate || matchMedia('(prefers-reduced-motion: reduce)').matches) return done();
    c.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ms, easing: 'ease-in-out', fill: 'forwards' }).onfinish = done;
    setTimeout(done, ms + 400);   // страховка, если вкладка не рисует кадры
  }
  // укладка, как у образца: старая плитка «уходит» камень за камнем, новая ложится от переднего края к дому
  function lay(c, ms) {
    if (!c) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return fade(c, 1);
    const g = c.getContext('2d'), W = c.width, H = c.height;
    if (kb.free || stage.classList.contains('crisp')) return fade(c, 700);   // «Сверху», «Крупно» и приближение — растворение
    const sc0 = SCENES.find(x => x.id === st.scene) || SCENES[0], vw = (sc0.views || []).find(v => v.id === st.view), sc = vw || sc0;
    const hy = sc.cam.hy;                              // горизонт в пикселях кадра (кадр = фото)
    const cells = [];
    let y = H, row = 0;
    while (y > hy + 2) {
      const h = Math.max(5, (y - hy) * 0.085);      // в перспективе ряды ближе к дому мельче
      const w = h * 2.1, off = (row % 2) * w / 2;
      const pr = 1 - (y - hy) / (H - hy);           // 0 у переднего края, 1 у дома
      for (let x = -off; x < W; x += w) cells.push([x, y - h, w + 1, h + 1, pr * 0.72 + Math.random() * 0.28]);
      y -= h; row++;
    }
    cells.sort((a, b) => a[4] - b[4]);
    // всё, что выше горизонта (дом, небо), не меняется — убираем сразу
    g.clearRect(0, 0, W, Math.ceil(hy) + 1);
    let i = 0; const t0 = performance.now();
    const tick = now => {
      if (!c.isConnected) return;
      const p = Math.min(1, (now - t0) / ms);
      const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      while (i < cells.length && cells[i][4] <= e) { const q = cells[i++]; g.clearRect(q[0], q[1], q[2], q[3]); }
      if (p < 1) requestAnimationFrame(tick); else { c.remove(); if (snapEl === c) snapEl = null; }
    };
    requestAnimationFrame(tick);
    setTimeout(() => { if (c.isConnected) { c.remove(); if (snapEl === c) snapEl = null; } }, ms + 600);
  }
  function redraw() {
    const c = snap();
    if (!c) stage.classList.add('busy');
    requestAnimationFrame(() => setTimeout(() => { kb.set(design()); stage.classList.remove('busy'); caption(); lay(c, 1100); }, 16));
  }
  const later = fn => Promise.all([sceneReady, texReady]).then(() => setTimeout(fn, 30));

  // ---------- дома ----------
  const hb = $('#kbHouses');
  SCENES.forEach(s => {
    const b = document.createElement('button');
    b.type = 'button'; b.dataset.id = s.id; b.title = s.name; b.setAttribute('aria-label', s.name);
    b.innerHTML = `<img src="${s.thumb}" alt="" loading="lazy">`;
    b.addEventListener('click', () => { st.scene = s.id; if (FREE[st.view]) st.view = 'front'; paintHouses(); paintViews(); loadScene(); });
    hb.appendChild(b);
  });
  const paintHouses = () => hb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === st.scene));
  // ---------- ракурсы: фото дома спереди/слева/справа + «Сверху» и «Крупно» без фото ----------
  const FREE = { top: 'Сверху', close: 'Крупно' };
  // «Сверху» — фото участка с дрона (если есть), иначе схема раскладки; «Крупно» — камни вблизи
  const viewsOf = s => {
    const v = s.views || [], plan = v.find(x => x.id === 'plan');
    return [{ id: 'front', label: 'Спереди' }, ...v.filter(x => x.id !== 'plan'), plan || { id: 'top', label: FREE.top }, { id: 'close', label: FREE.close }];
  };
  const curScene = () => SCENES.find(x => x.id === st.scene) || SCENES[0];
  st.view = q.get('view') || 'front';
  const vb = $('#kbViews');
  function paintViews() {
    const list = viewsOf(curScene());
    if (!list.some(v => v.id === st.view)) st.view = 'front';
    vb.innerHTML = '';
    list.forEach(v => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'chip' + (v.id === st.view ? ' on' : ''); b.textContent = v.label; b.setAttribute('aria-pressed', v.id === st.view);
      b.addEventListener('click', () => { if (st.view === v.id) return; st.view = v.id; paintViews(); loadScene(); });
      vb.appendChild(b);
    });
  }
  // ---------- приближение: колёсико, щипок двумя пальцами, перетаскивание, кнопки +/−, двойной клик — сброс ----------
  const zm = { z: 1, x: 0, y: 0 }, ZMAX = 4;
  const zr = stage.querySelector('.kc-zoom-reset'), hint = stage.querySelector('.kc-zoom-hint');
  if (hint && matchMedia('(pointer: coarse)').matches) hint.textContent = 'Двумя пальцами — приблизить';
  // Пока жест идёт — быстрое растяжение CSS; когда остановились — движок заново рисует видимый участок
  // в полном разрешении экрана (каждый шов чёткий), а фото подгружается в исходном качестве.
  let crisp = null, crispT = 0;            // crisp: {z, x, y} — для какого приближения нарисован холст
  function zApply(anim) {
    const r = stage.getBoundingClientRect();
    zm.x = Math.min(0, Math.max(r.width * (1 - zm.z), zm.x)); zm.y = Math.min(0, Math.max(r.height * (1 - zm.z), zm.y));
    const base = crisp || { z: 1, x: 0, y: 0 }, k = zm.z / base.z;
    stage.style.setProperty('--zt', `translate(${zm.x - base.x * k}px, ${zm.y - base.y * k}px) scale(${k})`);
    stage.classList.toggle('zoomed', zm.z > 1.001); stage.classList.toggle('zanim', !!anim);
    if (zr) zr.hidden = zm.z <= 1.001;
    clearTimeout(crispT); crispT = setTimeout(sharpen, anim ? 320 : 160);
  }
  function sharpen() {
    if (!kb || !stage.classList.contains('ready')) return;
    const r = stage.getBoundingClientRect();
    if (zm.z <= 1.001) {
      if (crisp) { crisp = null; stage.classList.remove('crisp'); kb.setView(null); stage.style.setProperty('--zt', 'none'); }
      return;
    }
    // видимая часть кадра: холст показан как object-fit: cover, object-position 50% 62%
    const { w: W, h: H } = kb.size, s0 = Math.max(r.width / W, r.height / H), ox = (r.width - W * s0) * 0.5, oy = (r.height - H * s0) * 0.62;
    const toImg = (px, py) => [((px - zm.x) / zm.z - ox) / s0, ((py - zm.y) / zm.z - oy) / s0];
    const [x0, y0] = toImg(0, 0), [x1, y1] = toImg(r.width, r.height);
    const dpr = Math.min(2, devicePixelRatio || 1), cw = Math.min(2600, r.width * dpr), ch = cw * r.height / r.width;
    kb.setView([x0, y0, x1 - x0, y1 - y0], cw, ch);
    crisp = { z: zm.z, x: zm.x, y: zm.y };
    stage.classList.add('crisp'); stage.classList.remove('zanim');
    stage.style.setProperty('--zt', 'none');
  }
  function zoomAt(f, cx, cy, anim) {
    const nz = Math.min(ZMAX, Math.max(1, zm.z * f)), k = nz / zm.z;
    zm.x = cx - (cx - zm.x) * k; zm.y = cy - (cy - zm.y) * k; zm.z = nz; zApply(anim);
    if (hint) hint.classList.add('gone');
  }
  const zReset = () => {
    zm.z = 1; zm.x = zm.y = 0; clearTimeout(crispT);
    if (crisp) { crisp = null; stage.classList.remove('crisp'); if (kb) kb.setView(null); }
    zApply(true);
  };
  const local = e => { const r = stage.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  stage.addEventListener('wheel', e => { e.preventDefault(); const [x, y] = local(e); zoomAt(Math.exp(-e.deltaY * 0.0015), x, y, false); }, { passive: false });
  stage.addEventListener('dblclick', e => { if (e.target.closest('button')) return; zm.z > 1.001 ? zReset() : zoomAt(2, ...local(e), true); });
  stage.querySelectorAll('.kc-zoom button').forEach(b => b.addEventListener('click', () => {
    const r = stage.getBoundingClientRect(), d = +b.dataset.z;
    d ? zoomAt(d > 0 ? 1.5 : 1 / 1.5, r.width / 2, r.height / 2, true) : zReset();
  }));
  const ptr = new Map(); let pinch = null, drag = null;
  stage.addEventListener('pointerdown', e => {
    if (e.target.closest('button')) return;
    ptr.set(e.pointerId, local(e));
    if (ptr.size === 2) { const [a, b] = [...ptr.values()]; pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), z: zm.z }; drag = null; }
    else if (zm.z > 1.001) { drag = { p: local(e), x: zm.x, y: zm.y }; stage.setPointerCapture(e.pointerId); }
  });
  stage.addEventListener('pointermove', e => {
    if (!ptr.has(e.pointerId)) return;
    ptr.set(e.pointerId, local(e));
    if (pinch && ptr.size === 2) {
      const [a, b] = [...ptr.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      zoomAt(pinch.z * d / pinch.d / zm.z, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, false);
    } else if (drag) { const p = local(e); zm.x = drag.x + p[0] - drag.p[0]; zm.y = drag.y + p[1] - drag.p[1]; zApply(false); }
  });
  const up = e => { ptr.delete(e.pointerId); if (ptr.size < 2) pinch = null; if (!ptr.size) drag = null; };
  stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', up);
  addEventListener('resize', () => zApply(false));

  let loadN = 0;
  async function loadScene() {
    zReset();
    const n = ++loadN, c = snap();
    const slow = setTimeout(() => stage.classList.add('busy'), c ? 500 : 0);
    const base = curScene();
    stage.classList.toggle('free', !!FREE[st.view]);
    if (FREE[st.view]) {
      await texReady;
      if (n !== loadN) { clearTimeout(slow); return; }
      kb.setFree(st.view); kb.set(design());
      clearTimeout(slow);
      stage.classList.add('ready'); stage.classList.remove('busy');
      fade(c, 500); caption(); sceneDone();
      return;
    }
    const vw = (base.views || []).find(v => v.id === st.view);
    const s = vw ? { ...base, ...vw, id: base.id, name: base.name } : base;
    await kb.setScene(JSON.parse(JSON.stringify(s)));
    if (n !== loadN) { clearTimeout(slow); return; }   // пока грузилось, выбрали другой дом
    kb.set(design());
    if (q.get('calib')) kb.calib(true);
    clearTimeout(slow);
    stage.classList.add('ready'); stage.classList.remove('busy');
    fade(c, 600);
    caption(); sceneDone();
    if (vw && vw.zoom) {   // вид сверху: сразу приближаем к площадке, чтобы были видны камни
      const r = stage.getBoundingClientRect(), { w: W, h: H } = kb.size, s0 = Math.max(r.width / W, r.height / H);
      const ox = (r.width - W * s0) * 0.5, oy = (r.height - H * s0) * 0.62, f = vw.focus || [0.5, 0.6];
      setTimeout(() => {   // центр площадки — в центр окна
        if (n !== loadN) return;
        zm.z = vw.zoom; zm.x = r.width / 2 - (ox + f[0] * W * s0) * zm.z; zm.y = r.height / 2 - (oy + f[1] * H * s0) * zm.z;
        if (hint) hint.classList.add('gone'); zApply(true);
      }, 250);
    }
  }
  // стрелки на картинке, свайп и клавиши ← →
  function step(d) {
    const i = SCENES.findIndex(x => x.id === st.scene);
    st.scene = SCENES[(i + d + SCENES.length) % SCENES.length].id;
    if (FREE[st.view]) st.view = 'front';
    paintHouses(); paintViews(); loadScene();
  }
  stage.insertAdjacentHTML('beforeend', '<button class="kc-nav kc-prev" type="button" aria-label="Предыдущий дом"><svg class="ic"><use href="#i-chev"/></svg></button><button class="kc-nav kc-next" type="button" aria-label="Следующий дом"><svg class="ic"><use href="#i-chev"/></svg></button>');
  stage.querySelector('.kc-prev').addEventListener('click', () => step(-1));
  stage.querySelector('.kc-next').addEventListener('click', () => step(1));
  let sx = null, sy = 0;
  stage.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (sx === null) return;
    if (zm.z > 1.001 || e.touches.length) { sx = null; return; }   // при приближении палец двигает картинку, а не листает дома
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  });
  document.addEventListener('keydown', e => {
    if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || document.querySelector('.modal.open, .vis-modal.open')) return;
    if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1);
  });

  // ---------- формы: камни в перспективе ----------
  const fb = $('#kbForms');
  FORMS.forEach(p => {
    const b = document.createElement('button');
    b.type = 'button'; b.dataset.id = p.id; b.title = p.name;
    b.innerHTML = `<img alt=""><span>${p.form}</span>`;
    b.addEventListener('click', () => { st.id = p.id; st.pattern = null; paintAll(); redraw(); colorsFor = ''; paintColors(); });
    fb.appendChild(b);
  });
  later(() => {
    let i = 0;
    const next = () => {
      const b = fb.children[i++]; if (!b) return;
      const p = SP.byId(b.dataset.id);
      const big = ['antara', 'pryam', 'origami', 'triada', 'domino'].includes(p.model);
      if (window.PROD_PHOTOS && PROD_PHOTOS[p.id]) { b.querySelector('img').src = window.UI.imgOf(p).replace('img/products/', 'img/products/thumb/'); b.classList.add('photo'); setTimeout(next, 0); return; }   // фото изделия — как в каталоге
      b.querySelector('img').src = Paving.stones({ form: p.model, pattern: p.patterns[0], ...SP.look('grey'), surface: 'smooth', radius: big ? 0.36 : 0.22 }, 240);
      setTimeout(next, 0);
    };
    next();
  });
  document.querySelectorAll('.kc-arrow').forEach(a => a.addEventListener('click', () => fb.scrollBy({ left: +a.dataset.dir * fb.clientWidth * 0.8 })));
  const paintForms = () => { fb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === st.id)); const on = fb.querySelector('.on'); if (on) on.scrollIntoView({ block: 'nearest', inline: 'nearest' }); };

  // ---------- цвета: квадраты раскладки выбранной формы ----------
  const cb = $('#kbColors');
  let colorsFor = '';
  function paintColors() {
    const p = prod(), list = SP.colorsOf(p);
    if (colorsFor !== p.id) {
      colorsFor = p.id; cb.innerHTML = '';
      list.forEach(c => {
        const b = document.createElement('button');
        b.type = 'button'; b.dataset.id = c.id; b.dataset.name = c.name; b.title = c.name; b.setAttribute('aria-label', c.name);
        b.innerHTML = '<img alt="">';
        b.addEventListener('click', () => { st.color = c.id; paintAll(); redraw(); });
        cb.appendChild(b);
      });
      const id = p.id;
      later(() => {
        let i = 0;
        const d0 = design();
        const next = () => { const b = cb.children[i++]; if (!b || colorsFor !== id) return; b.querySelector('img').src = Paving.swatch({ ...d0, ...SP.look(b.dataset.id), surface: 'smooth' }, 150, 0.7); setTimeout(next, 0); };
        next();
      });
    }
    cb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === st.color));
  }
  function chips(host, opts, active, onPick) {
    host.innerHTML = '';
    opts.forEach(([id, label]) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'chip' + (id === active ? ' on' : ''); b.textContent = label; b.setAttribute('aria-pressed', id === active);
      b.addEventListener('click', () => onPick(id));
      host.appendChild(b);
    });
  }
  function paintAll() {
    design();
    const p = prod();
    paintHouses(); paintForms(); paintColors();
    $('#kbPatWrap').hidden = p.patterns.length < 2;
    chips($('#kbPatterns'), p.patterns.map(k => [k, SP.PATTERNS[k]]), st.pattern, id => { st.pattern = id; paintAll(); redraw(); });
    chips($('#kbSurfaces'), SP.surfacesOf(p).map(k => [k, SP.SURFACES[k]]), st.surface, id => { st.surface = id; paintAll(); redraw(); });
    $('#kbSurfaces').closest('.kc-block').hidden = SP.surfacesOf(p).length < 2;
    price();
  }

  // ---------- название, цена «от–до», расчёт ----------
  const area = $('#kbArea');
  function range(p) {
    if (p.onRequest) return null;
    const v = [];
    for (const h of SP.heightsOf(p)) for (const s of SP.surfacesOf(p, h)) v.push(SP.priceOf(p, h, s, st.color));
    return [Math.min(...v), Math.max(...v)];
  }
  function price() {
    const p = prod(), h = SP.heightsOf(p)[0], pr = SP.priceOf(p, h, st.surface, st.color), rg = range(p);
    const a = Math.max(1, +area.value || 1), qty = Math.ceil(a * ($('#kbReserve').checked ? 1.05 : 1));
    $('#kbProd').textContent = `${p.name} «${SP.colorById(st.color).name}»`;
    $('#kbProdSub').textContent = rg ? (rg[0] === rg[1] ? `${SP.money(rg[0])} ₽/м²` : `от ${SP.money(rg[0])} ₽  до ${SP.money(rg[1])} ₽ за м²`) : 'Цена — по запросу';
    $('#kbTotal').textContent = p.onRequest ? 'по запросу' : SP.money(pr * qty) + ' ₽';
    $('#kbCart').hidden = !!p.onRequest;
    $('#kbCard').href = `product.html?id=${p.id}&color=${st.color}&surface=${st.surface}`;
    $('#visSelf').href = `primerka.html?id=${p.id}&color=${st.color}&surface=${st.surface}&pattern=${st.pattern}`;
    const on = fav.has(p.id), f = $('#kbFav');
    f.classList.toggle('on', on); f.dataset.fav = p.id; f.setAttribute('aria-pressed', on);
    return { p, h, pr, qty };
  }
  function caption() {
    const s = SCENES.find(x => x.id === st.scene), head = st.view === 'top' ? 'Вид сверху, схема раскладки' : st.view === 'close' ? 'Плитка крупно' : (s ? s.name : '');
    $('#kbCap').textContent = `${head}: ${prod().name}, ${SP.PATTERNS[st.pattern] ? SP.PATTERNS[st.pattern].toLowerCase() + ', ' : ''}${SP.colorById(st.color).name.toLowerCase()}. Плитка нарисована по фото поверхности с сайта завода; оттенок на экране может отличаться.`;
  }
  area.addEventListener('input', price);
  $('#kbReserve').addEventListener('change', price);
  $('#kbMinus').addEventListener('click', () => { area.value = Math.max(1, (+area.value || 1) - 5); price(); });
  $('#kbCart').addEventListener('click', () => {
    const { p, h, pr, qty } = price();
    cart.add({ id: p.id, h, s: st.surface, c: st.color, qty, price: pr });
    toast('Добавлено в корзину: ' + qty + ' м². <a href="cart.html">Оформить</a>');
  });
  $('#kbLead').addEventListener('click', () => {
    const { p, h, pr, qty } = price();
    openModal({ title: 'Отправить расчёт', text: 'Менеджер проверит наличие, посчитает доставку и перезвонит.', button: 'Отправить расчёт', comment: true,
      summary: `${p.name}, ${SP.PATTERNS[st.pattern] ? SP.PATTERNS[st.pattern].toLowerCase() + ', ' : ''}${SP.colorById(st.color).name.toLowerCase()}${h ? ', ' + SP.SURFACES[st.surface].toLowerCase() + ' слой, ' + h + ' мм' : ''}\n${p.onRequest ? qty + ' м², цену рассчитает менеджер' : qty + ' м² × ' + SP.money(pr) + ' ₽ = ' + SP.money(pr * qty) + ' ₽'}\nКартинка двора будет приложена к заявке.` });
  });
  $('#kbSave').addEventListener('click', () => { const a = document.createElement('a'); a.href = kb.snapshot(1800); a.download = 'dvor-' + st.id + '.jpg'; a.click(); });

  // ---------- «Посмотреть на моём участке»: окно с видео и заявкой ----------
  const vm = $('#visModal');
  $('#toPhoto').addEventListener('click', () => { vm.classList.add('on'); const v = vm.querySelector('video'); if (v) v.play().catch(() => {}); });
  vm.addEventListener('click', e => { if (e.target === vm || e.target.closest('[data-close-vis]')) vm.classList.remove('on'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') vm.classList.remove('on'); });

  paintAll();
  paintViews();
  loadScene();
})();
