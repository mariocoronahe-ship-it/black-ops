// "Red de sinapsis": a rotating 3D sphere of neurons linked to their neighbours,
// with crimson & silver impulses of light travelling along the links. Canvas 2D, no deps.
export function createSynapse(canvas, opts = {}) {
  const ctx = canvas.getContext('2d');
  const reduced = !!opts.reduced;
  const N = opts.count || 150;
  const getColor = opts.color || (() => '#ff1736');
  let W = 0; let H = 0; let dpr = 1; let raf = 0; let running = false;
  let fade = 1; // 0..1 driven by scroll
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

  const nodes = [];
  for (let i = 0; i < N; i++) {
    const k = i + 0.5; const phi = Math.acos(1 - (2 * k) / N); const th = Math.PI * (1 + Math.sqrt(5)) * k;
    const r = 1 + (Math.random() - 0.5) * 0.18;
    nodes.push({ p: [r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th)], ph: Math.random() * 6.28 });
  }
  const edges = []; const seen = new Set();
  nodes.forEach((a, i) => {
    nodes.map((b, j) => ({ j, d: (a.p[0] - b.p[0]) ** 2 + (a.p[1] - b.p[1]) ** 2 + (a.p[2] - b.p[2]) ** 2 }))
      .filter((x) => x.j !== i).sort((x, y) => x.d - y.d).slice(0, 3)
      .forEach(({ j }) => { const key = i < j ? `${i}-${j}` : `${j}-${i}`; if (!seen.has(key)) { seen.add(key); edges.push([i, j]); } });
  });
  const pulses = [];
  const spawn = (n = 1) => { for (let i = 0; i < n; i++) pulses.push({ e: Math.floor(Math.random() * edges.length), t: 0, v: 0.7 + Math.random() * 1.1, dir: Math.random() < 0.5 }); };
  spawn(14);

  const resize = () => {
    const r = canvas.getBoundingClientRect(); dpr = Math.min(2, devicePixelRatio || 1);
    W = r.width; H = r.height; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  };
  let last = performance.now();
  const frame = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now; const t = now / 1000;
    mouse.x += (mouse.tx - mouse.x) * 0.05; mouse.y += (mouse.ty - mouse.y) * 0.05;
    const col = getColor();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    const R = Math.min(W, H) * 0.4 * (0.85 + 0.15 * fade);
    const a = (reduced ? 0.6 : t * 0.22) + mouse.x * 0.7; const b = 0.35 + mouse.y * 0.45;
    const ca = Math.cos(a); const sa = Math.sin(a); const cb = Math.cos(b); const sb = Math.sin(b);
    const proj = nodes.map((n) => {
      const [x, y, z] = n.p; const x1 = x * ca - z * sa; const z1 = x * sa + z * ca; const y1 = y * cb - z1 * sb; const z2 = y * sb + z1 * cb;
      const f = 2.8 / (2.8 + z2); return [W / 2 + x1 * R * f, H / 2 + y1 * R * f, z2];
    });
    ctx.globalAlpha = fade;
    ctx.lineWidth = 1.05;
    for (const [i, j] of edges) {
      const p = proj[i]; const q = proj[j]; const depth = (2 - (p[2] + q[2]) / 2) / 3;
      ctx.strokeStyle = `rgba(235, 28, 58, ${0.06 + depth * 0.19})`;
      ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); ctx.stroke();
    }
    ctx.globalCompositeOperation = 'lighter';
    nodes.forEach((n, i) => {
      const p = proj[i]; const depth = (1.2 - p[2]) / 2.2; const s = 1.1 + depth * 2.2;
      ctx.fillStyle = col; ctx.globalAlpha = fade * (0.3 + depth * 0.65) * (0.75 + 0.25 * Math.sin(t * 1.8 + n.ph));
      ctx.beginPath(); ctx.arc(p[0], p[1], s, 0, 6.283); ctx.fill();
    });
    if (!reduced) {
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pu = pulses[k]; pu.t += dt * pu.v;
        if (pu.t >= 1) { pulses.splice(k, 1); continue; }
        const [i, j] = edges[pu.e]; const p = proj[pu.dir ? i : j]; const q = proj[pu.dir ? j : i];
        const x = p[0] + (q[0] - p[0]) * pu.t; const y = p[1] + (q[1] - p[1]) * pu.t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 10); g.addColorStop(0, '#ffffff'); g.addColorStop(0.35, col); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.globalAlpha = fade * Math.sin(pu.t * Math.PI); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 10, 0, 6.283); ctx.fill();
      }
      if (pulses.length < 18 && Math.random() < 0.3) spawn(1);
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    if (running) raf = requestAnimationFrame(frame);
  };
  const start = () => { if (running || reduced) return; running = true; last = performance.now(); raf = requestAnimationFrame(frame); };
  const stop = () => { running = false; cancelAnimationFrame(raf); };
  const onMove = (e) => { mouse.tx = (e.clientX / innerWidth - 0.5) * 2; mouse.ty = (e.clientY / innerHeight - 0.5) * 2; };
  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) start(); else stop(); });
  const ro = new ResizeObserver(() => { resize(); if (!running) frame(performance.now()); });
  resize(); ro.observe(canvas); io.observe(canvas);
  if (reduced) frame(performance.now());
  window.addEventListener('pointermove', onMove, { passive: true });

  return {
    burst(n = 28) { spawn(n); },
    setFade(v) { fade = Math.max(0.15, Math.min(1, v)); },
    destroy() { stop(); io.disconnect(); ro.disconnect(); window.removeEventListener('pointermove', onMove); },
  };
}

// Fondo animado OLED de partículas y red neuronal interactiva (full-viewport, pointer-events: none)
export function createNeuralField(canvas, opts = {}) {
  if (!canvas) return { destroy() {} };
  const ctx = canvas.getContext('2d');
  const reduced = !!opts.reduced;

  let W = 0; let H = 0; let dpr = 1; let raf = 0; let running = false;
  let particles = [];
  const impulses = [];
  const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

  const targetCount = () => {
    const area = Math.max(1, W * H);
    const est = Math.round(area / 23000);
    return Math.max(30, Math.min(82, est));
  };

  const buildParticles = () => {
    const count = targetCount();
    particles = Array.from({ length: count }, (_, i) => {
      const z = 0.35 + Math.random() * 0.65;
      const spd = (0.12 + z * 0.22);
      const ang = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        z,
        r: 1.0 + z * 1.7,
        ph: i * 0.61 + Math.random() * 3,
        glow: 0,
        silver: i % 5 === 0,
      };
    });
  };

  const resize = () => {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth || 1280;
    H = window.innerHeight || 800;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    if (!particles.length || Math.abs(particles.length - targetCount()) > 14) {
      buildParticles();
    } else {
      for (const p of particles) {
        if (p.x > W) p.x = Math.random() * W;
        if (p.y > H) p.y = Math.random() * H;
      }
    }
  };

  const spawnImpulse = (links) => {
    if (!links.length) return;
    const [i, j] = links[Math.floor(Math.random() * links.length)];
    const forward = Math.random() < 0.5;
    impulses.push({
      a: forward ? i : j,
      b: forward ? j : i,
      t: 0,
      v: 0.65 + Math.random() * 0.85,
    });
  };

  let last = performance.now();
  const frame = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const t = now / 1000;
    const isLight = document.documentElement.dataset.theme === 'light';

    if (mouse.active) {
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const maxDist = W < 640 ? 118 : 152;
    const maxDist2 = maxDist * maxDist;
    const mouseR = 165;
    const mouseR2 = mouseR * mouseR;

    // 1. Actualizar deriva de neuronas
    if (!reduced) {
      for (const p of particles) {
        p.x += p.vx * (dt * 60 * 0.48);
        p.y += p.vy * (dt * 60 * 0.48);
        p.vx += Math.sin(t * 0.45 + p.ph) * 0.0022;
        p.vy += Math.cos(t * 0.38 + p.ph) * 0.0022;

        // Límite suave de velocidad para mantener flujo orgánico
        const mag = Math.hypot(p.vx, p.vy) || 1;
        const maxSpd = 0.25 + p.z * 0.28;
        if (mag > maxSpd) { p.vx = (p.vx / mag) * maxSpd; p.vy = (p.vy / mag) * maxSpd; }

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > 36 && d2 < mouseR2) {
            const pull = (1 - Math.sqrt(d2) / mouseR) * 0.018 * p.z;
            p.x += dx * pull;
            p.y += dy * pull;
          }
        }

        if (p.x < -20) p.x = W + 18;
        else if (p.x > W + 20) p.x = -18;
        if (p.y < -20) p.y = H + 18;
        else if (p.y > H + 20) p.y = -18;
        p.glow = Math.max(0, p.glow - dt * 1.4);
      }
    }

    // 2. Enlaces sinápticos entre neuronas vecinas
    const links = [];
    ctx.lineWidth = 0.85;
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < maxDist2) {
          const near = 1 - Math.sqrt(d2) / maxDist;
          const depth = (a.z + b.z) * 0.5;
          const alpha = near * near * depth * (isLight ? 0.25 : 0.42);
          ctx.strokeStyle = (a.silver && b.silver)
            ? (isLight ? `rgba(80, 62, 66, ${alpha * 0.75})` : `rgba(215, 222, 238, ${alpha * 0.62})`)
            : (isLight ? `rgba(176, 16, 40, ${alpha})` : `rgba(255, 45, 70, ${alpha})`);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          if (near > 0.22) links.push([i, j]);
        }
      }

      // Enlaces suaves hacia el puntero
      if (mouse.active) {
        const mdx = mouse.x - a.x;
        const mdy = mouse.y - a.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < mouseR2) {
          const mNear = 1 - Math.sqrt(md2) / mouseR;
          ctx.strokeStyle = isLight
            ? `rgba(176, 16, 40, ${mNear * 0.24})`
            : `rgba(255, 80, 105, ${mNear * 0.28})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    // 3. Pulsos eléctricos viajando por axones
    if (!reduced) {
      if (impulses.length < 14 && links.length && Math.random() < 0.25) spawnImpulse(links);
      if (!isLight) ctx.globalCompositeOperation = 'lighter';
      for (let k = impulses.length - 1; k >= 0; k--) {
        const pu = impulses[k];
        pu.t += dt * pu.v;
        const pa = particles[pu.a];
        const pb = particles[pu.b];
        if (!pa || !pb || pu.t >= 1) {
          if (pb) pb.glow = 1;
          impulses.splice(k, 1);
          continue;
        }
        const x = pa.x + (pb.x - pa.x) * pu.t;
        const y = pa.y + (pb.y - pa.y) * pu.t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 8.5);
        g.addColorStop(0, isLight ? 'rgba(176, 16, 40, 0.9)' : 'rgba(255, 255, 255, 0.95)');
        g.addColorStop(0.35, isLight ? 'rgba(255, 45, 70, 0.45)' : 'rgba(255, 45, 70, 0.68)');
        g.addColorStop(1, 'rgba(255, 45, 70, 0)');
        ctx.globalAlpha = Math.sin(pu.t * Math.PI);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 8.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 4. Nodos neuronales / partículas con halo
    ctx.globalAlpha = 1;
    for (const p of particles) {
      const tw = 0.65 + 0.35 * Math.sin(t * 1.9 + p.ph);
      const rad = p.r + p.glow * 1.6;
      const halo = rad * (3.2 + p.glow * 2.2);
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, halo);
      if (p.silver) {
        grad.addColorStop(0, isLight ? `rgba(70, 56, 60, ${0.42 * p.z})` : `rgba(240, 242, 248, ${(0.55 + p.glow * 0.35) * p.z})`);
        grad.addColorStop(1, 'rgba(240, 242, 248, 0)');
      } else {
        grad.addColorStop(0, isLight ? `rgba(176, 16, 40, ${0.48 * p.z})` : `rgba(255, 45, 70, ${(0.62 + p.glow * 0.38) * p.z})`);
        grad.addColorStop(1, 'rgba(255, 45, 70, 0)');
      }
      ctx.globalAlpha = tw;
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, halo, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = p.silver
        ? (isLight ? 'rgba(42, 34, 36, 0.55)' : 'rgba(245, 247, 255, 0.85)')
        : (isLight ? 'rgba(176, 16, 40, 0.68)' : 'rgba(255, 110, 128, 0.92)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad * 0.72, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    if (running) raf = requestAnimationFrame(frame);
  };

  const start = () => {
    if (running || reduced || document.hidden) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  const onMove = (e) => {
    mouse.tx = e.clientX;
    mouse.ty = e.clientY;
    if (!mouse.active) { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; }
  };
  const onLeave = () => { mouse.active = false; };
  const onVis = () => { if (document.hidden) stop(); else start(); };

  resize();
  frame(performance.now());
  start();

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave, { passive: true });
  document.addEventListener('visibilitychange', onVis);

  return {
    destroy() {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    },
  };
}
