// Каталог: категории, фильтры (форма, толщина, фактура, цвет, цена), сортировка
(function () {
  'use strict';
  const { $, cardHTML, swatchBg } = window.UI, SP = window.SP;
  const q = new URLSearchParams(location.search);
  const f = { cat: SP.CATS[q.get('cat')] ? q.get('cat') : 'all', form: new Set(), h: new Set(), s: new Set(), c: new Set(), min: null, max: null, sort: 'pop' };

  const inCat = p => f.cat === 'all' || p.cat === f.cat;
  function chk(host, items, set, label) {
    host.innerHTML = '';
    items.forEach(([val, text, n]) => {
      const l = document.createElement('label');
      l.className = 'f-opt';
      l.innerHTML = `<input type="checkbox" value="${val}"${set.has(String(val)) ? ' checked' : ''}> ${text} <em>${n}</em>`;
      l.querySelector('input').addEventListener('change', e => { e.target.checked ? set.add(String(val)) : set.delete(String(val)); render(); });
      host.appendChild(l);
    });
    host.closest('.f-group').hidden = !items.length;
  }
  function filters() {
    const base = SP.PRODUCTS.filter(inCat);
    const count = fn => base.filter(fn).length;
    const forms = [...new Set(base.map(p => p.form))];
    chk($('#fForm'), forms.map(x => [x, x, count(p => p.form === x)]), f.form);
    const hs = [...new Set(base.flatMap(SP.heightsOf))].sort((a, b) => a - b);
    chk($('#fHeight'), hs.map(h => [h, h + ' мм', count(p => SP.heightsOf(p).includes(h))]), f.h);
    chk($('#fSurf'), Object.entries(SP.SURFACES).map(([k, v]) => [k, v, count(p => SP.heightsOf(p).some(h => SP.surfacesOf(p, h).includes(k)))]).filter(x => x[2]), f.s);
    const cc = $('#fColor'); cc.innerHTML = '';
    SP.COLORS.forEach(c => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'sw sm' + (f.c.has(c.id) ? ' on' : ''); b.style.background = swatchBg(c); b.title = c.name; b.setAttribute('aria-label', c.name); b.setAttribute('aria-pressed', f.c.has(c.id));
      b.addEventListener('click', () => { f.c.has(c.id) ? f.c.delete(c.id) : f.c.add(c.id); filters(); render(); });
      cc.appendChild(b);
    });
  }
  function match(p) {
    if (!inCat(p)) return false;
    if (f.form.size && !f.form.has(p.form)) return false;
    if (f.h.size && !SP.heightsOf(p).some(h => f.h.has(String(h)))) return false;
    if (f.s.size && !SP.heightsOf(p).some(h => SP.surfacesOf(p, h).some(s => f.s.has(s)))) return false;
    if (f.c.size && !SP.colorsOf(p).some(c => f.c.has(c.id))) return false;
    const mp = SP.minPrice(p);
    if (f.min !== null && mp < f.min) return false;
    if (f.max !== null && mp > f.max) return false;
    return true;
  }
  function render() {
    let list = SP.PRODUCTS.filter(match);
    if (f.sort === 'asc') list.sort((a, b) => SP.minPrice(a) - SP.minPrice(b));
    if (f.sort === 'desc') list.sort((a, b) => SP.minPrice(b) - SP.minPrice(a));
    if (f.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    if (f.sort === 'pop') list.sort((a, b) => (b.hit ? 1 : 0) - (a.hit ? 1 : 0));
    $('#grid').innerHTML = list.length ? list.map(cardHTML).join('') : '<div class="cat-empty">По этим фильтрам ничего нет. <button class="btn btn-ghost btn-sm" type="button" id="emptyReset">Сбросить фильтры</button></div>';
    const n = list.length, w = n % 10 === 1 && n % 100 !== 11 ? 'товар' : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? 'товара' : 'товаров';
    $('#found').textContent = `Найдено: ${n} ${w}`;
    const r = $('#emptyReset'); if (r) r.addEventListener('click', reset);
  }
  function tabs() {
    const host = $('#catTabs'); host.innerHTML = '';
    [['all', 'Вся продукция'], ...Object.entries(SP.CATS)].forEach(([id, name]) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'chip' + (f.cat === id ? ' on' : '');
      b.innerHTML = `${name} <small>${id === 'all' ? SP.PRODUCTS.length : SP.PRODUCTS.filter(p => p.cat === id).length}</small>`;
      b.addEventListener('click', () => {
        f.cat = id; f.form.clear(); f.h.clear(); f.s.clear();
        history.replaceState(null, '', id === 'all' ? 'catalog.html' : 'catalog.html?cat=' + id);
        head(); tabs(); filters(); render();
      });
      host.appendChild(b);
    });
  }
  function head() {
    const t = f.cat === 'all' ? 'Каталог продукции' : SP.CATS[f.cat];
    $('#catTitle').textContent = t; $('#crumbCat').textContent = t;
    document.title = t + ' — Славянская плитка';
  }
  function reset() { f.form.clear(); f.h.clear(); f.s.clear(); f.c.clear(); f.min = f.max = null; $('#fMin').value = $('#fMax').value = ''; filters(); render(); }
  $('#fReset').addEventListener('click', reset);
  $('#sort').addEventListener('change', e => { f.sort = e.target.value; render(); });
  const num = v => (v === '' ? null : +v);
  $('#fMin').addEventListener('input', e => { f.min = num(e.target.value); render(); });
  $('#fMax').addEventListener('input', e => { f.max = num(e.target.value); render(); });
  $('#fOpen').addEventListener('click', () => document.body.classList.add('filters-open'));
  $('#fClose').addEventListener('click', () => document.body.classList.remove('filters-open'));
  head(); tabs(); filters(); render();
  const t = document.getElementById('sizeTable');
  if (t) t.innerHTML = '<thead><tr><th>Плитка</th><th>Размеры, мм</th><th>Толщина, мм</th><th>Цена от, ₽/м²</th></tr></thead><tbody>' + SP.PRODUCTS.filter(p => p.cat === 'plitka' && p.unit === 'м²' && !p.onRequest).map(p => `<tr><td><a href="product.html?id=${p.id}">${p.name}</a></td><td>${p.sizes.map(x => x.join('×')).join(', ')}</td><td>${SP.heightsOf(p).join(', ')}</td><td>${SP.money(SP.minPrice(p))}</td></tr>`).join('') + '</tbody>';
})();
