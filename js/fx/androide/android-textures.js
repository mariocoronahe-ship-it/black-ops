import { rng } from './android-timeline.js?v=20261122j';

function canvas(size) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return c;
}

function valueNoise(size, cells, seed) {
  const r = rng(seed);
  const grid = new Float32Array(cells * cells);
  for (let i = 0; i < grid.length; i++) grid[i] = r();
  const out = new Float32Array(size * size);
  const at = (x, y) => grid[(((y % cells) + cells) % cells) * cells + (((x % cells) + cells) % cells)];
  for (let y = 0; y < size; y++) {
    const fy = (y / size) * cells;
    const y0 = Math.floor(fy);
    const ty = fy - y0;
    const sy = ty * ty * (3 - 2 * ty);
    for (let x = 0; x < size; x++) {
      const fx = (x / size) * cells;
      const x0 = Math.floor(fx);
      const tx = fx - x0;
      const sx = tx * tx * (3 - 2 * tx);
      const a = at(x0, y0) + (at(x0 + 1, y0) - at(x0, y0)) * sx;
      const b = at(x0, y0 + 1) + (at(x0 + 1, y0 + 1) - at(x0, y0 + 1)) * sx;
      out[y * size + x] = a + (b - a) * sy;
    }
  }
  return out;
}

export function fbm(size, seed, base = 4, octaves = 5) {
  const out = new Float32Array(size * size);
  let amp = 0.5;
  let norm = 0;
  for (let o = 0; o < octaves; o++) {
    const n = valueNoise(size, base << o, seed + o * 17);
    for (let i = 0; i < out.length; i++) out[i] += n[i] * amp;
    norm += amp;
    amp *= 0.5;
  }
  for (let i = 0; i < out.length; i++) out[i] /= norm;
  return out;
}

function drawCracks(ctx, size, seed) {
  const r = rng(seed);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const branch = (x, y, ang, len, w, depth) => {
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(x, y);
    let cx = x;
    let cy = y;
    let a = ang;
    const steps = Math.max(4, Math.floor(len / 9));
    for (let i = 0; i < steps; i++) {
      a += (r() - 0.5) * 0.95;
      cx += Math.cos(a) * (len / steps);
      cy += Math.sin(a) * (len / steps);
      ctx.lineTo(cx, cy);
      if (depth < 3 && r() < 0.16) {
        const px = cx;
        const py = cy;
        const pa = a + (r() < 0.5 ? -1 : 1) * (0.5 + r() * 0.7);
        const pl = len * (0.25 + r() * 0.3);
        const pw = Math.max(0.9, w * 0.6);
        ctx.stroke();
        branch(px, py, pa, pl, pw, depth + 1);
        ctx.lineWidth = w;
        ctx.beginPath();
        ctx.moveTo(px, py);
      }
    }
    ctx.stroke();
  };
  const unit = size / 1024;
  for (let i = 0; i < 9; i++) {
    const x = size * (0.15 + r() * 0.7);
    const y = size * (0.15 + r() * 0.7);
    branch(x, y, r() * Math.PI * 2, (160 + r() * 240) * unit, (2 + r() * 2.2) * unit, 0);
  }
}

function drawScratches(ctx, size, seed) {
  const r = rng(seed);
  ctx.lineCap = 'round';
  for (let i = 0; i < 220; i++) {
    const x = r() * size;
    const y = r() * size;
    const a = r() * Math.PI;
    const l = (8 + r() * 60) * (size / 1024);
    ctx.lineWidth = Math.max(0.6, (0.6 + r() * 0.9) * (size / 1024));
    ctx.globalAlpha = 0.25 + r() * 0.6;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

export function buildPorcelainMap(THREE, size) {
  const cracks = canvas(size);
  const cc = cracks.getContext('2d');
  cc.fillStyle = '#000';
  cc.fillRect(0, 0, size, size);
  cc.strokeStyle = '#fff';
  drawCracks(cc, size, 7);
  const scr = canvas(size);
  const sc = scr.getContext('2d');
  sc.fillStyle = '#000';
  sc.fillRect(0, 0, size, size);
  sc.strokeStyle = '#fff';
  drawScratches(sc, size, 21);
  const grime = fbm(Math.min(size, 256), 5, 3, 5);
  const gs = Math.min(size, 256);
  const cd = cc.getImageData(0, 0, size, size).data;
  const sd = sc.getImageData(0, 0, size, size).data;
  const out = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    const gy = Math.floor((y / size) * gs);
    for (let x = 0; x < size; x++) {
      const k = (y * size + x) * 4;
      const g = grime[gy * gs + Math.floor((x / size) * gs)];
      out[k] = cd[k];
      out[k + 1] = Math.min(255, Math.max(0, (g - 0.28) * 2.1 * 255));
      out[k + 2] = sd[k];
      out[k + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(out, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

export function buildNoiseMap(THREE, size = 256) {
  const n = fbm(size, 91, 4, 5);
  const out = new Uint8Array(size * size * 4);
  for (let i = 0; i < n.length; i++) {
    const v = Math.min(255, Math.max(0, (n[i] - 0.25) * 1.9 * 255));
    out[i * 4] = out[i * 4 + 1] = out[i * 4 + 2] = 255;
    out[i * 4 + 3] = v;
  }
  const tex = new THREE.DataTexture(out, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

export function buildDotMap(THREE) {
  const c = canvas(64);
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.35, 'rgba(255,255,255,0.3)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  return tex;
}
