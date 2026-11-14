// Демо-админка: товары, фото, тексты, цены, скрытие, новые товары, контакты.
// В демо правки лежат в localStorage этого браузера (data.js применяет их на всех страницах).
(function () {
  'use strict';
  const SP = window.SP, $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const KEY = 'sp-admin';
  const ADM = Object.assign({ edits: {}, added: [], settings: null }, SP.ADMIN || {});
  ADM.edits = ADM.edits || {}; ADM.added = ADM.added || [];
  const clone = o => JSON.parse(JSON.stringify(o));
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const UNITS = ['м²', 'шт', 'пог. м', 'т'];
  const G5 = ['Серый', 'Красный, коричневый, чёрный, зелёный', 'Жёлтый, оранжевый', 'Белый', 'Колормикс'];
  const GM = ['Однотонный', 'Колормикс'];

  function toast(t) { const el = $('#admToast'); el.textContent = t; el.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('on'), 2600); }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(ADM)); return true; }
    catch (e) { toast('В демо закончилось место для фото в браузере. В рабочей версии ограничения нет.'); return false; }
  }
  // текущий список: исходные товары с правками + добавленные
  function list() {
    const base = clone(SP.ORIGINAL).map(p => Object.assign(p, ADM.edits[p.id] || {}));
    return base.concat(clone(ADM.added));
  }
  const byId = id => list().find(p => p.id === id);
  const isAdded = id => ADM.added.some(p => p.id === id);
  const thumb = p => (p.photos && p.photos[0]) || p.photo || 'img/products/' + p.id + '.webp';
  function priceText(p) {
    if (p.onRequest) return 'по запросу';
    const m = SP.minPrice(p);
    return isFinite(m) && m ? 'от ' + SP.money(m) + ' ₽/' + (p.unit || 'шт') : '—';
  }

  // ---------- вход ----------
  const logged = () => { try { return sessionStorage.getItem('sp-adm-in') === '1'; } catch (e) { return false; } };
  function enter() { $('#admLogin').hidden = true; $('#adm').hidden = false; renderList(); }
  $('#admLoginForm').addEventListener('submit', e => { e.preventDefault(); try { sessionStorage.setItem('sp-adm-in', '1'); } catch (er) {} enter(); });
  $('#admOut').addEventListener('click', () => { try { sessionStorage.removeItem('sp-adm-in'); } catch (e) {} location.reload(); });

  // ---------- разделы ----------
  function show(sec) {
    $$('.adm-sec').forEach(s => s.classList.toggle('on', s.id === 'sec-' + sec));
    $$('.adm-nav button').forEach(b => b.classList.toggle('on', b.dataset.sec === sec || (sec === 'edit' && b.dataset.sec === 'products')));
    window.scrollTo(0, 0);
  }
  $$('.adm-nav button').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.sec === 'new') return openEdit(null);
    if (b.dataset.sec === 'products') renderList();
    if (b.dataset.sec === 'settings') fillSettings();
    if (b.dataset.sec === 'prices') $('#prDate').value = (ADM.settings && ADM.settings.PRICE_DATE) || SP.PRICE_DATE;
    show(b.dataset.sec);
  }));
  $('#admBack').addEventListener('click', () => { renderList(); show('products'); });

  // ---------- список товаров ----------
  [$('#admCat'), $('#prCat')].forEach(sel => Object.entries(SP.CATS).forEach(([k, v]) => sel.insertAdjacentHTML('beforeend', `<option value="${k}">${v}</option>`)));
  $('#admSearch').addEventListener('input', renderList);
  $('#admCat').addEventListener('change', renderList);
  function renderList() {
    const q = $('#admSearch').value.trim().toLowerCase(), cat = $('#admCat').value;
    const items = list().filter(p => (!cat || p.cat === cat) && (!q || (p.name + ' ' + p.form).toLowerCase().includes(q)));
    $('#admCount').textContent = items.length + ' из ' + list().length;
    $('#admTable').innerHTML = '<thead><tr><th></th><th>Название</th><th>Категория</th><th>Цена</th><th>На сайте</th><th>Хит</th><th></th></tr></thead><tbody>' +
      items.map(p => `<tr data-id="${esc(p.id)}" class="${p.hidden ? 'off' : ''}">
        <td><img src="${esc(thumb(p))}" alt="" loading="lazy"></td>
        <td><b>${esc(p.name)}</b><small>${esc(p.form || '')}${isAdded(p.id) ? ' · новый' : ADM.edits[p.id] ? ' · изменён' : ''}</small></td>
        <td>${esc(SP.CATS[p.cat] || '')}</td>
        <td>${esc(priceText(p))}</td>
        <td><label class="adm-sw"><input type="checkbox" data-act="vis" ${p.hidden ? '' : 'checked'}><i></i></label></td>
        <td><label class="adm-sw"><input type="checkbox" data-act="hit" ${p.hit ? 'checked' : ''}><i></i></label></td>
        <td class="adm-btns"><button type="button" class="btn btn-line btn-sm" data-act="edit">Изменить</button><a class="btn btn-ghost btn-sm" href="product.html?id=${encodeURIComponent(p.id)}" target="_blank" rel="noopener">На сайте ↗</a></td>
      </tr>`).join('') + '</tbody>';
  }
  $('#admTable').addEventListener('click', e => {
    const tr = e.target.closest('tr[data-id]'); if (!tr) return;
    if (e.target.closest('[data-act="edit"]')) openEdit(tr.dataset.id);
  });
  $('#admTable').addEventListener('change', e => {
    const tr = e.target.closest('tr[data-id]'), act = e.target.dataset.act; if (!tr || !act) return;
    const p = byId(tr.dataset.id);
    if (act === 'vis') p.hidden = !e.target.checked;
    if (act === 'hit') p.hit = e.target.checked;
    store(p);
    tr.classList.toggle('off', !!p.hidden);
    toast(act === 'vis' ? (p.hidden ? 'Товар скрыт с сайта' : 'Товар снова на сайте') : (p.hit ? 'Отмечен как хит' : 'Снята отметка «хит»'));
  });

  // сохранить товар: добавленные целиком, исходные — только отличия
  function store(p) {
    if (isAdded(p.id)) { ADM.added = ADM.added.map(x => x.id === p.id ? p : x); return save(); }
    const o = SP.ORIGINAL.find(x => x.id === p.id), patch = {};
    new Set([...Object.keys(p), ...Object.keys(o)]).forEach(k => {
      const a = p[k] === undefined ? null : p[k], b = o[k] === undefined ? null : o[k];
      if (JSON.stringify(a) !== JSON.stringify(b) && !(a === false && b === null)) patch[k] = a;
    });
    if (Object.keys(patch).length) ADM.edits[p.id] = patch; else delete ADM.edits[p.id];
    return save();
  }

  // ---------- карточка товара ----------
  let cur = null, isNew = false;
  function openEdit(id) {
    isNew = !id;
    cur = id ? byId(id) : { id: 'n' + Date.now().toString(36), cat: 'blag', form: '', name: '', unit: 'шт', text: '', sizes: [[0, 0]], heights: [0], fixedPrice: 0, onlyColor: 'grey', photos: [] };
    $('#edTitle').textContent = isNew ? 'Новый товар' : cur.name;
    renderForm();
    show('edit');
  }
  function priceKind(p) { return p.onRequest ? 'request' : p.fixedPrice != null ? 'fixed' : p.blockPrice ? 'block' : p.prices ? 'table' : 'fixed'; }

  function renderForm() {
    const p = cur, kind = priceKind(p);
    const colorsSel = p.colors || (p.prices ? SP.BASE_COLORS : []);
    const defaultPhoto = !isNew && !(p.photos || []).length ? `<figure class="adm-ph def"><img src="${esc(thumb(p))}" alt=""><figcaption>Фото по умолчанию</figcaption></figure>` : '';
    $('#edForm').innerHTML = `
      <div class="adm-card">
        <h3>Основное</h3>
        <label>Название<input name="name" value="${esc(p.name)}" required placeholder="Например: Вазон «Квадро»"></label>
        <div class="adm-row">
          <label>Категория<select name="cat">${Object.entries(SP.CATS).map(([k, v]) => `<option value="${k}" ${p.cat === k ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
          <label>Вид / форма<input name="form" value="${esc(p.form)}" placeholder="Например: Вазон"></label>
          <label>Единица<select name="unit">${UNITS.map(u => `<option ${p.unit === u ? 'selected' : ''}>${u}</option>`).join('')}</select></label>
        </div>
        <div class="adm-row">
          <label>Размеры, мм<input name="sizes" value="${esc((p.sizes || []).map(s => s.join('×')).join(', '))}" placeholder="200×100, 300×300"></label>
          <label>Толщина / высота, мм<input name="heights" value="${esc(SP.heightsOf(p).join(', '))}" placeholder="40, 60, 80" ${kind === 'table' ? 'readonly title="Толщины задаются в таблице цен ниже"' : ''}></label>
        </div>
        <label>Описание<textarea name="text" rows="4">${esc(p.text)}</textarea></label>
      </div>

      <div class="adm-card">
        <h3>Фото</h3>
        <p class="adm-note">Первое фото — главное, оно же в каталоге. Можно выбрать сразу несколько файлов.</p>
        <div class="adm-photos" id="edPhotos">${defaultPhoto}${(p.photos || []).map((u, i) => `<figure class="adm-ph"><img src="${u}" alt=""><figcaption>${i === 0 ? 'Главное' : `<button type="button" data-main="${i}">Сделать главным</button>`}<button type="button" data-del="${i}">Удалить</button></figcaption></figure>`).join('')}
          <label class="adm-ph add"><input type="file" accept="image/*" multiple id="edFiles"><span>+ Добавить фото</span></label>
        </div>
      </div>

      <div class="adm-card">
        <h3>Цена</h3>
        <div class="adm-kinds">
          ${[['table', 'Таблица: толщина × фактура × цвет'], ['block', 'Своя цена у каждого цвета'], ['fixed', 'Одна цена'], ['request', 'По запросу']].map(([k, t]) => `<label class="adm-kind"><input type="radio" name="kind" value="${k}" ${kind === k ? 'checked' : ''} ${k === 'table' && !p.prices ? 'disabled' : ''}> ${t}</label>`).join('')}
        </div>
        <div id="edPrice"></div>
      </div>

      ${p.prices ? `<div class="adm-card"><h3>Цвета на сайте</h3><div class="adm-colors">${SP.COLORS.map(c => `<label class="adm-col"><input type="checkbox" name="color" value="${c.id}" ${colorsSel.includes(c.id) ? 'checked' : ''}><i style="background:${c.hex.length > 1 ? `linear-gradient(135deg,${c.hex.join(',')})` : c.hex[0]}"></i>${c.name}</label>`).join('')}</div></div>` : ''}

      <div class="adm-card">
        <label class="adm-inline"><input type="checkbox" name="hit" ${p.hit ? 'checked' : ''}> Хит продаж (показывать первым)</label>
        <label class="adm-inline"><input type="checkbox" name="hidden" ${p.hidden ? 'checked' : ''}> Скрыть с сайта</label>
      </div>

      <div class="adm-actions sticky">
        <button class="btn btn-main" type="submit">${isNew ? 'Добавить на сайт' : 'Сохранить'}</button>
        ${isNew ? '' : `<a class="btn btn-line" href="product.html?id=${encodeURIComponent(p.id)}" target="_blank" rel="noopener">Посмотреть на сайте ↗</a>`}
        ${!isNew && isAdded(p.id) ? '<button class="btn btn-ghost" type="button" id="edDelete">Удалить товар</button>' : ''}
        ${!isNew && ADM.edits[p.id] ? '<button class="btn btn-ghost" type="button" id="edRevert">Вернуть как было</button>' : ''}
      </div>`;
    renderPrice();
    $$('#edForm input[name="kind"]').forEach(r => r.addEventListener('change', () => { readForm(); setKind(r.value); renderForm(); }));
    $('#edFiles').addEventListener('change', e => addFiles([...e.target.files]));
    $('#edPhotos').addEventListener('click', e => {
      const d = e.target.dataset;
      if (d.del !== undefined) { readForm(); cur.photos = cur.photos || []; cur.photos.splice(+d.del, 1); renderForm(); }
      if (d.main !== undefined) { readForm(); const [x] = cur.photos.splice(+d.main, 1); cur.photos.unshift(x); renderForm(); }
    });
    const del = $('#edDelete'); if (del) del.addEventListener('click', () => { if (!confirm('Удалить товар «' + cur.name + '»?')) return; ADM.added = ADM.added.filter(x => x.id !== cur.id); save(); toast('Товар удалён'); renderList(); show('products'); });
    const rev = $('#edRevert'); if (rev) rev.addEventListener('click', () => { if (!confirm('Вернуть товар к исходному виду?')) return; delete ADM.edits[cur.id]; save(); toast('Товар возвращён к исходному'); openEdit(cur.id); });
  }

  function setKind(k) {
    const p = cur, first = SP.minPrice(p) || 0;
    if (k !== 'fixed') delete p.fixedPrice;
    if (k !== 'block') delete p.blockPrice;
    p.onRequest = false;
    if (k === 'request') p.onRequest = true;
    if (k === 'fixed') { p.fixedPrice = isFinite(first) ? first : 0; if (!p.heights) p.heights = SP.heightsOf(p).length ? SP.heightsOf(p) : [0]; }
    if (k === 'block') { p.blockPrice = { grey: isFinite(first) ? first : 0 }; if (!p.heights) p.heights = SP.heightsOf(p).length ? SP.heightsOf(p) : [0]; }
    if (k === 'table' && cur.prices) { /* таблица остаётся как была */ }
  }

  function renderPrice() {
    const p = cur, kind = priceKind(p), host = $('#edPrice');
    if (kind === 'request') { host.innerHTML = '<p class="adm-note">На сайте вместо цены — кнопка «Узнать цену».</p>'; return; }
    if (kind === 'fixed') {
      host.innerHTML = `<div class="adm-row"><label>Цена, ₽ за ${esc(p.unit)}<input type="number" min="0" name="fixedPrice" value="${p.fixedPrice || 0}"></label>
        <label>Цвет<select name="onlyColor"><option value="">— не указан —</option>${SP.COLORS.map(c => `<option value="${c.id}" ${p.onlyColor === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}</select></label></div>`;
      return;
    }
    if (kind === 'block') {
      host.innerHTML = `<p class="adm-note">Отметьте цвета, которые выпускаете, и укажите цену за ${esc(p.unit)}.</p><div class="adm-bp">${SP.COLORS.map(c => {
        const v = p.blockPrice[c.id];
        return `<label class="adm-bpr"><input type="checkbox" data-bc="${c.id}" ${v !== undefined ? 'checked' : ''}><i style="background:${c.hex[0]}"></i><span>${c.name}</span><input type="number" min="0" data-bp="${c.id}" value="${v ?? ''}" placeholder="—"></label>`;
      }).join('')}</div>`;
      return;
    }
    // таблица
    host.innerHTML = Object.entries(p.prices).map(([h, row]) => `
      <div class="adm-pt"><h4>${h} мм <button type="button" class="adm-x" data-delh="${h}" title="Убрать толщину">×</button></h4>
      <div class="adm-table-wrap"><table class="adm-table adm-prices"><thead><tr><th>Фактура</th>${G5.map(g => `<th>${g}</th>`).join('')}</tr></thead><tbody>
      ${Object.entries(SP.SURFACES).map(([s, sn]) => {
        const arr = row[s];
        if (!arr) return `<tr class="off"><td>${sn}</td><td colspan="5"><button type="button" class="btn btn-ghost btn-sm" data-adds="${h}|${s}">+ Добавить фактуру</button></td></tr>`;
        const labels = s === 'marble' ? GM : G5;
        return `<tr><td>${sn} <button type="button" class="adm-x" data-dels="${h}|${s}" title="Убрать фактуру">×</button></td>${G5.map((g, i) => i < arr.length ? `<td><input type="number" min="0" data-pr="${h}|${s}|${i}" value="${arr[i]}" title="${labels[i]}" aria-label="${sn}, ${labels[i]}"></td>` : '<td class="na">—</td>').join('')}</tr>`;
      }).join('')}
      </tbody></table></div><p class="adm-note">Мрамор: первая колонка — однотонные цвета, вторая — колормикс.</p></div>`).join('') +
      `<div class="adm-row"><label>Добавить толщину, мм<input type="number" id="edNewH" placeholder="100"></label><button class="btn btn-line btn-sm" type="button" id="edAddH">Добавить</button></div>`;
    host.addEventListener('click', priceClicks);
  }
  function priceClicks(e) {
    const d = e.target.dataset;
    if (d.delh) { readForm(); if (Object.keys(cur.prices).length < 2) return toast('Должна остаться хотя бы одна толщина'); delete cur.prices[d.delh]; renderForm(); }
    if (d.dels) { readForm(); const [h, s] = d.dels.split('|'); if (s === 'smooth') return toast('Гладкую фактуру убрать нельзя: на ней считается цена'); cur.prices[h][s] = null; renderForm(); }
    if (d.adds) { readForm(); const [h, s] = d.adds.split('|'); const base = cur.prices[h].smooth; cur.prices[h][s] = s === 'marble' ? [base[0], base[base.length - 1]] : base.slice(); renderForm(); }
    if (e.target.id === 'edAddH') {
      readForm(); const h = +$('#edNewH').value; if (!h) return;
      const last = cur.prices[Object.keys(cur.prices).pop()];
      cur.prices[h] = clone(last); renderForm();
    }
  }

  // форма → объект товара
  function readForm() {
    const f = $('#edForm'), p = cur, v = n => f.elements[n] ? f.elements[n].value : undefined;
    p.name = v('name').trim(); p.cat = v('cat'); p.form = v('form').trim(); p.unit = v('unit'); p.text = v('text').trim();
    const sizes = v('sizes').split(/[,;]/).map(s => s.split(/[x×х*]/i).map(n => +n.trim()).filter(Boolean)).filter(a => a.length);
    if (sizes.length) p.sizes = sizes;
    const kind = priceKind(p);
    if (kind !== 'table') { const hs = v('heights').split(/[,;\s]+/).map(Number).filter(Boolean); p.heights = hs.length ? hs : [0]; }
    if (kind === 'fixed') { p.fixedPrice = +v('fixedPrice') || 0; const oc = v('onlyColor'); if (oc) p.onlyColor = oc; else delete p.onlyColor; }
    if (kind === 'block') {
      const bp = {};
      $$('#edPrice [data-bc]').forEach(cb => { if (cb.checked) bp[cb.dataset.bc] = +f.querySelector(`[data-bp="${cb.dataset.bc}"]`).value || 0; });
      p.blockPrice = Object.keys(bp).length ? bp : { grey: 0 };
    }
    if (kind === 'table') $$('#edPrice [data-pr]').forEach(inp => { const [h, s, i] = inp.dataset.pr.split('|'); p.prices[h][s][+i] = +inp.value || 0; });
    if (p.prices) { const prev = p.colors || SP.BASE_COLORS, cs = $$('#edForm input[name="color"]:checked').map(c => c.value).sort((x, y) => (prev.indexOf(x) + 1 || 99) - (prev.indexOf(y) + 1 || 99)); if (cs.length) p.colors = cs; }
    p.hit = f.elements.hit.checked; p.hidden = f.elements.hidden.checked;
    if (!p.photos || !p.photos.length) delete p.photos;
  }

  async function addFiles(files) {
    readForm(); cur.photos = cur.photos || [];
    for (const file of files) {
      try { cur.photos.push(await shrink(file)); } catch (e) { toast('Не удалось открыть файл ' + file.name); }
    }
    renderForm();
  }
  // уменьшаем фото до 1200 px, чтобы страница грузилась быстро
  function shrink(file) {
    return new Promise((ok, fail) => {
      const img = new Image(), url = URL.createObjectURL(file);
      img.onload = () => {
        const k = Math.min(1, 1200 / Math.max(img.width, img.height)), c = document.createElement('canvas');
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        let d = c.toDataURL('image/webp', 0.8);
        if (!d.startsWith('data:image/webp')) d = c.toDataURL('image/jpeg', 0.82);
        ok(d);
      };
      img.onerror = () => { URL.revokeObjectURL(url); fail(); };
      img.src = url;
    });
  }

  $('#edForm').addEventListener('submit', e => {
    e.preventDefault();
    readForm();
    if (!cur.name) { toast('Укажите название'); return; }
    if (!cur.form) cur.form = cur.name;
    if (isNew) { ADM.added.push(cur); if (!save()) { ADM.added.pop(); return; } isNew = false; toast('Товар добавлен на сайт'); }
    else { if (!store(cur)) return; toast('Сохранено. На сайте уже обновилось'); }
    $('#edTitle').textContent = cur.name;
    renderForm();
  });

  // ---------- массовое изменение цен ----------
  $('#prApply').addEventListener('click', () => {
    const cat = $('#prCat').value, pct = +$('#prPct').value, step = +$('#prRound').value;
    const date = $('#prDate').value.trim();
    let n = 0;
    if (pct) {
      const k = 1 + pct / 100, r = x => Math.max(0, Math.round(x * k / step) * step);
      list().filter(p => !cat || p.cat === cat).forEach(p => {
        if (p.onRequest) return;
        if (p.fixedPrice) p.fixedPrice = r(p.fixedPrice);
        if (p.blockPrice) Object.keys(p.blockPrice).forEach(c => { p.blockPrice[c] = r(p.blockPrice[c]); });
        if (p.prices) Object.values(p.prices).forEach(row => Object.keys(row).forEach(s => { if (row[s]) row[s] = row[s].map(r); }));
        store(p); n++;
      });
    }
    if (date) { ADM.settings = Object.assign({}, ADM.settings || {}, { PRICE_DATE: date }); save(); }
    $('#prNote').textContent = (pct ? `Цены изменены на ${pct > 0 ? '+' : ''}${pct}% у ${n} товаров.` : 'Процент не указан — цены не менялись.') + (date ? ` Дата прайса: ${date}.` : '');
    toast('Готово');
  });

  // ---------- контакты ----------
  function fillSettings() {
    const f = $('#setForm'), s = Object.assign({ PHONE: SP.PHONE, EMAIL: SP.EMAIL, ADDRESS: SP.ADDRESS, HOURS: SP.HOURS }, ADM.settings || {});
    ['PHONE', 'EMAIL', 'ADDRESS', 'HOURS'].forEach(k => { f.elements[k].value = s[k]; });
  }
  $('#setForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    ADM.settings = Object.assign({}, ADM.settings || {}, ...['PHONE', 'EMAIL', 'ADDRESS', 'HOURS'].map(k => ({ [k]: f.elements[k].value.trim() })));
    save(); toast('Контакты сохранены');
  });
  $('#admReset').addEventListener('click', () => {
    if (!confirm('Вернуть все товары, цены и контакты к исходным? Добавленные товары и загруженные фото удалятся.')) return;
    try { localStorage.removeItem(KEY); } catch (e) {}
    location.reload();
  });

  if (logged()) enter();
})();
