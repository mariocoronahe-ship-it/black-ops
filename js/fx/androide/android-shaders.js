export const PORCELAIN_UNIFORMS = (THREE, tex) => ({
  uHeadR: { value: new THREE.Matrix3() },
  uPivot: { value: new THREE.Vector3(0, 1.5, -0.05) },
  uNeck: { value: new THREE.Vector2(1.43, 1.52) },
  uPorc: { value: tex },
  uEye: { value: 0 },
  uCrackGlow: { value: 0 },
  // Mandíbula articulada (bisagra cerca de la oreja), boca, párpado y mirada
  uJaw: { value: 0 },
  uJawHinge: { value: new THREE.Vector3(0, 1.566, -0.035) },
  uMouth: { value: 0 },
  uLid: { value: 0 },
  uGaze: { value: new THREE.Vector2(0, 0) },
  // Terror: desplazamiento de la cabeza (embestida), grietas que se extienden y láser de escaneo
  uHeadT: { value: new THREE.Vector3(0, 0, 0) },
  uCrackSpread: { value: 0 },
  uScan: { value: -1 },
  // Paleta inyectable (por defecto el rojo del residente)
  uEyeColor: { value: new THREE.Color(0.95, 0.012, 0.035) },
  uMouthColor: { value: new THREE.Color(1.0, 0.03, 0.06) },
  uCrackColor: { value: new THREE.Color(1.0, 0.05, 0.09) },
  uScanColor: { value: new THREE.Color(1.0, 0.02, 0.05) },
});

const HEAD_VERT_COMMON = `
  uniform mat3 uHeadR; uniform vec3 uPivot; uniform vec2 uNeck;
  uniform float uJaw; uniform vec3 uJawHinge; uniform vec3 uHeadT;
  varying vec3 vObjP; varying vec3 vObjN;
  vec3 jawOpen(vec3 p) {
    // Todo lo que queda bajo la comisura (y < 1.538) gira hacia abajo sobre la bisagra;
    // la franja de los labios se estira y el cuello no se mueve.
    float w = smoothstep(1.5415, 1.5335, p.y) * smoothstep(1.43, 1.47, p.y)
      * smoothstep(-0.03, 0.03, p.z) * smoothstep(0.085, 0.05, abs(p.x));
    float a = uJaw * w;
    float c = cos(a), s = sin(a);
    vec3 q = p - uJawHinge;
    return uJawHinge + vec3(q.x, q.y * c - q.z * s, q.y * s + q.z * c);
  }`;

// Para piezas añadidas (cables): siguen el giro y el desplazamiento de la cabeza igual que la malla
export function patchFollowHead(material, uniforms) {
  material.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>\n${HEAD_VERT_COMMON}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        float hwP = smoothstep(uNeck.x, uNeck.y, position.y);
        vObjP = position; vObjN = normal;
        transformed = mix(position, uHeadR * (position - uPivot) + uPivot + uHeadT, hwP);`);
  };
  material.customProgramCacheKey = () => 'follow-head';
}

export function patchPorcelain(material, uniforms, { depthOnly = false } = {}) {
  material.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>\n${HEAD_VERT_COMMON}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        float hwP = smoothstep(uNeck.x, uNeck.y, position.y);
        vObjP = position; vObjN = normal;
        vec3 jp = jawOpen(position);
        transformed = mix(jp, uHeadR * (jp - uPivot) + uPivot + uHeadT, hwP);`);
    if (depthOnly) return;
    sh.vertexShader = sh.vertexShader.replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
      float hwN = smoothstep(uNeck.x, uNeck.y, position.y);
      objectNormal = normalize(mix(objectNormal, uHeadR * objectNormal, hwN));`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform sampler2D uPorc; uniform float uEye, uCrackGlow, uMouth, uLid, uJaw, uCrackSpread, uScan; uniform vec2 uGaze;
        uniform vec3 uEyeColor, uMouthColor, uCrackColor, uScanColor;
        varying vec3 vObjP; varying vec3 vObjN;`)
      .replace('#include <map_fragment>', `#include <map_fragment>
        vec3 pa = vObjP * 4.0;
        vec3 wN = pow(abs(normalize(vObjN)), vec3(4.0)); wN /= (wN.x + wN.y + wN.z);
        vec3 tx = texture2D(uPorc, pa.yz).rgb * wN.x + texture2D(uPorc, pa.xz + 0.31).rgb * wN.y + texture2D(uPorc, pa.xy + 0.67).rgb * wN.z;
        float frontM = smoothstep(-0.01, 0.05, vObjP.z);
        vec2 pxy = vObjP.xy;
        float zoneA = exp(-dot(pxy - vec2(-0.052, 1.588), pxy - vec2(-0.052, 1.588)) / 0.0011) + exp(-dot(pxy - vec2(-0.085, 1.65), pxy - vec2(-0.085, 1.65)) / 0.0016);
        float zoneB = exp(-dot(pxy - vec2(0.03, 1.705), pxy - vec2(0.03, 1.705)) / 0.0014);
        float zoneC = exp(-dot(pxy - vec2(0.045, 1.55), pxy - vec2(0.045, 1.55)) / 0.0012);
        float zoneS = smoothstep(1.47, 1.36, vObjP.y);
        float blobs = (zoneA + zoneB * 0.9 + zoneC * 0.8) * frontM + zoneS * 0.9;
        float crackM = smoothstep(0.22, 0.55, blobs + (tx.g - 0.35) * 0.3);
        // Las grietas crecen desde la mejilla izquierda y avanzan por toda la cara
        float spreadM = step(0.001, uCrackSpread) * smoothstep(uCrackSpread, uCrackSpread - 0.045, length(pxy - vec2(-0.052, 1.588))) * smoothstep(-0.02, 0.04, vObjP.z);
        float crack = tx.r * max(crackM, spreadM * smoothstep(0.25, 0.6, tx.r + tx.g * 0.3));
        float lowDirt = smoothstep(1.64, 1.42, vObjP.y);
        float streak = 0.0;
        for (int i = 0; i < 2; i++) {
          float ex = i == 0 ? 0.036 : -0.036;
          streak += smoothstep(0.012, 0.0, abs(pxy.x - ex - (tx.g - 0.4) * 0.012)) * smoothstep(1.606, 1.592, pxy.y) * smoothstep(1.53, 1.575, pxy.y);
        }
        float dirtM = clamp(0.4 + lowDirt * 0.5 + streak * 1.0 + zoneA * 0.3, 0.0, 1.0);
        float grime = clamp(tx.g * 1.5 + streak * 0.5, 0.0, 1.0);
        // Metal negro: la suciedad oscurece y opaca, las juntas se hunden
        diffuseColor.rgb *= vec3(0.9, 0.9, 0.95);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.012, 0.011, 0.012), grime * dirtM * 0.5);
        diffuseColor.rgb *= 1.0 - crack * 0.92;
        diffuseColor.rgb *= 1.0 - tx.b * 0.22 * (0.35 + zoneS);
        vec2 ec1 = (pxy - vec2(0.036, 1.612)) * vec2(1.0, 1.12);
        vec2 ec2 = (pxy - vec2(-0.036, 1.612)) * vec2(1.0, 1.12);
        float de = min(length(ec1), length(ec2));
        float eyeFront = smoothstep(0.035, 0.06, vObjP.z);
        float iris = smoothstep(0.0098, 0.0072, de) * eyeFront;
        float dp = min(length(ec1 - uGaze), length(ec2 - uGaze));
        float pupil = smoothstep(0.0032, 0.002, dp);
        float lidGlow = exp(-de * de / 0.00022) * eyeFront;
        // Párpado tipo obturador: corta el brillo desde arriba
        float eyY = (abs(ec1.x) < abs(ec2.x) ? ec1.y : ec2.y);
        float lidEdge = 0.0105 - uLid * 0.022;
        float lidM = smoothstep(lidEdge + 0.0012, lidEdge - 0.0012, eyY);
        vec3 eyeEm = uEyeColor * (iris * (1.0 - pupil * 0.9) * 1.1 + lidGlow * 0.2) * lidM;
        // Boca: rendija oscura que se abre con la mandíbula y brilla por dentro al hablar
        // Forma de lente: más abierta al centro, cerrada en las comisuras
        float mx = clamp(abs(pxy.x) / 0.021, 0.0, 1.0);
        float mh = (0.0011 + uJaw * 0.016) * (1.0 - mx * mx) + 0.0003;
        float mouthBand = exp(-pow((pxy.y - 1.5372) / mh, 2.0)) * smoothstep(1.0, 0.8, mx) * smoothstep(0.055, 0.07, vObjP.z);
        diffuseColor.rgb *= 1.0 - mouthBand * clamp(0.3 + uJaw * 8.0, 0.0, 0.92);
        vec3 mouthEm = uMouthColor * mouthBand * mouthBand * uMouth;
        diffuseColor.rgb = mix(diffuseColor.rgb, uEyeColor * 0.03, iris * 0.85);
        diffuseColor.rgb *= 1.0 - 0.6 * exp(-de * de / 0.0009) * eyeFront;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = clamp(roughnessFactor + crack * 0.45 + grime * dirtM * 0.3, 0.0, 1.0);
        roughnessFactor = mix(roughnessFactor, 0.12, iris);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        float scanL = uScan > 0.0 ? exp(-pow((vObjP.y - uScan) / 0.0016, 2.0)) * smoothstep(0.0, 0.05, vObjP.z) : 0.0;
        totalEmissiveRadiance += eyeEm * uEye + mouthEm + uCrackColor * crack * (zoneA * frontM * 0.5 + spreadM * 1.4) * uCrackGlow
          + uScanColor * scanL * 1.6;`)
      .replace('#include <dithering_fragment>', `float fadeB = smoothstep(1.28, 1.46, vObjP.y);
        float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (fadeB < ign) discard;
        gl_FragColor.rgb *= fadeB;
        #include <dithering_fragment>`);
  };
  material.customProgramCacheKey = () => (depthOnly ? 'porc-depth' : 'porc-main');
}

export const MIST_VERT = `
  varying vec2 vUv; varying float vDist;
  void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vDist = length(mv.xyz); gl_Position = projectionMatrix * mv; }`;

export const MIST_FRAG = `
  uniform sampler2D uN; uniform float uTime, uSeed, uAmt; uniform vec3 uColA, uColB;
  varying vec2 vUv; varying float vDist;
  void main(){
    vec2 p = vUv * vec2(1.5, 0.85) + vec2(uSeed * 0.37, uSeed * 0.21) + vec2(uTime * 0.006, -uTime * 0.0035) * (0.6 + fract(uSeed * 0.7));
    float n = texture2D(uN, p).a * 0.62 + texture2D(uN, p * 2.4 + vec2(-uTime * 0.011, uTime * 0.007)).a * 0.38;
    n = n * n * n * 3.4;
    float edge = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x) * smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.6, vUv.y);
    vec3 col = mix(uColB, uColA, smoothstep(0.8, 0.1, vUv.x));
    float near = smoothstep(0.25, 1.1, vDist);
    gl_FragColor = vec4(col * n * edge * uAmt * near, 1.0);
  }`;

export const DUST_VERT = `
  uniform float uTime, uPx, uSize, uAmt; attribute float aSeed; varying float vA; varying float vTint;
  void main(){
    vec3 p = position;
    float f = fract(uTime * (0.004 + aSeed * 0.006) + aSeed * 7.0);
    p.y += f * 1.4;
    p.x += sin(uTime * 0.13 + aSeed * 40.0) * 0.06;
    p.z += cos(uTime * 0.11 + aSeed * 23.0) * 0.06;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    gl_PointSize = clamp(uSize * uPx / max(d, 0.1), 1.0, 14.0);
    vA = sin(3.14159 * f) * (0.55 + 0.45 * sin(uTime * (0.6 + aSeed * 2.0) + aSeed * 50.0)) * smoothstep(0.3, 1.0, d) * uAmt;
    vTint = aSeed;
    gl_Position = projectionMatrix * mv;
  }`;

export const DUST_FRAG = `
  uniform sampler2D uMap; uniform vec3 uColA, uColB; varying float vA; varying float vTint;
  void main(){
    float a = texture2D(uMap, gl_PointCoord).a;
    vec3 col = mix(uColA, uColB, step(0.72, vTint));
    gl_FragColor = vec4(col * a * vA, 1.0);
  }`;

export const HALO_VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

export const HALO_FRAG = `
  uniform sampler2D uN; uniform float uTime, uAmt; uniform vec3 uCol;
  varying vec2 vUv;
  void main(){
    vec2 q = (vUv - 0.5) * 2.0;
    float a = atan(q.y, q.x) / 6.2831853;
    float nn = texture2D(uN, vec2(a * 3.0 + uTime * 0.012, 0.13)).a;
    float r = length(q) + (nn - 0.5) * 0.035;
    float ring = exp(-pow((r - 0.6) / 0.013, 2.0));
    float gaps = smoothstep(0.3, 0.62, texture2D(uN, vec2(a * 2.0 + uTime * 0.018, 0.61)).a);
    float ring2 = exp(-pow((r - 0.69) / 0.0055, 2.0)) * smoothstep(0.5, 0.72, texture2D(uN, vec2(-a * 3.0 - uTime * 0.026, 0.37)).a);
    float ring3 = exp(-pow((r - 0.52) / 0.004, 2.0)) * smoothstep(0.55, 0.8, texture2D(uN, vec2(a * 4.0 + uTime * 0.03, 0.83)).a) * 0.6;
    float glow = exp(-pow((r - 0.6) / 0.1, 2.0)) * 0.22 + exp(-pow((r - 0.6) / 0.34, 2.0)) * 0.07;
    float disc = smoothstep(0.62, 0.05, r) * 0.035;
    float specks = step(0.93, texture2D(uN, vec2(a * 20.0, r * 8.0 + uTime * 0.01)).a) * exp(-pow((r - 0.62) / 0.09, 2.0)) * 0.22;
    float lum = ring * (0.25 + 0.95 * gaps) + ring2 * 0.8 + ring3 + glow + disc + specks;
    gl_FragColor = vec4(uCol * lum * uAmt, 1.0);
  }`;

export const QUAD_VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

export const BRIGHT_FRAG = `
  uniform sampler2D tSrc; uniform float uThr; varying vec2 vUv;
  void main(){ vec3 c = texture2D(tSrc, vUv).rgb; float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThr, uThr + 0.5, l), 1.0); }`;

export const BLUR_FRAG = `
  uniform sampler2D tSrc; uniform vec2 uDir; varying vec2 vUv;
  void main(){
    vec3 c = texture2D(tSrc, vUv).rgb * 0.2270270270;
    c += texture2D(tSrc, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
    c += texture2D(tSrc, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
    c += texture2D(tSrc, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
    c += texture2D(tSrc, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
    gl_FragColor = vec4(c, 1.0); }`;

export const COMPOSITE_FRAG = `
  uniform sampler2D tScene, tBloomA, tBloomB;
  uniform vec2 uRes; uniform float uTime, uAber, uGrain, uExposure, uBloom;
  varying vec2 vUv;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  void main(){
    vec2 d = vUv - 0.5;
    float ab = uAber * (0.4 + length(d) * 2.0);
    vec3 col;
    col.r = texture2D(tScene, vUv + d * ab).r;
    col.g = texture2D(tScene, vUv).g;
    col.b = texture2D(tScene, vUv - d * ab).b;
    vec3 bloom = texture2D(tBloomA, vUv).rgb * 0.7 + texture2D(tBloomB, vUv).rgb * 1.0;
    col += bloom * uBloom * 0.55;
    col *= uExposure;
    col = aces(col);
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, col * vec3(0.78, 0.96, 1.0), (1.0 - smoothstep(0.0, 0.45, l)) * 0.35);
    col = pow(max(col, 0.0), vec3(1.06));
    float vig = 1.0 - smoothstep(0.28, 0.9, length(d * vec2(uRes.x / uRes.y, 1.0)) * 0.95);
    col *= mix(0.12, 1.0, vig);
    col = pow(max(col, 0.0), vec3(1.0 / 2.2));
    float g = hash(vUv * uRes + fract(uTime * 7.3) * 91.0) - 0.5;
    col += g * uGrain * (0.35 + 0.65 * (1.0 - l)) * step(0.001, uExposure);
    gl_FragColor = vec4(col, 1.0);
  }`;
