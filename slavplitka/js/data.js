// Ассортимент и цены — из прайса завода «отпускные цены с 01 июня 2025 года».
// Ценовые группы цвета: 0 серый, 1 красный/коричневый/чёрный, 2 жёлтый/оранжевый, 3 белый, 4 колормикс.
(function () {
  'use strict';

  // Цвета — как на сайте завода slavplitka.ru. tex — настоящая поверхность плитки (верхняя грань с фото завода),
  // hex — образец для кнопки; колормиксы «Нового города» — палитры, снятые с фото завода.
  const T = n => 'img/tex/' + n + '.webp';
  const COLORS = [
    { id: 'grey', name: 'Серый', hex: ['#969b9e'], tex: T('grey'), g: 0 },
    { id: 'red', name: 'Красный', hex: ['#884940'], tex: T('red'), g: 1 },
    { id: 'redbrown', name: 'Красно-коричневый', hex: ['#5b4547'], tex: T('redbrown'), g: 1 },
    { id: 'brown', name: 'Коричневый', hex: ['#644a36'], tex: T('brown'), g: 1 },
    { id: 'black', name: 'Чёрный', hex: ['#343434'], tex: T('black'), g: 1 },
    { id: 'green', name: 'Зелёный', hex: ['#455c4c'], g: 1 },
    { id: 'yellow', name: 'Жёлтый', hex: ['#be9740'], tex: T('yellow'), g: 2 },
    { id: 'orange', name: 'Оранжевый', hex: ['#c56528'], tex: T('orange'), g: 2 },
    { id: 'white', name: 'Белый', hex: ['#e5e5e5'], tex: T('white'), g: 3 },
    { id: 'listopad', name: 'Листопад', hex: ['#826c56', '#b08a3c', '#3e362f', '#9a8a70'], tex: T('listopad'), g: 4 },
    { id: 'malva', name: 'Мальва', hex: ['#66493a', '#825d44', '#a87e51'], g: 4 },
    { id: 'muskat', name: 'Мускат', hex: ['#7d5037', '#67412a', '#8d6149'], g: 4 },
    { id: 'step', name: 'Степь', hex: ['#bca98c', '#cfc4af', '#a69274'], g: 4 },
    { id: 'listopad-ng', name: 'Листопад (колормикс)', hex: ['#b2836c', '#bf9479', '#9f7361'], g: 4 },
  ];
  const BASE_COLORS = ['grey', 'red', 'redbrown', 'brown', 'black', 'yellow', 'orange', 'white', 'listopad'];

  const SURFACES = { smooth: 'Гладкий', granite: 'Гранит', marble: 'Мрамор' };

  // цены за м² по фактурам: [серый, красн/кор/чёрн, жёлт/оранж, белый, колормикс]; мрамор: [однотонный, колормикс]
  const P = (s, g, m) => ({ smooth: s, granite: g, marble: m });

  const PRODUCTS = [
    // ---------- тротуарная плитка ----------
    {
      id: 'bruschatka', cat: 'plitka', form: 'Брусчатка', name: 'Брусчатка', unit: 'м²', model: 'bruschatka', img: 'bruschatka',
      text: 'Классический прямоугольный камень 200×100 мм. Подходит для дорожек, дворов, парковок и въездов. Укладывается ёлочкой, вразбежку или плетёнкой.',
      sizes: [[200, 100]], pcs: 50,
      prices: {
        40: P([700, 800, 850, 900, 1000], [800, 900, 950, 1000, 1100], [1300, 1400]),
        60: P([800, 900, 950, 1000, 1100], [900, 1000, 1050, 1100, 1200], [1400, 1500]),
        80: P([900, 1000, 1050, 1100, 1200], null, null),
      },
      patterns: ['run', 'herring', 'herring45', 'basket'], hit: true, colors: ['grey', 'orange', 'red', 'brown', 'yellow', 'white', 'listopad', 'green'], site: 'bruschatka',
    },
    {
      id: 'kvadrat', cat: 'plitka', form: 'Квадрат', name: 'Квадрат', unit: 'м²', model: 'kvadrat', img: 'kvadrat',
      text: 'Строгая геометрия: квадраты 200×200 и 100×100 мм. Два размера можно сочетать в одном рисунке.',
      sizes: [[200, 200], [100, 100]], pcs: 25, pcsNote: '25 шт. 200×200 или 100 шт. 100×100',
      prices: {
        40: P([700, 800, 850, 900, 1000], [800, 900, 950, 1000, 1100], [1300, 1400]),
        60: P([800, 900, 950, 1000, 1100], [900, 1000, 1050, 1100, 1200], [1400, 1500]),
      },
      patterns: ['grid', 'diag', 'mix'], colors: ['grey', 'orange', 'red', 'redbrown', 'brown', 'yellow', 'black', 'listopad', 'white'], site: 'kvadrat',
    },
    {
      id: 'stary', cat: 'plitka', form: 'Старый город', name: 'Старый город', unit: 'м²', model: 'stary', img: 'staryj-gorod',
      text: 'Набор из трёх размеров со скруглёнными гранями. Покрытие выглядит как старинная мостовая.',
      sizes: [[120, 90], [120, 120], [180, 120]], pcs: 64, set: true,
      prices: {
        40: P([700, 800, 850, 900, 1050], [800, 900, 950, 1000, 1150], [1300, 1400]),
        60: P([800, 900, 950, 1000, 1150], [900, 1000, 1050, 1100, 1250], [1400, 1500]),
      },
      patterns: ['rows', 'across', 'diag'], hit: true, colors: ['grey', 'yellow', 'brown', 'black', 'red', 'listopad', 'white', 'redbrown'], site: 'stary',
    },
    {
      id: 'novy', cat: 'plitka', form: 'Новый город', name: 'Новый город', unit: 'м²', model: 'novy', img: 'novyj-gorod',
      text: 'Три размера в одном модуле для современных дворов и площадок. Колормиксы «Мальва», «Мускат», «Степь» и «Листопад» — эксклюзивные цветовые решения завода.',
      sizes: [[210, 140], [140, 140], [70, 140]], pcs: 51, set: true,
      prices: {
        40: P([700, 800, 850, 950, 1100], [800, 900, 950, 1000, 1200], [1300, 1400]),
        60: P([800, 900, 950, 1000, 1200], [900, 1000, 1050, 1100, 1300], [1400, 1500]),
      },
      patterns: ['rows', 'across', 'diag'], hit: true, colors: ['malva', 'muskat', 'step', 'listopad-ng'], site: 'novy',
    },
    {
      id: 'myunhen', cat: 'plitka', form: 'Мюнхен', name: 'Мюнхен', unit: 'м²', model: 'myunhen', img: 'myunhen',
      text: 'Крупноформатный набор из четырёх размеров. Хорошо смотрится на больших площадях.',
      sizes: [[278, 208], [138, 208], [138, 138], [68, 138]], pcs: 22, set: true,
      prices: {
        40: P([700, 800, 850, 900, 1050], [800, 900, 950, 1000, 1150], [1300, 1400]),
        60: P([800, 900, 950, 1000, 1150], [900, 1000, 1050, 1100, 1250], [1400, 1500]),
      },
      patterns: ['rows', 'across'],
    },
    {
      id: 'antara', cat: 'plitka', form: 'Антара', name: 'Антара', unit: 'м²', model: 'antara', img: 'antara',
      text: 'Самый крупный формат: четыре длины при ширине 298 мм. Для просторных террас и подъездов.',
      sizes: [[148, 298], [223, 298], [298, 298], [448, 298]], pcs: 12, set: true,
      prices: { 60: P([850, 950, 1000, 1050, 1150], [950, 1050, 1100, 1150, 1250], [1450, 1500]) },
      patterns: ['rows', 'across'],
    },
    {
      id: 'pryamougolnik', cat: 'plitka', form: 'Прямоугольник', name: 'Прямоугольник 500×250', unit: 'м²', model: 'pryam', img: 'pryamougolnik',
      text: 'Большая плита 500×250 мм для современного минималистичного двора, террас и ступеней.',
      sizes: [[500, 250]], pcs: 8,
      prices: { 60: P([800, 900, 950, 1000, 1150], [900, 950, 1000, 1050, 1250], [1400, 1500]) },
      patterns: ['run', 'grid'],
    },
    {
      id: 'brook', cat: 'plitka', form: 'Австрийский брук', name: 'Австрийский брук', unit: 'м²', model: 'brook', img: 'avstr-bruk',
      text: 'Клиновидные камни для круговой укладки, укладки волной и шов в шов. Водопоглощение до 6 %, морозостойкость F200. В прайсе — «римский брук».',
      sizes: [[120, 90], [100, 80], [90, 60]], pcs: 110, set: true,
      prices: { 40: P([700, 800, 850, 900, 1050], [800, 900, 950, 1000, 1150], [1300, 1400]) },
      patterns: ['rows'], colors: ['grey', 'listopad', 'red', 'yellow'], site: 'brook',
    },
    {
      id: 'antik', cat: 'plitka', form: 'Антик', name: 'Антик', unit: 'м²', model: 'antik', img: 'antik',
      text: 'Камни с «состаренными» гранями четырёх размеров. Подходит для садовых дорожек в природном стиле.',
      sizes: [[75, 53], [83, 63], [93, 73], [103, 83]], sizeNote: 'длина × ширина × 91 мм по диагонали', pcs: 150, set: true,
      prices: { 40: P([800, 900, 950, 1000, 1050], [900, 950, 1000, 1050, 1100], [1400, 1500]) },
      patterns: ['rows'], colors: ['listopad', 'red', 'brown', 'redbrown', 'yellow', 'orange', 'white', 'grey'], site: 'antik',
    },
    {
      id: 'romb', cat: 'plitka', form: 'Ромб', name: 'Ромб', unit: 'м²', model: 'romb', img: 'romb',
      text: 'Позволяет создавать объёмные, сложные рисунки. Применяется вместе с «Брусчаткой» и «Квадратом». Три цвета складываются в рисунок из кубов.',
      sizes: [[141, 141]], pcs: 58,
      prices: { 40: P([700, 800, 850, 900, 1050], [800, 900, 950, 1000, 1150], [1300, 1400]) },
      patterns: ['cubes'], colors: ['grey', 'orange', 'redbrown', 'listopad', 'red', 'black', 'white', 'brown'], site: 'romb',
    },
    {
      id: 'shestigrannik', cat: 'plitka', form: 'Скошенный шестиугольник', name: 'Скошенный шестиугольник', unit: 'м²', model: 'hex', img: 'shestiugolnik',
      text: 'Вытянутый шестигранник со скошенными торцами. Даёт графичный рисунок «соты».', site: 'shestigrannik',
      sizes: [[100, 100]], pcs: 70,
      prices: { 40: P([700, 800, 850, 900, 1000], [800, 900, 950, 1000, 1050], [1300, 1400]) },
      patterns: ['rows'],
    },
    {
      id: 'trilistnik', cat: 'plitka', form: 'Трилистник', name: 'Трилистник', unit: 'м²', model: 'trilistnik', img: 'trilistnik',
      text: 'Фигурный камень 197×197×197 мм с плотным сцеплением: плитки «держат» друг друга.', site: 'trilistnik',
      sizes: [[197, 197]], pcs: 40,
      prices: { 40: P([700, 800, 850, 900, 1000], [800, 900, 850, 900, 1000], [1300, 1400]) },
      patterns: ['rows'],
    },
    {
      id: 'taktil', cat: 'plitka', form: 'Тактильная', name: 'Тактильная плитка', unit: 'шт', model: 'taktil', img: 'taktilnaya',
      text: 'Плитка 300×300×80 мм с рифлением и конусами для навигации слабовидящих пешеходов.',
      sizes: [[300, 300]], pcs: 11, fixedPrice: 150, onlyColor: 'yellow', heights: [80], site: 'taktil',
    },

    // ---------- бордюры и поребрики (₽ за штуку) ----------
    {
      id: 'porebrik-trot', cat: 'bordyur', form: 'Поребрик', name: 'Поребрик тротуарный 1000×200', unit: 'шт', model: 'porebrik', img: 'bordyur-tr',
      text: 'Отделяет тротуар от клумб и газонов, удерживает мощение. Длина 1 метр, высота 200 мм, вес 25–38,6 кг.', colors: ['grey', 'brown', 'yellow', 'white', 'red'], site: 'porebrik-trot',
      sizes: [[1000, 200]], widthLabel: 'Ширина', bordur: true,
      prices: {
        60: P([270, 310, 330, 330, 350], [300, 350, 360, 360, 370], [370, 500]),
        80: P([290, 330, 350, 350, 370], [320, 370, 380, 380, 390], [390, 520]),
      },
    },
    {
      id: 'porebrik-sharn', cat: 'bordyur', form: 'Поребрик', name: 'Поребрик шарнирный 390×200', unit: 'шт', model: 'sharnir', img: 'bordyur-tr',
      text: 'Звенья с шарнирным стыком для изгибов дорожек и клумб: элементы соединяются под разными углами.', colors: ['grey', 'brown', 'red', 'yellow', 'white'], site: 'porebrik-sharn',
      sizes: [[390, 200]], widthLabel: 'Ширина', bordur: true,
      prices: { 80: P([150, 200, 210, 210, 230], [250, 300, 310, 310, 330], [430, 450]) },
    },
    {
      id: 'porebrik-prim', cat: 'bordyur', form: 'Поребрик', name: 'Поребрик примыкающий 500×200', unit: 'шт', model: 'primyk', img: 'bordyur-tr',
      text: 'Плоский поребрик для аккуратного стыка мощения с отмосткой, газоном или стеной.', colors: ['grey', 'red', 'brown', 'yellow', 'white'],
      sizes: [[500, 200]], widthLabel: 'Ширина', bordur: true,
      prices: { 70: P([160, 180, 190, 190, 210], [250, 300, 310, 310, 330], [220, 340]) },
    },
    {
      id: 'bordyur-dor', cat: 'bordyur', form: 'Бордюр', name: 'Бордюр дорожный 1000×300', unit: 'шт', model: 'bordyurDor', img: 'bordyur-dor',
      text: 'Массивный бордюр БР.100.30.15 для проездов, парковок и улиц. Вес 93 кг.', colors: ['grey', 'red', 'white', 'brown'], site: 'bordyur-dor',
      sizes: [[1000, 300]], widthLabel: 'Ширина', bordur: true,
      prices: {
        150: P([560, 590, 620, 620, 640], null, null),
        180: P([600, 630, 660, 660, 680], null, null),
      },
    },

    // ---------- элементы благоустройства ----------
    {
      id: 'palisad-round', cat: 'blag', form: 'Палисад', name: 'Палисад круглый', unit: 'шт', model: 'palisadRound', img: 'palisad',
      text: 'Столбики диаметром 120 мм и высотой 300 мм для клумб, перепадов высот и ограждения газона.',
      sizes: [[120, 120]], heightLabel: 'Высота', bordur: true,
      prices: { 300: P([170, 200, 250, 250, 300], null, null) },
    },
    {
      id: 'palisad-sq', cat: 'blag', form: 'Палисад', name: 'Палисад квадратный', unit: 'шт', model: 'palisadSq', img: 'palisad',
      text: 'Квадратные столбики 120×120 мм высотой 300 мм. Строгая линия для клумб и грядок.',
      sizes: [[120, 120]], heightLabel: 'Высота', bordur: true,
      prices: { 300: P([170, 200, 250, 250, 300], null, null) },
    },
    {
      id: 'gazon', cat: 'blag', form: 'Газонная решётка', name: 'Газонная решётка', unit: 'м²', model: 'gazon', img: 'gazon',
      text: 'Сотовая панель из бетона: ячейки засыпаются почвой и засеваются травой. Для гостевых парковок, проездов и площадок.', colors: ['grey', 'red', 'brown', 'yellow', 'white'], site: 'gazon',
      sizes: [[400, 400], [600, 400]], pcs: 6,
      prices: { 80: P([1000, 1100, 1150, 1150, 1200], null, null) },
    },

    // ---------- стеновые блоки (₽ за штуку) ----------
    {
      id: 'blok-120', site: 'blok', cat: 'blok', form: 'Стеновой блок', name: 'Блок перегородочный 390×190×120', unit: 'шт', model: 'blok120', img: 'stenovoj',
      text: 'Пустотелый блок для перегородок и хозяйственных построек.',
      sizes: [[390, 190]], heights: [120], blockPrice: { grey: 45 },
    },
    {
      id: 'blok-190', site: 'blok', cat: 'blok', form: 'Стеновой блок', name: 'Блок стеновой 390×190×190', unit: 'шт', model: 'blok190', img: 'stenovoj',
      text: 'Пустотелый блок с двумя пустотами для стен и заборов. Есть цветные варианты.',
      sizes: [[390, 190]], heights: [190], blockPrice: { grey: 55, red: 75, yellow: 89, black: 75 },
    },
    {
      id: 'blok-3', site: 'blok', cat: 'blok', form: 'Стеновой блок', name: 'Блок с тремя пустотами 390×190×190', unit: 'шт', model: 'blok3', img: 'stenovoj',
      text: 'Блок с тремя круглыми пустотами: прочный и удобный для армирования.',
      sizes: [[390, 190]], heights: [190], blockPrice: { grey: 60 },
    },
    {
      id: 'blok-skala', site: 'blok', cat: 'blok', form: 'Стеновой блок', name: 'Блок декоративный «Скала»', unit: 'шт', model: 'blokSkala', img: 'stenovoj',
      text: 'Блок с рваной фактурой «скала» для заборов и фасадов. Не требует отделки.',
      sizes: [[390, 190]], heights: [190], blockPrice: { grey: 70, red: 80, yellow: 85, black: 80 },
    },
    // ---------- есть на сайте завода, цену уточняет менеджер ----------
    { id: 'origami', cat: 'plitka', form: 'Оригами', name: 'Оригами', unit: 'м²', onRequest: true, model: 'origami', patterns: ['rows', 'diag'], pcs: 25, site: 'origami', text: 'Фигурная плитка с сайта завода. Размеры, цвета и цену уточните у менеджера.' },
    { id: 'triada', cat: 'plitka', form: 'Триада', name: 'Триада', unit: 'м²', onRequest: true, model: 'triada', patterns: ['rows', 'across'], site: 'triada', text: 'Фигурная плитка «Триада». Размеры, цвета и цену уточните у менеджера.' },
    { id: 'domino', cat: 'plitka', form: 'Домино', name: 'Домино', unit: 'м²', onRequest: true, model: 'domino', patterns: ['rows', 'across', 'diag'], site: 'domino', text: 'Плитка «Домино». Размеры, цвета и цену уточните у менеджера.' },
    { id: 'trapeciya', cat: 'plitka', form: 'Трапеция', name: 'Трапеция', unit: 'м²', onRequest: true, model: 'trapeciya', patterns: ['stars'], site: 'trapeciya', text: 'Плитка «Трапеция». Размеры, цвета и цену уточните у менеджера.' },
    { id: 'vazon', cat: 'blag', form: 'Вазон', name: 'Вазон «Парковый»', unit: 'шт', onRequest: true, site: 'vazon', photo: 'img/site/vazon/00.webp', text: 'Бетонный вазон для цветов и кустарников на площадках, у входа и вдоль дорожек.' },
    { id: 'elementy', cat: 'blag', form: 'Элементы забора', name: 'Крышки забора и лотки водоотвода', unit: 'шт', onRequest: true, site: 'elementy', photo: 'img/site/elementy/00.webp', text: 'Крышки столба и стены забора, широкий и узкий лоток водоотвода.' },
    { id: 'dekor-blok', cat: 'blok', form: 'Декоративный блок', name: 'Декоративный блок', unit: 'шт', onRequest: true, site: 'dekor-blok', photo: 'img/site/dekor-blok/00.webp', text: 'Декоративные блоки для заборов, колонн и ограждений.' },
  ];

  const CATS = {
    plitka: 'Тротуарная плитка',
    bordyur: 'Бордюры и поребрики',
    blag: 'Элементы благоустройства',
    blok: 'Стеновые блоки',
  };

  const PATTERNS = {
    run: 'Вразбежку', herring: 'Ёлочка', herring45: 'Ёлочка 45°', basket: 'Плетёнка',
    grid: 'Сетка', diag: 'По диагонали', mix: 'Два размера',
    rows: 'Ряды', across: 'Поперёк', cubes: 'Объёмные кубы', stars: 'Звёзды',
  };

  const colorById = id => COLORS.find(c => c.id === id);

  // доступные варианты товара
  function heightsOf(p) { return p.heights || Object.keys(p.prices || {}).map(Number); }
  const look = id => { const c = colorById(id) || COLORS[0]; return { colors: c.hex, tex: c.tex || null }; };
  function surfacesOf(p, h) {
    if (!p.prices) return ['smooth'];
    const row = p.prices[h || heightsOf(p)[0]];
    return Object.keys(SURFACES).filter(s => row && row[s]);
  }
  function colorsOf(p) {
    if (p.onlyColor) return [colorById(p.onlyColor)];
    if (p.blockPrice) return Object.keys(p.blockPrice).map(colorById);
    if (p.onRequest && !p.patterns) return [];
    return (p.colors || BASE_COLORS).map(colorById);
  }
  // цена за единицу для выбранного варианта
  function priceOf(p, h, surface, colorId) {
    if (p.onRequest) return 0;
    if (p.fixedPrice) return p.fixedPrice;
    if (p.blockPrice) return p.blockPrice[colorId] || p.blockPrice.grey;
    const row = p.prices[h] || p.prices[heightsOf(p)[0]];
    const c = colorById(colorId) || COLORS[0];
    if (surface === 'marble' && row.marble) return row.marble[c.g === 4 ? 1 : 0];
    const list = row[surface] || row.smooth;
    return list[c.g];
  }
  function minPrice(p) {
    if (p.fixedPrice) return p.fixedPrice;
    if (p.blockPrice) return Math.min(...Object.values(p.blockPrice));
    let m = Infinity;
    if (p.onRequest) return 0;
    for (const h of heightsOf(p)) for (const s of surfacesOf(p, h)) for (const c of colorsOf(p)) m = Math.min(m, priceOf(p, h, s, c.id));
    return m;
  }
  // примерный вес 1 м² (плотность вибропрессованного бетона ≈ 2300 кг/м³)
  const weightM2 = h => Math.round(h * 2.3);
  const money = n => new Intl.NumberFormat('ru-RU').format(Math.round(n)).replace(/\s/g, ' ');

  window.SP = { COLORS, BASE_COLORS, look, SURFACES, PRODUCTS, CATS, PATTERNS, colorById, heightsOf, surfacesOf, colorsOf, priceOf, minPrice, weightM2, money,
    byId: id => PRODUCTS.find(p => p.id === id),
    PRICE_DATE: '01.06.2025',
    PHONE: '+7 988 333-64-00', PHONE_RAW: '+79883336400', CITY: 'Славянск-на-Кубани', ADDRESS: 'ул. Совхозная, 1', HOURS: 'Пн–Сб с 8:00 до 18:00', EMAIL: 'kdb-fslav@yandex.ru',
  };
})();
