// Данные конструктора — меняются здесь, без правки 3D-кода.
// Цены опций — из прайса «Парус. Наши лодки». basePrice: null — цену лодки уточняем у производителя.
window.BOAT_CONFIG = {
  brand: 'Парус', slogan: 'Наши лодки',
  model: { id: '420j', name: 'Парус 420 J', type: 'с консолью', size: '4,2 м · 3–4 человека · до 350 кг', note: 'Корпус из ПНД: днище 8 мм, борта 6 мм. Мотор до 10 л.с. Ветровое остекление, кокпит 2 м. Вес лодки 140 кг.', basePrice: 210000, oldPrice: 249000,
    base: ['Кринолины с утками', 'Рундук в носу и кормовой рундук', 'Передвижная лавка', 'Консоль и ветровое стекло с дверцей', 'Рым в носу, сливная пробка'] },
  // линейка производителя (цены с сайта nashilodki.com); 3D пока только у 420 J
  lineup: [
    { id: '370j', name: '370 J', price: 190000, img: 'img/thumb-420j.webp' }, { id: '400j', name: '400 J', price: 197000, img: 'img/thumb-420j.webp' },
    { id: '420j', name: '420 J', price: 210000, img: 'img/thumb-420j.webp', active: true }, { id: '420dc', name: '420 DC', price: 210000, img: 'img/thumb-420j.webp' },
  ],
  graphics: [ { id: 'none', name: 'Без графики' }, { id: 'text', name: 'Надпись' }, { id: 'stripe', name: 'Надпись и полоса' } ],
  // цвет корпуса — как на фото производителя; выбор цвета добавим, когда Ирина пришлёт доступные цвета
  colors: [ { id: 'graphite', name: 'Графит', hex: '#3b3f45' } ],
  // группы опций; visual — есть на 3D; needs — зависимость
  groups: [
    { title: 'Конструкция и усиление', items: [
      { id: 'kring_hatch', name: 'Люки в кринолины', qty: '2 шт.', price: 7000, visual: true },
      { id: 'redan', name: 'Реданы', qty: '2 шт.', price: 3000, visual: true },
      { id: 'keelguard', name: 'Кильгард', qty: '1 шт.', price: 4000, visual: true },
      { id: 'rails', name: 'Леера на капот', qty: '2 шт.', price: 3000, visual: true },
      { id: 'capot_plate', name: 'Усиление капота под электроякорь и лебёдку', qty: '1 шт.', price: 3000 },
      { id: 'seat_plates', name: 'Усиление пластинами ПНД под кресла', qty: '2 шт.', price: 2500, needs: 'seats', needsText: 'Сначала добавьте кресло' },
    ] },
    { title: 'Оснащение', items: [
      { id: 'luvers', name: 'Подготовка под люверсы ходового тента', qty: '1 шт.', price: 5000, visual: true },
      { id: 'floor_aft', name: 'Пол (фанера / ПНД) в заднем рундуке', qty: '1 шт.', price: 3000, visual: true, hint: 'видно, если открыть люк' },
      { id: 'floor_anchor', name: 'Пол в якорном рундуке', qty: '1 шт.', price: 1500, visual: true, hint: 'видно, если открыть люк' },
      { id: 'oars', name: 'Вёсла, уключины и подуключины', qty: '2 шт.', price: 6000, visual: true },
      { id: 'echo_bracket', name: 'Кронштейн крепления эхолота', qty: '1 шт.', price: 500, visual: true },
      { id: 'speakers', name: 'Подиум для колонок и магнитолы', qty: '1 шт.', price: 5000, visual: true },
      { id: 'shelf_boxes', name: 'Рундуки в полках и под полками', qty: '1 шт.', price: 5000, visual: true },
    ] },
    { title: 'Комфорт', items: [
      { id: 'echo_tub', name: 'Ванночка под датчик эхолота', qty: '1 шт.', price: 5000, visual: true },
      { id: 'table', name: 'Столик на полку в кокпит', qty: '1 шт.', price: 3000, visual: true },
      { id: 'bench_box', name: 'Рундук-лавка передвижная', qty: '1 шт.', price: 15000, visual: true },
      { id: 'ladder_plate', name: 'Усиление потопчины под трап', qty: '1 шт.', price: 1500 },
    ] },
    { title: 'Дополнительно', items: [
      { id: 'console', name: 'Консоль моно «Парус R»', qty: '1 шт.', price: 10000 },
      { id: 'tent_run', name: 'Тент ходовой', qty: '1 шт.', price: 17000, visual: true, off: 'tent_trans' },
      { id: 'tent_trans', name: 'Тент транспортировочный', qty: '1 шт.', price: 22000, visual: true, off: 'tent_run', hint: 'на 3D закрывает остальные опции' },
    ] },
  ],
  seat: { price: 6000, bases: [ { id: 'tumba', name: 'Тумба (фанера)', price: 3000 }, { id: 'amort', name: 'Амортстойка', price: 8000 } ] },
  // моторы и прицеп — цены уточняем у производителя (null — «по запросу»)
  motors: [ { id: '', name: 'Без мотора', price: 0 }, { id: 'hangkai', name: 'Hangkai T9.9, 2-тактный', price: 165000 }, { id: 'electric', name: 'Электромотор EZ-X10T с румпелем', price: 279000 } ],
  trailer: { name: 'Прицеп для перевозки', price: null },
};
