(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BG = '#040605';
  // Метка версии: меняется при обновлении кадров, чтобы браузер не брал старые из кэша.
  const ASSET_V = '2026-09-28-360b';
  const withV = src => src + '?v=' + ASSET_V;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  // Интерактивные сцены. Колесо мыши листает страницу, а сцены крутятся зажатой кнопкой / пальцем.
  //   drag: 'relative' — тянем и крутим (dir: куда тянуть, sens: сколько ширины экрана на весь ход)
  //   drag: 'absolute' — шторка идёт за курсором
  //   drag: 'auto'     — анимация сама по себе
  // Когда появятся видео f3–f5, замените images на frames: ['frames/fN/', количество кадров].
  const STAGES = {
    // Полный оборот 360°, крутится бесконечно. avoid — переходные кадры на стыках: на них машина не останавливается.
    orbit: { frames: ['frames/f1/', 300], drag: 'relative', dir: -1, sens: 0.6, start: 0, hint: 0.12, wrap: true, avoid: [112, 113, 262, 263] },
    polish: { frames: ['frames/f2/', 120], drag: 'relative', dir: 1, sens: 1.1, start: 0, hint: 0.2 },
    ceramic: { frames: ['frames/f3/', 156], drag: 'relative', dir: 1, sens: 1.1, start: 0, hint: 0.3 },
    reveal: { images: ['img/studio_before.webp', 'img/studio_after.webp'], drag: 'absolute', start: 0.35, hint: 0.2 },
    cabin: { images: ['img/interior.webp'], drag: 'auto', period: 26 },
  };

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Не загрузилось: ' + src));
      img.src = src;
    });
  }

  // Кадры грузятся «с прорежением»: сначала каждый 32-й, потом 16-й … 1-й.
  // Сцена работает сразу, а плавность догружается.
  class FrameSequence {
    constructor(dir, count) {
      this.dir = dir;
      this.count = count;
      this.images = new Array(count);
      this.loaded = 0;
      this.started = false;
      this.onload = null;
    }

    url(i) {
      return withV(this.dir + String(i + 1).padStart(4, '0') + '.webp');
    }

    order() {
      const seen = new Set();
      const out = [];
      const push = i => {
        if (i >= 0 && i < this.count && !seen.has(i)) { seen.add(i); out.push(i); }
      };
      push(0);
      push(this.count - 1);
      for (let step = 32; step >= 1; step /= 2) {
        for (let i = 0; i < this.count; i += step) push(i);
      }
      return out;
    }

    start() {
      if (this.started) return;
      this.started = true;
      const queue = this.order();
      let active = 0;
      const next = () => {
        while (active < 6 && queue.length) {
          const i = queue.shift();
          active++;
          loadImage(this.url(i))
            .then(img => {
              this.images[i] = img;
              this.loaded++;
              if (this.onload) this.onload(i);
            })
            .catch(() => {})
            .finally(() => { active--; next(); });
        }
      };
      next();
    }

    get(pos) {
      const i = Math.round(clamp(pos, 0, this.count - 1));
      if (this.images[i]) return this.images[i];
      for (let d = 1; d < this.count; d++) {
        if (this.images[i - d]) return this.images[i - d];
        if (this.images[i + d]) return this.images[i + d];
      }
      return null;
    }
  }

  function drawFit(ctx, img, cw, ch, opt = {}) {
    const { fit = 'cover', scale = 1, fx = 0.5, fy = 0.5, alpha = 1 } = opt;
    const ir = img.naturalWidth / img.naturalHeight;
    let w, h;
    if ((fit === 'cover') === (ir > cw / ch)) { h = ch; w = ch * ir; } else { w = cw; h = cw / ir; }
    w *= scale;
    h *= scale;
    const x = (cw - w) * fx;
    const y = (ch - h) * fy;
    ctx.globalAlpha = alpha;
    ctx.drawImage(img, x, y, w, h);
    ctx.globalAlpha = 1;
    return { x, y, w, h };
  }

  // Растворяет края уменьшенного кадра в цвете фона страницы.
  function feather(ctx, r, amount) {
    const f = Math.min(r.w, r.h) * amount;
    const grad = (x0, y0, x1, y1) => {
      const g = ctx.createLinearGradient(x0, y0, x1, y1);
      g.addColorStop(0, BG);
      g.addColorStop(1, 'rgba(4, 6, 5, 0)');
      return g;
    };
    ctx.fillStyle = grad(0, r.y, 0, r.y + f);
    ctx.fillRect(r.x, r.y, r.w, f);
    ctx.fillStyle = grad(0, r.y + r.h, 0, r.y + r.h - f);
    ctx.fillRect(r.x, r.y + r.h - f, r.w, f);
    ctx.fillStyle = grad(r.x, 0, r.x + f, 0);
    ctx.fillRect(r.x, r.y, f, r.h);
    ctx.fillStyle = grad(r.x + r.w, 0, r.x + r.w - f, 0);
    ctx.fillRect(r.x + r.w - f, r.y, f, r.h);
  }

  // Блик, который раз в несколько секунд пробегает по кузову (overlay не трогает чёрный фон).
  function sheen(ctx, r, time) {
    if (reduced) return;
    const period = 7;
    const k = (time % period) / 1.8;
    if (k > 1) return;
    const x = r.x + lerp(-0.25, 1.25, easeInOut(k)) * r.w;
    const band = r.w * 0.18;
    const g = ctx.createLinearGradient(x - band, r.y, x + band, r.y + r.h * 0.35);
    g.addColorStop(0, 'rgba(255, 255, 255, 0)');
    g.addColorStop(0.5, 'rgba(255, 255, 255, 0.55)');
    g.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.save();
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillStyle = g;
    ctx.fillRect(r.x, r.y, r.w, r.h);
    ctx.restore();
  }

  const RENDER = {
    orbit(s, ctx, cw, ch, p) {
      const img = s.seq.get(s.frameIndex(p));
      if (!img) return;
      const portrait = cw / ch < 0.8;
      const stacked = window.innerWidth <= 1000 || cw / ch < 1.45;
      let r;
      if (portrait || stacked) {
        r = drawFit(ctx, img, cw, ch, portrait ? { fit: 'contain', scale: 1, fy: 0.9 } : { fit: 'contain', scale: 0.8, fy: 0.97 });
      } else {
        // справа внизу, 60% ширины экрана — в профиль машина не наезжает на текст слева
        const w = cw * 0.6;
        const h = w * (img.naturalHeight / img.naturalWidth);
        r = { x: cw - w - cw * 0.01, y: ch - h - ch * 0.08, w, h };
        ctx.drawImage(img, r.x, r.y, r.w, r.h);
      }
      sheen(ctx, r, s.clock);
      feather(ctx, r, 0.1);
    },

    polish(s, ctx, cw, ch, p) {
      const img = s.seq.get(p * (s.seq.count - 1));
      if (img) drawFit(ctx, img, cw, ch);
    },

    ceramic(s, ctx, cw, ch, p) {
      const img = s.seq.get(p * (s.seq.count - 1));
      if (img) drawFit(ctx, img, cw, ch, { scale: lerp(1, 1.05, p), fy: 0.55 });
    },

    reveal(s, ctx, cw, ch, p) {
      const [before, after] = s.imgs;
      if (!before) return;
      drawFit(ctx, before, cw, ch);
      if (!after) return;
      const x = p * cw;
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, x, ch);
      ctx.clip();
      drawFit(ctx, after, cw, ch);
      ctx.restore();

      const k = s.dpr;
      const glow = ctx.createLinearGradient(x - 70 * k, 0, x + 70 * k, 0);
      glow.addColorStop(0, 'rgba(210, 255, 235, 0)');
      glow.addColorStop(0.5, 'rgba(210, 255, 235, 0.3)');
      glow.addColorStop(1, 'rgba(210, 255, 235, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(x - 70 * k, 0, 140 * k, ch);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
      ctx.fillRect(x - k, 0, 2 * k, ch);

      // ручка шторки
      const cy = ch * 0.42;
      const R = 26 * k;
      ctx.beginPath();
      ctx.arc(x, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(4, 6, 5, 0.7)';
      ctx.fill();
      ctx.lineWidth = 1.5 * k;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 2 * k;
      ctx.moveTo(x - 6 * k, cy - 6 * k); ctx.lineTo(x - 12 * k, cy); ctx.lineTo(x - 6 * k, cy + 6 * k);
      ctx.moveTo(x + 6 * k, cy - 6 * k); ctx.lineTo(x + 12 * k, cy); ctx.lineTo(x + 6 * k, cy + 6 * k);
      ctx.stroke();
    },

    cabin(s, ctx, cw, ch, p) {
      const [img] = s.imgs;
      const e = easeInOut(p);
      if (img) drawFit(ctx, img, cw, ch, { scale: lerp(1, 1.12, e), fx: lerp(0.45, 0.6, e) });
    },
  };

  class Stage {
    constructor(el) {
      this.el = el;
      this.name = el.dataset.stage;
      this.cfg = STAGES[this.name];
      this.canvas = el.querySelector('.scene-canvas');
      this.ctx = this.canvas.getContext('2d', { alpha: false });
      this.hintEl = el.querySelector('.drag-hint');
      this.p = this.target = this.cfg.start || 0;
      this.vel = 0;
      this.dragging = false;
      this.touched = false;
      this.hintT = -1;
      this.hintDone = false;
      this.hintAllowed = true;
      this.visible = false;
      this.dirty = true;
      this.loading = false;
      this.imgs = [];
      this.time = 0;
      this.clock = 0;
      this.dpr = 1;
      if (this.cfg.frames) {
        this.seq = new FrameSequence(...this.cfg.frames);
        this.seq.onload = () => { this.dirty = true; };
      }
      this.avoid = new Set(this.cfg.avoid || []);
      const range = s => s.split(',').map(Number);
      this.counters = [...el.querySelectorAll('[data-count-range]')].map(node => {
        const [a, b] = range(node.dataset.countRange);
        return { node, a, b, from: +node.dataset.from, to: +node.dataset.to };
      });
      this.bars = [...el.querySelectorAll('[data-bar-range]')].map(node => {
        const [a, b] = range(node.dataset.barRange);
        return { node, a, b };
      });
      if (this.cfg.drag !== 'auto') this.bind();
      this.resize();
    }

    load() {
      if (this.loading) return;
      this.loading = true;
      if (this.seq) this.seq.start();
      (this.cfg.images || []).forEach((src, i) => {
        loadImage(withV(src)).then(img => { this.imgs[i] = img; this.dirty = true; }).catch(() => {});
      });
    }

    resize() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const w = Math.round(this.canvas.clientWidth * this.dpr);
      const h = Math.round(this.canvas.clientHeight * this.dpr);
      if (w && h && (w !== this.canvas.width || h !== this.canvas.height)) {
        this.canvas.width = w;
        this.canvas.height = h;
      }
      this.dirty = true;
    }

    markTouched() {
      if (this.touched) return;
      this.touched = true;
      this.hintT = -1;
      if (this.hintEl) this.hintEl.classList.add('hide');
    }

    startHint() {
      if (this.hintDone || this.touched || reduced || !this.cfg.hint || !this.hintAllowed) return;
      this.hintDone = true;
      this.hintT = 0;
    }

    // При wrap прогресс не ограничен: 1 = полный оборот, дальше идёт следующий круг.
    limit(v) {
      return this.cfg.wrap ? v : clamp(v);
    }

    frameIndex(p) {
      const n = this.seq.count;
      if (!this.cfg.wrap) return p * (n - 1);
      const q = ((p % 1) + 1) % 1;
      return Math.round(q * n) % n;
    }

    // Если машина остановилась на переходном кадре стыка — доворачиваем на ближайший чистый.
    skipAvoided() {
      const n = this.seq.count;
      const pos = this.target * n;
      const i = ((Math.round(pos) % n) + n) % n;
      if (!this.avoid.has(i)) return;
      for (let d = 1; d < 6; d++) {
        for (const s of [d, -d]) {
          if (!this.avoid.has((((i + s) % n) + n) % n)) {
            this.target += (Math.round(pos) + s - pos) / n;
            return;
          }
        }
      }
    }

    setAbsolute(clientX) {
      const r = this.el.getBoundingClientRect();
      this.target = clamp((clientX - r.left) / r.width);
    }

    bind() {
      const el = this.el;
      el.addEventListener('pointerdown', e => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        if (e.target.closest('a, button, input, select')) return;
        this.dragging = true;
        this.pointerId = e.pointerId;
        this.lastX = e.clientX;
        this.lastT = performance.now();
        this.vel = 0;
        this.markTouched();
        if (this.cfg.drag === 'absolute') this.setAbsolute(e.clientX);
        el.classList.add('dragging');
        try { el.setPointerCapture(e.pointerId); } catch (_) { /* не критично */ }
        if (e.pointerType === 'mouse') e.preventDefault();
      });
      el.addEventListener('pointermove', e => {
        if (!this.dragging || e.pointerId !== this.pointerId) return;
        const now = performance.now();
        if (this.cfg.drag === 'absolute') {
          this.setAbsolute(e.clientX);
        } else {
          const dp = ((e.clientX - this.lastX) / (el.clientWidth * this.cfg.sens)) * this.cfg.dir;
          this.target = this.limit(this.target + dp);
          this.vel = lerp(this.vel, (dp / Math.max(1, now - this.lastT)) * 16.7, 0.5);
        }
        this.lastX = e.clientX;
        this.lastT = now;
      });
      const end = e => {
        if (!this.dragging || (e && e.pointerId !== this.pointerId)) return;
        this.dragging = false;
        el.classList.remove('dragging');
        if (performance.now() - this.lastT > 90) this.vel = 0;
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
      el.addEventListener('lostpointercapture', end);
      el.addEventListener('keydown', e => {
        const step = e.key === 'ArrowRight' ? 0.06 : e.key === 'ArrowLeft' ? -0.06 : 0;
        if (!step) return;
        e.preventDefault();
        this.markTouched();
        this.target = this.limit(this.target + step);
      });
    }

    update(dt) {
      this.clock += dt;
      // блик по кузову: перерисовываем только пока он бежит (1,8 с из каждых 7)
      if (this.name === 'orbit' && !reduced && (this.clock % 7) / 1.8 <= 1.05) this.dirty = true;
      if (this.cfg.drag === 'auto') {
        if (!reduced) {
          this.time += dt;
          this.p = 0.5 - 0.5 * Math.cos(((this.time / this.cfg.period) % 1) * Math.PI * 2);
          this.dirty = true;
        }
      } else {
        const start = this.cfg.start || 0;
        if (this.hintT >= 0) {
          this.hintT += dt;
          const k = this.hintT / 2.6;
          if (k >= 1) { this.hintT = -1; this.target = start; }
          else this.target = start + this.cfg.hint * Math.sin(Math.PI * easeInOut(k));
        }
        if (!this.dragging && Math.abs(this.vel) > 0.00005) {
          this.target = this.limit(this.target + this.vel);
          this.vel *= 0.93;
          if (!this.cfg.wrap && (this.target <= 0 || this.target >= 1)) this.vel = 0;
        }
        if (this.avoid.size && !this.dragging && this.hintT < 0 && Math.abs(this.vel) < 0.0004) this.skipAvoided();
        const d = this.target - this.p;
        if (Math.abs(d) > 0.0002) {
          this.p += d * (this.dragging ? 0.35 : 0.16);
          this.dirty = true;
        } else if (d !== 0) {
          this.p = this.target;
          this.dirty = true;
        }
      }
      if (this.dirty) this.draw();
    }

    draw() {
      const { ctx, canvas } = this;
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      RENDER[this.name](this, ctx, canvas.width, canvas.height, this.p);
      for (const c of this.counters) {
        const text = String(Math.round(lerp(c.from, c.to, clamp((this.p - c.a) / (c.b - c.a)))));
        if (c.node.textContent !== text) c.node.textContent = text;
      }
      for (const b of this.bars) {
        b.node.style.transform = `scaleX(${clamp((this.p - b.a) / (b.b - b.a)).toFixed(3)})`;
      }
      this.dirty = false;
    }
  }

  const stages = [...document.querySelectorAll('[data-stage]')].map(el => new Stage(el));

  // Грузим заранее (за экран до появления), рисуем только видимые сцены.
  const nearObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) stages.find(s => s.el === e.target).load();
    });
  }, { rootMargin: '100% 0px' });
  const visObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const s = stages.find(st => st.el === e.target);
      s.visible = e.isIntersecting;
      if (s.visible) s.dirty = true;
      if (e.intersectionRatio >= 0.55) s.startHint();
    });
  }, { threshold: [0, 0.55] });
  stages.forEach(s => { nearObserver.observe(s.el); visObserver.observe(s.el); });

  let lastFrame = 0;
  function loop(now) {
    const dt = lastFrame ? Math.min(0.05, (now - lastFrame) / 1000) : 0.016;
    lastFrame = now;
    for (const s of stages) if (s.visible) s.update(dt);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  window.addEventListener('resize', () => stages.forEach(s => s.resize()));

  // ---------- шапка и полоса прогресса ----------
  const nav = document.getElementById('nav');
  const progressBar = document.getElementById('progressBar');
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? (window.scrollY / max).toFixed(4) : 0})`;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- заставка: ждём первые кадры машины ----------
  (() => {
    const loader = document.getElementById('loader');
    const bar = document.getElementById('loaderBar');
    const hero = stages.find(s => s.name === 'orbit');
    const need = 24;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      loader.classList.add('done');
      const intro = document.querySelector('.intro');
      if (intro) {
        setTimeout(() => {
          intro.classList.add('in');
          intro.querySelectorAll('[data-countup]').forEach(countUp);
        }, 250);
      }
      if (hero) {
        hero.hintAllowed = true;
        setTimeout(() => { if (hero.visible) hero.startHint(); }, 700);
      }
    };
    if (!hero) return finish();
    hero.hintAllowed = false;
    hero.load();
    const prev = hero.seq.onload;
    hero.seq.onload = i => {
      prev(i);
      bar.style.width = Math.min(100, (hero.seq.loaded / need) * 100) + '%';
      if (hero.seq.loaded >= need) setTimeout(finish, 250);
    };
    setTimeout(finish, 5000);
  })();

  // ---------- заголовки выезжают по словам ----------
  function splitWords(el) {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          const parts = child.textContent.split(/( +)/);
          const frag = document.createDocumentFragment();
          parts.forEach(part => {
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
  if (!reduced) document.querySelectorAll('h1, .section h2, .stage h2, .studio h2').forEach(splitWords);

  // ---------- счётчики: цифры отсчитываются, когда блок появляется ----------
  function countUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const to = +el.dataset.countup;
    const from = +(el.dataset.from || 0);
    const final = el.textContent;
    if (reduced) return;
    const t0 = performance.now();
    const dur = 1500;
    const step = now => {
      const t = clamp((now - t0) / dur);
      el.textContent = Math.round(lerp(from, to, 1 - Math.pow(1 - t, 3))).toLocaleString('ru-RU');
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = final;
    };
    requestAnimationFrame(step);
  }

  // ---------- появление блоков ----------
  const revealer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        e.target.querySelectorAll('[data-countup]').forEach(countUp);
        if (e.target.matches('[data-countup]')) countUp(e.target);
        revealer.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.split').forEach(h => {
    if (!h.closest('.reveal, .intro')) revealer.observe(h);
  });

  // ---------- параллакс: картинки чуть отстают от прокрутки ----------
  const parallax = [...document.querySelectorAll('[data-parallax]')];
  let parallaxQueued = false;
  const updateParallax = () => {
    parallaxQueued = false;
    const vh = window.innerHeight;
    for (const el of parallax) {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const offset = (r.top + r.height / 2 - vh / 2) * +el.dataset.parallax;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(${el.dataset.parallaxScale || 1.12})`;
    }
  };
  if (!reduced && parallax.length) {
    window.addEventListener('scroll', () => {
      if (!parallaxQueued) { parallaxQueued = true; requestAnimationFrame(updateParallax); }
    }, { passive: true });
    window.addEventListener('resize', updateParallax);
    updateParallax();
  }
  document.querySelectorAll('.reveal').forEach(el => {
    const siblings = el.parentElement.querySelectorAll(':scope > .reveal');
    const index = [...siblings].indexOf(el);
    if (index > 0) el.style.transitionDelay = Math.min(index, 5) * 90 + 'ms';
    revealer.observe(el);
  });

  // ---------- подсветка пунктов меню ----------
  const links = [...document.querySelectorAll('.nav-links a')];
  const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const link = byId.get(e.target.id);
      if (link && e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  byId.forEach((link, id) => {
    const el = document.getElementById(id);
    if (el) navObserver.observe(el);
  });

  // ---------- лупа ----------
  (function lens() {
    const stage = document.getElementById('lensStage');
    if (!stage) return;
    const canvas = document.getElementById('lensCanvas');
    const ctx = canvas.getContext('2d');
    const hint = document.getElementById('lensHint');
    const out = {
      label: document.getElementById('readoutLabel'),
      value: document.getElementById('readoutValue'),
      note: document.getElementById('readoutNote'),
    };
    const scale = document.getElementById('scanScale');
    const data = window.LENS_DATA;
    const decode = b64 => Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const grids = data ? { scan: decode(data.thickness), inspect: decode(data.defects), w: data.w, h: data.h } : null;

    let mode = 'inspect';
    let imgs = null;
    let visible = false;
    let inside = false;
    let running = false;
    let t = 0;
    let last = 0;
    let lastText = '';
    const pos = { x: 0.55, y: 0.5 };
    const target = { x: 0.55, y: 0.5 };

    Promise.all(['img/hero.webp', 'img/lens_inspect.webp', 'img/lens_scan.webp'].map(src => loadImage(withV(src))))
      .then(([base, inspect, scan]) => { imgs = { base, inspect, scan }; })
      .catch(() => {});

    const setTarget = e => {
      const r = stage.getBoundingClientRect();
      target.x = clamp((e.clientX - r.left) / r.width);
      target.y = clamp((e.clientY - r.top) / r.height);
      inside = true;
      hint.classList.add('hide');
    };
    stage.addEventListener('pointermove', setTarget);
    stage.addEventListener('pointerdown', setTarget);
    stage.addEventListener('pointerleave', () => { inside = false; });

    document.querySelectorAll('[data-lens-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        mode = btn.dataset.lensMode;
        document.querySelectorAll('[data-lens-mode]').forEach(b => b.classList.toggle('active', b === btn));
        scale.hidden = mode !== 'scan';
        lastText = '';
      });
    });

    function readout() {
      if (!grids) return;
      const gx = Math.min(grids.w - 1, Math.floor(pos.x * grids.w));
      const gy = Math.min(grids.h - 1, Math.floor(pos.y * grids.h));
      const v = grids[mode][gy * grids.w + gx];
      let label, value, note;
      if (mode === 'scan') {
        label = 'Толщина ЛКП';
        const um = v + 40;
        if (!v) { value = '—'; note = 'Наведите лупу на кузов.'; }
        else {
          value = um + ' мкм';
          note = um < 100 ? 'Тонкий слой — полируем очень бережно.'
            : um <= 175 ? 'Заводское покрытие.'
              : 'Перекрас или шпаклёвка: деталь уже ремонтировали.';
        }
      } else {
        label = 'Дефекты лака';
        if (!v) { value = '—'; note = 'Наведите лупу на кузов.'; }
        else {
          value = v + '%';
          note = v > 60 ? 'Сильные свирлы и риски — полировка в 2–3 шага.'
            : v > 30 ? 'Заметные свирлы — хватит двух шагов.'
              : 'Лёгкая паутинка — достаточно одного шага.';
        }
      }
      const text = label + value + note;
      if (text === lastText) return;
      lastText = text;
      out.label.textContent = label;
      out.value.textContent = value;
      out.note.textContent = note;
    }

    function draw() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(stage.clientWidth * dpr);
      const h = Math.round(stage.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);
      if (!imgs) return;
      ctx.drawImage(imgs.base, 0, 0, w, h);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
      ctx.fillRect(0, 0, w, h);

      const R = Math.max(64 * dpr, w * 0.12);
      const cx = pos.x * w;
      const cy = pos.y * h;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();
      if (mode === 'inspect') ctx.filter = 'contrast(1.3) brightness(1.12)';
      ctx.drawImage(mode === 'scan' ? imgs.scan : imgs.inspect, 0, 0, w, h);
      ctx.filter = 'none';
      ctx.restore();

      ctx.lineWidth = 1.5 * dpr;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = mode === 'scan' ? 'rgba(255, 190, 90, 0.55)' : 'rgba(61, 220, 151, 0.6)';
      ctx.lineWidth = 3 * dpr;
      ctx.beginPath();
      ctx.arc(cx, cy, R + 6 * dpr, -Math.PI * 0.2, Math.PI * 0.35);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.lineWidth = 1 * dpr;
      const k = 9 * dpr;
      ctx.beginPath();
      ctx.moveTo(cx - k, cy); ctx.lineTo(cx + k, cy);
      ctx.moveTo(cx, cy - k); ctx.lineTo(cx, cy + k);
      ctx.stroke();
      readout();
    }

    function tick(now) {
      if (!visible) { running = false; return; }
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
      last = now;
      if (!inside) {
        t += dt;
        target.x = 0.52 + 0.27 * Math.sin(t * 0.5);
        target.y = 0.52 + 0.09 * Math.sin(t * 1.05 + 0.6);
      }
      const k = inside ? 0.25 : 0.08;
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      draw();
      requestAnimationFrame(tick);
    }

    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !running) {
        running = true;
        last = 0;
        requestAnimationFrame(tick);
      }
    }, { rootMargin: '120px' }).observe(stage);
  })();

  // ---------- лента шагов: тянем мышкой, колесо листает страницу ----------
  (function rail() {
    const rail = document.getElementById('processRail');
    if (!rail) return;
    const bar = document.getElementById('railProgress');
    const stepWidth = () => (rail.querySelector('.step')?.getBoundingClientRect().width || 300) + 18;
    const update = () => {
      const visible = Math.min(1, rail.clientWidth / rail.scrollWidth);
      const max = rail.scrollWidth - rail.clientWidth;
      const pos = max > 0 ? rail.scrollLeft / max : 0;
      bar.style.width = (visible * 100).toFixed(1) + '%';
      bar.style.transform = `translateX(${(pos * (1 / visible - 1) * 100).toFixed(1)}%)`;
    };

    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = 0;
    let vx = 0;
    let lastX = 0;
    let lastT = 0;
    let glideId = 0;
    rail.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return; // на телефоне — обычный свайп
      down = true;
      moved = 0;
      vx = 0;
      startX = lastX = e.clientX;
      startScroll = rail.scrollLeft;
      lastT = performance.now();
      cancelAnimationFrame(glideId);
      try { rail.setPointerCapture(e.pointerId); } catch (_) { /* не критично */ }
      e.preventDefault();
    });
    rail.addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      if (moved > 4) rail.classList.add('dragging');
      rail.scrollLeft = startScroll - dx;
      const now = performance.now();
      vx = (e.clientX - lastX) / Math.max(1, now - lastT);
      lastX = e.clientX;
      lastT = now;
    });
    const end = () => {
      if (!down) return;
      down = false;
      rail.classList.remove('dragging');
      if (performance.now() - lastT > 80) return;
      let v = -vx * 16;
      const glide = () => {
        if (Math.abs(v) < 0.5) return;
        rail.scrollLeft += v;
        v *= 0.94;
        glideId = requestAnimationFrame(glide);
      };
      glide();
    };
    rail.addEventListener('pointerup', end);
    rail.addEventListener('pointercancel', end);
    rail.addEventListener('lostpointercapture', end);
    rail.addEventListener('click', e => { if (moved > 4) { e.preventDefault(); e.stopPropagation(); } }, true);
    rail.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') rail.scrollBy({ left: stepWidth(), behavior: 'smooth' });
      if (e.key === 'ArrowLeft') rail.scrollBy({ left: -stepWidth(), behavior: 'smooth' });
    });
    document.querySelector('[data-rail-prev]')?.addEventListener('click', () => rail.scrollBy({ left: -stepWidth(), behavior: 'smooth' }));
    document.querySelector('[data-rail-next]')?.addEventListener('click', () => rail.scrollBy({ left: stepWidth(), behavior: 'smooth' }));
    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();

  // ---------- до / после ----------
  document.querySelectorAll('.ba').forEach(ba => {
    const input = ba.querySelector('input');
    input.addEventListener('input', () => ba.style.setProperty('--pos', input.value + '%'));
  });

  // ---------- глянец / сатин ----------
  (function finish() {
    const stage = document.getElementById('finishStage');
    const buttons = [...document.querySelectorAll('[data-finish]')];
    if (!stage) return;
    let touched = false;
    const set = value => {
      stage.classList.toggle('is-matte', value === 'matte');
      buttons.forEach(b => b.classList.toggle('active', b.dataset.finish === value));
    };
    buttons.forEach(b => b.addEventListener('click', () => { touched = true; set(b.dataset.finish); }));
    let visible = false;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.4 }).observe(stage);
    setInterval(() => {
      if (!touched && visible && !reduced) set(stage.classList.contains('is-matte') ? 'gloss' : 'matte');
    }, 3200);
  })();

  // ---------- запись и калькулятор ----------
  (function booking() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    const select = document.getElementById('serviceSelect');
    const estimate = document.getElementById('estimateValue');
    const dayChips = document.getElementById('dayChips');
    const timeChips = document.getElementById('timeChips');
    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');
    const note = document.getElementById('formNote');
    const submit = form.querySelector('[type="submit"]');
    let body = 1;
    let day = 0;
    let time = null;

    const fmt = n => n.toLocaleString('ru-RU');
    const update = () => {
      const price = Math.round((+select.value * body) / 100) * 100;
      estimate.textContent = 'от ' + fmt(price) + ' ₽';
    };

    form.querySelectorAll('[data-group="body"] .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        body = +chip.dataset.value;
        chip.parentElement.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
        update();
      });
    });
    select.addEventListener('change', update);

    document.querySelectorAll('a[data-plan]').forEach(link => {
      link.addEventListener('click', () => {
        const option = select.querySelector(`option[data-plan="${link.dataset.plan}"]`);
        if (option) { select.value = option.value; update(); }
      });
    });

    const names = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const slots = ['10:00', '12:00', '14:00', '16:00', '18:00'];
    const renderTimes = () => {
      timeChips.innerHTML = '';
      time = null;
      slots.forEach((s, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'chip';
        b.textContent = s;
        b.disabled = (day * 3 + i) % 5 === 1;
        b.addEventListener('click', () => {
          time = s;
          timeChips.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === b));
        });
        timeChips.appendChild(b);
      });
    };
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (i === 1 ? ' active' : '');
      b.innerHTML = `<small>${names[d.getDay()]}</small>${d.getDate()}`;
      b.addEventListener('click', () => {
        day = i - 1;
        dayChips.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === b));
        renderTimes();
      });
      dayChips.appendChild(b);
    }
    renderTimes();

    phoneInput.addEventListener('input', () => {
      let d = phoneInput.value.replace(/\D/g, '');
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
      phoneInput.value = s;
      phoneInput.classList.remove('invalid');
    });
    nameInput.addEventListener('input', () => nameInput.classList.remove('invalid'));

    form.addEventListener('submit', e => {
      e.preventDefault();
      const okName = nameInput.value.trim().length >= 2;
      const okPhone = phoneInput.value.replace(/\D/g, '').length === 11;
      nameInput.classList.toggle('invalid', !okName);
      phoneInput.classList.toggle('invalid', !okPhone);
      if (!okName || !okPhone) {
        note.classList.remove('ok');
        note.textContent = 'Проверьте имя и телефон.';
        return;
      }
      submit.textContent = 'Заявка принята ✓';
      submit.disabled = true;
      note.classList.add('ok');
      note.textContent = `Ждём вас${time ? ' в ' + time : ''}. Это демо-версия: заявка никуда не отправлена.`;
    });

    update();
  })();
})();
