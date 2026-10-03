(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const fmt = n => n.toLocaleString('ru-RU') + ' ₽';
  const ASSEMBLY = window.ASSEMBLY || {};

  // Меню. Блюда с видео собираются из ингредиентов, без видео — показываются фото.
  // Чтобы добавить сборку: python tools/render_assembly.py <name> и указать video/assembly ниже.
  const MENU = [
    { id: 'shawarma', name: 'Шаурма классика', price: 290, weight: '350 г', tag: 'Хит',
      desc: 'Курица гриль, томаты, огурцы, красный лук, салат, чесночный соус',
      img: 'img/shawarma.webp', video: 'media/shawarma.mp4', poster: 'media/shawarma_poster.jpg', assembly: 'shawarma' },
    { id: 'cheesy', name: 'Сырная шаурма', price: 330, weight: '380 г',
      desc: 'Классика плюс тёртый сыр, который плавится на гриле',
      img: 'img/cheesy.webp', video: 'media/cheesy.mp4', poster: 'media/cheesy_poster.jpg', assembly: 'cheesy' },
    { id: 'xl', name: 'Шаурма XL', price: 390, weight: '500 г',
      desc: 'Двойная порция курицы и овощей — для очень голодных',
      img: 'img/shawarma_xl.webp', video: 'media/cut.mp4', poster: 'media/cut_poster.jpg', assembly: 'cut' },
    { id: 'doner', name: 'Донер', price: 320, weight: '300 г',
      desc: 'Турецкий хлеб с кунжутом, мясо с вертела, свежие овощи, чесночный соус',
      img: 'img/doner.webp', video: 'media/doner.mp4', poster: 'media/doner_poster.jpg', assembly: 'doner' },
    { id: 'skepasti', name: 'Скепасти', price: 360, weight: '330 г', tag: 'Греция',
      desc: 'Две питы с курицей, овощами, моцареллой и дзадзики — прижимаем на гриле до хруста',
      img: 'img/skepasti.webp', video: 'media/skepasti.mp4', poster: 'media/skepasti_poster.jpg', assembly: 'skepasti' },
    { id: 'hotdog', name: 'Хот-дог', price: 250, weight: '220 г',
      desc: 'Сосиска гриль, бриошь, кетчуп, хрустящий лук, огурчики, горчица',
      img: 'img/hotdog.webp', video: 'media/hotdog.mp4', poster: 'media/hotdog_poster.jpg', assembly: 'hotdog' },
    { id: 'burger', name: 'Чизбургер', price: 420, weight: '320 г', tag: 'Новинка',
      desc: 'Говяжья котлета, чеддер, салат, томаты, красный лук, бриошь с кунжутом',
      img: 'img/burger.webp', video: 'media/burger.mp4', poster: 'media/burger_poster.jpg', assembly: 'burger' },
  ];

  /* ---------- искры от гриля ---------- */
  function makeSprite() {
    const s = document.createElement('canvas');
    s.width = s.height = 64;
    const g = s.getContext('2d');
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,235,1)');
    grad.addColorStop(0.18, 'rgba(255,220,140,0.95)');
    grad.addColorStop(0.42, 'rgba(255,130,20,0.55)');
    grad.addColorStop(1, 'rgba(255,60,0,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    return s;
  }
  const SPRITE = makeSprite();

  class Embers {
    constructor(host, density = 1) {
      this.host = host;
      this.canvas = document.createElement('canvas');
      this.canvas.className = 'embers';
      this.canvas.setAttribute('aria-hidden', 'true');
      host.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      this.density = density;
      this.parts = [];
      this.visible = false;
      this.last = 0;
      this.resize();
      window.addEventListener('resize', () => this.resize());
      new IntersectionObserver(([e]) => {
        this.visible = e.isIntersecting;
        if (this.visible) { this.last = 0; requestAnimationFrame(t => this.tick(t)); }
      }).observe(host);
    }

    resize() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.w = this.host.clientWidth;
      this.h = this.host.clientHeight;
      this.canvas.width = Math.round(this.w * this.dpr);
      this.canvas.height = Math.round(this.h * this.dpr);
      this.max = Math.round((this.w * this.h) / 16000 * this.density);
    }

    spawn(initial) {
      const life = 3 + Math.random() * 4;
      return {
        x: Math.random() * this.w,
        y: initial ? Math.random() * this.h : this.h + 10,
        vx: (Math.random() - 0.5) * 12,
        vy: -(30 + Math.random() * 70),
        r: 0.8 + Math.random() * 2.4,
        life,
        age: initial ? Math.random() * life : 0,
        wob: Math.random() * Math.PI * 2,
        wobS: 1 + Math.random() * 2.5,
      };
    }

    tick(now) {
      if (!this.visible) return;
      const dt = this.last ? Math.min(0.05, (now - this.last) / 1000) : 0.016;
      this.last = now;
      while (this.parts.length < this.max) this.parts.push(this.spawn(this.parts.length < this.max * 0.8 && !this.started));
      this.started = true;
      const { ctx, dpr } = this;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, this.w, this.h);
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < this.parts.length; i++) {
        const p = this.parts[i];
        p.age += dt;
        if (p.age > p.life || p.y < -20) { this.parts[i] = this.spawn(false); continue; }
        p.wob += dt * p.wobS;
        p.x += (p.vx + Math.sin(p.wob) * 14) * dt;
        p.y += p.vy * dt;
        const k = p.age / p.life;
        const fade = k < 0.15 ? k / 0.15 : 1 - (k - 0.15) / 0.85;
        const flick = 0.75 + Math.sin(p.wob * 3.1) * 0.25;
        const size = p.r * 7 * (1 - k * 0.5);
        ctx.globalAlpha = clamp(fade * flick, 0, 1);
        ctx.drawImage(SPRITE, p.x - size / 2, p.y - size / 2, size, size);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(t => this.tick(t));
    }
  }

  if (!reduced) {
    new Embers(document.querySelector('.hero'), 1.1);
    new Embers(document.querySelector('.grill'), 1.3);
    new Embers(document.querySelector('.footer'), 0.5);
  }

  /* ---------- видео: играем только когда видно ---------- */
  function autoVideo(video, threshold = 0.2) {
    if (!video) return;
    if (reduced) { video.removeAttribute('autoplay'); video.pause(); return; }
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (video.preload === 'none') video.preload = 'auto';
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { threshold }).observe(video);
  }
  autoVideo(document.getElementById('heroVideo'), 0.05);
  autoVideo(document.getElementById('grillVideo'), 0.05);

  /* ---------- шапка ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const links = [...document.querySelectorAll('.nav-links a')];
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(l => { const el = document.querySelector(l.getAttribute('href')); if (el) navObserver.observe(el); });

  /* ---------- заголовки по словам, счётчики, появление ---------- */
  function splitWords(el) {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/( +)/).forEach(part => {
            if (!part) return;
            if (/^ +$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const outer = document.createElement('span');
            outer.className = 'w';
            const inner = document.createElement('span');
            inner.textContent = part;
            inner.style.transitionDelay = (i++ * 60) + 'ms';
            outer.appendChild(inner);
            frag.appendChild(outer);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    walk(el);
    el.classList.add('split');
  }
  if (!reduced) document.querySelectorAll('.section h2, .grill h2').forEach(splitWords);

  function countUp(el) {
    if (el.dataset.counted || reduced) return;
    el.dataset.counted = '1';
    const to = +el.dataset.countup;
    const final = el.textContent;
    const t0 = performance.now();
    const step = now => {
      const t = clamp((now - t0) / 1400);
      el.textContent = Math.round(to * (1 - Math.pow(1 - t, 3))).toLocaleString('ru-RU');
      if (t < 1) requestAnimationFrame(step); else el.textContent = final;
    };
    requestAnimationFrame(step);
  }

  const revealer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('[data-countup]').forEach(countUp);
      revealer.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));
  document.querySelectorAll('.split').forEach(h => { if (!h.closest('.reveal')) revealer.observe(h); });

  const intro = document.querySelector('.intro');
  requestAnimationFrame(() => setTimeout(() => {
    intro.classList.add('in');
    intro.querySelectorAll('[data-countup]').forEach(countUp);
  }, 150));

  /* ---------- в разрезе: нож режет сам, слои подсвечиваются ---------- */
  (function cut() {
    const video = document.getElementById('cutVideo');
    const replay = document.getElementById('cutReplay');
    const layers = [...document.querySelectorAll('#cutLayers li')];
    const REVEAL_AT = 7.3; // половинки легли срезами к камере
    let played = false;

    const showLayers = upto => layers.forEach((li, i) => li.classList.toggle('on', i < upto));
    const play = () => {
      showLayers(0);
      replay.classList.remove('show');
      video.currentTime = 0;
      video.play().catch(() => { showLayers(layers.length); replay.classList.add('show'); });
    };
    video.addEventListener('timeupdate', () => {
      const n = Math.floor((video.currentTime - REVEAL_AT) / 0.35) + 1;
      showLayers(clamp(n, 0, layers.length));
    });
    video.addEventListener('ended', () => { showLayers(layers.length); replay.classList.add('show'); });
    replay.addEventListener('click', play);

    if (reduced) {
      video.poster = 'media/cut_end.jpg';
      showLayers(layers.length);
      return;
    }
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !played) { played = true; play(); }
      else if (!e.isIntersecting && !video.paused) video.pause();
      else if (e.isIntersecting && video.paused && !video.ended && video.currentTime > 0) video.play().catch(() => {});
    }, { threshold: 0.55 }).observe(video);
  })();

  /* ---------- меню: блюдо собирается на сцене ---------- */
  (function menu() {
    const list = document.getElementById('menuList');
    const stage = document.getElementById('stage');
    const inner = document.getElementById('stageInner');
    const img = document.getElementById('stageImg');
    const video = document.getElementById('stageVideo');
    const label = document.getElementById('stageLabel');
    const name = document.getElementById('stageName');
    const steps = document.getElementById('stageSteps');
    const replay = document.getElementById('stageReplay');

    let current = null;
    let userPicked = false;
    let visible = false;
    let nextTimer = 0;

    list.innerHTML = MENU.map(d => `
      <li class="dish" data-id="${d.id}" tabindex="0">
        <div class="dish-thumb"><img src="${d.img}" alt="" loading="lazy"></div>
        <div class="dish-info">
          ${d.tag ? `<span class="dish-tag">${d.tag}</span>` : ''}
          <h3>${d.name}</h3>
          <p>${d.desc}</p>
          <span class="dish-meta">${d.weight}${d.video ? ' · собирается на глазах' : ''}</span>
        </div>
        <div class="dish-buy">
          <span class="dish-price">${fmt(d.price)}</span>
          <button class="add-btn" type="button" data-add="${d.id}" aria-label="Добавить «${d.name}» в корзину">+</button>
        </div>
      </li>`).join('');

    const items = [...list.querySelectorAll('.dish')];

    function setSteps(labels) {
      steps.innerHTML = labels.map(l => `<li>${l}</li>`).join('');
    }

    function show(dish, fromUser) {
      clearTimeout(nextTimer);
      current = dish;
      items.forEach(el => el.classList.toggle('active', el.dataset.id === dish.id));
      name.textContent = dish.name;
      label.classList.remove('on');
      replay.classList.remove('show');

      const data = dish.assembly && ASSEMBLY[dish.assembly];
      if (dish.video && data && !reduced) {
        img.classList.remove('kenburns');
        img.src = dish.poster;
        setSteps(data.steps.map(s => s.label));
        video.classList.remove('on');
        if (!video.src.endsWith(dish.video)) {
          video.src = dish.video;
          video.load();
        }
        video.currentTime = 0;
        const start = () => { video.classList.add('on'); video.play().catch(() => {}); };
        if (video.readyState >= 2) start(); else video.addEventListener('loadeddata', start, { once: true });
      } else {
        video.pause();
        video.classList.remove('on');
        img.src = dish.img;
        img.classList.toggle('kenburns', !reduced);
        setSteps(dish.facts || (data ? data.steps.map(s => s.label) : []));
        steps.querySelectorAll('li').forEach(li => li.classList.add('on'));
        label.textContent = fmt(dish.price);
        label.classList.add('on');
        if (!userPicked && !fromUser) nextTimer = setTimeout(advance, 5200);
      }
    }

    function advance() {
      if (userPicked || !visible) return;
      const i = MENU.indexOf(current);
      show(MENU[(i + 1) % MENU.length]);
    }

    video.addEventListener('timeupdate', () => {
      const data = current && ASSEMBLY[current.assembly];
      if (!data) return;
      let active = -1;
      data.steps.forEach((s, i) => { if (video.currentTime >= s.t) active = i; });
      steps.querySelectorAll('li').forEach((li, i) => li.classList.toggle('on', i <= active));
      if (active >= 0) {
        if (label.textContent !== data.steps[active].label) {
          label.classList.remove('on');
          void label.offsetWidth;
          label.textContent = data.steps[active].label;
        }
        label.classList.add('on');
      }
    });
    video.addEventListener('ended', () => {
      replay.classList.add('show');
      label.textContent = fmt(current.price);
      if (!userPicked) nextTimer = setTimeout(advance, 3500);
    });
    replay.addEventListener('click', () => current && show(current, true));

    // Телефон и планшет: сцена стоит над списком. После выбора блюда подкручиваем к ней — иначе сборку не видно.
    function revealStage() {
      const media = stage.querySelector('.stage-media').getBoundingClientRect();
      const top = document.getElementById('nav').offsetHeight + 8;
      if (media.top >= top - 4 && media.bottom <= window.innerHeight + 4) return;
      window.scrollTo({ top: window.scrollY + media.top - top, behavior: reduced ? 'auto' : 'smooth' });
    }

    list.addEventListener('click', e => {
      if (e.target.closest('[data-add]')) return;
      const li = e.target.closest('.dish');
      if (!li) return;
      userPicked = true;
      show(MENU.find(d => d.id === li.dataset.id), true);
      revealStage();
    });
    list.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const li = e.target.closest('.dish');
      if (!li) return;
      e.preventDefault();
      userPicked = true;
      show(MENU.find(d => d.id === li.dataset.id), true);
      revealStage();
    });

    // 3D-наклон сцены за курсором
    if (!reduced) {
      stage.addEventListener('pointermove', e => {
        if (e.pointerType !== 'mouse') return;
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        inner.style.transition = 'transform 0.15s linear';
        inner.style.transform = `rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 8).toFixed(2)}deg) translateZ(0)`;
      });
      stage.addEventListener('pointerleave', () => {
        inner.style.transition = '';
        inner.style.transform = '';
      });
    }

    // старт, когда меню на экране
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !current) show(MENU[0]);
      else if (!visible) { video.pause(); clearTimeout(nextTimer); }
      else if (visible && current && current.video && video.paused && !video.ended) video.play().catch(() => {});
      else if (visible && current && !userPicked && (video.ended || !current.video)) nextTimer = setTimeout(advance, 2500);
    }, { threshold: 0.2 }).observe(stage);
  })();

  /* ---------- корзина ---------- */
  const cart = new Map(); // id -> {name, price, qty}
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const cartSum = document.getElementById('cartSum');
  const orderCart = document.getElementById('orderCart');

  function renderCart() {
    let qty = 0;
    let sum = 0;
    cart.forEach(item => { qty += item.qty; sum += item.qty * item.price; });
    cartCount.textContent = qty;
    cartSum.textContent = fmt(sum);
    if (!qty) {
      orderCart.innerHTML = '<span class="empty">Корзина пуста — добавьте что-нибудь из меню или соберите свою шаурму.</span>';
      return;
    }
    orderCart.innerHTML = [...cart.entries()].map(([id, it]) => `
      <div class="order-line">
        <span>${it.name}</span>
        <span class="qty"><button type="button" data-dec="${id}" aria-label="Меньше">−</button>${it.qty}<button type="button" data-inc="${id}" aria-label="Больше">+</button></span>
        <b>${fmt(it.qty * it.price)}</b>
      </div>`).join('') + `<div class="order-total"><span>Итого</span><b>${fmt(sum)}</b></div>`;
  }

  function addToCart(id, name, price) {
    const it = cart.get(id) || { name, price, qty: 0 };
    it.qty += 1;
    cart.set(id, it);
    renderCart();
    cartBtn.classList.remove('bump');
    void cartBtn.offsetWidth;
    cartBtn.classList.add('bump');
  }

  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) {
      const d = MENU.find(x => x.id === add.dataset.add);
      addToCart(d.id, d.name, d.price);
      return;
    }
    const inc = e.target.closest('[data-inc]');
    const dec = e.target.closest('[data-dec]');
    if (inc || dec) {
      const id = (inc || dec).dataset[inc ? 'inc' : 'dec'];
      const it = cart.get(id);
      if (!it) return;
      it.qty += inc ? 1 : -1;
      if (it.qty <= 0) cart.delete(id);
      renderCart();
    }
  });
  renderCart();

  /* ---------- конструктор ---------- */
  (function builder() {
    const form = document.getElementById('builderForm');
    const total = document.getElementById('builderTotal');
    const summary = document.getElementById('builderSummary');
    const addBtn = document.getElementById('builderAdd');
    const state = { price: 290, text: '' };

    const update = () => {
      const base = form.querySelector('input[name="base"]:checked');
      const sauce = form.querySelector('input[name="sauce"]:checked');
      const extras = [...form.querySelectorAll('input[name="extra"]:checked')];
      state.price = +base.dataset.price + extras.reduce((s, x) => s + +x.dataset.price, 0);
      state.text = [base.value, sauce.value, ...extras.map(x => x.value)].join(' · ');
      total.textContent = fmt(state.price);
      summary.textContent = state.text;
    };
    form.addEventListener('change', update);
    addBtn.addEventListener('click', () => {
      addToCart('custom-' + state.text, 'Своя шаурма: ' + state.text, state.price);
      addBtn.textContent = 'Добавлено ✓';
      setTimeout(() => { addBtn.textContent = 'Добавить в корзину'; }, 1600);
    });
    update();
  })();

  /* ---------- оформление заказа ---------- */
  (function order() {
    const form = document.getElementById('orderForm');
    const name = document.getElementById('orderName');
    const phone = document.getElementById('orderPhone');
    const address = document.getElementById('orderAddress');
    const note = document.getElementById('orderNote');
    const submit = document.getElementById('orderSubmit');

    phone.addEventListener('input', () => {
      let d = phone.value.replace(/\D/g, '');
      if (d.startsWith('8')) d = '7' + d.slice(1);
      if (d && !d.startsWith('7')) d = '7' + d;
      d = d.slice(0, 11);
      const p = [d.slice(1, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)];
      let s = d ? '+7' : '';
      if (p[0]) s += ' (' + p[0];
      if (p[0].length === 3) s += ')';
      if (p[1]) s += ' ' + p[1];
      if (p[2]) s += '-' + p[2];
      if (p[3]) s += '-' + p[3];
      phone.value = s;
      phone.classList.remove('invalid');
    });
    [name, address].forEach(el => el.addEventListener('input', () => el.classList.remove('invalid')));

    form.addEventListener('submit', e => {
      e.preventDefault();
      const ok = {
        name: name.value.trim().length >= 2,
        phone: phone.value.replace(/\D/g, '').length === 11,
        address: address.value.trim().length >= 5,
      };
      name.classList.toggle('invalid', !ok.name);
      phone.classList.toggle('invalid', !ok.phone);
      address.classList.toggle('invalid', !ok.address);
      note.classList.remove('ok');
      if (!cart.size) { note.textContent = 'Добавьте в корзину хотя бы одно блюдо.'; return; }
      if (!ok.name || !ok.phone || !ok.address) { note.textContent = 'Проверьте имя, телефон и адрес.'; return; }
      submit.textContent = 'Заказ принят 🔥';
      submit.disabled = true;
      note.classList.add('ok');
      note.textContent = 'Привезём за 30 минут. Это демо-версия: заказ никуда не отправлен.';
    });
  })();
})();
