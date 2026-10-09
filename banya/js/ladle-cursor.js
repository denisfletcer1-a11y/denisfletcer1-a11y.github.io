/* Курсор «ЛЕСНОГО ПАРА» — деревянный банный ковшик. Только для мыши.
   При клике ковшик наклоняется, будто плещет воду на камни, и поднимаются облачка пара.
   Над кнопками и ссылками ковшик чуть крупнее и с тёплой подсветкой. В полях ввода — обычный курсор.
   Размеры заданы жёстко (!important): общие правила сайта не должны сжать курсор. */
(function () {
  'use strict';
  if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HOT = 'a, button, [role="button"], [role="slider"], label, summary, select, [data-cursor="hot"]';
  const TEXT = 'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]';

  const style = document.createElement('style');
  style.textContent = `
    html.ld-on, html.ld-on * { cursor: none !important; }
    ${TEXT.split(', ').map(s => 'html.ld-on ' + s).join(', ')} { cursor: text !important; }
    .ld-cursor { position: fixed !important; left: 0; top: 0; z-index: 2147483000; width: 0 !important; height: 0 !important; pointer-events: none; opacity: 0; transition: opacity .15s; will-change: transform; }
    .ld-cursor svg { position: absolute; left: -2px; top: -12px; display: block; width: 50px !important; height: 24px !important; max-width: none !important; max-height: none !important; overflow: visible;
      transform-origin: 2px 12px; transform: rotate(var(--r, -38deg)) scale(var(--k, 1)); transition: transform .22s cubic-bezier(.2, .7, .2, 1);
      filter: drop-shadow(0 0 .6px rgba(0, 0, 0, .8)) drop-shadow(0 2px 3px rgba(0, 0, 0, .45)); }
    .ld-cursor.hot { --k: 1.12; }
    .ld-cursor.hot .ld-glow { opacity: .9; }
    .ld-cursor.down { --r: -8deg; }
    .ld-puff { position: fixed; left: 0; top: 0; z-index: 2147482999; width: 16px; height: 16px; margin: -8px 0 0 -8px; border-radius: 50%; pointer-events: none;
      background: radial-gradient(circle, rgba(255, 255, 255, .75) 0%, rgba(255, 255, 255, .25) 45%, rgba(255, 255, 255, 0) 72%); }
  `;
  document.head.appendChild(style);

  const el = document.createElement('div');
  el.className = 'ld-cursor';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <svg viewBox="0 0 50 24">
      <defs>
        <linearGradient id="ldWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2b880"/><stop offset=".55" stop-color="#b88250"/><stop offset="1" stop-color="#7d5430"/></linearGradient>
        <radialGradient id="ldWater" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#7fa6c4"/><stop offset="1" stop-color="#2f4659"/></radialGradient>
      </defs>
      <circle class="ld-glow" cx="10" cy="12" r="12" fill="#e9a35c" opacity="0" style="transition:opacity .2s"/>
      <rect x="16" y="9.8" width="33" height="4.4" rx="2.2" fill="url(#ldWood)" stroke="#5b3b1f" stroke-width=".7"/>
      <rect x="43" y="9.2" width="5.6" height="5.6" rx="1.4" fill="#6b4627"/>
      <circle cx="10" cy="12" r="8.4" fill="url(#ldWood)" stroke="#5b3b1f" stroke-width=".9"/>
      <ellipse cx="10" cy="12" rx="6.1" ry="6.1" fill="url(#ldWater)"/>
      <path d="M6.2 9.3c1.2-1.2 2.9-1.6 4.4-1.2" fill="none" stroke="#fff" stroke-width=".9" stroke-linecap="round" opacity=".7"/>
      <circle cx="10" cy="12" r="8.4" fill="none" stroke="#f3d3a3" stroke-width=".6" opacity=".55"/>
    </svg>`;
  document.body.appendChild(el);

  let x = 0, y = 0, raf = 0;
  const render = () => { raf = 0; el.style.transform = `translate(${x}px, ${y}px)`; };

  function puffs() {
    if (reduced) return;
    for (let i = 0; i < 6; i++) {
      const p = document.createElement('div');
      p.className = 'ld-puff';
      document.body.appendChild(p);
      const sx = x + 8 + (Math.random() * 14 - 7), sy = y - 4;
      const dx = Math.random() * 30 - 15, dy = -(36 + Math.random() * 46), s = 1.4 + Math.random() * 1.8;
      p.animate([
        { transform: `translate(${sx}px, ${sy}px) scale(.5)`, opacity: 0 },
        { transform: `translate(${sx + dx * 0.3}px, ${sy + dy * 0.3}px) scale(${s * 0.6})`, opacity: .9, offset: 0.25 },
        { transform: `translate(${sx + dx}px, ${sy + dy}px) scale(${s})`, opacity: 0 },
      ], { duration: 800 + Math.random() * 500, easing: 'cubic-bezier(.2, .6, .4, 1)', delay: i * 40 }).onfinish = () => p.remove();
    }
  }

  document.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    document.documentElement.classList.add('ld-on');
    x = e.clientX;
    y = e.clientY;
    const t = e.target instanceof Element ? e.target : null;
    el.classList.toggle('hot', !!(t && t.closest(HOT)));
    el.style.opacity = t && t.closest(TEXT) ? 0 : 1;
    if (!raf) raf = requestAnimationFrame(render);
  }, { passive: true });
  document.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    const t = e.target instanceof Element ? e.target : null;
    if (t && t.closest(TEXT)) return;
    el.classList.add('down');
    puffs();
  }, { passive: true });
  window.addEventListener('pointerup', () => el.classList.remove('down'));
  document.addEventListener('mouseout', e => { if (!e.relatedTarget) el.style.opacity = 0; });
  window.addEventListener('blur', () => { el.style.opacity = 0; el.classList.remove('down'); });
})();
