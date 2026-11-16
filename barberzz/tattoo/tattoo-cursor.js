/* Курсор — тату-машинка Barberzz Tattoo (фото машинки, по образцу курсора-ножниц).
   Мышь: системный курсор скрыт, машинка ведёт мышку кончиком иглы; над кнопками и статуей «жужжит»,
   при клике — вибрация и капли золотой краски (цвет полосы на статуе). В полях ввода — обычный курсор.
   Касание: машинка появляется в точке пальца и коротко срабатывает. */
(function () {
  'use strict';
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HOT = 'a, button, [role="button"], label, summary, select, [data-cursor="hot"], .bz-tattoo, .bz-bust';
  var TEXT = 'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]';
  var script = document.currentScript;
  var base = (script && script.getAttribute('data-base')) || (script ? script.src.replace(/[^/]*$/, '') : '');
  var SIZE = 46;                              // ширина машинки на экране, px
  var TIP_X = 0.7 / 160, TIP_Y = 161.4 / 162; // кончик иглы в картинке (доля ширины/высоты)

  var css = document.createElement('style');
  css.textContent =
    'html.tm-on, html.tm-on * { cursor: none !important; }' +
    TEXT.split(', ').map(function (s) { return 'html.tm-on ' + s; }).join(', ') + ' { cursor: text !important; }' +
    '.tm-cursor { position: fixed; left: 0; top: 0; z-index: 2147483000; pointer-events: none; opacity: 0; transition: opacity .15s; will-change: transform; }' +
    '.tm-cursor img { position: absolute; display: block; width: ' + SIZE + 'px !important; height: auto !important; max-width: none !important;' +
    ' left: ' + (-TIP_X * SIZE).toFixed(1) + 'px; top: ' + (-TIP_Y * SIZE * 162 / 160).toFixed(1) + 'px;' +
    ' transform-origin: ' + (TIP_X * 100).toFixed(1) + '% ' + (TIP_Y * 100).toFixed(1) + '%; transform: scale(var(--k, 1)); transition: transform .2s;' +
    ' filter: drop-shadow(0 2px 3px rgba(0,0,0,.55)); }' +
    '.tm-cursor.hot { --k: 1.08; }' +
    '.tm-drop { position: fixed; left: 0; top: 0; z-index: 2147483000; border-radius: 50%; pointer-events: none; }';
  document.head.appendChild(css);

  var el = document.createElement('div');
  el.className = 'tm-cursor';
  el.setAttribute('aria-hidden', 'true');
  var img = new Image(); img.alt = ''; img.decoding = 'async'; img.src = base + 'machine.webp?v=1';
  el.appendChild(img);
  document.body.appendChild(el);

  var x = 0, y = 0, hot = false, down = false, buzzUntil = 0, raf = 0, touchTimer = 0;
  function place() { el.style.transform = 'translate(' + x + 'px,' + y + 'px)'; }
  function buzz(now) {
    var on = !reduced && (down || hot || now < buzzUntil);
    if (on) {
      var amp = down || now < buzzUntil ? 0.9 : 0.45;               // при клике дрожит сильнее
      var s = Math.sin(now / 1000 * 90 * Math.PI * 2) * amp;        // ход иглы вдоль оси машинки
      var jx = s * 0.7 + (Math.random() - 0.5) * 0.4, jy = -s * 0.7 + (Math.random() - 0.5) * 0.4;
      img.style.translate = jx.toFixed(2) + 'px ' + jy.toFixed(2) + 'px';
      raf = requestAnimationFrame(buzz);
    } else { img.style.translate = ''; raf = 0; }
  }
  function kick() { if (!raf) raf = requestAnimationFrame(buzz); }

  // капли цвета золотой полосы со статуи: основной, блик и тень
  var GOLD = ['#c4a675', '#c4a675', '#d1b489', '#aa9263'];
  function ink() {
    if (reduced) return;
    for (var i = 0; i < 5; i++) {
      var d = document.createElement('div'); d.className = 'tm-drop';
      var s = 2.6 + Math.random() * 2.8; d.style.width = d.style.height = s + 'px';
      var col = GOLD[(Math.random() * GOLD.length) | 0];
      d.style.background = 'radial-gradient(circle at 35% 30%, #efe0c0 0, ' + col + ' 45%, #8f7a52 100%)';
      d.style.boxShadow = '0 0 3px rgba(196,166,117,.55)';
      document.body.appendChild(d);
      var a = Math.PI * (0.55 + Math.random() * 0.9), r = 8 + Math.random() * 16;   // разлёт вниз и в стороны от иглы
      d.animate([
        { transform: 'translate(' + (x - s / 2) + 'px,' + (y - s / 2) + 'px) scale(1)', opacity: 1 },
        { transform: 'translate(' + (x - s / 2 + Math.cos(a) * r) + 'px,' + (y - s / 2 + Math.abs(Math.sin(a)) * r + 10) + 'px) scale(.4)', opacity: 0 }
      ], { duration: 800 + Math.random() * 350, easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = function () { this.effect.target.remove(); };
    }
  }

  document.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    document.documentElement.classList.add('tm-on');
    x = e.clientX; y = e.clientY; place();
    var t = e.target instanceof Element ? e.target : null;
    var inText = !!(t && t.closest(TEXT)), isHot = !!(t && t.closest(HOT));
    if (isHot !== hot) { hot = isHot; el.classList.toggle('hot', hot); kick(); }
    el.style.opacity = inText ? 0 : 1;
  }, { passive: true });
  document.addEventListener('pointerdown', function (e) {
    x = e.clientX; y = e.clientY; place();
    var t = e.target instanceof Element ? e.target : null;
    if (t && t.closest(TEXT)) return;
    if (e.pointerType === 'mouse') { down = true; ink(); kick(); return; }
    document.documentElement.classList.remove('tm-on');
    clearTimeout(touchTimer); hot = false; el.classList.remove('hot');
    el.style.opacity = 1; buzzUntil = performance.now() + 380; ink(); kick();
    touchTimer = setTimeout(function () { el.style.opacity = 0; }, 800);
  }, { passive: true });
  window.addEventListener('pointerup', function (e) { if (e.pointerType === 'mouse') { down = false; buzzUntil = performance.now() + 120; kick(); } });
  document.addEventListener('mouseout', function (e) { if (!e.relatedTarget) el.style.opacity = 0; });
  window.addEventListener('blur', function () { el.style.opacity = 0; down = false; });
})();
