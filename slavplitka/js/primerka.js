// Примерка на фото: загрузка, 4 точки участка, выбор плитки, расчёт и заявка
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

  let img = null, pts = null;

  // ---------- точки ----------
  const svg = $('#prHandles'), wrap = $('#prWrap');
  function handles() {
    const W = img.naturalWidth, H = img.naturalHeight;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const r = Math.max(W, H) * 0.014;
    svg.innerHTML = pts.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" data-i="${i}"/>`).join('');
  }
  let drag = -1;
  const toImg = e => { const b = svg.getBoundingClientRect(); return [(e.clientX - b.left) / b.width * img.naturalWidth, (e.clientY - b.top) / b.height * img.naturalHeight]; };
  svg.addEventListener('pointerdown', e => { const c = e.target.closest('circle'); if (!c) return; drag = +c.dataset.i; svg.setPointerCapture(e.pointerId); e.preventDefault(); $('#prHelp').classList.remove('on'); });
  svg.addEventListener('pointermove', e => {
    if (drag < 0) return;
    const [x, y] = toImg(e);
    pts[drag] = [Math.max(0, Math.min(img.naturalWidth, x)), Math.max(0, Math.min(img.naturalHeight, y))];
    handles(); fit.setQuad(pts.map(p => p.slice()), false);
  });
  const end = () => { if (drag < 0) return; drag = -1; fit.setQuad(pts.map(p => p.slice()), true); depth(); };
  svg.addEventListener('pointerup', end); svg.addEventListener('pointercancel', end);

  // ---------- загрузка ----------
  function start(im, p0) {
    img = im;
    const W = im.naturalWidth, H = im.naturalHeight;
    pts = p0 || [[W * 0.08, H * 0.95], [W * 0.92, H * 0.95], [W * 0.72, H * 0.62], [W * 0.28, H * 0.62]];
    $('#prDrop').hidden = true; wrap.hidden = false; $('#prTips').hidden = false;
    wrap.style.aspectRatio = W + ' / ' + H;
    fit.setImage(im, pts.map(p => p.slice()));
    fit.set(design());
    handles(); depth();
    $('#prHelp').classList.add('on');
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

  // ---------- выбор плитки ----------
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
    $('#prSub').textContent = `${SP.money(SP.priceOf(p, h, st.surface, st.color))} ₽/м² · толщина ${h} мм`;
  }
  const apply = () => { if (img) fit.set(design()); };
  const wIn = $('#prWidth');
  function depth() {
    $('#prWidthOut').textContent = String(wIn.value).replace('.', ',') + ' м';
    if (!img) return;
    const [W, D] = fit.dims();
    $('#prDepth').textContent = `≈ ${D.toFixed(1).replace('.', ',')} м, площадь ≈ ${Math.round(W * D)} м²`;
  }
  wIn.addEventListener('input', () => { fit.setWidth(+wIn.value); depth(); });
  $('#prSave').addEventListener('click', () => { if (!img) return toast('Сначала загрузите фото'); const a = document.createElement('a'); a.href = fit.snapshot(1800); a.download = 'plitka-na-foto.jpg'; a.click(); });
  $('#prLead').addEventListener('click', () => {
    const p = prod(), h = SP.heightsOf(p)[0], pr = SP.priceOf(p, h, st.surface, st.color);
    const area = img ? Math.round(fit.dims()[0] * fit.dims()[1]) : 0;
    openModal({ title: 'Отправить фото с плиткой', text: 'Менеджер посмотрит фото, уточнит размеры и пришлёт точный расчёт.', button: 'Отправить', comment: true,
      summary: `${p.name}, ${SP.PATTERNS[st.pattern].toLowerCase()}, ${SP.colorById(st.color).name.toLowerCase()}, ${h} мм\n${area ? 'Участок ≈ ' + area + ' м² → ≈ ' + SP.money(pr * Math.ceil(area * 1.05)) + ' ₽ по прайсу\n' : ''}Фото с плиткой будет приложено к заявке.` });
  });
  paint();
})();
