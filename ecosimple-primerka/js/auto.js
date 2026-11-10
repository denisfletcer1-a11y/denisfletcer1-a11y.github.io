// Нейросеть для версии «с автораспознаванием»: находит дом на фото (SegFormer, ADE20K, работает в браузере).
// Модель лежит рядом с блоком (папка ml), движок — официальный пакет transformers.js с CDN jsDelivr (версия закреплена).
const LIB = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2/dist/transformers.min.js';
let T = null;

const HOUSE = new Set(['house', 'building', 'skyscraper', 'wall', 'hovel', 'tower', 'windowpane', 'door']);
let seg = null;

export async function loadModel(onProgress) {
  if (seg) return seg;
  if (!T) T = await import(LIB);
  // файлы модели лежат рядом с блоком под простыми именами (GitHub Pages не публикует .onnx) — подменяем их при загрузке
  const FILES = { 'config.json': 'seg-config.json', 'preprocessor_config.json': 'seg-preprocessor.json', 'onnx/model_quantized.onnx': 'seg-model.bin' };
  const base = new URL('../ml/', import.meta.url).href;
  T.env.allowRemoteModels = true;
  T.env.allowLocalModels = false;
  T.env.useBrowserCache = false;
  T.env.useCustomCache = true;
  T.env.customCache = {
    async match(key) { const u = String(key && key.url ? key.url : key); for (const k in FILES) if (u.endsWith('/' + k)) { const r = await fetch(base + FILES[k]); if (r.ok) return r; } return undefined; },
    async put() {},
  };
  seg = await T.pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
    device: 'wasm', dtype: 'q8',
    progress_callback: (p) => { if (onProgress && p.status === 'progress' && p.total) onProgress(p.loaded / p.total); },
  });
  return seg;
}

// маска дома размером w×h (1 — дом), по фото с холста
export async function houseMask(canvas, w, onProgress) {
  const model = await loadModel(onProgress);
  const small = document.createElement('canvas');
  const h = Math.round(w * canvas.height / canvas.width);
  small.width = w; small.height = h;
  small.getContext('2d').drawImage(canvas, 0, 0, w, h);
  const out = await model(small.toDataURL('image/jpeg', .92));
  const m = new Uint8Array(w * h);
  for (const o of out) {
    if (!HOUSE.has(o.label)) continue;
    const mk = o.mask;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      if (mk.data[Math.floor(y * mk.height / h) * mk.width + Math.floor(x * mk.width / w)] > 127) m[y * w + x] = 1;
    }
  }
  return { m, w, h, labels: out.map((o) => o.label) };
}
