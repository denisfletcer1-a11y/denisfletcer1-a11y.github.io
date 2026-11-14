// Карточка товара: картинка из конструктора меняется вместе с цветом и фактурой; калькулятор, корзина, 1 клик
(function () {
  'use strict';
  const { $, cart, fav, toast, openModal, cardHTML, swatchBg, sizeLabel, imgOf } = window.UI, SP = window.SP;
  const q = new URLSearchParams(location.search);
  const p = SP.byId(q.get('id')) || SP.byId('novy');
  const tile = !!(p.patterns && window.Paving && Paving.layouts[p.model]);
  const st = { h: SP.heightsOf(p)[0], s: 'smooth', c: null, scene: 0, view: tile ? 'scene' : 'photo' };
  const colors = SP.colorsOf(p);
  const SPH = (window.SITE_PHOTOS || {})[p.site || p.id] || { colors: {}, gallery: [], captions: {} };
  st.c = colors.some(c => c.id === q.get('color')) ? q.get('color') : colors.length ? colors[0].id : null;
  if (SP.surfacesOf(p, st.h).includes(q.get('surface'))) st.s = q.get('surface');
  const texReady = window.Paving ? Paving.preload(SP.COLORS.map(c => c.tex)) : Promise.resolve();
  const unitWord = p.unit === 'м²' ? 'м²' : 'шт';

  document.title = p.name + ' — купить от завода | Славянская плитка';
  $('#pName').textContent = (p.cat === 'plitka' && p.unit === 'м²' ? 'Тротуарная плитка «' + p.name + '»' : p.name);
  $('#crumbName').textContent = p.name;
  $('#crumbCat').textContent = SP.CATS[p.cat]; $('#crumbCat').href = 'catalog.html?cat=' + p.cat;
  $('#pSizes').textContent = sizeLabel(p);
  $('#hLabel').textContent = p.heightLabel ? 'Высота' : p.widthLabel ? 'Ширина' : 'Толщина';
  $('#qUnit').textContent = unitWord;
  $('#reserveWrap').hidden = p.unit !== 'м²';
  if (p.unit !== 'м²') $('#qty').value = 20;

  // ---------- другие формы той же категории ----------
  const sib = SP.PRODUCTS.filter(x => x.cat === p.cat);
  $('#pForms').innerHTML = sib.map(x => `<a href="product.html?id=${x.id}" class="${x.id === p.id ? 'on' : ''}">${x.name}</a>`).join('');
  $('#optForm').hidden = sib.length < 2;

  // ---------- картинка ----------
  const stage = $('#pStage'), photo = $('#pPhoto');
  let kb = null;
  const design = () => ({ form: p.model, pattern: p.patterns[0], ...SP.look(st.c), surface: st.s });
  let photoUrl = null;
  const drawUrl = window.DRAW ? DRAW.url(p) : null;
  const BAD = /Форма, размер|ширина \d+мм/i;   // мелкие чертежи с сайта завода заменены своими
  const colorPhoto = () => SPH.colors[st.c] || null;
  const GEN = { 'porebrik-trot': 1, 'bordyur-dor': 1, 'palisad-round': 1, 'palisad-sq': 1, gazon: 2, taktil: 1, 'porebrik-sharn': 1, vazon: 1, 'porebrik-prim': 1 };
  const studio = (p.photos || []).concat(GEN[p.id] && !(p.photos || []).length ? ['img/gen/' + p.id + '.webp'].concat(GEN[p.id] > 1 ? ['img/gen/' + p.id + '-2.webp'] : []) : []);
  async function showScene(i) {
    st.view = 'scene'; st.scene = i; photo.classList.remove('on');
    if (!kb) {
      kb = Paving.createConstructor($('#pCanvas'));
      if (!kb) return showPhoto();
    }
    stage.classList.remove('ready');
    thumbs();
    const { w, h } = await kb.setScene(JSON.parse(JSON.stringify(SCENES[i])));
    if (st.view !== 'scene' || st.scene !== i) return;   // пока грузилось, выбрали другое фото
    stage.style.aspectRatio = w + ' / ' + h;
    kb.set(design());
    stage.classList.add('ready');
    thumbs();
  }
  function showPhoto(url) { st.view = 'photo'; photoUrl = url || studio[0] || colorPhoto() || drawUrl || SPH.gallery[0] || imgOf(p); photo.src = photoUrl; photo.alt = p.name; photo.classList.add('on'); stage.classList.add('ready'); stage.style.aspectRatio = '4 / 3'; photo.style.objectFit = photoUrl === drawUrl ? 'contain' : 'scale-down'; photo.style.background = photoUrl === drawUrl ? '#fbf9f6' : ''; thumbs(); }
  function thumbs() {
    const host = $('#pThumbs');
    const items = (tile ? SCENES.map((s, i) => ({ key: 's' + i, img: s.thumb, label: s.name, on: st.view === 'scene' && st.scene === i, go: () => showScene(i) })) : [])
      .concat(studio.map(u => ({ key: u, img: u, label: 'Фото изделия', on: st.view === 'photo' && photoUrl === u, go: () => showPhoto(u) })))
      .concat(drawUrl ? [{ key: 'draw', img: drawUrl, label: 'Чертёж с размерами', on: st.view === 'photo' && photoUrl === drawUrl, go: () => showPhoto(drawUrl) }] : [])
      .concat((colorPhoto() ? [colorPhoto()] : []).concat(SPH.gallery.filter(u => !BAD.test(SPH.captions[u] || '')).slice(0, 6)).map(u => ({ key: u, img: u, label: SPH.captions[u] || 'Фото с сайта завода', on: st.view === 'photo' && photoUrl === u, go: () => showPhoto(u) })));
    host.innerHTML = '';
    items.forEach(it => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = it.on ? 'on' : ''; b.title = it.label; b.setAttribute('aria-label', it.label);
      b.innerHTML = `<img src="${it.img}" alt="">`;
      b.addEventListener('click', it.go);
      host.appendChild(b);
    });
    $('#pCap').textContent = st.view === 'scene' ? `${SCENES[st.scene].name}: ${p.name}, ${SP.PATTERNS[p.patterns[0]].toLowerCase()}, ${SP.colorById(st.c).name.toLowerCase()}. Плитка нарисована по фото поверхности с сайта завода.` : (studio.includes(photoUrl) ? p.name + ' — фото изделия.' : photoUrl === drawUrl ? 'Чертёж с размерами из прайса завода, мм.' : SPH.captions[photoUrl] ? SPH.captions[photoUrl].replace(/^Фото \d+\.\s*/, '') + ' — фото с сайта завода.' : 'Фото с сайта завода.');
  }
  $('#pToKon').hidden = !tile;
  $('#pToKon').href = `konstruktor.html?id=${p.id}`;

  // ---------- варианты ----------
  function chips(host, opts, active, onPick) {
    host.innerHTML = '';
    opts.forEach(([id, label]) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'chip' + (String(id) === String(active) ? ' on' : ''); b.textContent = label; b.setAttribute('aria-pressed', String(id) === String(active));
      b.addEventListener('click', () => onPick(id));
      host.appendChild(b);
    });
  }
  const cb = $('#pColors');
  colors.forEach(c => {
    const b = document.createElement('button');
    b.type = 'button'; b.dataset.id = c.id; b.dataset.name = c.name; b.title = c.name; b.setAttribute('aria-label', c.name);
    b.innerHTML = tile ? '<img alt="">' : c.tex ? `<img alt="" src="${c.tex}">` : `<span style="display:block;aspect-ratio:1;background:${swatchBg(c)}"></span>`;
    b.addEventListener('click', () => { st.c = c.id; if (p.onRequest) { cb.querySelectorAll('button').forEach(x => x.classList.toggle('on', x.dataset.id === st.c)); $('#pCName').textContent = c.name; } else paint(); if (kb && st.view === 'scene') { kb.set(design()); thumbs(); } else if (st.view === 'photo' && colorPhoto()) showPhoto(colorPhoto()); else thumbs(); });
    cb.appendChild(b);
  });
  if (tile) {
    let i = 0;
    const next = () => { const b = cb.children[i++]; if (!b) return; b.querySelector('img').src = Paving.swatch({ form: p.model, pattern: p.patterns[0], ...SP.look(b.dataset.id), surface: 'smooth' }, 110, 0.6); setTimeout(next, 0); };
    texReady.then(() => setTimeout(next, 60));
  }
  function paint() {
    const hs = SP.heightsOf(p);
    chips($('#pHeights'), hs.map(h => [h, h + ' мм']), st.h, h => { st.h = +h; if (!SP.surfacesOf(p, st.h).includes(st.s)) st.s = 'smooth'; paint(); });
    $('#pHName').textContent = st.h + ' мм';
    const ss = SP.surfacesOf(p, st.h);
    $('#optS').hidden = ss.length < 2;
    chips($('#pSurf'), ss.map(s => [s, SP.SURFACES[s]]), st.s, s => { st.s = s; paint(); if (kb && st.view === 'scene') kb.set(design()); });
    $('#pSName').textContent = SP.SURFACES[st.s];
    cb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === st.c));
    $('#pCName').textContent = SP.colorById(st.c).name;
    $('#pPrimerka').href = `primerka.html?id=${p.id}&color=${st.c}&surface=${st.s}`;
    $('#pToKon').href = `konstruktor.html?id=${p.id}&color=${st.c}&surface=${st.s}`;
    calc();
  }

  // ---------- расчёт ----------
  const qty = $('#qty');
  function calc() {
    const price = SP.priceOf(p, st.h, st.s, st.c), n = Math.max(1, +qty.value || 1);
    const amount = p.unit === 'м²' && $('#reserve').checked ? Math.ceil(n * 1.05) : n;
    $('#pPrice').innerHTML = `${SP.money(price)} <small>₽/${unitWord}</small>`;
    $('#pTotal').textContent = SP.money(price * amount) + ' ₽';
    const meta = [];
    if (p.unit === 'м²') {
      meta.push(['Купить', amount + ' м²']);
      if (p.pcs) meta.push(['Камней', '≈ ' + SP.money(Math.round(p.pcs * amount)) + ' шт']);
      const kg = SP.weightM2(st.h) * amount; meta.push(['Вес', '≈ ' + (kg >= 1000 ? (Math.round(kg / 100) / 10).toString().replace('.', ',') + ' т' : SP.money(kg) + ' кг')]);
    } else {
      meta.push(['Количество', amount + ' шт']);
      if (p.bordur && p.sizes[0][0] >= 390) meta.push(['Длина линии', '≈ ' + (Math.round(amount * p.sizes[0][0] / 100) / 10) + ' м']);
      meta.push(['Цена за шт', SP.money(price) + ' ₽']);
    }
    $('#meta').innerHTML = meta.map(([a, b]) => `<div>${a}<b>${b}</b></div>`).join('');
    return { price, amount };
  }
  qty.addEventListener('input', calc);
  $('#reserve').addEventListener('change', calc);
  const step = p.unit === 'м²' ? 5 : 10;
  $('#qMinus').addEventListener('click', () => { qty.value = Math.max(1, (+qty.value || 0) - step); calc(); });
  $('#qPlus').addEventListener('click', () => { qty.value = (+qty.value || 0) + step; calc(); });
  $('#toCart').addEventListener('click', () => {
    const { price, amount } = calc();
    cart.add({ id: p.id, h: st.h, s: st.s, c: st.c, qty: amount, price });
    toast(`В корзине: ${p.name}, ${amount} ${unitWord}. <a href="cart.html">Перейти в корзину</a>`);
  });
  $('#oneClick').addEventListener('click', () => {
    const { price, amount } = calc();
    openModal({ title: 'Купить в 1 клик', text: 'Оставьте телефон — менеджер уточнит наличие, доставку и оформит заказ.', button: 'Оформить заказ', comment: true,
      summary: `${p.name}, ${SP.colorById(st.c).name.toLowerCase()}, ${SP.SURFACES[st.s].toLowerCase()} слой, ${st.h} мм\n${amount} ${unitWord} × ${SP.money(price)} ₽ = ${SP.money(price * amount)} ₽` });
  });
  const favBtn = $('#pFav');
  const favPaint = () => { const on = fav.has(p.id); favBtn.classList.toggle('on', on); favBtn.querySelector('span').textContent = on ? 'В избранном' : 'В избранное'; };
  favBtn.addEventListener('click', () => { const on = fav.toggle(p.id); favPaint(); toast(on ? 'Добавлено в избранное' : 'Убрано из избранного'); });
  favPaint();

  // ---------- вкладки ----------
  document.querySelectorAll('.tab-btns button').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.tab-btns button').forEach(x => x.classList.toggle('on', x === b));
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('on', t.id === b.dataset.tab));
  }));
  const hs = SP.heightsOf(p);
  const spec = p.onRequest ? [['Категория', SP.CATS[p.cat]], ['Размеры, цвета, цена', 'уточните у менеджера: +7 988 333-64-00'], ['Технология', 'полусухое вибропрессование'], ['Единица продажи', p.unit === 'м²' ? 'квадратный метр' : 'штука']] : [
    ['Категория', SP.CATS[p.cat]], ['Размеры', p.sizes.map(s => s.join(' × ')).join('; ') + ' мм' + (p.sizeNote ? ' (' + p.sizeNote + ')' : '')],
    [($('#hLabel').textContent), hs.join(', ') + ' мм'],
    p.set ? ['Комплект', 'набор из ' + p.sizes.length + ' размеров'] : null,
    p.pcs && p.unit === 'м²' ? ['Камней в 1 м²', '≈ ' + p.pcs + ' шт' + (p.pcsNote ? ' (' + p.pcsNote + ')' : '')] : null,
    p.unit === 'м²' ? ['Вес 1 м²', hs.map(h => '≈ ' + SP.weightM2(h) + ' кг (' + h + ' мм)').join(', ')] : null,
    ['Фактура лицевого слоя', [...new Set(hs.flatMap(h => SP.surfacesOf(p, h)))].map(s => SP.SURFACES[s].toLowerCase()).join(', ')],
    ['Цвета', colors.map(c => c.name.toLowerCase()).join(', ')],
    ['Рисунки укладки', p.patterns ? p.patterns.map(k => SP.PATTERNS[k].toLowerCase()).join(', ') : '—'],
    ['Технология', 'полусухое вибропрессование, двухслойная (серое основание + цветной лицевой слой)'],
    ['Сырьё', 'цемент М600 Д0, щебень и песок мелкой фракции'],
    ['Единица продажи', p.unit === 'м²' ? 'квадратный метр' : 'штука'],
  ].filter(Boolean);
  $('#spec').innerHTML = spec.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('');
  $('#t3').innerHTML = `<p>${p.text}</p><p>Плитка изготовлена на заводе в Славянске-на-Кубани. Прочность выше нормы ГОСТ в 2 раза, продукция ежегодно проходит проверку в аккредитованной лаборатории.</p><p>Образцы всех форм и цветов можно посмотреть на выставочной площадке завода: ул. Совхозная, 1.</p>`;
  // таблица цен как в прайсе
  if (p.prices) {
    const G = ['серый', 'красный, коричневый, чёрный', 'жёлтый, оранжевый', 'белый', 'колормикс'];
    let html = '<table class="price-table"><thead><tr><th>' + $('#hLabel').textContent + '</th><th>Фактура</th>' + G.map(g => `<th>${g}</th>`).join('') + '</tr></thead><tbody>';
    for (const h of hs) for (const s of SP.surfacesOf(p, h)) {
      const row = p.prices[h][s];
      const cells = s === 'marble' ? [`<td colspan="4">${SP.money(row[0])} (однотонный)</td>`, `<td>${SP.money(row[1])}</td>`] : row.map(v => `<td>${SP.money(v)}</td>`);
      html += `<tr><td>${h} мм</td><td>${SP.SURFACES[s]}</td>${cells.join('')}</tr>`;
    }
    $('#ptable').innerHTML = html + '</tbody></table>';
  } else if (p.blockPrice) {
    $('#ptable').innerHTML = '<table class="price-table"><thead><tr><th>Цвет</th><th>Цена за шт</th></tr></thead><tbody>' + Object.entries(p.blockPrice).map(([c, v]) => `<tr><td>${SP.colorById(c).name}</td><td>${SP.money(v)} ₽</td></tr>`).join('') + '</tbody></table>';
  } else $('#ptable').innerHTML = p.onRequest ? '<p>Цена по запросу — этого изделия нет в прайс-листе от 01.06.2025.</p>' : `<p>${SP.money(p.fixedPrice)} ₽ за штуку.</p>`;
  // похожие
  const rel = p.cat === 'plitka' ? ['porebrik-trot', 'porebrik-sharn', 'palisad-round', 'bordyur-dor'] : ['novy', 'bruschatka', 'stary', 'myunhen'];
  $('#related').innerHTML = rel.map(SP.byId).filter(Boolean).map(cardHTML).join('');

  if (p.onRequest) {
    ['#optH', '#optS'].forEach(x => { $(x).hidden = true; });
    if (!tile) $('#pColors').closest('.opt').hidden = true;
    const buy = document.querySelector('.buy');
    buy.innerHTML = '<div class="buy-prices"><div class="now" style="font-size:24px">Цена по запросу</div></div><p class="muted" style="margin:10px 0 14px">Этого изделия нет в прайс-листе. Менеджер подскажет размеры, цвета, наличие и цену.</p><div class="buy-btns"><button class="btn btn-main" type="button" id="askPrice">Узнать цену и наличие</button><a class="btn btn-line" href="tel:+79883336400">Позвонить</a></div>';
    $('#askPrice').addEventListener('click', () => openModal({ title: 'Узнать цену', text: 'Менеджер перезвонит и расскажет о размерах, цветах и наличии.', summary: p.name, button: 'Отправить', comment: true }));
    if (tile) { cb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === st.c)); $('#pCName').textContent = SP.colorById(st.c).name; showScene(0); } else showPhoto();
    return;
  }
  paint();
  if (tile && Paving.hasWebGL()) showScene(+(q.get('scene') || 0)); else showPhoto();
})();
