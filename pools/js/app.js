// Сайт «Бассейны-строим.рф»: конструктор (панель, цена, связь с 3D-сценой), галерея, отзывы, заявка
(function () {
  var stage = document.getElementById('stage');
  var api = window.Pool3D.mount(stage, { intro: true });   // при первом показе бассейн собирается из слоёв
  var st = { shape: 'rect', len: 6, wid: 3, depth: 1.5, steps: 'straight', color: 'blue', light: true, heat: 'none' };
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return n.toLocaleString('ru-RU'); };
  var m = function (v) { return String(v.toFixed(1)).replace('.', ',') + ' м'; };
  var HEAT = { none: 0, electric: 55000, exchanger: 69600, pump: 200000 };              // цены подогрева с сайта
  var HEAT_NAME = { none: 'без подогрева', electric: 'электроподогрев', exchanger: 'теплообменник от котла', pump: 'инверторный теплонасос' };
  var STEP_NAME = { none: 'металлическая лестница', straight: 'ступени Классика', roman: 'ступени Бельэтаж' };
  // варианты чаш с сайта: базовая форма, диапазон диаметра для круглых
  var ROUND = { round: [2, 6], ground: [3, 6], kupel: [1.5, 3] };
  var RECT = { rect: 1, kids: 1, overflow: 1 };
  var SHAPE_NAME = { rect: 'прямоугольный', oval: 'овальный', round: 'круглый', kids: 'с детской зоной', overflow: 'переливной', ground: 'наземный самонесущий', kupel: 'купель', free: 'нестандартной формы' };

  // предварительная цена под ключ, подогнана под проекты с сайта: 4×3 ≈ 0,7–0,75 млн, 6×3 ≈ 0,85–1 млн, 10×4 ≈ 1,5 млн
  function price() {
    var area = ROUND[st.shape] ? Math.PI * st.wid * st.wid / 4
      : st.shape === 'oval' ? st.len * st.wid - (4 - Math.PI) * st.wid * st.wid / 4
      : st.shape === 'free' ? st.len * st.wid * 0.72
      : st.len * st.wid;
    var p = st.shape === 'kupel' ? 150000 + 40000 * area : 380000 + 30000 * area;
    p *= { '1.2': 0.94, '1.5': 1, '1.8': 1.08 }[String(st.depth)];
    // поправки по вариантам — ориентиры, согласовать с заказчиком
    p *= { overflow: 1.3, ground: 0.6, free: 1.15 }[st.shape] || 1;
    if (st.shape === 'kids') p += 60000;
    if (RECT[st.shape] && st.steps !== 'none') p += 32000;      // чаша со ступенями дороже на ~32 тыс. (128 990 против 96 640)
    p += HEAT[st.heat];
    return Math.round(p / 10000) * 10000;
  }
  // цена плавно докручивается до нового значения
  var shown = 0, priceRaf = 0;
  function countTo(el, target) {
    cancelAnimationFrame(priceRaf);
    var from = shown, t0 = performance.now();
    (function step(now) {
      var k = Math.min(1, (now - t0) / 450), e = 1 - Math.pow(1 - k, 3);
      shown = Math.round(from + (target - from) * e);
      el.textContent = 'от ' + fmt(Math.round(shown / 10000) * 10000) + ' ₽';
      if (k < 1) priceRaf = requestAnimationFrame(step); else { shown = target; el.textContent = 'от ' + fmt(target) + ' ₽'; }
    })(t0);
  }
  function paintRange(r) { r.style.setProperty('--p', ((r.value - r.min) / (r.max - r.min) * 100) + '%'); }
  function setOn(k, v) { document.querySelectorAll('[data-k=' + k + '] button').forEach(function (b) { b.classList.toggle('on', b.dataset.v === v); }); }
  function sync() {
    var round = ROUND[st.shape];
    $('rowLen').style.display = round ? 'none' : '';
    $('wLbl').textContent = round ? 'Диаметр' : 'Ширина';
    $('wid').min = round ? round[0] : 2;
    $('wid').max = round ? round[1] : 5;
    if (round) st.wid = Math.min(round[1], Math.max(round[0], st.wid));
    $('wid').value = st.wid;
    if (!round && st.len < st.wid + 1) { st.len = st.wid + 1; $('len').value = st.len; }
    $('vLen').textContent = m(st.len);
    $('vWid').textContent = m(st.wid);
    [$('len'), $('wid')].forEach(paintRange);
    // встроенные ступени — у прямоугольной чаши; у овальной и круглой — металлическая лестница
    document.querySelectorAll('[data-k=steps] button').forEach(function (b) { b.disabled = !RECT[st.shape] && b.dataset.v !== 'none'; });
    if (!RECT[st.shape] && st.steps !== 'none') { st.steps = 'none'; setOn('steps', 'none'); }
    countTo($('price'), price());
    api.set({ shape: st.shape, len: st.len, wid: st.wid, depth: st.depth, steps: st.steps, color: st.color, light: st.light, heat: st.heat === 'pump' });
  }

  document.querySelectorAll('[data-k]').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b || b.disabled) return;
      setOn(group.dataset.k, b.dataset.v);
      st[group.dataset.k] = group.dataset.k === 'depth' ? parseFloat(b.dataset.v) : b.dataset.v;
      if (group.dataset.k === 'shape' && b.dataset.v === 'kupel') st.wid = 2;
      if (group.dataset.k === 'shape' && b.dataset.v === 'ground') st.wid = Math.max(st.wid, 4);
      sync();
    });
  });
  $('len').addEventListener('input', function () { st.len = parseFloat(this.value); sync(); });
  $('wid').addEventListener('input', function () { st.wid = parseFloat(this.value); sync(); });
  $('light').addEventListener('change', function () { st.light = this.checked; sync(); });

  var ex = $('explodeBtn');
  function explode(on) {
    api.explode(on);
    ex.classList.toggle('on', on);
    ex.querySelector('span').textContent = on ? 'Собрать бассейн' : 'Разобрать на слои';
    document.querySelector('.hero').classList.toggle('exploded', on);
    layout();
  }
  ex.addEventListener('click', function () { explode(!api.exploded); });

  // на широком экране модель стоит ниже заголовка и левее панели; разобранная — на всю левую часть
  function layout() {
    var wide = innerWidth > 960, e = api.exploded;
    api.inset(wide ? (e ? 70 : 430) : 40, wide ? (e ? 30 : 60) : 30, wide ? -(380 + 40) : 0);
  }
  addEventListener('resize', layout);
  layout();

  // проекты: сначала 6, остальные по кнопке
  var projects = document.querySelector('.projects'), more = $('moreProjects');
  projects.classList.add('short');
  more.addEventListener('click', function () { projects.classList.remove('short'); more.remove(); });

  // просмотр фото и отзывов крупно
  var lb = $('lightbox');
  document.querySelectorAll('.gallery img, .reviews img').forEach(function (img) {
    img.addEventListener('click', function () { lb.querySelector('img').src = img.src; lb.hidden = false; });
  });
  lb.addEventListener('click', function () { lb.hidden = true; });

  // заявка (в демо никуда не отправляется)
  var modal = $('modal');
  function openLead(summary, title) {
    $('modalTitle').textContent = title;
    $('modalSummary').textContent = summary;
    modal.hidden = false;
  }
  $('ctaBtn').addEventListener('click', function () {
    var shape = SHAPE_NAME[st.shape];
    var size = ROUND[st.shape] ? '⌀ ' + m(st.wid) : m(st.len) + ' × ' + m(st.wid);
    openLead('Ваш бассейн: ' + shape + ', ' + size + ', глубина ' + m(st.depth) + ', ' + STEP_NAME[st.steps] + ', ' + HEAT_NAME[st.heat] +
      (st.light ? ', освещение' : '') + '. Предварительно ' + $('price').textContent + '.', 'Расчёт стоимости бассейна');
  });
  document.querySelectorAll('[data-open-lead]').forEach(function (b) {
    b.addEventListener('click', function () { openLead('Оставьте номер — перезвоним и проконсультируем.', 'Консультация'); });
  });
  $('closeModal').addEventListener('click', function () { modal.hidden = true; });
  modal.addEventListener('click', function (e) { if (e.target === modal) modal.hidden = true; });
  $('leadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    this.innerHTML = '<h3>Спасибо!</h3><p>Это демонстрационная версия сайта — в рабочей заявка сразу придёт вам на почту и в мессенджер.</p>';
    setTimeout(function () { modal.hidden = true; }, 3500);
  });

  // появление блоков при прокрутке (с небольшой очередью внутри сетки)
  var rvSel = '.sec h2, .sec .eyebrow, .sec .sub, .sec .note, .stats .stat, .gallery img, .projects article, .dream-row div, .bowls figure, .card, .heat div, .equip figure, .steps li, .guar-row div, .reviews img, .faq details, .offices > div, .cta-inline, .more';
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  document.querySelectorAll(rvSel).forEach(function (el) {
    var sib = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.style.setProperty('--d', Math.min(sib, 8) * 0.07 + 's');
    if (io) { el.classList.add('rv'); io.observe(el); }
  });
  // цифры с сайта считают вверх, когда видны
  var cio = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      var el = e.target, n = +el.dataset.count, pre = el.dataset.prefix || '', suf = el.dataset.suffix || '', t0 = performance.now();
      (function step(now) {
        var k = Math.min(1, (now - t0) / 1400), v = Math.round(n * (1 - Math.pow(1 - k, 3)));
        el.textContent = pre + v + suf;
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: 0.6 }) : null;
  document.querySelectorAll('[data-count]').forEach(function (el) {
    if (cio) cio.observe(el); else el.textContent = (el.dataset.prefix || '') + el.dataset.count + (el.dataset.suffix || '');
  });
  // лёгкий 3D-наклон фото проектов за курсором
  document.querySelectorAll('.gallery img').forEach(function (img) {
    img.addEventListener('mousemove', function (e) {
      var r = img.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      img.style.transform = 'rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) scale(1.03)';
    });
    img.addEventListener('mouseleave', function () { img.style.transform = ''; });
  });

  sync();
})();
