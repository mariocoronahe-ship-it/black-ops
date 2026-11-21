import { sampleTimeline, rng } from './android-timeline.js?v=20261121s';
import { getVoiceLevel } from '../voice.js?v=20261121s';
import { buildPorcelainMap, buildNoiseMap, buildDotMap } from './android-textures.js?v=20261121s';
import {
  PORCELAIN_UNIFORMS, patchPorcelain, patchFollowHead, MIST_VERT, MIST_FRAG, DUST_VERT, DUST_FRAG, HALO_VERT, HALO_FRAG,
  QUAD_VERT, BRIGHT_FRAG, BLUR_FRAG, COMPOSITE_FRAG,
} from './android-shaders.js?v=20261121s';

export const QUALITY = [
  { level: 0, dpr: 0.75, shadow: 0, msaa: 0, bloom: 0, haze: 2, dust: 120, model: 'lo', tex: 512, aber: false },
  { level: 1, dpr: 1, shadow: 512, msaa: 2, bloom: 1, haze: 4, dust: 350, model: 'lo', tex: 512, aber: true },
  { level: 2, dpr: 1.5, shadow: 1024, msaa: 4, bloom: 2, haze: 6, dust: 800, model: 'lod', tex: 1024, aber: true },
  { level: 3, dpr: 2, shadow: 2048, msaa: 4, bloom: 2, haze: 8, dust: 1400, model: 'lod', tex: 1024, aber: true },
];

const HEAD = { x: 0, y: 1.62, z: 0 };
const MODEL_FILES = { lo: 'models/android-bust-lo.glb', lod: 'models/android-bust-lod.glb' };
const HDR_FILE = 'hdri/polyhaven-wooden_studio_09-1k.hdr';

export async function createStage({ THREE, canvas, assetBase, vendorBase, level, reduced, sample = sampleTimeline, palette = null }) {
  const toColor = (c) => (c?.isColor ? c.clone() : Array.isArray(c) ? new THREE.Color(c[0], c[1], c[2]) : new THREE.Color(c));
  const [{ GLTFLoader }, { RGBELoader }] = await Promise.all([
    import(new URL('addons/loaders/GLTFLoader.js', vendorBase).href),
    import(new URL('addons/loaders/RGBELoader.js', vendorBase).href),
  ]);
  let lv = QUALITY[level];
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, stencil: false, powerPreference: 'high-performance' });
  if (!renderer.capabilities.isWebGL2) { renderer.dispose(); throw new Error('WebGL2 no disponible'); }
  renderer.setClearColor(palette?.bg != null ? toColor(palette.bg) : 0x000000, 1);
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.shadowMap.enabled = lv.shadow > 0;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const owned = [];
  const own = (x) => { owned.push(x); return x; };
  let model;
  let hdr;
  try {
    [model, hdr] = await Promise.all([
      new GLTFLoader().loadAsync(new URL(MODEL_FILES[lv.model], assetBase).href),
      new RGBELoader().loadAsync(new URL(HDR_FILE, assetBase).href),
    ]);
  } catch (err) {
    renderer.dispose();
    throw err;
  }

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  hdr.mapping = THREE.EquirectangularReflectionMapping;
  const envRT = pmrem.fromEquirectangular(hdr);
  hdr.dispose();
  pmrem.dispose();
  scene.environment = envRT.texture;

  const camera = new THREE.PerspectiveCamera(30, 16 / 9, 0.05, 40);

  const porcTex = own(buildPorcelainMap(THREE, lv.tex));
  const noiseTex = own(buildNoiseMap(THREE, 256));
  const dotTex = own(buildDotMap(THREE));
  const uniforms = PORCELAIN_UNIFORMS(THREE, porcTex);
  if (palette) {
    if (palette.eye != null) {
      const eyeC = toColor(palette.eye);
      const mult = palette.eyeHdr ?? 1.45;
      uniforms.uEyeColor.value.setRGB(eyeC.r * mult, eyeC.g * mult, eyeC.b * mult);
    }
    if (palette.mouth != null || palette.eye != null) {
      const mC = toColor(palette.mouth ?? palette.eye);
      uniforms.uMouthColor.value.copy(mC);
    }
    if (palette.crack != null || palette.eye != null) {
      uniforms.uCrackColor.value.copy(toColor(palette.crack ?? palette.eye));
    }
    if (palette.scan != null || palette.eye != null) {
      uniforms.uScanColor.value.copy(toColor(palette.scan ?? palette.eye));
    }
  }

  let mesh = null;
  model.scene.traverse((o) => { if (o.isMesh && !mesh) mesh = o; });
  if (!mesh) throw new Error('El modelo no trae malla');
  const mat = mesh.material;
  mat.side = THREE.FrontSide;
  // Metal negro brillante (look de la referencia): casi todo en sombra, bordes recortados por luz blanca
  mat.map = null;
  mat.color.setHex(0x141518);
  mat.metalness = 0.9;
  mat.roughness = 0.3;
  if (mat.metalnessMap || mat.roughnessMap) { mat.metalnessMap = null; mat.roughnessMap = null; }
  mat.envMapIntensity = 0.15;
  mat.needsUpdate = true;
  patchPorcelain(mat, uniforms);
  mesh.customDepthMaterial = own(new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking }));
  patchPorcelain(mesh.customDepthMaterial, uniforms, { depthOnly: true });
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  // Rig: permite inclinar todo el cuerpo sobre el paciente con pivote en el pecho
  const rig = new THREE.Group();
  rig.position.set(0, 1.3, 0);
  model.scene.position.y -= 1.3;
  rig.add(model.scene);
  scene.add(rig);
  const tris = mesh.geometry.index ? mesh.geometry.index.count / 3 : mesh.geometry.attributes.position.count / 3;

  const spot = (color, pos, angle, shadow) => {
    const l = new THREE.SpotLight(color, 0, 0, angle, 0.95, 2);
    l.position.set(...pos);
    l.target.position.set(HEAD.x, HEAD.y, HEAD.z);
    if (shadow) {
      l.castShadow = true;
      l.shadow.bias = -0.0004;
      l.shadow.normalBias = 0.006;
      l.shadow.camera.near = 0.3;
      l.shadow.camera.far = 3;
      l.shadow.radius = 4;
    }
    scene.add(l, l.target);
    return l;
  };
  const under = spot(palette?.under != null ? toColor(palette.under) : 0xe02a3e, [0.6, 1.1, 0.75], 0.3, true);
  under.target.position.x = 0.09;
  const rimCol = palette?.rim != null ? toColor(palette.rim) : 0xe6eef2;
  const rimL = spot(rimCol, [-0.95, 1.95, -0.95], 0.3, false);
  const rimR = spot(rimCol, [1.05, 1.85, -0.95], 0.3, false);
  const fill = spot(palette?.fill != null ? toColor(palette.fill) : 0x7fb0b4, [-1.3, 1.6, 0.35], 0.3, false);
  // Luz clave frontal para que el rostro se lea en los planos cerrados
  const keyL = spot(palette?.key != null ? toColor(palette.key) : 0xdfe9ee, [0.62, 1.98, 0.7], 0.3, false);
  const backGlow = new THREE.PointLight(palette?.halo != null ? toColor(palette.halo) : (palette?.eye != null ? toColor(palette.eye) : 0xff1530), 0, 2.2, 2);
  backGlow.position.set(0, HEAD.y + 0.15, -0.6);
  const eyeLight = new THREE.PointLight(palette?.eye != null ? toColor(palette.eye) : 0xff1228, 0, 0.7, 2);
  scene.add(backGlow);
  rig.add(eyeLight);
  eyeLight.position.set(0, 0, 0);

  // Cables del cuello: color inyectable (por defecto rojo incandescente), siguen el giro de la cabeza
  const cableRGB = palette?.cables != null
    ? (() => { const c = toColor(palette.cables); const k = palette.cablesHdr ?? 3.8; return [c.r * k, c.g * k, c.b * k]; })()
    : [5.5, 0.35, 0.45];
  const cableMat = own(new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) }));
  patchFollowHead(cableMat, uniforms);
  [-1.05, -0.62, -0.22, 0.22, 0.62, 1.05].forEach((a, i) => {
    const pt = (y, r, dz) => new THREE.Vector3(Math.sin(a) * r, y, -0.028 + Math.cos(a) * r + dz);
    const curve = new THREE.CatmullRomCurve3([pt(1.515, 0.046, 0), pt(1.47, 0.057, 0.004), pt(1.42, 0.064, 0.012), pt(1.37, 0.088, 0.04 + (i % 2) * 0.01)]);
    const tube = new THREE.Mesh(own(new THREE.TubeGeometry(curve, 28, 0.0034 + (i % 3 === 1 ? 0.0012 : 0), 6, false)), cableMat);
    tube.frustumCulled = false;
    model.scene.add(tube);
  });

  // Lámpara quirúrgica detrás de la cabeza: dos cúpulas con LEDs (corona de luz y contorno blanco)
  const lamp = new THREE.Group();
  const domeMat = own(new THREE.MeshStandardMaterial({ color: 0x1a1c20, metalness: 0.7, roughness: 0.45 }));
  const ledMat = own(new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) }));
  const ledGeo = own(new THREE.CircleGeometry(0.034, 24));
  [[-0.24, 0.07, 0], [0.27, -0.06, 0.08]].forEach(([x, y, z]) => {
    const dome = new THREE.Mesh(own(new THREE.CylinderGeometry(0.3, 0.33, 0.07, 48)), domeMat);
    dome.rotation.x = Math.PI / 2;
    dome.position.set(x, y, z);
    lamp.add(dome);
    const pos = [[0, 0]];
    for (let k = 0; k < 6; k++) pos.push([Math.cos(k * Math.PI / 3) * 0.125, Math.sin(k * Math.PI / 3) * 0.125]);
    for (let k = 0; k < 6; k++) pos.push([Math.cos(k * Math.PI / 3 + 0.52) * 0.225, Math.sin(k * Math.PI / 3 + 0.52) * 0.225]);
    pos.forEach(([lx, ly]) => {
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.set(x + lx, y + ly, z + 0.037);
      lamp.add(led);
    });
    const arm = new THREE.Mesh(own(new THREE.CylinderGeometry(0.02, 0.02, 1.2, 12)), domeMat);
    arm.position.set(x, y + 0.75, z - 0.1);
    lamp.add(arm);
  });
  lamp.position.set(0.05, 2.02, -1.05);
  lamp.lookAt(0, 1.45, 1.2);
  scene.add(lamp);
  const lampSpot = spot(0xf2f6ff, [0.05, 2.02, -1.0], 0.45, false);

  // Bisturí: hoja que atrapa la luz de la lámpara
  const scalpel = new THREE.Group();
  const steel = own(new THREE.MeshStandardMaterial({ color: 0xd8dde2, metalness: 1, roughness: 0.12 }));
  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(0, 0); bladeShape.lineTo(0.042, 0.004); bladeShape.quadraticCurveTo(0.056, 0.011, 0.04, 0.016); bladeShape.lineTo(0, 0.009); bladeShape.lineTo(0, 0);
  const blade = new THREE.Mesh(own(new THREE.ExtrudeGeometry(bladeShape, { depth: 0.0008, bevelEnabled: false })), steel);
  blade.position.set(0.0, -0.004, 0);
  const handle = new THREE.Mesh(own(new THREE.BoxGeometry(0.12, 0.009, 0.004)), steel);
  handle.position.set(-0.062, 0.0, 0.0012);
  scalpel.add(blade, handle);
  scalpel.visible = false;
  scene.add(scalpel);

  const mists = [];
  const mistGeo = own(new THREE.PlaneGeometry(7, 4));
  for (let i = 0; i < 8; i++) {
    const colA = palette?.mistA != null ? toColor(palette.mistA) : new THREE.Color(i % 2 ? 0x7a1426 : 0x4e0a16);
    const colB = palette?.mistB != null ? toColor(palette.mistB) : new THREE.Color(i % 3 ? 0x1c3438 : 0x14282e);
    const m = own(new THREE.ShaderMaterial({
      vertexShader: MIST_VERT, fragmentShader: MIST_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: {
        uN: { value: noiseTex }, uTime: { value: 0 }, uSeed: { value: i * 1.7 + 0.3 }, uAmt: { value: 0 },
        uColA: { value: colA }, uColB: { value: colB },
      },
    }));
    const p = new THREE.Mesh(mistGeo, m);
    p.position.set((i % 3 - 1) * 0.5, HEAD.y - 0.1 + (i % 2) * 0.12, -2.4 + i * 0.5);
    p.rotation.y = (i % 2 ? 0.12 : -0.12);
    p.frustumCulled = false;
    scene.add(p);
    mists.push(p);
  }

  const dustMax = QUALITY[3].dust;
  const dr = rng(5);
  const dpos = new Float32Array(dustMax * 3);
  const dseed = new Float32Array(dustMax);
  for (let i = 0; i < dustMax; i++) {
    dpos[i * 3] = (dr() - 0.5) * 3.6;
    dpos[i * 3 + 1] = HEAD.y - 1.0 + dr() * 1.3;
    dpos[i * 3 + 2] = -2.2 + dr() * 3.4;
    dseed[i] = dr();
  }
  const dustGeo = own(new THREE.BufferGeometry());
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
  dustGeo.setAttribute('aSeed', new THREE.BufferAttribute(dseed, 1));
  const dustMat = own(new THREE.ShaderMaterial({
    vertexShader: DUST_VERT, fragmentShader: DUST_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uMap: { value: dotTex }, uTime: { value: 0 }, uPx: { value: 800 }, uSize: { value: 0.012 }, uAmt: { value: 0 },
      uColA: { value: palette?.dustA != null ? toColor(palette.dustA) : new THREE.Color(1.0, 0.28, 0.34) },
      uColB: { value: palette?.dustB != null ? toColor(palette.dustB) : new THREE.Color(0.62, 0.78, 0.8) },
    },
  }));
  const dust = new THREE.Points(dustGeo, dustMat);
  dust.frustumCulled = false;
  scene.add(dust);

  const haloMat = own(new THREE.ShaderMaterial({
    vertexShader: HALO_VERT, fragmentShader: HALO_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uN: { value: noiseTex }, uTime: { value: 0 }, uAmt: { value: 0 },
      uCol: { value: palette?.halo != null ? toColor(palette.halo) : new THREE.Color(0.85, 0.025, 0.07) },
    },
  }));
  const halo = new THREE.Mesh(own(new THREE.PlaneGeometry(1.5, 1.5)), haloMat);
  halo.position.set(HEAD.x, HEAD.y + 0.2, -0.4);
  halo.scale.setScalar(0.72);
  halo.frustumCulled = false;
  scene.add(halo);

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
  const pass = (m) => own(new THREE.ShaderMaterial({ vertexShader: QUAD_VERT, fragmentShader: m.frag, uniforms: m.uniforms, depthTest: false, depthWrite: false }));
  const brightMat = pass({ frag: BRIGHT_FRAG, uniforms: { tSrc: { value: null }, uThr: { value: 0.8 } } });
  const blurMat = pass({ frag: BLUR_FRAG, uniforms: { tSrc: { value: null }, uDir: { value: new THREE.Vector2() } } });
  const compMat = pass({
    frag: COMPOSITE_FRAG,
    uniforms: {
      tScene: { value: rtScene.texture }, tBloomA: { value: rtA.texture }, tBloomB: { value: rtC.texture },
      uRes: { value: new THREE.Vector2(1, 1) }, uTime: { value: 0 }, uAber: { value: 0.001 }, uGrain: { value: 0.05 },
      uExposure: { value: 0 }, uBloom: { value: 0 },
    },
  });
  const run = (m, target) => { quad.material = m; renderer.setRenderTarget(target); renderer.render(quadScene, quadCam); };
  const blur = (src, dst, sx, sy) => {
    blurMat.uniforms.tSrc.value = src.texture;
    blurMat.uniforms.uDir.value.set(sx / src.width, sy / src.height);
    run(blurMat, dst);
  };

  let W = 1;
  let H = 1;
  let baseFov = 30;
  const headQ = new THREE.Quaternion();
  const headE = new THREE.Euler();
  const headM4 = new THREE.Matrix4();
  const tmp = new THREE.Vector3();
  const shadowSize = (n) => { under.shadow.mapSize.set(n, n); under.shadow.map?.dispose(); under.shadow.map = null; };

  const applySize = () => {
    const px = Math.min(window.devicePixelRatio || 1, lv.dpr);
    renderer.setPixelRatio(Math.max(0.5, px));
    renderer.setSize(W, H, false);
    const bw = renderer.domElement.width;
    const bh = renderer.domElement.height;
    rtScene.setSize(bw, bh);
    rtA.setSize(Math.max(8, bw >> 2), Math.max(8, bh >> 2));
    rtB.setSize(Math.max(8, bw >> 2), Math.max(8, bh >> 2));
    rtC.setSize(Math.max(8, bw >> 3), Math.max(8, bh >> 3));
    rtD.setSize(Math.max(8, bw >> 3), Math.max(8, bh >> 3));
    compMat.uniforms.uRes.value.set(bw, bh);
    camera.aspect = W / H;
    updateFov();
  };
  const updateFov = () => {
    const a = W / H;
    const k = a < 1.5 ? 1.5 / a : 1;
    camera.fov = (2 * Math.atan(Math.tan((baseFov * Math.PI) / 360) * k) * 180) / Math.PI;
    camera.updateProjectionMatrix();
    dustMat.uniforms.uPx.value = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
  };

  const applyLevel = (n) => {
    const prev = lv;
    lv = QUALITY[Math.max(0, Math.min(3, n))];
    renderer.shadowMap.enabled = lv.shadow > 0;
    under.castShadow = lv.shadow > 0;
    if (lv.shadow > 0 && lv.shadow !== prev.shadow) shadowSize(lv.shadow);
    mat.needsUpdate = true;
    if (lv.msaa !== rtScene.samples) { rtScene.samples = lv.msaa; rtScene.dispose(); }
    mists.forEach((m, i) => { m.visible = i < lv.haze; });
    dustGeo.setDrawRange(0, lv.dust);
    applySize();
  };

  const eyeLocal = new THREE.Vector3(0, 1.612, 0.15);

  // Vida del rostro: parpadeos mecánicos, entrecerrar al amenazar, sacadas de la mirada y habla
  const BLINKS = [5.3, 8.9, 12.85, 16.1, 19.4, 23.05, 27.7];
  const blinkAt = (t) => {
    let v = 0;
    for (const b of BLINKS) {
      const x = (t - b) / 0.16;
      if (x > 0 && x < 1) v = Math.max(v, x < 0.35 ? x / 0.35 : 1 - (x - 0.35) / 0.65);
    }
    return v;
  };
  const squint = (t) => {
    if (t < 22.5 || t > 24.8) return 0;
    if (t < 23.0) return ((t - 22.5) / 0.5) * 0.38;
    if (t < 24.55) return 0.38;
    return 0.38 * (1 - (t - 24.55) / 0.25);
  };
  const sacc = rng(2027);
  const SACC = [];
  for (let at = 4.6; at < 30; at += 0.45 + sacc() * 1.1) SACC.push([at, (sacc() - 0.5) * 2, (sacc() - 0.5) * 1.2]);
  const face = { vl: 0, gx: 0, gy: 0, lastT: 0 };

  const update = (t) => {
    const s = sample(Math.min(t, 40), reduced);
    const mo = s.motion;
    const c = s.cam;
    const sway = mo * (s.sway ?? 1);
    camera.position.set(
      c.px + sway * (Math.sin(t * 0.37) * 0.006 + Math.sin(t * 1.3) * 0.0015),
      c.py + sway * (Math.cos(t * 0.29) * 0.004 + Math.sin(t * 0.9) * 0.0012),
      c.pz + sway * Math.sin(t * 0.21) * 0.01,
    );
    camera.up.set(0, 1, 0);
    camera.lookAt(c.tx, c.ty, c.tz || 0);
    camera.rotateZ(c.roll);
    if (Math.abs(baseFov - c.fov) > 1e-4) { baseFov = c.fov; updateFov(); }

    // Voz → mandíbula, boca, ojos y un leve asentir en cada sílaba
    const nowMs = performance.now();
    const dt = Math.min(0.05, Math.max(0, (nowMs - face.lastT) / 1000));
    face.lastT = nowMs;
    const vRaw = reduced ? 0 : (typeof window.__vl === 'number' ? window.__vl : getVoiceLevel()); // __vl: solo para revisar cuadros
    face.vl += (vRaw - face.vl) * Math.min(1, dt * (vRaw > face.vl ? 32 : 11));
    const vl = face.vl;
    const alive = Math.min(1, s.eye * 1.6);
    uniforms.uJaw.value = alive * (vl * 0.13 + (vl > 0.04 ? 0.006 : 0)) + (s.jawExtra || 0);
    uniforms.uHeadT.value.fromArray(s.headT || [0, 0, 0]);
    uniforms.uCrackSpread.value = s.crackSpread || 0;
    uniforms.uScan.value = s.scan ?? -1;
    uniforms.uMouth.value = alive * (vl * 0.7 + 0.03 * s.eye) + (s.mouthExtra || 0);
    uniforms.uLid.value = mo ? Math.max(blinkAt(t) * (s.eye > 0.2 ? 1 : 0), s.squint ?? squint(t)) : 0;

    // La mirada se adelanta al cuello: mira a la cámara antes de girar, con sacadas pequeñas
    let sx = 0, sy = 0;
    for (const [at, ax, ay] of SACC) { if (at > t) break; sx = ax; sy = ay; }
    const lead = Math.max(-1, Math.min(1, -s.yaw / 0.75));
    const gxT = (lead * 0.0042 + sx * 0.0011) * (mo ? 1 : 0);
    const gyT = (sy * 0.0008 - Math.max(0, s.pitch) * 0.004) * (mo ? 1 : 0);
    const gk = Math.min(1, dt * 26);
    face.gx += (gxT - face.gx) * gk;
    face.gy += (gyT - face.gy) * gk;
    uniforms.uGaze.value.set(face.gx, face.gy);

    headE.set(s.pitch + vl * 0.04, s.yaw, s.roll, 'YXZ');
    headQ.setFromEuler(headE);
    headM4.makeRotationFromQuaternion(headQ);
    uniforms.uHeadR.value.setFromMatrix4(headM4);
    uniforms.uEye.value = s.eye * (1 + vl * 0.6);
    uniforms.uCrackGlow.value = s.crackGlow + vl * (s.crackVoice ?? 0.7);
    tmp.copy(eyeLocal).sub(uniforms.uPivot.value).applyQuaternion(headQ).add(uniforms.uPivot.value).add(uniforms.uHeadT.value);
    eyeLight.position.copy(tmp).sub(rig.position);
    eyeLight.intensity = s.eye * 0.012;

    under.intensity = s.under * 2.6;
    rimL.intensity = s.rimLeft * 20;
    rimR.intensity = s.rimRight * 16;
    fill.intensity = s.fill * 9;
    keyL.intensity = (s.key || 0) * 10;
    backGlow.intensity = s.halo * 2.2;
    mat.envMapIntensity = 0.04 + (s.under + (s.key || 0)) * 0.08 + (s.lamp || 0) * 0.12;

    // Cuerpo inclinado sobre el paciente (pivote en el pecho)
    const b = s.body || [0, 0, 0, 0, 0];
    rig.position.set(b[0], 1.3 + b[1], b[2]);
    rig.rotation.set(b[3], b[4] || 0, 0);

    // Lámpara quirúrgica: LEDs HDR para el bloom y foco blanco que recorta la silueta
    const lampI = s.lamp || 0;
    lamp.visible = lampI > 0.001;
    ledMat.color.setRGB(9 * lampI, 8.6 * lampI, 8 * lampI);
    lampSpot.intensity = lampI * 26;

    // Cables: laten con el corazón y con la voz
    const cab = (s.cables || 0) * (1 + vl * 0.9);
    cableMat.color.setRGB(cableRGB[0] * cab, cableRGB[1] * cab, cableRGB[2] * cab);

    // Bisturí
    const sc = s.scalpel;
    scalpel.visible = Boolean(sc && sc.on);
    if (scalpel.visible) { scalpel.position.set(sc.x, sc.y, sc.z); scalpel.rotation.set(sc.rx || 0, sc.ry || 0, sc.rz || 0); }

    const tt = mo ? t : 9;
    mists.forEach((m, i) => {
      m.material.uniforms.uTime.value = tt;
      m.material.uniforms.uAmt.value = s.mist * 1.15 * (0.55 + (i % 3) * 0.25);
    });
    dustMat.uniforms.uTime.value = tt;
    dustMat.uniforms.uAmt.value = Math.min(1, s.mist) * 0.45;
    haloMat.uniforms.uTime.value = tt;
    haloMat.uniforms.uAmt.value = s.halo * 0.8;

    compMat.uniforms.uTime.value = tt;
    compMat.uniforms.uAber.value = lv.aber ? s.aberration : 0;
    compMat.uniforms.uExposure.value = s.exposure * 0.62;
    compMat.uniforms.uBloom.value = lv.bloom ? s.bloom : 0;
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
      (Array.isArray(m) ? m : m ? [m] : []).forEach((x) => {
        if (seen.has(x)) return;
        seen.add(x);
        Object.values(x).forEach((v) => { if (v && v.isTexture) v.dispose(); });
        x.dispose();
      });
    }));
    mesh.customDepthMaterial?.dispose();
    under.shadow.map?.dispose();
    owned.forEach((x) => x.dispose?.());
    scene.environment = null;
    renderer.dispose();
    renderer.forceContextLoss();
  };

  const resize = (w, h) => { W = Math.max(2, w); H = Math.max(2, h); applySize(); };
  applyLevel(level);
  W = canvas.clientWidth || 1280;
  H = canvas.clientHeight || 720;
  applySize();
  update(0);

  return {
    resize, update, render, dispose,
    setLevel: applyLevel,
    get level() { return lv.level; },
    get info() { return { tris, level: lv.level, model: lv.model }; },
    canvas: renderer.domElement,
    onContextLost: (fn) => canvas.addEventListener('webglcontextlost', fn, { once: true }),
  };
}
