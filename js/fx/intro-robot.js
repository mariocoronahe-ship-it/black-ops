/* ==========================================================================
   CALOT-OS · Androide de la intro
   Cabeza de androide hecha con geometría de Three.js: cráneo de metal pulido,
   máscara facial con placas, ojos de rendija con brillo HDR, mandíbula con
   rejilla, sienes mecánicas, cuello con anillos y cables. El relieve y la
   rugosidad salen de una textura de paneles generada en un canvas.
   ========================================================================== */

function surfaceTexture(THREE, size = 512) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = 'rgb(128,128,128)';
  g.fillRect(0, 0, size, size);
  // Micrograno del metal
  const img = g.getImageData(0, 0, size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = 128 + (Math.random() - 0.5) * 22;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = n;
  }
  g.putImageData(img, 0, 0);
  // Juntas de paneles
  g.strokeStyle = 'rgba(20,20,20,0.9)';
  g.lineWidth = 2.2;
  let s = 7;
  const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < 26; i++) {
    const x = r() * size, y = r() * size;
    const w = 40 + r() * 160, h = 30 + r() * 120;
    g.strokeRect(x, y, w, h);
    if (r() > 0.5) { g.beginPath(); g.moveTo(x, y + h / 2); g.lineTo(x + w, y + h / 2); g.stroke(); }
  }
  // Remaches
  g.fillStyle = 'rgba(210,210,210,0.9)';
  for (let i = 0; i < 90; i++) { g.beginPath(); g.arc(r() * size, r() * size, 1.6, 0, Math.PI * 2); g.fill(); }
  // Rayones
  g.strokeStyle = 'rgba(190,190,190,0.35)';
  g.lineWidth = 0.8;
  for (let i = 0; i < 140; i++) {
    const x = r() * size, y = r() * size, a = r() * Math.PI, l = 6 + r() * 40;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

export function buildRobot(THREE) {
  const root = new THREE.Group();
  const head = new THREE.Group();
  head.scale.set(0.9, 1, 1);
  root.add(head);

  const tex = surfaceTexture(THREE);
  const texA = tex.clone(); texA.repeat.set(3, 2); texA.needsUpdate = true;
  const texB = tex.clone(); texB.repeat.set(1.4, 1.4); texB.needsUpdate = true;

  const shell = new THREE.MeshPhysicalMaterial({
    color: 0x111317, metalness: 1, roughness: 0.42, roughnessMap: texA, bumpMap: texA, bumpScale: 0.9,
    clearcoat: 0.6, clearcoatRoughness: 0.22,
  });
  const plate = new THREE.MeshPhysicalMaterial({
    color: 0x5a606b, metalness: 1, roughness: 0.3, roughnessMap: texB, bumpMap: texB, bumpScale: 0.6,
    clearcoat: 1, clearcoatRoughness: 0.12, side: THREE.DoubleSide,
  });
  const dark = new THREE.MeshPhysicalMaterial({ color: 0x0c0d10, metalness: 0.9, roughness: 0.5, bumpMap: texA, bumpScale: 0.5 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x0a0a0c, metalness: 0.3, roughness: 0.62 });
  const voidMat = new THREE.MeshStandardMaterial({ color: 0x010101, metalness: 0, roughness: 1 });
  const eyeMats = [0, 1].map(() => new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) }));
  const pupilMats = [0, 1].map(() => new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) }));
  const mouthMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
  const ledMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });

  const add = (geo, mat, pos, rot = [0, 0, 0], scl = [1, 1, 1], parent = head) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(...pos);
    m.rotation.set(...rot);
    m.scale.set(...scl);
    parent.add(m);
    return m;
  };

  // Cráneo
  const prof = [[0.001, 0.98], [0.22, 0.96], [0.42, 0.88], [0.56, 0.74], [0.64, 0.55], [0.67, 0.35], [0.66, 0.15], [0.6, -0.02], [0.5, -0.14], [0.36, -0.22], [0.001, -0.25]]
    .map(([x, y]) => new THREE.Vector2(x, y));
  add(new THREE.LatheGeometry(prof, 72), shell, [0, 0, -0.02], [0, 0, 0], [0.86, 1, 1.02]);

  // Máscara facial
  add(new THREE.SphereGeometry(0.7, 72, 48, Math.PI / 2 - 0.98, 1.96, Math.PI * 0.3, Math.PI * 0.38), plate, [0, 0.2, 0.08], [0, 0, 0], [0.9, 1.12, 0.95]);
  // Placa de frente superior
  add(new THREE.SphereGeometry(0.72, 64, 24, Math.PI / 2 - 0.7, 1.4, Math.PI * 0.16, Math.PI * 0.16), plate, [0, 0.12, 0.06], [0, 0, 0], [0.9, 1.1, 0.98]);

  // Costuras luminosas sobre la máscara (siguen su curvatura)
  const seamMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
  const seamGrp = new THREE.Group();
  seamGrp.position.set(0, 0.2, 0.08);
  seamGrp.scale.set(0.9, 1.12, 0.95);
  head.add(seamGrp);
  // Solo arcos frontales: vertical al centro y tres horizontales
  const vw = 0.6;
  add(new THREE.TorusGeometry(0.705, 0.0045, 6, 96, vw * 2), seamMat, [0, 0, 0], [0, Math.PI / 2, Math.PI - vw], [1, 1, 1], seamGrp);
  [[0.36, 0.7], [0.6, 0.85]].forEach(([th, w]) => {
    const a = Math.PI * th;
    add(new THREE.TorusGeometry(0.706 * Math.sin(a), 0.004, 6, 96, w * 2), seamMat, [0, 0.705 * Math.cos(a), 0], [Math.PI / 2, 0, Math.PI / 2 - w], [1, 1, 1], seamGrp);
  });

  // Cuencas y ojos de rendija (internos hacia abajo: mirada hostil)
  const eyes = [];
  const pupils = [];
  [-1, 1].forEach((s, i) => {
    const tilt = s * 0.3;
    add(new THREE.SphereGeometry(1, 32, 16), voidMat, [s * 0.2, 0.33, 0.67], [0, 0, tilt], [0.17, 0.058, 0.07]);
    const e = add(new THREE.CapsuleGeometry(0.021, 0.15, 6, 16), eyeMats[i], [s * 0.2, 0.33, 0.728], [0, 0, Math.PI / 2 + tilt]);
    eyes.push(e);
    // Núcleo del ojo: punto incandescente que se desliza dentro de la rendija (mirada)
    const pu = add(new THREE.SphereGeometry(0.019, 16, 10), pupilMats[i], [0, 0, 0.012], [0, 0, 0], [1, 1, 0.6], e);
    pupils.push(pu);
    // Ceja de metal
    add(new THREE.BoxGeometry(0.32, 0.06, 0.15), plate, [s * 0.2, 0.445, 0.665], [-0.22, s * 0.28, s * 0.36]);
    // Pómulo
    add(new THREE.BoxGeometry(0.24, 0.09, 0.1), plate, [s * 0.33, 0.15, 0.55], [0.1, s * 0.75, -s * 0.22]);
    // Sien mecánica
    add(new THREE.CylinderGeometry(0.15, 0.15, 0.1, 40), dark, [s * 0.57, 0.35, 0], [0, 0, Math.PI / 2]);
    add(new THREE.TorusGeometry(0.15, 0.016, 12, 48), plate, [s * 0.625, 0.35, 0], [0, Math.PI / 2, 0]);
    add(new THREE.CylinderGeometry(0.06, 0.06, 0.04, 24), plate, [s * 0.64, 0.35, 0], [0, 0, Math.PI / 2]);
    add(new THREE.SphereGeometry(0.016, 12, 8), ledMat, [s * 0.64, 0.42, 0.07]);
    // Aletas traseras
    add(new THREE.BoxGeometry(0.04, 0.3, 0.42), shell, [s * 0.5, 0.62, -0.32], [0.5, 0, s * 0.35]);
  });
  // Puente nasal
  add(new THREE.BoxGeometry(0.055, 0.22, 0.07), plate, [0, 0.29, 0.725], [-0.18, 0, 0]);
  // Cresta central
  for (let i = 0; i < 8; i++) {
    const a = 0.55 - i * 0.28;
    add(new THREE.BoxGeometry(0.045, 0.07, 0.16), plate, [0, 0.37 + Math.cos(a) * 0.62, Math.sin(a) * 0.62], [-a, 0, 0]);
  }

  // Mandíbula
  const jaw = new THREE.Group();
  jaw.position.set(0, -0.2, 0.17);
  head.add(jaw);
  add(new THREE.CylinderGeometry(0.27, 0.15, 0.28, 6, 1), plate, [0, -0.1, 0.27], [0, Math.PI / 6, 0], [1, 1, 0.85], jaw);
  add(new THREE.PlaneGeometry(0.32, 0.1), mouthMat, [0, -0.03, 0.455], [0, 0, 0], [1, 1, 1], jaw);
  for (let i = 0; i < 7; i++) add(new THREE.BoxGeometry(0.016, 0.11, 0.03), dark, [-0.135 + i * 0.045, -0.03, 0.47], [0, 0, 0], [1, 1, 1], jaw);
  [-1, 1].forEach((s) => add(new THREE.BoxGeometry(0.06, 0.26, 0.08), dark, [s * 0.3, 0.02, 0.12], [0, s * 0.4, s * 0.15], [1, 1, 1], jaw));

  // Cuello, anillos y cables
  add(new THREE.CylinderGeometry(0.2, 0.24, 0.6, 32), dark, [0, -0.56, -0.06]);
  for (let i = 0; i < 4; i++) add(new THREE.TorusGeometry(0.225 + i * 0.006, 0.022, 12, 48), plate, [0, -0.36 - i * 0.12, -0.06], [Math.PI / 2, 0, 0]);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + 0.3;
    const x = Math.cos(a), z = Math.sin(a);
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(x * 0.26, -0.18, z * 0.26 - 0.08),
      new THREE.Vector3(x * 0.42, -0.6, z * 0.36 - 0.1),
      new THREE.Vector3(x * 0.62, -1.15, z * 0.5 - 0.1),
    ]);
    add(new THREE.TubeGeometry(curve, 24, 0.028, 8, false), rubber, [0, 0, 0]);
  }
  // Torso apenas sugerido (silueta)
  add(new THREE.CylinderGeometry(0.85, 1.35, 0.7, 6, 1), shell, [0, -1.3, -0.1], [0, Math.PI / 6, 0], [1, 1, 0.55], root);

  // Luces internas de los ojos (iluminan cuencas y cejas)
  const eyeLights = [-1, 1].map((s) => {
    const l = new THREE.PointLight(0xff2338, 0, 0.9, 2);
    l.position.set(s * 0.2, 0.33, 0.82);
    head.add(l);
    return l;
  });

  const setEye = (i, v) => {
    eyeMats[i].color.setRGB(4.2 * v, 0.18 * v, 0.26 * v);
    pupilMats[i].color.setRGB(14 * v, 3.2 * v, 2.6 * v);
    eyeLights[i].intensity = 2.2 * v;
  };

  return {
    root, head, jaw, eyes, pupils,
    setEyes(k) {
      const v = Math.max(0, k);
      setEye(0, v); setEye(1, v);
      ledMat.color.setRGB(4 * v, 0.2 * v, 0.2 * v);
      mouthMat.color.setRGB(0.9 * v, 0.03 * v, 0.06 * v);
      seamMat.color.setRGB(1.1 * v, 0.04 * v, 0.07 * v);
    },
    // Control fino: cada ojo, costuras, boca, párpado (0 abierto‥1 cerrado) y mirada (-1‥1)
    pose({ eyeL = 0, eyeR = 0, seams = 0, mouth = 0, leds = 0, lid = 0, gaze = 0 } = {}) {
      setEye(0, Math.max(0, eyeL)); setEye(1, Math.max(0, eyeR));
      seamMat.color.setRGB(1.1 * seams, 0.04 * seams, 0.07 * seams);
      mouthMat.color.setRGB(0.9 * mouth, 0.03 * mouth, 0.06 * mouth);
      ledMat.color.setRGB(4 * leds, 0.2 * leds, 0.2 * leds);
      const open = Math.max(0.08, 1 - lid);
      eyes.forEach((e) => { e.scale.x = open; });
      // El eje largo de la cápsula es su Y local
      pupils.forEach((p) => { p.position.y = gaze * 0.06; });
    },
  };
}
