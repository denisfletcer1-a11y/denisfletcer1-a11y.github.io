/* Barberzz Tattoo — татуировки сами набиваются на мраморную статую (WebGL, без видео — ничего не рябит).
   <div class="bz-tattoo" data-base="https://…/tattoo/"></div>
   <script src="https://…/tattoo.js" defer></script>
   Цикл: чистая статуя → тату набиваются (контуры, потом цвет) → золотая линия → пауза → «смываются» → заново.
   Нажатие или касание — набить заново. */
(function () {
  'use strict';
  var VS = 'attribute vec2 p; varying vec2 uv; void main(){ uv = vec2(p.x*0.5+0.5, 0.5-p.y*0.5); gl_Position = vec4(p,0.,1.); }';
  var FS = [
    'precision mediump float;',
    'varying vec2 uv; uniform sampler2D tC, tT, tM; uniform float t, wash, time;',
    'float hash(vec2 q){ return fract(sin(dot(q, vec2(12.9898,78.233)))*43758.5453); }',
    'void main(){',
    '  vec4 c = texture2D(tC, uv); vec4 a = texture2D(tT, uv); vec3 m = texture2D(tM, uv).rgb;',
    '  float mask = max(m.g, m.b);',
    '  float tm = m.r;',
    '  float rev = smoothstep(tm - 0.012, tm + 0.002, t) * (1.0 - wash);',
    '  float k = rev * mask;',
    '  vec4 col = mix(c, a, k);',                                    // премультиплицированные цвета
    '  float front = smoothstep(tm - 0.03, tm, t) - smoothstep(tm, tm + 0.025, t);', // кромка «иглы»
    '  float spark = step(0.86, hash(floor(uv*420.0) + floor(time*24.0)));',
    '  col.rgb *= 1.0 - 0.35 * front * m.g;',                          // свежая краска чуть темнее
    '  col.rgb += vec3(1.0, 0.78, 0.35) * front * (m.b * 1.4 + m.g * 0.35 * spark) * col.a;', // золотое свечение у кромки
    '  gl_FragColor = col;',
    '}'
  ].join('\n');

  function init(el) {
    if (el.__bz) return; el.__bz = true;
    var base = el.getAttribute('data-base') || 'tattoo/';
    var ver = el.getAttribute('data-v') ? '?v=' + el.getAttribute('data-v') : '';
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cv = document.createElement('canvas');
    cv.setAttribute('aria-label', 'Статуя: татуировки набиваются на мрамор');
    el.appendChild(cv);
    var hint = document.createElement('div'); hint.className = 'bz-hint'; hint.innerHTML = '<span>✦</span> Нажмите — набьём заново';
    el.appendChild(hint);
    var gl = cv.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false });
    if (!gl) { var im = new Image(); im.src = base + 'statue-tattoo.webp' + ver; im.style.cssText = 'width:100%;height:100%;object-fit:contain'; el.replaceChild(im, cv); return; }

    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
    var pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var lp = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp, 2, gl.FLOAT, false, 0, 0);
    var U = { t: gl.getUniformLocation(pr, 't'), wash: gl.getUniformLocation(pr, 'wash'), time: gl.getUniformLocation(pr, 'time') };
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    var names = ['statue-clean.webp', 'statue-tattoo.webp', 'statue-map.png'], uni = ['tC', 'tT', 'tM'], left = 3;
    names.forEach(function (n, i) {
      var im = new Image(); im.crossOrigin = 'anonymous';
      im.onload = function () {
        var tx = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + i); gl.bindTexture(gl.TEXTURE_2D, tx);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i < 2);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.uniform1i(gl.getUniformLocation(pr, uni[i]), i);
        if (--left === 0) { el.classList.add('bz-ready'); begin(); }
      };
      im.src = base + n + ver;
    });

    function fit() {
      var r = el.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2), s = Math.min(r.width, r.height);
      cv.style.width = s + 'px'; cv.style.height = s + 'px';
      cv.width = Math.round(s * d); cv.height = Math.round(s * d);
      gl.viewport(0, 0, cv.width, cv.height);
    }
    fit(); addEventListener('resize', fit);

    // таймлайн, секунды
    var HOLD0 = 0.9, INK = 7.5, HOLD1 = 4.5, WASH = 1.3, CYCLE = HOLD0 + INK + HOLD1 + WASH;
    var t0 = 0, visible = true, running = false;
    function ease(x) { return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }
    function frame(now) {
      if (!running) return;
      var s = (now - t0) / 1000 % CYCLE, tt = 0, w = 0;
      if (reduce) { tt = 1.1; }
      else if (s < HOLD0) tt = 0;
      else if (s < HOLD0 + INK) tt = (0.15 * ease((s - HOLD0) / INK) + 0.85 * ((s - HOLD0) / INK)) * 1.02;
      else if (s < HOLD0 + INK + HOLD1) tt = 1.1;
      else { tt = 1.1; w = (s - HOLD0 - INK - HOLD1) / WASH; }
      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(U.t, tt); gl.uniform1f(U.wash, w * w); gl.uniform1f(U.time, now / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (visible) requestAnimationFrame(frame); else running = false;
    }
    function begin() { t0 = performance.now(); if (!running) { running = true; requestAnimationFrame(frame); } }
    el.addEventListener('click', function () {                     // набить заново: короткое «смывание» и сначала
      el.classList.add('bz-touched');
      var s = (performance.now() - t0) / 1000 % CYCLE;
      t0 = performance.now() - (HOLD0 + INK + HOLD1) * 1000 - (s > HOLD0 + INK + HOLD1 ? (s - HOLD0 - INK - HOLD1) * 1000 : 0);
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible && !running && !left) { running = true; requestAnimationFrame(frame); }
      }).observe(el);
    }
  }
  function all() { var l = document.querySelectorAll('.bz-tattoo'); for (var i = 0; i < l.length; i++) init(l[i]); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  setTimeout(all, 1500); setTimeout(all, 4000);
})();
