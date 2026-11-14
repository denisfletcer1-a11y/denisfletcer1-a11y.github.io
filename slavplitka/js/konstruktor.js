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
  function redraw() { stage.classList.add('busy'); requestAnimationFrame(() => setTimeout(() => { kb.set(design()); stage.classList.remove('busy'); caption(); }, 16)); }
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
  async function loadScene() {
    stage.classList.add('busy');
    const s = SCENES.find(x => x.id === st.scene) || SCENES[0];
    await kb.setScene(JSON.parse(JSON.stringify(s)));
    kb.set(design());
    if (q.get('calib')) kb.calib(true);
    stage.classList.add('ready'); stage.classList.remove('busy');
    caption(); sceneDone();
  }

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
