/* Barberzz — 3D-бюст (360°) для вставки в Тильду.
   Использование: <div class="bz-bust" data-src="https://…/bust/" data-frames="120"></div>
   + <script src="https://…/bust.js" defer></script>
   Крутится сам; тянешь мышкой или пальцем — поворачивается за рукой, отпустил — плавно продолжает. */
(function () {
  'use strict';
  function init(el) {
    if (el.__bz) return; el.__bz = true;
    var base = el.getAttribute('data-src') || 'bust/';
    var N = +el.getAttribute('data-frames') || 120;
    var auto = +(el.getAttribute('data-speed') || 0.3);           // кадров за 1/60 с в покое (один оборот ≈ 13 с)
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cv = document.createElement('canvas');
    cv.setAttribute('aria-label', 'Бюст Barberzz — можно повернуть');
    cv.style.cssText = 'width:100%;height:100%;display:block;touch-action:pan-y;cursor:grab';
    el.appendChild(cv);
    var hint = document.createElement('div');
    hint.className = 'bz-hint';
    hint.innerHTML = '<span>⟲</span> Покрутите бюст';
    el.appendChild(hint);
    var ctx = cv.getContext('2d'); ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    var imgs = new Array(N), loaded = 0, ready = false;
    var pos = 0, vel = auto, drag = false, lastX = 0, lastT = 0, moved = 0, shown = -1, idle = 0;

    function fit() {
      var r = el.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.max(1, Math.round(r.width * d)); cv.height = Math.max(1, Math.round(r.height * d)); ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
      shown = -1;
    }
    function draw() {
      var p = ((pos % N) + N) % N, i0 = Math.floor(p), fr = p - i0, i1 = (i0 + 1) % N;
      var ok = function (k) { return imgs[k] && imgs[k].naturalWidth; };
      if (!ok(i0) || !ok(i1)) {                                  // кадр ещё не загрузился — берём ближайший готовый, без перехода
        var n = -1;
        for (var k = 0; k < N; k++) { if (ok((i0 - k + N) % N)) { n = (i0 - k + N) % N; break; } if (ok((i0 + k) % N)) { n = (i0 + k) % N; break; } }
        if (n < 0) return;
        i0 = i1 = n; fr = 0;
      }
      var key = i0 * 100 + Math.round(fr * 20);                 // перерисовываем, только когда картинка реально меняется
      if (key === shown) return;
      shown = key;
      var a = imgs[i0], cw = cv.width, ch = cv.height, s = Math.min(cw / a.naturalWidth, ch / a.naturalHeight);
      var w = a.naturalWidth * s, h = a.naturalHeight * s, x = (cw - w) / 2, y = ch - h;
      ctx.clearRect(0, 0, cw, ch);
      ctx.globalAlpha = 1;
      ctx.drawImage(a, x, y, w, h);
      if (fr > 0.04 && i1 !== i0) {                              // плавный переход к следующему кадру
        ctx.globalAlpha = fr;
        ctx.drawImage(imgs[i1], x, y, w, h);
        ctx.globalAlpha = 1;
      }
    }
    function load(i) {
      var im = new Image(); im.decoding = 'async';
      im.onload = function () { loaded++; if (i === 0) { ready = true; el.classList.add('bz-ready'); shown = -1; draw(); } };
      im.src = base + ('00' + i).slice(-3) + '.webp' + (el.getAttribute('data-v') ? '?v=' + el.getAttribute('data-v') : '');
      imgs[i] = im;
    }
    // сначала каждый 8-й кадр (быстро видно вращение), потом остальные
    var order = [];
    for (var st = 8; st >= 1; st = st >> 1) for (var j = 0; j < N; j += st) if (order.indexOf(j) < 0) order.push(j);
    var started = false;
    function start() { if (started) return; started = true; order.forEach(load); requestAnimationFrame(tick); }

    var prev = 0;
    function tick(t) {
      var dt = prev ? Math.min(50, t - prev) / 16.67 : 1; prev = t;
      if (!drag && !reduce) {
        vel += (auto - vel) * 0.03 * dt;                       // после броска плавно возвращаемся к спокойному вращению
        pos += vel * dt;
      }
      draw();
      requestAnimationFrame(tick);
    }
    function down(x) { drag = true; lastX = x; lastT = performance.now(); moved = 0; vel = 0; cv.style.cursor = 'grabbing'; el.classList.add('bz-touched'); }
    function move(x) {
      if (!drag) return;
      var dx = x - lastX, now = performance.now(), w = el.clientWidth || 300;
      var df = -dx / w * N * 0.9;                                // протянуть на ширину блока ≈ 0,9 оборота
      pos += df; moved += Math.abs(dx);
      vel = df / Math.max(1, (now - lastT) / 16.67) * 0.8;
      lastX = x; lastT = now;
    }
    function up() { if (!drag) return; drag = false; cv.style.cursor = 'grab'; if (Math.abs(vel) > 6) vel = 6 * Math.sign(vel); }
    cv.addEventListener('pointerdown', function (e) { down(e.clientX); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); });
    cv.addEventListener('pointermove', function (e) { move(e.clientX); });
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up); cv.addEventListener('lostpointercapture', up);

    fit();
    window.addEventListener('resize', fit);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { o.disconnect(); start(); } }, { rootMargin: '400px' }).observe(el);
    } else start();
  }
  function all() { var l = document.querySelectorAll('.bz-bust'); for (var i = 0; i < l.length; i++) init(l[i]); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  // Тильда может дорисовать блок позже
  setTimeout(all, 1500); setTimeout(all, 4000);
})();
