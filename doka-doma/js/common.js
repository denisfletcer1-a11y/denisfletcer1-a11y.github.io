// Общая логика набросков: меню, появление блоков, форма заявки (никуда не отправляется)
window.DokaUI = (() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const money = n => new Intl.NumberFormat('ru-RU').format(Math.round(n)).replace(/\s/g, ' ') + ' ₽';

  function initNav() {
    const nav = $('nav'), burger = $('burger'), links = $('navLinks');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const setOpen = open => {
      nav.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    };
    burger.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    links.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
    document.addEventListener('click', e => { if (!nav.contains(e.target)) setOpen(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1080) setOpen(false); });
  }

  function initReveal() {
    const items = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const sibs = [...el.parentElement.children].filter(x => x.classList.contains('reveal'));
        el.style.transitionDelay = Math.min(sibs.indexOf(el), 4) * .08 + 's';
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: .08 });
    items.forEach(el => io.observe(el));
  }

  function initForm() {
    const form = $('leadForm'), note = $('formNote'), phone = form.elements.phone, nameInput = form.elements.name;
    phone.addEventListener('input', () => {
      let d = phone.value.replace(/\D/g, '');
      if (!d) { phone.value = ''; return; }
      if (d[0] === '8') d = '7' + d.slice(1);
      if (d[0] !== '7') d = '7' + d;
      d = d.slice(0, 11);
      let out = '+7';
      if (d.length > 1) out += ' (' + d.slice(1, 4);
      if (d.length >= 4) out += ')';
      if (d.length > 4) out += ' ' + d.slice(4, 7);
      if (d.length > 7) out += '-' + d.slice(7, 9);
      if (d.length > 9) out += '-' + d.slice(9, 11);
      phone.value = out;
    });
    [nameInput, phone].forEach(el => el.addEventListener('input', () => el.closest('.field').classList.remove('invalid')));
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = nameInput.value.trim(), digits = phone.value.replace(/\D/g, '');
      nameInput.closest('.field').classList.toggle('invalid', !name);
      phone.closest('.field').classList.toggle('invalid', digits.length < 11);
      if (!name || digits.length < 11) {
        note.className = 'form-note err';
        note.textContent = !name ? 'Пожалуйста, укажите имя.' : 'Пожалуйста, укажите телефон полностью.';
        (!name ? nameInput : phone).focus();
        return;
      }
      note.className = 'form-note ok';
      note.textContent = `Спасибо, ${name}! Это набросок, поэтому заявка никуда не отправлена. На готовом сайте она придёт вам в Битрикс24 или на почту.`;
    });
  }

  // Числа плавно набираются, когда блок показался на экране
  function initCount() {
    const items = [...document.querySelectorAll('[data-count]')];
    if (!items.length || reduced || !('IntersectionObserver' in window)) return;
    const fmt = n => new Intl.NumberFormat('ru-RU').format(n).replace(/\s/g, ' ');
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const el = e.target, to = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now();
      const step = now => {
        const k = Math.min(1, (now - t0) / 1400), v = Math.round(to * (1 - Math.pow(1 - k, 3)));
        el.textContent = fmt(v) + suf;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }), { threshold: .4 });
    items.forEach(el => io.observe(el));
  }

  // Показать 3D, если оно почти ушло с экрана: иначе изменение никто не увидит
  function showViewer(el) {
    const r = el.getBoundingClientRect(), vh = window.innerHeight;
    const vis = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0)) / Math.max(1, Math.min(r.height, vh));
    if (vis < .3) el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  }

  // Кнопка «отправить расчёт в заявку»
  function passEstimate(text) {
    const box = $('formEstimate');
    box.textContent = 'Ваш расчёт: ' + text;
    box.hidden = false;
    $('estimateField').value = text;
  }

  // Переключатели-кнопки
  function seg(id, fn) {
    const el = $(id);
    el.addEventListener('click', e => { const b = e.target.closest('button'); if (b && el.contains(b)) fn(b.dataset.v, b); });
  }
  function mark(id, v) {
    $(id).querySelectorAll('button').forEach(b => { const on = b.dataset.v === String(v); b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); });
  }

  // Полоса этапов под 3D
  function stagesBar(list, info, stages, onPick) {
    list.innerHTML = stages.map((s, i) => `<li><button class="stage-chip" type="button" data-i="${i}"><b>${String(i + 1).padStart(2, '0')}</b>${s.short}</button></li>`).join('');
    const chips = [...list.querySelectorAll('.stage-chip')];
    chips.forEach((c, i) => c.addEventListener('click', () => onPick(i)));
    return i => {
      chips.forEach((c, k) => { c.classList.toggle('on', k === i); c.classList.toggle('done', k < i); });
      info.innerHTML = `<b>${stages[i].name}.</b> <span>${stages[i].text}</span>`;
      if (list.scrollWidth > list.clientWidth + 4) {
        const li = chips[i].parentElement;
        list.scrollTo({ left: li.offsetLeft - (list.clientWidth - li.offsetWidth) / 2, behavior: 'auto' });
      }
    };
  }

  return { $, money, reduced, initNav, initReveal, initForm, initCount, showViewer, passEstimate, seg, mark, stagesBar };
})();
