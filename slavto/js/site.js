// Сайт пункта техосмотра: данные, 3D-узлы, калькулятор, запись, чек-лист, карта
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // ===== Данные (менять здесь) =====
  const EMAIL = 'slavto123@mail.ru';
  const HOURS = [ // 0 — воскресенье
    null, ['8:00', '14:00'], ['8:00', '17:00'], ['8:00', '17:00'], ['8:00', '17:00'], ['8:00', '17:00'], ['8:00', '17:00'],
  ];
  const DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const ICON = {
    L: '<svg viewBox="0 0 64 40" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="28" r="8"/><circle cx="50" cy="28" r="8"/><path d="M14 28l9-13h11l6 7h-12M34 15l6-5h6M40 22l10 6"/></svg>',
    M1: '<svg viewBox="0 0 64 40" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 27v-6l6-2 7-8h22l9 8 8 2v6"/><circle cx="17" cy="28" r="5"/><circle cx="47" cy="28" r="5"/><path d="M22 28h20M20 19h31"/></svg>',
    N1: '<svg viewBox="0 0 64 40" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 28V8h32v20M36 14h12l8 8v6h-4"/><circle cx="16" cy="29" r="5"/><circle cx="46" cy="29" r="5"/><path d="M21 29h20"/></svg>',
    O: '<svg viewBox="0 0 64 40" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 26V12h36v14H10zM46 22h14"/><circle cx="28" cy="29" r="5"/><path d="M4 26h6"/></svg>',
  };
  const DOCS = ['Паспорт или водительское удостоверение', 'СТС (или ПТС, если ТС не зарегистрировано)'];
  // Предельные тарифы 2026: постановление Губернатора Краснодарского края от 15.12.2025 № 831 (docs/tarify-2026.pdf).
  // На старом сайте L = 627,92 (это тариф для спецТС оперативных служб) и прицеп «132.63» — ошибки; здесь цифры из постановления.
  const CATS = [
    { id: 'M1', name: 'Легковой', desc: 'до 8 мест для пассажиров', code: 'M1', price: 1712.50, extra: ['Аптечка, огнетушитель, знак аварийной остановки'] },
    { id: 'N1', name: 'Грузовой до 3,5 т', desc: 'фургоны, пикапы, «Газели»', code: 'N1', price: 1825.62, extra: ['Аптечка, огнетушитель, знак аварийной остановки'] },
    { id: 'L', name: 'Мотоцикл', desc: 'мотоциклы, мотороллеры, трициклы', code: 'L', price: 570.84, extra: ['Аптечка'] },
    { id: 'O', name: 'Прицеп до 3,5 т', desc: 'прицепы O1 и O2', code: 'O1, O2', price: 1089.07, extra: ['Приезжайте вместе с тягачом'] },
  ];
  // Этапы проверки — свои для каждой техники (категории L, M1, N1, O1/O2 по аккредитации пункта).
  // f — вдоль (−1 зад … +1 перед), s — поперёк (+ к зрителю), h — высота (0 … 1), cam — [вдоль, высота, поперёк] для облёта.
  // img — фото этапа (img/<имя>-m.webp). Где своего фото ещё нет, стоит ближайшее по смыслу.
  const STAGES = {
    car: { title: 'легкового автомобиля', list: [
      { id: 'osmotr', f: 0.25, s: 0.0, h: 0.92, cam: [1.25, 1.05, 0.75], img: 'osmotr', t: 'Внешний осмотр', p: 'Эксперт сверяет автомобиль с документами и осматривает кузов, стёкла и обязательное оснащение.', li: ['VIN и госномер — как в СТС', 'Трещины лобового стекла в зоне дворника', 'Зеркала, стеклоочистители, омыватель', 'Аптечка, огнетушитель, знак аварийной остановки'] },
      { id: 'lights', f: 1.0, s: 0.62, h: 0.46, cam: [1.55, 0.5, 0.65], img: 'lights', t: 'Освещение', p: 'Прибор проверки фар показывает, куда и с какой силой светит каждая фара.', li: ['Регулировка ближнего и дальнего света', 'Габариты, стоп-сигналы, поворотники', 'Аварийная сигнализация и звуковой сигнал', 'Целостность рассеивателей'] },
      { id: 'susp', f: 0.62, s: 0.92, h: 0.1, cam: [0.85, 0.12, 1.2], img: 'susp', t: 'Передняя подвеска', p: 'На подъёмнике или смотровой яме эксперт осматривает переднюю подвеску снизу.', li: ['Шаровые опоры и рычаги', 'Амортизаторы и пружины', 'Сайлентблоки и пыльники', 'Подтёки масла и жидкостей'] },
      { id: 'steering', f: 0.12, s: 0.32, h: 0.62, cam: [0.35, 0.75, 1.25], img: 'steering', t: 'Рулевое управление', p: 'Проверяют суммарный люфт рулевого колеса и состояние рулевых тяг.', li: ['Суммарный люфт руля по прибору', 'Рулевые тяги и наконечники', 'Усилитель руля без утечек', 'Руль не заедает и не стучит'] },
      { id: 'pressure', f: -0.66, s: 1.03, h: 0.2, cam: [-0.95, 0.25, 1.2], img: 'pressure', t: 'Давление в шинах', p: 'Манометром проверяют давление, а глубиномером — остаток протектора.', li: ['Давление по норме производителя', 'Протектор — не меньше 1,6 мм', 'Порезы, грыжи, расслоения', 'Одинаковые шины на одной оси'] },
      { id: 'exhaust', f: -1.0, s: -0.45, h: 0.2, cam: [-1.6, 0.35, -0.5], img: 'exhaust', t: 'СО и СН', p: 'Газоанализатор измеряет содержание оксида углерода (CO) и углеводородов (CH) в выхлопе.', li: ['Содержание CO и CH в норме', 'Дымность — для дизельных двигателей', 'Герметичность выпускной системы'] },
      { id: 'brakes', f: 0.68, s: 1.03, h: 0.3, cam: [0.95, 0.35, 1.15], img: 'brakes', t: 'Тормозная система', p: 'Автомобиль заезжает на роликовый тормозной стенд — он измеряет тормозные силы на каждом колесе.', li: ['Эффективность рабочего тормоза', 'Разница сил на левом и правом колесе', 'Стояночный тормоз', 'Герметичность тормозной системы'] },
      { id: 'lyuft', f: 0.68, s: -1.0, h: 0.08, cam: [0.95, 0.15, -1.2], img: 'lyuft', t: 'Люфт-детектор', p: 'Колёса ставят на подвижные площадки: они раскачивают колесо, а эксперт снизу видит любой люфт.', li: ['Люфты в шарнирах подвески', 'Люфты рулевых тяг', 'Износ сайлентблоков', 'Ослабленные крепления'] },
    ] },
    truck: { title: 'грузовика до 3,5 т', list: [
      { id: 'osmotr', f: 0.78, s: 0.0, h: 0.95, cam: [1.3, 1.1, 0.8], img: 'osmotr', t: 'Кабина и внешний осмотр', p: 'Сверяют VIN и номер с СТС, осматривают кабину, стёкла, зеркала и обязательное оснащение.', li: ['VIN и госномер — как в СТС', 'Лобовое стекло и стеклоочистители', 'Зеркала заднего вида и ремни безопасности', 'Аптечка, огнетушитель, знак аварийной остановки'] },
      { id: 'lights', f: 1.0, s: 0.72, h: 0.33, cam: [1.6, 0.45, 0.7], img: 'lights', t: 'Освещение', p: 'Фары проверяют прибором, затем — все сигнальные огни кабины и фургона.', li: ['Регулировка ближнего и дальнего света', 'Габариты, стоп-сигналы, поворотники', 'Фонарь заднего хода и подсветка номера', 'Звуковой сигнал'] },
      { id: 'steering', f: 0.8, s: 0.55, h: 0.62, cam: [0.9, 0.8, 1.3], img: 'steering', t: 'Рулевое управление', p: 'Прибором измеряют суммарный люфт руля, осматривают рулевые тяги и усилитель.', li: ['Суммарный люфт рулевого колеса', 'Рулевые тяги и шарниры', 'Усилитель руля без подтёков', 'Руль поворачивается без рывков'] },
      { id: 'susp', f: 0.57, s: 0.98, h: 0.12, cam: [0.9, 0.15, 1.3], img: 'lyuft', t: 'Подвеска и люфт-детектор', p: 'Над смотровой ямой колёса раскачивает люфт-детектор, эксперт осматривает подвеску снизу.', li: ['Рессоры и пружины без трещин', 'Амортизаторы без подтёков', 'Шкворни, шаровые опоры, сайлентблоки', 'Крепление мостов к раме'] },
      { id: 'pressure', f: -0.57, s: 1.0, h: 0.15, cam: [-0.9, 0.3, 1.25], img: 'tires', t: 'Колёса и шины', p: 'Проверяют шины на обеих осях, включая сдвоенные задние колёса.', li: ['Протектор — не меньше 1,6 мм', 'Давление и одинаковые шины на оси', 'Порезы, грыжи, расслоения', 'Колёсные гайки и диски без трещин'] },
      { id: 'exhaust', f: -0.1, s: -0.9, h: 0.12, cam: [-0.3, 0.3, -1.3], img: 'exhaust', t: 'Выхлоп и дымность', p: 'Газоанализатор проверяет бензиновый двигатель, дымомер — дизельный.', li: ['CO и CH — для бензиновых двигателей', 'Дымность — для дизельных', 'Герметичность выпускной системы', 'Нет подтёков масла и топлива'] },
      { id: 'brakes', f: 0.57, s: 1.0, h: 0.22, cam: [0.9, 0.35, 1.2], img: 'brakes', t: 'Тормозная система', p: 'На роликовом стенде измеряют тормозные силы по осям и проверяют стояночный тормоз.', li: ['Эффективность рабочего тормоза', 'Разница сил на колёсах одной оси', 'Стояночный тормоз', 'Герметичность тормозных трубок'] },
      { id: 'body', f: -0.4, s: 1.0, h: 0.65, cam: [-1.1, 0.8, 1.2], img: 'truck', t: 'Рама и фургон', p: 'Осматривают раму, фургон и всё, что закреплено снаружи.', li: ['Рама и крепление фургона', 'Двери и запоры фургона', 'Брызговики и крылья', 'Крепление запасного колеса'] },
    ] },
    moto: { title: 'мотоцикла', list: [
      { id: 'osmotr', f: 0.05, s: 0.0, h: 0.82, cam: [0.9, 1.1, 0.9], img: 'm-osmotr', t: 'Внешний осмотр', p: 'Сверяют VIN и номер с документами, осматривают раму и навесное оборудование.', li: ['VIN и номер — как в СТС', 'Зеркала заднего вида', 'Рама и подножки без трещин', 'Аптечка'] },
      { id: 'lights', f: 0.84, s: 0.0, h: 0.74, cam: [1.5, 0.75, 0.5], img: 'm-lights', t: 'Свет и сигналы', p: 'Проверяют фару, задний фонарь, поворотники и звуковой сигнал.', li: ['Фара: ближний и дальний свет', 'Стоп-сигнал и задний фонарь', 'Поворотники', 'Звуковой сигнал'] },
      { id: 'steering', f: 0.66, s: 0.35, h: 0.95, cam: [0.9, 1.1, 0.9], img: 'm-steering', t: 'Руль и вилка', p: 'Проверяют, как поворачивается руль, нет ли люфта рулевой колонки и подтёков вилки.', li: ['Руль поворачивается без заеданий', 'Нет люфта в рулевой колонке', 'Вилка без подтёков масла', 'Рычаги и рукоятки на месте'] },
      { id: 'brakes', f: 0.8, s: 0.4, h: 0.3, cam: [1.0, 0.3, 1.0], img: 'm-brakes', t: 'Тормоза', p: 'Передний и задний тормоз проверяют раздельно — у каждого своя норма.', li: ['Передний тормоз', 'Задний тормоз', 'Рычаг и педаль без провала', 'Нет подтёков тормозной жидкости'] },
      { id: 'pressure', f: -0.78, s: 0.4, h: 0.3, cam: [-1.0, 0.3, 1.0], img: 'm-tires', t: 'Колёса и шины', p: 'Проверяют протектор и состояние колёс — для мототехники своя норма износа.', li: ['Протектор — не меньше 0,8 мм', 'Порезы, грыжи, расслоения', 'Спицы и диски без повреждений', 'Колёса без люфта'] },
      { id: 'exhaust', f: -0.45, s: 0.6, h: 0.3, cam: [-0.9, 0.4, 1.1], img: 'm-exhaust', t: 'Двигатель и выхлоп', p: 'Газоанализатор проверяет выхлоп, эксперт — двигатель и привод.', li: ['Содержание CO и CH', 'Глушитель целый и закреплён', 'Нет подтёков масла и топлива', 'Цепь или ремень привода исправны'] },
    ] },
    trailer: { title: 'прицепа', list: [
      { id: 'osmotr', f: -0.2, s: 0.0, h: 0.8, cam: [-0.6, 1.2, 0.9], img: 'p-osmotr', t: 'Внешний осмотр', p: 'Сверяют VIN на табличке и номер с документами, осматривают раму и борта.', li: ['VIN и номер — как в СТС', 'Рама без трещин и сквозной коррозии', 'Борта и запоры', 'Крылья над колёсами'] },
      { id: 'hitch', f: 1.0, s: 0.0, h: 0.4, cam: [1.4, 0.6, 0.7], img: 'p-hitch', t: 'Сцепное устройство', p: 'Проверяют дышло, замок сцепки и страховочный трос или цепь.', li: ['Дышло без деформаций и трещин', 'Замок сцепного устройства фиксируется', 'Страховочный трос или цепь', 'Опорное колесо'] },
      { id: 'lights', f: -1.0, s: 0.75, h: 0.45, cam: [-1.5, 0.55, 0.75], img: 'p-lights', t: 'Свет и световозвращатели', p: 'Прицеп подключают к тягачу и проверяют все огни и световозвращатели.', li: ['Габариты, стоп-сигналы, поворотники', 'Подсветка номера', 'Световозвращатели: красные сзади, белые спереди', 'Исправная розетка подключения'] },
      { id: 'pressure', f: -0.1, s: 1.0, h: 0.28, cam: [-0.3, 0.35, 1.3], img: 'p-tires', t: 'Колёса и шины', p: 'Проверяют шины, диски и ступицы.', li: ['Протектор — не меньше 1,6 мм', 'Порезы, грыжи, расслоения', 'Колёсные гайки затянуты', 'Подшипники ступиц без люфта'] },
      { id: 'brakes', f: -0.1, s: -1.0, h: 0.28, cam: [-0.3, 0.35, -1.3], img: 'p-brakes', t: 'Тормоза', p: 'У прицепов O2 проверяют тормоз наката и стояночный тормоз. У лёгких прицепов O1 тормоза может не быть.', li: ['Тормоз наката (O2)', 'Стояночный тормоз', 'Тросы и тяги тормозов', 'Аварийный трос'] },
      { id: 'susp', f: -0.1, s: 0.6, h: 0.1, cam: [-0.2, 0.12, 1.3], img: 'p-susp', t: 'Подвеска и ось', p: 'Снизу осматривают ось, рессоры или торсионы и их крепление к раме.', li: ['Рессоры или торсионы без трещин', 'Амортизаторы, если есть', 'Крепление оси к раме', 'Нет люфта колёс'] },
    ] },
  };
  const rub = v => v == null ? 'по запросу' : v.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ₽';

  // ===== Шапка, меню, нижняя панель =====
  const top = $('.top'), mbar = $('.mbar'), hero = $('.hero');
  const onScroll = () => {
    top.classList.toggle('solid', scrollY > 40);
    mbar.classList.toggle('show', scrollY > hero.offsetHeight * 0.6);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('.burger'), mnav = $('#mnav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open); mnav.hidden = !open; top.classList.add('solid');
  });
  mnav.addEventListener('click', e => { if (e.target.closest('a')) { burger.setAttribute('aria-expanded', 'false'); mnav.hidden = true; } });

  // ===== Открыто ли сейчас (время Москвы) =====
  const msk = () => { const d = new Date(); return new Date(d.getTime() + (d.getTimezoneOffset() + 180) * 60000); };
  const toMin = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
  function nowState() {
    const d = msk(), h = HOURS[d.getDay()], m = d.getHours() * 60 + d.getMinutes();
    if (h && m >= toMin(h[0]) && m < toMin(h[1])) return { open: true, text: `Открыто до ${h[1]}` };
    for (let i = 0; i < 7; i++) {
      const dd = (d.getDay() + i) % 7, hh = HOURS[dd];
      if (!hh) continue;
      if (i === 0 && m < toMin(hh[0])) return { open: false, text: `Откроемся сегодня в ${hh[0]}` };
      if (i > 0) return { open: false, text: `Откроемся ${i === 1 ? 'завтра' : DAYS[dd].toLowerCase()} в ${hh[0]}` };
    }
    return { open: false, text: 'Пн–Сб с 8:00' };
  }
  const ns = nowState();
  $('#nowDot').classList.toggle('open', ns.open); $('#nowText').textContent = ns.text;
  const today = msk().getDay();
  $('#hours').innerHTML = [1, 2, 3, 4, 5, 6, 0].map(i => `<li${i === today ? ' class="today"' : ''}><span>${DAYS[i]}</span><span>${HOURS[i] ? HOURS[i].join('–') : 'выходной'}</span></li>`).join('');

  // ===== 3D и этапы =====
  const tabs = $('#zoneTabs'), card = $('#zoneCard'), stage = $('#stage'), tourBtn = $('#tour');
  let car = null, veh = 'car';
  const cur = () => STAGES[veh].list;
  const tourLabel = () => `<span aria-hidden="true">▶</span> Пройти все ${cur().length} этапов`;
  function renderTabs() {
    const L = cur();
    tabs.style.setProperty('--cols', L.length % 4 === 0 ? 4 : 3);
    tabs.innerHTML = L.map(z => `<button type="button" role="tab" data-z="${z.id}" aria-selected="false">${z.t}</button>`).join('');
    tabs.setAttribute('aria-label', 'Этапы проверки ' + STAGES[veh].title);
    if (!tourT) tourBtn.innerHTML = tourLabel();
  }
  function showZone(id, fromCar) {
    const L = cur(), i = L.findIndex(z => z.id === id), z = L[i];
    if (!z) return;
    $$('button', tabs).forEach(b => b.setAttribute('aria-selected', b.dataset.z === id));
    card.innerHTML = `<img src="img/${z.img}-m.webp" alt="" width="900" height="672"><div class="zc-b"><p class="zc-n">Этап ${i + 1} из ${L.length} · ${STAGES[veh].title}</p><h3>${z.t}</h3><p>${z.p}</p><ul>${z.li.map(x => `<li>${x}</li>`).join('')}</ul></div>`;
    if (!fromCar && car) { car.focus(id); stage.classList.add('zoomed'); }
  }
  // «Пройти все этапы»: камера по очереди облетает этапы выбранной техники
  let tourT = 0, tourI = 0;
  function tourStop() { clearTimeout(tourT); tourT = 0; tourBtn.classList.remove('on'); tourBtn.innerHTML = tourLabel(); }
  function tourStep() {
    const L = cur();
    if (tourI >= L.length) { tourStop(); return; }
    showZone(L[tourI].id); tourI++;
    tourT = setTimeout(tourStep, 4200);
  }
  tourBtn.addEventListener('click', () => {
    if (tourT) { tourStop(); return; }
    tourI = 0; tourBtn.classList.add('on'); tourBtn.innerHTML = '<span aria-hidden="true">■</span> Остановить'; tourStep();
  });
  stage.addEventListener('pointerdown', e => { if (tourT && !e.target.closest('.tour')) tourStop(); });
  // переключатель техники
  const VEH = [['car', 'Легковой'], ['truck', 'Грузовой'], ['moto', 'Мотоцикл'], ['trailer', 'Прицеп']];
  const CAT2VEH = { M1: 'car', N1: 'truck', L: 'moto', O: 'trailer' };
  const vehBox = $('#veh');
  vehBox.innerHTML = VEH.map(([id, t]) => `<button type="button" data-v="${id}" aria-pressed="${id === 'car'}">${t}</button>`).join('');
  function setVeh(id) {
    if (tourT) tourStop();
    veh = id;
    $$('button', vehBox).forEach(b => b.setAttribute('aria-pressed', b.dataset.v === id));
    stage.classList.remove('zoomed');
    renderTabs(); showZone(cur()[0].id, true);
    $$('button', tabs).forEach(x => x.setAttribute('aria-selected', 'false'));
    if (car && car.vehicle !== id) car.setVehicle(id);
  }
  vehBox.addEventListener('click', e => { const b = e.target.closest('button'); if (b) setVeh(b.dataset.v); });
  tabs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) showZone(b.dataset.z); });
  renderTabs(); showZone('osmotr', true);
  $$('button', tabs).forEach(b => b.setAttribute('aria-selected', 'false'));
  $('#stageReset').addEventListener('click', () => { if (tourT) tourStop(); car && car.reset(); stage.classList.remove('zoomed'); $$('button', tabs).forEach(b => b.setAttribute('aria-selected', 'false')); });

  // 3D грузим, когда раздел близко к экрану
  const startCar = () => {
    if (car || !window.Car3D) return;
    const zones = {}, names = {};
    for (const k in STAGES) { zones[k] = STAGES[k].list.map(({ id, f, s, h, cam }) => ({ id, f, s, h, cam })); names[k] = Object.fromEntries(STAGES[k].list.map(z => [z.id, z.t])); }
    car = Car3D.createCar(stage, {
      models: {
        car: { url: 'assets/sedan.glb?v=4', length: 4.7, desatRed: true, desatOnly: ['PaletteMaterial001'] },
        truck: { url: 'assets/truck.glb?v=4', length: 5.2 },
        moto: { url: 'assets/motorbike.glb?v=3', length: 2.1 },
        trailer: { url: 'assets/trailer2.glb?v=3', length: 3.5 },
      },
      zones, names, start: veh, label: '3D-модель техники с точками этапов проверки',
      onZone: id => { if (tourT) tourStop(); showZone(id, true); stage.classList.add('zoomed'); },
    });
    if (!car) stage.classList.add('no-webgl');
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { startCar(); io.disconnect(); } }, { rootMargin: '600px' });
    io.observe(stage);
  } else startCar();

  // ===== Калькулятор =====
  const cats = $('#cats'), out = $('#calcOut'), fCat = $('#fCat');
  cats.innerHTML = CATS.map(c => `<button type="button" class="cat" role="radio" aria-checked="false" data-c="${c.id}"><span class="code">${c.code}</span>${ICON[c.id] || ICON.O}<b>${c.name}</b><small>${c.desc}</small></button>`).join('');
  fCat.innerHTML = CATS.map(c => `<option value="${c.id}">${c.name} (${c.code})</option>`).join('');
  function pick(id) {
    const c = CATS.find(x => x.id === id);
    $$('.cat', cats).forEach(b => b.setAttribute('aria-checked', b.dataset.c === id));
    out.innerHTML = `<p class="co-t">${c.name} · категория ${c.code}</p>
      <div class="price">${c.price == null ? 'Цена по запросу' : rub(c.price)}</div>
      <p class="co-n">${c.price == null ? 'Позвоните — назовём точную стоимость' : 'Предельный тариф Краснодарского края на 2026 год, оплата на месте'}</p>
      <h3>Что взять с собой</h3><ul>${DOCS.concat(c.extra).map(x => `<li>${x}</li>`).join('')}</ul>
      <a class="btn btn-accent btn-lg" href="#book" data-cat="${c.id}">Записаться — ${c.name.toLowerCase()}</a>`;
    fCat.value = id;
    // та же техника в 3D-разделе (без прокрутки) — когда клиент вернётся к 3D, увидит свою категорию
    if (CAT2VEH[id] && veh !== CAT2VEH[id]) setVeh(CAT2VEH[id]);
  }
  cats.addEventListener('click', e => { const b = e.target.closest('.cat'); if (b) pick(b.dataset.c); });
  cats.addEventListener('keydown', e => {
    if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(e.key)) return;
    const bs = $$('.cat', cats), i = bs.indexOf(document.activeElement), n = bs[(i + (/Right|Down/.test(e.key) ? 1 : bs.length - 1)) % bs.length];
    n.focus(); pick(n.dataset.c); e.preventDefault();
  });
  out.addEventListener('click', e => { const a = e.target.closest('[data-cat]'); if (a) fCat.value = a.dataset.cat; });
  pick('M1');

  // ===== Чек-лист =====
  const chk = $$('#chk input'), chkRes = $('#chkRes');
  const upd = () => {
    const n = chk.filter(c => c.checked).length;
    chkRes.textContent = n === chk.length ? 'Всё готово — можно ехать на техосмотр!' : n ? `Готово ${n} из ${chk.length}` : '';
    chkRes.classList.toggle('ok', n === chk.length);
  };
  chk.forEach(c => c.addEventListener('change', upd));

  // ===== Запись =====
  const form = $('#bookForm'), fDate = $('#fDate'), slots = $('#slots'), msg = $('#formMsg');
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const d0 = msk(); let first = new Date(d0);
  if (!HOURS[first.getDay()] || d0.getHours() * 60 + d0.getMinutes() > toMin(HOURS[first.getDay()][1]) - 60) first.setDate(first.getDate() + 1);
  while (!HOURS[first.getDay()]) first.setDate(first.getDate() + 1);
  fDate.min = iso(d0); const max = new Date(d0); max.setDate(max.getDate() + 30); fDate.max = iso(max); fDate.value = iso(first);
  let slot = '';
  function renderSlots() {
    const d = new Date(fDate.value + 'T12:00'), h = HOURS[d.getDay()];
    slot = '';
    if (!h) { slots.innerHTML = '<p style="margin:0;color:#d93036;font-size:14px">В воскресенье пункт не работает — выберите другой день.</p>'; return; }
    const isToday = fDate.value === iso(d0), nowM = d0.getHours() * 60 + d0.getMinutes(), list = [];
    for (let m = toMin(h[0]); m <= toMin(h[1]) - 60; m += 60) list.push(m);
    slots.innerHTML = list.map(m => `<button type="button" class="slot" aria-pressed="false" ${isToday && m < nowM + 30 ? 'disabled' : ''}>${Math.floor(m / 60)}:00</button>`).join('');
  }
  fDate.addEventListener('change', renderSlots); renderSlots();
  slots.addEventListener('click', e => {
    const b = e.target.closest('.slot'); if (!b || b.disabled) return;
    $$('.slot', slots).forEach(x => x.setAttribute('aria-pressed', x === b)); slot = b.textContent;
  });
  // маска телефона
  const ph = form.phone;
  ph.addEventListener('input', () => {
    let d = ph.value.replace(/\D/g, ''); if (d.startsWith('8')) d = '7' + d.slice(1); if (!d.startsWith('7')) d = '7' + d; d = d.slice(0, 11);
    const p = [d.slice(1, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)];
    ph.value = '+7' + (p[0] ? ` (${p[0]}` : '') + (p[0].length === 3 ? ')' : '') + (p[1] ? ` ${p[1]}` : '') + (p[2] ? `-${p[2]}` : '') + (p[3] ? `-${p[3]}` : '');
  });
  $$('[data-biz]').forEach(a => a.addEventListener('click', () => { form.dataset.biz = '1'; }));
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    [form.name, form.phone, fDate].forEach(f => { const bad = !f.value.trim() || (f === form.phone && f.value.replace(/\D/g, '').length < 11); f.classList.toggle('bad', bad); if (bad) ok = false; });
    if (!form.agree.checked) { msg.className = 'form-msg err'; msg.textContent = 'Отметьте согласие на обработку данных.'; return; }
    if (!ok) { msg.className = 'form-msg err'; msg.textContent = 'Заполните имя, телефон и дату.'; return; }
    const c = CATS.find(x => x.id === fCat.value), d = new Date(fDate.value + 'T12:00');
    const body = `Заявка на техосмотр${form.dataset.biz ? ' (юрлицо, договор)' : ''}\n\nИмя: ${form.name.value}\nТелефон: ${form.phone.value}\nТранспорт: ${c.name} (${c.code})\nДата: ${d.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}\nВремя: ${slot || 'любое'}`;
    // Демоверсия: заявка открывается письмом. В рабочей версии уходит на почту и в мессенджер автоматически.
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Запись на техосмотр — ' + form.name.value)}&body=${encodeURIComponent(body)}`;
    msg.className = 'form-msg ok'; msg.textContent = 'Спасибо! Заявка сформирована — эксперт перезвонит и подтвердит время.';
  });

  // ===== Карта (грузим по клику — не тормозит страницу) =====
  $('#mapLoad').addEventListener('click', () => {
    $('#map').innerHTML = '<iframe title="Пункт техосмотра на карте" loading="lazy" src="https://yandex.ru/map-widget/v1/?text=%D0%A1%D0%BB%D0%B0%D0%B2%D1%8F%D0%BD%D1%81%D0%BA-%D0%BD%D0%B0-%D0%9A%D1%83%D0%B1%D0%B0%D0%BD%D0%B8%2C%20%D1%83%D0%BB.%20%D0%9F%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%2C%204&z=16"></iframe>';
  });

  // ===== Появление блоков =====
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const els = $$('.sec-head, .steps li, .gal figure, .cat, .doc-list li, .check-box, .faq details, .form, .calc-out');
    els.forEach(el => el.classList.add('rv'));
    const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
  }
})();
