(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const nbsp = s => s.replace(/[ \s]/g, ' ');
  const money = n => nbsp(new Intl.NumberFormat('ru-RU').format(Math.round(n))) + ' ₽';
  const onScreen = (el, cb, margin = '0px', threshold = [0, 0.45]) => {
    const io = new IntersectionObserver(es => es.forEach(e => cb(e.isIntersecting, e)), { rootMargin: margin, threshold });
    io.observe(el);
    return io;
  };

  // ---------- шапка и меню ----------
  (() => {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('burger');
    const links = document.getElementById('navLinks');
    const hero = document.querySelector('.hero');
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

  // ---------- выноски на доме (только широкие экраны) ----------
  (() => {
    const box = document.getElementById('callouts');
    const img = document.getElementById('heroImg');
    if (!box || !img) return;
    const IW = 2752, IH = 1536, PX = 0.6, PY = 0.5;   // координаты точек — в исходном кадре 2752x1536
    const items = [...box.querySelectorAll('.callout')];
    function place() {
      const W = box.clientWidth, H = box.clientHeight;
      if (!W || !H) return;
      const a = IW / IH;
      let dw, dh, ox, oy;
      if (W / H > a) { dw = W; dh = W / a; ox = 0; oy = (H - dh) * PY; }
      else { dh = H; dw = H * a; oy = 0; ox = (W - dw) * PX; }
      items.forEach(c => {
        const x = ox + (+c.dataset.x / IW) * dw;
        const y = oy + (+c.dataset.y / IH) * dh;
        c.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      });
    }
    window.addEventListener('resize', place);
    place();
    const show = () => setTimeout(() => { place(); box.classList.add('on'); }, 900);
    if (img.complete) show(); else img.addEventListener('load', show, { once: true });
  })();

  // ---------- 2. Плеер «дом растёт на глазах» ----------
  (() => {
    const player = document.getElementById('player');
    const video = document.getElementById('buildVideo');
    if (!player || !video) return;
    const btn = document.getElementById('playerBtn');
    const bar = document.getElementById('playerBar');
    const monthEl = document.getElementById('playerMonth');
    const stageEl = document.getElementById('playerStage');
    const list = document.getElementById('stages');
    const info = document.getElementById('stageInfo');
    // моменты (с), когда каждый этап полностью готов — из media/build.json
    const TIMES = [0, 1.917, 3.667, 5.417, 7.167, 8.917, 10.667, 12.417, 14.167, 15.917];
    const DUR = 17.29;
    const T_IN = 1.25;
    const STAGES = [
      { short: 'Участок', name: 'Выезд и договор', text: 'Приезжаем на участок, делаем замер, считаем стоимость и заключаем договор прямо на объекте.', time: 'Оплата: 30% при договоре', week: 1 },
      { short: 'Фундамент', name: 'Фундамент', text: 'Винтовые сваи или ленточный фундамент и обвязка из бруса — подбираем под грунт участка.', time: 'Входит в первый платёж', week: 1 },
      { short: 'Каркас', name: 'Каркас стен', text: 'Каркас из сухой строганой доски, шаг стоек 600 мм, проёмы под окна и двери.', time: 'Этап 2 · 15%', week: 2 },
      { short: '2 этаж', name: 'Перекрытие и мансарда', text: 'Межэтажное перекрытие и стены второго этажа или мансарды.', time: 'Этап 3 · 15%', week: 3 },
      { short: 'Фронтоны', name: 'Фронтоны', text: 'Фронтоны под двускатную крышу и большие окна.', time: 'Входит в этап 3', week: 4 },
      { short: 'Стропила', name: 'Стропильная система', text: 'Стропила с огнебиозащитой, шаг 600 мм, обрешётка под кровлю.', time: 'Этап 4 · 15%', week: 5 },
      { short: 'Кровля', name: 'Кровля и утепление', text: 'Кровля, утепление 200 мм, пароизоляция и водосток — дом по-настоящему тёплый.', time: 'Входит в этап 4', week: 6 },
      { short: 'Фасад', name: 'Фасад и окна', text: 'Утепление стен, ветрозащита, обшивка фасада, окна и входные двери.', time: 'Этап 5 · 15%', week: 8 },
      { short: 'Веранда', name: 'Веранда и крыльцо', text: 'Веранда или терраса, крыльцо, отмостка — дом готов к жизни.', time: 'Этап 6 · 10%', week: 10 },
      { short: 'Новоселье', name: 'Сдача дома', text: 'Проверяем всё вместе, подписываем акт и вручаем ключи. Гарантия по договору.', time: 'Финальный платёж — по акту', week: 12 },
    ];

    list.innerHTML = STAGES.map((s, i) => `<li><button class="stage-chip" type="button" data-i="${i}"><b>${String(i + 1).padStart(2, '0')}</b><span>${s.short}</span></button></li>`).join('');
    const chips = [...list.querySelectorAll('.stage-chip')];
    let current = -1, userPaused = false, started = false, visible = false, raf = 0;

    function stageAt(t) {
      let i = 0;
      for (let k = 1; k < TIMES.length; k++) if (t >= TIMES[k] - T_IN * 0.45) i = k;
      return i;
    }
    function show(i) {
      if (i === current) return;
      current = i;
      const s = STAGES[i];
      chips.forEach((c, k) => { c.classList.toggle('on', k === i); c.classList.toggle('done', k < i); });
      monthEl.textContent = i === STAGES.length - 1 ? 'Дом готов' : `Неделя ${s.week} из 12`;
      stageEl.textContent = s.name;
      info.querySelector('.stage-name').textContent = s.name;
      info.querySelector('.stage-text').textContent = s.text;
      info.querySelector('.stage-time').textContent = s.time;
      // держим активный этап в поле зрения на телефоне (лента прокручивается)
      const chip = chips[i];
      if (list.scrollWidth > list.clientWidth + 4) {
        const left = chip.parentElement.offsetLeft - (list.clientWidth - chip.parentElement.offsetWidth) / 2;
        list.scrollTo({ left, behavior: reduced ? 'auto' : 'smooth' });
      }
    }
    function tick() {
      raf = 0;
      const t = video.currentTime || 0;
      bar.style.transform = `scaleX(${clamp(t / DUR).toFixed(4)})`;
      show(stageAt(t));
      if (!video.paused && !video.ended) raf = requestAnimationFrame(tick);
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    function setState() {
      player.classList.toggle('paused', video.paused);
      player.classList.toggle('ended', video.ended);
      btn.setAttribute('aria-label', video.ended ? 'Смотреть снова' : video.paused ? 'Смотреть' : 'Пауза');
    }
    function ensureSrc() {
      if (!video.getAttribute('src')) { video.src = video.dataset.src; video.load(); }
    }
    function play() {
      ensureSrc();
      const p = video.play();
      if (p && p.catch) p.catch(() => { setState(); });
    }

    video.addEventListener('play', () => { setState(); kick(); });
    video.addEventListener('pause', () => { setState(); kick(); });
    video.addEventListener('ended', () => { setState(); show(STAGES.length - 1); bar.style.transform = 'scaleX(1)'; });
    video.addEventListener('seeked', kick);
    video.addEventListener('timeupdate', kick);
    video.addEventListener('error', () => { video.poster = 'media/build_end.jpg'; });

    btn.addEventListener('click', () => {
      if (video.ended) { video.currentTime = 0; userPaused = false; play(); }
      else if (video.paused) { userPaused = false; play(); }
      else { userPaused = true; video.pause(); }
    });
    chips.forEach((c, i) => c.addEventListener('click', () => {
      ensureSrc();
      userPaused = true;
      video.pause();
      const go = () => { video.currentTime = Math.min(TIMES[i] + 0.06, DUR - 0.05); show(i); kick(); };
      if (video.readyState >= 1) go(); else video.addEventListener('loadedmetadata', go, { once: true });
    }));

    onScreen(player, v => { if (v) ensureSrc(); }, '15% 0px', [0]);
    onScreen(video, (v, e) => {
      visible = v && e.intersectionRatio >= 0.45;
      if (visible && !userPaused && !video.ended && (video.paused || !started)) {
        started = true;
        if (reduced) { ensureSrc(); return; }
        play();
      } else if (!v && !video.paused) {
        video.pause();
      }
    }, '0px', [0, 0.45]);
    show(0);
    setState();
  })();

  // ---------- 3. Шторка «день — вечер» ----------
  (() => {
    const frame = document.getElementById('dnFrame');
    if (!frame) return;
    const handle = document.getElementById('dnHandle');
    let pos = 50, dragging = false, pid = null, startX = 0, startY = 0, armed = false, touched = false, hintRaf = 0;
    function set(v) {
      pos = clamp(v, 0, 100);
      frame.style.setProperty('--pos', pos.toFixed(2) + '%');
      handle.setAttribute('aria-valuenow', String(Math.round(pos)));
    }
    const fromX = x => { const r = frame.getBoundingClientRect(); set(((x - r.left) / r.width) * 100); };
    const stopHint = () => { touched = true; cancelAnimationFrame(hintRaf); };
    frame.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      stopHint();
      dragging = true;
      pid = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      armed = e.pointerType === 'mouse';
      if (armed) { fromX(e.clientX); e.preventDefault(); }
      try { frame.setPointerCapture(pid); } catch (_) { /* не критично */ }
    });
    frame.addEventListener('pointermove', e => {
      if (!dragging || e.pointerId !== pid) return;
      if (!armed) {
        const dx = Math.abs(e.clientX - startX), dy = Math.abs(e.clientY - startY);
        if (dx > 6 && dx > dy) armed = true; else return;
      }
      fromX(e.clientX);
    });
    const end = e => { if (e.pointerId === pid) { dragging = false; armed = false; } };
    frame.addEventListener('pointerup', e => {
      if (dragging && !armed && e.pointerType !== 'mouse' && Math.abs(e.clientX - startX) < 6) fromX(e.clientX);
      end(e);
    });
    frame.addEventListener('pointercancel', end);
    frame.addEventListener('lostpointercapture', end);
    handle.addEventListener('keydown', e => {
      const map = { ArrowLeft: -5, ArrowRight: 5, PageDown: -20, PageUp: 20 };
      if (e.key === 'Home') set(0);
      else if (e.key === 'End') set(100);
      else if (map[e.key]) set(pos + map[e.key]);
      else return;
      e.preventDefault();
      stopHint();
    });
    if (!reduced) {
      const io = onScreen(frame, (v, e) => {
        if (!v || e.intersectionRatio < 0.55 || touched) return;
        io.disconnect();
        const t0 = performance.now(), D = 2800;
        const step = now => {
          if (touched) return;
          const k = clamp((now - t0) / D);
          set(50 + 30 * Math.sin(easeInOut(k) * Math.PI * 2));
          if (k < 1) hintRaf = requestAnimationFrame(step);
        };
        hintRaf = requestAnimationFrame(step);
      }, '0px', [0, 0.55]);
    }
  })();

  // ---------- 4. Калькулятор: типовые проекты «Сезон 96» и поэтапная оплата ----------
  const estimate = { text: '' };
  (() => {
    const form = document.getElementById('calcForm');
    if (!form) return;
    // цены — с сайта sezon96.ru (каталог домов и проектов), «под ключ»
    const TYPES = {
      veranda: { name: 'Дом с верандой', hint: 'Одноэтажный каркасный дом с открытой или застеклённой верандой — для дачи и постоянного проживания.',
        sizes: [['4×4,5', 950000], ['4×6', 1050000], ['5×7', 1350000], ['6×6', 1390000], ['5×6', 1750000], ['6×7', 1900000], ['6×8', 1970000], ['7,6×8', 2390000], ['7×10', 2450000], ['7×9', 2750000]] },
      mansard: { name: 'Дом с мансардой', hint: 'Второй уровень под крышей: больше комнат на той же площади участка. Есть варианты А-фрейм.',
        sizes: [['5×5,5', 1220000], ['5×7', 1300000], ['4×5', 1350000], ['6×6', 1580000], ['6×7', 1950000], ['А-фрейм 6×6', 2050000], ['6×8', 2150000], ['А-фрейм 7×8', 2150000], ['7×8', 2780000], ['7×9', 2850000]] },
      terrace: { name: 'Дом с террасой', hint: 'Просторная открытая терраса под общей крышей — для летних вечеров и гостей.',
        sizes: [['6×6', 1390000], ['4,5×8,5', 1750000], ['6×8', 1790000], ['6×9', 1790000], ['7×8', 2050000], ['8×8', 2350000], ['8×12', 3170000], ['9×12', 3260000]] },
      two: { name: 'Полтора и два этажа', hint: 'Дома для постоянного проживания большой семьёй: полноценный второй этаж или 1,5 этажа.',
        sizes: [['1,5 этажа 6×8', 3160000], ['2 этажа 7×9', 4250000]] },
      banya: { name: 'Баня и дом-баня', hint: 'Каркасная баня или дом-баня с террасой и тёплым тамбуром — можно жить и париться.',
        sizes: [['Баня 3×6', 720000], ['Дом-баня 6,5×11', 1780000], ['Дом-баня 7×9,5', 1850000]] },
    };
    // поэтапная оплата: 30% при договоре, дальше — перед каждым этапом
    const PAY = [['Договор и фундамент', 0.30], ['Каркас стен', 0.15], ['Перекрытие и мансарда', 0.15], ['Стропила и кровля', 0.15], ['Утепление, фасад, окна', 0.15], ['Сдача дома', 0.10]];
    const state = { type: 'veranda', size: 6 };
    const $ = id => document.getElementById(id);
    const sizeBox = $('calcSize');
    const short = n => (n >= 1e6 ? (n / 1e6).toFixed(2).replace(/0$/, '').replace('.', ',') + ' млн' : Math.round(n / 1e3) + ' тыс');
    const areaOf = label => { const m = label.match(/(\d+(?:,\d+)?)×(\d+(?:,\d+)?)/); return m ? Math.round(parseFloat(m[1].replace(',', '.')) * parseFloat(m[2].replace(',', '.'))) : 0; };

    function renderSizes() {
      const list = TYPES[state.type].sizes;
      if (state.size >= list.length) state.size = Math.min(list.length - 1, 3);
      sizeBox.innerHTML = list.map(([l, pr], i) => `<button type="button" data-i="${i}" class="${i === state.size ? 'on' : ''}" aria-pressed="${i === state.size}"><b>${l}</b><small>${short(pr)} ₽</small></button>`).join('');
    }
    $('calcType').addEventListener('click', e => {
      const btn = e.target.closest('button'); if (!btn) return;
      state.type = btn.dataset.v; state.size = Math.min(3, TYPES[state.type].sizes.length - 1); renderSizes(); sync();
    });
    sizeBox.addEventListener('click', e => {
      const btn = e.target.closest('button'); if (!btn) return;
      state.size = +btn.dataset.i; renderSizes(); sync();
    });

    function sync() {
      $('calcType').querySelectorAll('button').forEach(btn => { btn.classList.toggle('on', btn.dataset.v === state.type); btn.setAttribute('aria-pressed', String(btn.dataset.v === state.type)); });
      const t = TYPES[state.type], label = t.sizes[state.size][0], price = t.sizes[state.size][1], area = areaOf(label);
      $('classHint').textContent = t.hint;
      let months = Math.max(1.5, Math.min(5, 1 + area / 35));
      months = Math.round(months * 2) / 2;
      $('resPrice').textContent = money(price);
      $('resRange').textContent = `${t.name}, ${label} м${area ? ' · ≈ ' + area + ' м² по осям' : ''}`;
      $('resFirst').textContent = money(Math.round(price * PAY[0][1] / 1000) * 1000);
      $('resStage').textContent = '≈ ' + money(Math.round(price * 0.15 / 1000) * 1000);
      $('resTime').textContent = String(months).replace('.', ',') + (months < 5 ? ' месяца' : ' месяцев');
      $('resBars').innerHTML = PAY.map(([name, k], i) => `<div class="res-bar"><span>${i + 1}. ${name}</span><i style="transform:scaleX(${(k / 0.30).toFixed(3)})"></i><b>${short(price * k)}</b></div>`).join('');
      estimate.text = `${t.name} ${label} — ${money(price)} под ключ; при договоре ${money(Math.round(price * 0.3 / 1000) * 1000)}, дальше по этапам.`;
    }
    renderSizes();
    sync();

    document.getElementById('resCta').addEventListener('click', () => {
      const field = document.getElementById('estimateField');
      const box = document.getElementById('formEstimate');
      field.value = estimate.text;
      box.textContent = 'Ваш расчёт: ' + estimate.text;
      box.hidden = false;
    });
  })();

  // ---------- 6. Заявка (демо: никуда не отправляется) ----------
  (() => {
    const form = document.getElementById('leadForm');
    if (!form) return;
    const note = document.getElementById('formNote');
    const phone = form.elements.phone;
    const nameInput = form.elements.name;
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
      const name = nameInput.value.trim();
      const digits = phone.value.replace(/\D/g, '');
      nameInput.closest('.field').classList.toggle('invalid', !name);
      phone.closest('.field').classList.toggle('invalid', digits.length < 11);
      if (!name || digits.length < 11) {
        note.className = 'form-note err';
        note.textContent = !name ? 'Пожалуйста, укажите имя.' : 'Пожалуйста, укажите телефон полностью.';
        (!name ? nameInput : phone).focus();
        return;
      }
      note.className = 'form-note ok';
      note.textContent = `Спасибо, ${name}! Перезвоним и подберём день экскурсии. (Это демо-сайт: заявка никуда не отправляется.)`;
      form.querySelector('button[type="submit"]').textContent = 'Заявка принята';
    });
  })();
})();
