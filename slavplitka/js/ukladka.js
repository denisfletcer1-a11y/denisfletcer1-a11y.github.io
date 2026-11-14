(function () {
  const g = document.getElementById('layObjs');
  if (!g || !window.OBJECTS) return;
  g.innerHTML = OBJECTS.slice(0, 8).map(o => `<figure class="obj" data-zoom><img src="${o.img}" alt="${o.name}" loading="lazy"><figcaption><b>№${o.n}</b><a href="product.html?id=${o.pid}">${o.name}</a></figcaption></figure>`).join('');
})();
