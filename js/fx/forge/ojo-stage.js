// «El Ojo de CALOT» (intro de residentes): un diafragma mecánico de metal negro que se arma lámina por lámina
// y se abre para mostrar un iris rojo con el ECG del logo en la pupila. Detrás, pistas de circuito que laten.

import { getVoiceLevel } from '../voice.js?v=20261122e';
import { createForge, stageApi, rng, clamp } from './forge-common.js?v=20261122e';
import { createNameMesh } from './nombre.js?v=20261122e';

const BLADES = 12;
const R_IN = 0.9; // radio interior del bisel: las láminas se recortan aquí

const IRIS_VERT = `
  varying vec2 vP;
  void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

const IRIS_FRAG = `
  uniform float uTime, uGlow, uPupil, uVoice, uEcg;
  uniform vec2 uLook;
  varying vec2 vP;
  float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h21(i), h21(i + vec2(1,0)), f.x), mix(h21(i + vec2(0,1)), h21(i + vec2(1,1)), f.x), f.y); }
  float ecg(float x){
    float d = fract(x) - 0.5;
    return 0.12 * exp(-pow((d + 0.2) / 0.05, 2.0)) - 0.25 * exp(-pow((d - 0.0) / 0.012, 2.0))
      + 0.95 * exp(-pow((d - 0.03) / 0.014, 2.0)) - 0.35 * exp(-pow((d - 0.07) / 0.014, 2.0)) + 0.22 * exp(-pow((d - 0.24) / 0.06, 2.0));
  }
  void main(){
    vec2 p = vP / 0.88 - uLook;
    float r = length(p);
    float a = atan(p.y, p.x);
    // Fibras radiales del iris (dos escalas) y criptas
    float fib = vn(vec2(a * 22.0, r * 3.0)) * 0.6 + vn(vec2(a * 70.0, r * 9.0 - uTime * 0.05)) * 0.4;
    float crypt = smoothstep(0.55, 0.85, vn(vec2(a * 9.0, r * 5.0 + 3.0)));
    vec3 deep = vec3(0.07, 0.0, 0.006);
    vec3 hot = vec3(1.25, 0.025, 0.04);
    vec3 col = mix(deep, hot, pow(fib, 2.4) * smoothstep(1.02, 0.35, r)) * (1.0 - crypt * 0.45);
    // Collarete brillante alrededor de la pupila y anillo limbal oscuro
    col += hot * 0.8 * exp(-pow((r - uPupil * 1.55) / 0.035, 2.0));
    col *= smoothstep(1.02, 0.86, r) * 0.85 + 0.15 * smoothstep(1.1, 0.9, r);
    // Anillos digitales segmentados que giran (la máquina dentro del ojo)
    float seg1 = step(0.55, fract(a / 6.2831853 * 48.0 + uTime * 0.08));
    float seg2 = step(0.3, fract(a / 6.2831853 * 24.0 - uTime * 0.05));
    col += hot * 1.4 * seg1 * exp(-pow((r - 0.66) / 0.008, 2.0));
    col += hot * 0.9 * seg2 * exp(-pow((r - 0.78) / 0.006, 2.0));
    // Pupila: negra con borde incandescente y el trazo de ECG del logo
    float pupil = smoothstep(uPupil + 0.012, uPupil - 0.012, r);
    col = mix(col, vec3(0.0), pupil);
    col += vec3(2.0, 0.12, 0.14) * exp(-pow((r - uPupil) / 0.012, 2.0)) * (0.7 + uVoice * 1.5);
    float ex = p.x / max(uPupil, 0.01);
    float ey = p.y / max(uPupil, 0.01);
    float line = ecg(ex * 0.45 - uTime * 0.6) * 0.75;
    float dl = abs(ey - line);
    col += vec3(2.2, 0.16, 0.18) * exp(-pow(dl / 0.04, 2.0)) * pupil * uEcg * smoothstep(0.98, 0.6, abs(ex));
    gl_FragColor = vec4(col * uGlow * (1.0 + uVoice * 0.6), 1.0);
  }`;

const TRACE_VERT = IRIS_VERT;
const TRACE_FRAG = `
  uniform float uTime, uAmt, uPulse;
  varying vec2 vP;
  float h11(float n){ return fract(sin(n * 91.345) * 47453.5453); }
  void main(){
    vec2 p = vP;
    float r = length(p);
    float a = atan(p.y, p.x) / 6.2831853 + 0.5;
    float cells = 72.0;
    float ci = floor(a * cells);
    float fa = fract(a * cells) - 0.5;
    float on = step(0.45, h11(ci));
    float r0 = 1.25 + h11(ci + 7.0) * 0.6;
    float r1 = r0 + 0.8 + h11(ci + 3.0) * 2.4;
    // Pista radial fina (ancho constante en pantalla) con nodo al final
    float w = abs(fa) * r * 6.2831853 / cells;
    float aw = fwidth(w) * 1.2 + 0.002;
    float trace = (1.0 - smoothstep(0.0, aw, w)) * step(r0, r) * step(r, r1) * on;
    float node = (1.0 - smoothstep(0.018, 0.03, length(vec2(w, r - r1)))) * on;
    // Pulsos que salen del ojo hacia afuera
    float sp = fract(uTime * (0.18 + h11(ci + 11.0) * 0.25) + h11(ci + 5.0));
    float pulse = exp(-pow((r - mix(r0, r1, sp)) / 0.08, 2.0));
    // Anillos concéntricos tenues
    float ring = 0.0;
    for (int i = 0; i < 3; i++) { float rr = 1.4 + float(i) * 0.75; ring += (1.0 - smoothstep(0.0, fwidth(r) * 1.5 + 0.002, abs(r - rr))) * 0.25; }
    float fade = smoothstep(4.6, 1.6, r);
    vec3 red = vec3(1.0, 0.06, 0.08);
    vec3 col = red * (trace * (0.12 + pulse * 2.2 * uPulse) + node * (0.35 + pulse * 1.5) + ring * 0.15) * fade;
    gl_FragColor = vec4(col * uAmt, 1.0);
  }`;

function bladeShape(THREE) {
  const s = new THREE.Shape();
  s.moveTo(-0.62, 0);
  s.lineTo(0.95, 0);
  s.quadraticCurveTo(1.08, 0.55, 0.62, 1.25);
  s.lineTo(-0.35, 1.25);
  s.quadraticCurveTo(-0.7, 0.6, -0.62, 0);
  return s;
}

export async function createOjoStage({ THREE, canvas, level, reduced, sample, name = '' }) {
  const forge = await createForge({ THREE, canvas, level });
  const { scene, camera, own } = forge;

  const eye = new THREE.Group();
  scene.add(eye);
  const eyeInv = new THREE.Matrix4();

  // Metal negro pulido para bisel y láminas
  const metal = own(new THREE.MeshStandardMaterial({ color: 0x1a1012, metalness: 1, roughness: 0.32, envMapIntensity: 0.55 }));
  const metalDark = own(new THREE.MeshStandardMaterial({ color: 0x08080a, metalness: 1, roughness: 0.45, envMapIntensity: 0.35 }));

  // Bisel torneado (perfil con escalones), eje hacia la cámara
  const prof = [[0.9, -0.06], [0.9, 0.05], [0.94, 0.09], [1.05, 0.1], [1.08, 0.13], [1.2, 0.13], [1.26, 0.08], [1.3, 0.0], [1.3, -0.1], [1.22, -0.16], [0.95, -0.16]]
    .map(([x, y]) => new THREE.Vector2(x, y));
  const bezel = new THREE.Mesh(own(new THREE.LatheGeometry(prof, 160)), metal);
  bezel.rotation.x = Math.PI / 2;
  eye.add(bezel);

  // Marcas tipo goniómetro sobre el bisel
  const tickGeo = own(new THREE.BoxGeometry(0.008, 0.05, 0.008));
  const tickMat = own(new THREE.MeshStandardMaterial({ color: 0x1a1a1e, metalness: 1, roughness: 0.25, emissive: new THREE.Color(0.5, 0.02, 0.04), emissiveIntensity: 0 }));
  const ticks = new THREE.InstancedMesh(tickGeo, tickMat, 90);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  for (let i = 0; i < 90; i++) {
    const a = (i / 90) * Math.PI * 2;
    const long = i % 6 === 0;
    q.setFromAxisAngle(new THREE.Vector3(0, 0, 1), a - Math.PI / 2);
    m4.compose(new THREE.Vector3(Math.cos(a) * 1.135, Math.sin(a) * 1.135, 0.14), q, new THREE.Vector3(1, long ? 1.6 : 1, 1));
    ticks.setMatrixAt(i, m4);
  }
  eye.add(ticks);

  // Anillo LED rojo entre bisel y láminas
  const ledMat = own(new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) }));
  const led = new THREE.Mesh(own(new THREE.TorusGeometry(0.915, 0.006, 8, 200)), ledMat);
  led.position.z = 0.06;
  eye.add(led);

  // Tornillos
  const boltGeo = own(new THREE.CylinderGeometry(0.022, 0.022, 0.02, 20));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
    const b = new THREE.Mesh(boltGeo, metalDark);
    b.rotation.x = Math.PI / 2;
    b.position.set(Math.cos(a) * 1.25, Math.sin(a) * 1.25, 0.07);
    eye.add(b);
  }

  // Láminas del diafragma, recortadas en círculo dentro del bisel
  const bladeMat = own(new THREE.MeshStandardMaterial({ color: 0x1d1214, metalness: 1, roughness: 0.3, envMapIntensity: 0.6, emissive: new THREE.Color(0.9, 0.03, 0.06), emissiveIntensity: 0 }));
  const clipU = { uEyeInv: { value: eyeInv }, uClipR: { value: R_IN + 0.02 } };
  bladeMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, clipU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform mat4 uEyeInv; varying vec3 vEyeP; varying vec3 vLocP;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvEyeP = (uEyeInv * modelMatrix * vec4(transformed, 1.0)).xyz; vLocP = transformed;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uClipR; varying vec3 vEyeP; varying vec3 vLocP;')
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nif (length(vEyeP.xy) > uClipR) discard;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance *= exp(-vLocP.y * 9.0);');
  };
  const bladeGeo = own(new THREE.ExtrudeGeometry(bladeShape(THREE), { depth: 0.012, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 18 }));
  const r = rng(42);
  const blades = [];
  for (let i = 0; i < BLADES; i++) {
    const pivot = new THREE.Group();
    const mesh = new THREE.Mesh(bladeGeo, bladeMat);
    pivot.add(mesh);
    eye.add(pivot);
    blades.push({
      pivot, mesh, theta: (i / BLADES) * Math.PI * 2,
      from: new THREE.Vector3((r() - 0.5) * 7, (r() - 0.5) * 4.5, -2 - r() * 3),
      spin: new THREE.Vector3((r() - 0.5) * 6, (r() - 0.5) * 6, (r() - 0.5) * 8),
      at: 3.0 + i * 0.3 + r() * 0.08,
    });
  }

  // Iris rojo detrás de las láminas
  const irisU = { uTime: { value: 0 }, uGlow: { value: 0 }, uPupil: { value: 0.22 }, uVoice: { value: 0 }, uEcg: { value: 0 }, uLook: { value: new THREE.Vector2() } };
  const iris = new THREE.Mesh(own(new THREE.CircleGeometry(0.9, 128)), own(new THREE.ShaderMaterial({ vertexShader: IRIS_VERT, fragmentShader: IRIS_FRAG, uniforms: irisU })));
  iris.position.z = -0.1;
  eye.add(iris);

  // Cristal del lente: reflejos del entorno encima de todo
  const lens = new THREE.Mesh(
    own(new THREE.SphereGeometry(2.2, 64, 24, 0, Math.PI * 2, 0, 0.42)),
    own(new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.2, roughness: 0.35, transparent: true, opacity: 0.08, envMapIntensity: 0.6, depthWrite: false })),
  );
  lens.rotation.x = Math.PI / 2;
  lens.position.z = -1.92;
  eye.add(lens);

  // Pistas de circuito detrás del ojo
  const traceU = { uTime: { value: 0 }, uAmt: { value: 0 }, uPulse: { value: 0 } };
  const traces = new THREE.Mesh(own(new THREE.PlaneGeometry(10, 10)), own(new THREE.ShaderMaterial({
    vertexShader: TRACE_VERT, fragmentShader: TRACE_FRAG, uniforms: traceU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  })));
  traces.position.z = -0.5;
  scene.add(traces);

  // Luces
  const key = new THREE.SpotLight(0xf2f0f0, 0, 0, 0.5, 0.8, 2);
  key.position.set(-2.4, 2.6, 3.4);
  const rim = new THREE.SpotLight(0xff2a3a, 0, 0, 0.6, 0.9, 2);
  rim.position.set(2.8, -1.4, 1.2);
  const fill = new THREE.PointLight(0xff1830, 0, 4, 2);
  fill.position.set(0, 0, 0.9);
  scene.add(key, key.target, rim, rim.target);
  eye.add(fill);

  // Mirada: sacadas pequeñas
  const sr = rng(7);
  const SACC = [];
  for (let at = 11.3; at < 40; at += 0.35 + sr() * 0.9) SACC.push([at, (sr() - 0.5) * 0.12, (sr() - 0.5) * 0.08]);

  let portrait = false;
  forge.onSize(({ W, H }) => { portrait = W / H < 1.05; });
  const face = { vl: 0, lastT: 0, lx: 0, ly: 0 };
  let nameKit = null;
  const tmpV = new THREE.Vector3();

  const update = (t) => {
    const s = sample(Math.min(t, 40), reduced);
    const mo = s.motion;
    const tt = mo ? t : 6;
    const nowMs = performance.now();
    const dt = Math.min(0.05, Math.max(0, (nowMs - face.lastT) / 1000));
    face.lastT = nowMs;
    const vRaw = reduced ? 0 : (typeof window.__vl === 'number' ? window.__vl : getVoiceLevel());
    face.vl += (vRaw - face.vl) * Math.min(1, dt * (vRaw > face.vl ? 30 : 10));
    const vl = face.vl;

    // Cámara: encuadre relativo al tamaño del ojo; en vertical se aleja para que quepa a lo ancho
    const tanV = Math.tan((camera.fov * Math.PI) / 360);
    const a = camera.aspect;
    const base = Math.max(2.05 / tanV, 1.55 / (tanV * a));
    const d = base * s.cam.dist;
    const jx = mo ? Math.sin(t * 0.37) * 0.01 + (s.shake || 0) * Math.sin(t * 61) * 0.02 : 0;
    const jy = mo ? Math.cos(t * 0.29) * 0.008 + (s.shake || 0) * Math.sin(t * 47) * 0.02 : 0;
    camera.position.set(s.cam.x + jx, s.cam.y + jy, d);
    camera.up.set(Math.sin(s.cam.roll || 0), Math.cos(s.cam.roll || 0), 0);
    camera.lookAt(s.cam.x * 0.4, s.cam.y * 0.4 - (portrait ? 0.15 : 0), 0);

    // El ojo entero gira un poco hacia donde mira
    eye.rotation.set(s.pitch, s.yaw, s.roll || 0);
    eye.updateMatrixWorld(true);
    eyeInv.copy(eye.matrixWorld).invert();

    // Láminas: llegan desde la oscuridad y se cierran; la apertura las desplaza hacia afuera
    const aper = clamp(s.aperture, 0, 1.1);
    const rattle = (s.rattle || 0) * (mo ? 1 : 0);
    blades.forEach((b, i) => {
      const k = reduced ? 1 : clamp((t - b.at) / 0.55);
      const e = 1 - Math.pow(1 - k, 3);
      const off = -0.02 + aper * 0.62 + Math.sin(t * 40 + i * 2.1) * 0.01 * rattle;
      const th = b.theta + aper * 0.32;
      tmpV.set(-Math.sin(th) * off, Math.cos(th) * off, 0.004 + i * 0.0014);
      b.pivot.position.set(
        b.from.x + (tmpV.x - b.from.x) * e,
        b.from.y + (tmpV.y - b.from.y) * e,
        b.from.z + (tmpV.z - b.from.z) * e,
      );
      b.pivot.rotation.set(b.spin.x * (1 - e), b.spin.y * (1 - e), th + b.spin.z * (1 - e));
      b.mesh.position.set(0.12, 0, 0);
    });
    clipU.uClipR.value = R_IN + 0.02 + (1 - smooth01(s.assembled)) * 6;
    bladeMat.emissiveIntensity = s.edge;

    // Iris y pupila
    let gx = 0, gy = 0;
    for (const [at, ax, ay] of SACC) { if (at > t) break; gx = ax; gy = ay; }
    const gk = Math.min(1, dt * 22);
    face.lx += ((s.look?.[0] || 0) + gx * (mo ? s.saccade || 0 : 0) - face.lx) * gk;
    face.ly += ((s.look?.[1] || 0) + gy * (mo ? s.saccade || 0 : 0) - face.ly) * gk;
    irisU.uLook.value.set(face.lx, face.ly);
    irisU.uTime.value = tt;
    irisU.uGlow.value = s.glow * (s.flicker ?? 1);
    irisU.uPupil.value = s.pupil * (1 - vl * 0.25);
    irisU.uVoice.value = vl;
    irisU.uEcg.value = s.ecg;

    // Luces
    const fl = s.flicker ?? 1;
    key.intensity = s.key * 80 * fl;
    rim.intensity = s.rim * 45 * fl;
    fill.intensity = (s.glow * aper * 1.2 + vl * 0.6) * 2.5;
    ledMat.color.setRGB(2.4 * s.led * fl, 0.08 * s.led * fl, 0.12 * s.led * fl);
    tickMat.emissiveIntensity = s.led * 1.2;

    traceU.uTime.value = tt;
    traceU.uAmt.value = s.traces * fl;
    traceU.uPulse.value = 0.4 + vl * 1.6 + (s.tracePulse || 0);

    nameKit?.update(t, s.name);
    forge.atmosphere(tt, { mist: s.mist, dust: s.dust });
    forge.post(tt, { exposure: s.exposure, bloom: s.bloom, aberration: s.aberration, glitch: mo ? s.glitch : 0, flash: s.flash || 0 });
  };

  // Nombre del médico en 3D bajo «CALOT·OS»: se prepara en segundo plano para no retrasar la carga
  if (name && !reduced) {
    createNameMesh({ THREE, camera, scene, own, name, screenY: 0.69, widthDesk: 0.4, widthMob: 0.8 })
      .then((k) => { nameKit = k; })
      .catch((err) => console.warn('[ojo] sin nombre 3D:', err?.message || err));
  }

  forge.init();
  update(0);
  return stageApi(forge, update, { model: 'ojo' });
}

function smooth01(x) { x = clamp(x); return x * x * (3 - 2 * x); }
