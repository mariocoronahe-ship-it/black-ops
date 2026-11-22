// Piezas compartidas por los escenarios «El Ojo de CALOT» (residentes) y «Núcleo de obsidiana» (adscrita):
// renderer, entorno de reflejos para metal/cristal, niebla y polvo rojos, y posprocesado con bloom.

import { QUAD_VERT, BRIGHT_FRAG, BLUR_FRAG, MIST_VERT, MIST_FRAG, DUST_VERT, DUST_FRAG } from '../androide/android-shaders.js?v=20261122i';
import { buildNoiseMap, buildDotMap } from '../androide/android-textures.js?v=20261122i';
import { rng } from '../androide/android-timeline.js?v=20261122i';

export const QUALITY = [
  { level: 0, dpr: 0.75, msaa: 0, bloom: 0, haze: 2, dust: 120, aber: false },
  { level: 1, dpr: 1.25, msaa: 2, bloom: 1, haze: 4, dust: 300, aber: true },
  { level: 2, dpr: 1.5, msaa: 4, bloom: 2, haze: 6, dust: 600, aber: true },
  { level: 3, dpr: 2, msaa: 4, bloom: 2, haze: 8, dust: 1000, aber: true },
];

export const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
export const smooth = (x) => { x = clamp(x); return x * x * (3 - 2 * x); };
export const lerp = (a, b, k) => a + (b - a) * k;
export { rng };

export function track(t, keys, ease = smooth) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (t <= keys[i][0]) {
      const [a, va] = keys[i - 1];
      const [b, vb] = keys[i];
      return lerp(va, vb, ease((t - a) / (b - a)));
    }
  }
  return keys[keys.length - 1][1];
}

export const bump = (t, at, dur) => {
  const x = (t - at) / dur;
  if (x <= 0 || x >= 1) return 0;
  const s = Math.sin(Math.PI * x);
  return s * s;
};

// Composición: bloom, tono ACES, gradación roja en sombras, viñeta, grano y cortes de glitch
const COMPOSITE = `
  uniform sampler2D tScene, tBloomA, tBloomB;
  uniform vec2 uRes; uniform float uTime, uAber, uGrain, uExposure, uBloom, uGlitch, uFlash;
  varying vec2 vUv;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  void main(){
    vec2 uv = vUv;
    float row = floor(uv.y * 54.0);
    float gj = step(0.8, hash(vec2(row, floor(uTime * 24.0)))) * uGlitch;
    uv.x += (hash(vec2(row, 3.1)) - 0.5) * 0.05 * gj;
    vec2 d = uv - 0.5;
    float ab = uAber * (0.4 + length(d) * 2.0) + gj * 0.006;
    vec3 col;
    col.r = texture2D(tScene, uv + d * ab + vec2(gj * 0.006, 0.0)).r;
    col.g = texture2D(tScene, uv).g;
    col.b = texture2D(tScene, uv - d * ab - vec2(gj * 0.006, 0.0)).b;
    vec3 bloom = texture2D(tBloomA, uv).rgb * 0.75 + texture2D(tBloomB, uv).rgb * 1.1;
    col += bloom * uBloom * 0.6;
    col *= uExposure;
    col += vec3(1.0, 0.22, 0.25) * uFlash;
    col = aces(col);
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    // Sombras hacia rojo vino, altas luces limpias
    col = mix(col, col * vec3(1.08, 0.86, 0.88), (1.0 - smoothstep(0.0, 0.5, l)) * 0.4);
    float ar = uRes.x / uRes.y;
    float r = length(d * vec2(ar, 1.0));
    col *= mix(0.12, 1.0, 1.0 - smoothstep(0.3, 1.0, r * 0.95));
    col = pow(max(col, 0.0), vec3(1.0 / 2.2));
    float g = hash(vUv * uRes + fract(uTime * 7.3) * 91.0) - 0.5;
    col += g * uGrain * (0.35 + 0.65 * (1.0 - l)) * step(0.001, uExposure);
    gl_FragColor = vec4(col, 1.0);
  }`;

export async function createForge({ THREE, canvas, level }) {
  let lv = QUALITY[Math.max(0, Math.min(3, level))];
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, stencil: false, powerPreference: 'high-performance' });
  if (!renderer.capabilities.isWebGL2) { renderer.dispose(); throw new Error('WebGL2 no disponible'); }
  renderer.setClearColor(0x000000, 1);
  renderer.toneMapping = THREE.NoToneMapping;

  const owned = [];
  const own = (x) => { owned.push(x); return x; };

  // Entorno de reflejos propio: cuarto negro con una caja de luz blanca y tiras rojas (sin tintes azules)
  const scene = new THREE.Scene();
  const envScene = new THREE.Scene();
  const envGeos = [];
  const room = new THREE.Mesh(new THREE.BoxGeometry(12, 12, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.012, 0.006, 0.007), side: THREE.BackSide }));
  envScene.add(room);
  const panel = (w, h, pos, col) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(...col), side: THREE.DoubleSide }));
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    envScene.add(m);
  };
  panel(3.2, 2.2, [-3.5, 4.2, 3.5], [7, 6.8, 6.6]);
  panel(0.45, 4.5, [5.2, 0.4, -1.2], [9, 0.25, 0.35]);
  panel(0.3, 3.5, [-5.2, -0.6, -2.4], [5, 0.12, 0.2]);
  panel(6, 6, [0, -5.5, 0], [1.2, 0.04, 0.07]);
  panel(1.4, 1.0, [2.6, 3.0, -4.6], [3.2, 3.1, 3.0]);
  panel(5, 1.2, [0.5, 3.0, 5.4], [1.6, 1.55, 1.5]);
  panel(0.25, 5, [3.4, 0, 4.6], [6, 0.18, 0.25]);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromScene(envScene, 0.035);
  pmrem.dispose();
  envScene.traverse((o) => { o.geometry?.dispose?.(); o.material?.dispose?.(); });
  scene.environment = envRT.texture;

  const camera = new THREE.PerspectiveCamera(30, 16 / 9, 0.05, 80);
  const noiseTex = own(buildNoiseMap(THREE, 256));
  const dotTex = own(buildDotMap(THREE));

  // Niebla roja y polvo en suspensión (mismos shaders que la intro del androide)
  const mists = [];
  const mistGeo = own(new THREE.PlaneGeometry(9, 5));
  for (let i = 0; i < 8; i++) {
    const m = own(new THREE.ShaderMaterial({
      vertexShader: MIST_VERT, fragmentShader: MIST_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: {
        uN: { value: noiseTex }, uTime: { value: 0 }, uSeed: { value: i * 1.7 + 0.3 }, uAmt: { value: 0 },
        uColA: { value: new THREE.Color(i % 2 ? 0x6a0e1c : 0x40070f) }, uColB: { value: new THREE.Color(i % 3 ? 0x1a0a0e : 0x24080c) },
      },
    }));
    const p = new THREE.Mesh(mistGeo, m);
    p.position.set((i % 3 - 1) * 0.8, (i % 2) * 0.3 - 0.2, -3.6 + i * 0.45);
    p.rotation.y = i % 2 ? 0.12 : -0.12;
    p.frustumCulled = false;
    scene.add(p);
    mists.push(p);
  }
  const dustMax = QUALITY[3].dust;
  const dr = rng(9);
  const dpos = new Float32Array(dustMax * 3);
  const dseed = new Float32Array(dustMax);
  for (let i = 0; i < dustMax; i++) {
    dpos[i * 3] = (dr() - 0.5) * 6;
    dpos[i * 3 + 1] = -1.6 + dr() * 2.4;
    dpos[i * 3 + 2] = -3.0 + dr() * 4.2;
    dseed[i] = dr();
  }
  const dustGeo = own(new THREE.BufferGeometry());
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
  dustGeo.setAttribute('aSeed', new THREE.BufferAttribute(dseed, 1));
  const dustMat = own(new THREE.ShaderMaterial({
    vertexShader: DUST_VERT, fragmentShader: DUST_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uMap: { value: dotTex }, uTime: { value: 0 }, uPx: { value: 800 }, uSize: { value: 0.014 }, uAmt: { value: 0 },
      uColA: { value: new THREE.Color(1.0, 0.25, 0.3) }, uColB: { value: new THREE.Color(0.85, 0.8, 0.8) },
    },
  }));
  const dust = new THREE.Points(dustGeo, dustMat);
  dust.frustumCulled = false;
  scene.add(dust);

  // Posprocesado
  const floatOk = renderer.extensions.has('EXT_color_buffer_float') || renderer.extensions.has('EXT_color_buffer_half_float');
  const rtType = floatOk ? THREE.HalfFloatType : THREE.UnsignedByteType;
  const rtScene = new THREE.WebGLRenderTarget(1, 1, { type: rtType, samples: lv.msaa });
  const mk = () => new THREE.WebGLRenderTarget(1, 1, { type: rtType, depthBuffer: false });
  const rtA = mk(); const rtB = mk(); const rtC = mk(); const rtD = mk();
  const quadScene = new THREE.Scene();
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quad = new THREE.Mesh(own(new THREE.PlaneGeometry(2, 2)));
  quad.frustumCulled = false;
  quadScene.add(quad);
  const pass = (frag, uniforms) => own(new THREE.ShaderMaterial({ vertexShader: QUAD_VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false }));
  const brightMat = pass(BRIGHT_FRAG, { tSrc: { value: null }, uThr: { value: 0.8 } });
  const blurMat = pass(BLUR_FRAG, { tSrc: { value: null }, uDir: { value: new THREE.Vector2() } });
  const compMat = pass(COMPOSITE, {
    tScene: { value: rtScene.texture }, tBloomA: { value: rtA.texture }, tBloomB: { value: rtC.texture },
    uRes: { value: new THREE.Vector2(1, 1) }, uTime: { value: 0 }, uAber: { value: 0.001 }, uGrain: { value: 0.05 },
    uExposure: { value: 0 }, uBloom: { value: 0 }, uGlitch: { value: 0 }, uFlash: { value: 0 },
  });
  const run = (m, target) => { quad.material = m; renderer.setRenderTarget(target); renderer.render(quadScene, quadCam); };
  const blur = (s, d, sx, sy) => { blurMat.uniforms.tSrc.value = s.texture; blurMat.uniforms.uDir.value.set(sx / s.width, sy / s.height); run(blurMat, d); };

  let W = canvas.clientWidth || 1280;
  let H = canvas.clientHeight || 720;
  const onSize = [];
  const applySize = () => {
    const px = Math.min(window.devicePixelRatio || 1, lv.dpr);
    renderer.setPixelRatio(Math.max(0.5, px));
    renderer.setSize(W, H, false);
    const bw = renderer.domElement.width, bh = renderer.domElement.height;
    rtScene.setSize(bw, bh);
    rtA.setSize(Math.max(8, bw >> 2), Math.max(8, bh >> 2));
    rtB.setSize(Math.max(8, bw >> 2), Math.max(8, bh >> 2));
    rtC.setSize(Math.max(8, bw >> 3), Math.max(8, bh >> 3));
    rtD.setSize(Math.max(8, bw >> 3), Math.max(8, bh >> 3));
    compMat.uniforms.uRes.value.set(bw, bh);
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    dustMat.uniforms.uPx.value = bh / (2 * Math.tan((camera.fov * Math.PI) / 360));
    onSize.forEach((fn) => fn({ W, H, bw, bh }));
  };
  const setLevel = (n) => {
    lv = QUALITY[Math.max(0, Math.min(3, n))];
    if (lv.msaa !== rtScene.samples) { rtScene.samples = lv.msaa; rtScene.dispose(); }
    mists.forEach((m, i) => { m.visible = i < lv.haze; });
    dustGeo.setDrawRange(0, lv.dust);
    applySize();
  };

  const atmosphere = (tt, { mist = 0, dust: dAmt = 0 }) => {
    mists.forEach((m, i) => {
      m.material.uniforms.uTime.value = tt;
      m.material.uniforms.uAmt.value = mist * (0.55 + (i % 3) * 0.25);
    });
    dustMat.uniforms.uTime.value = tt;
    dustMat.uniforms.uAmt.value = dAmt;
  };

  const post = (tt, { exposure = 1, bloom = 0.8, aberration = 0.0008, glitch = 0, flash = 0 }) => {
    compMat.uniforms.uTime.value = tt;
    compMat.uniforms.uExposure.value = exposure;
    compMat.uniforms.uBloom.value = lv.bloom ? bloom : 0;
    compMat.uniforms.uAber.value = lv.aber ? aberration : 0;
    compMat.uniforms.uGlitch.value = glitch;
    compMat.uniforms.uFlash.value = flash;
    compMat.uniforms.uGrain.value = lv.level === 0 ? 0.03 : 0.05;
  };

  const render = () => {
    renderer.setRenderTarget(rtScene);
    renderer.render(scene, camera);
    if (lv.bloom) {
      brightMat.uniforms.tSrc.value = rtScene.texture;
      run(brightMat, rtA);
      blur(rtA, rtB, 1, 0); blur(rtB, rtA, 0, 1);
      blur(rtA, rtC, 0, 0);
      blur(rtC, rtD, 1.6, 0); blur(rtD, rtC, 0, 1.6);
      if (lv.bloom > 1) { blur(rtC, rtD, 2.8, 0); blur(rtD, rtC, 0, 2.8); }
    }
    run(compMat, null);
  };

  const dispose = () => {
    renderer.setRenderTarget(null);
    [rtScene, rtA, rtB, rtC, rtD, envRT].forEach((r) => r.dispose());
    const seen = new Set();
    [scene, quadScene].forEach((sc) => sc.traverse((o) => {
      o.geometry?.dispose?.();
      const m = o.material;
      (Array.isArray(m) ? m : m ? [m] : []).forEach((x) => { if (!seen.has(x)) { seen.add(x); x.dispose(); } });
    }));
    owned.forEach((x) => x.dispose?.());
    scene.environment = null;
    renderer.dispose();
    renderer.forceContextLoss();
  };

  const resize = (w, h) => { W = Math.max(2, w); H = Math.max(2, h); applySize(); };

  return {
    THREE, renderer, scene, camera, own, noiseTex,
    get W() { return W; }, get H() { return H; },
    get level() { return lv.level; },
    onSize: (fn) => onSize.push(fn),
    setLevel, resize, render, dispose, atmosphere, post,
    init() { setLevel(lv.level); },
  };
}

// Interfaz que espera createAndroidIntro
export function stageApi(forge, update, info) {
  return {
    resize: forge.resize,
    update,
    render: forge.render,
    dispose: forge.dispose,
    setLevel: forge.setLevel,
    get level() { return forge.level; },
    get info() { return { level: forge.level, ...info }; },
    canvas: forge.renderer.domElement,
    onContextLost: (fn) => forge.renderer.domElement.addEventListener('webglcontextlost', fn, { once: true }),
  };
}
