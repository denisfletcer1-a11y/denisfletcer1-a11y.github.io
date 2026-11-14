// Чёткие чертежи изделий с размерами (SVG): плитка — вид сверху каждого камня набора, бордюры и блоки — в изометрии
(function () {
  'use strict';
  const INK = '#2b2622', ACC = '#9a5132', FILL = '#ece6dd', FILL2 = '#d9d0c4', SIDE = '#c8bdaf';
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-family="Inter,Arial,sans-serif" font-size="${o.size || 15}" font-weight="${o.w || 500}" fill="${o.fill || INK}" text-anchor="${o.anchor || 'middle'}"${o.rot ? ` transform="rotate(${o.rot} ${x} ${y})"` : ''}>${esc(s)}</text>`;
  // размерная линия со стрелками и выносками
  function dim(x1, y1, x2, y2, label, off = 18, side = 1) {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1, nx = -dy / L * side, ny = dx / L * side;
    const a = [x1 + nx * off, y1 + ny * off], b = [x2 + nx * off, y2 + ny * off];
    const ang = Math.atan2(dy, dx) * 180 / Math.PI, rot = ang > 90 || ang < -90 ? ang + 180 : ang;
    const mx = (a[0] + b[0]) / 2 + nx * 13, my = (a[1] + b[1]) / 2 + ny * 13 + 5;
    return `<g stroke="${ACC}" stroke-width="1.2" fill="none">
      <line x1="${x1 + nx * 4}" y1="${y1 + ny * 4}" x2="${a[0] + nx * 6}" y2="${a[1] + ny * 6}"/><line x1="${x2 + nx * 4}" y1="${y2 + ny * 4}" x2="${b[0] + nx * 6}" y2="${b[1] + ny * 6}"/>
      <line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" marker-start="url(#ar)" marker-end="url(#ar)"/></g>` + txt(mx, my, label, { fill: ACC, size: 18, w: 600, rot: Math.abs(rot) > 1 ? rot : 0 });
  }
  const wrap = (w, h, body, title) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><defs><marker id="ar" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1 L9 5 L0 9 z" fill="${ACC}"/></marker></defs><rect width="100%" height="100%" fill="#fbf9f6"/>${title ? txt(w / 2, 38, title, { size: 22, w: 600 }) : ''}${body}</svg>`;

  // ---------- плитка: каждый камень набора сверху ----------
  function tileTop(p) {
    const sizes = p.sizes.slice(0, 4), gap = 70, sumL = sizes.reduce((a, s) => a + s[0], 0), maxW = Math.max(...sizes.map(s => s[1]));
    const k = Math.min((640 - gap * (sizes.length - 1)) / sumL, 300 / maxW, 2.4);
    const total = sumL * k + gap * (sizes.length - 1);
    let x = 380 - total / 2 + 20, body = '';
    sizes.forEach(([L, Wd]) => {
      const w = L * k, h = Wd * k, y = 100 + (300 - h) / 2;
      body += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(10, w / 10)}" fill="${FILL}" stroke="${INK}" stroke-width="2"/>`;
      body += `<rect x="${x + 6}" y="${y + 6}" width="${w - 12}" height="${h - 12}" rx="${Math.min(7, w / 12)}" fill="none" stroke="${FILL2}" stroke-width="1.4"/>`;
      body += dim(x, y + h, x + w, y + h, L, 24, 1);
      body += dim(x, y, x, y + h, Wd, 22, 1);
      x += w + gap;
    });
    const hs = SP.heightsOf(p);
    body += txt(380, 480, `Высота (толщина): ${hs.join(', ')} мм${p.set ? ' · набор из ' + p.sizes.length + ' размеров' : ''}`, { size: 18 });
    body += txt(380, 515, 'Размеры в миллиметрах', { size: 15, fill: '#776d65', w: 400 });
    return wrap(760, 540, body, p.name + ' — размеры камней');
  }

  // ---------- изометрия: брусок с профилем ----------
  const ISO = (x, y, z, s, ox, oy) => [ox + (x - z) * Math.cos(Math.PI / 6) * s, oy + ((x + z) * Math.sin(Math.PI / 6) - y) * s];
  function isoBox(L, H, Wd, label, opts = {}) {
    const s = Math.min(600 / ((L + Wd) * 0.866), 380 / (H + (L + Wd) * 0.5));
    const ox = 380 - (L - Wd) * 0.866 * s / 2, oy = 85 + H * s;
    const P = (x, y, z) => ISO(x, y, z, s, ox, oy);
    const pts = a => a.map(q => q.join(',')).join(' ');
    const r = opts.round ? Math.min(Wd / 2, H / 2) : 0;
    let top, front, side;
    top = [P(0, H, 0), P(L, H, 0), P(L, H, Wd), P(0, H, Wd)];
    front = [P(0, 0, Wd), P(L, 0, Wd), P(L, H, Wd), P(0, H, Wd)];
    side = [P(L, 0, 0), P(L, 0, Wd), P(L, H, Wd), P(L, H, 0)];
    let body = `<polygon points="${pts(side)}" fill="${SIDE}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="${pts(front)}" fill="${FILL2}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="${pts(top)}" fill="${FILL}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>`;
    if (opts.chamfer) {   // скос у дорожного бордюра
      const c = opts.chamfer;
      body += `<polygon points="${pts([P(0, H - c, Wd), P(L, H - c, Wd), P(L, H, Wd - c), P(0, H, Wd - c)])}" fill="#e3dbd0" stroke="${INK}" stroke-width="1.2"/>`;
    }
    if (opts.holes) opts.holes.forEach(([hx, hz, hw, hd]) => { body += `<polygon points="${pts([P(hx, H, hz), P(hx + hw, H, hz), P(hx + hw, H, hz + hd), P(hx, H, hz + hd)])}" fill="#8f857a" stroke="${INK}" stroke-width="1.2"/>`; });
    if (opts.round) body += `<path d="M${P(L, H, Wd / 2).join(',')}" />`;
    body += dim(...P(0, 0, Wd), ...P(L, 0, Wd), L, 24, 1);
    body += dim(...P(L, 0, Wd), ...P(L, 0, 0), Wd, 24, 1);
    body += dim(...P(0, 0, Wd), ...P(0, H, Wd), H, 24, -1);
    return wrap(760, 540, body + txt(380, 520, 'Размеры в миллиметрах', { size: 15, fill: '#776d65', w: 400 }), label);
  }
  function cylinder(D, H, label) {
    const s = 330 / H, rx = D / 2 * s, ry = rx * 0.35, cx = 380, top = 100, bot = top + H * s;
    let body = `<path d="M${cx - rx} ${top} V${bot} A${rx} ${ry} 0 0 0 ${cx + rx} ${bot} V${top}" fill="${FILL2}" stroke="${INK}" stroke-width="2"/>
      <ellipse cx="${cx}" cy="${top}" rx="${rx}" ry="${ry}" fill="${FILL}" stroke="${INK}" stroke-width="2"/>`;
    body += dim(cx - rx, bot + ry, cx + rx, bot + ry, 'Ø ' + D, 26, -1);
    body += dim(cx - rx, top, cx - rx, bot, H, 26, -1);
    return wrap(760, 540, body + txt(380, 520, 'Размеры в миллиметрах', { size: 15, fill: '#776d65', w: 400 }), label);
  }

  function svgFor(p) {
    if (!p || p.onRequest) return null;
    const h = SP.heightsOf(p);
    switch (p.model) {
      case 'porebrik': return isoBox(1000, 200, h[h.length - 1], p.name + ' — размеры');
      case 'sharnir': return isoBox(390, 200, 80, p.name + ' — размеры');
      case 'primyk': return isoBox(500, 70, 200, p.name + ' — размеры');
      case 'bordyurDor': return isoBox(1000, 300, 150, p.name + ' — размеры', { chamfer: 40 });
      case 'palisadRound': return cylinder(120, 300, p.name + ' — размеры');
      case 'palisadSq': return isoBox(120, 300, 120, p.name + ' — размеры');
      case 'gazon': return isoBox(600, 80, 400, p.name + ' — размеры', { holes: [[60, 60, 110, 110], [245, 60, 110, 110], [430, 60, 110, 110], [60, 230, 110, 110], [245, 230, 110, 110], [430, 230, 110, 110]] });
      case 'blok120': return isoBox(390, 120, 190, p.name + ' — размеры', { holes: [[40, 40, 130, 110], [220, 40, 130, 110]] });
      case 'blok190': case 'blokSkala': return isoBox(390, 190, 190, p.name + ' — размеры', { holes: [[40, 40, 130, 110], [220, 40, 130, 110]] });
      case 'blok3': return isoBox(390, 190, 190, p.name + ' — размеры', { holes: [[35, 55, 90, 80], [150, 55, 90, 80], [265, 55, 90, 80]] });
      case 'taktil': return isoBox(300, 80, 300, p.name + ' — размеры');
      default: return p.sizes ? tileTop(p) : null;
    }
  }
  window.DRAW = { url: p => { const s = svgFor(p); return s ? 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s) : null; } };
})();
