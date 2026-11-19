// Галерея объектов: фото укладки с сайта завода, пронумерованные, с привязкой к изделию
(function () {
  const P = window.SITE_PHOTOS || {}, SP = window.SP, list = [];
  // студийные фото изделий и чертежи — не объекты (отобраны по белому фону, проверено глазами)
  const STUDIO = new Set(["img/site/novy/00.webp", "img/site/novy/05.webp", "img/site/brook/02.webp", "img/site/trilistnik/00.webp", "img/site/trilistnik/01.webp", "img/site/trilistnik/05.webp", "img/site/taktil/00.webp", "img/site/taktil/01.webp", "img/site/taktil/02.webp", "img/site/gazon/00.webp", "img/site/gazon/01.webp", "img/site/bordyur-dor/00.webp", "img/site/porebrik-trot/00.webp", "img/site/porebrik-sharn/05.webp", "img/site/blok/00.webp", "img/site/blok/01.webp", "img/site/blok/02.webp", "img/site/triada/00.webp", "img/site/trapeciya/00.webp", "img/site/trapeciya/01.webp", "img/site/trapeciya/02.webp", "img/site/vazon/00.webp", "img/site/dekor-blok/00.webp", "img/site/dekor-blok/01.webp", "img/site/dekor-blok/02.webp", "img/site/dekor-blok/03.webp", "img/site/elementy/00.webp", "img/site/elementy/01.webp", "img/site/elementy/02.webp", "img/site/elementy/03.webp"]);
  const map = { kvadrat100: 'kvadrat', blok: 'blok-190', elementy: 'elementy', 'dekor-blok': 'dekor-blok' };
  Object.keys(P).forEach(k => {
    const pid = map[k] || k, p = SP && SP.byId(pid);
    if (!p) return;
    P[k].gallery.forEach(u => {
      const cap = (P[k].captions[u] || '').replace(/^Фото \d+\.\s*/, '');
      if (/Форма, размер|ширина \d+мм/i.test(cap)) return;
      if (STUDIO.has(u)) return;
      list.push({ img: u, pid, name: p.name, cap });
    });
  });
  list.forEach((o, i) => { o.n = 101 + i; });
  window.OBJECTS = list;
})();
