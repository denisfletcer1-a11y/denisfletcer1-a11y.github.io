(() => {
  'use strict';

  // ================== НАСТРОЙКИ: заполнить данными заказчика ==================
  const CONTACT = {
    phone: '',            // '+7 (900) 123-45-67'
    whatsapp: '',         // номер только цифрами: '79001234567'
    telegram: '',         // 'https://t.me/имя'
    max: '',              // 'https://max.ru/...'
    email: '',            // 'info@...'
    hours: 'Ежедневно 8:00–20:00',
    company: '',          // 'ООО «Ресурс-А»'
    inn: '',              // '0000000000'
  };
  const LEADS = {
    endpoint: '',         // куда отправлять заявки (подключим перед запуском)
    demo: true,           // пока сайт в разработке: заявка никуда не уходит
  };
  // Цены калькулятора, ₽ за м² — ориентиры, сверить с заказчиком
  const RATES = {
    vent: { office: 1500, prod: 1200, retail: 1600, home: 1800 },
    ac: { office: 2000, prod: 1600, retail: 2000, home: 2200 },
    smoke: { office: 1600, prod: 1500, retail: 1600, home: 0 },
  };
  const FIXED = { project: [15000, 60], pnr: [5000, 25] };   // база + ₽ за м²
  const WORK_NAMES = { vent: 'Вентиляция', ac: 'Кондиционирование', smoke: 'Противодымная вентиляция', project: 'Проект', pnr: 'Пусконаладка и автоматика' };
  // Объекты: реальные фото заказчика (подписи уточнить)
  const WORKS = [
    { title: 'Бассейн', text: 'Приточно-вытяжная вентиляция зала бассейна', photos: ['pool-1', 'pool-2'] },
    { title: 'Учебная лаборатория', text: 'Вытяжные зонты над рабочими местами', photos: ['lab-1', 'lab-2'] },
    { title: 'Кондиционирование', text: 'Офисы, детский центр, серверная, фасад здания', photos: ['ac-1', 'ac-2', 'ac-4', 'ac-3'] },
    { title: 'Воздуховоды', text: 'Магистрали под потолком и в шахтах', photos: ['duct-1', 'duct-2', 'duct-3', 'duct-4', 'duct-5'] },
    { title: 'Вентустановки', text: 'Монтаж и обвязка приточно-вытяжных установок', photos: ['ahu-1', 'ahu-2'] },
    { title: 'Щиты автоматики', text: 'Сборка, подключение и пусконаладка', photos: ['auto-1', 'auto-2'] },
  ];
  // ===========================================================================

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const nbsp = s => s.replace(/\s/g, ' ');
  const money = n => nbsp(new Intl.NumberFormat('ru-RU').format(Math.round(n))) + ' ₽';
  const plural = (n, one, few, many) => { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many; };
  const onScreen = (el, cb, margin = '0px', threshold = [0]) => {
    const io = new IntersectionObserver(es => es.forEach(e => cb(e.isIntersecting, e)), { rootMargin: margin, threshold });
    io.observe(el);
    return io;
  };
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------- контакты ----------
  (() => {
    const digits = CONTACT.phone.replace(/\D/g, '');
    const links = {
      phone: digits ? 'tel:+' + (digits[0] === '8' ? '7' + digits.slice(1) : digits) : '',
      whatsapp: CONTACT.whatsapp ? 'https://wa.me/' + CONTACT.whatsapp.replace(/\D/g, '') : '',
      telegram: CONTACT.telegram,
      max: CONTACT.max,
    };
    document.querySelectorAll('[data-contact]').forEach(a => {
      const k = a.dataset.contact, href = links[k];
      if (href) a.href = href;
      else if (k !== 'phone') a.hidden = true;   // нет мессенджера — кнопку прячем
    });
    const texts = { phone: CONTACT.phone, hours: CONTACT.hours, email: CONTACT.email, company: CONTACT.company, inn: CONTACT.inn && 'ИНН ' + CONTACT.inn };
    document.querySelectorAll('[data-contact-text]').forEach(el => { const v = texts[el.dataset.contactText]; if (v) el.textContent = v; });
  })();

  // ---------- шапка и меню ----------
  (() => {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('burger');
    const links = document.getElementById('navLinks');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
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

  // ---------- появление блоков ----------
  (() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
  })();

  // ---------- струи воздуха на фоне ----------
  function airCanvas(canvas, density) {
    if (!canvas) return;
    const g = canvas.getContext('2d');
    let W = 0, H = 0, dpr = 1, items = [], raf = 0, visible = false, last = 0;
    const make = (x) => ({ x: x ?? Math.random() * W, y: Math.random() * H, len: 60 + Math.random() * 180, v: 40 + Math.random() * 110, a: 0.05 + Math.random() * 0.16, w: 0.6 + Math.random() * 1.4, ph: Math.random() * 6.28 });
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      items = Array.from({ length: Math.round(W * H / density) }, () => make());
      draw(0);
    }
    function draw(dt) {
      g.clearRect(0, 0, W, H);
      g.globalCompositeOperation = 'lighter';
      for (const s of items) {
        s.x += s.v * dt;
        s.ph += dt * 0.8;
        if (s.x - s.len > W) Object.assign(s, make(-Math.random() * 200));
        const y = s.y + Math.sin(s.ph + s.x * 0.004) * 10;
        const gr = g.createLinearGradient(s.x - s.len, y, s.x, y);
        gr.addColorStop(0, 'rgba(79,216,255,0)');
        gr.addColorStop(1, `rgba(150,230,255,${s.a})`);
        g.strokeStyle = gr;
        g.lineWidth = s.w;
        g.beginPath();
        g.moveTo(s.x - s.len, y + Math.sin(s.ph) * 3);
        g.quadraticCurveTo(s.x - s.len / 2, y - 6, s.x, y);
        g.stroke();
      }
    }
    function tick(t) {
      raf = 0;
      const dt = last ? Math.min(0.05, (t - last) / 1000) : 0.016;
      last = t;
      draw(dt);
      if (visible && !document.hidden) raf = requestAnimationFrame(tick);
    }
    resize();
    window.addEventListener('resize', resize);
    if (reduced) return;
    onScreen(canvas, v => { visible = v; if (v && !raf) { last = 0; raf = requestAnimationFrame(tick); } });
    document.addEventListener('visibilitychange', () => { if (!document.hidden && visible && !raf) { last = 0; raf = requestAnimationFrame(tick); } });
  }
  airCanvas(document.getElementById('heroAir'), 9000);
  airCanvas(document.getElementById('contactAir'), 14000);

  // ---------- 3D-установка ----------
  (() => {
    const box = document.getElementById('ahu');
    const btn = document.getElementById('explodeBtn');
    if (!box) return;
    let api = null, touched = false;
    const label = btn.querySelector('span');
    const setBtn = on => { btn.setAttribute('aria-pressed', String(on)); label.textContent = on ? 'Собрать установку' : 'Разобрать установку'; };
    btn.addEventListener('click', () => { touched = true; if (api) setBtn(api.toggle()); });
    const hero = box.closest('.hero');
    const slotEl = document.getElementById('modelSlot');
    const ui = slotEl.querySelector('.stage-ui');
    // модель вписываем в правую часть экрана (на телефоне — под текстом), над кнопкой
    const syncSlot = () => {
      if (!api) return;
      const h = box.getBoundingClientRect(), s = slotEl.getBoundingClientRect();
      const portrait = window.matchMedia('(max-aspect-ratio: 6/5)').matches;
      const x1 = portrait ? s.right - h.left : Math.min(h.width - 12, s.right - h.left + (h.right - s.right) * 0.6);
      api.setSlot({ x0: s.left - h.left - (portrait ? 0 : 24), y0: s.top - h.top + (portrait ? 8 : 0), x1, y1: s.bottom - h.top - ui.offsetHeight - 10 });
    };
    const load = () => {
      const s = document.createElement('script');
      s.src = 'js/ahu3d.js?v=2';
      s.async = true;
      s.onload = () => {
        if (!window.AHU3D) return;
        api = window.AHU3D.mount(box, { logo: 'img/logo-dark.png', onInteract: () => { touched = true; hero.classList.add('touched'); } });
        if (!api) { btn.hidden = true; return; }
        syncSlot();
        const waitReady = () => box.classList.contains('ready') ? hero.classList.add('ready-3d') : requestAnimationFrame(waitReady);
        waitReady();
        new ResizeObserver(syncSlot).observe(slotEl);
        window.addEventListener('resize', syncSlot);
        if (document.fonts) document.fonts.ready.then(syncSlot);
        if (window.matchMedia('(pointer: coarse)').matches) document.querySelector('#stageHint span').textContent = 'проведите пальцем, чтобы повернуть';
        // один раз сами показываем, что установку можно разобрать
        if (!reduced) setTimeout(() => {
          if (touched || !api) return;
          setBtn(api.explode(true));
          setTimeout(() => { if (!touched) setBtn(api.explode(false)); }, 5200);
        }, 2600);
      };
      document.head.appendChild(s);
    };
    if (document.readyState === 'complete') setTimeout(load, 50);
    else window.addEventListener('load', () => setTimeout(load, 50));
  })();

  // ---------- объекты и просмотр фото ----------
  (() => {
    const grid = document.getElementById('workGrid');
    const lb = document.getElementById('lightbox');
    if (!grid || !lb) return;
    grid.innerHTML = WORKS.map((w, i) => `
      <button class="work reveal in" type="button" data-i="${i}">
        <span class="work-media"><img src="img/works/${w.photos[0]}-s.webp" alt="${w.title}" loading="lazy" width="540" height="720"><span class="work-count">${w.photos.length} ${plural(w.photos.length, 'фото', 'фото', 'фото')}</span></span>
        <span class="work-body"><b>${w.title}</b><span>${w.text}</span></span>
      </button>`).join('');
    const img = lb.querySelector('img'), cap = lb.querySelector('figcaption');
    let cur = null, idx = 0, opener = null;
    const show = () => {
      const w = WORKS[cur];
      img.src = `img/works/${w.photos[idx]}.webp`;
      img.alt = `${w.title} — фото ${idx + 1}`;
      cap.textContent = `${w.title} · ${w.text} · ${idx + 1} / ${w.photos.length}`;
    };
    const open = (i, el) => { cur = i; idx = 0; opener = el; lb.hidden = false; document.body.style.overflow = 'hidden'; show(); lb.querySelector('.lb-close').focus(); };
    const close = () => { lb.hidden = true; document.body.style.overflow = ''; img.src = ''; if (opener) opener.focus(); };
    const step = d => { const n = WORKS[cur].photos.length; idx = (idx + d + n) % n; show(); };
    grid.addEventListener('click', e => { const b = e.target.closest('.work'); if (b) open(+b.dataset.i, b); });
    lb.querySelector('.lb-close').addEventListener('click', close);
    lb.querySelector('.lb-prev').addEventListener('click', () => step(-1));
    lb.querySelector('.lb-next').addEventListener('click', () => step(1));
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });
    let sx = null;
    lb.addEventListener('pointerdown', e => { sx = e.clientX; });
    lb.addEventListener('pointerup', e => { if (sx !== null && Math.abs(e.clientX - sx) > 50) step(e.clientX < sx ? 1 : -1); sx = null; });
  })();

  // ---------- калькулятор ----------
  const calcState = { text: '' };
  (() => {
    const typeBox = document.getElementById('cType');
    const range = document.getElementById('cArea');
    const num = document.getElementById('cAreaNum');
    const worksBox = document.getElementById('cWorks');
    if (!typeBox) return;
    const TYPES = { office: 'офис или банк', prod: 'производство или склад', retail: 'магазин или кафе', home: 'квартира или дом' };
    let type = 'office';
    typeBox.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      type = b.dataset.v;
      typeBox.querySelectorAll('button').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      worksBox.querySelectorAll('[data-hide]').forEach(l => { const hide = l.dataset.hide === type; l.hidden = hide; if (hide) l.querySelector('input').checked = false; });
      update();
    });
    const setArea = (v, from) => {
      const a = clamp(Math.round(+v || 0), 0, 20000);
      if (from !== 'num') num.value = a;
      if (from !== 'range') range.value = Math.min(a, +range.max);
      range.style.setProperty('--p', ((Math.min(a, +range.max) - range.min) / (range.max - range.min) * 100).toFixed(1) + '%');
      update();
    };
    range.addEventListener('input', () => setArea(range.value, 'range'));
    num.addEventListener('input', () => setArea(num.value, 'num'));
    num.addEventListener('blur', () => { if (+num.value < 20) setArea(20); });
    worksBox.addEventListener('change', update);
    function update() {
      const area = Math.max(20, +num.value || 0);
      const picked = [...worksBox.querySelectorAll('input:checked')].map(i => i.value);
      const lines = [];
      for (const w of picked) {
        let sum = 0;
        if (RATES[w]) sum = RATES[w][type] * area;
        else if (FIXED[w]) sum = FIXED[w][0] + FIXED[w][1] * area;
        if (sum > 0) lines.push([WORK_NAMES[w], Math.round(sum / 1000) * 1000]);
      }
      const total = lines.reduce((s, l) => s + l[1], 0);
      document.getElementById('rPrice').textContent = total ? 'от ' + money(total) : 'Выберите работы';
      document.getElementById('rLines').innerHTML = lines.map(([n, s]) => `<li><span>${n}</span><b>от ${money(s)}</b></li>`).join('');
      calcState.text = total ? `${TYPES[type]}, ${area} м²: ${lines.map(l => l[0].toLowerCase()).join(', ')} — от ${money(total)}` : '';
      const f = document.getElementById('calcField');
      if (f) f.value = calcState.text;
    }
    setArea(num.value);
  })();

  // ---------- формы заявок ----------
  (() => {
    const mask = input => input.addEventListener('input', () => {
      let d = input.value.replace(/\D/g, '');
      if (!d) { input.value = ''; return; }
      if (d[0] === '8') d = '7' + d.slice(1);
      if (d[0] !== '7') d = '7' + d;
      d = d.slice(0, 11);
      let out = '+7';
      if (d.length > 1) out += ' (' + d.slice(1, 4);
      if (d.length >= 4) out += ')';
      if (d.length > 4) out += ' ' + d.slice(4, 7);
      if (d.length > 7) out += '-' + d.slice(7, 9);
      if (d.length > 9) out += '-' + d.slice(9, 11);
      input.value = out;
      input.closest('.field').classList.remove('invalid');
    });
    document.querySelectorAll('input[type="tel"]').forEach(mask);
    async function send(data) {
      if (!LEADS.endpoint) return true;
      try {
        const r = await fetch(LEADS.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        return r.ok;
      } catch (e) { return false; }
    }
    function done(form, note, okText) {
      note.className = 'form-note ok';
      note.textContent = okText + (LEADS.demo ? ' (Сайт в разработке: заявка пока никуда не отправляется.)' : '');
      form.querySelector('button[type="submit"]').textContent = 'Заявка принята';
    }
    // короткая форма в калькуляторе
    const cl = document.getElementById('calcLead');
    cl.addEventListener('submit', async e => {
      e.preventDefault();
      const phone = cl.elements.phone, note = cl.querySelector('.form-note');
      if (phone.value.replace(/\D/g, '').length < 11) {
        phone.closest('.field').classList.add('invalid');
        note.className = 'form-note err';
        note.textContent = 'Укажите телефон полностью.';
        phone.focus();
        return;
      }
      const ok = await send({ form: 'calc', phone: phone.value, calc: calcState.text });
      if (ok) done(cl, note, 'Спасибо! Инженер перезвонит и уточнит детали для точной сметы.');
      else { note.className = 'form-note err'; note.textContent = 'Не удалось отправить. Позвоните нам, пожалуйста.'; }
    });
    // основная форма
    const f = document.getElementById('leadForm');
    f.addEventListener('submit', async e => {
      e.preventDefault();
      const name = f.elements.name, phone = f.elements.phone, agree = f.elements.agree, note = f.querySelector('.form-note');
      const bad = [];
      if (!name.value.trim()) { name.closest('.field').classList.add('invalid'); bad.push([name, 'Укажите, как к вам обращаться.']); }
      if (phone.value.replace(/\D/g, '').length < 11) { phone.closest('.field').classList.add('invalid'); bad.push([phone, 'Укажите телефон полностью.']); }
      agree.closest('.agree').classList.toggle('invalid', !agree.checked);
      if (!agree.checked) bad.push([agree, 'Нужно согласие на обработку персональных данных.']);
      if (bad.length) { note.className = 'form-note err'; note.textContent = bad[0][1]; bad[0][0].focus(); return; }
      const ok = await send({ form: 'lead', name: name.value.trim(), phone: phone.value, task: f.elements.task.value.trim(), calc: calcState.text });
      if (ok) done(f, note, `Спасибо, ${name.value.trim()}! Перезвоним и договоримся о выезде инженера.`);
      else { note.className = 'form-note err'; note.textContent = 'Не удалось отправить. Позвоните нам, пожалуйста.'; }
    });
    f.elements.name.addEventListener('input', () => f.elements.name.closest('.field').classList.remove('invalid'));
    f.elements.agree.addEventListener('change', () => f.elements.agree.closest('.agree').classList.remove('invalid'));
  })();
})();
