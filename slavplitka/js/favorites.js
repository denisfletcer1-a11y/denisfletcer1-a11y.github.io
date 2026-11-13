(function () {
  'use strict';
  const { $, fav, cardHTML } = window.UI, SP = window.SP;
  function render() {
    const list = fav.list().map(SP.byId).filter(Boolean), g = $('#favGrid');
    g.innerHTML = list.length ? list.map(cardHTML).join('') : '<div class="empty-box" style="grid-column:1/-1"><h3>Здесь пока пусто</h3><p>Нажмите на сердечко у товара, чтобы сохранить его.</p><a class="btn btn-main" href="catalog.html">В каталог</a></div>';
  }
  document.addEventListener('fav:change', render);
  render();
})();
