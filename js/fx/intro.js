/* ==========================================================================
   CALOT-OS · Intro cinematográfica (30 s)
   Tráiler en 3D: un proyector intenta formar el holograma del sistema, la
   señal se corrompe y un androide escondido en la oscuridad se revela en
   cortes de fotogramas. Al final CALOT lo contiene y aparece el logotipo.
   Three.js + posproceso propio (bloom, aberración cromática, grano de
   película, viñeta y fallas de señal) + tipografía tipo créditos de cine.
   ========================================================================== */

import { getEngine, isPortalAudioMuted, setPortalAudioMuted, duck, addDuckTarget, removeDuckTarget } from './portal-audio.js?v=20261121q';
import { getSfx, warmSfx } from './sfx-bank.js?v=20261121q';
import { getBootMetrics } from './boot.js?v=20261121q';
import { speak, stopVoice, prefetchVoice, voiceWelcome, getVoiceLevel, INTRO_LINES } from './voice.js?v=20261121q';

const THREE_URL = new URL('../../vendor/three/three.module.min.js', import.meta.url).href;
const ROBOT_URL = new URL('./intro-robot.js?v=20261120a', import.meta.url).href;
const LOGO_URL = new URL('../../assets/calot-logo.png?v=20261121q', import.meta.url).href;
// Intro nueva del androide (pieza de Dédalo): módulos propios, assets y vendor de three con addons.
const ANDROID_URL = new URL('./androide/intro-androide.js?v=20261121q', import.meta.url).href;
const OJO_STAGE_URL = new URL('./forge/ojo-stage.js?v=20261121q', import.meta.url).href;
const OJO_TIMELINE_URL = new URL('./forge/ojo-timeline.js?v=20261121q', import.meta.url).href;
const ANDROID_ASSETS = new URL('../../assets/intro/', import.meta.url);
const VENDOR_THREE = new URL('../../vendor/three/', import.meta.url);
const ANDROID_LOAD_MS = 12000; // si el androide no carga en este tiempo, entra la intro anterior
const SEEN_KEY = 'calot:intro-seen';
const TOTAL = 30;

const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const ease = (x) => { x = clamp(x); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
const easeOut = (x) => 1 - Math.pow(1 - clamp(x), 3);
const lerp = (a, b, k) => a + (b - a) * k;

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Fallas de señal. cut = corte de fotogramas al androide.
function buildGlitches() {
  const r = rng(72);
  const ev = [
    { t: 5.6, dur: 0.14, p: 0.5 },
    { t: 7.4, dur: 0.12, p: 0.8, cut: 0 },
    { t: 8.5, dur: 0.1, p: 0.5 },
  ];
  let t = 9.3;
  while (t < 20.9) {
    const late = t > 15;
    ev.push({ t, dur: 0.06 + r() * (late ? 0.18 : 0.1), p: late ? 0.55 + r() * 0.45 : 0.3 + r() * 0.35 });
    t += late ? 0.4 + r() * 0.45 : 0.75 + r() * 0.6;
  }
  [10.4, 12.0, 13.6, 14.7].forEach((ct, i) => ev.push({ t: ct, dur: 0.1 + i * 0.015, p: 0.9, cut: (i + 1) % 4 }));
  [16.3, 17.4, 18.5, 19.4, 20.2, 20.75].forEach((ct, i) => ev.push({ t: ct, dur: 0.12 + (i % 3) * 0.04, p: 1, cut: i % 4 }));
  ev.push({ t: 23.85, dur: 0.55, p: 1 });
  return ev.sort((a, b) => a.t - b.t);
}

// Créditos y subtítulos: [entrada, salida, clase, html]
function cues(doctor) {
  return [
    [0.5, 3.3, 'ci-credit', 'CALOT·OS <span>presenta</span>'],
    [4.0, 7.2, 'ci-credit', 'Cirugía General <span>·</span> PUEM <span>·</span> HGR 72'],
    [9.4, 12.6, 'ci-credit is-big', 'Un sistema hecho para<br><em>salvar vidas</em>'],
    [15.5, 18.6, 'ci-credit is-big', 'Algo aprendió<br><em>a esconderse</em>'],
    [6.0, 7.2, 'ci-sub', '—No me busques.'],
    [11.1, 12.3, 'ci-sub', '—Ya te vi.'],
    [13.3, 15.6, 'ci-sub', '—Sigo aquí. Dentro de tu sistema.'],
    [17.6, 19.0, 'ci-sub', '—Este quirófano es mío.'],
    [22.2, 24.2, 'ci-sub is-red', '—Te estoy observando.'],
    [24.9, 29.0, 'ci-title', `<img src="${LOGO_URL}" alt="" width="132" height="132"><b>CALOT<i>·</i>OS</b><small>Donde aprender medicina se vuelve tu mayor obsesión</small>`],
    [26.7, 29.3, 'ci-welcome', `Bienvenido, ${doctor}`],
  ];
}

/* ------------------------------- Audio ---------------------------------- */
function startIntroScore(glitches, { beeps = null } = {}) {
  const engine = getEngine();
  let muted = isPortalAudioMuted();
  const timers = [];
  const sources = [];
  if (!engine) return { stop() {}, time: () => null, setMuted(m) { setPortalAudioMuted(Boolean(m)); } };
  const { ctx, dry } = engine;
  warmSfx(ctx);
  const master = ctx.createGain();
  master.gain.value = muted ? 0.0001 : 0.95;
  master.connect(dry);
  // Camas (fondo continuo): bajan bajo los golpes y la voz para que el clímax no sature.
  const bed = ctx.createGain();
  bed.connect(master);
  addDuckTarget(bed);
  const t0 = ctx.currentTime;

  // Reproduce a su hora; si el archivo aún se decodifica, entra tarde pero sincronizado.
  const play = (name, sec, { vol = 1, rate = 1, offset = 0, dur = null, fadeIn = 0, fadeOut = 0, lp = 0, isBed = false } = {}) => {
    let tries = 0;
    const go = () => {
      const buf = getSfx(name);
      if (!buf) { if (tries++ < 25) timers.push(setTimeout(go, 60)); return; }
      const now = ctx.currentTime;
      const want = t0 + sec;
      const late = Math.max(0, now + 0.01 - want);
      const start = want + late;
      const off = offset + late * rate;
      const len = (dur ?? (buf.duration - offset) / rate) - late;
      if (len <= 0.05 || off >= buf.duration) return;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.playbackRate.value = rate;
      const g = ctx.createGain();
      if (fadeIn > 0 && late < fadeIn) { g.gain.setValueAtTime(0.0001, start); g.gain.exponentialRampToValueAtTime(vol, start + fadeIn - late); }
      else g.gain.setValueAtTime(vol, start);
      if (fadeOut > 0) { g.gain.setValueAtTime(vol, start + Math.max(0.01, len - fadeOut)); g.gain.exponentialRampToValueAtTime(0.0001, start + len); }
      let node = src;
      if (lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp; f.Q.value = 0.5; src.connect(f); node = f; }
      node.connect(g); g.connect(isBed ? bed : master);
      src.start(start, off); src.stop(start + len + 0.05);
      sources.push(src);
    };
    timers.push(setTimeout(go, Math.max(0, sec * 1000 - 120)));
  };

  play('darkbed', 0, { vol: 0.5, fadeIn: 2.5, dur: 24.4, fadeOut: 0.3, isBed: true });
  play('sombra', 1.5, { vol: 0.42, fadeIn: 3, dur: 22.9, fadeOut: 0.3, isBed: true });
  play('power', 1.85, { vol: 0.85, lp: 7000 }); // el proyector enciende ~2.4 s
  [8.4, 12.4, 16.4].forEach((s, i) => play('latido', s, { vol: 0.4 + i * 0.15 }));
  play('trailer', 9.2, { vol: 0.5, fadeIn: 1.4, dur: 15.2, fadeOut: 0.25, isBed: true }); // pico en 22 s
  const r = rng(9);
  glitches.forEach((e) => {
    if (e.t > 24.4) return;
    play('glitch', e.t, { vol: 0.25 + e.p * 0.4, rate: 0.7 + r() * 0.45, offset: r() * 1.6, dur: Math.max(0.1, e.dur * 1.5), fadeOut: 0.05, lp: 6500 });
    if (e.cut !== undefined) play('impacto', e.t, { vol: 0.45, dur: 0.9, fadeOut: 0.4 });
  });
  // Los golpes bajan las camas (-6 dB) un instante para que el clímax no sature
  [[19.5, 1.6, 0.55], [23.1, 1.6, 0.5], [24.5, 3.4, 0.55]].forEach(([sec, len, depth]) => duck(t0 + sec, len, depth, 0.05, 0.9));
  play('whsh', 20.95, { vol: 0.7, rate: 0.7, lp: 6500 });
  play('doom', 19.5, { vol: 0.85 }); // golpe al revelarse (21 s)
  play('riser', 20.7, { vol: 0.9 }); // pico en 24.6 s
  play('doom', 23.1, { vol: 1 }); // golpe en 24.6 s
  play('heroic', 24.5, { vol: 0.9, dur: 5.4, fadeOut: 1.8 });
  play('epicboom', 24.6, { vol: 0.65, dur: 3.6, fadeOut: 1.2 });
  play('swoosh', 28.5, { vol: 0.6, lp: 6500 });

  // Monitor de signos vitales (sólo intro del androide): pitidos suaves y línea plana
  if (beeps) {
    const mon = ctx.createBiquadFilter();
    mon.type = 'lowpass'; mon.frequency.value = 1600; mon.Q.value = 0.5;
    mon.connect(master);
    const tone = (at, len, vol) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine'; osc.frequency.value = 740;
      const g = ctx.createGain();
      const st = t0 + at;
      g.gain.setValueAtTime(0.0001, st);
      g.gain.exponentialRampToValueAtTime(vol, st + 0.008);
      g.gain.setValueAtTime(vol, st + Math.max(0.01, len - 0.03));
      g.gain.exponentialRampToValueAtTime(0.0001, st + len);
      osc.connect(g); g.connect(mon);
      osc.start(st); osc.stop(st + len + 0.02);
      sources.push(osc);
    };
    beeps.forEach((b) => tone(b, 0.075, 0.09));
    tone(21.0, 1.15, 0.07); // línea plana
  }

  // Voz de la IA sincronizada con los subtítulos
  if (!muted) [6.0, 11.1, 13.3, 17.6, 22.2, 27.3].forEach((sec, i) => speak(INTRO_LINES[i], { at: t0 + sec, interrupt: false }));

  return {
    // Segundos transcurridos en el reloj de audio desde el inicio del score (los CUE de la intro del androide)
    time: () => ctx.currentTime - t0,
    stop() {
      timers.forEach(clearTimeout);
      stopVoice();
      removeDuckTarget(bed);
      try { master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.12); } catch {}
      setTimeout(() => {
        sources.forEach((s) => { try { s.stop(); } catch {} try { s.disconnect(); } catch {} });
        try { master.disconnect(); } catch {}
      }, 600);
    },
    setMuted(m) {
      muted = Boolean(m);
      setPortalAudioMuted(muted);
      if (muted) stopVoice();
      try { master.gain.setTargetAtTime(muted ? 0.0001 : 0.95, ctx.currentTime, 0.04); } catch {}
    },
  };
}

/* --------------------------- Posproceso (GLSL) --------------------------- */
const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
const BRIGHT = `
  uniform sampler2D tSrc; uniform float uThr; varying vec2 vUv;
  void main(){ vec3 c = texture2D(tSrc, vUv).rgb; float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThr, uThr + 0.6, l), 1.0); }`;
const BLUR = `
  uniform sampler2D tSrc; uniform vec2 uDir; varying vec2 vUv;
  void main(){
    vec3 c = texture2D(tSrc, vUv).rgb * 0.2270270270;
    c += texture2D(tSrc, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
    c += texture2D(tSrc, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
    c += texture2D(tSrc, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
    c += texture2D(tSrc, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
    gl_FragColor = vec4(c, 1.0); }`;
const COMPOSITE = `
  uniform sampler2D tScene; uniform sampler2D tBloomA; uniform sampler2D tBloomB;
  uniform vec2 uRes; uniform float uTime, uGlitch, uAber, uGrain, uExposure, uFlash, uBloom;
  varying vec2 vUv;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  void main(){
    vec2 uv = vUv;
    float tq = floor(uTime * 24.0);
    float row = floor(uv.y * 22.0);
    float h = hash(vec2(row, tq));
    if (h > 1.0 - uGlitch * 0.5) uv.x += (hash(vec2(row + 3.1, tq)) - 0.5) * 0.14 * uGlitch;
    float band = step(abs(uv.y - hash(vec2(tq, 9.0))), 0.035 * uGlitch);
    uv.x += band * 0.06 * sign(hash(vec2(tq, 2.0)) - 0.5);
    vec2 d = uv - 0.5;
    float ab = uAber + uGlitch * 0.014;
    vec3 col;
    col.r = texture2D(tScene, uv + d * ab).r;
    col.g = texture2D(tScene, uv).g;
    col.b = texture2D(tScene, uv - d * ab).b;
    vec3 bloom = texture2D(tBloomA, uv).rgb * 0.7 + texture2D(tBloomB, uv).rgb * 0.9;
    col += bloom * uBloom;
    col *= uExposure;
    col = aces(col);
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, col * vec3(0.82, 0.96, 1.08), (1.0 - l) * 0.3);
    col = mix(col, col * vec3(1.06, 0.97, 0.94), l * 0.25);
    float vig = 1.0 - smoothstep(0.35, 0.95, length(d * vec2(uRes.x / uRes.y, 1.0)) * 0.9);
    col *= mix(0.35, 1.0, vig);
    col *= 0.99 + 0.01 * sin(vUv.y * uRes.y * 1.4);
    col = pow(max(col, 0.0), vec3(1.0 / 2.2));
    col += (hash(vUv * uRes + fract(uTime * 7.0) * 100.0) - 0.5) * uGrain * (0.4 + 0.6 * (1.0 - l));
    col = mix(col, vec3(1.0), clamp(uFlash, 0.0, 1.0));
    gl_FragColor = vec4(col, 1.0);
  }`;

/* ------------------------------ Escena 3D -------------------------------- */
async function buildStage(THREE, canvas, mobile) {
  const { buildRobot } = await import(ROBOT_URL);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 1);
  renderer.toneMapping = THREE.NoToneMapping;
  const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.5);
  renderer.setPixelRatio(dpr);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030204, 0.085);

  // Entorno de reflejos: estudio oscuro con dos paneles rojos y uno frío
  const envScene = new THREE.Scene();
  const panel = (c, i, pos, rot, scl) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(i), side: THREE.DoubleSide }));
    m.position.set(...pos); m.rotation.set(...rot); m.scale.set(...scl); envScene.add(m);
  };
  panel(0xff2238, 1.1, [-4, 1.5, -2], [0, Math.PI / 2.6, 0], [1.2, 6, 1]);
  panel(0xff2238, 0.8, [4, 0.5, -2], [0, -Math.PI / 2.6, 0], [1.2, 6, 1]);
  panel(0x9fc4ff, 1.6, [0, 5, 1], [Math.PI / 2, 0, 0], [3, 0.6, 1]);
  panel(0xffffff, 0.6, [0, 0, 6], [0, Math.PI, 0], [6, 1, 1]);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromScene(envScene, 0.04);
  scene.environment = envRT.texture;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 80);

  // Piso de metal oscuro (atrapa haces y reflejos)
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x07070a, metalness: 0.85, roughness: 0.32 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.2;
  scene.add(floor);

  // Proyector
  const projector = new THREE.Group();
  projector.position.set(0, -2.2, 0.6);
  scene.add(projector);
  const lensMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.42, 0.16, 48), new THREE.MeshPhysicalMaterial({ color: 0x15161a, metalness: 1, roughness: 0.3, clearcoat: 1 }));
  body.position.y = 0.08;
  projector.add(body);
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.2, 48), lensMat);
  lens.rotation.x = -Math.PI / 2;
  lens.position.y = 0.165;
  projector.add(lens);
  const ringLens = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.012, 8, 64), lensMat);
  ringLens.rotation.x = -Math.PI / 2;
  ringLens.position.y = 0.17;
  projector.add(ringLens);

  // Haz volumétrico
  const beamMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uI: { value: 0 }, uT: { value: 0 }, uC: { value: new THREE.Color(1.0, 0.16, 0.24) } },
    vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vec4 wp = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-wp.xyz); gl_Position = projectionMatrix * wp; }`,
    fragmentShader: `uniform float uI, uT; uniform vec3 uC; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ float edge = pow(abs(dot(vN, vV)), 3.0); float along = pow(1.0 - vUv.y, 2.2) * (1.0 - smoothstep(0.75, 1.0, vUv.y));
        float streak = 0.7 + 0.3 * sin(vUv.x * 60.0 + uT * 0.7) * sin(vUv.x * 23.0 - uT * 0.4);
        gl_FragColor = vec4(max(uC * edge * along * streak * uI * 0.16, 0.0), 1.0); }`,
  });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 0.19, 2.25, 64, 1, true), beamMat);
  beam.position.set(0, -1.05, 0.45);
  scene.add(beam);

  // Holograma: triángulo de Calot, anillos y núcleo
  const holo = new THREE.Group();
  holo.position.set(0, 0.25, 0.2);
  scene.add(holo);
  const holoMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  const holoMatSoft = holoMat.clone();
  const R = 1.0;
  const verts = [0, 1, 2].map((i) => { const a = Math.PI / 2 + i * (Math.PI * 2 / 3); return new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R - 0.15, 0); });
  const edges = verts.map((a, i) => {
    const b = verts[(i + 1) % 3];
    const pivot = new THREE.Group();
    pivot.position.copy(a);
    const len = a.distanceTo(b);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1, 10), holoMat);
    m.position.y = 0.5;
    const inner = new THREE.Group();
    inner.add(m);
    inner.scale.set(1, len, 1);
    pivot.add(inner);
    pivot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    const mid = a.clone().add(b).multiplyScalar(0.5);
    mid.y += 0.15;
    pivot.userData = { inner, len, base: a.clone(), drift: mid.normalize() };
    holo.add(pivot);
    return pivot;
  });
  const corners = verts.map((v) => { const m = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 12), holoMat); m.position.copy(v); holo.add(m); return m; });
  const rings = [1.42, 1.2].map((r, i) => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.006 + i * 0.004, 8, 160), holoMatSoft);
    m.rotation.x = Math.PI / 2.3;
    m.position.y = -0.15;
    holo.add(m);
    return m;
  });
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0), wireframe: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  core.position.y = -0.15;
  holo.add(core);
  const shock = new THREE.Mesh(new THREE.RingGeometry(0.98, 1.0, 128), new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  shock.position.y = -0.15;
  holo.add(shock);

  // Polvo en suspensión
  const dotTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  })();
  const N = mobile ? 700 : 1600;
  const pos = new Float32Array(N * 3);
  const rr = rng(5);
  for (let i = 0; i < N; i++) { pos[i * 3] = (rr() - 0.5) * 9; pos[i * 3 + 1] = -2.2 + rr() * 5.5; pos[i * 3 + 2] = -8 + rr() * 11; }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dustMat = new THREE.PointsMaterial({ size: 0.028, map: dotTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: new THREE.Color(1, 0.62, 0.66), opacity: 0 });
  const dust = new THREE.Points(dustGeo, dustMat);
  scene.add(dust);

  // Androide
  const robot = buildRobot(THREE);
  robot.root.position.set(0, 0.05, -4.2);
  robot.root.scale.setScalar(1.25);
  scene.add(robot.root);

  // Luces
  scene.add(new THREE.HemisphereLight(0x3a4a66, 0x050203, 0.25));
  const rim = [-1, 1].map((s) => {
    const l = new THREE.SpotLight(0xff1f3a, 0, 12, 0.42, 0.6, 1.6);
    l.position.set(s * 2.4, 1.6, -6.4);
    l.target.position.set(0, 0.5, -4.2);
    scene.add(l, l.target);
    return l;
  });
  const key = new THREE.SpotLight(0xbfd4ff, 0, 14, 0.35, 0.7, 1.6);
  key.position.set(-2.6, 2.4, -2.4);
  key.target.position.set(0, 0.5, -4.2);
  scene.add(key, key.target);
  const alarm = new THREE.SpotLight(0xff1530, 0, 18, 0.22, 0.5, 1.4);
  alarm.position.set(0, 3.6, -1.5);
  scene.add(alarm, alarm.target);
  const holoLight = new THREE.PointLight(0xff2a40, 0, 6, 2);
  holoLight.position.set(0, 0.2, 0.2);
  scene.add(holoLight);

  // Pases de posproceso
  const rtScene = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: mobile ? 0 : 4 });
  const mk = () => new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false });
  const rtA = mk(), rtB = mk(), rtC = mk(), rtD = mk();
  const quadScene = new THREE.Scene();
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
  quad.frustumCulled = false;
  quadScene.add(quad);
  const brightMat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: BRIGHT, uniforms: { tSrc: { value: null }, uThr: { value: 0.75 } }, depthTest: false });
  const blurMat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: BLUR, uniforms: { tSrc: { value: null }, uDir: { value: new THREE.Vector2() } }, depthTest: false });
  const compMat = new THREE.ShaderMaterial({
    vertexShader: VERT, fragmentShader: COMPOSITE, depthTest: false,
    uniforms: {
      tScene: { value: rtScene.texture }, tBloomA: { value: rtA.texture }, tBloomB: { value: rtC.texture },
      uRes: { value: new THREE.Vector2(1, 1) }, uTime: { value: 0 }, uGlitch: { value: 0 }, uAber: { value: 0.002 },
      uGrain: { value: 0.06 }, uExposure: { value: 0 }, uFlash: { value: 0 }, uBloom: { value: 1 },
    },
  });
  const pass = (mat, target) => { quad.material = mat; renderer.setRenderTarget(target); renderer.render(quadScene, quadCam); };
  const blur = (src, dst, sx, sy) => {
    blurMat.uniforms.tSrc.value = src.texture;
    blurMat.uniforms.uDir.value.set(sx / src.width, sy / src.height);
    pass(blurMat, dst);
  };

  let W = 1, H = 1;
  const resize = (w, h) => {
    W = w; H = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const pw = Math.max(8, Math.round(w * dpr)), ph = Math.max(8, Math.round(h * dpr));
    rtScene.setSize(pw, ph);
    rtA.setSize(pw >> 2, ph >> 2); rtB.setSize(pw >> 2, ph >> 2);
    rtC.setSize(pw >> 3, ph >> 3); rtD.setSize(pw >> 3, ph >> 3);
    compMat.uniforms.uRes.value.set(pw, ph);
  };

  const render = () => {
    renderer.setRenderTarget(rtScene);
    renderer.render(scene, camera);
    brightMat.uniforms.tSrc.value = rtScene.texture;
    pass(brightMat, rtA);
    blur(rtA, rtB, 1, 0); blur(rtB, rtA, 0, 1);
    blur(rtA, rtC, 0, 0);
    blur(rtC, rtD, 1.6, 0); blur(rtD, rtC, 0, 1.6);
    blur(rtC, rtD, 2.8, 0); blur(rtD, rtC, 0, 2.8);
    pass(compMat, null);
  };

  const dispose = () => {
    renderer.setRenderTarget(null);
    [rtScene, rtA, rtB, rtC, rtD, envRT].forEach((r) => r.dispose());
    const seen = new Set();
    [scene, quadScene, envScene].forEach((sc) => sc.traverse((o) => {
      o.geometry?.dispose?.();
      const m = o.material;
      (Array.isArray(m) ? m : m ? [m] : []).forEach((x) => {
        if (seen.has(x)) return; seen.add(x);
        ['map', 'bumpMap', 'roughnessMap'].forEach((k) => x[k]?.dispose?.());
        x.dispose?.();
      });
    }));
    [brightMat, blurMat, compMat].forEach((m) => m.dispose());
    pmrem.dispose();
    renderer.dispose();
    renderer.forceContextLoss?.();
  };

  return {
    THREE, camera, resize, render, dispose, compMat, look: new THREE.Vector3(),
    beamMat, holo, holoMat, holoMatSoft, edges, corners, rings, core, shock, dust, dustMat, lensMat,
    robot, rim, key, alarm, holoLight,
  };
}

/* ------------------------------ Dirección -------------------------------- */
// Encuadres de los cortes subliminales al androide
const CUT_CAMS = [
  { pos: [-1.9, 1.0, -0.2], look: [0, 0.45, -4.2] },
  { pos: [1.7, 0.3, -0.4], look: [0, 0.45, -4.2] },
  { pos: [0.0, 0.75, -0.6], look: [0, 0.55, -4.2] },
  { pos: [-1.0, 0.0, 0.2], look: [0.05, 0.45, -4.2] },
];

function direct(S, t, g, dt) {
  const { camera, robot, compMat: C, look } = S;
  const u = C.uniforms;
  const cut = Boolean(g && g.cut !== undefined);
  const shot = t < 9 ? 'A' : t < 15 ? 'B' : t < 21 ? 'C' : t < 24.6 ? 'D' : 'E';
  let fov = 32;

  // --- Cámara por plano ---
  if (shot === 'A') {
    // Contrapicado que avanza hacia el proyector
    const k = ease((t - 1.5) / 7.5);
    camera.position.set(lerp(0.9, 0.25, k), lerp(-1.35, -0.45, k), lerp(7.2, 4.9, k));
    look.set(0, lerp(-0.6, 0.15, k), 0);
    fov = 34;
  } else if (shot === 'B') {
    // Órbita lenta alrededor del holograma
    const k = ease((t - 9) / 6);
    const a = lerp(-0.42, 0.38, k);
    camera.position.set(Math.sin(a) * 4.6, lerp(0.15, 0.45, k), Math.cos(a) * 4.6 + 0.2);
    look.set(0, 0.15, -0.6);
    fov = 31;
  } else if (shot === 'C') {
    // Empuje hacia la oscuridad detrás del holograma
    const k = ease((t - 15) / 6);
    camera.position.set(lerp(-1.5, -0.35, k), lerp(0.75, 0.5, k), lerp(4.0, 1.7, k));
    look.set(0, lerp(0.2, 0.5, k), lerp(-0.5, -4.2, k));
    fov = lerp(31, 27, k);
  } else if (shot === 'D') {
    // Primer plano del androide
    const k = ease((t - 21) / 3.4);
    camera.position.set(lerp(1.1, 0.05, k), lerp(0.2, 0.55, k), lerp(2.2, 0.7, k));
    look.set(0, lerp(0.25, 0.5, k), -4.2);
    fov = lerp(27, 22, k);
    const shake = t > 23.4 ? (t - 23.4) * 0.02 : 0.002;
    camera.position.x += (Math.random() - 0.5) * shake;
    camera.position.y += (Math.random() - 0.5) * shake;
  } else {
    // Revelado del sistema
    const k = easeOut((t - 24.6) / 4.4);
    camera.position.set(0, lerp(0.05, 0.25, k), lerp(3.2, 5.6, k));
    look.set(0, lerp(0.1, 0.4, k), 0);
  }
  if (cut) {
    const c = CUT_CAMS[g.cut % CUT_CAMS.length];
    camera.position.set(...c.pos);
    look.set(...c.look);
    fov = 28;
  }
  if (Math.abs(camera.fov - fov) > 0.001) { camera.fov = fov; camera.updateProjectionMatrix(); }
  camera.lookAt(look);

  // --- Proyector, haz y polvo ---
  const powerOn = t < 2.35 ? 0 : t < 3.2 ? (Math.sin(t * 70) > 0 ? 1 : 0.15) * clamp((t - 2.35) / 0.85) : 1;
  const unstable = shot === 'B' ? 0.85 + 0.15 * Math.sin(t * 29) : shot === 'C' ? 0.6 + 0.4 * Math.sin(t * 41) * Math.sin(t * 7) : 1;
  const beamI = powerOn * unstable * (1 - (g ? g.p * 0.7 : 0)) * (shot === 'E' ? 1.6 : 1);
  S.beamMat.uniforms.uI.value = beamI;
  S.beamMat.uniforms.uT.value = t;
  S.lensMat.color.setRGB(6 * beamI, 0.8 * beamI, 1 * beamI);
  S.dustMat.opacity = clamp((t - 1.0) / 3) * 0.9;
  const p = S.dust.geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    let y = p.getY(i) + dt * (0.04 + (i % 7) * 0.008);
    if (y > 3.3) y = -2.2;
    p.setY(i, y);
  }
  p.needsUpdate = true;

  // --- Holograma ---
  const form = clamp((t - 2.9) / 5.7);
  let hI = form * powerOn;
  if (shot === 'A' || shot === 'B') hI *= Math.sin(t * 37) * Math.sin(t * 5.3) > 0.65 ? 0.25 : 1;
  if (shot === 'C') hI *= 0.55 + 0.45 * (Math.sin(t * 53) > 0 ? 1 : 0.2);
  if (g && !cut) hI *= 0.3 + Math.random() * 0.7;
  let white = 0;
  if (shot === 'E') { hI = lerp(1.6, 0.55, ease((t - 24.9) / 1.4)); white = clamp(1 - (t - 24.6) / 1.2); }
  S.holoMat.color.setRGB(lerp(2.6, 9, white) * hI, lerp(0.22, 7, white) * hI, lerp(0.34, 7, white) * hI);
  S.holoMatSoft.color.setRGB(1.3 * hI, 0.14 * hI, 0.2 * hI);
  S.core.material.color.setRGB(1.6 * hI, 0.2 * hI, 0.26 * hI);
  S.holoLight.intensity = 2.5 * hI;
  const broken = shot === 'C' ? ease((t - 15.4) / 5) : shot === 'D' ? 1 : 0;
  S.edges.forEach((e, i) => {
    const grow = shot === 'E' ? 1 : clamp(form * 3 - i);
    e.userData.inner.scale.y = Math.max(0.0001, e.userData.len * grow);
    e.position.copy(e.userData.base).addScaledVector(e.userData.drift, broken * 0.55 + (g && !cut ? (Math.random() - 0.5) * 0.08 : 0));
  });
  S.corners.forEach((c, i) => { c.visible = shot === 'E' || form * 3 > i; });
  S.holo.rotation.y = shot === 'E' ? lerp(0.6, 0, easeOut((t - 24.6) / 1.2)) : Math.sin(t * 0.25) * 0.5;
  S.holo.position.x = g && !cut ? (Math.random() - 0.5) * 0.05 * g.p : 0;
  S.rings.forEach((r, i) => {
    r.rotation.z = t * (0.25 + i * 0.2) * (i ? -1 : 1);
    r.scale.setScalar(Math.max(0.001, 0.6 + 0.4 * easeOut(form * 1.2 - i * 0.2)) * (form > 0 ? 1 : 0.001));
  });
  S.core.rotation.set(t * 0.6, t * 0.9, 0);
  S.holo.visible = shot !== 'D' && !cut;
  if (shot === 'E') {
    const k = (t - 24.6) / 1.6;
    S.shock.scale.setScalar(1 + easeOut(k) * 4.5);
    S.shock.material.color.setRGB(6 * clamp(1 - k), 1.2 * clamp(1 - k), 1.4 * clamp(1 - k));
    S.holo.scale.setScalar(lerp(1.25, 1, easeOut((t - 24.6) / 0.5)));
  } else {
    S.shock.material.color.setRGB(0, 0, 0);
    S.holo.scale.setScalar(1);
  }

  // --- Androide ---
  // Cuello con servos: resorte amortiguado + micro-sacudidas mecánicas, mirada que sigue a la cámara,
  // ojos que arrancan por separado, parpadeo mecánico y boca sincronizada con la voz.
  const R = S.rs || (S.rs = { yaw: 0.5, yv: 0, pitch: 0.1, pv: 0, roll: 0, rv: 0, lean: 0, vl: 0, gaze: 0 });
  const vRaw = getVoiceLevel();
  R.vl += (vRaw - R.vl) * clamp(dt * (vRaw > R.vl ? 30 : 12));
  const vl = R.vl;
  robot.root.visible = shot !== 'E';
  robot.root.position.x = 0;
  let eyeL = 0, eyeR = 0, seams = 0, leds = 0, lid = 0, rimI = 0, keyI = 0;
  let yawT = 0.5 + Math.sin(t * 0.3) * 0.15, pitchT = 0.1, rollT = 0, leanT = 0, stiff = 60;

  // Ángulo hacia la cámara (para que la mire)
  const rp = robot.root.position;
  const toCamYaw = Math.atan2(camera.position.x - rp.x, camera.position.z - rp.z);
  const toCamPitch = -Math.atan2(camera.position.y - (rp.y + 0.55), Math.hypot(camera.position.x - rp.x, camera.position.z - rp.z));

  if (shot === 'B') {
    const e = Math.sin(t * 2.3) * Math.sin(t * 0.7) > 0.86 ? 0.25 : 0;
    eyeL = eyeR = e;
  }
  if (shot === 'C') {
    rimI = 4;
    const e = Math.sin(t * 1.9) > 0.94 ? 0.35 : 0.06;
    eyeL = eyeR = e;
    rp.x = Math.sin((t - 15) * 0.9) * 0.55; // se aparta de la luz de alarma
    // Acecha: sigue a la cámara con retraso, como si la vigilara desde la sombra
    yawT = toCamYaw * 0.8 + 0.25; pitchT = toCamPitch * 0.6 + 0.08; stiff = 22;
  }
  if (shot === 'D') {
    // Arranque: ojo izquierdo, luego el derecho, luego las costuras de centro hacia fuera
    const flick = (a, b) => (t < a ? 0 : t < b ? (Math.sin(t * 95 + a * 10) > 0.2 ? 1 : 0.08) : 1);
    const swell = t > 23.5 ? 1 + (t - 23.5) * 1.2 : 1;
    eyeL = flick(21.4, 21.75) * swell;
    eyeR = flick(21.62, 21.95) * swell;
    seams = ease((t - 21.9) / 0.7) * (0.8 + 0.4 * swell - 0.4);
    leds = t > 22.0 ? 1 : 0;
    rimI = lerp(8, 26, ease((t - 21) / 1.2));
    keyI = lerp(0, 3.5, ease((t - 21.6) / 1.4));
    // Giro en dos golpes de servo hacia la cámara, con rebote
    const toCam = toCamYaw * 0.92;
    yawT = t < 21.35 ? 0.62 : t < 21.95 ? lerp(0.62, toCam, 0.55) : toCam;
    pitchT = t < 21.35 ? 0.14 : toCamPitch * 0.8 - 0.02;
    stiff = 170;
    // Inclinación depredadora y avance hacia el lente al final
    rollT = t > 22.9 ? 0.13 * ease((t - 22.9) / 0.6) : 0;
    leanT = t > 23.3 ? 0.42 * ease((t - 23.3) / 1.2) : 0;
    // Parpadeo mecánico y ojos entrecerrados al amenazar
    const blink = t > 22.95 && t < 23.12 ? 1 : 0;
    lid = Math.max(blink, t > 23.4 ? 0.42 * ease((t - 23.4) / 0.5) : 0);
  }
  if (cut) {
    eyeL = eyeR = 1.1; seams = 0.8; leds = 1; rimI = 24; keyI = 1.5; rp.x = 0;
    yawT = [0.35, -0.3, 0.05, -0.15][g.cut % 4]; pitchT = 0.02;
    R.yaw = yawT; R.yv = 0; // corte seco: sin interpolar
  }

  // Micro-sacudidas de servo (pequeños saltos discretos) y respiración del chasis
  const step = Math.floor(t * 2.6);
  const jit = (n) => (Math.sin(n * 91.7) * 43758.5) % 1;
  if (eyeL > 0.3) { yawT += jit(step) * 0.035; pitchT += jit(step + 7) * 0.02; }
  rp.y = 0.05 + Math.sin(t * 1.7) * 0.012;
  rp.z = -4.2 + R.lean;

  // Resortes amortiguados (servos con rebote)
  const k = stiff, damp = 2 * Math.sqrt(k) * 0.55;
  const h = Math.min(dt, 1 / 30);
  R.yv += (k * (yawT - R.yaw) - damp * R.yv) * h; R.yaw += R.yv * h;
  R.pv += (k * (pitchT - R.pitch) - damp * R.pv) * h; R.pitch += R.pv * h;
  R.rv += (60 * (rollT - R.roll) - 9 * R.rv) * h; R.roll += R.rv * h;
  R.lean += (leanT - R.lean) * clamp(h * 6);
  robot.head.rotation.set(R.pitch, R.yaw, R.roll);

  // Las pupilas se adelantan al cuello (la mirada llega antes que la cabeza)
  const gazeT = clamp((yawT - R.yaw) * 2.4, -1, 1) + (eyeL > 0.3 ? jit(Math.floor(t * 3.3) + 3) * 0.25 : 0);
  R.gaze += (gazeT - R.gaze) * clamp(h * 18);

  // Habla: mandíbula, boca y ojos laten con la voz
  const talking = eyeL > 0.2 || cut;
  robot.jaw.rotation.x = talking ? 0.015 + vl * 0.2 : 0;
  const pulse = talking ? 1 + vl * 0.7 : 1;
  robot.pose({
    eyeL: eyeL * pulse, eyeR: eyeR * pulse,
    seams: seams * (1 + vl * 1.4),
    mouth: talking ? Math.max(eyeL, 0.4) * (0.35 + vl * 3) : 0,
    leds: leds * (Math.sin(t * 9) > 0 ? 1 : 0.35),
    lid, gaze: R.gaze,
  });
  S.rim.forEach((l) => { l.intensity = rimI; });
  S.key.intensity = keyI;

  // Luz de alarma barriendo el fondo (plano C)
  if (shot === 'C' && !cut) {
    const a = (t - 15) * 1.9;
    S.alarm.intensity = 70;
    S.alarm.target.position.set(Math.sin(a) * 3, 0, -4.2 + Math.cos(a) * 1.4);
  } else S.alarm.intensity = 0;

  // --- Posproceso ---
  u.uTime.value = t;
  u.uGlitch.value = g ? g.p * (cut ? 0.55 : 1) : 0;
  u.uExposure.value = shot === 'A' ? clamp((t - 2.2) / 1.2) : 1;
  u.uBloom.value = shot === 'D' ? 1.5 : shot === 'E' ? 1.7 : 1.1;
  u.uAber.value = 0.0018 + (shot === 'D' && t > 23.4 ? (t - 23.4) * 0.01 : 0);
  u.uFlash.value = t >= 24.4 && t < 24.6 ? 1 : t >= 24.6 ? clamp(1 - (t - 24.6) / 0.7) * 0.9 : 0;
  u.uGrain.value = 0.028;
}

/* ------------------------------ Público --------------------------------- */
export function hasSeenIntro() {
  try { return sessionStorage.getItem(SEEN_KEY) === '1'; } catch { return false; }
}

let threePromise = null;
function loadThree() {
  if (!threePromise) threePromise = import(THREE_URL).catch(() => null);
  return threePromise;
}

// Descarga Three.js en segundo plano mientras el usuario está en la portada.
export function prefetchIntro() {
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 900));
  idle(() => {
    prefetchVoice(INTRO_LINES);
    const legacy = () => { loadThree(); import(ROBOT_URL).catch(() => {}); };
    // Con WebGL2 se precargan el bucle de la intro, three y «El Ojo de CALOT»; si no, la intro anterior.
    import(ANDROID_URL)
      .then((m) => {
        if (!m.canRunAndroidIntro()) { legacy(); return; }
        loadThree();
        import(OJO_STAGE_URL).catch(() => {});
        import(OJO_TIMELINE_URL).catch(() => {});
      })
      .catch(legacy);
  });
}

let running = null;

export function playIntro({ reduced = false, force = false, onDone } = {}) {
  if (running) return true;
  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduced || prefersReduced || (!force && hasSeenIntro())) { onDone?.(); return false; }
  try { sessionStorage.setItem(SEEN_KEY, '1'); } catch {}

  const doctor = (() => { try { return getBootMetrics().doctorLabel; } catch { return 'Doctor'; } })();
  const mobile = Boolean(window.matchMedia?.('(max-width: 720px), (pointer: coarse)').matches);
  playAndroidOrLegacy({ doctor, mobile, onDone });
  return true;
}

// Primero intenta el androide; si no hay WebGL2, la carga falla o tarda demasiado, corre la intro anterior.
function playAndroidOrLegacy({ doctor, mobile, onDone }) {
  // Pantalla negra inmediata mientras carga el androide (igual que la intro anterior, que arranca en negro).
  const cover = document.createElement('div');
  cover.className = 'calot-intro';
  cover.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cover);

  const engine = getEngine(); // dentro del gesto del usuario: el audio se desbloquea antes de esperar la carga
  try { engine?.ctx.resume?.().catch(() => {}); if (engine) warmSfx(engine.ctx); } catch {}

  let state = 'loading'; // loading | android | legacy | cancelled
  let intro = null;
  let score = null;
  let loadTimer = 0;
  const stopScore = () => { const s = score; score = null; s?.stop(); };
  const cleanupCover = () => {
    clearTimeout(loadTimer);
    document.removeEventListener('keydown', onCoverKey, true);
    cover.remove();
  };
  const finishAndroid = () => {
    if (state === 'cancelled') return;
    state = 'cancelled';
    stopScore();
    running = null;
    voiceWelcome(0.4);
    onDone?.();
  };
  const cancelLoading = () => { // Esc mientras carga: se salta la intro sin arrancar nada
    if (state !== 'loading') return;
    state = 'cancelled';
    cleanupCover();
    running = null;
    voiceWelcome(0.4);
    onDone?.();
  };
  const onCoverKey = (e) => { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); cancelLoading(); } };
  document.addEventListener('keydown', onCoverKey, true);
  cover.addEventListener('click', cancelLoading);
  running = { finish: () => { if (state === 'loading') cancelLoading(); else if (state === 'android') intro?.skip(); } };

  const toLegacy = (why) => {
    if (state !== 'loading') return;
    state = 'legacy';
    if (why) console.warn('[intro] androide no disponible, uso la intro anterior:', why);
    cleanupCover();
    running = null;
    runLegacyIntro({ doctor, mobile, onDone });
  };
  loadTimer = setTimeout(() => toLegacy('la carga tardó demasiado'), ANDROID_LOAD_MS);

  (async () => {
    let m;
    try {
      m = await import(ANDROID_URL);
      if (state !== 'loading') return;
      if (!m.canRunAndroidIntro()) { toLegacy('sin WebGL2'); return; }
    } catch (err) { toLegacy(err); return; }
    let created;
    try {
      created = await m.createAndroidIntro({
        doctor,
        assetBase: ANDROID_ASSETS,
        vendorBase: VENDOR_THREE,
        logoUrl: LOGO_URL,
        getAudioTime: () => (score ? score.time() : null),
        muteControl: {
          isMuted: isPortalAudioMuted,
          toggle: () => { const next = !isPortalAudioMuted(); if (score) score.setMuted(next); else setPortalAudioMuted(next); return next; },
        },
        onSkip: stopScore,
        onEnd: stopScore,
        // «El Ojo de CALOT»: mismo guion, voces y textos; cambia el escenario 3D
        stageFactory: async (opts) => (await import(OJO_STAGE_URL)).createOjoStage(opts),
        stageOptions: { name: doctor },
        timeline: { sample: (await import(OJO_TIMELINE_URL)).sampleOjo, cueList: (await import(OJO_TIMELINE_URL)).cueListOjo },
        ui: { bars: 'adaptive' },
      });
    } catch (err) { toLegacy(err); return; }
    if (state !== 'loading') { created.dispose(); return; } // llegó tarde: ya entró la anterior o se saltó
    state = 'android';
    intro = created;
    // El score arranca justo antes del reloj de la intro para que los CUE queden sobre el audio
    score = startIntroScore(buildGlitches(), { beeps: m.BEEPS || null });
    intro.start();
    cleanupCover(); // el androide ya está encima (misma capa, montado después)
    intro.done.then(() => {
      finishAndroid();
    });
  })();
}

// Intro anterior (Three.js propio con intro-robot.js), intacta.
function runLegacyIntro({ doctor, mobile, onDone }) {
  const root = document.createElement('div');
  root.className = 'calot-intro';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-label', 'Intro de CALOT-OS');
  const cueList = cues(doctor);
  root.innerHTML = `
    <canvas class="ci-gl" aria-hidden="true"></canvas>
    <div class="ci-bar is-top"></div><div class="ci-bar is-bot"></div>
    ${cueList.map(([, , cls, html], i) => `<div class="${cls}" data-cue="${i}">${html}</div>`).join('')}
    <div class="ci-hud" aria-hidden="true"><span class="ci-hud-label">CONTENCIÓN</span><span class="ci-hud-track"><i></i></span><span class="ci-hud-val">0%</span></div>
    <div class="ci-footer">
      <button type="button" class="ci-btn" data-ci-mute aria-pressed="${isPortalAudioMuted()}">${isPortalAudioMuted() ? 'Sonido: no' : 'Sonido: sí'}</button>
      <button type="button" class="ci-btn" data-ci-skip>Saltar <kbd>Esc</kbd></button>
    </div>`;
  document.body.appendChild(root);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  const canvas = root.querySelector('canvas');
  const cueEls = [...root.querySelectorAll('[data-cue]')];
  const hud = root.querySelector('.ci-hud');
  const hudBar = hud.querySelector('i');
  const hudVal = hud.querySelector('.ci-hud-val');
  const glitches = buildGlitches();
  const score = startIntroScore(glitches);
  const start = performance.now();
  let stage = null;
  let raf = 0;
  let done = false;
  let last = start;

  const onResize = () => stage?.resize(window.innerWidth, window.innerHeight);
  window.addEventListener('resize', onResize);

  loadThree().then(async (THREE) => {
    if (!THREE || done) return;
    try {
      const s = await buildStage(THREE, canvas, mobile);
      if (done) { s.dispose(); return; }
      stage = s;
      onResize();
    } catch (err) {
      console.warn('[intro] sin 3D:', err);
    }
  });

  const finish = () => {
    if (done) return;
    done = true;
    cancelAnimationFrame(raf);
    score.stop();
    window.removeEventListener('resize', onResize);
    document.removeEventListener('keydown', onKey, true);
    root.classList.add('is-out');
    setTimeout(() => {
      try { stage?.dispose(); } catch {}
      root.remove();
      document.body.style.overflow = prevOverflow;
      running = null;
      voiceWelcome(0.4);
      onDone?.();
    }, 900);
  };
  const onKey = (e) => { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); finish(); } };
  document.addEventListener('keydown', onKey, true);
  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-ci-skip]')) finish();
    const m = e.target.closest('[data-ci-mute]');
    if (m) {
      const next = !isPortalAudioMuted();
      score.setMuted(next);
      m.setAttribute('aria-pressed', String(next));
      m.textContent = next ? 'Sonido: no' : 'Sonido: sí';
    }
  });

  const activeGlitch = (t) => {
    let g = null;
    for (const e of glitches) {
      if (e.t > t) break;
      if (t < e.t + e.dur && (!g || e.p >= g.p)) g = e;
    }
    return g;
  };

  const frame = (now) => {
    // window.__ciT congela un instante (solo para revisar cuadros)
    const t = typeof window.__ciT === 'number' ? window.__ciT : (now - start) / 1000;
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    if (t >= TOTAL) { finish(); return; }
    const g = activeGlitch(t);

    cueList.forEach(([a, b], i) => cueEls[i].classList.toggle('on', t >= a && t < b));
    root.classList.toggle('is-glitch', Boolean(g && g.p > 0.5));
    root.classList.toggle('is-bars', t > 0.15 && t < 28.6);
    const hudOn = t > 15.2 && t < 25.6;
    hud.classList.toggle('on', hudOn);
    if (hudOn) {
      const pct = Math.round(clamp((t - 15.4) / 9.2) * 100);
      hudBar.style.transform = `scaleX(${pct / 100})`;
      hudVal.textContent = pct >= 100 ? 'CONTENIDO' : `${pct}%`;
    }
    root.classList.toggle('is-dissolve', t > 28.7);

    if (stage) {
      try { direct(stage, t, g, dt); stage.render(); } catch (err) { console.warn('[intro]', err); stage = null; }
    }
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);
  running = { finish };
  setTimeout(finish, (TOTAL + 3) * 1000);
  return true;
}
