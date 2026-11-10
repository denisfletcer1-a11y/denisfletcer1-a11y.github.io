/* Примерка панелей Экосимпл на фото дома.
   Стена = четырёхугольник на фото. Гомография «единичный квадрат → стена» даёт перспективу,
   текстура панели кладётся в метрах (1480×360 мм), свет берётся с размытого фото. Всё в браузере, WebGL2. */
(() => {
  'use strict';
  const D = window.ECO_DATA;
  const $ = (s) => document.querySelector(s);
  const MAX_SIDE = 1600, MAX_ZONES = 6, MAX_HOLES = 8, RESERVE = 1.07;
  const PANELS = new Map(D.panels.map((p) => [p.code, p]));
  const CAT_NAME = Object.fromEntries(D.cats.map((c) => [c.id, c.name]));
  const TEXTURE_WORD = { stone: 'под камень', brick: 'под кирпич', plaster: 'под штукатурку', concrete: 'под бетон', smooth: 'гладкая', premium: 'фотокерамика' };
  const fmt = (n, d = 0) => n.toLocaleString('ru-RU', { minimumFractionDigits: d, maximumFractionDigits: d });
  const rub = (n) => fmt(Math.round(n / 100) * 100) + ' ₽';

  const stage = $('#stage'), cv = $('#gl'), ov = $('#ov'), hl = $('#handles'), loupe = $('#loupe');
  const S = { img: null, iw: 0, ih: 0, zones: [], sel: 0, hole: -1, marks: true, compare: false, split: .5, cat: 'stone', isDemo: true, touched: false, mode: '3d', roof: 'flat', depth: 0 };
  let photoCanvas = null, lumSmall = null;

  /* ---------- WebGL ---------- */
  const gl = cv.getContext('webgl2', { premultipliedAlpha: false, preserveDrawingBuffer: true, antialias: false });
  if (!gl) {
    stage.innerHTML = '<p style="padding:24px;text-align:center">Ваш браузер не поддерживает примерку. Откройте страницу в свежем Chrome, Safari, Яндекс Браузере или Firefox.</p>';
    return;
  }
  const aniso = gl.getExtension('EXT_texture_filter_anisotropic');
  const VS = `#version 300 es
  in vec2 a; out vec2 v; void main(){ v = a * .5 + .5; gl_Position = vec4(a, 0., 1.); }`;
  const FS_PHOTO = `#version 300 es
  precision highp float; in vec2 v; uniform sampler2D uP; out vec4 o;
  void main(){ o = vec4(texture(uP, vec2(v.x, 1. - v.y)).rgb, 1.); }`;
  // уменьшенная копия + размытие по Гауссу (два прохода), из неё берётся свет на стене
  const FS_DOWN = `#version 300 es
  precision highp float; in vec2 v; uniform sampler2D uP; out vec4 o;
  void main(){ o = vec4(textureLod(uP, vec2(v.x, 1. - v.y), 2.).rgb, 1.); }`;
  const FS_BLUR = `#version 300 es
  precision highp float; in vec2 v; uniform sampler2D uT; uniform vec2 uDir; uniform float uSig; out vec4 o;
  void main(){ vec3 s = vec3(0.); float w = 0.;
    for (int i = -14; i <= 14; i++) { float f = float(i); float k = exp(-f * f / (2. * uSig * uSig)); s += texture(uT, v + uDir * f).rgb * k; w += k; }
    o = vec4(s / w, 1.); }`;
  const FS_ZONE = `#version 300 es
  precision highp float;
  uniform sampler2D uBlur, uTex; uniform vec2 uImg; uniform mat3 uH; uniform vec2 uQ[4]; uniform vec2 uHo[${MAX_HOLES * 4}]; uniform int uNH;
  uniform vec2 uWall, uTile; uniform int uKind; uniform float uLavg, uExpo, uSplit; uniform vec3 uTint;
  out vec4 o;
  const vec3 LW = vec3(.2126, .7152, .0722);
  float side(vec2 p, vec2 a, vec2 b, float s){ vec2 e = b - a; return s * (e.x * (p.y - a.y) - e.y * (p.x - a.x)) / max(length(e), 1e-4); }
  float sgn4(vec2 a, vec2 b, vec2 c, vec2 d){ float r = (a.x*b.y-b.x*a.y)+(b.x*c.y-c.x*b.y)+(c.x*d.y-d.x*c.y)+(d.x*a.y-a.x*d.y); return r >= 0. ? 1. : -1.; }
  float inside(vec2 p, vec2 a, vec2 b, vec2 c, vec2 d){ float s = sgn4(a,b,c,d);
    return min(min(side(p,a,b,s), side(p,b,c,s)), min(side(p,c,d,s), side(p,d,a,s))); }
  vec2 hash2(vec2 q){ q = vec2(dot(q, vec2(127.1, 311.7)), dot(q, vec2(269.5, 183.3))); return fract(sin(q) * 43758.5453); }
  void main(){
    vec2 p = vec2(gl_FragCoord.x, uImg.y - gl_FragCoord.y);
    if (p.x < uSplit) discard;
    float cov = clamp(inside(p, uQ[0], uQ[1], uQ[2], uQ[3]) + .5, 0., 1.);
    for (int i = 0; i < ${MAX_HOLES}; i++) { if (i >= uNH) break;
      float h = clamp(inside(p, uHo[i*4], uHo[i*4+1], uHo[i*4+2], uHo[i*4+3]) + .5, 0., 1.); cov *= 1. - h; }
    if (cov <= 0.) discard;
    vec3 st = uH * vec3(p, 1.); vec2 w = st.xy / st.z;          // 0..1 по стене, t = 0 сверху
    float xm = w.x * uWall.x, ym = (1. - w.y) * uWall.y;        // метры от левого нижнего угла
    vec3 c;
    if (uKind == 0) {
      vec2 uv = vec2(xm / uTile.x, 1. - ym / uTile.y);
      c = texture(uTex, uv, .35).rgb;
    } else {
      // фотокерамика: каждая панель 1480×360 мм берёт свой кусок рисунка, шов 4 мм
      float rowf = ym / .36, row = floor(rowf), fy = fract(rowf);
      float colf = xm / 1.48 + .5 * mod(row, 2.), col = floor(colf), fx = fract(colf);
      vec2 h = hash2(vec2(row, col));
      float u = h.x > .5 ? 1. - fx : fx;
      float span = .36 / uTile.y;
      vec2 uv = vec2(u, h.y * (1. - span) + (1. - fy) * span);
      vec2 g = vec2(xm / 1.48, ym / uTile.y);
      c = textureGrad(uTex, uv, dFdx(g) * vec2(1., -1.), dFdy(g) * vec2(1., -1.)).rgb;
      vec2 jw = fwidth(vec2(colf, rowf)) + vec2(.004 / 1.48, .004 / .36);
      float jx = smoothstep(0., jw.x, fx) * smoothstep(0., jw.x, 1. - fx);
      float jy = smoothstep(0., jw.y, fy) * smoothstep(0., jw.y, 1. - fy);
      c *= mix(.45, 1., jx * jy);
    }
    float hgt = dot(c, LW); vec2 gr = vec2(dFdx(hgt), dFdy(hgt));
    c *= clamp(1. + (-gr.x + gr.y) * 3.2, .72, 1.3);                 // рельеф: свет сверху слева
    vec3 bl = texture(uBlur, vec2(p.x / uImg.x, 1. - p.y / uImg.y)).rgb;
    float shade = mix(1., clamp(dot(bl, LW) / uLavg, .72, 1.2), .55);
    float eave = 1. - .2 * exp(-(1. - ym / uWall.y) * uWall.y / .14);   // тень под карнизом/верхом стены
    vec3 lin = pow(c, vec3(2.2)) * pow(shade * uExpo * eave, 2.2);
    lin *= mix(vec3(1.), uTint, .3);
    vec3 col = pow(lin, vec3(1. / 2.2));
    col += (hash2(p).x - .5) * .018;
    o = vec4(col, cov);
  }`;
  function prog(fs) {
    const sh = (t, s) => { const x = gl.createShader(t); gl.shaderSource(x, s); gl.compileShader(x); if (!gl.getShaderParameter(x, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(x)); return x; };
    const p = gl.createProgram(); gl.attachShader(p, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs));
    gl.bindAttribLocation(p, 0, 'a'); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    const u = {}; const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) { const a = gl.getActiveUniform(p, i); const nm = a.name.replace('[0]', ''); u[nm] = gl.getUniformLocation(p, nm); }
    return { p, u };
  }
  const P_PHOTO = prog(FS_PHOTO), P_DOWN = prog(FS_DOWN), P_BLUR = prog(FS_BLUR), P_ZONE = prog(FS_ZONE);
  const vbo = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  function tex(src, repeat, mips) {
    const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
    const wrap = repeat ? gl.REPEAT : gl.CLAMP_TO_EDGE;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    if (mips) { gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); if (aniso) gl.texParameterf(gl.TEXTURE_2D, aniso.TEXTURE_MAX_ANISOTROPY_EXT, 8); }
    else gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    return t;
  }
  function target(w, h) {
    const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
    const f = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, f);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0);
    return { t, f, w, h };
  }
  let photoTex = null, blurA = null, blurB = null;
  const panelTex = new Map(), panelWait = new Map();

  function setPhotoGL(canvas) {
    for (const x of [photoTex]) if (x) gl.deleteTexture(x);
    for (const x of [blurA, blurB]) if (x) { gl.deleteTexture(x.t); gl.deleteFramebuffer(x.f); }
    photoTex = tex(canvas, false, true);
    const bw = Math.max(8, Math.round(S.iw / 4)), bh = Math.max(8, Math.round(S.ih / 4));
    blurA = target(bw, bh); blurB = target(bw, bh);
    const sig = Math.max(3, .022 * Math.max(bw, bh));
    gl.disable(gl.BLEND);
    gl.useProgram(P_DOWN.p); gl.bindFramebuffer(gl.FRAMEBUFFER, blurA.f); gl.viewport(0, 0, bw, bh);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, photoTex); gl.uniform1i(P_DOWN.u.uP, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    gl.useProgram(P_BLUR.p); gl.uniform1i(P_BLUR.u.uT, 0); gl.uniform1f(P_BLUR.u.uSig, sig / 2.2);
    for (let i = 0; i < 2; i++) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, blurB.f); gl.bindTexture(gl.TEXTURE_2D, blurA.t); gl.uniform2f(P_BLUR.u.uDir, 2.2 / bw, 0); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.bindFramebuffer(gl.FRAMEBUFFER, blurA.f); gl.bindTexture(gl.TEXTURE_2D, blurB.t); gl.uniform2f(P_BLUR.u.uDir, 0, 2.2 / bh); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  function loadPanel(id) {
    if (panelTex.has(id)) return Promise.resolve(panelTex.get(id));
    if (panelWait.has(id)) return panelWait.get(id);
    const pr = new Promise((res, rej) => {
      const im = new Image(); im.decoding = 'async';
      im.onload = () => { const t = tex(im, true, true); panelTex.set(id, t); panelWait.delete(id); res(t); };
      im.onerror = () => { panelWait.delete(id); rej(new Error('tex ' + id)); };
      im.src = 'tex/' + id + '.webp';
    });
    panelWait.set(id, pr); return pr;
  }

  /* ---------- геометрия ---------- */
  // гомография единичного квадрата (0,0),(1,0),(1,1),(0,1) в четырёхугольник p0..p3
  function sq2quad(q) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = q;
    const dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2, sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3;
    let g = 0, h = 0;
    if (Math.abs(sx) > 1e-9 || Math.abs(sy) > 1e-9) { const den = dx1 * dy2 - dx2 * dy1; g = (sx * dy2 - dx2 * sy) / den; h = (dx1 * sy - sx * dy1) / den; }
    return [x1 - x0 + g * x1, x3 - x0 + h * x3, x0, y1 - y0 + g * y1, y3 - y0 + h * y3, y0, g, h, 1];   // строки
  }
  function inv3(m) {
    const [a, b, c, d, e, f, g, h, i] = m, A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g, det = a * A + b * B + c * C;
    return [A / det, -(b * i - c * h) / det, (b * f - c * e) / det, B / det, (a * i - c * g) / det, -(a * f - c * d) / det, C / det, -(a * h - b * g) / det, (a * e - b * d) / det];
  }
  const apply = (m, x, y) => { const w = m[6] * x + m[7] * y + m[8]; return [(m[0] * x + m[1] * y + m[2]) / w, (m[3] * x + m[4] * y + m[5]) / w]; };
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const polyArea = (pts) => { let s = 0; for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; s += a[0] * b[1] - b[0] * a[1]; } return Math.abs(s) / 2; };
  function zoneHeight(z) {   // высота стены в метрах по пропорциям на фото
    const q = z.pts, hor = (dist(q[0], q[1]) + dist(q[3], q[2])) / 2, ver = (dist(q[0], q[3]) + dist(q[1], q[2])) / 2;
    return z.width * ver / Math.max(hor, 1);
  }
  function zoneArea(z) {
    const H = zoneHeight(z), inv = inv3(sq2quad(z.pts));
    let holes = 0; for (const h of z.holes) holes += polyArea(h.map((p) => apply(inv, p[0], p[1])));
    return { H, gross: z.width * H, net: Math.max(0, z.width * H * (1 - holes)) };
  }
  function inQuad(p, q) {   // точка внутри выпуклого четырёхугольника
    let s = 0;
    for (let i = 0; i < 4; i++) { const a = q[i], b = q[(i + 1) % 4], c = (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]); if (c !== 0) { if (s && Math.sign(c) !== s) return false; s = Math.sign(c); } }
    return true;
  }
  // средняя яркость и цвет стены на фото (по уменьшенной копии): для нормировки света и оттенка
  function zoneStats(z) {
    const { w, h, d } = lumSmall, k = w / S.iw;
    let n = 0, L = 0, r = 0, g = 0, b = 0;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const p = [(x + .5) / k, (y + .5) / k];
      if (!inQuad(p, z.pts) || z.holes.some((q) => inQuad(p, q))) continue;
      const i = (y * w + x) * 4; r += d[i]; g += d[i + 1]; b += d[i + 2]; n++;
    }
    if (!n) return { L: .5, tint: [1, 1, 1] };
    r /= n * 255; g /= n * 255; b /= n * 255;
    const lum = .2126 * r + .7152 * g + .0722 * b, m = Math.max(lum, .05);
    const tint = [r, g, b].map((c) => Math.min(1.25, Math.max(.8, c / m)));
    return { L: Math.max(lum, .08), tint };
  }

  /* ---------- отрисовка ---------- */
  let raf = 0;
  const redraw = () => { if (!raf) raf = requestAnimationFrame(draw); };
  function draw() {
    raf = 0;
    if (!photoTex) return;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, cv.width, cv.height);
    gl.disable(gl.BLEND);
    gl.useProgram(P_PHOTO.p); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, photoTex); gl.uniform1i(P_PHOTO.u.uP, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.useProgram(P_ZONE.p);
    const U = P_ZONE.u;
    gl.uniform2f(U.uImg, S.iw, S.ih);
    gl.uniform1f(U.uSplit, S.compare ? S.split * S.iw : -1);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, blurA.t); gl.uniform1i(U.uBlur, 1);
    for (const z of S.zones) {
      const pn = PANELS.get(z.panel[0]); const id = pn.variants[z.panel[1]].id;
      const t = panelTex.get(id);
      if (!t) { loadPanel(id).then(redraw, () => {}); continue; }
      if (!z.stats) z.stats = zoneStats(z);
      gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, t); gl.uniform1i(U.uTex, 2);
      const H = inv3(sq2quad(z.pts));
      gl.uniformMatrix3fv(U.uH, true, new Float32Array(H));
      gl.uniform2fv(U.uQ, new Float32Array(z.pts.flat()));
      const ho = new Float32Array(MAX_HOLES * 8); z.holes.slice(0, MAX_HOLES).forEach((q, i) => ho.set(q.flat(), i * 8));
      gl.uniform2fv(U.uHo, ho); gl.uniform1i(U.uNH, Math.min(z.holes.length, MAX_HOLES));
      gl.uniform2f(U.uWall, z.width, zoneHeight(z));
      gl.uniform2f(U.uTile, pn.size[0], pn.size[1]);
      gl.uniform1i(U.uKind, pn.kind === 'print' ? 1 : 0);
      gl.uniform1f(U.uLavg, z.stats.L); gl.uniform1f(U.uExpo, S.expo); gl.uniform3fv(U.uTint, z.stats.tint);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  }

  /* ---------- размер сцены ---------- */
  function layout() {
    if (!S.iw) return;
    const col = stage.parentElement.getBoundingClientRect().width;
    const wide = window.matchMedia('(min-width: 861px)').matches;
    if (S.mode === '3d') {
      const h3 = Math.round(Math.min(wide ? 640 : 560, Math.max(320, col * (wide ? .72 : .95))));
      stage.style.width = Math.round(col) + 'px'; stage.style.height = h3 + 'px';
      S.scale = 0; return;
    }
    const maxH = Math.min(wide ? 760 : 620, Math.max(360, col * (wide ? 1.05 : 1.25)));
    let w = col, h = col * S.ih / S.iw;
    if (h > maxH) { h = maxH; w = h * S.iw / S.ih; }
    stage.style.width = Math.round(w) + 'px'; stage.style.height = Math.round(h) + 'px';
    S.scale = S.iw / w;
    drawOverlay();
  }
  new ResizeObserver(() => layout()).observe(stage.parentElement);

  /* ---------- разметка (SVG + точки) ---------- */
  const NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, parent) { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent && parent.appendChild(e); return e; }
  function drawOverlay() {
    ov.innerHTML = ''; hl.innerHTML = '';
    if (S.mode === '3d' || !S.scale || !S.iw) return;
    ov.setAttribute('viewBox', `0 0 ${S.iw} ${S.ih}`); ov.setAttribute('preserveAspectRatio', 'none');
    ov.classList.toggle('off', !S.marks); hl.classList.toggle('off', !S.marks);
    S.zones.forEach((z, zi) => {
      const poly = el('polygon', { points: z.pts.map((p) => p.join(',')).join(' '), class: 'zone' + (zi === S.sel ? ' sel' : '') }, ov);
      poly.addEventListener('click', () => { select(zi, -1); });
      z.holes.forEach((q, hi) => {
        const hp = el('polygon', { points: q.map((p) => p.join(',')).join(' '), class: 'hole' + (zi !== S.sel ? ' dim' : '') + (zi === S.sel && hi === S.hole ? ' sel' : '') }, ov);
        if (zi === S.sel) hp.addEventListener('click', (e) => { e.stopPropagation(); select(zi, hi); });
      });
      // подпись стены
      const c = [z.pts.reduce((s, p) => s + p[0], 0) / 4, Math.min(...z.pts.map((p) => p[1]))];
      const fs = 12 * S.scale, g = el('g', { class: 'tag', transform: `translate(${c[0]},${c[1] + 14 * S.scale})` }, ov);
      const tw = (z.name.length * 7.2 + 16) * S.scale;
      el('rect', { x: -tw / 2, y: -fs * 1.05, width: tw, height: fs * 1.75, rx: fs * .85 }, g);
      const tx = el('text', { x: 0, y: fs * .3, 'text-anchor': 'middle', style: `font-size:${fs}px` }, g); tx.textContent = z.name;
    });
    const z = S.zones[S.sel]; if (!z) return;
    const pos = (p) => `left:${(p[0] / S.iw) * 100}%;top:${(p[1] / S.ih) * 100}%`;
    z.pts.forEach((p, i) => handle(pos(p), '', (q) => { z.pts[i] = q; }));
    z.holes.forEach((hq, hi) => hq.forEach((p, i) => handle(pos(p), 'hole', (q) => { hq[i] = q; }, () => { S.hole = hi; })));
  }
  function handle(style, cls, set, onDown) {
    const d = document.createElement('div'); d.className = 'hnd ' + cls; d.setAttribute('style', style); hl.appendChild(d);
    d.addEventListener('pointerdown', (e) => {
      e.preventDefault(); d.setPointerCapture(e.pointerId); d.classList.add('drag'); onDown && onDown();
      const r = stage.getBoundingClientRect();
      const move = (ev) => {
        const x = Math.min(S.iw, Math.max(0, (ev.clientX - r.left) * S.iw / r.width)), y = Math.min(S.ih, Math.max(0, (ev.clientY - r.top) * S.ih / r.height));
        set([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
        d.style.left = (x / S.iw) * 100 + '%'; d.style.top = (y / S.ih) * 100 + '%';
        const z = S.zones[S.sel]; z.stats = null; touch();
        showLoupe(x, y, ev.clientX - r.left < r.width / 2);
        drawOverlayLines(); redraw(); renderCalc();
      };
      const up = () => { d.classList.remove('drag'); loupe.hidden = true; rebuild3d(); d.removeEventListener('pointermove', move); d.removeEventListener('pointerup', up); d.removeEventListener('pointercancel', up); const z = S.zones[S.sel]; if (z) z.stats = null; drawOverlay(); redraw(); };
      d.addEventListener('pointermove', move); d.addEventListener('pointerup', up); d.addEventListener('pointercancel', up);
      move(e);
    });
  }
  function drawOverlayLines() {   // быстрое обновление линий без пересоздания точек
    const z = S.zones[S.sel]; const polys = ov.querySelectorAll('polygon'); let k = 0;
    S.zones.forEach((zz, zi) => { polys[k++].setAttribute('points', zz.pts.map((p) => p.join(',')).join(' ')); zz.holes.forEach((q) => { polys[k++].setAttribute('points', q.map((p) => p.join(',')).join(' ')); }); });
    void z;
  }
  function showLoupe(x, y, left) {
    if (!photoCanvas) return;
    loupe.hidden = false; loupe.classList.toggle('right', left);
    const c = loupe.getContext('2d'), R = 160, sw = 46 * S.scale;
    c.save(); c.fillStyle = '#dfe4ec'; c.fillRect(0, 0, R, R); c.beginPath(); c.arc(R / 2, R / 2, R / 2, 0, Math.PI * 2); c.clip();
    c.imageSmoothingQuality = 'high';
    c.drawImage(photoCanvas, x - sw / 2, y - sw / 2, sw, sw, 0, 0, R, R);
    c.strokeStyle = 'rgba(255,112,80,.95)'; c.lineWidth = 2;
    c.beginPath(); c.moveTo(R / 2, R / 2 - 18); c.lineTo(R / 2, R / 2 + 18); c.moveTo(R / 2 - 18, R / 2); c.lineTo(R / 2 + 18, R / 2); c.stroke();
    c.restore();
  }

  /* ---------- фото ---------- */
  async function setPhoto(source, iw, ih) {
    const s = Math.min(1, MAX_SIDE / Math.max(iw, ih));
    S.iw = Math.round(iw * s); S.ih = Math.round(ih * s);
    photoCanvas = document.createElement('canvas'); photoCanvas.width = S.iw; photoCanvas.height = S.ih;
    const c = photoCanvas.getContext('2d'); c.imageSmoothingQuality = 'high'; c.drawImage(source, 0, 0, S.iw, S.ih);
    // уменьшенная копия для средней яркости стены
    const sw = 120, sh = Math.max(1, Math.round(120 * S.ih / S.iw));
    const sm = document.createElement('canvas'); sm.width = sw; sm.height = sh; const sc = sm.getContext('2d'); sc.filter = 'blur(2px)'; sc.drawImage(photoCanvas, 0, 0, sw, sh);
    const d = sc.getImageData(0, 0, sw, sh).data; lumSmall = { w: sw, h: sh, d };
    let L = 0; for (let i = 0; i < d.length; i += 4) L += .2126 * d[i] + .7152 * d[i + 1] + .0722 * d[i + 2];
    L /= (d.length / 4) * 255;
    S.globalL = L;
    cv.width = S.iw; cv.height = S.ih;
    setPhotoGL(photoCanvas);
    layout();
  }
  function exposure() {   // общая яркость снимка: на тёмном фото панели тоже темнее
    const z = S.zones[0]; const zl = z && z.stats ? z.stats.L : S.globalL;
    S.expo = Math.min(1.06, Math.max(.62, (.5 * (zl + S.globalL)) / .5));
  }
  async function loadDemo() {
    busy(true);
    const im = new Image(); im.src = D.demo.src; await im.decode();
    S.isDemo = true;
    await setPhoto(im, im.naturalWidth, im.naturalHeight);
    const k = S.iw / D.demo.w;
    S.zones = D.demo.zones.map((z) => ({ name: z.name, width: z.width, pts: z.pts.map((p) => [p[0] * k, p[1] * k]), holes: z.holes.map((q) => q.map((p) => [p[0] * k, p[1] * k])), panel: z.panel.slice() }));
    S.sel = S.zones.length - 1; S.hole = -1;
    await Promise.all(S.zones.map((z) => loadPanel(PANELS.get(z.panel[0]).variants[z.panel[1]].id)));
    S.zones.forEach((z) => { z.stats = zoneStats(z); }); exposure();
    S.depth = 9.6; S.roof = 'flat';
    busy(false); refresh(); setStep(S.touched ? 3 : 1); rebuild3d();
    hint(S.mode === '3d' ? 'Пример: 3D-модель дома, построенная по фото объекта Экосимпл. Потяните, чтобы повернуть, и выберите панель в блоке «Панель».' : 'Это фото объекта Экосимпл. Загрузите своё фото или выберите другую панель в блоке «Панель».');
  }
  async function loadFile(f) {
    if (!f || !/^image\//.test(f.type)) { hint('Нужен файл с фотографией: JPG, PNG или HEIC с телефона.'); return; }
    busy(true);
    try {
      let src, w, h;
      if (window.createImageBitmap) { try { src = await createImageBitmap(f, { imageOrientation: 'from-image' }); w = src.width; h = src.height; } catch (e) { src = null; } }
      if (!src) { const im = new Image(); im.src = URL.createObjectURL(f); await im.decode(); src = im; w = im.naturalWidth; h = im.naturalHeight; }
      S.isDemo = false;
      await setPhoto(src, w, h);
      const cur = S.zones[S.sel] ? S.zones[S.sel].panel.slice() : ['AA1', 2];
      S.zones = [newZone('Стена 1', cur, [.2, .3, .8, .78])];
      S.sel = 0; S.hole = -1; S.compare = false; syncCompare();
      await loadPanel(PANELS.get(cur[0]).variants[cur[1]].id);
      S.zones[0].stats = zoneStats(S.zones[0]); exposure();
      S.depth = 0; refresh(); setStep(2); touch(); setMode('photo');
      hint('Перетащите белые точки на углы стены, окна отметьте кнопкой «+ Окно / дверь», затем нажмите «Построить 3D-модель по фото».');
    } catch (e) {
      hint('Не получилось открыть это фото. Попробуйте другое или сделайте снимок в формате JPG.');
    } finally { busy(false); }
  }
  function newZone(name, panel, box) {
    const [x0, y0, x1, y1] = box;
    return { name, width: 8, panel, holes: [], pts: [[x0 * S.iw, y0 * S.ih], [x1 * S.iw, y0 * S.ih], [x1 * S.iw, y1 * S.ih], [x0 * S.iw, y1 * S.ih]] };
  }

  /* ---------- интерфейс ---------- */
  const busy = (on) => { $('#busy').hidden = !on; };
  const hint = (t) => { $('#hint').textContent = t; };
  function setStep(n) {
    document.querySelectorAll('#steps li').forEach((li) => { const k = +li.dataset.step; li.classList.toggle('on', k === n); li.classList.toggle('done', k < n); });
  }
  function touch() { S.touched = true; }
  function select(zi, hi) {
    S.sel = zi; S.hole = hi;
    const z = S.zones[zi]; if (z) S.cat = PANELS.get(z.panel[0]).cat;
    refresh();
  }
  function refresh() {
    drawOverlay(); renderZones(); renderCats(); renderPanels(); renderInfo(); renderCalc(); redraw();
    $('#bAddWall').disabled = S.zones.length >= MAX_ZONES;
    const z = S.zones[S.sel];
    $('#bAddHole').disabled = !z || z.holes.length >= MAX_HOLES;
    $('#bDel').disabled = !z;
    $('#bDel').textContent = S.hole >= 0 ? 'Удалить окно' : 'Удалить стену';
    document.querySelectorAll('.seg').forEach((b) => b.classList.toggle('on', b.dataset.roof === S.roof));
    const dd = $('#dDepth'); if (document.activeElement !== dd) dd.value = S.depth || '';
  }
  function renderZones() {
    const box = $('#zones'); box.innerHTML = '';
    S.zones.forEach((z, i) => {
      const v = PANELS.get(z.panel[0]).variants[z.panel[1]];
      const b = document.createElement('button'); b.type = 'button'; b.className = 'zbtn' + (i === S.sel ? ' on' : ''); b.setAttribute('role', 'option'); b.setAttribute('aria-selected', i === S.sel);
      b.innerHTML = `<i style="background-image:url(thumb/${v.id}.webp)"></i>${esc(z.name)}`;
      b.onclick = () => select(i, -1);
      box.appendChild(b);
    });
    const z = S.zones[S.sel];
    $('#zoneName').textContent = $('#zoneName2').textContent = z ? z.name : '—';
  }
  function renderCats() {
    const box = $('#cats'); box.innerHTML = '';
    for (const c of D.cats) {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'cat' + (c.id === S.cat ? ' on' : ''); b.textContent = c.name; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', c.id === S.cat);
      b.onclick = () => { S.cat = c.id; renderCats(); renderPanels(); };
      box.appendChild(b);
    }
  }
  function renderPanels() {
    const box = $('#plist'); box.innerHTML = '';
    const z = S.zones[S.sel];
    for (const p of D.panels.filter((x) => x.cat === S.cat)) {
      const vi = z && z.panel[0] === p.code ? z.panel[1] : 0;
      const b = document.createElement('button'); b.type = 'button'; b.className = 'pcard' + (z && z.panel[0] === p.code ? ' on' : '');
      b.innerHTML = `<img src="thumb/${p.variants[vi].id}.webp" alt="" loading="lazy"><b>${esc(p.label)}</b><span>${fmt(p.price)} ₽/м²</span>`;
      b.onclick = () => choose(p.code, z && z.panel[0] === p.code ? z.panel[1] : sameColor(z, p));
      box.appendChild(b);
    }
  }
  function sameColor(z, p) {   // при смене артикула стараемся оставить тот же цвет
    if (!z) return 0;
    const name = PANELS.get(z.panel[0]).variants[z.panel[1]].name.replace(/ \d$/, '');
    const i = p.variants.findIndex((v) => v.name.replace(/ \d$/, '') === name);
    return i < 0 ? 0 : i;
  }
  function renderInfo() {
    const box = $('#pinfo'); const z = S.zones[S.sel]; if (!z) { box.innerHTML = ''; return; }
    const p = PANELS.get(z.panel[0]), v = p.variants[z.panel[1]];
    box.innerHTML = `<div class="top"><b>${esc(p.label)} · ${esc(v.name)}</b><span>${fmt(p.price)} ₽/м²</span></div>
      <div class="meta">${CAT_NAME[p.cat]}, ${TEXTURE_WORD[p.cat]} · 1480×360 мм${p.url ? ` · <a href="${p.url}" target="_blank" rel="noopener">в каталоге</a>` : ''}</div>`;
    if (p.variants.length > 1) {
      const vs = document.createElement('div'); vs.className = 'vars';
      p.variants.forEach((vv, i) => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'vbtn' + (i === z.panel[1] ? ' on' : '');
        b.innerHTML = `<i style="background:${vv.swatch} url(thumb/${vv.id}.webp) center/cover"></i>${esc(vv.name)}`;
        b.onclick = () => choose(p.code, i);
        vs.appendChild(b);
      });
      box.appendChild(vs);
    }
  }
  async function choose(code, vi) {
    const z = S.zones[S.sel]; if (!z) return;
    z.panel = [code, vi]; touch(); setStep(3);
    const id = PANELS.get(code).variants[vi].id;
    if (!panelTex.has(id)) busy(true);
    try { await loadPanel(id); } finally { busy(false); }
    refresh(); rebuild3d();
  }
  function renderCalc() {
    const box = $('#calc'); const z = S.zones[S.sel];
    if (!z) { box.innerHTML = ''; return; }
    const inp = $('#wWidth'); if (document.activeElement !== inp) inp.value = z.width;
    const a = zoneArea(z), p = PANELS.get(z.panel[0]);
    let tA = 0, tP = 0; for (const zz of S.zones) { const aa = zoneArea(zz); tA += aa.net; tP += aa.net * RESERVE * PANELS.get(zz.panel[0]).price; }
    box.innerHTML = `<div class="ln"><span>Высота по фото</span><b>≈ ${fmt(a.H, 1)} м</b></div>
      <div class="ln"><span>Площадь${z.holes.length ? ' без окон' : ''}</span><b>≈ ${fmt(a.net, 1)} м²</b></div>
      <div class="ln"><span>Панели ${esc(p.label)}</span><b>≈ ${rub(a.net * RESERVE * p.price)}</b></div>
      ${S.zones.length > 1 ? `<div class="ln tot"><span>Все стены на фото, ${fmt(tA, 1)} м²</span><b>≈ ${rub(tP)}</b></div>` : `<div class="ln tot"><span>Итого за панели</span><b>≈ ${rub(tP)}</b></div>`}
      ${houseCalc()}
      <div class="note">С запасом 7% на подрезку. Расчёт примерный, точную смету подготовит менеджер.</div>`;
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- 3D-модель по разметке ---------- */
  let eco = null, areas3d = {};
  try { eco = window.Eco3D ? window.Eco3D.create($('#g3')) : null; } catch (e) { eco = null; }
  if (eco) eco.touched = () => { tip(false); };
  // все стены на фото переводим в метры на плоскости фасада (по самой большой стене)
  function buildModel() {
    if (!S.zones.length) return null;
    const ref = S.zones.reduce((a, z) => (zoneArea(z).gross > zoneArea(a).gross ? z : a));
    const inv = inv3(sq2quad(ref.pts)), Wr = ref.width, Hr = zoneHeight(ref);
    const toM = (p) => { const [s, t] = apply(inv, p[0], p[1]); return [s * Wr, (1 - t) * Hr]; };
    const bb = (q) => { const m = q.map(toM), xs = m.map((v) => v[0]), ys = m.map((v) => v[1]); return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) }; };
    const bands = S.zones.map((z) => { const r = bb(z.pts), p = PANELS.get(z.panel[0]), v = p.variants[z.panel[1]]; return { ...r, mat: { id: v.id, kind: p.kind, size: p.size, cat: p.cat, swatch: v.swatch } }; });
    const holes = S.zones.flatMap((z) => z.holes.map(bb));
    const x0 = Math.min(...bands.map((b) => b.x0)), y0 = Math.min(...bands.map((b) => b.y0));
    const sh = (r) => { r.x0 -= x0; r.x1 -= x0; r.y0 -= y0; r.y1 -= y0; return r; };
    bands.forEach(sh); holes.forEach(sh);
    const W = Math.max(...bands.map((b) => b.x1)), H = Math.max(...bands.map((b) => b.y1));
    // полосы во всю ширину фасада: дом одет целиком
    bands.forEach((b) => { if (b.x0 < W * .12) b.x0 = 0; if (b.x1 > W * .88) b.x1 = W; });
    if (!S.depth) S.depth = Math.round(Math.max(4, Math.min(14, W * .78)) * 10) / 10;
    holes.forEach((h) => { h.x0 = Math.max(h.x0, .15); h.x1 = Math.min(h.x1, W - .15); h.y0 = Math.max(h.y0, 0); h.y1 = Math.min(h.y1, H - .2); });
    return { W, H, D: S.depth, roof: S.roof, bands, holes: holes.filter((h) => h.x1 - h.x0 > .25 && h.y1 - h.y0 > .25) };
  }
  let rbT = 0;
  function rebuild3d() {
    if (!eco) return;
    clearTimeout(rbT);
    rbT = setTimeout(() => { const m = buildModel(); if (!m) return; areas3d = eco.build(m); renderCalc(); const dd = $('#dDepth'); if (document.activeElement !== dd) dd.value = S.depth; }, 60);
  }
  function houseCalc() {
    const ids = Object.keys(areas3d); if (!ids.length || !eco) return '';
    let A = 0, P = 0;
    for (const id of ids) { const p = PANELS.get(id.split('_')[0]); if (!p) continue; A += areas3d[id]; P += areas3d[id] * RESERVE * p.price; }
    return `<div class="ln tot"><span>Весь дом в 3D, 4 стены, ${fmt(A, 0)} м²</span><b>≈ ${rub(P)}</b></div>`;
  }
  function setMode(m) {
    if (m === '3d' && !eco) m = 'photo';
    S.mode = m;
    stage.classList.toggle('is3d', m === '3d');
    $('#m3d').classList.toggle('on', m === '3d'); $('#mPhoto').classList.toggle('on', m === 'photo');
    $('#m3d').setAttribute('aria-selected', m === '3d'); $('#mPhoto').setAttribute('aria-selected', m === 'photo');
    $('#bar3d').hidden = m !== '3d'; $('#barPhoto').hidden = m !== 'photo';
    if (eco) eco.setVisible(m === '3d');
    layout(); if (m === 'photo') { drawOverlay(); redraw(); maybePeek(); }
    tip(m === '3d' && !S.touched3d);
  }
  const tipEl = document.createElement('div'); tipEl.className = 'eco-tip'; tipEl.textContent = 'Потяните, чтобы повернуть дом'; stage.appendChild(tipEl);
  function tip(on) { tipEl.style.opacity = on ? 1 : 0; if (!on && S.mode === '3d') S.touched3d = true; }
  $('#m3d').onclick = () => { setMode('3d'); rebuild3d(); hint('Потяните модель, чтобы повернуть. Панель меняется в блоке «Панель», крыша и глубина — в блоке «Стены и окна».'); };
  $('#mPhoto').onclick = () => { setMode('photo'); hint('Здесь можно поправить стены и окна на фото. Потом вернитесь в «3D-модель дома».'); };
  $('#bBuild').onclick = () => { setStep(4); setMode('3d'); rebuild3d(); hint('Готово: 3D-модель по вашему фото. Поверните её, смените панели или форму крыши.'); };
  document.querySelectorAll('.seg').forEach((b) => { b.onclick = () => { S.roof = b.dataset.roof; refresh(); if (S.mode !== '3d') setMode('3d'); rebuild3d(); }; });
  $('#dDepth').addEventListener('input', (e) => { const v = parseFloat(String(e.target.value).replace(',', '.')); if (v >= 3 && v <= 40) { S.depth = v; rebuild3d(); } });
  $('#vFront').onclick = () => { if (eco) { eco.view('front'); tip(false); } };
  $('#v34').onclick = () => { if (eco) { eco.view('34'); tip(false); } };
  $('#vSpin').onclick = () => { if (eco) eco.spin(); };
  $('#zIn').onclick = () => { if (eco) { eco.zoom(.85); tip(false); } };
  $('#zOut').onclick = () => { if (eco) eco.zoom(1.18); };
  $('#bDownload3').onclick = () => {
    if (!eco) return;
    const c = eco.snapshot(1600), x = c.getContext('2d'), w = c.width, h = c.height, fs = Math.max(12, Math.round(w / 48));
    x.font = `700 ${fs}px Manrope, sans-serif`; x.textAlign = 'right'; x.textBaseline = 'bottom';
    const txt = 'Примерка Экосимпл · ecosimple.ru', tw = x.measureText(txt).width;
    x.fillStyle = 'rgba(29,37,64,.62)'; x.fillRect(w - tw - fs * 1.6, h - fs * 2.1, tw + fs * 1.6, fs * 2.1); x.fillStyle = '#fff'; x.fillText(txt, w - fs * .8, h - fs * .55);
    c.toBlob((b) => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'ekosimpl-3d.jpg'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); }, 'image/jpeg', .9);
  };

  /* ---------- кнопки ---------- */
  $('#file').addEventListener('change', (e) => { loadFile(e.target.files[0]); e.target.value = ''; });
  $('#bDemo').onclick = () => { S.compare = false; syncCompare(); loadDemo(); };
  $('#bAddWall').onclick = () => {
    if (S.zones.length >= MAX_ZONES) return;
    const cur = S.zones[S.sel] ? S.zones[S.sel].panel.slice() : ['AA1', 2];
    const n = S.zones.length + 1, off = (n % 3) * .04;
    S.zones.push(newZone('Стена ' + n, cur, [.28 + off, .3 + off, .72 + off, .66 + off]));
    const z = S.zones[S.zones.length - 1]; z.stats = null;
    select(S.zones.length - 1, -1); touch(); setStep(2);
    hint('Новая стена: потяните её белые точки на углы.');
  };
  $('#bAddHole').onclick = () => {
    const z = S.zones[S.sel]; if (!z || z.holes.length >= MAX_HOLES) return;
    const Hm = sq2quad(z.pts), k = z.holes.length, cx = .3 + (k % 4) * .13, cy = .32 + Math.floor(k / 4) * .3;
    z.holes.push([[cx, cy], [cx + .1, cy], [cx + .1, cy + .3], [cx, cy + .3]].map(([s, t]) => apply(Hm, s, t)));
    z.stats = null; S.hole = z.holes.length - 1; touch(); refresh();
    hint('Потяните оранжевые точки на углы окна или двери.');
  };
  $('#bDel').onclick = () => {
    const z = S.zones[S.sel]; if (!z) return;
    if (S.hole >= 0) { z.holes.splice(S.hole, 1); z.stats = null; S.hole = -1; }
    else { S.zones.splice(S.sel, 1); S.sel = Math.max(0, S.sel - 1); }
    refresh(); rebuild3d();
  };
  $('#wWidth').addEventListener('input', (e) => {
    const z = S.zones[S.sel]; const v = parseFloat(String(e.target.value).replace(',', '.'));
    if (z && v > 0 && v < 200) { z.width = v; renderCalc(); redraw(); rebuild3d(); }
  });
  $('#bMarks').onclick = () => { S.marks = !S.marks; $('#bMarks').classList.toggle('on', S.marks); $('#bMarks').setAttribute('aria-pressed', S.marks); drawOverlay(); };
  $('#bCompare').onclick = () => { S.compare = !S.compare; S.split = .5; syncCompare(); redraw(); };
  function syncCompare() {
    $('#bCompare').classList.toggle('on', S.compare); $('#bCompare').setAttribute('aria-pressed', S.compare);
    const sp = $('#split'); sp.hidden = !S.compare; sp.style.left = S.split * 100 + '%';
    if (S.compare && S.marks) { S.marks = false; $('#bMarks').classList.remove('on'); drawOverlay(); }
  }
  (() => {   // ползунок «до / после»
    const sp = $('#split');
    sp.addEventListener('pointerdown', (e) => {
      e.preventDefault(); sp.setPointerCapture(e.pointerId);
      const r = stage.getBoundingClientRect();
      const mv = (ev) => { S.split = Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width)); sp.style.left = S.split * 100 + '%'; redraw(); };
      const up = () => { sp.removeEventListener('pointermove', mv); sp.removeEventListener('pointerup', up); };
      sp.addEventListener('pointermove', mv); sp.addEventListener('pointerup', up); mv(e);
    });
  })();
  function snapshot(maxW) {
    draw();
    const w = Math.min(maxW || S.iw, S.iw), h = Math.round(w * S.ih / S.iw);
    const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d');
    x.drawImage(cv, 0, 0, w, h);
    const fs = Math.max(12, Math.round(w / 48));
    x.font = `700 ${fs}px Manrope, sans-serif`; x.textAlign = 'right'; x.textBaseline = 'bottom';
    const txt = 'Примерка Экосимпл · ecosimple.ru'; const tw = x.measureText(txt).width;
    x.fillStyle = 'rgba(29,37,64,.62)'; x.fillRect(w - tw - fs * 1.6, h - fs * 2.1, tw + fs * 1.6, fs * 2.1);
    x.fillStyle = '#fff'; x.fillText(txt, w - fs * .8, h - fs * .55);
    return c;
  }
  $('#bDownload').onclick = () => {
    const was = S.compare; S.compare = false;
    const c = snapshot(); S.compare = was; redraw();
    c.toBlob((b) => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'ekosimpl-primerka.jpg'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); }, 'image/jpeg', .9);
  };

  /* перетаскивание файла на сцену */
  ['dragenter', 'dragover'].forEach((t) => stage.addEventListener(t, (e) => { e.preventDefault(); $('#drop').hidden = false; }));
  ['dragleave', 'drop'].forEach((t) => stage.addEventListener(t, (e) => { e.preventDefault(); $('#drop').hidden = true; }));
  stage.addEventListener('drop', (e) => { const f = e.dataTransfer.files[0]; if (f) loadFile(f); });

  /* ---------- заявка ---------- */
  const dlg = $('#lead'), form = $('#leadForm');
  $('#bLead').onclick = () => {
    const was = S.compare; S.compare = false;
    $('#leadImg').src = (S.mode === '3d' && eco ? eco.snapshot(900) : snapshot(900)).toDataURL('image/jpeg', .82); S.compare = was; redraw();
    $('#leadSum').innerHTML = S.zones.map((z) => { const p = PANELS.get(z.panel[0]); return `<li><b>${esc(z.name)}:</b> ${esc(p.label)}, ${esc(p.variants[z.panel[1]].name.toLowerCase())}, ≈ ${fmt(zoneArea(z).net, 1)} м²</li>`; }).join('');
    form.querySelector('.lead-main').hidden = false; form.querySelector('.lead-done').hidden = true; $('#leadErr').hidden = true;
    setStep(4);
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  };
  const closeDlg = () => (dlg.close ? dlg.close() : dlg.removeAttribute('open'));
  $('#leadX').onclick = closeDlg; $('#leadOk').onclick = closeDlg;
  dlg.addEventListener('click', (e) => { if (e.target === dlg) closeDlg(); });
  const phone = form.elements.phone;
  phone.addEventListener('input', () => {
    let d = phone.value.replace(/\D/g, ''); if (d[0] === '8') d = '7' + d.slice(1); if (d && d[0] !== '7') d = '7' + d; d = d.slice(0, 11);
    const p = d.slice(1); let s = '+7';
    if (p.length) s += ' (' + p.slice(0, 3); if (p.length >= 3) s += ') ' + p.slice(3, 6); if (p.length >= 6) s += '-' + p.slice(6, 8); if (p.length >= 8) s += '-' + p.slice(8, 10);
    phone.value = d ? s : '';
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = form.elements, err = $('#leadErr');
    const msg = !f.name.value.trim() ? 'Напишите, как к вам обращаться.' : phone.value.replace(/\D/g, '').length !== 11 ? 'Проверьте номер телефона.' : !f.agree.checked ? 'Нужно согласие на обработку данных.' : '';
    if (msg) { err.textContent = msg; err.hidden = false; return; }
    err.hidden = true;
    // здесь в рабочей версии заявка с картинкой уходит в Telegram и на почту
    form.querySelector('.lead-main').hidden = true; form.querySelector('.lead-done').hidden = false;
  });

  /* высота блока для iframe на сайте Tilda */
  const postH = () => { try { parent.postMessage({ type: 'eco-primerka-height', h: document.documentElement.scrollHeight }, '*'); } catch (e) { /* нет родителя */ } };
  new ResizeObserver(postH).observe(document.body);
  if (window.self !== window.top) $('#demoNote').hidden = false;

  /* первый показ: ползунок «до / после» сам проходит по фото */
  let peeked = false, visible = false;
  new IntersectionObserver((ents) => { visible = ents[0].isIntersecting; maybePeek(); }, { threshold: .45 }).observe(stage);
  function maybePeek() {
    if (peeked || !visible || !photoTex || S.touched || !S.isDemo || S.mode !== 'photo' || !S.zones.length || !S.zones.every((z) => panelTex.has(PANELS.get(z.panel[0]).variants[z.panel[1]].id))) return;
    peeked = true; S.compare = true; syncCompare();
    const t0 = performance.now(), T = 2200;
    const step = (t) => {
      if (S.touched) { S.compare = false; syncCompare(); redraw(); return; }
      const k = Math.min(1, (t - t0) / T), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      S.split = .96 - .92 * e; $('#split').style.left = S.split * 100 + '%'; redraw();
      if (k < 1) requestAnimationFrame(step); else setTimeout(() => { if (!S.touched) { S.compare = false; S.marks = true; $('#bMarks').classList.add('on'); syncCompare(); drawOverlay(); redraw(); } }, 900);
    };
    requestAnimationFrame(step);
  }

  setMode(eco ? '3d' : 'photo');
  window.__eco = { S, draw, loadFile, loadDemo, choose, select, setMode, buildModel, get eco() { return eco; } };
  loadDemo().catch((e) => { busy(false); hint('Не удалось загрузить пример: ' + e.message); });
})();
