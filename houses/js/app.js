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
      { short: 'Участок', name: 'Участок', text: 'Геодезия, вынос осей дома, подготовка площадки и подъезда для техники.', time: '1 неделя', week: 1 },
      { short: 'Фундамент', name: 'Фундамент', text: 'Монолитная утеплённая плита — ровное и тёплое основание под весь дом.', time: '3 недели', week: 2 },
      { short: 'Стены 1 эт.', name: 'Стены первого этажа', text: 'Газобетон D500, армирование кладки, перемычки над окнами и дверями.', time: '3 недели', week: 5 },
      { short: 'Стены 2 эт.', name: 'Второй этаж', text: 'Монолитный пояс, перекрытие и кладка стен второго этажа.', time: '2 недели', week: 8 },
      { short: 'Фронтоны', name: 'Фронтоны', text: 'Треугольные стены под двускатную кровлю и большое остекление.', time: '1 неделя', week: 10 },
      { short: 'Стропила', name: 'Стропильная система', text: 'Сухая строганая сосна с огнебиозащитой, шаг стропил 600 мм.', time: '2 недели', week: 11 },
      { short: 'Кровля', name: 'Кровля', text: 'Фальцевая кровля, утепление 250 мм, водосточная система.', time: '2 недели', week: 13 },
      { short: 'Фасад', name: 'Фасад и окна', text: 'Лиственница и металл, панорамное остекление, входные двери.', time: '4 недели', week: 15 },
      { short: 'Газон', name: 'Благоустройство', text: 'Терраса из лиственницы, газон, дорожки, молодые берёзы.', time: '2 недели', week: 19 },
      { short: 'Новоселье', name: 'Новоселье', text: 'Дом готов: включаем свет, проверяем всё вместе и вручаем ключи.', time: 'Неделя 20', week: 20 },
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
      monthEl.textContent = i === STAGES.length - 1 ? 'Неделя 20 · готово' : `Неделя ${s.week} из 20`;
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

  // ---------- 4. Калькулятор ----------
  const estimate = { text: '' };
  (() => {
    const form = document.getElementById('calcForm');
    if (!form) return;
    const CLASSES = {
      econom: { name: 'Эконом', m2: 52000, walls: 'frame', hint: 'Каркасный дом, металлочерепица, базовые инженерные системы.' },
      comfort: { name: 'Комфорт', m2: 68000, walls: 'aerated', hint: 'Газобетон, фальцевая кровля и панорамные окна — как дом на этой странице.' },
      business: { name: 'Бизнес', m2: 86000, walls: 'aerated', hint: 'Большие пролёты, улучшенные материалы, тёплые полы и умный свет.' },
      premium: { name: 'Премиум', m2: 118000, walls: 'brick', hint: 'Архитектурный проект, натуральный камень и дерево, умный дом.' },
    };
    const WALL = { frame: ['каркас', 0.86, -0.5], aerated: ['газобетон', 1, 0], timber: ['клееный брус', 1.12, 0], brick: ['кирпич', 1.22, 1] };
    const FINISH = { shell: ['тёплый контур', 0.6, 0.62], prefinish: ['предчистовая', 0.8, 0.8], turnkey: ['под ключ', 1, 1] };
    const FLOORS = { 1: ['1 этаж', 1.07], attic: ['с мансардой', 0.98], 2: ['2 этажа', 0.95] };
    const state = { cls: 'comfort', area: 150, floors: '2', walls: 'aerated', finish: 'turnkey' };
    const area = document.getElementById('calcArea');
    const areaOut = document.getElementById('areaOut');
    const extras = [...document.querySelectorAll('#calcExtras input')];
    const $ = id => document.getElementById(id);

    function seg(id, key, after) {
      const box = $(id);
      box.addEventListener('click', e => {
        const b = e.target.closest('button');
        if (!b) return;
        state[key] = b.dataset.v;
        if (after) after(b.dataset.v);
        sync();
      });
    }
    seg('calcClass', 'cls', v => { state.walls = CLASSES[v].walls; });
    seg('calcFloors', 'floors');
    seg('calcWalls', 'walls');
    seg('calcFinish', 'finish');
    area.addEventListener('input', () => { state.area = +area.value; sync(); });
    extras.forEach(x => x.addEventListener('change', sync));

    const plural = (n, one, few, many) => {
      if (n % 1) return few;
      const a = n % 10, b = n % 100;
      return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many;
    };
    const short = n => (n >= 1e6 ? (n / 1e6).toFixed(1).replace('.', ',') + ' млн' : Math.round(n / 1e3) + ' тыс');

    function sync() {
      // кнопки
      [['calcClass', 'cls'], ['calcFloors', 'floors'], ['calcWalls', 'walls'], ['calcFinish', 'finish']].forEach(([id, key]) => {
        $(id).querySelectorAll('button').forEach(b => { b.classList.toggle('on', b.dataset.v === state[key]); b.setAttribute('aria-pressed', String(b.dataset.v === state[key])); });
      });
      $('classHint').textContent = CLASSES[state.cls].hint;
      areaOut.textContent = state.area + ' м²';
      area.style.setProperty('--fill', ((state.area - 60) / (400 - 60) * 100).toFixed(1) + '%');

      const c = CLASSES[state.cls], w = WALL[state.walls], f = FINISH[state.finish], fl = FLOORS[state.floors];
      const house = c.m2 * state.area * w[1] * f[1] * fl[1];
      const ex = { terrace: 380000, carport: 650000, floors: state.area * 2600, garden: 420000 };
      const on = extras.filter(x => x.checked).map(x => x.value);
      const extra = on.reduce((s, k) => s + ex[k], 0);
      const price = house + extra;
      let months = clamp(2.5 + state.area / 70, 3, 10) * f[2] + w[2] + (state.cls === 'premium' ? 1.5 : state.cls === 'business' ? 0.5 : 0);
      months = Math.max(2.5, Math.round(months * 2) / 2);
      const P = price * 0.8, r = 0.06 / 12, n = 240;
      const pay = P * r / (1 - Math.pow(1 + r, -n));

      $('resPrice').textContent = money(Math.round(price / 10000) * 10000);
      $('resRange').textContent = `от ${short(price * 0.93)} до ${short(price * 1.08)} ₽ в зависимости от проекта`;
      $('resTime').textContent = `${String(months).replace('.', ',')} ${plural(months, 'месяц', 'месяца', 'месяцев')}`;
      $('resLoan').textContent = 'от ' + money(Math.round(pay / 100) * 100) + '/мес';
      $('resM2').textContent = money(Math.round(price / state.area / 100) * 100);

      // из чего складывается цена
      const parts = [['Фундамент', 0.12], ['Стены и перекрытия', 0.28], ['Кровля', 0.12], ['Фасад и окна', 0.2], ['Инженерия и отделка', state.finish === 'shell' ? 0 : state.finish === 'prefinish' ? 0.14 : 0.28]];
      const sum = parts.reduce((s, p) => s + p[1], 0);
      const rows = parts.filter(p => p[1] > 0).map(p => [p[0], house * p[1] / sum]);
      if (extra > 0) rows.push(['Терраса и участок', extra]);
      const max = Math.max(...rows.map(r => r[1]));
      $('resBars').innerHTML = rows.map(([name, v]) => `<div class="res-bar"><span>${name}</span><i style="transform:scaleX(${(v / max).toFixed(3)})"></i><b>${short(v)}</b></div>`).join('');

      estimate.text = `${c.name}, ${state.area} м², ${fl[0]}, ${w[0]}, ${f[0]}${on.length ? ', + ' + on.map(k => ({ terrace: 'терраса', carport: 'навес', floors: 'тёплые полы', garden: 'благоустройство' })[k]).join(', ') : ''} — ≈ ${money(Math.round(price / 10000) * 10000)}, ${String(months).replace('.', ',')} мес.`;
    }
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
