// Escenas cinemáticas por subsección (6 modos de Juegos · 5 categorías de Recursos)
// Cada escena define copy, color, emblema SVG, tipo de apertura y un renderer Canvas propio.
// draw(ctx, w, h, t, dt, st) recibe t = segundos de la línea de tiempo (0 → 11.2) y st = estado de la escena.

const TAU = Math.PI * 2;
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp01 = (v) => Math.max(0, Math.min(1, v));
const ease = (v) => 1 - Math.pow(1 - clamp01(v), 3);

function glowLine(ctx, pts, rgb, alpha, width, blur = 14) {
  if (pts.length < 2) return;
  ctx.save();
  ctx.shadowColor = `rgba(${rgb}, ${alpha})`;
  ctx.shadowBlur = blur;
  ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.stroke();
  ctx.restore();
}

function dot(ctx, x, y, r, fill) {
  ctx.beginPath();
  ctx.arc(x, y, Math.max(0.1, r), 0, TAU);
  ctx.fillStyle = fill;
  ctx.fill();
}

function radial(ctx, x, y, r, rgb, a) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(1, r));
  g.addColorStop(0, `rgba(${rgb}, ${a})`);
  g.addColorStop(1, `rgba(${rgb}, 0)`);
  ctx.fillStyle = g;
  ctx.fillRect(x - r, y - r, r * 2, r * 2);
}

// Golpes de pulso compartidos (ondas de impacto)
function drawWaves(ctx, w, h, dt, st, rgb) {
  for (let i = st.waves.length - 1; i >= 0; i--) {
    const wv = st.waves[i];
    wv.r += dt * (460 + st.boost * 340);
    wv.a -= dt * 1.3;
    if (wv.a <= 0) { st.waves.splice(i, 1); continue; }
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, wv.r, 0, TAU);
    ctx.strokeStyle = `rgba(${rgb}, ${wv.a * 0.7})`;
    ctx.lineWidth = wv.lw;
    ctx.stroke();
  }
}

// ---------- JUEGOS ----------

const blitz = {
  init() {
    return {
      bolts: [],
      digits: Array.from({ length: 46 }, () => ({ x: Math.random(), y: Math.random(), v: rnd(0.2, 0.7), n: Math.floor(rnd(0, 46)) })),
      nextBolt: 0,
    };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const cx = w / 2, cy = h / 2;
    const R = Math.min(w, h) * 0.3;
    // lluvia de dígitos contrarreloj
    ctx.font = '600 14px ui-monospace, Menlo, monospace';
    for (const d of st.digits) {
      d.y += d.v * dt * (1 + st.boost * 2.4);
      if (d.y > 1.05) { d.y = -0.05; d.x = Math.random(); d.n = Math.floor(rnd(0, 46)); }
      ctx.fillStyle = `rgba(${rgb}, ${0.12 + d.v * 0.3})`;
      ctx.fillText(String(d.n).padStart(2, '0'), d.x * w, d.y * h);
    }
    // carátula de 45 marcas
    const sweep = clamp01((t - 2.3) / 7.2);
    for (let i = 0; i < 45; i++) {
      const a = -Math.PI / 2 + (i / 45) * TAU;
      const lit = i / 45 < sweep;
      const r0 = R * (i % 5 === 0 ? 0.86 : 0.92);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
      ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
      ctx.strokeStyle = lit ? `rgba(${rgb}, 0.95)` : 'rgba(255,255,255,0.12)';
      ctx.lineWidth = i % 5 === 0 ? 3 : 1.5;
      ctx.stroke();
    }
    // manecilla que acelera
    const speed = 0.8 + st.boost * 4.5 + Math.max(0, t - 6) * 0.9;
    st.hand = (st.hand || 0) + dt * speed;
    const ha = -Math.PI / 2 + st.hand;
    glowLine(ctx, [[cx, cy], [cx + Math.cos(ha) * R * 0.8, cy + Math.sin(ha) * R * 0.8]], rgb, 0.95, 3, 22);
    dot(ctx, cx, cy, 6, `rgba(${rgb}, 1)`);
    // rayos
    st.nextBolt -= dt;
    if (t > 2.4 && st.nextBolt <= 0) {
      st.nextBolt = rnd(0.18, 0.55) / (1 + st.boost);
      const x0 = rnd(0.05, 0.95) * w;
      const pts = [[x0, 0]];
      let x = x0, y = 0;
      while (y < h) { y += rnd(30, 70); x += rnd(-38, 38); pts.push([x, y]); }
      st.bolts.push({ pts, a: 1 });
    }
    for (let i = st.bolts.length - 1; i >= 0; i--) {
      const b = st.bolts[i];
      b.a -= dt * 3.2;
      if (b.a <= 0) { st.bolts.splice(i, 1); continue; }
      glowLine(ctx, b.pts, rgb, b.a * 0.8, 1.6 + b.a * 1.6, 26);
    }
  },
};

const pase = {
  init() {
    return { lights: Array.from({ length: 10 }, (_, i) => ({ z: 1 - i * 0.1, on: 0 })), travel: 0 };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const cx = w / 2, cy = h * 0.46;
    // pasillo en perspectiva
    ctx.strokeStyle = 'rgba(255,255,255,0.10)';
    ctx.lineWidth = 1;
    const corners = [[0, 0], [w, 0], [w, h], [0, h]];
    for (const [x, y] of corners) {
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.stroke();
    }
    st.travel += dt * (0.08 + st.boost * 0.22);
    // marcos de puertas del pasillo
    for (let k = 0; k < 9; k++) {
      const z = ((k / 9 - st.travel) % 1 + 1) % 1;
      const s = 0.05 + Math.pow(1 - z, 2.2) * 1.05;
      ctx.strokeStyle = `rgba(255,255,255,${0.03 + (1 - z) * 0.09})`;
      ctx.strokeRect(cx - (w / 2) * s, cy - (h * 0.46) * s, w * s, h * s);
    }
    // fluorescentes que se encienden uno a uno
    st.lights.forEach((L, i) => {
      const z = ((L.z - st.travel) % 1 + 1) % 1;
      const s = 0.05 + Math.pow(1 - z, 2.2) * 1.05;
      const target = t > 2.4 + i * 0.5 ? 1 : 0;
      L.on += (target - L.on) * Math.min(1, dt * 9);
      const flicker = L.on > 0.2 && Math.random() < 0.05 ? 0.35 : 1;
      const a = L.on * flicker * (0.25 + (1 - z) * 0.75);
      const lw = w * 0.16 * s;
      const ly = cy - h * 0.44 * s;
      ctx.save();
      ctx.shadowColor = `rgba(${rgb}, ${a})`;
      ctx.shadowBlur = 30 * s + 6;
      ctx.fillStyle = `rgba(235,248,255,${a})`;
      ctx.fillRect(cx - lw / 2, ly, lw, Math.max(1.5, 7 * s));
      ctx.restore();
      radial(ctx, cx, ly + 30 * s, 160 * s, rgb, a * 0.18);
    });
    // checklist del plan
    const items = 5;
    for (let i = 0; i < items; i++) {
      const p = ease((t - 3.3 - i * 0.55) / 0.35);
      if (p <= 0) continue;
      const x = w * 0.08, y = h * 0.3 + i * 34;
      ctx.strokeStyle = `rgba(${rgb}, ${0.5 * p})`;
      ctx.lineWidth = 1.4;
      ctx.strokeRect(x, y - 12, 16, 16);
      glowLine(ctx, [[x + 3, y - 4], [x + 3 + 4 * p, y - 4 + 4 * p], [x + 7 + 7 * p, y - 4 - 6 * p]], rgb, p, 2.2, 10);
      ctx.fillStyle = `rgba(255,255,255,${0.12 * p})`;
      ctx.fillRect(x + 26, y - 6, 90 + i * 12, 3);
    }
  },
};

const lapblanca = {
  init() { return { sparks: [] }; },
  draw(ctx, w, h, t, dt, st, rgb) {
    const cx = w / 2;
    // cono de luz cenital
    const lampOn = ease((t - 1.9) / 0.8);
    if (lampOn > 0) {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, `rgba(255,255,255,${0.10 * lampOn})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(cx - w * 0.06, 0); ctx.lineTo(cx + w * 0.06, 0);
      ctx.lineTo(cx + w * 0.42, h); ctx.lineTo(cx - w * 0.42, h);
      ctx.closePath(); ctx.fill();
    }
    // incisión vertical
    const cut = ease((t - 2.5) / 1.4);
    if (cut > 0) {
      const y0 = h * 0.12, y1 = y0 + (h * 0.76) * cut;
      const open = Math.max(0, (t - 4.1) * 1.4) * (1 + st.boost * 1.5);
      ctx.save();
      ctx.fillStyle = `rgba(${rgb}, ${0.10 + Math.min(0.25, open * 0.03)})`;
      ctx.beginPath();
      ctx.moveTo(cx, y0);
      ctx.quadraticCurveTo(cx - Math.min(60, open * 6), (y0 + y1) / 2, cx, y1);
      ctx.quadraticCurveTo(cx + Math.min(60, open * 6), (y0 + y1) / 2, cx, y0);
      ctx.fill();
      ctx.restore();
      glowLine(ctx, [[cx, y0], [cx, y1]], rgb, 0.95, 2.4, 24);
      if (cut < 1) {
        for (let i = 0; i < 3; i++) st.sparks.push({ x: cx, y: y1, vx: rnd(-140, 140), vy: rnd(-180, 20), a: 1 });
        // bisturí
        ctx.save();
        ctx.translate(cx, y1);
        ctx.rotate(-0.5);
        ctx.fillStyle = 'rgba(230,236,245,0.95)';
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(10, -26); ctx.lineTo(4, -28); ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(160,170,185,0.9)';
        ctx.fillRect(4, -92, 6, 64);
        ctx.restore();
      }
    }
    for (let i = st.sparks.length - 1; i >= 0; i--) {
      const s = st.sparks[i];
      s.vy += 420 * dt; s.x += s.vx * dt; s.y += s.vy * dt; s.a -= dt * 1.8;
      if (s.a <= 0) { st.sparks.splice(i, 1); continue; }
      dot(ctx, s.x, s.y, 1.6, `rgba(${rgb}, ${s.a})`);
    }
    // monitor inferior
    const baseY = h - 90;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 4) {
      const ph = ((x / w) * 4 - t * 1.1) % 1;
      const p = (ph + 1) % 1;
      const y = p > 0.3 && p < 0.34 ? -38 * Math.sin(((p - 0.3) / 0.04) * Math.PI) : 0;
      x === 0 ? ctx.moveTo(x, baseY + y) : ctx.lineTo(x, baseY + y);
    }
    ctx.strokeStyle = `rgba(${rgb}, 0.35)`;
    ctx.lineWidth = 1.6;
    ctx.stroke();
  },
};

const detective = {
  init(w, h) {
    const clues = Array.from({ length: 7 }, (_, i) => ({
      x: rnd(0.12, 0.88), y: rnd(0.18, 0.82), seen: 0, order: -1, label: ['FIEBRE', 'LEUCOS', 'DOLOR FID', 'TAC', 'PCR', 'BLUMBERG', 'ALVARADO'][i],
    }));
    const rain = Array.from({ length: 140 }, () => ({ x: Math.random(), y: Math.random(), v: rnd(0.8, 1.6) }));
    return { clues, rain, found: [] };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    // lluvia diagonal
    ctx.strokeStyle = 'rgba(180,200,230,0.10)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (const r of st.rain) {
      r.y += r.v * dt; r.x -= r.v * dt * 0.18;
      if (r.y > 1.05) { r.y = -0.05; r.x = Math.random() * 1.2; }
      ctx.moveTo(r.x * w, r.y * h); ctx.lineTo(r.x * w - 5, r.y * h + 16);
    }
    ctx.stroke();
    // haz de linterna (Lissajous)
    const bx = w * (0.5 + 0.38 * Math.sin(t * 0.9));
    const by = h * (0.5 + 0.3 * Math.sin(t * 1.37 + 0.7));
    const br = Math.min(w, h) * (0.16 + st.boost * 0.05);
    if (t > 1.8) radial(ctx, bx, by, br * 1.4, '255, 240, 200', 0.16);
    // pistas que aparecen bajo el haz
    for (const c of st.clues) {
      const px = c.x * w, py = c.y * h;
      if (t > 1.8 && Math.hypot(px - bx, py - by) < br) {
        if (c.order < 0) { c.order = st.found.length; st.found.push(c); st.waves.push({ r: 8, a: 0.6, lw: 1.4 }); }
      }
      if (c.order >= 0) c.seen = Math.min(1, c.seen + dt * 2.5);
      const a = 0.15 + c.seen * 0.85;
      dot(ctx, px, py, 4 + c.seen * 2, `rgba(${rgb}, ${a})`);
      if (c.seen > 0) {
        ctx.font = '600 11px ui-monospace, Menlo, monospace';
        ctx.fillStyle = `rgba(255,255,255,${c.seen * 0.75})`;
        ctx.fillText(c.label, px + 10, py - 8);
      }
    }
    // hilo rojo entre pistas
    if (st.found.length > 1) {
      glowLine(ctx, st.found.map((c) => [c.x * w, c.y * h]), '255, 60, 70', 0.75, 1.6, 10);
    }
    // lupa siguiendo el haz
    ctx.strokeStyle = `rgba(${rgb}, 0.8)`;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(bx, by, 22, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(bx + 16, by + 16); ctx.lineTo(bx + 34, by + 34); ctx.lineWidth = 4; ctx.stroke();
  },
};

const quirofano = {
  init() {
    const tools = ['bisturi', 'pinza', 'tijera', 'separador', 'portaagujas', 'kelly'];
    return { tools: tools.map((k, i) => ({ k, i, x: rnd(-0.3, 1.3), y: rnd(-0.4, -0.1), r: rnd(-2, 2) })) };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const cx = w / 2, cy = h * 0.32;
    const R = Math.min(w, h) * 0.17;
    const rot = t * 0.25;
    // lámpara de 7 focos
    const pods = [[0, 0], ...Array.from({ length: 6 }, (_, i) => [Math.cos(rot + (i / 6) * TAU) * R, Math.sin(rot + (i / 6) * TAU) * R * 0.55])];
    let litCount = 0;
    pods.forEach(([dx, dy], i) => {
      const on = ease((t - 2.4 - i * 0.42) / 0.3);
      if (on > 0) litCount += on;
      ctx.beginPath();
      ctx.arc(cx + dx, cy + dy, R * 0.32, 0, TAU);
      ctx.fillStyle = `rgba(20,24,30,0.9)`;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.18)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      if (on > 0) {
        radial(ctx, cx + dx, cy + dy, R * 0.32, '255, 252, 235', 0.95 * on);
        radial(ctx, cx + dx, cy + dy, R * 0.9, rgb, 0.18 * on);
      }
    });
    // haz combinado hacia el campo
    if (litCount > 0) {
      const g = ctx.createLinearGradient(0, cy, 0, h);
      g.addColorStop(0, `rgba(255,252,235,${0.03 * litCount})`);
      g.addColorStop(1, 'rgba(255,252,235,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.lineTo(cx + w * 0.3, h); ctx.lineTo(cx - w * 0.3, h);
      ctx.closePath(); ctx.fill();
    }
    // mesa de Mayo
    const tableY = h * 0.8;
    ctx.fillStyle = 'rgba(200,215,230,0.06)';
    ctx.fillRect(w * 0.2, tableY - 6, w * 0.6, 60);
    ctx.strokeStyle = `rgba(${rgb}, 0.35)`;
    ctx.strokeRect(w * 0.2, tableY - 6, w * 0.6, 60);
    st.tools.forEach((tool) => {
      const p = ease((t - 3.3 - tool.i * 0.55) / 0.5);
      const tx = w * (0.26 + tool.i * 0.096);
      const x = tool.x * w + (tx - tool.x * w) * p;
      const y = tool.y * h + (tableY + 26 - tool.y * h) * p;
      const r = tool.r * (1 - p);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(r);
      ctx.strokeStyle = `rgba(225,232,240,${0.35 + p * 0.6})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      if (tool.k === 'tijera' || tool.k === 'kelly' || tool.k === 'portaagujas' || tool.k === 'pinza') {
        ctx.moveTo(-4, -26); ctx.lineTo(3, 20); ctx.moveTo(4, -26); ctx.lineTo(-3, 20);
        if (tool.k !== 'pinza') { ctx.moveTo(-4, 26); ctx.arc(-4, 26, 5, 0, TAU); ctx.moveTo(9, 26); ctx.arc(4, 26, 5, 0, TAU); }
      } else if (tool.k === 'separador') {
        ctx.moveTo(0, -28); ctx.lineTo(0, 22); ctx.lineTo(10, 26);
      } else {
        ctx.moveTo(0, -28); ctx.lineTo(0, 10); ctx.moveTo(-2, 10); ctx.lineTo(3, 26);
      }
      ctx.stroke();
      ctx.restore();
      if (p > 0.98 && !tool.clacked) { tool.clacked = true; st.waves.push({ r: 6, a: 0.4, lw: 1.2 }); }
    });
  },
};

const noctua = {
  init() {
    return { stars: Array.from({ length: 120 }, () => ({ x: Math.random(), y: Math.random() * 0.7, p: Math.random() * TAU, s: rnd(0.4, 1.6) })), ecg: 0 };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    for (const s of st.stars) {
      const a = 0.25 + 0.35 * Math.sin(t * 2 + s.p);
      dot(ctx, s.x * w, s.y * h, s.s, `rgba(220,225,255,${a})`);
    }
    // luna creciente
    const mx = w * 0.8, my = h * 0.2, mr = Math.min(w, h) * 0.06;
    radial(ctx, mx, my, mr * 3, rgb, 0.18);
    dot(ctx, mx, my, mr, 'rgba(235,235,255,0.9)');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    dot(ctx, mx + mr * 0.42, my - mr * 0.18, mr * 0.92, 'rgba(0,0,0,1)');
    ctx.restore();
    // reloj de turno 20:00 → 08:00
    const prog = clamp01((t - 1.8) / 8.6);
    const mins = Math.floor(prog * 12 * 60);
    const hh = (20 + Math.floor(mins / 60)) % 24;
    const mm = mins % 60;
    ctx.font = '700 15px ui-monospace, Menlo, monospace';
    ctx.fillStyle = `rgba(${rgb}, 0.85)`;
    ctx.fillText(`TURNO ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`, w * 0.06, h * 0.12);
    // frecuencia cardiaca que acelera y se estabiliza
    const bpm = t < 6.8 ? 72 + (t / 6.8) * 66 : 138 - ease((t - 6.8) / 2.4) * 58;
    st.ecg += dt * (bpm / 60);
    const baseY = h * 0.78, amp = Math.min(54, h * 0.07);
    const pts = [];
    for (let x = 0; x <= w; x += 4) {
      const ph = ((st.ecg - (w - x) / 260) % 1 + 1) % 1;
      let y = 0;
      if (ph > 0.28 && ph < 0.31) y = ((ph - 0.28) / 0.03) * 0.2;
      else if (ph >= 0.31 && ph < 0.35) y = 0.2 - ((ph - 0.31) / 0.04) * 1.2;
      else if (ph >= 0.35 && ph < 0.39) y = -1 + ((ph - 0.35) / 0.04) * 1.2;
      else if (ph > 0.55 && ph < 0.7) y = -Math.sin(((ph - 0.55) / 0.15) * Math.PI) * 0.22;
      pts.push([x, baseY + y * amp]);
    }
    glowLine(ctx, pts, '90, 255, 140', 0.75, 2, 12);
    // pletismografía SpO2
    const pl = [];
    for (let x = 0; x <= w; x += 6) {
      const ph = st.ecg - (w - x) / 260;
      pl.push([x, baseY + 70 + Math.sin(ph * TAU) * 10 + Math.sin(ph * TAU * 2) * 4]);
    }
    glowLine(ctx, pl, '80, 200, 255', 0.5, 1.6, 8);
    ctx.font = '700 22px ui-monospace, Menlo, monospace';
    ctx.fillStyle = 'rgba(90,255,140,0.9)';
    ctx.fillText(`FC ${Math.round(bpm)}`, w - 140, baseY - 60);
    ctx.fillStyle = 'rgba(80,200,255,0.85)';
    ctx.fillText(`SpO₂ ${Math.round(97 - (bpm - 72) * 0.08)}%`, w - 160, baseY + 110);
  },
};

// ---------- RECURSOS ----------

const modelo3d = {
  init() {
    // Hígado estilizado: elipsoide asimétrico con lóbulo derecho dominante
    const lat = 12, lon = 22, verts = [];
    for (let i = 0; i <= lat; i++) {
      const th = (i / lat) * Math.PI;
      for (let j = 0; j < lon; j++) {
        const ph = (j / lon) * TAU;
        let x = Math.sin(th) * Math.cos(ph) * 1.5;
        let y = Math.cos(th) * 0.62;
        let z = Math.sin(th) * Math.sin(ph) * 0.85;
        if (x < 0) { y *= 0.6; z *= 0.7; x *= 0.85; }
        y -= x * 0.12;
        verts.push([x, y, z]);
      }
    }
    const edges = [];
    for (let i = 0; i <= lat; i++) for (let j = 0; j < lon; j++) {
      const a = i * lon + j;
      edges.push([a, i * lon + ((j + 1) % lon)]);
      if (i < lat) edges.push([a, (i + 1) * lon + j]);
    }
    edges.sort(() => Math.random() - 0.5);
    return { verts, edges };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const cx = w / 2, cy = h / 2;
    const S = Math.min(w, h) * 0.24 * (1 + st.boost * 0.12);
    const ry = t * 0.5, rx = 0.35 + Math.sin(t * 0.4) * 0.15;
    const cY = Math.cos(ry), sY = Math.sin(ry), cX = Math.cos(rx), sX = Math.sin(rx);
    const P = st.verts.map(([x, y, z]) => {
      const x1 = x * cY - z * sY, z1 = x * sY + z * cY;
      const y2 = y * cX - z1 * sX, z2 = y * sX + z1 * cX;
      const f = 3 / (3 - z2);
      return [cx + x1 * S * f, cy + y2 * S * f, z2];
    });
    const built = Math.floor(st.edges.length * ease((t - 2.2) / 5.4));
    ctx.lineWidth = 1;
    for (let k = 0; k < built; k++) {
      const [a, b] = st.edges[k];
      const pa = P[a], pb = P[b];
      const fresh = k > built - 18;
      ctx.strokeStyle = fresh ? 'rgba(255,255,255,0.95)' : `rgba(${rgb}, ${0.18 + (pa[2] + 1) * 0.22})`;
      ctx.beginPath(); ctx.moveTo(pa[0], pa[1]); ctx.lineTo(pb[0], pb[1]); ctx.stroke();
    }
    // vesícula biliar bajo el borde
    if (t > 6) {
      const a = ease((t - 6) / 0.8);
      const gx = cx + S * 0.25 * cY, gy = cy + S * 0.55;
      ctx.save();
      ctx.shadowColor = 'rgba(90,255,140,0.8)'; ctx.shadowBlur = 16;
      ctx.strokeStyle = `rgba(90,255,140,${0.8 * a})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.ellipse(gx, gy, S * 0.12, S * 0.22, 0.4, 0, TAU); ctx.stroke();
      ctx.restore();
    }
    // barrido de escáner
    const sy = cy + Math.sin(t * (1.6 + st.boost)) * S * 0.95;
    const g = ctx.createLinearGradient(0, sy - 18, 0, sy + 18);
    g.addColorStop(0, `rgba(${rgb},0)`); g.addColorStop(0.5, `rgba(${rgb},0.3)`); g.addColorStop(1, `rgba(${rgb},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(cx - S * 2, sy - 18, S * 4, 36);
    ctx.font = '600 11px ui-monospace, Menlo, monospace';
    ctx.fillStyle = `rgba(${rgb}, 0.7)`;
    ctx.fillText(`MALLA ${built}/${st.edges.length} ARISTAS · SEG. COUINAUD I–VIII`, w * 0.06, h - 40);
  },
};

const algoritmos = {
  init() {
    const nodes = [];
    const build = (depth, idx, parent) => {
      const n = { depth, idx, parent, kids: [] };
      nodes.push(n);
      if (depth < 4) for (let k = 0; k < 2; k++) n.kids.push(build(depth + 1, idx * 2 + k, n));
      return n;
    };
    const root = build(0, 0, null);
    return { nodes, root, pulses: [], nextPulse: 0 };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const top = h * 0.16, bottom = h * 0.84;
    const pos = (n) => [w * ((n.idx + 0.5) / Math.pow(2, n.depth)) * 0.84 + w * 0.08, top + (bottom - top) * (n.depth / 4)];
    const levelOn = (d) => ease((t - 2.3 - d * 0.75) / 0.5);
    for (const n of st.nodes) {
      if (!n.parent) continue;
      const on = levelOn(n.depth);
      if (on <= 0) continue;
      const [x0, y0] = pos(n.parent), [x1, y1] = pos(n);
      const ym = (y0 + y1) / 2;
      ctx.strokeStyle = `rgba(${rgb}, ${0.32 * on})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, ym); ctx.lineTo(x0 + (x1 - x0) * on, ym); ctx.lineTo(x1, ym + (y1 - ym) * on); ctx.stroke();
    }
    for (const n of st.nodes) {
      const on = levelOn(n.depth);
      if (on <= 0) continue;
      const [x, y] = pos(n);
      const s = (n.depth === 4 ? 6 : 10) * on;
      ctx.save();
      ctx.translate(x, y); ctx.rotate(Math.PI / 4);
      ctx.fillStyle = 'rgba(10,10,12,0.95)';
      ctx.strokeStyle = `rgba(${rgb}, ${0.9 * on})`;
      ctx.lineWidth = 1.6;
      ctx.fillRect(-s, -s, s * 2, s * 2); ctx.strokeRect(-s, -s, s * 2, s * 2);
      ctx.restore();
    }
    // pulsos de decisión de raíz a hoja
    st.nextPulse -= dt;
    if (t > 5.2 && st.nextPulse <= 0) {
      st.nextPulse = 0.5 / (1 + st.boost);
      const path = [st.root];
      while (path[path.length - 1].kids.length) path.push(path[path.length - 1].kids[Math.random() < 0.5 ? 0 : 1]);
      st.pulses.push({ path, p: 0 });
    }
    for (let i = st.pulses.length - 1; i >= 0; i--) {
      const pu = st.pulses[i];
      pu.p += dt * (1.4 + st.boost);
      const seg = Math.min(pu.path.length - 1, Math.floor(pu.p));
      if (pu.p >= pu.path.length - 1) { st.pulses.splice(i, 1); continue; }
      const f = pu.p - seg;
      const [x0, y0] = pos(pu.path[seg]), [x1, y1] = pos(pu.path[seg + 1]);
      const x = x0 + (x1 - x0) * f, y = y0 + (y1 - y0) * f;
      radial(ctx, x, y, 22, rgb, 0.9);
      dot(ctx, x, y, 3, 'rgba(255,255,255,1)');
    }
  },
};

const casos = {
  init() { return { folders: [], spawned: 0 }; },
  draw(ctx, w, h, t, dt, st, rgb) {
    const floor = h * 0.86;
    const total = 9;
    while (st.spawned < total && t > 2.3 + st.spawned * 0.48) {
      st.folders.push({ x: w * rnd(0.3, 0.7), y: -80, vy: 0, r: rnd(-0.6, 0.6), vr: rnd(-2, 2), rest: floor - st.spawned * 9, landed: false, id: st.spawned });
      st.spawned++;
    }
    for (const f of st.folders) {
      if (!f.landed) {
        f.vy += 1300 * dt; f.y += f.vy * dt; f.r += f.vr * dt;
        if (f.y >= f.rest) { f.y = f.rest; f.landed = true; f.r = rnd(-0.08, 0.08); st.waves.push({ r: 6, a: 0.45, lw: 1.2 }); }
      }
      ctx.save();
      ctx.translate(f.landed ? w / 2 + (f.id % 3 - 1) * 6 : f.x, f.y);
      ctx.rotate(f.r);
      const fw = Math.min(220, w * 0.34), fh = fw * 0.64;
      ctx.fillStyle = 'rgba(28,26,30,0.96)';
      ctx.strokeStyle = `rgba(${rgb}, 0.8)`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(-fw / 2, -fh / 2); ctx.lineTo(-fw / 2 + fw * 0.3, -fh / 2); ctx.lineTo(-fw / 2 + fw * 0.36, -fh / 2 - 12);
      ctx.lineTo(-fw / 2 + fw * 0.6, -fh / 2 - 12); ctx.lineTo(-fw / 2 + fw * 0.64, -fh / 2); ctx.lineTo(fw / 2, -fh / 2);
      ctx.lineTo(fw / 2, fh / 2); ctx.lineTo(-fw / 2, fh / 2); ctx.closePath();
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      for (let k = 0; k < 3; k++) ctx.fillRect(-fw / 2 + 16, -fh / 2 + 18 + k * 14, fw * (0.5 - k * 0.1), 3);
      ctx.font = '700 10px ui-monospace, Menlo, monospace';
      ctx.fillStyle = `rgba(${rgb}, 0.9)`;
      ctx.fillText(`EXP. ${String(1042 + f.id * 37)}`, -fw / 2 + 16, fh / 2 - 14);
      ctx.restore();
    }
    // sello CASO
    const sp = (t - 6.8) / 0.35;
    if (sp > 0) {
      const sc = sp < 1 ? 2.6 - 1.6 * ease(sp) : 1;
      ctx.save();
      ctx.translate(w > 700 ? w * 0.8 : w / 2, w > 700 ? h * 0.5 : h * 0.16);
      ctx.rotate(-0.18);
      ctx.scale(sc, sc);
      ctx.strokeStyle = `rgba(${rgb}, 0.95)`;
      ctx.lineWidth = 4;
      ctx.shadowColor = `rgba(${rgb}, 0.9)`; ctx.shadowBlur = 18;
      ctx.strokeRect(-88, -30, 176, 60);
      ctx.font = '900 38px ui-monospace, Menlo, monospace';
      ctx.fillStyle = `rgba(${rgb}, 0.95)`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('CASO', 0, 2);
      ctx.restore();
    }
  },
};

const guias = {
  init() {
    const words = ['GPC', 'TOKIO', 'SAGES', 'WSES', 'ATLS', 'NCCN', 'IMSS', 'SCHWARTZ', 'SABISTON', 'CENETEC', 'MAINGOT', 'ZOLLINGER'];
    return {
      pages: Array.from({ length: 30 }, (_, i) => ({ a: (i / 30) * TAU, r: rnd(0.9, 1.4), y: rnd(-1, 1), s: rnd(0.7, 1.2) })),
      glyphs: Array.from({ length: 40 }, () => ({ x: Math.random(), y: Math.random(), v: rnd(0.08, 0.25), w: words[Math.floor(rnd(0, words.length))] })),
    };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    ctx.font = '600 12px ui-monospace, Menlo, monospace';
    for (const g of st.glyphs) {
      g.y += g.v * dt * (1 + st.boost * 2);
      if (g.y > 1.05) { g.y = -0.05; g.x = Math.random(); }
      ctx.fillStyle = `rgba(${rgb}, ${0.12 + g.v * 0.6})`;
      ctx.fillText(g.w, g.x * w, g.y * h);
    }
    const cx = w / 2, cy = h / 2;
    const R = Math.min(w, h) * 0.34;
    const gather = ease((t - 5.8) / 3);
    const pages = st.pages.map((p) => {
      p.a += dt * (0.7 + st.boost * 1.8);
      const r = p.r * R * (1 - gather * 0.55);
      return { p, x: Math.cos(p.a) * r, z: Math.sin(p.a), y: p.y * R * 0.35 * (1 - gather) };
    }).sort((a, b) => a.z - b.z);
    for (const { p, x, z, y } of pages) {
      const persp = 0.7 + (z + 1) * 0.25;
      const pw = 34 * p.s * persp, ph = 46 * p.s * persp;
      ctx.save();
      ctx.translate(cx + x, cy + y + z * 18);
      ctx.rotate(Math.sin(p.a) * 0.4);
      ctx.fillStyle = `rgba(240,236,255,${0.08 + (z + 1) * 0.18})`;
      ctx.strokeStyle = `rgba(${rgb}, ${0.3 + (z + 1) * 0.3})`;
      ctx.lineWidth = 1;
      ctx.fillRect(-pw / 2, -ph / 2, pw, ph);
      ctx.strokeRect(-pw / 2, -ph / 2, pw, ph);
      ctx.fillStyle = `rgba(${rgb}, ${0.25 + (z + 1) * 0.25})`;
      for (let k = 0; k < 4; k++) ctx.fillRect(-pw / 2 + 5, -ph / 2 + 7 + k * 8 * persp, pw * 0.6, 1.5);
      ctx.restore();
    }
    // estante que se forma
    if (gather > 0.2) {
      const a = ease((gather - 0.2) / 0.8);
      for (let k = 0; k < 14; k++) {
        const bh = 60 + ((k * 37) % 40);
        const bx = cx - 7 * 22 + k * 22;
        ctx.fillStyle = `rgba(${rgb}, ${0.18 * a + (k % 3) * 0.05 * a})`;
        ctx.fillRect(bx, h * 0.84 - bh * a, 18, bh * a);
      }
      ctx.fillStyle = `rgba(255,255,255,${0.3 * a})`;
      ctx.fillRect(cx - 7 * 22 - 8, h * 0.84, 14 * 22 + 12, 2);
    }
  },
};

const escalas = {
  init() {
    return {
      gauges: [
        { name: 'ALVARADO', max: 10, val: 8 },
        { name: 'BISAP', max: 5, val: 3 },
        { name: 'qSOFA', max: 3, val: 2 },
      ],
    };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const n = st.gauges.length;
    const R = Math.min(w / (n * 2.6), h * 0.17);
    st.gauges.forEach((gg, i) => {
      const cx = w * ((i + 0.5) / n), cy = h * 0.66;
      const fill = ease((t - 2.5 - i * 0.6) / 1.8) * (gg.val / gg.max);
      const wob = t > 4 ? Math.sin(t * 9 + i) * 0.01 * (1 + st.boost) : 0;
      const a0 = Math.PI, a1 = Math.PI + Math.PI * Math.min(1, fill + wob);
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 10;
      ctx.beginPath(); ctx.arc(cx, cy, R, Math.PI, TAU); ctx.stroke();
      ctx.save();
      ctx.shadowColor = `rgba(${rgb},0.9)`; ctx.shadowBlur = 18;
      ctx.strokeStyle = `rgba(${rgb}, 0.95)`;
      ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1); ctx.stroke();
      ctx.restore();
      for (let k = 0; k <= gg.max; k++) {
        const a = Math.PI + (k / gg.max) * Math.PI;
        ctx.strokeStyle = 'rgba(255,255,255,0.35)';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * (R - 16), cy + Math.sin(a) * (R - 16)); ctx.lineTo(cx + Math.cos(a) * (R - 8), cy + Math.sin(a) * (R - 8)); ctx.stroke();
      }
      glowLine(ctx, [[cx, cy], [cx + Math.cos(a1) * (R - 14), cy + Math.sin(a1) * (R - 14)]], '255, 255, 255', 0.9, 2.4, 8);
      dot(ctx, cx, cy, 5, `rgba(${rgb},1)`);
      // dígito tipo odómetro
      const shown = Math.round(Math.min(1, fill / (gg.val / gg.max || 1)) * gg.val);
      const roll = t > 2.5 && fill < gg.val / gg.max - 0.01 ? Math.floor(t * 30) % 10 : shown;
      ctx.font = '800 30px ui-monospace, Menlo, monospace';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.fillText(String(roll), cx, cy + 40);
      ctx.font = '600 11px ui-monospace, Menlo, monospace';
      ctx.fillStyle = `rgba(${rgb}, 0.85)`;
      ctx.fillText(`${gg.name} · /${gg.max}`, cx, cy + 60);
      ctx.textAlign = 'start';
    });
    // tira de cálculo en vivo
    ctx.font = '600 12px ui-monospace, Menlo, monospace';
    ctx.fillStyle = `rgba(${rgb}, 0.45)`;
    const tape = 'MIGRACIÓN +1 · ANOREXIA +1 · NÁUSEA +1 · DOLOR FID +2 · REBOTE +1 · T>37.3 +1 · LEUCOS +2 · NEUTRÓFILOS +1 · ';
    const off = (t * 80 * (1 + st.boost)) % 900;
    ctx.fillText(tape + tape, -off, h * 0.22);
  },
};


// ---------- PORTALES DE MÓDULO ----------

const arena = {
  init() {
    return {
      hexes: Array.from({ length: 16 }, (_, i) => ({ z: (i + 1) / 16 })),
      carts: ['BLITZ', 'PASE', '¿SE OPERA?', 'DETECTIVE', 'QUIRÓFANO', 'EVOLUCIÓN'].map((label, i) => ({ label, i })),
      shards: [],
      shattered: false,
    };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const cx = w / 2, cy = h / 2;
    const burst = t > 1.65 && t < 2.5 ? 2.6 : 0;
    const speed = (0.18 + st.boost * 0.9 + burst) * dt;
    const R = Math.max(w, h) * 0.08;
    // túnel de hexágonos
    for (const hx of st.hexes) {
      hx.z -= speed;
      if (hx.z <= 0.03) hx.z = 1;
      const size = R / hx.z;
      const a = (1 - hx.z) * (t < 1.65 ? 0.25 : 0.85);
      const rot = t * 0.35 + hx.z * 1.4;
      ctx.beginPath();
      for (let k = 0; k <= 6; k++) {
        const ang = rot + (k / 6) * TAU;
        const x = cx + Math.cos(ang) * size, y = cy + Math.sin(ang) * size;
        k ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.strokeStyle = `rgba(${rgb}, ${a})`;
      ctx.lineWidth = 1 + (1 - hx.z) * 3;
      ctx.stroke();
    }
    // cartuchos de juego que entran en órbita
    const orbitR = Math.min(w, h) * 0.36;
    for (const c of st.carts) {
      const p = ease((t - 3.2 - c.i * 0.8) / 0.55);
      if (p <= 0 || t > 9.6) continue;
      const ang = t * 0.4 + (c.i / 6) * TAU;
      const r = orbitR * (2.4 - 1.4 * p);
      const x = cx + Math.cos(ang) * r, y = cy + Math.sin(ang) * r * 0.62;
      const cw = 92, ch = 30;
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = p;
      ctx.fillStyle = 'rgba(12,10,12,0.92)';
      ctx.strokeStyle = `rgba(${rgb}, 0.9)`;
      ctx.shadowColor = `rgba(${rgb}, 0.8)`;
      ctx.shadowBlur = 18;
      ctx.lineWidth = 1.5;
      ctx.fillRect(-cw / 2, -ch / 2, cw, ch);
      ctx.strokeRect(-cw / 2, -ch / 2, cw, ch);
      ctx.shadowBlur = 0;
      ctx.font = '700 10px ui-monospace, Menlo, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.fillText(c.label, 0, 1);
      ctx.restore();
    }
    // estallido final en esquirlas
    if (t > 9.5 && !st.shattered) {
      st.shattered = true;
      for (let i = 0; i < 90; i++) {
        const a = Math.random() * TAU, v = rnd(300, 1100);
        st.shards.push({ x: cx, y: cy, vx: Math.cos(a) * v, vy: Math.sin(a) * v, r: rnd(0, TAU), vr: rnd(-8, 8), s: rnd(4, 16), a: 1 });
      }
    }
    for (const sh of st.shards) {
      sh.x += sh.vx * dt; sh.y += sh.vy * dt; sh.r += sh.vr * dt; sh.a -= dt * 0.9;
      if (sh.a <= 0) continue;
      ctx.save();
      ctx.translate(sh.x, sh.y);
      ctx.rotate(sh.r);
      ctx.fillStyle = `rgba(${rgb}, ${sh.a})`;
      ctx.beginPath(); ctx.moveTo(0, -sh.s); ctx.lineTo(sh.s * 0.6, sh.s * 0.5); ctx.lineTo(-sh.s * 0.5, sh.s * 0.4); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
  },
};

const vault = {
  init() {
    return { rings: [3.0, 3.8, 4.6, 5.4].map((lock, i) => ({ lock, i, ang: rnd(0, TAU), dir: i % 2 ? -1 : 1, flash: 0, locked: false })) };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const cx = w / 2, cy = h / 2;
    const base = Math.min(w, h) * 0.13;
    const open = ease((t - 9.5) / 1.1);
    for (const r of st.rings) {
      const radius = base + r.i * base * 0.55 + open * Math.max(w, h) * (0.4 + r.i * 0.15);
      if (t < r.lock) {
        r.ang += dt * r.dir * (1.6 + r.i * 0.5) * (t < 1.65 ? 0.3 : 1);
      } else if (!r.locked) {
        r.locked = true;
        r.flash = 1;
        st.waves.push({ r: radius * 0.6, a: 0.9, lw: 2.4 });
      } else {
        r.ang += (Math.round(r.ang / (TAU / 12)) * (TAU / 12) - r.ang) * Math.min(1, dt * 12);
      }
      r.flash = Math.max(0, r.flash - dt * 1.6);
      const a = (0.35 + r.flash * 0.65) * (1 - open);
      ctx.save();
      ctx.shadowColor = `rgba(${rgb}, ${0.4 + r.flash * 0.6})`;
      ctx.shadowBlur = 10 + r.flash * 30;
      ctx.strokeStyle = r.locked ? `rgba(${rgb}, ${a + 0.2})` : `rgba(255,255,255,${a * 0.6})`;
      ctx.lineWidth = 2 + r.flash * 3;
      ctx.beginPath(); ctx.arc(cx, cy, radius, 0, TAU); ctx.stroke();
      // dientes de la cerradura
      const teeth = 12 + r.i * 6;
      for (let k = 0; k < teeth; k++) {
        const ang = r.ang + (k / teeth) * TAU;
        const len = k % 3 === 0 ? 14 : 7;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang) * radius, cy + Math.sin(ang) * radius);
        ctx.lineTo(cx + Math.cos(ang) * (radius - len), cy + Math.sin(ang) * (radius - len));
        ctx.lineWidth = k % 3 === 0 ? 3 : 1.4;
        ctx.stroke();
      }
      ctx.restore();
    }
    // pernos centrales que se retraen
    const retract = ease((t - 6.2) / 2.2);
    for (let k = 0; k < 8; k++) {
      const ang = (k / 8) * TAU + Math.PI / 8;
      const r0 = base * 0.25 + retract * base * 0.6;
      const r1 = base * 0.85 + retract * base * 0.6;
      ctx.strokeStyle = `rgba(${rgb}, ${0.8 * (1 - open)})`;
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(ang) * r0, cy + Math.sin(ang) * r0);
      ctx.lineTo(cx + Math.cos(ang) * r1, cy + Math.sin(ang) * r1);
      ctx.stroke();
    }
    if (t > 9.4) radial(ctx, cx, cy, Math.max(w, h) * (0.2 + open * 0.8), '255, 255, 255', 0.5 * (1 - open));
  },
};

const defib = {
  init() {
    return { ecg: 0, bars: Array.from({ length: 28 }, (_, i) => ({ v: 0, target: 0.25 + ((i * 37) % 60) / 100 })) };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const baseY = h * 0.74;
    const amp = Math.min(70, h * 0.09);
    if (t < 1.65) {
      // asistolia: línea plana, texto que parpadea y carga del desfibrilador
      glowLine(ctx, [[0, baseY], [w, baseY]], rgb, 0.85, 2, 14);
      if (Math.floor(t * 3) % 2 === 0) {
        ctx.font = '800 18px ui-monospace, Menlo, monospace';
        ctx.textAlign = 'center';
        ctx.fillStyle = `rgba(${rgb}, 0.95)`;
        ctx.fillText('ASISTOLIA', w / 2, baseY - 30);
        ctx.textAlign = 'start';
      }
      const charge = clamp01((t - 0.9) / 0.7);
      if (charge > 0) {
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.strokeRect(w / 2 - 110, baseY + 40, 220, 12);
        ctx.fillStyle = `rgba(${rgb}, 0.95)`;
        ctx.fillRect(w / 2 - 110, baseY + 40, 220 * charge, 12);
        ctx.font = '700 11px ui-monospace, Menlo, monospace';
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fillText(`CARGANDO ${Math.round(charge * 200)} J`, w / 2 - 110, baseY + 70);
      }
      return;
    }
    // descarga: rayos desde las palas hacia el centro
    if (t < 2.05) {
      const k = 1 - (t - 1.65) / 0.4;
      for (const side of [-1, 1]) {
        const pts = [[w / 2 + side * w * 0.45, h * 0.5]];
        for (let i = 1; i < 10; i++) pts.push([w / 2 + side * w * 0.45 * (1 - i / 10), h * 0.5 + rnd(-50, 50)]);
        pts.push([w / 2, h * 0.5]);
        glowLine(ctx, pts, '255, 255, 255', k, 2.5, 30);
      }
    }
    // el ritmo regresa y se acelera
    const bpm = Math.min(96, 54 + (t - 1.65) * 6);
    st.ecg += dt * (bpm / 60);
    const pts = [];
    for (let x = 0; x <= w; x += 4) {
      const ph = ((st.ecg - (w - x) / 280) % 1 + 1) % 1;
      let y = 0;
      if (ph > 0.28 && ph < 0.31) y = ((ph - 0.28) / 0.03) * 0.2;
      else if (ph >= 0.31 && ph < 0.35) y = 0.2 - ((ph - 0.31) / 0.04) * 1.2;
      else if (ph >= 0.35 && ph < 0.39) y = -1 + ((ph - 0.35) / 0.04) * 1.2;
      else if (ph > 0.55 && ph < 0.7) y = -Math.sin(((ph - 0.55) / 0.15) * Math.PI) * 0.22;
      pts.push([x, baseY + y * amp]);
    }
    glowLine(ctx, pts, rgb, 0.9, 2.4, 16);
    ctx.font = '800 24px ui-monospace, Menlo, monospace';
    ctx.fillStyle = `rgba(${rgb}, 0.95)`;
    ctx.fillText(`${Math.round(bpm)} LPM`, w * 0.06, baseY - amp - 20);
    // barras de progreso que suben como ecualizador
    const grow = ease((t - 2.4) / 4);
    const bw = Math.max(4, Math.min(16, (w * 0.7) / st.bars.length - 4));
    const x0 = w / 2 - (st.bars.length * (bw + 4)) / 2;
    st.bars.forEach((b, i) => {
      if (Math.random() < 0.06) b.target = 0.25 + Math.random() * (0.55 + st.boost * 0.3);
      b.v += (b.target * grow - b.v) * Math.min(1, dt * 7);
      const bh = b.v * h * 0.16;
      ctx.fillStyle = `rgba(${rgb}, ${0.25 + b.v * 0.6})`;
      ctx.fillRect(x0 + i * (bw + 4), h - 40 - bh, bw, bh);
    });
  },
};


// Resúmenes: páginas que se apilan, escáner que las lee y resaltador que subraya.
const scanner = {
  init() {
    return { pages: Array.from({ length: 7 }, (_, i) => ({ i, rot: rnd(-0.12, 0.12), lines: Array.from({ length: 11 }, () => rnd(0.45, 0.95)) })) };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const cx = w / 2, cy = h / 2;
    const pw = Math.min(w * 0.32, 260), ph = pw * 1.32;
    const open = ease((t - 9.5) / 1.1);
    st.pages.forEach((p) => {
      const land = ease((t - 1.7 - p.i * 0.32) / 0.5);
      if (land <= 0) return;
      const fan = (p.i - 3) * (0.08 + open * 0.5);
      ctx.save();
      ctx.translate(cx + (p.i - 3) * open * w * 0.12, cy + (1 - land) * -h * 0.7);
      ctx.rotate(p.rot * (1 - land * 0.6) + fan);
      ctx.globalAlpha = land * (1 - open * 0.8);
      ctx.fillStyle = 'rgba(14,6,10,0.92)';
      ctx.strokeStyle = `rgba(${rgb}, 0.55)`;
      ctx.lineWidth = 1.4;
      ctx.fillRect(-pw / 2, -ph / 2, pw, ph);
      ctx.strokeRect(-pw / 2, -ph / 2, pw, ph);
      if (p.i === 6) {
        // Hoja superior: renglones que se leen y se resaltan
        const read = clamp01((t - 3.2) / 5.6);
        p.lines.forEach((len, k) => {
          const y = -ph / 2 + 30 + k * (ph - 50) / 11;
          ctx.fillStyle = 'rgba(255,255,255,0.22)';
          ctx.fillRect(-pw / 2 + 18, y, (pw - 36) * len, 4);
          const hl = clamp01(read * 11 - k);
          if (k % 3 !== 1 && hl > 0) {
            ctx.fillStyle = `rgba(${rgb}, 0.55)`;
            ctx.fillRect(-pw / 2 + 14, y - 5, (pw - 28) * len * hl, 13);
          }
        });
      }
      ctx.restore();
    });
    // Barra del escáner que recorre la hoja
    if (t > 2.6 && t < 9.5) {
      const k = ((t - 2.6) / 1.8) % 1;
      const y = cy - ph / 2 + k * ph;
      glowLine(ctx, [[cx - pw * 0.7, y], [cx + pw * 0.7, y]], rgb, 0.9, 2.5, 26);
      radial(ctx, cx, y, pw * 0.6, rgb, 0.18);
    }
    if (t > 9.4) radial(ctx, cx, cy, Math.max(w, h) * (0.2 + open * 0.8), '255, 255, 255', 0.45 * (1 - open));
  },
};

// Repasa: red sináptica que se enciende por oleadas y tarjetas que voltean.
const synapse = {
  init() {
    const nodes = Array.from({ length: 46 }, () => ({ x: rnd(0.08, 0.92), y: rnd(0.12, 0.88), r: rnd(1.5, 3.5), fire: 0 }));
    const links = [];
    nodes.forEach((a, i) => nodes.forEach((b, j) => { if (j > i && Math.hypot(a.x - b.x, a.y - b.y) < 0.17) links.push([i, j]); }));
    return { nodes, links, pulses: [], last: 0, cards: [0, 1, 2, 3].map((i) => ({ i, flip: 0 })) };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const open = ease((t - 9.5) / 1.1);
    const live = clamp01((t - 1.65) / 1.2);
    // Disparos en ráfagas cada vez más rápidas
    const every = Math.max(0.12, 0.6 - (t - 1.65) * 0.06);
    if (t > 1.7 && t < 9.5 && t - st.last > every) {
      st.last = t;
      const n = st.nodes[(Math.random() * st.nodes.length) | 0];
      n.fire = 1;
      st.links.forEach(([a, b]) => { if (st.nodes[a] === n || st.nodes[b] === n) st.pulses.push({ a: st.nodes[a] === n ? a : b, b: st.nodes[a] === n ? b : a, k: 0 }); });
    }
    ctx.lineWidth = 1;
    st.links.forEach(([a, b]) => {
      const A = st.nodes[a], B = st.nodes[b];
      ctx.strokeStyle = `rgba(${rgb}, ${0.12 * live * (1 - open)})`;
      ctx.beginPath(); ctx.moveTo(A.x * w, A.y * h); ctx.lineTo(B.x * w, B.y * h); ctx.stroke();
    });
    st.pulses = st.pulses.filter((p) => {
      p.k += dt * 2.6;
      if (p.k >= 1) { st.nodes[p.b].fire = Math.max(st.nodes[p.b].fire, 0.7); return false; }
      const A = st.nodes[p.a], B = st.nodes[p.b];
      dot(ctx, (A.x + (B.x - A.x) * p.k) * w, (A.y + (B.y - A.y) * p.k) * h, 2.4, `rgba(255,255,255,${0.9 * (1 - open)})`);
      return true;
    });
    st.nodes.forEach((n) => {
      n.fire = Math.max(0, n.fire - dt * 1.4);
      if (n.fire > 0.05) radial(ctx, n.x * w, n.y * h, 26 * n.fire + 6, rgb, 0.5 * n.fire * (1 - open));
      dot(ctx, n.x * w + (n.x - 0.5) * open * w, n.y * h + (n.y - 0.5) * open * h, n.r + n.fire * 2, `rgba(${rgb}, ${(0.4 + n.fire * 0.6) * live * (1 - open)})`);
    });
    // Tarjetas de repaso que voltean (pregunta → respuesta)
    const cw = Math.min(150, w * 0.18), chh = cw * 0.64;
    st.cards.forEach((c) => {
      const appear = ease((t - 3.0 - c.i * 0.45) / 0.5);
      if (appear <= 0) return;
      const flip = clamp01((t - 5.2 - c.i * 0.7) / 0.45);
      const sx = Math.abs(Math.cos(flip * Math.PI)) || 0.02;
      const x = w / 2 + (c.i - 1.5) * (cw + 18);
      const y = h * 0.78 + (1 - appear) * 60;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(sx, 1);
      ctx.globalAlpha = appear * (1 - open);
      ctx.fillStyle = flip > 0.5 ? `rgba(${rgb}, 0.85)` : 'rgba(16,6,12,0.9)';
      ctx.strokeStyle = `rgba(${rgb}, 0.8)`;
      ctx.fillRect(-cw / 2, -chh / 2, cw, chh);
      ctx.strokeRect(-cw / 2, -chh / 2, cw, chh);
      ctx.font = '800 15px ui-monospace, Menlo, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = flip > 0.5 ? 'rgba(10,0,4,0.95)' : 'rgba(255,255,255,0.85)';
      ctx.fillText(flip > 0.5 ? ['SM-2', '+1 DÍA', '+3 DÍAS', '+7 DÍAS'][c.i] : '¿ ?', 0, 1);
      ctx.restore();
    });
    if (t > 9.4) radial(ctx, w / 2, h / 2, Math.max(w, h) * (0.2 + open * 0.8), '255, 255, 255', 0.45 * (1 - open));
  },
};

// HGR 72: fachada del hospital de noche, ventanas que se encienden, faro de urgencias y reloj de guardia.
const hospital = {
  init() {
    const cols = 11, rows = 7;
    return { cols, rows, win: Array.from({ length: cols * rows }, () => ({ on: 0, at: rnd(1.8, 8.5) })) };
  },
  draw(ctx, w, h, t, dt, st, rgb) {
    const open = ease((t - 9.5) / 1.1);
    const bw = Math.min(w * 0.62, 560), bh = bw * 0.6;
    const bx = w / 2 - bw / 2, by = h * 0.5 - bh / 2 + 30 + open * h * 0.5;
    ctx.globalAlpha = 1 - open;
    ctx.fillStyle = 'rgba(12,4,8,0.95)';
    ctx.strokeStyle = `rgba(${rgb}, 0.6)`;
    ctx.lineWidth = 1.5;
    ctx.fillRect(bx, by, bw, bh);
    ctx.strokeRect(bx, by, bw, bh);
    // Ventanas
    const gw = bw / st.cols, gh = (bh - 34) / st.rows;
    st.win.forEach((wd, k) => {
      if (t > wd.at) wd.on = Math.min(1, wd.on + dt * 4);
      const c = k % st.cols, r = (k / st.cols) | 0;
      const flick = wd.on > 0 && Math.random() < 0.01 ? 0.3 : 1;
      ctx.fillStyle = wd.on > 0 ? `rgba(255,${200 - r * 8},${150 - r * 10},${0.08 + wd.on * 0.32 * flick})` : 'rgba(255,255,255,0.04)';
      ctx.fillRect(bx + c * gw + gw * 0.2, by + 10 + r * gh + gh * 0.2, gw * 0.6, gh * 0.55);
    });
    // Letrero
    ctx.font = '800 16px ui-monospace, Menlo, monospace';
    ctx.textAlign = 'center';
    const sign = clamp01((t - 1.65) / 0.3) * (Math.sin(t * 20) > -0.9 ? 1 : 0.2);
    ctx.fillStyle = `rgba(${rgb}, ${sign})`;
    ctx.shadowColor = `rgba(${rgb}, 1)`;
    ctx.shadowBlur = 18 * sign;
    ctx.fillText('H G R  7 2  ·  U R G E N C I A S', w / 2, by + bh - 10);
    ctx.shadowBlur = 0;
    // Faro giratorio sobre el techo
    if (t > 1.65) {
      const a = t * 4.2;
      const lx = w / 2, ly = by - 8;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      for (const s of [0, Math.PI]) {
        const ang = a + s;
        const g = ctx.createRadialGradient(lx, ly, 0, lx, ly, Math.max(w, h) * 0.7);
        g.addColorStop(0, `rgba(${rgb}, 0.38)`);
        g.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.moveTo(lx, ly);
        ctx.arc(lx, ly, Math.max(w, h) * 0.7, ang - 0.16, ang + 0.16);
        ctx.closePath(); ctx.fill();
      }
      ctx.restore();
      dot(ctx, lx, ly, 6, `rgba(255,255,255,${0.9 * (1 - open)})`);
    }
    // Reloj de guardia 20:00 → 08:00
    const hrs = 20 + clamp01((t - 2) / 7.3) * 12;
    const hh = String(Math.floor(hrs) % 24).padStart(2, '0');
    const mm = String(Math.floor((hrs % 1) * 60)).padStart(2, '0');
    ctx.font = '800 26px ui-monospace, Menlo, monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = `rgba(${rgb}, 0.95)`;
    ctx.fillText(`${hh}:${mm}`, w * 0.06, h * 0.14);
    ctx.font = '700 11px ui-monospace, Menlo, monospace';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText('GUARDIA EN CURSO', w * 0.06, h * 0.14 + 18);
    ctx.globalAlpha = 1;
    if (t > 9.4) radial(ctx, w / 2, h / 2, Math.max(w, h) * (0.2 + open * 0.8), '255, 255, 255', 0.45 * (1 - open));
  },
};

// ---------- Registro ----------

const EMBLEMS = {
  hex: '<svg viewBox="0 0 120 120"><path d="M60 10 103 35v50L60 110 17 85V35Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M60 30 86 45v30L60 90 34 75V45Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M50 52v16l14-8Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></svg>',
  vault: '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="60" cy="60" r="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 5"/><circle cx="60" cy="60" r="10" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M60 50V28M60 70v22M50 60H28M70 60h22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
  heart: '<svg viewBox="0 0 120 120"><path d="M60 100S14 72 14 42a22 22 0 0 1 46-10 22 22 0 0 1 46 10c0 30-46 58-46 58Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M22 60h22l6-12 8 24 8-30 6 18h26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  clock: '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" stroke-width="2"/><path d="M60 24v36l22 14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M50 8h20M60 8v8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
  clipboard: '<svg viewBox="0 0 120 120"><rect x="28" y="22" width="64" height="84" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="46" y="14" width="28" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M40 54l6 6 12-12M40 78l6 6 12-12M66 56h14M66 80h14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  scalpel: '<svg viewBox="0 0 120 120"><path d="M20 100 78 42l10 10-48 52Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M78 42 100 20" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M60 20v80" stroke="currentColor" stroke-width="1" stroke-dasharray="4 6" opacity=".5"/></svg>',
  magnifier: '<svg viewBox="0 0 120 120"><circle cx="52" cy="52" r="30" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M74 74l28 28" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M40 52h24M52 40v24" stroke="currentColor" stroke-width="1.6" opacity=".7"/></svg>',
  lamp: '<svg viewBox="0 0 120 120"><circle cx="60" cy="56" r="34" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="56" r="9" fill="currentColor"/><circle cx="60" cy="34" r="6" fill="currentColor" opacity=".7"/><circle cx="79" cy="45" r="6" fill="currentColor" opacity=".7"/><circle cx="79" cy="67" r="6" fill="currentColor" opacity=".7"/><circle cx="60" cy="78" r="6" fill="currentColor" opacity=".7"/><circle cx="41" cy="67" r="6" fill="currentColor" opacity=".7"/><circle cx="41" cy="45" r="6" fill="currentColor" opacity=".7"/><path d="M60 22V6" stroke="currentColor" stroke-width="3"/></svg>',
  moon: '<svg viewBox="0 0 120 120"><path d="M78 20a42 42 0 1 0 22 62A34 34 0 1 1 78 20Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M24 64h12l5-10 6 20 6-14h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  cube: '<svg viewBox="0 0 120 120"><path d="M60 16 98 38v44L60 104 22 82V38Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M22 38 60 60l38-22M60 60v44" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 4"/></svg>',
  tree: '<svg viewBox="0 0 120 120"><path d="M60 14v26M60 40 30 66M60 40l30 26M30 66 18 92M30 66l12 26M90 66 78 92M90 66l12 26" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor"><rect x="54" y="8" width="12" height="12" transform="rotate(45 60 14)"/><circle cx="60" cy="40" r="5"/><circle cx="30" cy="66" r="5"/><circle cx="90" cy="66" r="5"/></g></svg>',
  folder: '<svg viewBox="0 0 120 120"><path d="M14 30h32l8 10h52v58H14Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><rect x="34" y="56" width="52" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2.4" transform="rotate(-8 60 68)"/></svg>',
  book: '<svg viewBox="0 0 120 120"><path d="M60 30c-14-10-30-10-44-6v68c14-4 30-4 44 6 14-10 30-10 44-6V24c-14-4-30-4-44 6Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M60 30v68" stroke="currentColor" stroke-width="1.6"/></svg>',
  gauge: '<svg viewBox="0 0 120 120"><path d="M16 80a44 44 0 0 1 88 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M60 80 86 50" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="80" r="6" fill="currentColor"/></svg>',
  notebook: '<svg viewBox="0 0 120 120"><rect x="26" y="14" width="70" height="92" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M38 36h46M38 50h46M38 64h30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M36 78h40" stroke="currentColor" stroke-width="8" stroke-linecap="round" opacity=".45"/><path d="M18 26h12M18 44h12M18 62h12M18 80h12M18 98h12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  brain: '<svg viewBox="0 0 120 120"><path d="M60 22c-8-10-28-8-30 8-14 2-18 20-8 28-8 10 0 26 12 26 2 12 18 16 26 6Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M60 22c8-10 28-8 30 8 14 2 18 20 8 28 8 10 0 26-12 26-2 12-18 16-26 6Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M60 22v68M40 46l10 8M80 46l-10 8M42 72l10-6M78 72l-10-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  hospital: '<svg viewBox="0 0 120 120"><path d="M20 104V40h80v64Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M52 18h16v14H52Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M60 52v24M48 64h24" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M50 104V88h20v16" fill="none" stroke="currentColor" stroke-width="2"/><path d="M30 50h8M82 50h8M30 84h8M82 84h8" stroke="currentColor" stroke-width="3"/></svg>',
};


function sceneCopy(o) {
  return {
    phaseKicker: 'SISTEMA // CAMBIO DE SUBSECCIÓN',
    ...o,
  };
}

export const SCENES = {
  'modulo:resumenes': {
    rgb: '255, 45, 70', render: scanner, emblem: EMBLEMS.notebook, opening: 'shutters', wing: 'resumenes', module: true,
    copy: sceneCopy({
      badge: 'ALA 01 // ARCHIVO DE RESÚMENES', titleHtml: 'RESÚMENES <em>Editoriales</em>', titlePlain: 'RESÚMENES Editoriales',
      pills: ['TEMARIO R1–R4', 'SUBTEMAS', 'PERLAS', 'CUADERNO', 'ATLAS'],
      logs: ['> ORDENANDO TEMAS R1–R4...', '> SEPARANDO POR SUBTEMA', '> ARCHIVO DESCLASIFICADO'],
      countdowns: ['PÁG 1', 'PÁG 2', 'PÁG 3', 'LEER'],
    }),
  },
  'modulo:repasa': {
    rgb: '255, 45, 70', render: synapse, emblem: EMBLEMS.brain, opening: 'iris', wing: 'repasa', module: true,
    copy: sceneCopy({
      badge: 'ALA 02 // CORTEZA DE REPASO SM-2', titleHtml: 'REPASA <em>y Retén</em>', titlePlain: 'REPASA y Retén',
      pills: ['TARJETAS', 'REPASO ESPACIADO', 'PENDIENTES HOY', 'MEMORIA LARGA'],
      logs: ['> SINAPSIS DORMIDAS DETECTADAS', '> REACTIVANDO RECUERDOS...', '> CURVA DEL OLVIDO NEUTRALIZADA'],
      countdowns: ['¿ ?', '+1 DÍA', '+7 DÍAS', 'RETENIDO'],
    }),
  },
  'modulo:hgr72': {
    rgb: '255, 45, 70', render: hospital, emblem: EMBLEMS.hospital, opening: 'doors', wing: 'hgr72', module: true,
    copy: sceneCopy({
      badge: 'GUARDIA // HGR 72 · URGENCIAS', titleHtml: 'HGR 72 <em>en Guardia</em>', titlePlain: 'HGR 72 en Guardia',
      pills: ['ROTACIONES', 'R2 ACTUAL', 'R3 PRÓXIMO', 'TRIMESTRES', 'GUARDIAS'],
      logs: ['> 20:00 · ENTREGA DE GUARDIA', '> FARO DE URGENCIAS ENCENDIDO', '> 08:00 · GUARDIA ENTREGADA'],
      countdowns: ['20:00', '00:00', '04:00', '08:00'],
    }),
  },
  'modulo:juegos': {
    rgb: '255, 45, 70', render: arena, emblem: EMBLEMS.hex, opening: 'doors', wing: 'juegos', module: true,
    copy: sceneCopy({
      badge: 'ALA 03 // ARENA QUIRÚRGICA', titleHtml: 'ARCADE <em>Quirúrgico</em>', titlePlain: 'ARCADE Quirúrgico',
      pills: ['BLITZ 45S', 'PASE DE VISITA', '¿SE OPERA?', 'DETECTIVE DX', 'QUIRÓFANO', 'EVOLUCIÓN'],
      logs: ['> 6 SIMULADORES EN LÍNEA', '> TU RACHA TE ESTÁ ESPERANDO', '> ARENA ABIERTA'],
      countdowns: ['3', '2', '1', '¡A JUGAR!'],
    }),
  },
  'modulo:recursos': {
    rgb: '255, 45, 70', render: vault, emblem: EMBLEMS.vault, opening: 'iris', wing: 'recursos', module: true,
    copy: sceneCopy({
      badge: 'ALA 04 // BÓVEDA ANATÓMICA Y CLÍNICA', titleHtml: 'BÓVEDA <em>de Recursos</em>', titlePlain: 'BÓVEDA de Recursos',
      pills: ['MODELOS 3D', 'ALGORITMOS', 'CASOS CLÍNICOS', 'GUÍAS', '14 ESCALAS'],
      logs: ['> CERRADURA 1 DE 4 · GIRANDO', '> COMBINACIÓN ACEPTADA', '> PERNOS LIBERADOS'],
      countdowns: ['CLIC', 'CLAC', 'CLONK', 'ABIERTA'],
    }),
  },
  'modulo:stats': {
    rgb: '255, 45, 70', render: defib, emblem: EMBLEMS.heart, opening: 'lift', wing: 'stats', module: true,
    copy: sceneCopy({
      badge: 'ALA 05 // MONITOR DE RENDIMIENTO PUEM', titleHtml: 'TELEMETRÍA <em>y Progreso</em>', titlePlain: 'TELEMETRÍA y Progreso',
      pills: ['TIEMPO ACTIVO', 'ARCADE', 'CONSTANCIA 12 SEM', '11 BLOQUES PUEM'],
      logs: ['> SIN PULSO DETECTADO', '> DESCARGA 200 J', '> RITMO SINUSAL RECUPERADO'],
      countdowns: ['54 LPM', '72 LPM', '88 LPM', 'EN LÍNEA'],
    }),
  },
  'juegos:blitz': {
    rgb: '255, 176, 32', render: blitz, emblem: EMBLEMS.clock, opening: 'doors', wing: 'juegos',
    copy: sceneCopy({
      badge: 'ARCADE 01 // BLITZ 45S', phase1: 'SINCRONIZANDO CRONÓMETRO...', phase2Kicker: 'CONTRARRELOJ // RACHA ×4', phase2: '45 SEGUNDOS. SIN PIEDAD.',
      titleHtml: 'BLITZ <em>45s</em>', titlePlain: 'BLITZ 45s',
      pills: ['CONTRARRELOJ', 'RACHA MULTIPLICADORA', 'REACTIVOS PUEM', 'SIN PAUSA'],
      logs: ['> CARGANDO BANCO DE REACTIVOS PUEM...', '> CALIBRANDO RELOJ · 45.000 s', '> MULTIPLICADOR DE RACHA ARMADO'],
      countdowns: ['03', '02', '01', '¡YA!'],
    }),
  },
  'juegos:pase': {
    rgb: '110, 200, 255', render: pase, emblem: EMBLEMS.clipboard, opening: 'shutters', wing: 'juegos',
    copy: sceneCopy({
      badge: 'ARCADE 02 // PASE DE VISITA', phase1: 'ENCENDIENDO EL PASILLO...', phase2Kicker: 'MODO ADSCRITO // 07:00 H', phase2: 'EL R1 YA TE ESTÁ ESPERANDO',
      titleHtml: 'PASE <em>de Visita</em>', titlePlain: 'PASE de Visita',
      pills: ['CAMA 12', 'CAMA 14', 'CAMA 21', 'CORRIGE EL PLAN'],
      logs: ['> NOTAS DE EVOLUCIÓN SINCRONIZADAS', '> REVISANDO INDICACIONES DEL R1...', '> 3 PLANES CON ERRORES DETECTADOS'],
      countdowns: ['CAMA 12', 'CAMA 14', 'CAMA 21', 'PASE INICIADO'],
    }),
  },
  'juegos:lapblanca': {
    rgb: '255, 64, 84', render: lapblanca, emblem: EMBLEMS.scalpel, opening: 'incision', wing: 'juegos',
    copy: sceneCopy({
      badge: 'ARCADE 03 // ¿SE OPERA O NO?', phase1: 'PREPARANDO CAMPO ESTÉRIL...', phase2Kicker: 'URGENCIAS // DECISIÓN QUIRÚRGICA', phase2: 'CADA INCISIÓN DEBE JUSTIFICARSE',
      titleHtml: '¿SE OPERA <em>o no?</em>', titlePlain: '¿SE OPERA o no?',
      pills: ['ABDOMEN AGUDO', 'CRITERIO', 'EVITA LA BLANCA', 'SÍ / NO'],
      logs: ['> PACIENTE EN SALA DE CHOQUE', '> REVISANDO LABS E IMAGEN...', '> QUIRÓFANO 3 EN ESPERA DE TU DECISIÓN'],
      countdowns: ['SÍ', 'NO', '¿SÍ?', 'DECIDE'],
    }),
  },
  'juegos:detective': {
    rgb: '255, 210, 120', render: detective, emblem: EMBLEMS.magnifier, opening: 'iris', wing: 'juegos',
    copy: sceneCopy({
      badge: 'ARCADE 04 // DETECTIVE DX', phase1: 'APAGANDO LAS LUCES...', phase2Kicker: 'GUARDIA NOCTURNA // CASO ABIERTO', phase2: 'SIGUE LAS PISTAS',
      titleHtml: 'DETECTIVE <em>Dx</em>', titlePlain: 'DETECTIVE Dx',
      pills: ['PISTA 1', 'PISTA 2', 'PISTA 3', 'DIAGNÓSTICO'],
      logs: ['> EXPEDIENTE INCOMPLETO RECIBIDO', '> PISTAS PROGRESIVAS DESBLOQUEADAS', '> UN SOLO DIAGNÓSTICO ES CORRECTO'],
      countdowns: ['PISTA', 'PISTA', 'PISTA', 'CASO ABIERTO'],
    }),
  },
  'juegos:quirofano': {
    rgb: '90, 255, 210', render: quirofano, emblem: EMBLEMS.lamp, opening: 'lift', wing: 'juegos',
    copy: sceneCopy({
      badge: 'ARCADE 05 // QUIRÓFANO PASO A PASO', phase1: 'ENCENDIENDO LÁMPARA CIALÍTICA...', phase2Kicker: 'SALA 3 // TIEMPO FUERA', phase2: 'INSTRUMENTAL EN LA MESA DE MAYO',
      titleHtml: 'QUIRÓFANO <em>Paso a Paso</em>', titlePlain: 'QUIRÓFANO Paso a Paso',
      pills: ['ABORDAJE', 'DISECCIÓN', 'VARIANTES', 'CIERRE'],
      logs: ['> CHECKLIST OMS · TIEMPO FUERA COMPLETO', '> INSTRUMENTAL CONTADO · 6/6', '> ORDENA LOS TIEMPOS QUIRÚRGICOS'],
      countdowns: ['BISTURÍ', 'PINZA', 'TIJERA', 'INCIDE'],
    }),
  },
  'juegos:noctua': {
    rgb: '150, 140, 255', render: noctua, emblem: EMBLEMS.moon, opening: 'iris', wing: 'juegos',
    copy: sceneCopy({
      badge: 'ARCADE 06 // PACIENTE EN EVOLUCIÓN', phase1: 'INICIANDO TURNO NOCTURNO...', phase2Kicker: 'NOCTUA // 20:00 → 08:00', phase2: 'EL PACIENTE CAMBIA CADA HORA',
      titleHtml: 'PACIENTE <em>en Evolución</em>', titlePlain: 'PACIENTE en Evolución',
      pills: ['20:00', '00:00', '04:00', '08:00'],
      logs: ['> MONITOR CONECTADO · RITMO SINUSAL', '> TAQUICARDIA EN ASCENSO...', '> TÚ DECIDES TURNO A TURNO'],
      countdowns: ['FC 110', 'FC 126', 'FC 138', 'ESTABILIZA'],
    }),
  },
  'recursos:3d': {
    rgb: '62, 224, 255', render: modelo3d, emblem: EMBLEMS.cube, opening: 'shutters', wing: 'recursos',
    copy: sceneCopy({
      badge: 'BÓVEDA 01 // MODELOS 3D Y TIEMPOS QX', phase1: 'ESCANEANDO ANATOMÍA...', phase2Kicker: 'ATLAS // RECONSTRUCCIÓN DE MALLA', phase2: 'ARMANDO EL MODELO VÉRTICE A VÉRTICE',
      titleHtml: 'MODELOS <em>3D</em>', titlePlain: 'MODELOS 3D',
      pills: ['HÍGADO', 'VESÍCULA', 'TRIÁNGULO DE CALOT', 'VARIANTES'],
      logs: ['> TOMOGRAFÍA CARGADA · 512 CORTES', '> RECONSTRUYENDO MALLA...', '> SEGMENTOS DE COUINAUD ETIQUETADOS'],
      countdowns: ['25%', '60%', '95%', 'MODELO LISTO'],
    }),
  },
  'recursos:algoritmos': {
    rgb: '245, 200, 75', render: algoritmos, emblem: EMBLEMS.tree, opening: 'lift', wing: 'recursos',
    copy: sceneCopy({
      badge: 'BÓVEDA 02 // ALGORITMOS Y TABLAS', phase1: 'TRAZANDO RAMAS DE DECISIÓN...', phase2Kicker: 'FLUJO // NODO RAÍZ ACTIVO', phase2: 'CADA RAMA ES UNA CONDUCTA',
      titleHtml: 'ALGORITMOS <em>y Tablas</em>', titlePlain: 'ALGORITMOS y Tablas',
      pills: ['NODO RAÍZ', 'SÍ', 'NO', 'CONDUCTA'],
      logs: ['> CARGANDO ÁRBOLES DE DECISIÓN', '> PROPAGANDO CRITERIOS...', '> TABLAS OFICIALES VERIFICADAS'],
      countdowns: ['NIVEL 1', 'NIVEL 2', 'NIVEL 3', 'CONDUCTA'],
    }),
  },
  'recursos:casos': {
    rgb: '255, 95, 174', render: casos, emblem: EMBLEMS.folder, opening: 'doors', wing: 'recursos',
    copy: sceneCopy({
      badge: 'BÓVEDA 03 // CASOS CLÍNICOS', phase1: 'ABRIENDO ARCHIVO CLÍNICO...', phase2Kicker: 'ARCHIVO // EXPEDIENTES ENTRANTES', phase2: 'CASOS REALES DE PISO',
      titleHtml: 'CASOS <em>Clínicos</em>', titlePlain: 'CASOS Clínicos',
      pills: ['EXPEDIENTE', 'HISTORIA', 'ESTUDIOS', 'RESOLUCIÓN'],
      logs: ['> EXPEDIENTES RECIBIDOS DEL ARCHIVO', '> ORDENANDO POR MÓDULO PUEM...', '> CASOS SELLADOS Y LISTOS'],
      countdowns: ['EXP. 1', 'EXP. 2', 'EXP. 3', 'SELLADO'],
    }),
  },
  'recursos:guias': {
    rgb: '160, 120, 255', render: guias, emblem: EMBLEMS.book, opening: 'iris', wing: 'recursos',
    copy: sceneCopy({
      badge: 'BÓVEDA 04 // GUÍAS Y 157 TEXTOS', phase1: 'HOJEANDO LA BIBLIOTECA...', phase2Kicker: 'BIBLIOTECA // GPC Y CONSENSOS', phase2: '157 TEXTOS EN ÓRBITA',
      titleHtml: 'GUÍAS <em>y Textos</em>', titlePlain: 'GUÍAS y Textos',
      pills: ['GPC', 'CONSENSOS', 'ARTÍCULOS', 'PDF'],
      logs: ['> INDEXANDO GPC Y CONSENSOS', '> ORDENANDO 157 TEXTOS...', '> ESTANTE LISTO'],
      countdowns: ['GPC', 'TOKIO', 'WSES', 'ESTANTE LISTO'],
    }),
  },
  'recursos:escalas': {
    rgb: '61, 255, 138', render: escalas, emblem: EMBLEMS.gauge, opening: 'shutters', wing: 'recursos',
    copy: sceneCopy({
      badge: 'BÓVEDA 05 // 14 CALCULADORAS', phase1: 'CALIBRANDO MEDIDORES...', phase2Kicker: 'SCORES // CÁLCULO EN VIVO', phase2: 'ALVARADO · BISAP · qSOFA',
      titleHtml: '14 <em>Escalas</em>', titlePlain: '14 Escalas',
      pills: ['ALVARADO', 'BISAP', 'qSOFA', 'PARKLAND'],
      logs: ['> CARGANDO 14 CALCULADORAS', '> SUMANDO PUNTAJES...', '> RIESGO ESTRATIFICADO'],
      countdowns: ['8/10', '3/5', '2/3', 'CALCULADO'],
    }),
  },
};

export function sceneFor(key) {
  return SCENES[key] || null;
}

export { drawWaves };
