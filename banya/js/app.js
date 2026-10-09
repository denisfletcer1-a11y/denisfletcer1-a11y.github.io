(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PORTRAIT = window.matchMedia('(max-aspect-ratio: 6/5)');
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  const plural = (n, one, few, many) => { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many; };
  const nbsp = s => s.replace(/[ \s]/g, ' ');
  const money = n => nbsp(new Intl.NumberFormat('ru-RU').format(Math.round(n))) + ' ₽';
  const onScreen = (el, cb, margin = '0px', threshold = [0, 0.5]) => {
    const io = new IntersectionObserver(es => es.forEach(e => cb(e.isIntersecting, e)), { rootMargin: margin, threshold });
    io.observe(el);
    return io;
  };

  // Мягкое пятно пара/дыма — рисуем один раз и потом только штампуем.
  function blob(color) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, `rgba(${color}, 1)`);
    gr.addColorStop(0.45, `rgba(${color}, .45)`);
    gr.addColorStop(1, `rgba(${color}, 0)`);
    g.fillStyle = gr;
    g.fillRect(0, 0, 128, 128);
    return c;
  }
  const STEAM = blob('255, 255, 255');
  const SMOKE = blob('214, 218, 226');

  // Где на экране точка исходного кадра (object-fit: cover + object-position)
  function coverMap(W, H, iw, ih, px, py) {
    const a = iw / ih;
    let dw, dh, ox, oy;
    if (W / H > a) { dw = W; dh = W / a; ox = 0; oy = (H - dh) * py; }
    else { dh = H; dw = H * a; oy = 0; ox = (W - dw) * px; }
    return { s: dw / iw, x: x => ox + x * dw / iw, y: y => oy + y * dh / ih };
  }

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

  // ---------- 1. Снег, дым из трубы и пар над купелью ----------
  (() => {
    const canvas = document.getElementById('heroFx');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const IW = 2752, IH = 1536;
    // точки в исходном кадре 2752x1536; на телефоне показан кроп x 408..1637
    const CHIMNEY = [1346, 334];
    const TUB = [2060, 1062];
    let W = 0, H = 0, dpr = 1, map = null, visible = true, last = 0, raf = 0;
    const flakes = [], puffs = [];

    function layout() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      map = PORTRAIT.matches ? coverMap(W, H, 1229, IH, 0.5, 0.5) : coverMap(W, H, IW, IH, 1, 0.5);   // как object-position в CSS
      map.cx = PORTRAIT.matches ? 408 : 0;
      const n = Math.round(W * H / 7000);
      flakes.length = 0;
      for (let i = 0; i < n; i++) flakes.push(newFlake(true));
    }
    function newFlake(anywhere) {
      const near = Math.random() < 0.08;
      return {
        x: Math.random() * W,
        y: anywhere ? Math.random() * H : -10,
        r: near ? 2.6 + Math.random() * 2.4 : 0.6 + Math.random() * 1.5,
        v: near ? 90 + Math.random() * 70 : 22 + Math.random() * 38,
        a: near ? 0.35 : 0.5 + Math.random() * 0.4,
        ph: Math.random() * 6.28,
        sw: 6 + Math.random() * 14,
      };
    }
    const sx = x => map.x(x - map.cx), sy = y => map.y(y);
    function emit(kind, dt) {
      const s = map.s;
      if (kind === 'smoke') {
        if (Math.random() < dt * 5) puffs.push({ k: SMOKE, x: sx(CHIMNEY[0]) + (Math.random() - 0.5) * 8 * s, y: sy(CHIMNEY[1]), vx: (4 + Math.random() * 8) * s, vy: -(28 + Math.random() * 16) * s, r: 14 * s, g: 22 * s, life: 0, max: 6 + Math.random() * 3, a: 0.13 });
      } else {
        const x0 = TUB[0] - map.cx;
        if (x0 * map.s + map.x(0) > W + 40) return;   // купели нет в кадре
        if (Math.random() < dt * 9) puffs.push({ k: STEAM, x: sx(TUB[0] + (Math.random() - 0.5) * 360), y: sy(TUB[1] + (Math.random() - 0.5) * 40), vx: (Math.random() - 0.3) * 10 * s, vy: -(34 + Math.random() * 26) * s, r: 22 * s, g: 34 * s, life: 0, max: 3.4 + Math.random() * 1.8, a: 0.16 });
      }
    }
    function frame(now) {
      raf = 0;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
      last = now;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      emit('smoke', dt);
      emit('steam', dt);
      // пар и дым
      for (let i = puffs.length - 1; i >= 0; i--) {
        const p = puffs[i];
        p.life += dt;
        if (p.life > p.max) { puffs.splice(i, 1); continue; }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy *= 0.995;
        const k = p.life / p.max;
        const r = p.r + p.g * k * 2.2;
        ctx.globalAlpha = p.a * Math.sin(Math.PI * Math.min(1, k * 1.15));
        ctx.drawImage(p.k, p.x - r, p.y - r, r * 2, r * 2);
      }
      // снег
      ctx.fillStyle = '#fff';
      for (const f of flakes) {
        f.y += f.v * dt;
        f.ph += dt * 1.3;
        const x = f.x + Math.sin(f.ph) * f.sw;
        if (f.y > H + 10) Object.assign(f, newFlake(false));
        ctx.globalAlpha = f.a;
        ctx.beginPath();
        ctx.arc(x, f.y, f.r, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (visible && !document.hidden && !reduced) raf = requestAnimationFrame(frame);
    }
    const start = () => { if (!raf && !reduced) { last = 0; raf = requestAnimationFrame(frame); } };
    layout();
    window.addEventListener('resize', layout);
    PORTRAIT.addEventListener?.('change', layout);
    onScreen(canvas, v => { visible = v; if (v) start(); }, '0px', [0]);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });
    if (reduced) frame(performance.now());
    start();
  })();

  // ---------- 2. Растопите печь ----------
  (() => {
    const thermo = document.getElementById('thermo');
    if (!thermo) return;
    const fill = document.getElementById('thermoFill');
    const knob = document.getElementById('thermoKnob');
    const fire = document.querySelector('.sauna-fire');
    const steam = document.querySelector('.sauna-steam');
    const big = document.getElementById('tempBig');
    const word = document.getElementById('tempWord');
    const title = document.getElementById('heatTitle');
    const text = document.getElementById('heatText');
    const btn = document.getElementById('splashBtn');
    const canvas = document.getElementById('saunaFx');
    const ctx = canvas.getContext('2d');
    const T0 = 20, T1 = 90;
    const STAGES = [
      [0, 'Парная остыла', 'парная остыла', 'Печь ещё холодная. Потяните термометр вверх — и растопим.'],
      [35, 'Печь разгорается', 'печь разгорается', 'Сухие берёзовые дрова, огонь видно через стеклянную дверцу.'],
      [60, 'Камни раскалены', 'камни раскалены', 'Через сорок минут парная готова, а камни держат жар до утра.'],
      [80, 'Лёгкий пар', 'лёгкий пар', 'Ковш воды на камни — и мягкий пар поднимается к полку.'],
    ];
    let t = T0, target = T0, touched = false, raf = 0, dragging = false, pid = null, last = 0, saunaVisible = false;
    const puffs = [];
    let W = 0, H = 0, dpr = 1, map = null;

    function layout() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      map = coverMap(W, H, 1920, 1072, 0.7, 0.5);
    }
    const horizontal = () => PORTRAIT.matches;
    function render() {
      const k = (t - T0) / (T1 - T0);
      if (horizontal()) {
        fill.style.width = (k * 100).toFixed(2) + '%';
        fill.style.height = '';
        knob.style.left = `calc(18px + (100% - 36px) * ${k.toFixed(4)})`;
        knob.style.bottom = '';
      } else {
        fill.style.height = (k * 100).toFixed(2) + '%';
        fill.style.width = '';
        knob.style.bottom = `calc(18px + (100% - 36px) * ${k.toFixed(4)})`;
        knob.style.left = '';
      }
      fire.style.opacity = smooth(28, 52, t).toFixed(3);
      steam.style.opacity = smooth(66, 88, t).toFixed(3);
      const deg = Math.round(t);
      big.textContent = deg + '°';
      const st = STAGES.filter(s => deg >= s[0]).pop();
      word.textContent = st[2];
      if (title.textContent !== st[1]) { title.textContent = st[1]; text.textContent = st[3]; }
      btn.disabled = deg < 60;
      thermo.setAttribute('aria-valuenow', String(deg));
      thermo.setAttribute('aria-valuetext', deg + ' градусов');
    }
    function puff(n) {
      const s = map.s;
      for (let i = 0; i < n; i++) {
        puffs.push({ x: map.x(1626 + (Math.random() - 0.5) * 300), y: map.y(590 + (Math.random() - 0.5) * 50), vx: (Math.random() - 0.65) * 40 * s, vy: -(60 + Math.random() * 70) * s, r: 30 * s, g: 120 * s, life: 0, max: 2.4 + Math.random() * 1.6, a: 0.22 });
      }
    }
    function tick(now) {
      raf = 0;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
      last = now;
      const d = target - t;
      if (Math.abs(d) > 0.05) t += d * (dragging ? 0.5 : Math.min(1, dt * 3.2));
      else t = target;
      render();
      // пар над камнями: тем гуще, чем жарче
      if (!reduced && t > 76 && Math.random() < dt * (t - 76) * 0.5) puff(1);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      for (let i = puffs.length - 1; i >= 0; i--) {
        const p = puffs[i];
        p.life += dt;
        if (p.life > p.max) { puffs.splice(i, 1); continue; }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        const k = p.life / p.max;
        const r = p.r + p.g * k;
        ctx.globalAlpha = p.a * Math.sin(Math.PI * Math.min(1, k * 1.1));
        ctx.drawImage(STEAM, p.x - r, p.y - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;
      if (Math.abs(target - t) > 0.05 || ((puffs.length || t > 76) && saunaVisible)) raf = requestAnimationFrame(tick);
    }
    const kick = () => { if (!raf) { last = 0; raf = requestAnimationFrame(tick); } };
    const setTarget = (v, instant) => { target = clamp(v, T0, T1); if (instant) t = target; kick(); };

    function fromPointer(e) {
      const r = thermo.getBoundingClientRect();
      const k = horizontal() ? (e.clientX - r.left - 18) / (r.width - 36) : 1 - (e.clientY - r.top - 18) / (r.height - 36);
      setTarget(T0 + clamp(k) * (T1 - T0));
    }
    thermo.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      touched = true;
      dragging = true;
      pid = e.pointerId;
      fromPointer(e);
      try { thermo.setPointerCapture(pid); } catch (_) { /* не критично */ }
      e.preventDefault();
    });
    thermo.addEventListener('pointermove', e => { if (dragging && e.pointerId === pid) fromPointer(e); });
    const end = e => { if (e.pointerId === pid) dragging = false; };
    thermo.addEventListener('pointerup', end);
    thermo.addEventListener('pointercancel', end);
    thermo.addEventListener('lostpointercapture', end);
    thermo.addEventListener('keydown', e => {
      const map2 = { ArrowUp: 5, ArrowRight: 5, ArrowDown: -5, ArrowLeft: -5, PageUp: 15, PageDown: -15 };
      if (e.key === 'Home') setTarget(T0);
      else if (e.key === 'End') setTarget(T1);
      else if (map2[e.key]) setTarget(target + map2[e.key]);
      else return;
      touched = true;
      e.preventDefault();
    });
    btn.addEventListener('click', () => {
      touched = true;
      if (target < 86) setTarget(90);
      if (!reduced) puff(16);
      kick();
    });

    layout();
    window.addEventListener('resize', () => { layout(); render(); });
    PORTRAIT.addEventListener?.('change', () => { layout(); render(); });
    render();
    onScreen(canvas, v => { saunaVisible = v; if (v) kick(); }, '0px', [0]);
    // при первом появлении печь растапливается сама — показываем, как это работает
    const io = onScreen(document.getElementById('sauna'), (v, e) => {
      if (!v || e.intersectionRatio < 0.5 || touched) return;
      io.disconnect();
      if (reduced) { setTarget(70, true); return; }
      setTimeout(() => { if (!touched) setTarget(86); }, 400);
    }, '0px', [0, 0.5]);
  })();

  // ---------- 3. Конструктор бани ----------
  const config = { text: '' };
  (() => {
    const form = document.getElementById('buildForm');
    if (!form) return;
    const SIZES = { mini: ['2×3 м', 690000, 21, 1], std: ['3×4 м', 890000, 30, 1.3], family: ['4×6 м', 1390000, 40, 2] };
    const STOVES = { wood: ['дровяная печь', 0], electric: ['электропечь', -40000] };
    const WOODS = { linden: ['полки из липы', 0], abash: ['полки из абаша', 35000], cedar: ['полки из кедра', 60000] };
    const state = { size: 'std', stove: 'wood', wood: 'linden' };
    const terrace = document.getElementById('optTerrace');
    const tub = document.getElementById('optTub');
    const rest = document.getElementById('optRest');
    const lT = document.getElementById('layerTerrace');
    const lU = document.getElementById('layerTub');
    const tags = document.getElementById('bvTags');
    const view = document.getElementById('buildView');
    const box3d = document.getElementById('bv3d');
    const hint = document.getElementById('bvHint');
    let api = null;           // 3D-модель; пока не загрузилась — работают фото-слои
    terrace.checked = true;

    function seg(id, key) {
      document.getElementById(id).addEventListener('click', e => {
        const b = e.target.closest('button');
        if (!b) return;
        state[key] = b.dataset.v;
        sync();
      });
    }
    seg('bSize', 'size');
    seg('bStove', 'stove');
    seg('bWood', 'wood');
    [terrace, tub, rest].forEach(x => x.addEventListener('change', sync));

    function sync() {
      [['bSize', 'size'], ['bStove', 'stove'], ['bWood', 'wood']].forEach(([id, key]) => {
        document.getElementById(id).querySelectorAll('button').forEach(b => {
          const on = b.dataset.v === state[key];
          b.classList.toggle('on', on);
          b.setAttribute('aria-pressed', String(on));
        });
      });
      lT.classList.toggle('on', terrace.checked);
      lU.classList.toggle('on', tub.checked);
      const sz = SIZES[state.size];
      let price = sz[1] + STOVES[state.stove][1] + WOODS[state.wood][1] * sz[3];
      let days = sz[2];
      const extras = [];
      if (terrace.checked) { price += 160000; days += 3; extras.push('терраса'); }
      if (tub.checked) { price += 245000; extras.push('купель с лесенкой'); }
      if (rest.checked) { price += 210000; days += 7; extras.push('комната отдыха'); }
      document.getElementById('bPrice').textContent = money(price);
      const dw = `${days} ${plural(days, 'день', 'дня', 'дней')}`;
      document.getElementById('bMeta').textContent = `Срок ${dw} · доставка и монтаж включены`;
      const parts = [sz[0], STOVES[state.stove][0], WOODS[state.wood][0], ...extras];
      tags.innerHTML = parts.map(p => `<span>${p}</span>`).join('');
      config.text = `Баня ${parts.join(', ')} — ${money(price)}, ${dw}`;
      if (api) {
        api.set({ size: state.size, stove: state.stove, wood: state.wood, terrace: terrace.checked, tub: tub.checked, rest: rest.checked });
        insets();
      }
    }
    // модель ставится в свободную полосу между подсказкой сверху и ярлыками снизу
    function insets() {
      if (!api) return;
      const top = hint.hidden ? 0 : hint.offsetTop + hint.offsetHeight;
      const bottom = tags.offsetHeight ? view.clientHeight - tags.offsetTop : 0;
      api.inset(top, bottom);
    }
    window.addEventListener('resize', insets);
    sync();

    // 3D-модель (three.js, ~150 КБ в сжатии) грузится, только когда конструктор рядом с экраном
    if (box3d && 'IntersectionObserver' in window) {
      const io3 = new IntersectionObserver(es => {
        if (!es.some(e => e.isIntersecting)) return;
        io3.disconnect();
        const s = document.createElement('script');
        s.src = 'js/banya3d.js?v=1';
        s.async = true;
        s.onload = () => {
          if (!window.Banya3D) return;
          api = window.Banya3D.mount(box3d);
          if (!api) return;
          view.classList.add('is-3d');
          if (window.matchMedia('(pointer: coarse)').matches) hint.querySelector('.bv-hint-text').textContent = 'проведите пальцем, чтобы повернуть';
          hint.hidden = false;
          sync();
        };
        document.head.appendChild(s);
      }, { rootMargin: '900px 0px' });
      io3.observe(view);
    }

    document.getElementById('bCta').addEventListener('click', () => {
      document.getElementById('configField').value = config.text;
      const box = document.getElementById('formConfig');
      box.textContent = 'Ваша баня: ' + config.text;
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
    const date = form.elements.date;
    const pad = n => String(n).padStart(2, '0');
    const today = new Date();
    date.min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
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
      note.textContent = `Спасибо, ${name}! Перезвоним и подберём время для тест-драйва. (Это демо-сайт: заявка никуда не отправляется.)`;
      form.querySelector('button[type="submit"]').textContent = 'Заявка принята';
    });
  })();
})();
