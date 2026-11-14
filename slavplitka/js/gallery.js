// Фотогалерея с фильтром по изделию и «Посмотреть ещё», как у образца
(function () {
  const O = window.OBJECTS || [], f = document.getElementById('galFilter'), g = document.getElementById('galGrid'), more = document.getElementById('galMore');
  let cur = new URLSearchParams(location.search).get('id') || 'all', shown = 0;
  const counts = {}; O.forEach(o => { counts[o.pid] = (counts[o.pid] || 0) + 1; });
  const ids = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  function chips() {
    f.innerHTML = [['all', 'Все объекты', O.length], ...ids.map(id => [id, SP.byId(id).name, counts[id]])]
      .map(([id, n, c]) => `<button class="chip${id === cur ? ' on' : ''}" type="button" data-id="${id}">${n} <small>${c}</small></button>`).join('');
  }
  const list = () => (cur === 'all' ? O : O.filter(o => o.pid === cur));
  function add(n) {
    const part = list().slice(shown, shown + n);
    g.insertAdjacentHTML('beforeend', part.map(o => `<figure class="obj" data-zoom><img src="${o.img}" alt="${o.name}" loading="lazy"><figcaption><b>№${o.n}</b><a href="product.html?id=${o.pid}">${o.name}</a></figcaption></figure>`).join(''));
    shown += part.length;
    more.hidden = shown >= list().length;
  }
  function reset() { g.innerHTML = ''; shown = 0; chips(); add(12); }
  f.addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (!b) return; cur = b.dataset.id; reset(); });
  more.addEventListener('click', () => add(12));
  reset();
})();
