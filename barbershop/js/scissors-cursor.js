/* Курсор-ножницы «Цирюльни №7» (дизайн утверждён 2026-10-03: парикмахерские ножницы,
   стальные лезвия, смещённые кольца с чёрными вставками, упор для пальца, винт).
   Мышь: системный курсор скрыт, ножницы ведут мышку кончиком, при клике щёлкают и роняют волоски;
   над кнопками и ссылками раскрываются шире. В полях ввода — обычный текстовый курсор.
   Касание (телефон, планшет): ножницы появляются в точке пальца и щёлкают один раз. */
(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HOT = 'a, button, [role="button"], label, summary, select, [data-cursor="hot"]';
  const TEXT = 'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]';

  const style = document.createElement('style');
  style.textContent = `
    html.sc-on, html.sc-on * { cursor: none !important; }
    ${TEXT.split(', ').map(s => 'html.sc-on ' + s).join(', ')} { cursor: text !important; }
    .sc-cursor { position: fixed; left: 0; top: 0; z-index: 2147483000; pointer-events: none; opacity: 0; transition: opacity .15s; will-change: transform; }
    .sc-cursor svg { position: absolute; left: -1.1px; top: -9px; transform-origin: 1.1px 9px; transform: rotate(50deg) scale(var(--k, 1)); transition: transform .2s; overflow: visible; }
    .sc-cursor.hot { --k: 1.12; }
    .sc-st { fill: #d3d8dd; stroke: #646b72; stroke-width: .6; }
    .sc-sk { fill: none; stroke: #c2c8ce; stroke-linecap: round; }
    .sc-sko { fill: none; stroke: #646b72; stroke-linecap: round; }
    .sc-ins { fill: none; stroke: #1c1c1c; }
    .sc-hair { position: fixed; left: 0; top: 0; z-index: 2147483000; width: 1.2px; height: 6px; border-radius: 1px; background: #3a2c24; pointer-events: none; }
  `;
  document.head.appendChild(style);

  const el = document.createElement('div');
  el.className = 'sc-cursor';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <svg width="46" height="20" viewBox="-48 -16 82 36">
      <g class="sc-b">
        <path class="sc-sko" stroke-width="3.6" d="M1-.5Q6-1.8 9.6-4.6"/>
        <path class="sc-sk" stroke-width="2.4" d="M1-.5Q6-1.8 9.6-4.6"/>
        <circle cx="14" cy="-8.2" r="5" class="sc-sko" stroke-width="3.4"/>
        <circle cx="14" cy="-8.2" r="5" class="sc-sk" stroke-width="2.2"/>
        <circle cx="14" cy="-8.2" r="3.7" class="sc-ins" stroke-width="1.3"/>
        <path class="sc-st" d="M-46 0Q-26 2.8-6 4Q0 4.4 3 2.2L3-.4L-46-.4Z"/>
      </g>
      <g class="sc-a">
        <path class="sc-sko" stroke-width="3.6" d="M1 .5Q8 2 12.6 5.6"/>
        <path class="sc-sk" stroke-width="2.4" d="M1 .5Q8 2 12.6 5.6"/>
        <path class="sc-sko" stroke-width="2.6" d="M21.6 13Q25 16.6 31 16.2"/>
        <path class="sc-sk" stroke-width="1.5" d="M21.6 13Q25 16.6 31 16.2"/>
        <circle cx="18" cy="9" r="5.3" class="sc-sko" stroke-width="3.4"/>
        <circle cx="18" cy="9" r="5.3" class="sc-sk" stroke-width="2.2"/>
        <circle cx="18" cy="9" r="4" class="sc-ins" stroke-width="1.3"/>
        <path class="sc-st" d="M-46 0Q-26-2.8-6-4Q0-4.4 3-2.2L3 .4L-46 .4Z"/>
        <path d="M-40-1.1Q-24-2.5-8-3.1" fill="none" stroke="#fff" stroke-width=".7" opacity=".85"/>
      </g>
      <circle r="2.3" fill="#a9b0b7" stroke="#5e656c" stroke-width=".6"/>
      <circle r=".9" fill="#f1f3f5"/>
    </svg>`;
  document.body.appendChild(el);
  const bladeA = el.querySelector('.sc-a');
  const bladeB = el.querySelector('.sc-b');

  let x = 0, y = 0, open = 12, down = false, hot = false, running = false, touchTimer = 0;

  function place() { el.style.transform = `translate(${x}px, ${y}px)`; }

  function tick() {
    const target = down ? 0 : (hot ? 22 : 12);
    open += (target - open) * (reduced ? 1 : (down ? 0.55 : 0.22));
    if (Math.abs(target - open) < 0.05) open = target;
    bladeA.setAttribute('transform', `rotate(${open.toFixed(2)})`);
    bladeB.setAttribute('transform', `rotate(${(-open).toFixed(2)})`);
    running = open !== target;
    if (running) requestAnimationFrame(tick);
  }
  function kick() { if (!running) { running = true; requestAnimationFrame(tick); } }

  function hairs() {
    if (reduced) return;
    for (let i = 0; i < 3; i++) {
      const h = document.createElement('div');
      h.className = 'sc-hair';
      document.body.appendChild(h);
      const sx = x - 1 + (Math.random() * 6 - 3), sy = y - 3;
      const rot = Math.random() * 120 - 60, dx = Math.random() * 20 - 10, dy = 22 + Math.random() * 26;
      h.animate([
        { transform: `translate(${sx}px, ${sy}px) rotate(${rot}deg)`, opacity: 1 },
        { transform: `translate(${sx + dx}px, ${sy + dy}px) rotate(${rot + Math.random() * 160 - 80}deg)`, opacity: 0 },
      ], { duration: 650 + Math.random() * 300, easing: 'cubic-bezier(.3, .6, .5, 1)' }).onfinish = () => h.remove();
    }
  }

  document.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    document.documentElement.classList.add('sc-on');
    x = e.clientX; y = e.clientY; place();
    const t = e.target instanceof Element ? e.target : null;
    const inText = !!(t && t.closest(TEXT));
    const isHot = !!(t && t.closest(HOT));
    if (isHot !== hot) { hot = isHot; el.classList.toggle('hot', hot); kick(); }
    el.style.opacity = inText ? 0 : 1;
  }, { passive: true });

  document.addEventListener('pointerdown', e => {
    x = e.clientX; y = e.clientY; place();
    const t = e.target instanceof Element ? e.target : null;
    if (t && t.closest(TEXT)) return;
    if (e.pointerType === 'mouse') { down = true; hairs(); kick(); return; }
    // касание: показать ножницы в точке пальца и щёлкнуть один раз
    document.documentElement.classList.remove('sc-on');
    clearTimeout(touchTimer);
    hot = false; el.classList.remove('hot');
    el.style.opacity = 1;
    down = true; hairs(); kick();
    setTimeout(() => { down = false; kick(); }, 140);
    touchTimer = setTimeout(() => { el.style.opacity = 0; }, 700);
  }, { passive: true });

  window.addEventListener('pointerup', e => { if (e.pointerType === 'mouse') { down = false; kick(); } });
  document.addEventListener('mouseout', e => { if (!e.relatedTarget) el.style.opacity = 0; });
  window.addEventListener('blur', () => { el.style.opacity = 0; down = false; kick(); });
})();
