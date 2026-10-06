(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Метка версии кадров: меняется при обновлении, чтобы браузер не брал старые из кэша.
  const ASSET_V = '1';
  const withV = src => src + '?v=' + ASSET_V;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Не загрузилось: ' + src));
      img.src = src;
    });
  }

  // Кадры грузятся «с прорежением»: сначала каждый 16-й, потом 8-й … 1-й.
  // Анимация работает сразу, а плавность догружается.
  class FrameSequence {
    constructor(dir, count) {
      this.dir = dir;
      this.count = count;
      this.images = new Array(count);
      this.loaded = 0;
      this.started = false;
      this.onload = null;
    }

    url(i) { return withV(this.dir + String(i + 1).padStart(4, '0') + '.webp'); }

    start() {
      if (this.started) return;
      this.started = true;
      const seen = new Set();
      const queue = [];
      for (let step = 16; step >= 1; step /= 2) {
        for (let i = 0; i < this.count; i += step) if (!seen.has(i)) { seen.add(i); queue.push(i); }
      }
      let active = 0;
      const next = () => {
        while (active < 6 && queue.length) {
          const i = queue.shift();
          active++;
          loadImage(this.url(i))
            .then(img => { this.images[i] = img; this.loaded++; if (this.onload) this.onload(i); })
            .catch(() => {})
            .finally(() => { active--; next(); });
        }
      };
      next();
    }

    // ближайший загруженный кадр (wrap — по кругу)
    get(i, wrap) {
      const n = this.count;
      if (this.images[i]) return this.images[i];
      for (let d = 1; d < n; d++) {
        const a = wrap ? (i - d + n) % n : i - d;
        const b = wrap ? (i + d) % n : i + d;
        if (a >= 0 && this.images[a]) return this.images[a];
        if (b < n && this.images[b]) return this.images[b];
      }
      return null;
    }
  }

  function fitCanvas(canvas) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(canvas.clientWidth * dpr);
    const h = Math.round(canvas.clientHeight * dpr);
    if (w && h && (canvas.width !== w || canvas.height !== h)) {
      canvas.width = w;
      canvas.height = h;
      return true;
    }
    return false;
  }

  function drawCover(ctx, img, w, h) {
    const s = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const dw = img.naturalWidth * s;
    const dh = img.naturalHeight * s;
    ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
  }

  // Кадр с дробным номером: соседний кадр ложится сверху с прозрачностью по дробной части —
  // вращение без «ступенек» даже при медленном повороте. memo — что нарисовано сейчас.
  function drawFrames(canvas, ctx, seq, f, wrap, memo) {
    const n = seq.count;
    const base = Math.floor(f);
    const t = f - base;
    const ia = wrap ? ((base % n) + n) % n : clamp(base, 0, n - 1);
    const ib = wrap ? (ia + 1) % n : Math.min(ia + 1, n - 1);
    const A = seq.images[ia];
    const B = seq.images[ib];
    let img1, img2 = null, alpha = 0;
    if (A && B && ia !== ib && t > 0.03) { img1 = A; img2 = B; alpha = Math.round(t * 20) / 20; }
    else img1 = seq.get(t < 0.5 ? ia : ib, wrap);
    if (!img1) return;
    const resized = fitCanvas(canvas);
    if (!resized && memo.a === img1 && memo.b === img2 && memo.t === alpha) return;
    ctx.globalAlpha = 1;
    drawCover(ctx, img1, canvas.width, canvas.height);
    if (img2 && alpha > 0) {
      ctx.globalAlpha = alpha;
      drawCover(ctx, img2, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
    }
    memo.a = img1;
    memo.b = img2;
    memo.t = alpha;
  }

  const tasks = [];   // всё, что рисуется каждый кадр
  const onScreen = (el, cb, margin = '0px') => {
    const io = new IntersectionObserver(entries => entries.forEach(e => cb(e.isIntersecting, e)), { rootMargin: margin, threshold: [0, 0.35, 0.6] });
    io.observe(el);
    return io;
  };

  // ---------- 1. Кресло 360°: само вращается, можно повернуть рукой ----------
  (() => {
    const canvas = document.getElementById('chairCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const plaque = document.getElementById('chairPlaque');
    const seq = new FrameSequence('frames/chair/', 144);
    const N = seq.count;
    const AUTO = N / 26;          // кадров в секунду: полный оборот за 26 с
    const SENS = 0.6;             // протянуть на всю ширину кресла = 0,6 оборота
    let pos = 0, vel = 0, dir = 1, visible = true, ready = false, dirty = true;
    let dragging = false, pid = null, lastX = 0, lastT = 0, touched = false, pauseUntil = 0;
    const memo = {};

    seq.onload = () => { dirty = true; if (seq.loaded === N) ready = true; };
    seq.start();
    setTimeout(() => { ready = true; }, 7000);   // медленный интернет: крутим тем, что успело загрузиться

    function touch() {
      if (touched) return;
      touched = true;
      plaque.classList.add('touched');
    }

    canvas.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragging = true;
      pid = e.pointerId;
      lastX = e.clientX;
      lastT = performance.now();
      vel = 0;
      try { canvas.setPointerCapture(pid); } catch (_) { /* не критично */ }
      if (e.pointerType === 'mouse') e.preventDefault();
    });
    canvas.addEventListener('pointermove', e => {
      if (!dragging || e.pointerId !== pid) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      if (Math.abs(dx) > 2) touch();
      // тянем влево — ближняя к нам сторона кресла уходит влево
      const df = (-dx / Math.max(1, canvas.clientWidth)) * N * SENS;
      pos += df;
      const dt = Math.max(1, now - lastT) / 1000;
      vel = vel * 0.5 + (df / dt) * 0.5;
      lastX = e.clientX;
      lastT = now;
      dirty = true;
    });
    const end = e => {
      if (!dragging || (e && e.pointerId !== pid)) return;
      dragging = false;
      if (performance.now() - lastT > 90) vel = 0;
      vel = clamp(vel, -N * 1.6, N * 1.6);
      if (Math.abs(vel) > AUTO * 0.5) dir = Math.sign(vel);
    };
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);
    canvas.addEventListener('lostpointercapture', end);
    canvas.addEventListener('keydown', e => {
      const step = e.key === 'ArrowLeft' ? 1 : e.key === 'ArrowRight' ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      touch();
      pos += step * N / 24;
      vel = 0;
      pauseUntil = performance.now() + 2500;
      dirty = true;
    });

    onScreen(canvas, v => { visible = v; if (v) dirty = true; });
    window.addEventListener('resize', () => { dirty = true; memo.a = null; });

    tasks.push((dt, now) => {
      if (!visible) return;
      if (!dragging) {
        const auto = !reduced && ready && now > pauseUntil ? AUTO * dir : 0;
        // после броска кресло плавно возвращается к спокойному вращению
        vel += (auto - vel) * (1 - Math.exp(-dt * 1.6));
        if (Math.abs(vel) > 0.01) { pos += vel * dt; dirty = true; }
      }
      if (dirty) {
        dirty = false;
        pos = ((pos % N) + N) % N;
        drawFrames(canvas, ctx, seq, pos, true, memo);
      }
    });
  })();

  // ---------- 2. Примерочная стрижек ----------
  (() => {
    const list = document.getElementById('cutList');
    if (!list) return;
    const base = document.getElementById('cutBase');
    const next = document.getElementById('cutNext');
    const glass = document.getElementById('mirrorGlass');
    const clipper = document.getElementById('clipper');
    const line = document.getElementById('wipeLine');
    const plaque = document.getElementById('cutPlaque');
    const tabs = [...document.querySelectorAll('.tab')];

    const CUTS = {
      men: [
        { id: 'before', name: 'До стрижки', note: 'Так гость пришёл к нам', price: '', img: 'img/cuts/men_before.jpg', alt: 'До стрижки: отросшие волосы и неровная борода' },
        { id: 'fade', name: 'Фейд с пробором', note: 'Плавный переход от кожи к длине и боковой пробор', price: '2 200 ₽', img: 'img/cuts/men_fade.jpg', alt: 'Стрижка «Фейд с пробором» и оформленная борода' },
        { id: 'crop', name: 'Кроп', note: 'Короткая текстурная чёлка и высокий фейд', price: '2 200 ₽', img: 'img/cuts/men_crop.jpg', alt: 'Стрижка «Кроп» с текстурной чёлкой' },
        { id: 'pompadour', name: 'Помпадур', note: 'Объём, зачёсанный назад, — классика 50-х', price: '2 400 ₽', img: 'img/cuts/men_pompadour.jpg', alt: 'Стрижка «Помпадур»' },
        { id: 'buzz', name: 'Базз-кат', note: 'Коротко машинкой, чёткий контур', price: '1 600 ₽', img: 'img/cuts/men_buzz.jpg', alt: 'Стрижка «Базз-кат»' },
      ],
      kids: [
        { id: 'before', name: 'До стрижки', note: 'Отросшие волосы — пора к мастеру', price: '', img: 'img/cuts/kid_before.jpg', alt: 'Мальчик до стрижки: отросшие волосы' },
        { id: 'crop', name: 'Кроп', note: 'Модная короткая чёлка — удобно и в школу, и на тренировку', price: '1 500 ₽', img: 'img/cuts/kid_crop.jpg', alt: 'Детская стрижка «Кроп»' },
        { id: 'sidepart', name: 'Классика с пробором', note: 'Аккуратный пробор, как у маленького джентльмена', price: '1 500 ₽', img: 'img/cuts/kid_sidepart.jpg', alt: 'Детская классическая стрижка с пробором' },
        { id: 'undercut', name: 'Андеркат', note: 'Короткие виски, длина зачёсана назад', price: '1 700 ₽', img: 'img/cuts/kid_undercut.jpg', alt: 'Детская стрижка «Андеркат»' },
        { id: 'design', name: 'Фейд с узором', note: 'Выбритая линия-узор на виске', price: '1 900 ₽', img: 'img/cuts/kid_design.jpg', alt: 'Детская стрижка «Фейд с узором»' },
      ],
    };

    let set = 'men';
    let current = CUTS.men[0];
    let busy = false;
    let pending = null;
    let interacted = false;
    const preloaded = new Set();

    function preload(name) {
      if (preloaded.has(name)) return;
      preloaded.add(name);
      CUTS[name].forEach(c => { const i = new Image(); i.src = c.img; });
    }

    function render() {
      list.innerHTML = CUTS[set].map(c => `
        <li><button class="cut" type="button" data-id="${c.id}" aria-pressed="${c === current}">
          <span class="cut-name">${c.name}</span>${c.price ? `<span class="cut-price">${c.price}</span>` : ''}
          <span class="cut-note">${c.note}</span>
        </button></li>`).join('');
      list.setAttribute('aria-labelledby', 'tab-' + set);
    }

    function setPlaque(c) {
      plaque.innerHTML = `<b>${c.name}</b><span>${c.price || 'выберите стрижку'}</span>`;
    }

    function markActive() {
      list.querySelectorAll('.cut').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.id === current.id)));
    }

    // состриженные волоски сыплются из-под машинки
    function hair(x, y) {
      const h = document.createElement('i');
      h.className = 'hair';
      h.style.left = x.toFixed(1) + 'px';
      h.style.top = y.toFixed(1) + 'px';
      glass.appendChild(h);
      const dx = (Math.random() - 0.5) * 36;
      const dy = 40 + Math.random() * 70;
      const rot = (Math.random() - 0.5) * 260;
      const a = h.animate([
        { transform: `rotate(${(rot * 0.2).toFixed(0)}deg)`, opacity: 1 },
        { transform: `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) rotate(${rot.toFixed(0)}deg)`, opacity: 0 },
      ], { duration: 650 + Math.random() * 450, easing: 'cubic-bezier(.3, .5, .6, 1)' });
      a.onfinish = () => h.remove();
    }

    function wipe(duration) {
      return new Promise(resolve => {
        const W = glass.clientWidth;
        const H = glass.clientHeight;
        const cw = clipper.offsetWidth || 120;
        const ch = clipper.offsetHeight || 50;
        const t0 = performance.now();
        clipper.style.opacity = '1';
        line.style.opacity = '1';
        const step = now => {
          const k = clamp((now - t0) / duration);
          const e = easeInOut(k);
          const y = e * H;
          next.style.clipPath = `inset(0 0 ${(100 - e * 100).toFixed(2)}% 0)`;
          line.style.transform = `translateY(${y.toFixed(1)}px)`;
          clipper.style.transform = `translate(-50%, ${(y - ch * 0.94).toFixed(1)}px)`;
          // волосы — в верхней половине кадра, там и сыплются
          if (e > 0.04 && e < 0.6) for (let i = 0; i < 2; i++) hair(W * 0.54 + (Math.random() - 0.5) * cw * 0.85, y - 4);
          if (k < 1) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
    }

    async function show(c) {
      if (c === current && !busy) return;
      if (busy) { pending = c; return; }
      busy = true;
      current = c;
      markActive();
      setPlaque(c);
      next.src = c.img;
      try { await next.decode(); } catch (_) { /* покажем как есть */ }
      if (!reduced) await wipe(900);
      base.src = c.img;
      base.alt = c.alt;
      try { await base.decode(); } catch (_) { /* не критично */ }
      next.style.clipPath = 'inset(0 0 100% 0)';
      clipper.style.opacity = '0';
      line.style.opacity = '0';
      busy = false;
      if (pending) {
        const p = pending;
        pending = null;
        if (p !== current) show(p);
      }
    }

    list.addEventListener('click', e => {
      const btn = e.target.closest('.cut');
      if (!btn) return;
      interacted = true;
      const c = CUTS[set].find(x => x.id === btn.dataset.id);
      if (c) show(c);
    });

    function selectTab(tab, focus) {
      const name = tab.dataset.set;
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
      });
      if (focus) tab.focus();
      if (name === set) return;
      set = name;
      preload(set);
      const first = CUTS[set][1];   // сразу показываем первую стрижку из набора
      render();
      pending = null;
      show(first).then(markActive);
      markActive();
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => { interacted = true; selectTab(tab); });
      tab.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        interacted = true;
        selectTab(tabs[(i + d + tabs.length) % tabs.length], true);
      });
    });

    render();
    // при первом появлении на экране машинка сама «стрижёт» гостя — показываем, как это работает
    const io = onScreen(glass, (v, e) => {
      if (!v) return;
      preload('men');
      if (e.intersectionRatio >= 0.6) {
        io.disconnect();
        setTimeout(() => { if (!interacted && current === CUTS.men[0]) show(CUTS.men[1]); }, 700);
        setTimeout(() => preload('kids'), 2500);
      }
    }, '200px 0px');
  })();

  // ---------- 3. Шторка «до и после» ----------
  (() => {
    const frame = document.getElementById('baFrame');
    if (!frame) return;
    const handle = document.getElementById('baHandle');
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
      // мышь — сразу ставим шторку; палец — ждём, что жест горизонтальный (иначе это прокрутка)
      armed = e.pointerType === 'mouse';
      if (armed) { fromX(e.clientX); e.preventDefault(); }
      try { frame.setPointerCapture(pid); } catch (_) { /* не критично */ }
    });
    frame.addEventListener('pointermove', e => {
      if (!dragging || e.pointerId !== pid) return;
      if (!armed) {
        const dx = Math.abs(e.clientX - startX);
        const dy = Math.abs(e.clientY - startY);
        if (dx > 6 && dx > dy) armed = true;
        else return;
      }
      fromX(e.clientX);
    });
    const end = e => { if (e.pointerId === pid) { dragging = false; armed = false; } };
    frame.addEventListener('pointerup', e => {
      // короткое касание без движения — тоже переставляет шторку
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

    // подсказка: шторка сама «проезжает» туда-обратно, когда блок появился на экране
    if (!reduced) {
      const io = onScreen(frame, (v, e) => {
        if (!v || e.intersectionRatio < 0.6 || touched) return;
        io.disconnect();
        const t0 = performance.now();
        const D = 2600;
        const step = now => {
          if (touched) return;
          const k = clamp((now - t0) / D);
          set(50 + 24 * Math.sin(easeInOut(k) * Math.PI * 2));
          if (k < 1) hintRaf = requestAnimationFrame(step);
        };
        hintRaf = requestAnimationFrame(step);
      });
    }
  })();

  // ---------- 4. Бритва раскрывается при прокрутке ----------
  (() => {
    const canvas = document.getElementById('razorCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const seq = new FrameSequence('frames/razor/', 60);
    let p = 0, visible = false, dirty = true;
    const memo = {};

    seq.onload = () => { dirty = true; };
    onScreen(canvas, v => { if (v) seq.start(); }, '150% 0px');
    onScreen(canvas, v => { visible = v; if (v) dirty = true; });
    window.addEventListener('resize', () => { dirty = true; memo.a = null; });

    // 0 — бритва закрыта (верх рамки на 90% высоты экрана), 1 — раскрыта (центр рамки на середине экрана)
    function target() {
      const r = canvas.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = vh * 0.5 - r.height / 2;
      return clamp((start - r.top) / Math.max(1, start - end));
    }

    tasks.push(() => {
      if (!visible) return;
      const t = target();
      const d = t - p;
      if (Math.abs(d) > 0.001) { p += d * (reduced ? 1 : 0.18); dirty = true; }
      if (!dirty) return;
      dirty = false;
      drawFrames(canvas, ctx, seq, p * (seq.count - 1), false, memo);
    });
  })();

  // ---------- общий цикл анимации ----------
  let last = 0;
  function loop(now) {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
    last = now;
    for (const t of tasks) t(dt, now);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // ---------- шапка и меню ----------
  (() => {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('burger');
    const links = document.getElementById('navLinks');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
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

  // ---------- появление блоков при прокрутке ----------
  (() => {
    const items = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        // соседние карточки появляются по очереди
        const sibs = [...el.parentElement.children].filter(x => x.classList.contains('reveal'));
        el.style.transitionDelay = Math.min(sibs.indexOf(el), 3) * 0.12 + 's';
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    items.forEach(el => io.observe(el));
  })();

  // ---------- форма записи (демо: никуда не отправляется) ----------
  (() => {
    const form = document.getElementById('bookForm');
    if (!form) return;
    const note = document.getElementById('formNote');
    const phone = form.elements.phone;
    const nameInput = form.elements.name;
    const date = form.elements.date;
    const pad = n => String(n).padStart(2, '0');
    const today = new Date();
    date.min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

    // телефон в виде +7 (900) 000-00-00
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
      const service = form.elements.service.value.toLowerCase();
      note.className = 'form-note ok';
      note.textContent = `Спасибо, ${name}! Заявка на «${service}» принята — администратор перезвонит. (Это демо-сайт: заявка никуда не отправляется.)`;
      form.querySelector('button[type="submit"]').textContent = 'Заявка принята';
    });
  })();
})();
