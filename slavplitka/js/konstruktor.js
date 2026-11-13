// Конструктор двора: фото дома + выбранная плитка в перспективе, цена по прайсу
(function () {
  'use strict';
  const { $, cart, fav, toast, openModal } = window.UI, SP = window.SP;
  const q = new URLSearchParams(location.search);
  const FORMS = SP.PRODUCTS.filter(p => p.cat === 'plitka' && p.patterns && Paving.layouts[p.model]);
  const st = {
    scene: q.get('house') || SCENES[0].id,
    id: FORMS.some(p => p.id === q.get('id')) ? q.get('id') : 'novy',
    color: q.get('color') || 'malva', surface: q.get('surface') || 'smooth', pattern: q.get('pattern') || null,
  };
  const prod = () => SP.byId(st.id);
  const texReady = window.Paving ? Paving.preload(SP.COLORS.map(c => c.tex)) : Promise.resolve();
  let sceneDone; const sceneReady = new Promise(r => { sceneDone = r; });
  const stage = $('#kbStage');
  if (!Paving.hasWebGL()) { stage.querySelector('.loading span').textContent = 'Браузер не поддерживает WebGL — откройте страницу в свежем Chrome, Яндекс Браузере или Safari.'; return; }
  const kb = Paving.createConstructor($('#kbCanvas'), { onReady: () => stage.classList.add('ready') });
  window.__kb = kb;
  const design = () => {
    const p = prod();
    if (!st.pattern || !p.patterns.includes(st.pattern)) st.pattern = p.patterns[0];
    if (!SP.surfacesOf(p).includes(st.surface)) st.surface = 'smooth';
    return { form: p.model, pattern: st.pattern, ...SP.look(st.color), surface: st.surface };
  };
  function busy(fn) { stage.classList.add('busy'); requestAnimationFrame(() => setTimeout(() => { fn(); stage.classList.remove('busy'); }, 16)); }

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
    const { w, h } = await kb.setScene(JSON.parse(JSON.stringify(s)));
    stage.style.aspectRatio = w + ' / ' + h;
    kb.set(design());
    if (q.get('calib')) kb.calib(true);
    stage.classList.remove('busy');
    caption();
    sceneDone();
  }

  // ---------- формы ----------
  const fb = $('#kbForms');
  function paintForms(first) {
    if (first) {
      FORMS.forEach(p => {
        const b = document.createElement('button');
        b.type = 'button'; b.dataset.id = p.id; b.title = p.name;
        b.innerHTML = `<img alt=""><span>${p.form}</span>`;
        b.addEventListener('click', () => { st.id = p.id; st.pattern = null; paintAll(); busy(() => kb.set(design())); });
        fb.appendChild(b);
      });
      // образцы рисуем по очереди, не блокируя страницу
      let i = 0;
      const next = () => {
        const b = fb.children[i++]; if (!b) return;
        const p = SP.byId(b.dataset.id);
        b.querySelector('img').src = Paving.swatch({ form: p.model, pattern: p.patterns[0], ...SP.look('grey'), surface: 'smooth' }, 150, p.model === 'antara' || p.model === 'pryam' ? 1.3 : 0.8);
        setTimeout(next, 0);
      };
      Promise.all([sceneReady, texReady]).then(() => setTimeout(next, 50));
    }
    fb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === st.id));
    $('#kbFormName').textContent = prod().form;
  }
  // ---------- цвета ----------
  const cb = $('#kbColors');
  let colorsFor = '';
  function paintColors() {
    const p = prod(), list = SP.colorsOf(p);
    if (colorsFor !== p.id) {
      colorsFor = p.id;
      cb.innerHTML = '';
      list.forEach(c => {
        const b = document.createElement('button');
        b.type = 'button'; b.dataset.id = c.id; b.dataset.name = c.name; b.title = c.name; b.setAttribute('aria-label', c.name);
        b.innerHTML = '<img alt="">';
        b.addEventListener('click', () => { st.color = c.id; paintAll(); busy(() => kb.set(design())); });
        cb.appendChild(b);
      });
      let i = 0;
      const d0 = design();
      const next = () => {
        const b = cb.children[i++]; if (!b || colorsFor !== p.id) return;
        b.querySelector('img').src = Paving.swatch({ ...d0, ...SP.look(b.dataset.id), surface: 'smooth' }, 110, 0.6);
        setTimeout(next, 0);
      };
      Promise.all([sceneReady, texReady]).then(() => setTimeout(next, 30));
    }
    if (!list.some(c => c.id === st.color)) st.color = list[0].id;
    cb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === st.color));
    $('#kbColorName').textContent = SP.colorById(st.color).name;
  }
  function chips(host, opts, active, onPick) {
    host.innerHTML = '';
    opts.forEach(([id, label]) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'chip' + (id === active ? ' on' : ''); b.textContent = label;
      b.setAttribute('aria-pressed', id === active);
      b.addEventListener('click', () => onPick(id));
      host.appendChild(b);
    });
  }
  function paintAll(first) {
    design();
    const p = prod();
    paintHouses(); paintForms(first); paintColors();
    $('#kbPatWrap').hidden = p.patterns.length < 2;
    chips($('#kbPatterns'), p.patterns.map(k => [k, SP.PATTERNS[k]]), st.pattern, id => { st.pattern = id; paintAll(); busy(() => kb.set(design())); });
    chips($('#kbSurfaces'), SP.surfacesOf(p).map(k => [k, SP.SURFACES[k]]), st.surface, id => { st.surface = id; paintAll(); busy(() => kb.set(design())); });
    price();
  }

  // ---------- цена ----------
  const area = $('#kbArea');
  function price() {
    const p = prod(), h = SP.heightsOf(p)[0], pr = SP.priceOf(p, h, st.surface, st.color);
    const a = Math.max(1, +area.value || 1), qty = Math.ceil(a * ($('#kbReserve').checked ? 1.05 : 1));
    $('#kbProd').textContent = `${p.name} — ${SP.colorById(st.color).name.toLowerCase()}`;
    $('#kbProdSub').textContent = `${SP.SURFACES[st.surface]} лицевой слой · толщина ${h} мм · ${SP.money(pr)} ₽/м²`;
    $('#kbTotal').textContent = SP.money(pr * qty) + ' ₽';
    $('#kbCard').href = `product.html?id=${p.id}&color=${st.color}&surface=${st.surface}`;
    $('#toPhoto').href = `primerka.html?id=${p.id}&color=${st.color}&surface=${st.surface}&pattern=${st.pattern}`;
    const on = fav.has(p.id), fb2 = $('#kbFav');
    fb2.classList.toggle('on', on); fb2.dataset.fav = p.id; fb2.setAttribute('aria-pressed', on);
    caption();
    return { p, h, pr, qty };
  }
  function caption() {
    const s = SCENES.find(x => x.id === st.scene);
    $('#kbCap').textContent = `${s ? s.name : ''} · ${prod().name}, ${SP.PATTERNS[st.pattern] ? SP.PATTERNS[st.pattern].toLowerCase() + ', ' : ''}${SP.colorById(st.color).name.toLowerCase()}. Изображение примерное: оттенок зависит от освещения и монитора.`;
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
      summary: `${p.name}, ${SP.PATTERNS[st.pattern] ? SP.PATTERNS[st.pattern].toLowerCase() + ', ' : ''}${SP.colorById(st.color).name.toLowerCase()}, ${SP.SURFACES[st.surface].toLowerCase()} слой, ${h} мм\n${qty} м² × ${SP.money(pr)} ₽ = ${SP.money(pr * qty)} ₽\nКартинка двора будет приложена к заявке.` });
  });
  $('#kbSave').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = kb.snapshot(1800); a.download = 'dvor-' + st.id + '.jpg'; a.click();
  });

  paintAll(true);
  loadScene();
})();
