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
