/* Курсор «ПРОСТОРА» — перекрестье архитектора: тонкий прицел, кружок и координаты в миллиметрах,
   как на чертеже. Только для мыши. Над кнопками и ссылками кружок раскрывается, при клике сжимается.
   Цвет инвертирует фон (виден и на светлом, и на тёмном). В полях ввода — обычный текстовый курсор.
   Размеры заданы жёстко (!important): общие правила сайта не должны сжать курсор. */
(function () {
  'use strict';
  if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const HOT = 'a, button, [role="button"], [role="slider"], label, summary, select, input[type="range"], [data-cursor="hot"]';
  const TEXT = 'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]';

  const style = document.createElement('style');
  style.textContent = `
    html.ch-on, html.ch-on * { cursor: none !important; }
    ${TEXT.split(', ').map(s => 'html.ch-on ' + s).join(', ')} { cursor: text !important; }
    .ch-cursor { position: fixed !important; left: 0; top: 0; z-index: 2147483000; width: 0 !important; height: 0 !important; pointer-events: none; opacity: 0; transition: opacity .15s; will-change: transform; mix-blend-mode: difference; }
    .ch-cursor i { position: absolute; display: block; background: #fff; }
    .ch-cursor .ch-x { left: -15px; top: -.5px; width: 30px !important; height: 1px !important; }
    .ch-cursor .ch-y { left: -.5px; top: -15px; width: 1px !important; height: 30px !important; }
    .ch-cursor .ch-ring { left: -10px; top: -10px; width: 20px !important; height: 20px !important; border: 1px solid #fff; border-radius: 50%; background: transparent; transition: transform .25s cubic-bezier(.2, .7, .2, 1); }
    .ch-cursor.hot .ch-ring { transform: scale(1.9); }
    .ch-cursor.down .ch-ring { transform: scale(.55); }
    .ch-cursor .ch-label { position: absolute; left: 18px; top: 14px; font: 500 10.5px/1 Jost, 'Segoe UI', Arial, sans-serif; letter-spacing: .08em; color: #fff; white-space: nowrap; }
    .ch-cursor.hot .ch-label { opacity: 0; }
  `;
  document.head.appendChild(style);

  const el = document.createElement('div');
  el.className = 'ch-cursor';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<i class="ch-x"></i><i class="ch-y"></i><i class="ch-ring"></i><span class="ch-label"></span>';
  document.body.appendChild(el);
  const label = el.querySelector('.ch-label');
  const fmt = n => String(Math.round(n / 10) * 100).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  let x = 0, y = 0, raf = 0;
  function render() {
    raf = 0;
    el.style.transform = `translate(${x}px, ${y}px)`;
    label.textContent = `X ${fmt(x)} · Y ${fmt(y)}`;
  }

  document.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    document.documentElement.classList.add('ch-on');
    x = e.clientX;
    y = e.clientY;
    const t = e.target instanceof Element ? e.target : null;
    el.classList.toggle('hot', !!(t && t.closest(HOT)));
    el.style.opacity = t && t.closest(TEXT) ? 0 : 1;
    if (!raf) raf = requestAnimationFrame(render);
  }, { passive: true });
  document.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') el.classList.add('down'); }, { passive: true });
  window.addEventListener('pointerup', () => el.classList.remove('down'));
  document.addEventListener('mouseout', e => { if (!e.relatedTarget) el.style.opacity = 0; });
  window.addEventListener('blur', () => { el.style.opacity = 0; el.classList.remove('down'); });
})();
