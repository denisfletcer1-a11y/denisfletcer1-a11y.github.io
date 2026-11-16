/* Barberzz — бюст 360° для вставки в Тильду (видео: плавно, аппаратно, без подвисаний).
   <div class="bz-bust" data-video="https://…/bust.mp4" data-poster="https://…/bust-poster.jpg"></div>
   <script src="https://…/bust.js" defer></script>
   Крутится сам; тянешь мышкой или пальцем — поворачивается за рукой, отпустил — продолжает. */
(function () {
  'use strict';
  function init(el) {
    if (el.__bz) return; el.__bz = true;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var v = document.createElement('video');
    v.src = el.getAttribute('data-video');
    if (el.getAttribute('data-poster')) v.poster = el.getAttribute('data-poster');
    v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true; v.preload = 'auto';
    v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
    v.setAttribute('aria-label', 'Бюст Barberzz — можно повернуть');
    v.disablePictureInPicture = true;
    el.appendChild(v);
    var hint = document.createElement('div');
    hint.className = 'bz-hint';
    hint.innerHTML = '<span>⟲</span> Покрутите бюст';
    el.appendChild(hint);

    var rate = +(el.getAttribute('data-rate') || 1);          // 1 = один оборот за длину видео (~9,6 с)
    var drag = false, lastX = 0, lastT = 0, vel = 0, inertia = 0, seeking = false, pending = null;
    function dur() { return v.duration && isFinite(v.duration) ? v.duration : 9.6; }
    function wrap(t) { var d = dur(); return ((t % d) + d) % d; }
    function play() { if (reduce) return; v.playbackRate = rate; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    function seek(t) {                                           // перемотка без очереди: новое время ставим, когда прошлое применилось
      if (seeking) { pending = t; return; }
      seeking = true; v.currentTime = wrap(t);
    }
    v.addEventListener('seeked', function () { seeking = false; if (pending !== null) { var t = pending; pending = null; seek(t); } });
    v.addEventListener('loadeddata', function () { el.classList.add('bz-ready'); });
    v.addEventListener('canplay', function () { if (!drag && !inertia && v.paused) play(); });

    function down(x) {
      drag = true; inertia = 0; vel = 0; lastX = x; lastT = performance.now();
      v.pause(); el.classList.add('bz-touched'); el.style.cursor = 'grabbing';
    }
    function move(x) {
      if (!drag) return;
      var dx = x - lastX, now = performance.now(), w = el.clientWidth || 300;
      var dt = -dx / w * dur() * 0.9;                            // протянуть на ширину блока ≈ 0,9 оборота
      seek((pending !== null ? pending : v.currentTime) + dt);
      vel = dt / Math.max(8, now - lastT) * 1000;                // секунд видео в секунду
      lastX = x; lastT = now;
    }
    function up() {
      if (!drag) return;
      drag = false; el.style.cursor = 'grab';
      if (Math.abs(vel) > 1.5) { inertia = Math.max(-6, Math.min(6, vel)); prevT = 0; requestAnimationFrame(coast); } else play();
    }
    var prevT = 0;
    function coast(t) {                                          // после броска: докрутка с затуханием, потом обычное вращение
      if (drag || !inertia) return;
      var dt = prevT ? Math.min(0.05, (t - prevT) / 1000) : 0.016; prevT = t;
      seek((pending !== null ? pending : v.currentTime) + inertia * dt);
      inertia *= Math.pow(0.12, dt);
      if (Math.abs(inertia) < 1.1) { inertia = 0; play(); return; }
      requestAnimationFrame(coast);
    }
    el.style.cursor = 'grab';
    el.addEventListener('pointerdown', function (e) { down(e.clientX); if (el.setPointerCapture) el.setPointerCapture(e.pointerId); });
    el.addEventListener('pointermove', function (e) { move(e.clientX); });
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('lostpointercapture', up);
    document.addEventListener('visibilitychange', function () { if (!document.hidden && !drag) play(); });
    if ('IntersectionObserver' in window) {                     // вне экрана не крутим — бережём батарею
      new IntersectionObserver(function (es) { if (es[0].isIntersecting) { if (!drag) play(); } else v.pause(); }).observe(el);
    }
    play();
  }
  function all() { var l = document.querySelectorAll('.bz-bust'); for (var i = 0; i < l.length; i++) init(l[i]); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  setTimeout(all, 1500); setTimeout(all, 4000);              // Тильда может дорисовать блок позже
})();
