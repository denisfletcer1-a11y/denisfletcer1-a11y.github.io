/* Курсор «Ресурс-А» — маленький вентилятор. Только для мыши.
   Всегда тихонько крутится; над кнопками и ссылками раскручивается и светится,
   при клике от него расходятся кольца воздуха. В полях ввода — обычный курсор.
   Размеры заданы жёстко (!important): общие правила сайта не должны сжать курсор. */
(function () {
  'use strict';
  if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HOT = 'a, button, [role="button"], label, summary, select, [data-cursor="hot"]';
  const TEXT = 'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]';

  const style = document.createElement('style');
  style.textContent = `
    html.fc-on, html.fc-on * { cursor: none !important; }
    ${TEXT.split(', ').map(s => 'html.fc-on ' + s).join(', ')} { cursor: text !important; }
    .fc-cursor { position: fixed !important; left: 0; top: 0; z-index: 2147483000; width: 0 !important; height: 0 !important; pointer-events: none; opacity: 0; transition: opacity .15s; will-change: transform; }
    .fc-cursor svg { position: absolute; left: -17px; top: -17px; display: block; width: 34px !important; height: 34px !important; max-width: none !important; max-height: none !important; overflow: visible;
      filter: drop-shadow(0 0 1px rgba(0, 0, 0, .9)) drop-shadow(0 0 8px rgba(79, 216, 255, .35)); transition: transform .25s cubic-bezier(.22, 1, .36, 1), filter .25s; }
    .fc-cursor .fc-rotor { transform-origin: 17px 17px; animation: fc-spin 1.6s linear infinite; }
    .fc-cursor.hot svg { transform: scale(1.18); filter: drop-shadow(0 0 1px rgba(0, 0, 0, .9)) drop-shadow(0 0 14px rgba(79, 216, 255, .9)); }
    .fc-cursor.hot .fc-rotor { animation-duration: .35s; }
    .fc-cursor.down svg { transform: scale(.92); }
    @keyframes fc-spin { to { transform: rotate(360deg); } }
    .fc-ring { position: fixed; left: 0; top: 0; z-index: 2147482999; width: 18px; height: 18px; margin: -9px 0 0 -9px; border-radius: 50%; pointer-events: none; box-shadow: 0 0 0 1.5px rgba(150, 230, 255, .9), 0 0 12px rgba(79, 216, 255, .6); }
    ${reduced ? '.fc-cursor .fc-rotor { animation: none; }' : ''}
  `;
  document.head.appendChild(style);

  const el = document.createElement('div');
  el.className = 'fc-cursor';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <svg viewBox="0 0 34 34">
      <defs>
        <linearGradient id="fcBlade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c7f5ff"/><stop offset=".55" stop-color="#4fd8ff"/><stop offset="1" stop-color="#3b6dff"/></linearGradient>
      </defs>
      <circle cx="17" cy="17" r="15.5" fill="rgba(5,9,14,.72)" stroke="rgba(150,230,255,.75)" stroke-width="1.2"/>
      <g class="fc-rotor">
        <path d="M17 17c-1-4.6.4-9.2 4.2-10.6 2.2-.8 3.4 1.2 2.2 3.1-1.4 2.4-3.6 4.6-6.4 7.5z" fill="url(#fcBlade)"/>
        <path d="M17 17c4.6-1 9.2.4 10.6 4.2.8 2.2-1.2 3.4-3.1 2.2-2.4-1.4-4.6-3.6-7.5-6.4z" fill="url(#fcBlade)"/>
        <path d="M17 17c1 4.6-.4 9.2-4.2 10.6-2.2.8-3.4-1.2-2.2-3.1 1.4-2.4 3.6-4.6 6.4-7.5z" fill="url(#fcBlade)"/>
        <path d="M17 17c-4.6 1-9.2-.4-10.6-4.2-.8-2.2 1.2-3.4 3.1-2.2 2.4 1.4 4.6 3.6 7.5 6.4z" fill="url(#fcBlade)"/>
      </g>
      <circle cx="17" cy="17" r="2.6" fill="#eef4fb"/>
    </svg>`;
  document.body.appendChild(el);

  let x = 0, y = 0, raf = 0;
  const render = () => { raf = 0; el.style.transform = `translate(${x}px, ${y}px)`; };

  function rings() {
    if (reduced) return;
    for (let i = 0; i < 3; i++) {
      const r = document.createElement('div');
      r.className = 'fc-ring';
      document.body.appendChild(r);
      r.animate([
        { transform: `translate(${x}px, ${y}px) scale(.6)`, opacity: .9 },
        { transform: `translate(${x}px, ${y}px) scale(${3.2 + i * 1.3})`, opacity: 0 },
      ], { duration: 650 + i * 160, delay: i * 70, easing: 'cubic-bezier(.2, .7, .3, 1)' }).onfinish = () => r.remove();
    }
  }

  document.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    document.documentElement.classList.add('fc-on');
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
    rings();
  }, { passive: true });
  window.addEventListener('pointerup', () => el.classList.remove('down'));
  document.addEventListener('mouseout', e => { if (!e.relatedTarget) el.style.opacity = 0; });
  window.addEventListener('blur', () => { el.style.opacity = 0; el.classList.remove('down'); });
})();
