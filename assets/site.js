(() => {
  'use strict';

  // Контакты. Пустое значение — кнопка скрывается.
  const CONTACT = {
    telegram: { href: 'https://t.me/DenFlu', label: '@DenFlu' },
    max: { href: 'https://max.ru/u/f9LHodD0cOI0EsaInEgk8rMxWBuimTsKvODJ9acHT4zFiZLgwovHHOmH7Xc', label: 'Написать в MAX' },
    whatsapp: { href: '', label: '' },
    phone: { href: 'tel:+79956133519', label: '+7 (995) 613-35-19' },
    vk: { href: 'https://vk.ru/d.fletcher', label: 'vk.ru/d.fletcher' },
  };

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-contact]').forEach(a => {
    const c = CONTACT[a.dataset.contact];
    if (!c || !c.href) { a.hidden = true; return; }
    a.href = c.href;
    const label = a.querySelector('[data-contact-label]');
    if (label) label.textContent = c.label;
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // шапка
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const links = [...document.querySelectorAll('.nav-links a')];
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(l => { const el = document.querySelector(l.getAttribute('href')); if (el) navObserver.observe(el); });

  // появление блоков
  const revealer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      revealer.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el, i, all) => {
    const siblings = [...el.parentElement.children].filter(x => x.classList.contains('reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = Math.min(idx, 5) * 80 + 'ms';
    revealer.observe(el);
  });
  requestAnimationFrame(() => setTimeout(() => document.querySelectorAll('.intro').forEach(el => el.classList.add('in')), 120));

  // видео играют только когда видны
  document.querySelectorAll('video[data-auto]').forEach(v => {
    if (reduced) return;
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (v.preload === 'none') v.preload = 'auto';
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }, { threshold: 0.15 }).observe(v);
  });

  // мягкое свечение за курсором и наклон превью работ
  if (!reduced && window.matchMedia('(pointer: fine)').matches) {
    const glow = document.querySelector('.cursor-glow');
    let gx = -999, gy = -999, tx = -999, ty = -999, raf = 0;
    const loop = () => {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      glow.style.transform = `translate(${gx.toFixed(1)}px, ${gy.toFixed(1)}px)`;
      raf = Math.abs(tx - gx) + Math.abs(ty - gy) > 0.5 ? requestAnimationFrame(loop) : 0;
    };
    window.addEventListener('pointermove', e => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });

    document.querySelectorAll('.work-media').forEach(m => {
      m.addEventListener('pointermove', e => {
        const r = m.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        m.style.transform = `perspective(1000px) rotateY(${(x * 8).toFixed(2)}deg) rotateX(${(-y * 6).toFixed(2)}deg)`;
      });
      m.addEventListener('pointerleave', () => { m.style.transform = ''; });
    });
  }
})();
