// Nombre del médico en letras de metal 3D para el cierre de las intros (debajo de «CALOT·OS»):
// cientos de fragmentos llegan volando y forman el nombre, el calor sube hasta rojo incandescente y falla con glitch.
// Va pegado a la cámara para quedar siempre en el mismo lugar de la pantalla, sin importar el movimiento del escenario.

const VENDOR = new URL('../../../vendor/three/', import.meta.url);
const FONT_URL = new URL('../../../assets/fonts/space-grotesk-bold.typeface.json?v=20261122e', import.meta.url).href;

let kitPromise = null;
export function loadNameKit() {
  if (!kitPromise) {
    kitPromise = Promise.all([
      import(new URL('addons/loaders/FontLoader.js', VENDOR).href).then(({ FontLoader }) => new FontLoader().loadAsync(FONT_URL)),
      import(new URL('addons/geometries/TextGeometry.js', VENDOR).href).then((m) => m.TextGeometry),
    ]).then(([font, TextGeometry]) => ({ font, TextGeometry }))
      .catch((err) => { kitPromise = null; throw err; });
  }
  return kitPromise;
}

export function prefetchNameKit() { loadNameKit().catch(() => {}); }

/**
 * @param screenY posición vertical del centro del nombre (0 = arriba, 1 = abajo)
 * @param widthDesk/widthMob fracción del ancho de pantalla que ocupa el nombre
 */
export async function createNameMesh({ THREE, camera, scene, own, name, screenY = 0.64, widthDesk = 0.5, widthMob = 0.84 }) {
  const { font, TextGeometry } = await loadNameKit();
  let geo = new TextGeometry(name, {
    font, size: 0.5, height: 0.14, curveSegments: 7,
    bevelEnabled: true, bevelThickness: 0.018, bevelSize: 0.012, bevelSegments: 3,
  });
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  geo.translate(-(bb.max.x + bb.min.x) / 2, -(bb.max.y + bb.min.y) / 2, -(bb.max.z + bb.min.z) / 2);
  if (geo.index) geo = geo.toNonIndexed();
  own(geo);
  const width = bb.max.x - bb.min.x;
  const height = bb.max.y - bb.min.y;

  // Cada triángulo guarda su centro, una dirección de vuelo y una semilla
  const pos = geo.attributes.position;
  const aCenter = new Float32Array(pos.count * 3);
  const aDir = new Float32Array(pos.count * 3);
  const aSeed = new Float32Array(pos.count);
  let s = 1234567;
  const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let f = 0; f < pos.count / 3; f++) {
    let cx = 0, cy = 0, cz = 0;
    for (let k = 0; k < 3; k++) { cx += pos.getX(f * 3 + k); cy += pos.getY(f * 3 + k); cz += pos.getZ(f * 3 + k); }
    cx /= 3; cy /= 3; cz /= 3;
    const dir = [cx / (width * 0.5) * 0.9 + (rnd() - 0.5) * 1.4, cy / (height * 0.5) * 0.6 + (rnd() - 0.5) * 1.4, 0.4 + rnd() * 1.8];
    const sd = rnd();
    for (let k = 0; k < 3; k++) {
      const i = f * 3 + k;
      aCenter.set([cx, cy, cz], i * 3);
      aDir.set(dir, i * 3);
      aSeed[i] = sd;
    }
  }
  geo.setAttribute('aCenter', new THREE.BufferAttribute(aCenter, 3));
  geo.setAttribute('aDir', new THREE.BufferAttribute(aDir, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(aSeed, 1));

  const U = {
    uScatter: { value: 1 }, uHeat: { value: 0 }, uGlitch: { value: 0 }, uTime: { value: 0 },
    uHalfW: { value: width / 2 }, uHalfH: { value: height / 2 },
  };
  const mat = own(new THREE.MeshStandardMaterial({
    color: 0xb8b2b4, metalness: 1, roughness: 0.24, envMapIntensity: 1.1,
    emissive: new THREE.Color(1, 0.04, 0.06), emissiveIntensity: 1, transparent: true, opacity: 1, depthTest: false,
  }));
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec3 aCenter; attribute vec3 aDir; attribute float aSeed;
        uniform float uScatter, uGlitch, uTime, uHalfW, uHalfH;
        varying float vY; varying float vSeed; varying float vFly;
        mat3 rotA(vec3 ax, float a){ ax = normalize(ax); float s = sin(a), c = cos(a), oc = 1.0 - c;
          return mat3(oc*ax.x*ax.x+c, oc*ax.x*ax.y+ax.z*s, oc*ax.z*ax.x-ax.y*s,
                      oc*ax.x*ax.y-ax.z*s, oc*ax.y*ax.y+c, oc*ax.y*ax.z+ax.x*s,
                      oc*ax.z*ax.x+ax.y*s, oc*ax.y*ax.z-ax.x*s, oc*ax.z*ax.z+c); }
        float h11(float n){ return fract(sin(n * 91.345) * 47453.5453); }`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vY = (aCenter.y / uHalfH) * 0.5 + 0.5; vSeed = aSeed;
        // Llegan en onda desde los extremos hacia el centro; cada fragmento gira hasta encajar
        float delay = (1.0 - abs(aCenter.x) / uHalfW) * 0.25 + aSeed * 0.12;
        float e = clamp((uScatter - delay) / 0.63, 0.0, 1.0);
        vFly = e;
        vec3 local = (transformed - aCenter) * (1.0 - e * 0.55);
        local = rotA(vec3(aSeed - 0.5, 0.7, aSeed * 0.6 - 0.2), e * (6.0 + aSeed * 10.0)) * local;
        transformed = aCenter + local + aDir * (e * e * 3.2 + e * 0.6);
        float band = floor(aCenter.y * 9.0);
        float g = step(0.72, h11(band + floor(uTime * 22.0))) * uGlitch;
        transformed.x += (h11(band * 3.7 + floor(uTime * 22.0)) - 0.5) * 0.35 * g;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uHeat; varying float vY; varying float vSeed; varying float vFly;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        float front = uHeat * 1.25 - vY * 0.35;
        totalEmissiveRadiance *= smoothstep(0.0, 0.25, front) * (0.22 + 0.4 * uHeat) + vFly * 0.6 * (0.5 + vSeed);`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.32, 0.03, 0.04), smoothstep(0.0, 0.4, uHeat * 1.25 - vY * 0.35));
        diffuseColor.a *= 1.0 - smoothstep(0.75, 1.0, vFly);`);
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 10;
  mesh.visible = false;

  // Luces propias pegadas a la cámara: el nombre siempre se lee igual, sin depender del escenario
  const holder = new THREE.Group();
  const key = new THREE.PointLight(0xffffff, 0, 0, 2);
  const rim = new THREE.PointLight(0xff2a3a, 0, 0, 2);
  holder.add(mesh, key, rim);
  camera.add(holder);
  if (!camera.parent) scene.add(camera);

  const D = 6;
  const update = (t, { scatter = 1, heat = 0, glitch = 0, beat = 0, fade = 1 } = {}) => {
    const show = scatter < 0.999 && fade > 0.001;
    mesh.visible = show;
    if (!show) { key.intensity = 0; rim.intensity = 0; return; }
    const tanV = Math.tan((camera.fov * Math.PI) / 360);
    const a = camera.aspect;
    const frac = a < 1 ? widthMob : widthDesk;
    const sc = Math.min((2 * D * tanV * a * frac) / width, (2 * D * tanV * 0.12) / height) * (1 + beat * 0.035);
    holder.position.set(0, -(screenY - 0.5) * 2 * D * tanV, -D);
    mesh.scale.setScalar(sc);
    mesh.rotation.set(Math.sin(t * 0.8) * 0.04, Math.sin(t * 0.55) * 0.1, 0);
    key.position.set(-width * sc, height * sc * 4, 3);
    rim.position.set(width * sc, -height * sc * 2, 1.5);
    key.intensity = 14 * fade;
    rim.intensity = (4 + heat * 10) * fade;
    U.uScatter.value = scatter;
    U.uHeat.value = heat;
    U.uGlitch.value = glitch;
    U.uTime.value = t;
    mat.opacity = fade;
  };
  return { update };
}
