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
    const sc = SCENES.find(x => x.id === st.scene) || SCENES[0];
    const k = H / 894, hy = sc.cam.hy * k;            // горизонт в пикселях кадра
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
    b.addEventListener('click', () => { st.scene = s.id; paintHouses(); loadScene(); });
    hb.appendChild(b);
  });
  const paintHouses = () => hb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === st.scene));
  let loadN = 0;
  async function loadScene() {
    const n = ++loadN, c = snap();
    const slow = setTimeout(() => stage.classList.add('busy'), c ? 500 : 0);
    const s = SCENES.find(x => x.id === st.scene) || SCENES[0];
    await kb.setScene(JSON.parse(JSON.stringify(s)));
    if (n !== loadN) { clearTimeout(slow); return; }   // пока грузилось, выбрали другой дом
    kb.set(design());
    if (q.get('calib')) kb.calib(true);
    clearTimeout(slow);
    stage.classList.add('ready'); stage.classList.remove('busy');
    fade(c, 600);
    caption(); sceneDone();
  }
  // стрелки на картинке, свайп и клавиши ← →
  function step(d) {
    const i = SCENES.findIndex(x => x.id === st.scene);
    st.scene = SCENES[(i + d + SCENES.length) % SCENES.length].id;
    paintHouses(); loadScene();
  }
  stage.insertAdjacentHTML('beforeend', '<button class="kc-nav kc-prev" type="button" aria-label="Предыдущий дом"><svg class="ic"><use href="#i-chev"/></svg></button><button class="kc-nav kc-next" type="button" aria-label="Следующий дом"><svg class="ic"><use href="#i-chev"/></svg></button>');
  stage.querySelector('.kc-prev').addEventListener('click', () => step(-1));
  stage.querySelector('.kc-next').addEventListener('click', () => step(1));
  let sx = null, sy = 0;
  stage.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (sx === null) return;
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
    const s = SCENES.find(x => x.id === st.scene);
    $('#kbCap').textContent = `${s ? s.name : ''}: ${prod().name}, ${SP.PATTERNS[st.pattern] ? SP.PATTERNS[st.pattern].toLowerCase() + ', ' : ''}${SP.colorById(st.color).name.toLowerCase()}. Плитка нарисована по фото поверхности с сайта завода; оттенок на экране может отличаться.`;
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
  loadScene();
})();
