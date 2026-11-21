// «Núcleo de obsidiana» (intro de la adscrita): 80 fragmentos de cristal negro que se ensamblan alrededor de
// un núcleo de luz roja. Las grietas entre fragmentos laten con la voz; el grupo de residentes llega como rayos.

import { getVoiceLevel } from '../voice.js?v=20261121t';
import { createForge, stageApi, rng, clamp } from './forge-common.js?v=20261121t';
import { createNameMesh } from './nombre.js?v=20261121t';

const CORE_VERT = `
  varying vec3 vN; varying vec3 vP; varying vec3 vV;
  void main(){ vN = normalize(normalMatrix * normal); vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }`;

const CORE_FRAG = `
  uniform float uTime, uHeat, uVoice;
  varying vec3 vN; varying vec3 vP; varying vec3 vV;
  float h31(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h31(i), h31(i + vec3(1,0,0)), f.x), mix(h31(i + vec3(0,1,0)), h31(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h31(i + vec3(0,0,1)), h31(i + vec3(1,0,1)), f.x), mix(h31(i + vec3(0,1,1)), h31(i + vec3(1,1,1)), f.x), f.y), f.z); }
  void main(){
    vec3 p = normalize(vP) * 2.4;
    float n = vn(p + vec3(0.0, uTime * 0.35, 0.0)) * 0.6 + vn(p * 2.3 - vec3(uTime * 0.5, 0.0, 0.0)) * 0.4;
    float veins = smoothstep(0.42, 0.5, n) * smoothstep(0.58, 0.5, n);
    float rim = pow(1.0 - max(dot(normalize(vN), normalize(vV)), 0.0), 2.0);
    vec3 deep = vec3(0.35, 0.0, 0.02);
    vec3 hot = vec3(2.2, 0.08, 0.1);
    vec3 col = mix(deep, hot, n * n) + hot * veins * 1.2 + vec3(1.4, 0.25, 0.25) * rim * 0.6;
    gl_FragColor = vec4(col * uHeat * (1.0 + uVoice * 0.9), 1.0);
  }`;

// Fragmento: prisma triangular entre la cara exterior del icosaedro y una cara interior más pequeña
function buildShards(THREE, detail = 1) {
  const ico = new THREE.IcosahedronGeometry(1, detail);
  const pos = ico.attributes.position.array;
  const shards = [];
  const v = (i) => new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
  for (let f = 0; f < pos.length / 9; f++) {
    const a = v(f * 3), b = v(f * 3 + 1), c = v(f * 3 + 2);
    const cen = a.clone().add(b).add(c).multiplyScalar(1 / 3);
    const sh = 0.9; // separación: deja grietas por donde sale la luz
    const o = [a, b, c].map((p) => p.clone().sub(cen).multiplyScalar(sh));
    const inner = o.map((p) => p.clone().multiplyScalar(0.55).add(cen.clone().multiplyScalar(-0.42)));
    const tri = [];
    const push = (p, q, r) => tri.push(p, q, r);
    push(o[0], o[1], o[2]);
    push(inner[0], inner[2], inner[1]);
    for (let k = 0; k < 3; k++) {
      const k2 = (k + 1) % 3;
      push(o[k], inner[k], o[k2]);
      push(o[k2], inner[k], inner[k2]);
    }
    const g = new THREE.BufferGeometry();
    const arr = new Float32Array(tri.length * 3);
    tri.forEach((p, i) => { arr[i * 3] = p.x; arr[i * 3 + 1] = p.y; arr[i * 3 + 2] = p.z; });
    g.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    g.computeVertexNormals();
    shards.push({ geo: g, center: cen, normal: cen.clone().normalize() });
  }
  ico.dispose();
  return shards;
}

export async function createNucleoStage({ THREE, canvas, level, reduced, sample, nodes: nodeData = null, name = '' }) {
  const forge = await createForge({ THREE, canvas, level });
  const { scene, camera, own } = forge;

  const core = new THREE.Group();
  scene.add(core);

  // Obsidiana: negro vítreo con barniz; las facetas planas atrapan la luz
  const glass = own(new THREE.MeshPhysicalMaterial({
    color: 0x070405, metalness: 0.15, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.0, flatShading: true,
    emissive: new THREE.Color(0.9, 0.02, 0.05), emissiveIntensity: 0,
  }));

  const r = rng(77);
  const shards = buildShards(THREE).map((s, i) => {
    own(s.geo);
    const holder = new THREE.Group();
    const mesh = new THREE.Mesh(s.geo, glass);
    holder.add(mesh);
    core.add(holder);
    const dir = new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize();
    // Llegan en orden de «altura» con un poco de azar: el núcleo se cierra de abajo arriba
    const order = (s.normal.y + 1) / 2;
    return {
      holder, center: s.center, normal: s.normal,
      from: s.normal.clone().multiplyScalar(4 + r() * 4).add(dir.multiplyScalar(2.5)),
      spin: new THREE.Vector3((r() - 0.5) * 9, (r() - 0.5) * 9, (r() - 0.5) * 9),
      delay: order * 0.65 + r() * 0.35,
      wob: r() * 6.28,
    };
  });

  // Núcleo de luz
  const coreU = { uTime: { value: 0 }, uHeat: { value: 0 }, uVoice: { value: 0 } };
  const heart = new THREE.Mesh(own(new THREE.IcosahedronGeometry(0.5, 5)), own(new THREE.ShaderMaterial({ vertexShader: CORE_VERT, fragmentShader: CORE_FRAG, uniforms: coreU })));
  core.add(heart);
  const coreLight = new THREE.PointLight(0xff2030, 0, 4, 1.6);
  core.add(coreLight);

  // Chispa inicial (donde termina la línea de ECG)
  const sparkMat = own(new THREE.SpriteMaterial({ color: new THREE.Color(0, 0, 0), blending: THREE.AdditiveBlending, depthWrite: false, map: buildGlow(THREE, own) }));
  const spark = new THREE.Sprite(sparkMat);
  scene.add(spark);

  // Rayos: cada residente llega al núcleo como un trazo de luz
  const n = Math.max(1, Math.min(16, nodeData?.length || 11));
  const rayGeo = own(new THREE.BufferGeometry());
  const rayPos = new Float32Array(n * 6);
  const rayCol = new Float32Array(n * 6);
  rayGeo.setAttribute('position', new THREE.BufferAttribute(rayPos, 3));
  rayGeo.setAttribute('color', new THREE.BufferAttribute(rayCol, 3));
  const rays = new THREE.LineSegments(rayGeo, own(new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
  rays.frustumCulled = false;
  scene.add(rays);
  const rr = rng(5);
  const rayData = Array.from({ length: n }, (_, i) => {
    const a = rr() * Math.PI * 2;
    const el = (rr() - 0.5) * 1.2;
    return {
      from: new THREE.Vector3(Math.cos(a) * 9 * Math.cos(el), Math.sin(el) * 6, Math.sin(a) * 4 - 2),
      at: 5.7 + i * 0.36 + rr() * 0.1,
      alert: nodeData?.[i] ? nodeData[i].st !== 'ok' : i % 4 === 2,
    };
  });

  // Anillo de escaneo
  const ringMat = own(new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  const ring = new THREE.Mesh(own(new THREE.TorusGeometry(1.25, 0.004, 6, 180)), ringMat);
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);

  // Luces
  const key = new THREE.SpotLight(0xf4eeee, 0, 0, 0.45, 0.8, 2);
  key.position.set(-3.2, 3.4, 4.2);
  const rim = new THREE.SpotLight(0xff2a3a, 0, 0, 0.55, 0.9, 2);
  rim.position.set(3.6, 1.0, -2.6);
  const glint = new THREE.SpotLight(0xffffff, 0, 0, 0.35, 0.6, 2);
  glint.position.set(1.2, 2.6, 6.5);
  scene.add(glint, glint.target);
  const low = new THREE.SpotLight(0xff1830, 0, 0, 0.6, 0.9, 2);
  low.position.set(0.6, -3.6, 2.0);
  scene.add(key, key.target, rim, rim.target, low, low.target);

  const face = { vl: 0, lastT: 0 };
  let nameKit = null;
  const tmp = new THREE.Vector3();
  const tmp2 = new THREE.Vector3();

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

    // Cámara en órbita lenta; en vertical se aleja para que el núcleo quepa a lo ancho
    const tanV = Math.tan((camera.fov * Math.PI) / 360);
    const a = camera.aspect;
    const base = Math.max(2.9 / tanV, 1.75 / (tanV * a));
    const d = base * s.cam.dist;
    const yaw = s.cam.yaw + (mo ? Math.sin(t * 0.21) * 0.03 : 0);
    camera.position.set(Math.sin(yaw) * d, s.cam.lift + (mo ? Math.cos(t * 0.27) * 0.04 : 0), Math.cos(yaw) * d);
    camera.up.set(Math.sin(s.cam.roll || 0), Math.cos(s.cam.roll || 0), 0);
    camera.lookAt(0, s.cam.lift * 0.35 + (s.cam.aim || 0), 0);

    core.rotation.set(0.32 + (mo ? tt * 0.035 : 0), (mo ? tt * 0.12 : 0.6) + s.spinKick, 0.12);
    const cScale = Math.max(0.001, 1 - (s.collapse || 0));
    core.scale.setScalar(cScale);
    core.visible = cScale > 0.002;

    // Fragmentos: vuelan desde la oscuridad, encajan, «respiran» con la voz y se abren al final
    const open = s.open + vl * 0.05;
    shards.forEach((sh) => {
      const k = reduced ? 1 : clamp((s.assemble - sh.delay) / 0.9);
      const e = 1 - Math.pow(1 - k, 4);
      tmp.copy(sh.normal).multiplyScalar(open * (0.6 + 0.4 * Math.sin(sh.wob + tt * 0.8))).add(sh.center);
      tmp2.copy(sh.from).lerp(tmp, e);
      sh.holder.position.copy(tmp2);
      sh.holder.rotation.set(sh.spin.x * (1 - e), sh.spin.y * (1 - e), sh.spin.z * (1 - e));
    });
    glass.emissiveIntensity = s.edgeHeat * 0.35;

    coreU.uTime.value = tt;
    coreU.uHeat.value = s.heat;
    coreU.uVoice.value = vl;
    heart.scale.setScalar(0.92 + s.heat * 0.08 + vl * 0.05);
    coreLight.intensity = s.heat * (3.5 + vl * 7) * s.seams + s.heat * 1.2;

    spark.position.set(0, 0, 0);
    spark.scale.setScalar(0.25 + s.spark * 1.4);
    sparkMat.color.setRGB(3 * s.spark, 0.5 * s.spark, 0.5 * s.spark);

    // Rayos de los residentes
    for (let i = 0; i < n; i++) {
      const rd = rayData[i];
      const k = reduced ? 0 : clamp((t - rd.at) / 0.75);
      const head = k * k;
      const tail = Math.max(0, head - 0.28);
      const live = k > 0 && k < 1 ? 1 : 0;
      tmp.copy(rd.from).multiplyScalar(1 - head);
      tmp2.copy(rd.from).multiplyScalar(1 - tail);
      rayPos.set([tmp.x, tmp.y, tmp.z, tmp2.x, tmp2.y, tmp2.z], i * 6);
      const c = rd.alert ? [3, 0.15, 0.2] : [2.2, 1.6, 1.6];
      const br = live * s.rays;
      rayCol.set([c[0] * br, c[1] * br, c[2] * br, 0, 0, 0], i * 6);
    }
    rayGeo.attributes.position.needsUpdate = true;
    rayGeo.attributes.color.needsUpdate = true;

    // Escaneo
    const scanOn = s.scan >= 0 ? Math.min(clamp(s.scan / 0.08), clamp((1 - s.scan) / 0.1)) : 0;
    const sy = 1.35 - s.scan * 2.7;
    ring.position.set(0, sy, 0);
    const rad = Math.sqrt(Math.max(0.02, 1.25 * 1.25 - sy * sy * 0.55));
    ring.scale.setScalar(rad / 1.25);
    ringMat.color.setRGB(3 * scanOn, 0.1 * scanOn, 0.15 * scanOn);

    key.intensity = s.key * 70;
    glint.intensity = s.key * 55;
    nameKit?.update(t, s.name);
    rim.intensity = s.rim * 60;
    low.intensity = s.low * 40;

    forge.atmosphere(tt, { mist: s.mist, dust: s.dust });
    forge.post(tt, { exposure: s.exposure, bloom: s.bloom, aberration: s.aberration, glitch: mo ? s.glitch : 0, flash: s.flash || 0 });
  };

  // Nombre del médico en 3D bajo «CALOT·OS»: se prepara en segundo plano para no retrasar la carga
  if (name && !reduced) {
    createNameMesh({ THREE, camera, scene, own, name, screenY: 0.69, widthDesk: 0.38, widthMob: 0.8 })
      .then((k) => { nameKit = k; })
      .catch((err) => console.warn('[nucleo] sin nombre 3D:', err?.message || err));
  }

  forge.init();
  update(0);
  return stageApi(forge, update, { model: 'nucleo' });
}

function buildGlow(THREE, own) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.15, 'rgba(255,255,255,0.6)');
  grd.addColorStop(0.45, 'rgba(255,255,255,0.12)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  return own(new THREE.CanvasTexture(c));
}
