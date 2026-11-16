/* Курсор — тату-машинка Barberzz Tattoo (по образцу курсора-ножниц).
   Мышь: системный курсор скрыт, машинка ведёт мышку кончиком иглы; над кнопками и статуей игла «жужжит»,
   при клике — вибрация и капли краски. В полях ввода — обычный текстовый курсор.
   Касание: машинка появляется в точке пальца и коротко срабатывает. */
(function () {
  'use strict';
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HOT = 'a, button, [role="button"], label, summary, select, [data-cursor="hot"], .bz-tattoo, .bz-bust';
  var TEXT = 'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]';

  var css = document.createElement('style');
  css.textContent =
    'html.tm-on, html.tm-on * { cursor: none !important; }' +
    TEXT.split(', ').map(function (s) { return 'html.tm-on ' + s; }).join(', ') + ' { cursor: text !important; }' +
    '.tm-cursor { position: fixed; left: 0; top: 0; z-index: 2147483000; pointer-events: none; opacity: 0; transition: opacity .15s; will-change: transform; }' +
    '.tm-cursor svg { position: absolute; left: 0; top: 0; width: 58px !important; height: 34px !important; max-width: none !important; overflow: visible; transform-origin: 0 0; transform: rotate(-38deg) scale(var(--k, 1)); transition: transform .2s; filter: drop-shadow(0 0 .7px rgba(0,0,0,.8)) drop-shadow(0 2px 3px rgba(0,0,0,.45)); }' +
    '.tm-cursor.hot { --k: 1.1; }' +
    '.tm-drop { position: fixed; left: 0; top: 0; z-index: 2147483000; border-radius: 50%; pointer-events: none; }';
  document.head.appendChild(css);

  var el = document.createElement('div');
  el.className = 'tm-cursor';
  el.setAttribute('aria-hidden', 'true');
  // кончик иглы — в точке (0,0); машинка уходит вправо-вверх
  el.innerHTML =
    '<svg viewBox="0 -24 62 34">' +
      '<g class="tm-body">' +
        // рама
        '<path d="M28 -3 L28 -17 Q28 -20 31 -20 L55 -20 Q58 -20 58 -17 L58 -12 L52 -12 L52 -3 Z" fill="#1d1f21" stroke="#e8ad21" stroke-width="1"/>' +
        // катушки (медь с витками)
        '<rect x="33" y="-19" width="7" height="13" rx="2" fill="#b8733a" stroke="#5a3418" stroke-width=".6"/>' +
        '<rect x="42.5" y="-19" width="7" height="13" rx="2" fill="#b8733a" stroke="#5a3418" stroke-width=".6"/>' +
        '<path d="M33.5 -16h6M33.5 -13h6M33.5 -10h6M43 -16h6M43 -13h6M43 -10h6" stroke="#7a4520" stroke-width=".7"/>' +
        // якорь и пружина
        '<rect x="32" y="-22.6" width="22" height="2" rx="1" fill="#c9ced3" stroke="#555" stroke-width=".4"/>' +
        '<path d="M53 -22 q2 -2 4 0 t4 0" fill="none" stroke="#c9ced3" stroke-width=".8"/>' +
        '<circle cx="56" cy="-15.5" r="1.4" fill="#e8ad21"/>' +
        // держатель и трубка с насечкой (золото)
        '<rect x="44" y="-4.2" width="10" height="8.4" rx="1.5" fill="#1d1f21" stroke="#e8ad21" stroke-width=".8"/>' +
        '<rect x="15" y="-3.4" width="32" height="6.8" rx="3.2" fill="#e8ad21" stroke="#7a5a10" stroke-width=".6"/>' +
        '<path d="M19 -3.2v6.4M22 -3.2v6.4M25 -3.2v6.4M28 -3.2v6.4M31 -3.2v6.4M34 -3.2v6.4" stroke="#a87a12" stroke-width=".8"/>' +
        '<path d="M16 -2.2 H46" stroke="#fff3c8" stroke-width=".7" opacity=".8"/>' +
        // носик
        '<path d="M15 -3 L8 -1.3 L8 1.3 L15 3 Z" fill="#2a2c2e" stroke="#000" stroke-width=".4"/>' +
      '</g>' +
      // игла (дрожит отдельно)
      '<g class="tm-needle"><path d="M0 0 L9 -.45 L9 .45 Z" fill="#dfe3e7" stroke="#555" stroke-width=".3"/></g>' +
    '</svg>';
  document.body.appendChild(el);
  var body = el.querySelector('.tm-body'), needle = el.querySelector('.tm-needle');

  var x = 0, y = 0, hot = false, down = false, buzzUntil = 0, raf = 0, touchTimer = 0;
  function place() { el.style.transform = 'translate(' + x + 'px,' + y + 'px)'; }
  function buzz(now) {
    var on = !reduced && (down || hot || now < buzzUntil);
    if (on) {
      var ph = (now / 1000) * 90 * Math.PI * 2;                     // ~90 Гц как у машинки (визуально — дрожь)
      needle.setAttribute('transform', 'translate(' + (Math.sin(ph) * 1.1 - 0.6).toFixed(2) + ',0)');
      body.setAttribute('transform', 'translate(' + (Math.random() * 0.6 - 0.3).toFixed(2) + ',' + (Math.random() * 0.6 - 0.3).toFixed(2) + ')');
      raf = requestAnimationFrame(buzz);
    } else {
      needle.removeAttribute('transform'); body.removeAttribute('transform'); raf = 0;
    }
  }
  function kick() { if (!raf) raf = requestAnimationFrame(buzz); }

  function ink() {
    if (reduced) return;
    for (var i = 0; i < 5; i++) {
      var d = document.createElement('div'); d.className = 'tm-drop';
      var s = 1.6 + Math.random() * 2.6; d.style.width = d.style.height = s + 'px';
      // цвет золотой полосы со статуи: основной, блик и тень
      var GOLD = ['#c4a675', '#c4a675', '#d1b489', '#aa9263'];
      var col = GOLD[(Math.random() * GOLD.length) | 0];
      d.style.background = 'radial-gradient(circle at 35% 30%, #efe0c0 0, ' + col + ' 45%, #8f7a52 100%)';
      d.style.boxShadow = '0 0 3px rgba(196,166,117,.55)';
      document.body.appendChild(d);
      var a = Math.random() * Math.PI * 2, r = 8 + Math.random() * 16;
      d.animate([
        { transform: 'translate(' + (x - s / 2) + 'px,' + (y - s / 2) + 'px) scale(1)', opacity: 1 },
        { transform: 'translate(' + (x - s / 2 + Math.cos(a) * r) + 'px,' + (y - s / 2 + Math.sin(a) * r + 10) + 'px) scale(.4)', opacity: 0 }
      ], { duration: 520 + Math.random() * 300, easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = function () { this.effect.target.remove(); };
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
