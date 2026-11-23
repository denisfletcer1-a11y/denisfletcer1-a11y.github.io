// Нейросеть для примерки: Segment Anything прямо в браузере, без сервера. Фото не покидает устройство.
// Основная модель — SAM 2.1 small (точная, ~65 МБ). Если устройство её не потянуло — запасная SlimSAM (~14 МБ).
// Модели и движок лежат на сайте в папке ai/.
import { SamModel, Sam2Model, AutoProcessor, AutoModelForSemanticSegmentation, RawImage, Tensor, env } from '../ai/transformers.min.js';

// SegFormer (ADE20K, ~15 МБ) — «искатель земли»: понимает, где на фото дорога, тротуар, газон, грунт.
// По его карте ставим точки для SAM и отрезаем то, что точно не земля (стены, машины, кусты).
const SEG_ID = 'Xenova/segformer-b0-finetuned-ade-512-512';
// классы ADE20K: пол/площадка, дорога, газон, тротуар, земля, поле, песок, дорожка, взлётка, грунтовка, участок
const GROUND = new Set([3, 6, 9, 11, 13, 29, 46, 52, 54, 91, 94]);
let seg = null, segProc = null, segLoading = null;
function loadSeg() {
  return segLoading || (segLoading = Promise.all([
    AutoModelForSemanticSegmentation.from_pretrained(SEG_ID, { dtype: 'fp32', device: 'wasm', progress_callback: progress }),
    AutoProcessor.from_pretrained(SEG_ID),
  ]).then(([m, p]) => { seg = m; segProc = p; }).catch(e => { console.warn('SegFormer не загрузился:', e); }));
}

// карта земли (сетка gw×gh, 1 — земля) и точки-подсказки для SAM: по 3 точки в 1–2 крупнейших кусках земли
async function findGround(image) {
  await loadSeg();
  if (!seg) return null;
  const inp = await segProc(image);
  const { logits } = await seg(inp);
  const [, C, gh, gw] = logits.dims, L = logits.data, n = gw * gh, g = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    let best = -Infinity, cls = 0;
    for (let c = 0; c < C; c++) { const v = L[c * n + i]; if (v > best) { best = v; cls = c; } }
    g[i] = GROUND.has(cls) ? 1 : 0;
  }
  // сужаем на 3 клетки — точки должны стоять уверенно внутри земли, а не на границе
  let e = g;
  for (let k = 0; k < 3; k++) {
    const o = new Uint8Array(n);
    for (let y = 1; y < gh - 1; y++) for (let x = 1; x < gw - 1; x++) { const i = y * gw + x; o[i] = e[i] && e[i - 1] && e[i + 1] && e[i - gw] && e[i + gw] ? 1 : 0; }
    e = o;
  }
  // связные куски
  const lab = new Int32Array(n), comps = [];
  for (let i = 0; i < n; i++) {
    if (!e[i] || lab[i]) continue;
    const id = comps.length + 1, st = [i], px = [];
    lab[i] = id;
    while (st.length) { const j = st.pop(); px.push(j); const x = j % gw; for (const k of [x > 0 ? j - 1 : -1, x < gw - 1 ? j + 1 : -1, j - gw, j + gw]) if (k >= 0 && k < n && e[k] && !lab[k]) { lab[k] = id; st.push(k); } }
    comps.push(px);
  }
  const seeds = comps
    .filter(px => px.length > n * 0.012)
    .map(px => { let sx = 0, sy = 0; for (const j of px) { sx += j % gw; sy += (j / gw) | 0; } return { px, cx: sx / px.length, cy: sy / px.length }; })
    .filter(c => c.cy > gh * 0.3)                       // земля — в нижней части кадра, не небо и не крыши
    .sort((a, b) => b.px.length * (0.5 + b.cy / gh) - a.px.length * (0.5 + a.cy / gh))   // крупные и ближние — первыми
    .slice(0, 2)
    .map(({ px, cx, cy }) => {
      let x0 = gw, x1 = 0; for (const j of px) { const x = j % gw; if (x < x0) x0 = x; if (x > x1) x1 = x; }
      const near = (tx, ty) => { let b = px[0], d = Infinity; for (const j of px) { const dx = j % gw - tx, dy = ((j / gw) | 0) - ty, dd = dx * dx + dy * dy; if (dd < d) { d = dd; b = j; } } return [(b % gw + 0.5) / gw, (((b / gw) | 0) + 0.5) / gh]; };
      const dw = (x1 - x0) / 4;
      return [near(cx, cy), near(cx - dw, cy), near(cx + dw, cy)];
    });
  return { gw, gh, g, seeds };
}

const MODELS = [
  { id: 'onnx-community/sam2.1-hiera-small-ONNX', cls: Sam2Model },
  { id: 'Xenova/slimsam-77-uniform', cls: SamModel },
];
env.allowRemoteModels = false;
env.allowLocalModels = true;
env.localModelPath = new URL('../ai/models/', import.meta.url).href;
env.backends.onnx.wasm.wasmPaths = new URL('../ai/', import.meta.url).href;
env.backends.onnx.wasm.numThreads = 1;   // без cross-origin isolation потоки всё равно недоступны

let model = null, processor = null, inputs = null, emb = null, loading = null, which = 0;
const files = {};

function progress(p) {
  if (p.status !== 'progress' && p.status !== 'done') return;
  const f = files[p.file] || (files[p.file] = { loaded: 0, total: 0 });
  if (p.total) f.total = p.total;
  f.loaded = p.status === 'done' ? f.total || f.loaded : p.loaded || 0;
  let l = 0, t = 0;
  for (const k in files) { l += files[k].loaded; t += files[k].total; }
  if (t) postMessage({ type: 'progress', value: Math.min(99, Math.round(l / t * 100)) });
}

async function loadAt(i) {
  const M = MODELS[i];
  const [m, p] = await Promise.all([
    M.cls.from_pretrained(M.id, { dtype: { vision_encoder: 'q8', prompt_encoder_mask_decoder: 'q8' }, device: 'wasm', progress_callback: progress }),
    AutoProcessor.from_pretrained(M.id),
  ]);
  model = m; processor = p; which = i;
  postMessage({ type: 'model', name: M.id });
}
function load() {
  return loading || (loading = (async () => {
    try { await loadAt(0); }
    catch (e) { console.warn('SAM 2.1 не загрузилась, беру запасную модель:', e); model = null; await loadAt(1); }
  })());
}

async function embed(image) {
  inputs = await processor(image);
  emb = await model.get_image_embeddings(inputs);
}

self.onmessage = async ({ data: m }) => {
  try {
    if (m.type === 'load') { await Promise.all([load(), loadSeg()]); postMessage({ type: 'loaded' }); }
    else if (m.type === 'image') {
      await Promise.all([load(), loadSeg()]);
      emb = null;
      const image = new RawImage(new Uint8ClampedArray(m.data), m.w, m.h, 4).rgb();
      try { await embed(image); }
      catch (e) {   // не хватило памяти на большую модель — переходим на запасную
        if (which !== 0) throw e;
        console.warn('SAM 2.1 не справилась с фото, беру запасную модель:', e);
        model = null; await loadAt(1); await embed(image);
      }
      let ground = null;
      try { ground = await findGround(image); } catch (e) { console.warn('поиск земли:', e); }
      if (ground) postMessage({ type: 'ready', id: m.id, ground: { gw: ground.gw, gh: ground.gh, g: ground.g.buffer, seeds: ground.seeds } }, [ground.g.buffer]);
      else postMessage({ type: 'ready', id: m.id });
    } else if (m.type === 'decode') {
      if (!emb) throw new Error('нет фото');
      const [rh, rw] = inputs.reshaped_input_sizes[0];
      const pts = m.points.map(p => [p[0] * rw, p[1] * rh]).flat();
      const input_points = new Tensor('float32', Float32Array.from(pts), [1, 1, m.points.length, 2]);
      const input_labels = new Tensor('int64', BigInt64Array.from(m.labels.map(BigInt)), [1, 1, m.labels.length]);
      const out = await model({ ...emb, input_points, input_labels });
      const masks = await processor.post_process_masks(out.pred_masks, inputs.original_sizes, inputs.reshaped_input_sizes);
      const mk = masks[0], H = mk.dims.at(-2), W = mk.dims.at(-1), K = mk.dims.at(-3), md = mk.data, sc = out.iou_scores.data, n = W * H;
      // из вариантов берём самый крупный среди почти лучших по уверенности: двору нужна вся площадка, а не кусочек
      let best = -1; for (let k = 0; k < K; k++) best = Math.max(best, sc[k]);
      let pick = 0, area = -1;
      for (let k = 0; k < K; k++) {
        if (sc[k] < best - (m.margin ?? 0.03)) continue;
        let a = 0; for (let i = k * n; i < (k + 1) * n; i++) a += md[i] ? 1 : 0;
        if (a > area) { area = a; pick = k; }
      }
      const res = new Uint8Array(n);
      for (let i = 0; i < n; i++) res[i] = md[pick * n + i] ? 255 : 0;
      postMessage({ type: 'mask', id: m.id, w: W, h: H, data: res.buffer, score: sc[pick] }, [res.buffer]);
    }
  } catch (e) {
    postMessage({ type: 'error', id: m.id, message: String(e && e.message || e) });
  }
};
