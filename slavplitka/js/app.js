(() => {
  'use strict';

  // Цены из прайса завода от 01.06.2025, ₽ за м²: серый, красный/коричневый/чёрный, жёлтый/оранжевый, белый, колормикс
  const PRICE_STD_40 = { smooth: [700, 800, 850, 900, 1000], granite: [800, 900, 950, 1000, 1100], marble: [1300, 1400] };
  const PRICE_STD_60 = { smooth: [800, 900, 950, 1000, 1100], granite: [900, 1000, 1050, 1100, 1200], marble: [1400, 1500] };
  const FORMS = {
    bruschatka: { name: 'Брусчатка 200×100', patterns: { run: 'Вразбежку', herring: 'Ёлочка', herring45: 'Ёлочка 45°', basket: 'Плетёнка' }, prices: { 40: PRICE_STD_40, 60: PRICE_STD_60 } },
    kvadrat: { name: 'Квадрат 200×200 и 100×100', patterns: { grid: 'Сетка', diag: 'По диагонали', mix: 'Два размера' }, prices: { 40: PRICE_STD_40, 60: PRICE_STD_60 } },
    stary: {
      name: 'Старый город', patterns: { rows: 'Ряды', across: 'Поперёк', diag: 'По диагонали' },
      prices: {
        40: { smooth: [700, 800, 850, 900, 1050], granite: [800, 900, 950, 1000, 1150], marble: [1300, 1400] },
        60: { smooth: [800, 900, 950, 1000, 1150], granite: [900, 1000, 1050, 1100, 1250], marble: [1400, 1500] },
      },
    },
    novy: {
      name: 'Новый город', patterns: { rows: 'Ряды', across: 'Поперёк', diag: 'По диагонали' },
      prices: {
        40: { smooth: [700, 800, 850, 950, 1100], granite: [800, 900, 950, 1000, 1200], marble: [1300, 1400] },
        60: { smooth: [800, 900, 950, 1000, 1200], granite: [900, 1000, 1050, 1100, 1300], marble: [1400, 1500] },
      },
    },
    romb: { name: 'Ромб 141×141', patterns: { cubes: 'Объёмные кубы', random: 'Вразброс' }, prices: { 40: { smooth: [700, 800, 850, 900, 1050], granite: [800, 900, 950, 1000, 1150], marble: [1300, 1400] } } },
  };
  const COLORS = [
    { id: 'grey', name: 'Серый', hex: ['#8e8e8a'], col: 0 },
    { id: 'red', name: 'Красный', hex: ['#94453a'], col: 1 },
    { id: 'brown', name: 'Коричневый', hex: ['#6b4733'], col: 1 },
    { id: 'black', name: 'Чёрный', hex: ['#37373c'], col: 1 },
    { id: 'yellow', name: 'Жёлтый', hex: ['#c7a23f'], col: 2 },
    { id: 'orange', name: 'Оранжевый', hex: ['#c47636'], col: 2 },
    { id: 'white', name: 'Белый', hex: ['#d9d6cc'], col: 3 },
    { id: 'mix1', name: 'Колормикс «Осень»', hex: ['#8f5238', '#ab7c46', '#6b4a38', '#9c6a40'], col: 4 },
    { id: 'mix2', name: 'Колормикс «Туман»', hex: ['#b5ada0', '#8e8a82', '#cbc4b6', '#6f6c67'], col: 4 },
    { id: 'mix3', name: 'Колормикс «Кубань»', hex: ['#94453a', '#c7a23f', '#8e8e8a', '#37373c'], col: 4 },
  ];
  const SURFACES = { smooth: 'Гладкий', granite: 'Гранит', marble: 'Мрамор' };
  const ITEMS = [
    { group: 'Тротуарная плитка' },
    { id: 'bruschatka', name: 'Брусчатка', text: 'Классика для дорожек, дворов и парковок.', specs: [['Размер', '200×100 мм'], ['Высота', '40, 60, 80 мм'], ['Цена', 'от 700 ₽/м²']] },
    { id: 'kvadrat', name: 'Квадрат', text: 'Строгая геометрия. Два размера можно сочетать в одном рисунке.', specs: [['Размер', '200×200, 100×100 мм'], ['Высота', '40, 60 мм'], ['Цена', 'от 700 ₽/м²']] },
    { id: 'stary', name: 'Старый город', text: 'Комплект из трёх размеров: рисунок выглядит как старинная мостовая.', specs: [['Размер', '120×90, 120×120, 180×120 мм'], ['Высота', '40, 60 мм'], ['Цена', 'от 700 ₽/м²']] },
    { id: 'novy', name: 'Новый город', text: 'Три размера в одном модуле для современных дворов.', specs: [['Размер', '210×140, 140×140, 70×140 мм'], ['Высота', '40, 60 мм'], ['Цена', 'от 700 ₽/м²']] },
    { id: 'myunhen', name: 'Мюнхен', text: 'Крупноформатный набор из четырёх размеров.', specs: [['Размер', '278×208, 138×208, 138×138, 68×138 мм'], ['Высота', '40, 60 мм'], ['Цена', 'от 700 ₽/м²']] },
    { id: 'antara', name: 'Антара', text: 'Самый крупный формат: четыре длины при ширине 298 мм.', specs: [['Размер', '148, 223, 298, 448 × 298 мм'], ['Высота', '60 мм'], ['Цена', 'от 850 ₽/м²']] },
    { id: 'brook', name: 'Римский брук', text: 'Клиновидные камни для круговых и веерных рисунков.', specs: [['Размер', '120×90, 100×80, 90×60 мм'], ['Высота', '40 мм'], ['Цена', 'от 700 ₽/м²']] },
    { id: 'romb', name: 'Ромб', text: 'Три цвета складываются в объёмный рисунок из кубов.', specs: [['Размер', '141×141 мм'], ['Высота', '40 мм'], ['Цена', 'от 700 ₽/м²']] },
    { id: 'trilistnik', name: 'Трилистник', text: 'Фигурный камень с плотным сцеплением.', specs: [['Размер', '197×197×197 мм'], ['Высота', '40 мм'], ['Цена', 'от 700 ₽/м²']] },
    { group: 'Бордюры и блоки' },
    { id: 'bordyur', name: 'Бордюр тротуарный', text: 'Удерживает мощение и аккуратно отделяет его от газона.', specs: [['Назначение', 'дорожки и дворы'], ['Форма', 'демо-модель']] },
    { id: 'palisad', name: 'Бордюр Палисад', text: 'Столбики для ограждения клумб и перепадов высот.', specs: [['Назначение', 'клумбы и газоны'], ['Форма', 'демо-модель']] },
    { id: 'gazon', name: 'Газонная решётка', text: 'Парковка на газоне: трава растёт, а колёса не продавливают грунт.', specs: [['Назначение', 'газон и парковка'], ['Форма', 'демо-модель']] },
    { id: 'taktil', name: 'Тактильная плитка', text: 'Навигация для маломобильных пешеходов на тротуарах и у входов.', specs: [['Назначение', 'доступная среда'], ['Форма', 'демо-модель']] },
    { id: 'blok', name: 'Стеновой блок', text: 'Блоки для стен и ограждений от завода-изготовителя.', specs: [['Назначение', 'стены и заборы'], ['Форма', 'демо-модель']] },
  ];

  const $ = id => document.getElementById(id);
  const money = n => new Intl.NumberFormat('ru-RU').format(Math.round(n)).replace(/\s/g, ' ');
  const state = { form: 'stary', pattern: 'rows', color: 'mix1', surface: 'smooth', height: 60, curb: true, area: 80 };
  const colorOf = id => COLORS.find(c => c.id === id);
  let yard = null, hero = null;

  function chips(host, options, active, onPick) {
    host.innerHTML = '';
    Object.entries(options).forEach(([id, label]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (String(id) === String(active) ? ' on' : '');
      b.textContent = label;
      b.setAttribute('aria-pressed', String(id) === String(active));
      b.addEventListener('click', () => onPick(id));
      host.appendChild(b);
    });
  }
  function swatchBg(c) {
    if (c.hex.length === 1) return c.hex[0];
    const step = 100 / c.hex.length;
    return 'conic-gradient(' + c.hex.map((h, i) => `${h} ${i * step}% ${(i + 1) * step}%`).join(',') + ')';
  }
  function swatches(host, active, onPick, list = COLORS) {
    host.innerHTML = '';
    list.forEach(c => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sw' + (c.id === active ? ' on' : '');
      b.style.background = swatchBg(c);
      b.title = c.name;
      b.setAttribute('aria-label', c.name);
      b.setAttribute('aria-pressed', c.id === active);
      b.addEventListener('click', () => onPick(c.id));
      host.appendChild(b);
    });
  }
  function priceNow() {
    const f = FORMS[state.form], p = f.prices[state.height], c = colorOf(state.color);
    if (state.surface === 'marble') return p.marble[c.col === 4 ? 1 : 0];
    return p[state.surface][c.col];
  }
  function renderPanel() {
    const f = FORMS[state.form];
    chips($('forms'), Object.fromEntries(Object.entries(FORMS).map(([k, v]) => [k, v.name])), state.form, id => {
      state.form = id;
      state.pattern = Object.keys(FORMS[id].patterns)[0];
      if (!FORMS[id].prices[state.height]) state.height = 40;
      apply();
    });
    chips($('patterns'), f.patterns, state.pattern, id => { state.pattern = id; apply(); });
    chips($('surfaces'), SURFACES, state.surface, id => { state.surface = id; apply(); });
    chips($('heights'), Object.fromEntries(Object.keys(f.prices).map(h => [h, h + ' мм'])), state.height, id => { state.height = +id; apply(); });
    swatches($('colors'), state.color, id => { state.color = id; apply(); });
    $('colorName').textContent = colorOf(state.color).name;
    const price = priceNow(), area = Math.ceil(state.area * 1.05);
    $('areaOut').textContent = state.area;
    $('rPrice').textContent = money(price);
    $('rArea').textContent = area;
    $('rTotal').textContent = money(price * area) + ' ₽';
  }
  function apply() {
    renderPanel();
    if (yard) yard.set({ form: state.form, pattern: state.pattern, colors: colorOf(state.color).hex, surface: state.surface, curb: state.curb });
  }
  $('area').addEventListener('input', e => { state.area = +e.target.value; renderPanel(); });
  $('curb').addEventListener('change', e => { state.curb = e.target.checked; apply(); });
  $('toLead').addEventListener('click', () => {
    const c = colorOf(state.color), f = FORMS[state.form];
    $('leadTask').value = `${f.name}, ${f.patterns[state.pattern].toLowerCase()}, ${c.name.toLowerCase()}, лицевой слой: ${SURFACES[state.surface].toLowerCase()}, высота ${state.height} мм, площадь ${state.area} м²${state.curb ? ', с бордюром' : ''}. Расчёт конструктора: ${$('rTotal').textContent}.`;
  });

  // ---------- 3D ----------
  function start3D() {
    if (!window.Yard3D) return;
    const wide = () => innerWidth > 980 && innerWidth / innerHeight > 1.15;
    try {
      hero = Yard3D.mountYard($('heroCanvas'), { auto: true, az: 0.42, pol: 1.03, dist: 28, shift: wide() ? 0.42 : 0, design: { form: 'stary', pattern: 'rows', colors: COLORS[7].hex, curb: true } });
      addEventListener('resize', () => hero.setShift(wide() ? 0.42 : 0));
    } catch (e) { document.body.classList.add('no-3d'); return; }
    try { Yard3D.mountLogo($('logoCanvas'), { period: 9 }); $('logo3d').classList.add('ready'); } catch (e) { /* остаётся картинка */ }
    new IntersectionObserver((es, io) => { if (es[0].isIntersecting) { io.disconnect(); Yard3D.mountLogo($('logoBig'), { period: 10 }); } }, { rootMargin: '200px' }).observe($('logoBig'));
    let built = false;
    new IntersectionObserver((es, io) => {
      if (!es[0].isIntersecting || built) return;
      built = true; io.disconnect();
      yard = Yard3D.mountYard($('yardCanvas'), { az: 0.35, pol: 0.92, dist: 20, zoom: 0.72, design: { form: state.form, pattern: state.pattern, colors: colorOf(state.color).hex, surface: state.surface, curb: state.curb } });
    }, { rootMargin: '300px' }).observe($('yardCanvas'));
    $('zoomIn').addEventListener('click', () => yard && yard.zoomBy(0.72));
    $('zoomOut').addEventListener('click', () => yard && yard.zoomBy(1 / 0.72));
    let item = null;
    new IntersectionObserver((es, io) => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      item = Yard3D.mountItem($('itemCanvas'), { item: currentItem, colors: colorOf(itemColor).hex });
      item.set({ surface: itemSurface });
    }, { rootMargin: '300px' }).observe($('itemCanvas'));
    pickItem.mount = () => item;
  }

  // ---------- изделия ----------
  let itemColor = 'orange', itemSurface = 'smooth', currentItem = 'stary';
  const itemApi = () => pickItem.mount && pickItem.mount();
  function pickItem(id) {
    const it = ITEMS.find(i => i.id === id);
    currentItem = id;
    document.querySelectorAll('#itemList button').forEach(b => { const on = b.dataset.id === id; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    $('itemName').textContent = it.name;
    $('itemText').textContent = it.text;
    $('itemSpecs').innerHTML = it.specs.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('');
    const m = itemApi();
    if (m) m.setItem(id);
  }
  ITEMS.forEach(it => {
    if (it.group) {
      const h = document.createElement('p');
      h.className = 'v-group'; h.textContent = it.group;
      $('itemList').appendChild(h);
      return;
    }
    const b = document.createElement('button');
    b.type = 'button'; b.dataset.id = it.id; b.textContent = it.name;
    b.addEventListener('click', () => pickItem(it.id));
    $('itemList').appendChild(b);
  });
  const paintItemTools = () => {
    swatches($('itemColors'), itemColor, id => {
      itemColor = id; paintItemTools();
      const m = itemApi();
      if (m) m.set({ colors: colorOf(id).hex });
    });
    chips($('itemSurfaces'), SURFACES, itemSurface, id => {
      itemSurface = id; paintItemTools();
      const m = itemApi();
      if (m) m.set({ surface: id });
    });
  };
  paintItemTools();
  pickItem(currentItem);
  $('itemLead').addEventListener('click', () => { $('leadTask').value = `Интересует: ${$('itemName').textContent}, ${colorOf(itemColor).name.toLowerCase()}, лицевой слой: ${SURFACES[itemSurface].toLowerCase()}. Подскажите цену и наличие.`; });

  // ---------- меню и форма ----------
  const nav = $('nav'), burger = $('burger');
  const setOpen = o => { nav.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Закрыть меню' : 'Открыть меню'); };
  burger.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  $('navLinks').addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });

  const lead = $('lead');
  lead.elements.phone.addEventListener('input', e => {
    let d = e.target.value.replace(/\D/g, '');
    if (!d) { e.target.value = ''; return; }
    if (d[0] === '8') d = '7' + d.slice(1);
    if (d[0] !== '7') d = '7' + d;
    d = d.slice(0, 11);
    let o = '+7';
    if (d.length > 1) o += ' (' + d.slice(1, 4);
    if (d.length >= 4) o += ')';
    if (d.length > 4) o += ' ' + d.slice(4, 7);
    if (d.length > 7) o += '-' + d.slice(7, 9);
    if (d.length > 9) o += '-' + d.slice(9, 11);
    e.target.value = o;
  });
  lead.addEventListener('submit', e => {
    e.preventDefault();
    const note = $('leadNote');
    if (lead.elements.phone.value.replace(/\D/g, '').length < 11) { note.textContent = 'Укажите телефон полностью.'; note.className = 'note err'; lead.elements.phone.focus(); return; }
    note.textContent = 'Так будет работать форма на готовом сайте. В демо заявка никуда не отправляется.';
    note.className = 'note ok';
  });

  renderPanel();
  start3D();
})();
