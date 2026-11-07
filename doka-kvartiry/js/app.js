(() => {
  'use strict';
  const { $, money, reduced, initNav, initReveal, initForm, initCount, showViewer, passEstimate, seg, mark, stagesBar } = window.DokaUI;

  // Прайс с doka-stroi.ru/price/
  const PACKS = {
    cosmetic: { name: 'Косметический', short: 'Косметика', rate: 14900, note: 'Обновить стены и пол, не трогая инженерку и санузел', list: ['Частичная шпатлёвка стен', 'Частичное выравнивание полов', 'Обои', 'Ламинат и плинтус', 'Покраска откосов', 'Потолок ПВХ и освещение', 'Смета, доставка материалов, уборка'] },
    newbuild: { name: 'Новостройка', short: 'Новостройка', rate: 23500, note: 'Квартира от застройщика под ключ', list: ['Частичная штукатурка, сплошная шпатлёвка', 'Розетки и выключатели', 'Плитка в ванной и санузле', 'Сантехника', 'Обои, ламинат и плинтус', 'Покраска откосов', 'Потолок ПВХ и освещение'] },
    comfort: { name: 'Комфорт', short: 'Комфорт', rate: 27700, note: 'Всё из «Новостройки» плюс межкомнатные двери', list: ['Частичная штукатурка, сплошная шпатлёвка', 'Розетки и выключатели', 'Плитка в ванной и санузле', 'Сантехника', 'Обои, ламинат и плинтус', 'Потолок ПВХ и освещение', 'Межкомнатные двери'] },
    prestige: { name: 'Престиж', short: 'Престиж', rate: 34000, note: 'Стены в геометрии под покраску, полная замена инженерки', list: ['Штукатурка стен в геометрии', 'Высококачественная шпатлёвка', 'Электромонтаж, вода и канализация', 'Плитка и сантехника', 'Покраска стен', 'Ламинат, плинтус, потолок ПВХ', 'Освещение, двери, уборка помещения'] },
  };
  const LAYOUT_AREA = { studio: 30, one: 42, two: 60, three: 82 };
  const LAYOUT_NAME = { studio: 'студия', one: '1-комнатная', two: '2-комнатная', three: '3-комнатная' };
  const pickLayout = a => (a <= 36 ? 'studio' : a <= 51 ? 'one' : a <= 71 ? 'two' : 'three');
  const STAGES = [
    { short: 'Бетон', name: 'Бетон', text: 'Квартира как её сдаёт застройщик: плита, несущие стены и окна.' },
    { short: 'Перегородки', name: 'Перегородки', text: 'Возводим перегородки по согласованной планировке.' },
    { short: 'Электрика и трубы', name: 'Электрика и трубы', text: 'Скрытая проводка, вода и канализация: всё, что потом уйдёт в стены и пол.' },
    { short: 'Штукатурка и стяжка', name: 'Штукатурка и стяжка', text: 'Штукатурим стены по маякам и выравниваем полы.' },
    { short: 'Стены и плитка', name: 'Стены и плитка', text: 'Шпатлёвка, плитка в санузле, обои или покраска.' },
    { short: 'Полы', name: 'Полы', text: 'Укладка ламината и плитки на пол.' },
    { short: 'Двери и свет', name: 'Двери и свет', text: 'Межкомнатные двери, плинтус, откосы, розетки и освещение.' },
    { short: 'Готово', name: 'Готово', text: 'Мебель показана для примера. Комплектацию мебелью можно заказать отдельно.' },
  ];

  const state = { layout: 'two', pack: 'comfort', area: 60, design: false };
  let api = null;
  const estimate = { text: '' };

  function sync() {
    const P = PACKS[state.pack];
    const works = state.area * P.rate, design = state.design ? state.area * 1950 : 0, total = works + design;
    $('resPrice').textContent = 'от ' + money(total);
    $('resNote').textContent = `${P.name}: ${state.area} м² × ${money(P.rate)}${state.design ? ' + дизайн-проект' : ''}`;
    $('floatName').textContent = `${P.name}, ${state.area} м²`;
    $('floatPrice').textContent = 'от ' + money(total);
    $('areaOut').textContent = state.area + ' м²';
    const r = $('ctlArea');
    r.value = state.area;
    r.style.setProperty('--fill', ((state.area - 20) / 130 * 100).toFixed(1) + '%');
    mark('ctlLayout', state.layout);
    mark('ctlPack', state.pack);
    $('packNow').textContent = P.note;
    document.querySelectorAll('#packCards .pack').forEach(c => c.classList.toggle('now', c.dataset.p === state.pack));
    estimate.text = `${LAYOUT_NAME[state.layout]}, ${state.area} м², пакет «${P.name}»${state.design ? ', с дизайн-проектом' : ''}: от ${money(total)}`;
  }

  // Кнопки пакетов и карточки
  $('ctlPack').innerHTML = Object.entries(PACKS).map(([k, p]) => `<button type="button" data-v="${k}">${p.short}<small>от ${(p.rate / 1000).toString().replace('.', ',')} тыс.</small></button>`).join('');
  $('packCards').innerHTML = Object.entries(PACKS).map(([k, p]) => `
    <article class="pack reveal" data-p="${k}">
      <h3>${p.name}</h3>
      <p class="pack-price">от ${money(p.rate)}<small>/м²</small></p>
      <p class="pack-note">${p.note}</p>
      <ul>${p.list.map(x => `<li>${x}</li>`).join('')}</ul>
      <button class="text-btn" type="button" data-show="${k}">Показать в 3D</button>
    </article>`).join('');

  initNav();
  initReveal();
  initForm();
  initCount();

  const setPack = (k, anim = true) => { state.pack = k; if (api) api.setPackage(k, anim); sync(); };
  const setLayout = (k, anim = true) => { if (k === state.layout) return; state.layout = k; if (api) api.setLayout(k, anim); };

  seg('ctlPack', v => { setPack(v); showViewer($('viewer')); });
  seg('ctlLayout', v => { setLayout(v); state.area = LAYOUT_AREA[v]; sync(); showViewer($('viewer')); });
  $('ctlArea').addEventListener('input', e => { state.area = +e.target.value; setLayout(pickLayout(state.area)); sync(); });
  $('ctlDesign').addEventListener('change', e => { state.design = e.target.checked; sync(); });
  $('resCta').addEventListener('click', () => passEstimate(estimate.text));
  $('packCards').addEventListener('click', e => {
    const b = e.target.closest('button[data-show]');
    if (!b) return;
    setPack(b.dataset.show);
    $('viewer').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  });

  // ---------- 3D: запускаем после первой отрисовки страницы ----------
  const viewer = $('viewer'), labels = $('roomLabels');
  let started = false, moodTouched = false;
  const showStage = stagesBar($('stages'), $('stageInfo'), STAGES, i => { if (api) { started = true; moodTouched = true; api.goTo(i); showViewer(viewer); } });
  showStage(STAGES.length - 1);
  sync();

  function start3d() {
    if (!window.DokaApartment) { viewer.classList.add('no3d'); return; }
    let shown = '', evening = false;
    const moodBtn = $('btnMood');
    const setMood = on => {
      evening = on;
      api.setMood(on ? 'evening' : 'day');
      moodBtn.classList.toggle('on', on);
      moodBtn.setAttribute('aria-pressed', String(on));
      moodBtn.querySelector('span').textContent = on ? 'День' : 'Вечер';
    };
    api = window.DokaApartment.create($('scene'), {
      onStage: i => {
        showStage(i);
        // Первая сборка заканчивается вечерним светом: так квартира выглядит богаче
        if (i === STAGES.length - 1 && !moodTouched && api && api.playing) { moodTouched = true; setTimeout(() => setMood(true), 1300); }
      },
      onError: () => viewer.classList.add('no3d'),
      onReady: () => viewer.classList.add('ready'),
      onLabels: list => {
        const key = list ? 'on' : '';
        if (!list) { if (shown) { labels.innerHTML = ''; shown = ''; } return; }
        if (shown !== key + list.length) {
          labels.innerHTML = list.map(r => `<span class="room-label">${r.name}<small>${r.area} м²</small></span>`).join('');
          shown = key + list.length;
        }
        [...labels.children].forEach((el, i) => { el.style.transform = `translate(calc(${list[i].x.toFixed(1)}px - 50%), calc(${list[i].y.toFixed(1)}px - 50%))`; });
      },
    });
    if (!api) { viewer.classList.add('no3d'); return; }
    window.__apt = api;
    api.setYaw(-.62);
    api.touched = () => $('dragHint').classList.add('off');
    new IntersectionObserver(es => es.forEach(e => {
      api.setVisible(e.isIntersecting);
      if (e.isIntersecting && !started && e.intersectionRatio >= .35) {
        started = true;
        if (reduced) { api.jump(api.LAST); setMood(true); } else api.play(0);
      }
    }), { threshold: [0, .35] }).observe(viewer);
    $('btnReplay').addEventListener('click', () => { started = true; moodTouched = false; if (evening) setMood(false); api.play(0); showViewer(viewer); });
    let plan = false;
    moodBtn.addEventListener('click', () => { moodTouched = true; setMood(!evening); });
    $('btnPlan').addEventListener('click', e => {
      plan = !plan;
      api.setPlan(plan);
      e.currentTarget.classList.toggle('on', plan);
      e.currentTarget.setAttribute('aria-pressed', String(plan));
      viewer.classList.toggle('plan', plan);
      if (plan) $('dragHint').classList.add('off');
    });
  }
  requestAnimationFrame(() => setTimeout(start3d, 40));
})();
