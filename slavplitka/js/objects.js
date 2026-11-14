// Галерея объектов: фото укладки с сайта завода, пронумерованные, с привязкой к изделию
(function () {
  const P = window.SITE_PHOTOS || {}, SP = window.SP, list = [];
  const map = { kvadrat100: 'kvadrat', blok: 'blok-190', elementy: 'elementy', 'dekor-blok': 'dekor-blok' };
  Object.keys(P).forEach(k => {
    const pid = map[k] || k, p = SP && SP.byId(pid);
    if (!p) return;
    P[k].gallery.forEach(u => {
      const cap = (P[k].captions[u] || '').replace(/^Фото \d+\.\s*/, '');
      if (/Форма, размер|ширина \d+мм/i.test(cap)) return;
      list.push({ img: u, pid, name: p.name, cap });
    });
  });
  list.forEach((o, i) => { o.n = 101 + i; });
  window.OBJECTS = list;
})();
