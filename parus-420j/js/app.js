// Панель конструктора: опции, зависимости, цена, ссылка на комплектацию, смета PDF, заявка.
(function () {
  'use strict';
  const C = window.BOAT_CONFIG, $ = s => document.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const rub = v => v.toLocaleString('ru-RU') + ' ₽';
  const allItems = C.groups.flatMap(g => g.items);
  const S = { color: C.colors[0].id, graphics: 'text', opts: new Set(), seats: 0, seatBase: ['tumba', 'tumba'], motor: '', trailer: false };

  // ссылка на комплектацию: #c=graphite&o=a,b&s=2&b=tumba,amort&m=20&t=1
  function readHash() {
    const p = new URLSearchParams(location.hash.slice(1));
    if (p.get('c') && C.colors.some(c => c.id === p.get('c'))) S.color = p.get('c');
    if (p.get('o')) p.get('o').split(',').forEach(id => allItems.some(i => i.id === id) && S.opts.add(id));
    if (p.get('s')) S.seats = Math.max(0, Math.min(2, +p.get('s') || 0));
    if (p.get('b')) S.seatBase = p.get('b').split(',').map(x => (x === 'amort' ? 'amort' : 'tumba')).concat(['tumba', 'tumba']).slice(0, 2);
    if (p.get('m') && C.motors.some(m => m.id === p.get('m'))) S.motor = p.get('m');
    if (p.get('t')) S.trailer = p.get('t') === '1';
    if (C.graphics.length && p.get('g') && C.graphics.some(g => g.id === p.get('g'))) S.graphics = p.get('g');
  }
  function writeHash() {
    const p = new URLSearchParams(); p.set('c', S.color);
    if (S.opts.size) p.set('o', [...S.opts].join(','));
    if (S.seats) { p.set('s', S.seats); p.set('b', S.seatBase.slice(0, S.seats).join(',')); }
    if (S.motor) p.set('m', S.motor); if (S.trailer) p.set('t', '1'); if (S.graphics !== 'text') p.set('g', S.graphics);
    history.replaceState(null, '', '#' + p.toString());
  }

  // ---- модель ----
  $('#mName').textContent = C.model.name; $('#mType').textContent = C.model.type; $('#mSize').textContent = C.model.size; $('#mNote').textContent = C.model.note;
  $('#title').textContent = C.model.name;
  $('#lineup').innerHTML = C.lineup.map(m => `<button type="button" class="lu${m.active ? ' on' : ''}${m.img ? ' img' : ''}" ${m.active || m.href ? '' : 'disabled'} ${m.href && !m.active ? `data-href="${m.href}"` : ''}>${m.img ? `<img src="${m.img}" alt="" loading="lazy"${m.active || m.href ? '' : ' class="dim"'}>` : ''}<b>${m.name}</b><span>${m.price ? rub(m.price) : 'цена по запросу'}</span>${m.active || m.href ? (m.tag ? `<small>${m.tag}</small>` : '') : '<small>3D после чертежа</small>'}</button>`).join('');
  $('#lineup').addEventListener('click', e => { const b = e.target.closest('button[data-href]'); if (b) location.href = b.dataset.href; });
  $('#mBase').innerHTML = C.model.base.map(x => `<li>${x}</li>`).join('');
  $('#mPrice').innerHTML = C.model.basePrice ? rub(C.model.basePrice) + (C.model.oldPrice ? ` <s>${rub(C.model.oldPrice)}</s>` : '') : 'цена по запросу';
  if (!C.seat) $('#sMinus').closest('.blk').hidden = true;
  if (!C.graphics.length) { $('#gfx').closest('.blk').hidden = true; S.graphics = 'none'; }
  if (C.motorNote) $('#mtNote').textContent = C.motorNote;

  // ---- цвета ----
  if (C.colors.length < 2) $('#colors').closest('.blk').hidden = true;
  $('#colors').innerHTML = C.colors.map(c => `<button type="button" role="radio" data-c="${c.id}" aria-label="${c.name}"><i style="background:${c.hex}"></i><span>${c.name}</span></button>`).join('');
  $('#colors').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { S.color = b.dataset.c; update(); } });

  // ---- опции ----
  $('#groups').innerHTML = C.groups.map((g, gi) => `<section class="blk"><h2><i>0${gi + 1}</i>${g.title}</h2>${g.items.map(i => `<button type="button" class="opt" data-o="${i.id}" aria-pressed="false"><b>${i.name}</b><span class="sw" aria-hidden="true"></span><small><span class="pr">${i.price == null ? 'по запросу' : '+' + rub(i.price)}</span> · ${i.qty}${i.visual ? ' · <span class="eye">видно на 3D</span>' : ''}${i.hint ? ' · ' + i.hint : ''}<span class="need"></span></small></button>`).join('')}</section>`).join('');
  $('#groups').addEventListener('click', e => {
    const b = e.target.closest('.opt'); if (!b || b.disabled) return;
    const id = b.dataset.o, it = allItems.find(i => i.id === id);
    if (S.opts.has(id)) { S.opts.delete(id); allItems.filter(x => x.needs === id).forEach(x => S.opts.delete(x.id)); }
    else { S.opts.add(id); if (it.off) S.opts.delete(it.off); }
    update(); if (S.opts.has(id)) show(id);
  });
  // ---- кресла ----
  $('#sMinus').onclick = () => { S.seats = Math.max(0, S.seats - 1); if (!S.seats) S.opts.delete('seat_plates'); update(); };
  $('#sPlus').onclick = () => { S.seats = Math.min(2, S.seats + 1); update(); show('seats'); };
  $('#seatBases').addEventListener('click', e => { const b = e.target.closest('button[data-sb]'); if (b) { S.seatBase[+b.dataset.i] = b.dataset.sb; update(); } });
  // ---- мотор и прицеп ----
  $('#motors').innerHTML = C.motors.map(m => `<button type="button" data-m="${m.id}">${m.name}${m.price ? ' · ' + rub(m.price) : ''}</button>`).join('');
  $('#motors').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { S.motor = b.dataset.m; update(); if (S.motor) show('motor'); } });
  $('#gfx').innerHTML = C.graphics.map(g => `<button type="button" data-g="${g.id}">${g.name}</button>`).join('');
  $('#gfx').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { S.graphics = b.dataset.g; update(); } });
  $('#trNo').onclick = () => { S.trailer = false; update(); }; $('#trYes').onclick = () => { S.trailer = true; update(); show('trailer'); };

  function price() {
    let sum = 0; const rows = [];
    rows.push([C.model.name + ' (' + C.model.type + '). В базе: ' + C.model.base.join(', '), C.model.basePrice || null]);
    if (C.model.basePrice) sum += C.model.basePrice;
    allItems.forEach(i => { if (S.opts.has(i.id)) { sum += i.price || 0; rows.push([i.name + ' (' + i.qty + ')', i.price ?? null]); } });
    for (let k = 0; k < S.seats; k++) { const b = C.seat.bases.find(x => x.id === S.seatBase[k]); const sp = C.seat.price == null || b.price == null ? null : C.seat.price + b.price; sum += sp || 0; rows.push(['Кресло ' + (k + 1) + ' + ' + b.name.toLowerCase(), sp]); }
    if (S.motor) { const m = C.motors.find(x => x.id === S.motor); rows.push(['Мотор: ' + m.name, m.price]); if (m.price) sum += m.price; }
    if (S.trailer) { rows.push([C.trailer.name, C.trailer.price]); if (C.trailer.price) sum += C.trailer.price; }
    return { sum, rows };
  }

  let boat = null;
  // камера подлетает к только что добавленной опции, чтобы сразу было видно, что изменилось
  const show = id => {
    if (!boat?.focus) return;
    const it = allItems.find(i => i.id === id), ok = boat.focus(id);
    if (ok) { $$('#views button').forEach(x => x.classList.remove('on')); if (it?.inner) toast('Усиление внутри корпуса — подсвечено на 3D'); }
    else if (it) toast(it.note3d || '«' + it.name + '» на 3D не показывается, в смете учтено');
  };
  function update() {
    // кнопки
    $$('#colors button').forEach(b => b.setAttribute('aria-checked', b.dataset.c === S.color));
    $$('.opt').forEach(b => {
      const it = allItems.find(i => i.id === b.dataset.o);
      const blocked = it.needs && (it.needs === 'seats' ? !S.seats : !S.opts.has(it.needs));
      if (blocked) S.opts.delete(it.id);
      b.disabled = !!blocked; b.querySelector('.need').textContent = blocked ? ' · ' + it.needsText : '';
      b.setAttribute('aria-pressed', S.opts.has(it.id));
    });
    $('#sCnt').textContent = S.seats;
    $('#seatBases').innerHTML = Array.from({ length: S.seats }, (_, k) => `<div class="sb"><p>Основание кресла ${k + 1}</p><div class="chips">${C.seat.bases.map(b => `<button type="button" data-sb="${b.id}" data-i="${k}" class="${S.seatBase[k] === b.id ? 'on' : ''}">${b.name}${b.price == null ? '' : ' +' + rub(b.price)}</button>`).join('')}</div></div>`).join('');
    $$('#motors button').forEach(b => b.classList.toggle('on', b.dataset.m === S.motor));
    $('#engine').disabled = !S.motor; if (!S.motor && typeof eng !== 'undefined' && eng) { eng = false; engUi(); }
    $$('#gfx button').forEach(b => b.classList.toggle('on', b.dataset.g === S.graphics));
    $('#trNo').classList.toggle('on', !S.trailer); $('#trYes').classList.toggle('on', S.trailer);
    // цена
    const p = price();
    $('#total').textContent = rub(p.sum);
    $('#tlabel').textContent = C.model.basePrice ? 'Итого с лодкой' : 'Стоимость опций';
    const unknown = [!C.model.basePrice && 'лодки', (allItems.some(i => S.opts.has(i.id) && i.price == null) || (S.seats && C.seat.price == null)) && 'опций', S.motor && !C.motors.find(m => m.id === S.motor).price && 'мотора', S.trailer && !C.trailer.price && 'прицепа'].filter(Boolean);
    $('#tnote').textContent = unknown.length ? '+ цена ' + unknown.join(', ') + ' — по запросу' : 'Итоговая стоимость комплектации';
    $('#comp').innerHTML = p.rows.map(r => `<li>${r[0]} — ${r[1] == null ? 'по запросу' : r[1] ? rub(r[1]) : 'в базе'}</li>`).join('');
    const n = S.opts.size + S.seats + (S.motor ? 1 : 0) + (S.trailer ? 1 : 0);
    $('#summary').textContent = (S.graphics === 'none' ? 'Без графики · ' : 'С графикой · ') + (n ? 'опций: ' + n : 'базовая комплектация') + (S.motor ? ' · ' + C.motors.find(m => m.id === S.motor).name.split(',')[0] : '') + (S.trailer ? ' · на прицепе' : '');
    // 3D
    if (boat) boat.apply({ graphics: S.graphics, color: C.colors.find(c => c.id === S.color).hex, opts: [...S.opts], seats: S.seats, seatBase: S.seatBase, motor: S.motor, trailer: S.trailer });
    writeHash();
  }

  // ---- 3D ----
  const view = $('#view'), hint = $('#hint');
  boat = window.Boat3D && Boat3D.createBoat(view, {
    model: C.model.engine,
    onHatch: (open, all) => { $('#hatchState').textContent = open ? (open === all ? 'Все открыты' : 'Открыто: ' + open + ' из ' + all) : 'Все закрыты'; hatchUi(); },
    onAutoRotate: on => { mode('#mAuto', on); },
    onHover: t => { hint.textContent = t || 'Нажмите на люк или дверцу на лодке, чтобы открыть'; hint.classList.toggle('act', !!t); },
  });
  if (boat) requestAnimationFrame(() => view.classList.add('ready')); else $('#load').textContent = '3D недоступно в этом браузере';
  function hatchUi() {
    if (!boat) return;
    $('#hatchList').innerHTML = boat.hatchList().map((x, i) => `<button type="button" data-h="${i}" class="${x.open ? 'on' : ''}" aria-pressed="${x.open}">${x.label}</button>`).join('');
  }
  $('#hatchList').addEventListener('click', e => { const b = e.target.closest('button[data-h]'); if (b) { const i = +b.dataset.h, opening = !boat?.hatchList()[i]?.open; boat?.toggleHatch(i); if (opening) boat?.focusHatch?.(i); } });
  hatchUi();
  // сцена: студия / на воде / закат
  $$('.envs button').forEach(b => b.onclick = () => { boat?.setEnv(b.dataset.env); $$('.envs button').forEach(x => x.classList.toggle('on', x === b)); if (b.dataset.env !== 'studio') { $('#trNo').click(); } });
  $$('#views button').forEach(b => b.onclick = () => { boat?.view(b.dataset.view); $$('#views button').forEach(x => x.classList.toggle('on', x === b)); });
  function mode(id, on) { $(id).classList.toggle('on', on); $(id).setAttribute('aria-pressed', on); }
  $('#mAuto').onclick = () => { const on = boat ? boat.setAutoRotate(!$('#mAuto').classList.contains('on')) : false; mode('#mAuto', on); };
  $('#mRot').onclick = () => { boat?.setPan(false); mode('#mRot', true); mode('#mPan', false); };
  $('#mPan').onclick = () => { boat?.setPan(true); mode('#mRot', false); mode('#mPan', true); };
  let dims = false; $('#mDim').onclick = () => { dims = !dims; boat?.setDims(dims); mode('#mDim', dims); };
  $('#zIn').onclick = () => boat?.zoom(0.8); $('#zOut').onclick = () => boat?.zoom(1.25);
  if (!document.fullscreenEnabled) $('#mFull').hidden = true;   // на iPhone полноэкранный режим для сайтов не работает — кнопку прячем
  $('#mFull').onclick = () => { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.(); };
  let eng = false;
  const engUi = () => { $('#engine').classList.toggle('on', eng); $('#engT').textContent = eng ? 'Заглушить мотор' : 'Запустить мотор'; };
  $('#engine').onclick = () => { eng = boat ? boat.setEngine(!eng) : false; engUi(); if (eng) { boat.view('stern'); } };
  $('#hOpen').onclick = () => { boat?.setHatches(true); boat?.view('top'); $$('#views button').forEach(x => x.classList.toggle('on', x.dataset.view === 'top')); }; $('#hClose').onclick = () => boat?.setHatches(false);
  const toast = t => { const el = $('#toast'); el.textContent = t; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2200); };
  $('#mShare').onclick = () => { navigator.clipboard?.writeText(location.href).then(() => toast('Ссылка на комплектацию скопирована'), () => toast(location.href)); };

  // ---- смета PDF (печать в PDF из браузера) ----
  $('#pdf').onclick = () => {
    const p = price(), img = boat ? boat.snapshot() : '';
    $('#print').innerHTML = `<h2>${C.brand} — ${C.model.name}</h2><p>${C.model.type}, ${C.model.size}</p>${img ? `<img src="${img}" alt="">` : ''}
      <table>${p.rows.map(r => `<tr><td>${r[0]}</td><td>${r[1] == null ? 'по запросу' : r[1] ? rub(r[1]) : 'в базе'}</td></tr>`).join('')}<tr><td><b>Итого по опциям</b></td><td><b>${rub(p.sum)}</b></td></tr></table>
      <p>Ссылка на комплектацию: ${location.href}</p><p>Смета предварительная. Сроки и доставку уточнит менеджер.</p>`;
    setTimeout(() => window.print(), 100);
  };
  // ---- заявка ----
  const dlg = $('#dlg');
  $('#lead').onclick = () => dlg.showModal?.(); $('#dlgClose').onclick = () => dlg.close();
  $('#leadForm').addEventListener('submit', () => { toast('Спасибо! Менеджер свяжется с вами'); });

  readHash(); update();
})();
