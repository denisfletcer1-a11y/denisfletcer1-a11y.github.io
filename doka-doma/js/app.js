(() => {
  'use strict';
  const { $, money, reduced, initNav, initReveal, initForm, initCount, showViewer, passEstimate, seg, mark, stagesBar } = window.DokaUI;

  // Цены за м² условные: у компании нет опубликованных цен на дома. Перед запуском поставим её расценки.
  const STYLES = {
    eco: { name: 'Эко-дом', area: 157, k: 1, img: 'p1', fact: 'Проект из портфолио: 157 м², плитный фундамент, несущий каркас из металлопрофиля, панорамное остекление.', text: 'Функциональный минимализм и высокая энергоэффективность: каркас из металлопрофиля, панорамные окна, скрытые коммуникации.', spec: '2 этажа, плитный фундамент' },
    barn: { name: 'Barn-House', area: 140, k: .94, img: 'p2', fact: 'Простая форма без свесов, большие окна и дерево в отделке.', text: 'Простая форма без свесов кровли, глубокие ниши с деревом и панорамными окнами, просторные общие зоны.', spec: '1 этаж, простая форма' },
    hitech: { name: 'Hi-Tech', area: 210, k: 1.16, img: 'p3', fact: 'Стекло и дерево, консольный второй этаж, большие пролёты.', text: 'Стекло, дерево и большие пролёты. Второй этаж выступает над первым и закрывает место для машины.', spec: '2 этажа, плоская кровля' },
  };
  const LEVELS = { box: { name: 'коробка', rate: 42000 }, warm: { name: 'тёплый контур', rate: 62000 }, key: { name: 'под ключ', rate: 95000 } };
  const STAGES = [
    { short: 'Участок', name: 'Участок', text: 'Выносим оси будущего дома и готовим площадку.' },
    { short: 'Фундамент', name: 'Фундамент', text: 'Монолитная плита: на такой стоит наш эко-дом в 157 м².' },
    { short: 'Каркас', name: 'Каркас', text: 'Несущий каркас из металлопрофиля даёт большие пролёты и тонкие стены.' },
    { short: 'Стены', name: 'Стены', text: 'Заполняем каркас и прокладываем инженерные системы.' },
    { short: 'Кровля', name: 'Кровля', text: 'Кровля закрывает дом, дальше идут окна и отделка.' },
    { short: 'Окна', name: 'Окна', text: 'Энергоэффективные стеклопакеты в алюминиевом профиле.' },
    { short: 'Фасад', name: 'Фасад', text: 'Чистовая отделка фасада: штукатурка, дерево или металл.' },
    { short: 'Готово', name: 'Дом готов', text: 'Благоустройство участка. Посмотрите дом днём и вечером, с подсветкой фасада.' },
  ];
  const state = { style: 'eco', area: 157, level: 'key' };
  let api = null;
  const estimate = { text: '' };

  function sync() {
    const S = STYLES[state.style], L = LEVELS[state.level];
    const m2 = Math.round(L.rate * S.k / 500) * 500;
    const total = Math.round(m2 * state.area / 10000) * 10000;
    $('resPrice').textContent = 'от ' + money(total);
    $('resNote').textContent = `${money(m2)} за м², ${L.name}. В наброске цена условная.`;
    $('floatName').textContent = `${S.name}, ${state.area} м²`;
    $('floatPrice').textContent = 'от ' + money(total);
    $('areaOut').textContent = state.area + ' м²';
    const r = $('ctlArea');
    r.value = state.area;
    r.style.setProperty('--fill', ((state.area - 90) / 230 * 100).toFixed(1) + '%');
    mark('ctlStyle', state.style);
    mark('ctlLevel', state.level);
    $('styleNow').textContent = S.fact;
    document.querySelectorAll('.style-card').forEach(c => c.classList.toggle('now', c.dataset.s === state.style));
    estimate.text = `${S.name}, ${state.area} м², ${L.name}: примерно от ${money(total)}`;
  }

  $('styleCards').innerHTML = Object.entries(STYLES).map(([k, s]) => `
    <article class="style-card reveal" data-s="${k}">
      <img src="img/${s.img}.webp" alt="${s.name}: дом из портфолио компании" loading="lazy" width="1200" height="1500">
      <div class="style-body">
        <h3>${s.name}</h3>
        <p class="style-spec">${s.spec}</p>
        <p>${s.text}</p>
        <button class="text-btn" type="button" data-show="${k}">Показать в 3D</button>
      </div>
    </article>`).join('');

  initNav();
  initReveal();
  initForm();
  initCount();

  // Пересборка дома при движении ползунка: только когда палец или мышь замедлились
  let areaTimer = 0;
  const setArea = a => {
    state.area = a;
    sync();
    if (!api) return;
    clearTimeout(areaTimer);
    areaTimer = setTimeout(() => api.setArea(a), 60);
  };
  const setStyle = (k, anim = true) => {
    if (api && k !== state.style) api.setStyleArea(k, STYLES[k].area, anim);
    state.style = k;
    state.area = STYLES[k].area;
    sync();
  };

  seg('ctlStyle', v => { setStyle(v); showViewer($('viewer')); });
  seg('ctlLevel', v => { state.level = v; sync(); });
  $('ctlArea').addEventListener('input', e => setArea(+e.target.value));
  $('resCta').addEventListener('click', () => passEstimate(estimate.text));
  $('styleCards').addEventListener('click', e => {
    const b = e.target.closest('button[data-show]');
    if (!b) return;
    setStyle(b.dataset.show);
    $('viewer').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  });

  // ---------- 3D: запускаем после первой отрисовки страницы ----------
  const viewer = $('viewer');
  let started = false, moodTouched = false;
  const showStage = stagesBar($('stages'), $('stageInfo'), STAGES, i => { if (api) { started = true; moodTouched = true; api.goTo(i); showViewer(viewer); } });
  showStage(STAGES.length - 1);
  sync();

  function start3d() {
    if (!window.DokaHouse) { viewer.classList.add('no3d'); return; }
    let evening = false;
    const moodBtn = $('btnMood');
    const setMood = on => {
      evening = on;
      api.setMood(on ? 'evening' : 'day');
      moodBtn.classList.toggle('on', on);
      moodBtn.setAttribute('aria-pressed', String(on));
      moodBtn.querySelector('span').textContent = on ? 'День' : 'Вечер';
    };
    api = window.DokaHouse.create($('scene'), {
      onStage: i => {
        showStage(i);
        // Дом достраивается, и наступает вечер: загорается свет в окнах
        if (i === STAGES.length - 1 && !moodTouched && api && api.playing) { moodTouched = true; setTimeout(() => setMood(true), 1100); }
      },
      onError: () => viewer.classList.add('no3d'),
      onReady: () => viewer.classList.add('ready'),
    });
    if (!api) { viewer.classList.add('no3d'); return; }
    window.__house = api;
    api.touched = () => $('dragHint').classList.add('off');
    moodBtn.addEventListener('click', () => { moodTouched = true; setMood(!evening); });
    new IntersectionObserver(es => es.forEach(e => {
      api.setVisible(e.isIntersecting);
      if (e.isIntersecting && !started && e.intersectionRatio >= .35) {
        started = true;
        if (reduced) { api.jump(api.LAST); setMood(true); } else api.play(0);
      }
    }), { threshold: [0, .35] }).observe(viewer);
    $('btnReplay').addEventListener('click', () => { started = true; moodTouched = false; if (evening) setMood(false); api.play(0); showViewer(viewer); });
    // Дом сдвинут вправо от текста, на узких экранах стоит по центру
    const wide = window.matchMedia('(min-aspect-ratio: 11/10) and (min-width: 560px)');
    const applyShift = () => {
      // Чем ближе экран к 4:3, тем правее стоит дом
      const extra = .03 * Math.min(1, Math.max(0, (1.78 - innerWidth / innerHeight) / .38));
      api.view.shiftX = wide.matches ? .2 + extra : 0;
      api.stage.dirty();
    };
    wide.addEventListener('change', applyShift);
    addEventListener('resize', applyShift);
    applyShift();
  }
  requestAnimationFrame(() => setTimeout(start3d, 40));
})();
