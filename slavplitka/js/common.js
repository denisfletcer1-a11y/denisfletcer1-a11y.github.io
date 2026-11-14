// Общее для всех страниц: меню, корзина и избранное (в браузере), формы, модальное окно, тосты
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const SP = window.SP;

  // ---------- хранилище: корзина и избранное ----------
  const mem = {};
  const store = {
    get(k, d) { try { const v = localStorage.getItem('sp-' + k); return v ? JSON.parse(v) : d; } catch (e) { return mem[k] !== undefined ? mem[k] : d; } },
    set(k, v) { mem[k] = v; try { localStorage.setItem('sp-' + k, JSON.stringify(v)); } catch (e) { /* приватный режим */ } },
  };
  const cart = {
    items() { return store.get('cart', []); },
    save(list) { store.set('cart', list); counters(true); document.dispatchEvent(new CustomEvent('cart:change')); },
    key: it => [it.id, it.h, it.s, it.c].join('|'),
    add(it) {
      const list = cart.items(), k = cart.key(it), ex = list.find(x => cart.key(x) === k);
      if (ex) ex.qty = Math.round((ex.qty + it.qty) * 100) / 100; else list.push(it);
      cart.save(list);
    },
    setQty(k, q) { const list = cart.items(); const it = list.find(x => cart.key(x) === k); if (it) { it.qty = q; cart.save(list); } },
    remove(k) { cart.save(cart.items().filter(x => cart.key(x) !== k)); },
    clear() { cart.save([]); },
    count() { return cart.items().length; },
  };
  const fav = {
    list() { return store.get('fav', []); },
    has: id => fav.list().includes(id),
    toggle(id) {
      const l = fav.list(), on = !l.includes(id);
      store.set('fav', on ? [...l, id] : l.filter(x => x !== id));
      counters(true);
      document.dispatchEvent(new CustomEvent('fav:change'));
      return on;
    },
  };
  function counters(bump) {
    const n = { cart: cart.count(), fav: fav.list().length };
    $$('[data-count]').forEach(el => {
      const v = n[el.dataset.count];
      const changed = el.textContent !== String(v);
      el.textContent = v;
      el.classList.toggle('on', v > 0);
      if (bump && changed && v > 0) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
    });
  }

  // ---------- тост ----------
  let tt = 0;
  function toast(html, ms = 3200) {
    const t = $('#toast');
    if (!t) return;
    t.innerHTML = html;
    t.classList.add('on');
    clearTimeout(tt);
    tt = setTimeout(() => t.classList.remove('on'), ms);
  }

  // ---------- меню ----------
  const body = document.body, burger = $('#burger');
  function setMenu(o) { body.classList.toggle('menu-open', o); if (burger) { burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Закрыть меню' : 'Открыть меню'); } }
  if (burger) burger.addEventListener('click', () => setMenu(!body.classList.contains('menu-open')));
  const hdr = $('#hdr');
  const setH = () => { if (hdr) document.documentElement.style.setProperty('--hdr-h', hdr.getBoundingClientRect().bottom + 'px'); };
  setH(); addEventListener('resize', setH); addEventListener('scroll', () => { if (body.classList.contains('menu-open')) setH(); }, { passive: true });
  const nav = body.dataset.nav;
  if (nav) $$('.menu a').forEach(a => a.classList.toggle('on', a.dataset.nav === nav));

  // ---------- телефон ----------
  function maskPhone(inp) {
    inp.addEventListener('input', () => {
      let d = inp.value.replace(/\D/g, '');
      if (!d) { inp.value = ''; return; }
      if (d[0] === '8') d = '7' + d.slice(1);
      if (d[0] !== '7') d = '7' + d;
      d = d.slice(0, 11);
      let o = '+7';
      if (d.length > 1) o += ' (' + d.slice(1, 4);
      if (d.length >= 4) o += ')';
      if (d.length > 4) o += ' ' + d.slice(4, 7);
      if (d.length > 7) o += '-' + d.slice(7, 9);
      if (d.length > 9) o += '-' + d.slice(9, 11);
      inp.value = o;
    });
  }
  $$('input[type=tel]').forEach(maskPhone);
  const phoneOk = inp => inp.value.replace(/\D/g, '').length === 11;

  // демо-отправка: проверка полей и понятный ответ
  function fakeSend(form, note, okText) {
    const ph = form.elements.phone, ok = form.elements.ok;
    note.className = 'form-note';
    if (ph && !phoneOk(ph)) { ph.closest('.fld').classList.add('bad'); note.textContent = 'Укажите телефон полностью.'; note.classList.add('err'); ph.focus(); return false; }
    if (ok && !ok.checked) { note.textContent = 'Нужно согласие на обработку данных.'; note.classList.add('err'); return false; }
    if (ph) ph.closest('.fld').classList.remove('bad');
    note.textContent = okText || 'Спасибо! На готовом сайте заявка сразу придёт менеджеру на почту и в мессенджер. В демо она никуда не отправляется.';
    note.classList.add('ok');
    return true;
  }
  $$('form[data-lead]').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); fakeSend(f, $('.form-note', f)); }));

  // ---------- модальное окно ----------
  const modal = $('#modal');
  let lastFocus = null, onSent = null;
  function openModal({ title, text, summary, button, comment, sent } = {}) {
    if (!modal) return;
    lastFocus = document.activeElement;
    $('#mTitle').textContent = title || 'Заявка';
    $('#mText').textContent = text || 'Перезвоним в течение часа в рабочее время.';
    const s = $('#mSummary');
    s.hidden = !summary; s.textContent = summary || '';
    $('#mCommentWrap').hidden = !comment;
    $('#mSubmit').textContent = button || 'Отправить';
    $('#mNote').textContent = ''; $('#mNote').className = 'form-note';
    onSent = sent || null;
    modal.classList.add('on');
    setTimeout(() => modal.querySelector('input[name=name]').focus(), 30);
  }
  function closeModal() { if (!modal) return; modal.classList.remove('on'); if (lastFocus) lastFocus.focus(); }
  if (modal) {
    modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('[data-close]')) closeModal(); });
    $('#mForm').addEventListener('submit', e => {
      e.preventDefault();
      if (fakeSend(e.target, $('#mNote'))) { if (onSent) onSent(); }
    });
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); setMenu(false); closeLight(); body.classList.remove('filters-open'); } });
  const MODALS = {
    price: { title: 'Получить прайс', text: 'Отправим актуальный прайс-лист и ответим на вопросы по наличию и доставке.', button: 'Получить прайс' },
    call: { title: 'Обратный звонок', text: 'Перезвоним в течение часа в рабочее время: Пн–Сб с 8:00 до 18:00.', button: 'Жду звонка' },
    discount: { title: 'Получить дополнительную скидку', text: 'Скидка зависит от объёма заказа. Менеджер рассчитает её и перезвонит.', button: 'Рассчитать скидку' },
    measure: { title: 'Консультация по укладке', text: 'Подскажем, сколько плитки и бордюра нужно, и посчитаем доставку.', button: 'Получить консультацию' },
  };
  document.addEventListener('click', e => {
    const m = e.target.closest('[data-modal]');
    if (m) { e.preventDefault(); openModal(MODALS[m.dataset.modal] || {}); }
    const d = e.target.closest('[data-demo]');
    if (d) { e.preventDefault(); toast(d.dataset.demo); }
  });

  // ---------- лайтбокс для фото ----------
  const lb = $('#lightbox');
  function closeLight() { if (lb) lb.classList.remove('on'); }
  if (lb) {
    lb.addEventListener('click', closeLight);
    document.addEventListener('click', e => {
      const f = e.target.closest('[data-zoom]');
      if (!f || e.target.closest('a')) return;
      const img = f.querySelector('img');
      lb.querySelector('img').src = f.dataset.zoom || img.currentSrc || img.src;
      lb.querySelector('img').alt = img.alt;
      lb.classList.add('on');
    });
  }

  // ---------- появление блоков ----------
  const rv = $$('.rv');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -6% 0px' });
    rv.forEach(el => io.observe(el));
  } else rv.forEach(el => el.classList.add('in'));

  // ---------- карточки товаров (каталог, главная, похожие) ----------
  function imgOf(p) { return p.photo || 'img/products/' + p.id + '.webp'; }
  function unitLabel(p) { return p.unit === 'м²' ? '₽/м²' : '₽/шт'; }
  function sizeLabel(p) {
    if (!p.sizes) return 'размеры и цвета — уточните у менеджера';
    const s = p.sizes.map(a => a.join('×')).join(', ');
    const hs = SP.heightsOf(p);
    const hl = p.heightLabel ? 'высота' : p.widthLabel ? 'ширина' : 'толщина';
    return s + ' мм · ' + hl + ' ' + hs.join(', ') + ' мм';
  }
  function swatchBg(c) {
    if (c.hex.length === 1) return c.hex[0];
    const st = 100 / c.hex.length;
    return 'conic-gradient(' + c.hex.map((h, i) => `${h} ${i * st}% ${(i + 1) * st}%`).join(',') + ')';
  }
  function cardHTML(p) {
    const cols = SP.colorsOf(p).slice(0, 7);
    const on = fav.has(p.id);
    return `<article class="pc" data-id="${p.id}">
      <a class="ph" href="product.html?id=${p.id}"><img loading="lazy" src="${imgOf(p)}" alt="${p.name}" width="480" height="360">${p.hit ? '<span class="badge">Хит</span>' : ''}</a>
      <button class="fav-btn${on ? ' on' : ''}" type="button" data-fav="${p.id}" aria-pressed="${on}" aria-label="${on ? 'Убрать из избранного' : 'В избранное'}"><svg class="ic"><use href="#i-heart"/></svg></button>
      <div class="bd">
        <span class="cat">${SP.CATS[p.cat]}</span>
        <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <span class="sz">${sizeLabel(p)}</span>
        <span class="dots" aria-label="Цвета">${cols.map(c => `<i style="background:${swatchBg(c)}" title="${c.name}"></i>`).join('')}</span>
        <div class="row"><span class="price">${p.onRequest ? '<small>Цена по запросу</small>' : `<small>от</small> ${SP.money(SP.minPrice(p))} <small>${unitLabel(p)}</small>`}</span><a class="btn btn-line btn-sm" href="product.html?id=${p.id}">Подробнее</a></div>
      </div>
    </article>`;
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-fav]');
    if (!b) return;
    e.preventDefault();
    const on = fav.toggle(b.dataset.fav);
    $$(`[data-fav="${b.dataset.fav}"]`).forEach(x => { x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); x.setAttribute('aria-label', on ? 'Убрать из избранного' : 'В избранное'); });
    toast(on ? 'Добавлено в избранное. <a href="favorites.html">Открыть</a>' : 'Убрано из избранного');
  });

  counters(false);
  addEventListener('storage', () => counters(false));

  window.UI = { $, $$, store, cart, fav, toast, openModal, closeModal, maskPhone, phoneOk, fakeSend, cardHTML, imgOf, unitLabel, sizeLabel, swatchBg, counters };
})();

// ---------- как у образца: поиск по товарам, cookie, виджет «Спросите прямо сейчас» ----------
(function () {
  'use strict';
  const { $, $$, store, fakeSend, imgOf, unitLabel } = window.UI, SP = window.SP;
  const ov = $('#searchOv'), inp = $('#searchIn'), res = $('#searchRes');
  const norm = s => s.toLowerCase().replace(/ё/g, 'е');
  function find(q) {
    q = norm(q.trim()); if (q.length < 2) return [];
    return SP.PRODUCTS.filter(p => norm([p.name, p.form, SP.CATS[p.cat], p.text, ...SP.colorsOf(p).map(c => c.name)].join(' ')).includes(q)).slice(0, 8);
  }
  function show() {
    const list = find(inp.value);
    res.innerHTML = inp.value.trim().length < 2 ? '<p class="muted">Начните вводить название: «Новый город», «бордюр», «листопад»…</p>' :
      list.length ? list.map(p => `<a class="sr-item" href="product.html?id=${p.id}"><img src="${imgOf(p)}" alt=""><span><b>${p.name}</b><small>${SP.CATS[p.cat]}</small></span><em>${p.onRequest ? 'по запросу' : 'от ' + SP.money(SP.minPrice(p)) + ' ' + unitLabel(p)}</em></a>`).join('') : '<p class="muted">Ничего не нашлось. Позвоните: +7 988 333-64-00 — подскажем.</p>';
  }
  if (ov) {
    $('#searchBtn').addEventListener('click', () => { ov.classList.add('on'); show(); setTimeout(() => inp.focus(), 30); });
    $('#searchX').addEventListener('click', () => ov.classList.remove('on'));
    ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('on'); });
    inp.addEventListener('input', show);
    inp.addEventListener('keydown', e => { if (e.key === 'Escape') ov.classList.remove('on'); if (e.key === 'Enter') { const f = res.querySelector('a'); if (f) location.href = f.href; } });
  }
  const ck = $('#cookie');
  if (ck && !store.get('cookie-ok', false)) { ck.hidden = false; $('#cookieOk').addEventListener('click', () => { store.set('cookie-ok', true); ck.hidden = true; }); }

  // «Спросите прямо сейчас»: готовые вопросы складываются в сообщение
  $$('[data-ask]').forEach(box => {
    const Q = ['Замер бесплатно?', 'Какая стоимость доставки?', 'Какие сроки?', 'Что есть в наличии?', 'Скидка от объёма?', 'Есть ли гарантия?'];
    box.innerHTML = `<div class="ask"><div class="ask-head"><b>Спросите прямо сейчас</b><span>Менеджер ответит в рабочее время, обычно за 15 минут</span></div>
      <form class="ask-form" novalidate><div class="ask-msg">Здравствуйте! Мне необходимо <input name="m2" type="number" min="1" placeholder="…" aria-label="Площадь, м²"> м². Прошу ответить на этот номер <label class="fld" style="display:inline-block;min-width:210px"><input name="phone" type="tel" inputmode="tel" placeholder="+7 (___) ___-__-__" aria-label="Телефон"></label></div>
      <div class="chips-row ask-q">${Q.map(q => `<button class="chip" type="button">${q}</button>`).join('')}</div>
      <button class="btn btn-main" type="submit">Отправить вопрос</button><p class="form-note"></p></form></div>`;
    UI.maskPhone(box.querySelector('input[type=tel]'));
    box.querySelectorAll('.ask-q .chip').forEach(c => c.addEventListener('click', () => { c.classList.toggle('on'); }));
    box.querySelector('form').addEventListener('submit', e => { e.preventDefault(); fakeSend(e.target, box.querySelector('.form-note'), 'Вопрос отправлен! На готовом сайте он сразу придёт менеджеру в MAX и на почту. В демо он никуда не уходит.'); });
  });
})();

// 3D-логотип: плитки складываются при загрузке и при наведении
(function () {
  const lg = document.querySelector('.lg3'); if (!lg) return;
  // цикл (сборка раз в 10 с) крутит сам CSS; здесь только перезапуск, чтобы сборку было видно
  let t = Date.now();
  const restart = () => { t = Date.now(); window.__lgPlays = (window.__lgPlays || 0) + 1; lg.classList.remove('run'); void lg.offsetWidth; lg.classList.add('run'); };
  if (document.readyState !== 'complete') window.addEventListener('load', () => { if (!document.hidden) restart(); }, { once: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden && Date.now() - t > 3000) restart(); });
  window.addEventListener('pageshow', e => { if (e.persisted) restart(); });
  const a = lg.closest('a');
  if (a) a.addEventListener('mouseenter', () => { if (Date.now() - t > 1800) restart(); });
})();
