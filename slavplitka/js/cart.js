// Корзина: позиции с количеством, итог, оформление заказа (демо)
(function () {
  'use strict';
  const { $, cart, imgOf, fakeSend } = window.UI, SP = window.SP;
  function render() {
    const list = cart.items(), host = $('#cartList');
    if (!list.length) {
      $('#cartLayout').style.gridTemplateColumns = '1fr';
      $('#cartSide').hidden = true;
      host.innerHTML = '<div class="empty-box"><h3>Корзина пока пуста</h3><p>Выберите плитку в каталоге или соберите двор в конструкторе.</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn btn-main" href="catalog.html">В каталог</a><a class="btn btn-line" href="konstruktor.html">Конструктор двора</a></div></div>';
      return;
    }
    $('#cartLayout').style.gridTemplateColumns = ''; $('#cartSide').hidden = false;
    let total = 0;
    host.innerHTML = list.map(it => {
      const p = SP.byId(it.id); if (!p) return '';
      const unit = p.unit === 'м²' ? 'м²' : 'шт', sum = it.price * it.qty; total += sum;
      const surf = p.prices ? ', ' + SP.SURFACES[it.s].toLowerCase() + ' слой' : '';
      return `<div class="ci" data-key="${cart.key(it)}">
        <a class="ph" href="product.html?id=${p.id}&color=${it.c}&surface=${it.s}"><img src="${imgOf(p)}" alt=""></a>
        <div><h3><a href="product.html?id=${p.id}&color=${it.c}&surface=${it.s}">${p.name}</a></h3><p class="meta">${SP.colorById(it.c).name}${surf}, ${it.h} мм · ${SP.money(it.price)} ₽/${unit}</p></div>
        <div class="right"><div class="qty"><button type="button" data-d="-1" aria-label="Меньше">−</button><input type="number" min="1" value="${it.qty}" aria-label="Количество"><span>${unit}</span><button type="button" data-d="1" aria-label="Больше">+</button></div>
        <span class="sum">${SP.money(sum)} ₽</span><button class="del" type="button" aria-label="Удалить"><svg class="ic"><use href="#i-trash"/></svg></button></div></div>`;
    }).join('');
    $('#sbCount').textContent = list.length;
    $('#sbTotal').textContent = SP.money(total) + ' ₽';
  }
  $('#cartList').addEventListener('click', e => {
    const row = e.target.closest('.ci'); if (!row) return;
    const k = row.dataset.key;
    if (e.target.closest('.del')) { cart.remove(k); render(); return; }
    const b = e.target.closest('[data-d]');
    if (b) { const inp = row.querySelector('input'), p = SP.byId(k.split('|')[0]), stp = p.unit === 'м²' ? 5 : 10; cart.setQty(k, Math.max(1, (+inp.value || 0) + stp * +b.dataset.d)); render(); }
  });
  $('#cartList').addEventListener('change', e => {
    const row = e.target.closest('.ci'); if (!row || e.target.type !== 'number') return;
    cart.setQty(row.dataset.key, Math.max(1, +e.target.value || 1)); render();
  });
  document.querySelectorAll('input[name=how]').forEach(r => r.addEventListener('change', () => {
    const pick = document.querySelector('input[name=how]:checked').value === 'pickup';
    $('#addrWrap').hidden = pick; $('#sbDel').textContent = pick ? 'самовывоз, ул. Совхозная, 1' : 'рассчитает менеджер';
  }));
  $('#order').addEventListener('submit', e => {
    e.preventDefault();
    if (fakeSend(e.target, $('#orderNote'), 'Заказ принят! На готовом сайте он сразу придёт менеджеру, а вам — SMS с номером заказа. В демо заказ никуда не отправляется.')) {}
  });
  render();
})();
