/* Barberzz — анимированный объёмный знак ZZ (глянцевое золото, как 3D-шрифт).
   У каждой буквы две половинки: прилетают (верхняя сверху, нижняя снизу) и защёлкиваются; на стыке — вспышка,
   затем по знаку пробегает глянцевый блик. Повтор раз в 8 с, при наведении и по нажатию.
   Вставка: <span class="bz-zz"></span> + <script src="…/zz-logo.js" defer></script>; размер — шириной .bz-zz. */
(function () {
  'use strict';
  var P = {   // половинки, координаты исходного знака 330 × 194
    t1: 'M20 10 L157 10 L157 31 L114 86 L78 86 L116 36 L20 36 Z',
    b1: 'M57 111 L92.5 111 L54 160.5 L157 160.5 L157 186 L14 186 L14 165 Z',
    t2: 'M179 10 L316 10 L316 31 L272.5 86 L238 86 L276 36 L179 36 Z',
    b2: 'M217 111 L252.5 111 L214 160.5 L316 160.5 L316 186 L174 186 L174 164 Z'
  };
  var DEPTH = 9, uid = 0;

  var css = document.createElement('style');
  css.textContent =
    '.bz-zz { display: inline-block; width: 82px; line-height: 0; vertical-align: middle; }' +
    '.bz-zz svg { width: 100%; height: auto; overflow: visible; display: block; }' +
    '.bz-zz .h { transform-box: fill-box; transform-origin: center; }' +
    '.bz-zz .shine { opacity: 0; }' +
    '@keyframes zzTop { 0% { transform: translate(14%, -95%) rotate(-10deg); opacity: 0; } 55% { opacity: 1; } 78% { transform: translate(0, 9%) rotate(1deg); } 90% { transform: translate(0, -3%); } 100% { transform: none; opacity: 1; } }' +
    '@keyframes zzBot { 0% { transform: translate(-14%, 95%) rotate(-10deg); opacity: 0; } 55% { opacity: 1; } 78% { transform: translate(0, -9%) rotate(1deg); } 90% { transform: translate(0, 3%); } 100% { transform: none; opacity: 1; } }' +
    '@keyframes zzFlash { 0%, 70% { filter: drop-shadow(0 3px 4px rgba(0,0,0,.45)); } 80% { filter: drop-shadow(0 0 7px rgba(255, 214, 120, .95)) brightness(1.3); } 100% { filter: drop-shadow(0 3px 4px rgba(0,0,0,.45)); } }' +
    '@keyframes zzShine { 0% { transform: translateX(-130%); opacity: 1; } 100% { transform: translateX(130%); opacity: 1; } }' +
    '.bz-zz svg { filter: drop-shadow(0 3px 4px rgba(0,0,0,.45)); }' +
    '.bz-zz.play .t1 { animation: zzTop .9s cubic-bezier(.3,.7,.3,1) both; }' +
    '.bz-zz.play .b1 { animation: zzBot .9s cubic-bezier(.3,.7,.3,1) .08s both; }' +
    '.bz-zz.play .t2 { animation: zzTop .9s cubic-bezier(.3,.7,.3,1) .32s both; }' +
    '.bz-zz.play .b2 { animation: zzBot .9s cubic-bezier(.3,.7,.3,1) .4s both; }' +
    '.bz-zz.play svg { animation: zzFlash 1.5s ease .1s both; }' +
    '.bz-zz.play .shine { animation: zzShine 1.1s cubic-bezier(.4,0,.2,1) 1.35s both; }' +
    '@media (prefers-reduced-motion: reduce) { .bz-zz.play * { animation: none !important; } }';
  document.head.appendChild(css);

  function svg() {
    var id = 'zz' + (++uid);
    var defs =
      '<defs>' +
      // лицевая сторона: полированное золото
      '<linearGradient id="' + id + 'f" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#fff4c9"/><stop offset=".16" stop-color="#ffd767"/><stop offset=".42" stop-color="#e8ad21"/>' +
        '<stop offset=".6" stop-color="#b47b0c"/><stop offset=".78" stop-color="#f0bf45"/><stop offset="1" stop-color="#c88d15"/></linearGradient>' +
      // торец (глубина)
      '<linearGradient id="' + id + 's" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#9a6a10"/><stop offset="1" stop-color="#4f3305"/></linearGradient>' +
      // глянцевый блик
      '<linearGradient id="' + id + 'g" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".85"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
      '<clipPath id="' + id + 'c">' + Object.keys(P).map(function (k) { return '<path d="' + P[k] + '"/>'; }).join('') + '</clipPath>' +
      '</defs>';
    var halves = Object.keys(P).map(function (k) {
      var ext = '';
      for (var i = DEPTH; i >= 1; i--) ext += '<path d="' + P[k] + '" transform="translate(' + (i * 0.75).toFixed(2) + ' ' + (i * 0.95).toFixed(2) + ')"/>';
      return '<g class="h ' + k + '">' +
        '<g fill="url(#' + id + 's)">' + ext + '</g>' +
        '<path d="' + P[k] + '" fill="url(#' + id + 'f)"/>' +
        '<path d="' + P[k] + '" fill="none" stroke="#fff3c0" stroke-opacity=".75" stroke-width="1.3" stroke-linejoin="round"/>' +
        '<path d="' + P[k] + '" fill="none" stroke="#6b4606" stroke-opacity=".5" stroke-width=".6" stroke-linejoin="round" transform="translate(.6 .8)"/>' +
      '</g>';
    }).join('');
    var shine = '<g clip-path="url(#' + id + 'c)"><rect class="shine" x="0" y="-40" width="120" height="280" fill="url(#' + id + 'g)" transform="skewX(-20)"/></g>';
    return '<svg viewBox="0 0 340 204" aria-hidden="true">' + defs + halves + shine + '</svg>';
  }

  function init(el) {
    if (el.__zz) return; el.__zz = true;
    el.setAttribute('role', 'img'); if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', 'Barberzz');
    el.innerHTML = svg();
    var last = 0;
    function play() { last = Date.now(); el.classList.remove('play'); void el.offsetWidth; el.classList.add('play'); }
    var start = function () { setTimeout(play, 300); };
    if (document.readyState === 'complete') start(); else addEventListener('load', start, { once: true });
    var every = +(el.getAttribute('data-every') || 8);
    if (every > 0) setInterval(function () { if (!document.hidden && Date.now() - last > every * 1000 - 50) play(); }, 500);
    var host = el.closest('a') || el;
    host.addEventListener('mouseenter', function () { if (Date.now() - last > 2600) play(); });
    el.addEventListener('click', function () { if (Date.now() - last > 400) play(); });
  }
  function all() { var l = document.querySelectorAll('.bz-zz'); for (var i = 0; i < l.length; i++) init(l[i]); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  setTimeout(all, 1500);
})();
