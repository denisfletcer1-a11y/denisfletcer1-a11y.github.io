// Главная: популярные изделия и мини-конструктор на фото двора
(function () {
  'use strict';
  const { $, cardHTML } = window.UI, SP = window.SP;
  $('#popularGrid').innerHTML = ['novy', 'stary', 'bruschatka', 'myunhen'].map(SP.byId).map(cardHTML).join('');

  const stage = $('#homeStage'), sw = $('#homeSw');
  const PALETTE = ['malva', 'muskat', 'step', 'listopad-ng'];
  let kb = null, color = 'malva';
  const design = () => ({ form: 'novy', pattern: 'rows', ...SP.look(color), surface: 'smooth' });
  PALETTE.forEach(id => {
    const c = SP.colorById(id), b = document.createElement('button');
    b.type = 'button'; b.dataset.id = id; b.dataset.name = c.name; b.title = c.name; b.setAttribute('aria-label', c.name);
    b.innerHTML = '<img alt="">';
    b.classList.toggle('on', id === color);
    b.addEventListener('click', () => { color = id; sw.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); if (kb) kb.set(design()); });
    sw.appendChild(b);
  });
  async function start() {
    if (kb || !window.Paving || !Paving.hasWebGL()) return;
    kb = Paving.createConstructor($('#homeCanvas'));
    if (!kb) return;
    const { w, h } = await kb.setScene(JSON.parse(JSON.stringify(SCENES[0])));
    stage.style.aspectRatio = w + ' / ' + h;
    kb.set(design());
    stage.classList.add('ready');
    await Paving.preload(SP.COLORS.map(c => c.tex));
    let i = 0;
    const next = () => { const b = sw.children[i++]; if (!b) return; b.querySelector('img').src = Paving.swatch({ form: 'novy', pattern: 'rows', ...SP.look(b.dataset.id), surface: 'smooth' }, 90, 0.55); setTimeout(next, 0); };
    next();
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); start(); } }, { rootMargin: '300px' });
    io.observe(stage);
  } else start();
})();

// ---------- как у образца: слайдер хитов с ценами, бегущая лента, галерея объектов ----------
(function () {
  const { $ } = window.UI, SP = window.SP;
  const HITS = [['novy', 'malva'], ['stary', 'listopad'], ['bruschatka', 'red'], ['kvadrat', 'listopad'], ['myunhen', 'grey'], ['antik', 'yellow'], ['romb', 'grey'], ['antara', 'brown']];
  const tr = $('#hitsTrack');
  if (tr) {
    tr.innerHTML = HITS.map(([id, c]) => {
      const p = SP.byId(id), col = SP.colorById(c);
      return `<a class="hit" href="product.html?id=${id}&color=${c}"><img src="img/products/${id}.webp" alt="${p.name}" loading="lazy"><span class="hit-c"><em>от ${SP.money(SP.minPrice(p))} ₽/м²</em><b>${p.name}</b><span>«${col.name}»</span><small>Есть в наличии</small></span></a>`;
    }).join('');
    if (window.Paving && Paving.hasWebGL()) Paving.preload(SP.COLORS.map(c => c.tex)).then(() => {
      [...tr.children].forEach((el, k) => setTimeout(() => {
        const [id, c] = HITS[k], p = SP.byId(id);
        el.querySelector('img').src = Paving.swatch({ form: p.model, pattern: p.patterns[0], ...SP.look(c), surface: 'smooth' }, 520, ['antara', 'myunhen'].includes(p.model) ? 1.6 : 1.1);
      }, k * 60));
    });
    let i = 0, stop = false;
    tr.addEventListener('pointerenter', () => { stop = true; }); tr.addEventListener('pointerleave', () => { stop = false; });
    setInterval(() => {
      if (stop || document.hidden || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const card = tr.children[0]; if (!card) return;
      i = (i + 1) % Math.max(1, tr.children.length - 2);
      tr.scrollTo({ left: i * (card.offsetWidth + 14), behavior: 'smooth' });
    }, 4000);
  }
  const tk = $('#ticker');
  if (tk) {
    const items = ['Собственное производство', 'Цемент М600 Д0', 'Прочность выше ГОСТ в 2 раза', '16 форм и 14 цветов', 'Гладкий, гранитный и мраморный слой', 'Бесплатная визуализация двора', 'Доставка манипулятором по краю', 'Скидки от объёма', 'Ежегодная сертификация', 'Укладка под ключ, замер бесплатно'];
    const row = items.map(t => `<span><i></i>${t}</span>`).join('');
    tk.innerHTML = row + row;
  }
  const og = $('#objs'), more = $('#objsMore');
  if (og && window.OBJECTS) {
    let shown = 0;
    const add = n => {
      const part = OBJECTS.slice(shown, shown + n);
      og.insertAdjacentHTML('beforeend', part.map(o => `<figure class="obj" data-zoom><img src="${o.img}" alt="${o.name}" loading="lazy"><figcaption><b>№${o.n}</b><a href="product.html?id=${o.pid}">${o.name}</a></figcaption></figure>`).join(''));
      shown += part.length;
      if (shown >= OBJECTS.length) more.hidden = true;
    };
    add(8);
    more.addEventListener('click', () => add(8));
  }
})();
