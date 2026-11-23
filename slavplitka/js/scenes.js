// Фото дворов для конструктора: камера (горизонт hy, фокус f в пикселях, высота h в метрах, поворот yaw, крен roll)
// и область мощения на фото (mask — картинка SAM 2.1). Камера с R — по швам плит на фото (tools/front_install.py). Плитка рисуется в перспективе этой камеры.
window.SCENES = [
  {
    id: 'house1', name: 'Дом из светлого кирпича с гаражом', img: 'img/scenes/house1.webp', imgHD: 'img/scenes/house1_hd.webp', thumb: 'img/scenes/thumbs/house1.webp',
    cam: { f: 775.0, R: [0.615661, 0.0, 0.788011, 0.076406, -0.995288, -0.059695, 0.784298, 0.09696, -0.612761], h: 0.833, hy: 522.0 },
    mask: 'img/scenes/house1_m.png?v=2311c',
    sun: [0.5, 0.7, -0.4], expo: 0.68, tintK: 0.3, shadeK: 0.45,
  },
  {
    id: 'house2', name: 'Одноэтажный дом с деревом', img: 'img/scenes/house2.webp', imgHD: 'img/scenes/house2_hd.webp', thumb: 'img/scenes/thumbs/house2.webp',
    cam: { f: 1575.0, R: [0.477159, 0.0, 0.878817, 0.000279, -1.0, -0.000151, 0.878817, 0.000317, -0.477159], h: 1.258, hy: 447.0 },
    mask: 'img/scenes/house2_m.png?v=2311c',
    sun: [0.5, 0.7, -0.4], expo: 0.68, tintK: 0.3, shadeK: 0.45,
  },
  {
    id: 'house3', name: 'А-образный дом в лесу', img: 'img/scenes/house3.webp', imgHD: 'img/scenes/house3_hd.webp', thumb: 'img/scenes/thumbs/house3.webp',
    cam: { f: 975.0, R: [0.814116, 0.0, 0.580703, 0.025289, -0.999051, -0.035453, 0.580152, 0.043548, -0.813343], h: 1.06, hy: 489.0 },
    mask: 'img/scenes/house3_m.png?v=2311c',
    sun: [0.5, 0.7, -0.4], expo: 0.68, tintK: 0.3, shadeK: 0.45,
  },
  {
    id: 'house4', name: 'Современный дом с плоской кровлей', img: 'img/scenes/house4.webp', imgHD: 'img/scenes/house4_hd.webp', thumb: 'img/scenes/thumbs/house4.webp',
    cam: { f: 1175.0, R: [0.5373, 0.0, 0.843391, 0.011125, -0.999913, -0.007087, 0.843318, 0.01319, -0.537253], h: 1.058, hy: 462.0 },
    mask: 'img/scenes/house4_m.png?v=2311c',
    sun: [0.5, 0.7, -0.4], expo: 0.68, tintK: 0.3, shadeK: 0.45,
  },
  {
    id: 'house5', name: 'Кирпичный коттедж', img: 'img/scenes/house5.webp', imgHD: 'img/scenes/house5_hd.webp', thumb: 'img/scenes/thumbs/house5.webp',
    cam: { f: 875.0, R: [0.737277, 0.0, 0.67559, 0.030467, -0.998983, -0.033249, 0.674903, 0.045097, -0.736527], h: 0.923, hy: 486.0 },
    mask: 'img/scenes/house5_m.png?v=2311c',
    sun: [0.5, 0.7, -0.4], expo: 0.68, tintK: 0.3, shadeK: 0.45,
  },
  {
    id: 'house6', name: 'Барнхаус со стеклом', img: 'img/scenes/house6.webp', imgHD: 'img/scenes/house6_hd.webp', thumb: 'img/scenes/thumbs/house6.webp',
    cam: { f: 1125.0, R: [0.601815, 0.0, 0.798636, 0.040766, -0.998696, -0.030719, 0.797594, 0.051044, -0.60103], h: 1.127, hy: 504.0 },
    mask: 'img/scenes/house6_m.png?v=2311c',
    sun: [0.5, 0.7, -0.4], expo: 0.68, tintK: 0.3, shadeK: 0.45,
  },
];
