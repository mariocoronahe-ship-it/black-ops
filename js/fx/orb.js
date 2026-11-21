// CALOT·IA — Compañero Holográfico Dinámico (Orbe superior derecho y dock móvil)
// Diseño nítido en OLED #000000: visor espacial obsidiana, aro dual carmesí/dorado giratorio,
// ojos luminosos que siguen al cursor, parpadeo natural y ondas de voz activas.

export function createOrb(canvas, opts = {}) {
  const ctx = canvas.getContext('2d');
  const reduced = !!opts.reduced;
  let W = 0; let H = 0; let dpr = 1; let raf = 0; let running = false;
  let t = 0; let speed = 1; let targetSpeed = 1;
  let pulse = 0; let blink = 0; let nextBlink = 2.4 + Math.random() * 2.5;
  let hover = false; let menuOpen = false; let thinking = false;
  let lookX = 0; let lookY = 0; let targetX = 0; let targetY = 0;
  let lastMoveAt = performance.now();
  let last = performance.now();

  const size = () => {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(46, r.width || 54);
    H = Math.max(46, r.height || 54);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
  };

  const draw = () => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) * 0.46;

    ctx.save();
    ctx.translate(cx, cy);

    // 1. Fondo profundo OLED puro con sutil profundidad esférica
    const base = ctx.createRadialGradient(-R * 0.25, -R * 0.3, R * 0.05, 0, 0, R);
    base.addColorStop(0, hover || menuOpen ? '#1c050c' : '#0b0408');
    base.addColorStop(0.65, '#030204');
    base.addColorStop(1, '#000000');
    ctx.fillStyle = base;
    ctx.beginPath();
    ctx.arc(0, 0, R, 0, Math.PI * 2);
    ctx.fill();

    // 2. Onda expansiva limpia al pulsar
    if (pulse > 0.02) {
      ctx.beginPath();
      ctx.arc(0, 0, R * (0.42 + (1 - pulse) * 0.56), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 209, 102, ${pulse * 0.85})`;
      ctx.lineWidth = 1.6;
      ctx.stroke();
    }

    // 3. Dos arcos orbitales nítidos (carmesí + dorado champagne) girando en oposición
    for (let i = 0; i < 2; i++) {
      const a0 = t * (i === 0 ? 1.8 : -1.35) + i * Math.PI;
      const len = Math.PI * (i === 0 ? 1.15 : 0.78);
      ctx.beginPath();
      ctx.arc(0, 0, R * (i === 0 ? 0.88 : 0.77), a0, a0 + len);
      ctx.strokeStyle = i === 0 ? '#ff2d46' : '#ffd166';
      ctx.lineWidth = i === 0 ? 1.8 : 1.3;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    // Satélite luminoso siguiendo el arco dorado
    const satA = -t * 1.35 + Math.PI;
    ctx.fillStyle = '#ffd166';
    ctx.beginPath();
    ctx.arc(Math.cos(satA) * R * 0.77, Math.sin(satA) * R * 0.77, 1.9, 0, Math.PI * 2);
    ctx.fill();

    // 4. Cápsula visor oscura central (alta nitidez)
    const gx = lookX * R * 0.16;
    const gy = lookY * R * 0.12 + Math.sin(t * 2.1) * R * 0.02;
    const vw = R * 1.06;
    const vh = R * 0.62;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.82)';
    ctx.strokeStyle = hover || menuOpen ? 'rgba(255, 209, 102, 0.55)' : 'rgba(255, 45, 70, 0.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(-vw / 2 + gx * 0.35, -vh / 2 + gy * 0.35, vw, vh, vh * 0.5);
    } else {
      ctx.ellipse(gx * 0.35, gy * 0.35, vw * 0.5, vh * 0.5, 0, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.stroke();

    // 5. Ojos ópticos luminosos que siguen al cursor
    const eyeSep = R * 0.24;
    const eyeY = gy - (menuOpen ? R * 0.05 : 0);
    const blinkScale = blink > 0 ? Math.max(0.14, 1 - Math.sin(blink * Math.PI)) : 1;

    if (hover && !menuOpen) {
      // Mirada feliz (^ ^)
      ctx.strokeStyle = '#ffd166';
      ctx.lineWidth = 2.1;
      ctx.lineCap = 'round';
      for (const dir of [-1, 1]) {
        const ex = dir * eyeSep + gx;
        ctx.beginPath();
        ctx.arc(ex, eyeY + R * 0.06, R * 0.11, Math.PI * 1.15, Math.PI * 1.85);
        ctx.stroke();
      }
    } else {
      for (const dir of [-1, 1]) {
        const ex = dir * eyeSep + gx;
        const ew = R * 0.13;
        const eh = Math.max(1.5, R * 0.22 * blinkScale);

        ctx.save();
        ctx.shadowColor = menuOpen ? '#ffd166' : '#ff2d46';
        ctx.shadowBlur = 7;
        ctx.fillStyle = menuOpen ? '#fff3cf' : '#ffffff';
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(ex - ew / 2, eyeY - eh / 2, ew, eh, ew * 0.5);
        } else {
          ctx.ellipse(ex, eyeY, ew * 0.5, eh * 0.5, 0, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
      }
    }

    // 6. Ondas de voz animadas al abrir el menú IA, pensar o hacer clic
    if (menuOpen || thinking || pulse > 0.18) {
      const bars = 5;
      const gap = R * 0.12;
      const startX = -((bars - 1) * gap) / 2 + gx * 0.45;
      const baseY = R * 0.25 + gy * 0.45;
      ctx.strokeStyle = '#ffd166';
      ctx.lineWidth = 1.6;
      ctx.lineCap = 'round';
      for (let i = 0; i < bars; i++) {
        const bx = startX + i * gap;
        const bh = R * (0.04 + 0.08 * Math.abs(Math.sin(t * 8 + i * 1.1)));
        ctx.beginPath();
        ctx.moveTo(bx, baseY - bh);
        ctx.lineTo(bx, baseY + bh);
        ctx.stroke();
      }
    }

    ctx.restore();
  };

  const frame = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    speed += (targetSpeed - speed) * 0.08;
    pulse = Math.max(0, pulse - dt * 1.6);
    t += dt * speed;

    if (now - lastMoveAt > 8000) {
      targetX = Math.sin(t * 0.7) * 0.65;
      targetY = Math.cos(t * 0.5) * 0.3;
    }
    lookX += (targetX - lookX) * 0.14;
    lookY += (targetY - lookY) * 0.14;

    nextBlink -= dt;
    if (nextBlink <= 0 && blink <= 0) {
      blink = 0.01;
      nextBlink = 2.6 + Math.random() * 2.8;
    }
    if (blink > 0) {
      blink += dt * 4.6;
      if (blink >= 1) blink = 0;
    }

    const host = canvas.closest('button');
    menuOpen = host?.getAttribute('aria-expanded') === 'true';
    targetSpeed = thinking ? 3.2 : menuOpen ? 2.1 : hover ? 2.4 : 1;

    draw();
    if (running) raf = requestAnimationFrame(frame);
  };

  const start = () => {
    if (running || reduced) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  const onGlobalMove = (e) => {
    lastMoveAt = performance.now();
    const r = canvas.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy) || 1;
    const reach = Math.min(1, dist / 240);
    targetX = (dx / dist) * reach;
    targetY = (dy / dist) * reach;
  };

  const host = canvas.closest('button') || canvas;
  const onEnter = () => { hover = true; pulse = Math.max(pulse, 0.45); };
  const onLeave = () => { hover = false; };
  const onClick = () => { pulse = 1; if (!running) draw(); };

  size();
  draw();
  const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
  const ro = new ResizeObserver(() => { size(); if (!running) draw(); });
  io.observe(canvas);
  ro.observe(canvas);

  window.addEventListener('pointermove', onGlobalMove, { passive: true });
  host.addEventListener('pointerenter', onEnter);
  host.addEventListener('pointerleave', onLeave);
  host.addEventListener('click', onClick);

  return {
    setOpen(isOpen) { menuOpen = Boolean(isOpen); pulse = 0.85; if (!running) draw(); },
    setThinking(isBusy) { thinking = Boolean(isBusy); if (thinking) pulse = 1; if (!running) draw(); },
    destroy() {
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onGlobalMove);
      host.removeEventListener('pointerenter', onEnter);
      host.removeEventListener('pointerleave', onLeave);
      host.removeEventListener('click', onClick);
    },
  };
}
