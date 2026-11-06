(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = id => document.getElementById(id);
  const money = n => new Intl.NumberFormat('ru-RU').format(Math.round(n)).replace(/\s/g, ' ') + ' ₽';
  const short = n => (n / 1e6).toFixed(1).replace('.', ',') + ' млн';

  // Проекты с карточки на Яндекс Картах
  const PROJECTS = [
    { name: 'Дом 89 м²', area: 89, price: 5800000, facade: 'oak', spec: ['Дом 12 × 11 м', 'Фундамент свайно-ростверковый, плита', 'Несущие стены: газобетон 375 мм', 'Перегородки: газобетон 100 мм'] },
    { name: 'Одноэтажный дом 116 м²', area: 116, price: 7000000, facade: 'grey', spec: ['Кирпич ЛСР серый', 'Фундамент свайно-ростверковый, плита', 'Несущие стены: газобетон 375 мм', 'Перегородки: газобетон 100 мм'] },
    { name: 'Дом 118 м²', area: 118, price: 7300000, facade: 'oak', spec: ['Комплектация: тёплый контур'] },
    { name: 'Одноэтажный дом 125 м²', area: 125, price: 7800000, facade: 'oak', spec: ['Фундамент свайно-ростверковый, плита', 'Бетонные полы', 'Несущие стены: газобетон 375 мм', 'Перегородки: газобетон 100 мм'] },
    { name: 'Дом 132 м²', area: 132, price: 7400000, facade: 'oak', spec: ['Кирпич Браер «кора дуба» на тёмном шве', 'Фундамент: свайно-ростверковый, плита или лента', 'Несущие стены: газобетон 375 мм', 'Перегородки: газобетон 100 мм'] },
    { name: 'Одноэтажный дом 132 м²', area: 132, price: 7700000, facade: 'oak', spec: ['Закладные: вода, электричество, канализация', 'Стены: блок 375 мм (бонолит или калужский газобетон)', 'Фасад: облицовочный кирпич', 'Фундамент свайно-ростверковый, плитный'] },
  ];
  const nearest = a => PROJECTS.reduce((b, p) => (Math.abs(p.area - a) < Math.abs(b.area - a) ? p : b));
  // Линия по ценам карточки: 89 м² — 5,8 млн, 116 м² — 7,0 млн, 132 м² — 7,4–7,7 млн
  const basePrice = a => 2070000 + 41900 * a;

  // ---------- шапка и меню ----------
  (() => {
    const nav = $('nav'), burger = $('burger'), links = $('navLinks'), hero = document.querySelector('.hero');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > hero.offsetHeight - nav.offsetHeight - 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    const setOpen = open => {
      nav.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    };
    burger.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    links.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
    document.addEventListener('click', e => { if (!nav.contains(e.target)) setOpen(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1080) setOpen(false); });
  })();

  // ---------- карточки проектов (до наблюдателя появления) ----------
  $('projectGrid').innerHTML = PROJECTS.map((p, i) => `
    <article class="project reveal">
      <p class="project-area">${p.area} м²</p>
      <h3>${p.name}</h3>
      <p class="project-price">${money(p.price)}</p>
      <ul>${p.spec.map(s => `<li>${s}</li>`).join('')}</ul>
      <button class="btn btn-outline" type="button" data-p="${i}">Показать в 3D</button>
    </article>`).join('');

  // ---------- появление блоков ----------
  (() => {
    const items = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const sibs = [...el.parentElement.children].filter(x => x.classList.contains('reveal'));
        el.style.transitionDelay = Math.min(sibs.indexOf(el), 4) * 0.1 + 's';
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    items.forEach(el => io.observe(el));
  })();

  // ---------- общее состояние: 3D и калькулятор показывают один дом ----------
  const state = { area: 125, floors: 1, found: 'pile', facade: 'brick', look: 'oak' };
  let house = null;
  const estimate = { text: '' };

  function priceNow() {
    const fl = state.floors === 2 ? .95 : 1;
    const fo = { pile: 1, slab: 1.03, strip: 1.02 }[state.found];
    const fa = state.facade === 'plaster' ? .96 : 1;
    return basePrice(state.area) * fl * fo * fa;
  }

  function sync() {
    const p = priceNow();
    const rounded = Math.round(p / 10000) * 10000;
    const near = nearest(state.area);
    $('viewArea').value = state.area;
    $('calcArea').value = state.area;
    $('viewAreaOut').textContent = state.area + ' м²';
    $('areaOut').textContent = state.area + ' м²';
    ['viewArea', 'calcArea'].forEach(id => $(id).style.setProperty('--fill', ((state.area - 60) / 190 * 100).toFixed(1) + '%'));
    [['viewFloors', String(state.floors)], ['calcFloors', String(state.floors)], ['calcFound', state.found], ['calcFacade', state.facade], ['viewFacade', state.look]].forEach(([id, v]) => {
      $(id).querySelectorAll('button').forEach(b => { b.classList.toggle('on', b.dataset.v === v); b.setAttribute('aria-pressed', String(b.dataset.v === v)); });
    });
    $('resPrice').textContent = money(rounded);
    $('resRange').textContent = `примерно от ${short(p * .93)} до ${short(p * 1.07)} ₽`;
    $('resM2').textContent = money(Math.round(p / state.area / 100) * 100);
    $('resNear').textContent = `${near.area} м², ${short(near.price)} ₽`;
    $('viewPrice').textContent = '≈ ' + money(rounded);
    const foundName = { pile: 'свайно-ростверковый', slab: 'плита', strip: 'ленточный' }[state.found];
    estimate.text = `${state.area} м², ${state.floors === 2 ? '2 этажа' : '1 этаж'}, фундамент: ${foundName}, фасад: ${state.facade === 'plaster' ? 'штукатурка' : 'кирпич'}, ≈ ${money(rounded)}`;
  }

  function setHouse(params) {
    if (house) house.setParams(params);
  }
  function setLook(k) {
    state.look = k;
    state.facade = k === 'plaster' ? 'plaster' : 'brick';
    if (house) house.setFacade(k);
    if (window.SP3D) $('facadeName').textContent = window.SP3D.FACADES[k].name;
    sync();
  }

  // ---------- 2. 3D-дом ----------
  const STAGES = [
    { short: 'Участок', name: 'Участок', text: 'Разметка осей будущего дома на вашем участке.' },
    { short: 'Сваи', name: 'Сваи', text: 'Первая часть свайно-ростверкового фундамента: сваи по контуру и под несущими стенами.' },
    { short: 'Ростверк и плита', name: 'Ростверк и плита', text: 'Ростверк связывает сваи, сверху плита и бетонные полы.' },
    { short: 'Стены', name: 'Несущие стены', text: 'Газобетон 375 мм: бонолит или калужский газобетон.' },
    { short: 'Перегородки', name: 'Перегородки', text: 'Межкомнатные перегородки из газобетона толщиной 100 мм.' },
    { short: 'Кровля', name: 'Стропила и кровля', text: 'Стропильная система и вальмовая крыша с выносом над террасой.' },
    { short: 'Фасад', name: 'Фасад и окна', text: 'Облицовочный кирпич, например Браер «кора дуба» на тёмном шве. Затем окна и входная дверь.' },
    { short: 'Готово', name: 'Дом готов', text: '' },
  ];
  (() => {
    const canvas = $('houseCanvas'), viewer = $('viewer'), list = $('stages'), info = $('stageInfo');
    list.innerHTML = STAGES.map((s, i) => `<li><button class="stage-chip" type="button" data-i="${i}"><b>${String(i + 1).padStart(2, '0')}</b><span>${s.short}</span></button></li>`).join('');
    const chips = [...list.querySelectorAll('.stage-chip')];
    function showStage(i) {
      const s = STAGES[i];
      chips.forEach((c, k) => { c.classList.toggle('on', k === i); c.classList.toggle('done', k < i); });
      $('playerMonth').textContent = `Этап ${i + 1} из ${STAGES.length}`;
      $('playerStage').textContent = s.name;
      info.querySelector('.stage-name').textContent = s.name;
      const near = nearest(state.area);
      info.querySelector('.stage-text').textContent = i === STAGES.length - 1
        ? `Похожий дом в ваших проектах: ${near.name}, ${money(near.price)}. Материал и работа.`
        : s.text;
      const chip = chips[i];
      if (list.scrollWidth > list.clientWidth + 4) {
        const left = chip.parentElement.offsetLeft - (list.clientWidth - chip.parentElement.offsetWidth) / 2;
        list.scrollTo({ left, behavior: reduced ? 'auto' : 'smooth' });
      }
    }
    showStage(0);
    if (!window.SP3D) { viewer.classList.add('no3d'); return; }
    house = window.SP3D.createHouse(canvas, { onStage: showStage, onError: () => viewer.classList.add('no3d') });
    if (!house) { viewer.classList.add('no3d'); return; }
    window.__house = house;
    house.onTouch = () => $('dragHint').classList.add('off');

    chips.forEach((c, i) => c.addEventListener('click', () => house.goTo(i)));
    $('playerBtn').addEventListener('click', () => house.play(0));

    let started = false;
    new IntersectionObserver(es => es.forEach(e => {
      const on = e.isIntersecting;
      house.setVisible(on);
      if (on && !started && e.intersectionRatio >= .4) {
        started = true;
        if (reduced) house.jump(window.SP3D.LAST); else house.play(0);
      }
    }), { threshold: [0, .4] }).observe(viewer);

    $('viewArea').addEventListener('input', e => { state.area = +e.target.value; setHouse({ area: state.area }); sync(); });
    $('viewFloors').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; state.floors = +b.dataset.v; setHouse({ floors: state.floors }); sync(); });
    $('viewFacade').addEventListener('click', e => { const b = e.target.closest('button'); if (b) setLook(b.dataset.v); });
    $('viewRoof').addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      house.setRoof(b.dataset.v);
      $('viewRoof').querySelectorAll('button').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      $('roofName').textContent = window.SP3D.ROOFS[b.dataset.v].name;
    });

    $('projectGrid').addEventListener('click', e => {
      const b = e.target.closest('button[data-p]'); if (!b) return;
      const p = PROJECTS[+b.dataset.p];
      state.area = p.area; state.floors = 1;
      setHouse({ area: p.area, floors: 1 });
      setLook(p.facade);
      house.jump(window.SP3D.LAST);
      started = true;
      showStage(STAGES.length - 1);
      $('player').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });
  })();

  // ---------- калькулятор ----------
  (() => {
    const seg = (id, fn) => $(id).addEventListener('click', e => { const b = e.target.closest('button'); if (b) { fn(b.dataset.v); sync(); } });
    seg('calcFloors', v => { state.floors = +v; setHouse({ floors: state.floors }); });
    seg('calcFound', v => { state.found = v; });
    seg('calcFacade', v => {
      state.facade = v;
      if (v === 'plaster' && state.look !== 'plaster') setLook('plaster');
      if (v === 'brick' && state.look === 'plaster') setLook('oak');
    });
    $('calcArea').addEventListener('input', e => { state.area = +e.target.value; setHouse({ area: state.area }); sync(); });
    $('resCta').addEventListener('click', () => {
      $('estimateField').value = estimate.text;
      const box = $('formEstimate');
      box.textContent = 'Ваш расчёт: ' + estimate.text;
      box.hidden = false;
    });
    sync();
  })();

  // ---------- заявка (набросок: никуда не отправляется) ----------
  (() => {
    const form = $('leadForm'), note = $('formNote'), phone = form.elements.phone, nameInput = form.elements.name;
    phone.addEventListener('input', () => {
      let d = phone.value.replace(/\D/g, '');
      if (!d) { phone.value = ''; return; }
      if (d[0] === '8') d = '7' + d.slice(1);
      if (d[0] !== '7') d = '7' + d;
      d = d.slice(0, 11);
      let out = '+7';
      if (d.length > 1) out += ' (' + d.slice(1, 4);
      if (d.length >= 4) out += ')';
      if (d.length > 4) out += ' ' + d.slice(4, 7);
      if (d.length > 7) out += '-' + d.slice(7, 9);
      if (d.length > 9) out += '-' + d.slice(9, 11);
      phone.value = out;
    });
    [nameInput, phone].forEach(el => el.addEventListener('input', () => el.closest('.field').classList.remove('invalid')));
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = nameInput.value.trim(), digits = phone.value.replace(/\D/g, '');
      nameInput.closest('.field').classList.toggle('invalid', !name);
      phone.closest('.field').classList.toggle('invalid', digits.length < 11);
      if (!name || digits.length < 11) {
        note.className = 'form-note err';
        note.textContent = !name ? 'Пожалуйста, укажите имя.' : 'Пожалуйста, укажите телефон полностью.';
        (!name ? nameInput : phone).focus();
        return;
      }
      note.className = 'form-note ok';
      note.textContent = `Спасибо, ${name}! Это набросок, поэтому заявка никуда не отправлена. На готовом сайте она придёт вам на почту.`;
    });
  })();
})();
