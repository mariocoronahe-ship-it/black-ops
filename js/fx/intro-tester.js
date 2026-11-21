// Intro de bienvenida para las testers: el androide guardián les presenta CALOT-OS.
// Tono: intimidante y sarcástico, pero de buenas con las primeras. Cada tester tiene su saludo, cierre, regreso,
// color, entrada de cámara y tono musical (PERSONAS). Completa (~80 s) la primera vez; después, un regreso corto en 3D.
// Esc / Espacio / Enter / clic saltan. Respaldo 2D sin WebGL o con movimiento reducido.

import { icon } from '../icons.js?v=20261121q';
import { getEngine, isPortalAudioMuted, setPortalAudioMuted, unlockPortalAudio } from './portal-audio.js?v=20261121q';
import { speak, stopVoice, prefetchVoice, getVoiceLevel } from './voice.js?v=20261121q';
import { canRunAndroidIntro, createAndroidIntro, prefetchAndroidIntro } from './androide/intro-androide.js?v=20261121q';

const GUIA = new URL('../../assets/guia.png?v=20261121q', import.meta.url).href;
const LOGO = new URL('../../assets/calot-hero.png?v=20261121q', import.meta.url).href;
const STYLE_ID = 'ci-tg-style';
const seenKey = (id) => `calot:intro-vista:v2:${id}`;

// Posición de los ojos dentro de la imagen (fracción del ancho/alto de la foto original 1040×1384)
const EYES = [[0.318, 0.392], [0.462, 0.392]];

// Mismos textos que las voces de ElevenLabs (assets/voz/*.mp3), palabra por palabra.
const LINES = {
  queEs: 'Soy el guardián de CALOT-OS. Nací en el HGR 72… entre guardias, desvelos, y residentes que juraban que ya sabían cirugía.',
  queTiene: 'Aquí guardo todo: resúmenes por tema y subtema, repaso espaciado, casos clínicos, juegos, escalas, un atlas en tres dimensiones… y el PUEM, en su propio rincón. De nada.',
  objetivo: 'Mi meta es simple: que cada día de estudio cuente. Yo lo mido todo… absolutamente todo. Y si dejas de estudiar… me voy a enterar.',
  competencia: 'Ah… y un detalle. Ustedes tres van a competir. Juegos, sesiones de estudio… todo cuenta. Yo llevo las estadísticas. La mejor se gana una recompensa… las demás, mi compasión.',
  tuPapel: 'Eres de las primeras en entrar… y eso tiene sus privilegios: contigo me voy a portar bien. Lo que falle, lo que te guste, lo que te confunda… díselo a Mario desde el botón de mensajes. Él cree que aquí manda. Déjalo creerlo.',
};

// Lo propio de cada tester: voces, textos, expediente, color, cámara y tono de la música.
const PERSONAS = {
  chantal: {
    saludo: ['tester-chantal', 5.5, 'Doctora Chantal… por fin. Llevaba un rato observándote.'],
    cierre: ['cierre-chantal', 5.9, 'Bienvenida, Chantal. Con las primeras soy amable… no me hagas cambiar de opinión.'],
    regreso: ['regreso-chantal', 4.6, 'Volviste, Chantal. Sabía que no ibas a poder alejarte.'],
    expediente: 'CHA-B1 · sujeto en observación', nota: 'Llevaba un rato observándote.', firma: 'No me hagas cambiar de opinión.',
    gate: 'alguien lleva rato observándote',
    acc: '#ff3a52', rgb: '255,58,82', cam: 'left', tune: 1,
    palette: { eye: 0xff1830, halo: 0xff1530, under: 0xe02a3e, mistA: 0x6a0f1e, dustA: [1.0, 0.28, 0.34] },
  },
  areli: {
    saludo: ['tester-areli', 7.3, 'Doctora Areli. Puntual… eso me gusta. Pasa. No muerdo… todavía.'],
    cierre: ['cierre-areli', 6.9, 'Bienvenida, Areli. Hoy estoy de buen humor… aprovéchalo. Te estaré vigilando.'],
    regreso: ['regreso-areli', 5.9, 'Areli, de vuelta. Tus tarjetas te extrañaban… yo, no tanto.'],
    expediente: 'ARE-B1 · puntualidad registrada', nota: 'Pasa. No muerdo… todavía.', firma: 'Te estaré vigilando.',
    gate: 'alguien te esperaba… puntual',
    acc: '#2aa8ff', rgb: '42,168,255', cam: 'above', tune: 0.891,
    palette: { eye: 0x1e90ff, halo: 0x0a6cff, under: 0x1a6ae0, mistA: 0x0a2a5a, dustA: [0.35, 0.7, 1.0], cables: 0x2a9dff },
  },
  daniela: {
    saludo: ['tester-daniela', 7.6, 'Doctora Daniela. Tranquila… el cuarto año todavía no es para ti. Aquí, yo decido qué ves.'],
    cierre: ['cierre-daniela', 7.5, 'Bienvenida, Daniela. Pórtate bien conmigo… y yo me portaré bien contigo. Por ahora.'],
    regreso: ['regreso-daniela', 5.1, 'Daniela. Otra vez por aquí… me agrada. Sigamos.'],
    expediente: 'DAN-B1 · acceso R1–R3', nota: 'Aquí, yo decido qué ves.', firma: 'Por ahora.',
    gate: 'alguien decide qué puedes ver',
    acc: '#2cff7a', rgb: '44,255,122', cam: 'close', tune: 1.122,
    palette: { eye: 0x1aff5a, halo: 0x10d84a, under: 0x1fae4c, mistA: 0x0a4a22, dustA: [0.4, 1.0, 0.55], cables: 0x2aff6a },
  },
};
const personaOf = (perfil) => PERSONAS[perfil?.id] || PERSONAS.chantal;

const MODULES = [
  ['notebook', 'Resúmenes', 'R1–R4 · por tema y subtema'],
  ['brain', 'Casos clínicos', 'difíciles, con explicación'],
  ['refresh', 'Repasa', 'repetición espaciada SM-2'],
  ['gamepad', 'Juegos', 'Blitz, Pase de visita, Detective…'],
  ['calc', 'Escalas', 'calculadoras clínicas'],
  ['cube', 'Atlas 3D', 'anatomía quirúrgica'],
  ['pulse', 'Estadísticas', 'tu avance real'],
  ['target', 'PUEM', 'sección propia de examen'],
];

const CSS = `
.ci-tg{position:fixed;inset:0;z-index:420;background:#030304;color:#efe9ea;overflow:hidden;font-family:var(--font-sans,"Manrope",system-ui,sans-serif);transition:opacity .8s ease;cursor:pointer}
.ci-tg.is-out{opacity:0;pointer-events:none}
.ci-tg canvas{position:absolute;inset:0;width:100%;height:100%}
.ci-tg-guide{position:absolute;bottom:0;left:50%;height:min(96vh,1100px);aspect-ratio:1040/1384;transform:translateX(-50%);transform-origin:50% 100%;will-change:transform,opacity;opacity:0}
.ci-tg-guide img{width:100%;height:100%;object-fit:cover;display:block;-webkit-mask-image:radial-gradient(ellipse 62% 58% at 42% 42%,#000 55%,transparent 100%);mask-image:radial-gradient(ellipse 62% 58% at 42% 42%,#000 55%,transparent 100%)}
.ci-tg-guide.is-fallback img{object-fit:contain;padding:28%;border-radius:50%;-webkit-mask-image:none;mask-image:none;filter:drop-shadow(0 0 60px rgba(255,40,64,.5))}
.ci-tg-eye{position:absolute;width:9%;aspect-ratio:1;border-radius:50%;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(255,235,240,.95) 0 8%,rgba(255,60,90,.85) 22%,rgba(255,20,60,.25) 50%,transparent 70%);mix-blend-mode:screen;opacity:0;pointer-events:none}
.ci-tg-vig{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 45%,transparent 35%,rgba(0,0,0,.85) 100%);pointer-events:none}
.ci-tg-grain{position:absolute;inset:-50%;opacity:.07;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");animation:ciTgGrain 1s steps(6) infinite;pointer-events:none}
.ci-tg-side{position:absolute;right:clamp(16px,6vw,96px);top:50%;transform:translateY(-50%);width:min(440px,42vw);display:grid;gap:14px;pointer-events:none}
.ci-tg-kicker{margin:0;font:600 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.32em;text-transform:uppercase;color:#ff5a6e}
.ci-tg-h{margin:0;font:italic 400 clamp(26px,3.6vw,48px)/1.08 var(--font-serif,"Fraunces",Georgia,serif);color:#f7f1f2;text-shadow:0 0 30px rgba(255,40,64,.3)}
.ci-tg-h em{color:#ff5a6e}
.ci-tg-p{margin:0;font-size:clamp(14px,1.25vw,17px);line-height:1.55;color:rgba(239,233,234,.78)}
.ci-tg-chap{display:grid;gap:12px;opacity:0;transform:translateY(14px);transition:opacity .7s ease,transform .7s ease;grid-area:1/1}
.ci-tg-chap.is-on{opacity:1;transform:none}
.ci-tg-stack{display:grid}
.ci-tg-mods{display:grid;gap:8px;margin-top:6px}
.ci-tg-mod{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:12px;background:rgba(20,10,14,.62);border:1px solid rgba(255,70,90,.22);box-shadow:0 0 22px -12px rgba(255,40,64,.8);backdrop-filter:blur(6px);opacity:0;transform:translateX(18px);transition:opacity .5s ease,transform .5s ease}
.ci-tg-mod.is-on{opacity:1;transform:none}
.ci-tg-mod svg{width:20px;height:20px;flex:none;stroke:#ff6b7d;fill:none;stroke-width:1.6}
.ci-tg-mod b{display:block;font-size:14px;color:#fff}.ci-tg-mod small{display:block;font-size:12px;color:rgba(239,233,234,.6)}
.ci-tg-sub{position:absolute;left:0;right:0;bottom:clamp(28px,7vh,64px);text-align:center;padding:0 16px;font:500 clamp(14px,1.35vw,18px)/1.5 var(--font-sans,system-ui);color:#f3eef0;text-shadow:0 2px 12px #000;opacity:0;transition:opacity .5s ease;pointer-events:none}
.ci-tg-sub.is-on{opacity:1}
.ci-tg-sub span{background:rgba(0,0,0,.45);padding:4px 10px;border-radius:8px;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.ci-tg-title{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:14px;text-align:center;opacity:0;transition:opacity 1s ease;pointer-events:none}
.ci-tg-title.is-on{opacity:1}
.ci-tg-title img{width:96px;height:96px;border-radius:50%;box-shadow:0 0 60px -10px rgba(255,40,64,.8)}
.ci-tg-title b{font:700 clamp(30px,5vw,58px)/1 var(--font-sans,system-ui);letter-spacing:.08em}.ci-tg-title b i{color:#ff3a52;font-style:normal}
.ci-tg-title small{font:500 12px/1.4 var(--font-mono,ui-monospace,monospace);letter-spacing:.24em;text-transform:uppercase;color:rgba(239,233,234,.7);max-width:90vw}
.ci-tg-skip{position:absolute;right:18px;top:18px;z-index:3;font:600 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.1em;color:rgba(239,233,234,.6);background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:99px;padding:9px 14px;cursor:pointer}
.ci-tg-skip:hover{color:#fff;border-color:rgba(255,90,110,.5)}
.ci-tg-bar{position:absolute;left:0;bottom:0;height:2px;background:linear-gradient(90deg,#ff3a52,#ff8a9a);width:0}
@keyframes ciTgGrain{0%{transform:translate(0,0)}25%{transform:translate(-3%,2%)}50%{transform:translate(2%,-3%)}75%{transform:translate(-2%,-1%)}100%{transform:translate(1%,3%)}}
@media (max-width:820px){
  .ci-tg-guide{left:50%;height:min(70vh,760px);bottom:auto;top:2vh}
  .ci-tg-side{left:16px;right:16px;width:auto;top:auto;bottom:clamp(84px,14vh,130px);transform:none}
  .ci-tg-mods{grid-template-columns:1fr 1fr}
  .ci-tg-mod{padding:8px 10px}.ci-tg-mod small{display:none}
  .ci-tg-sub{bottom:18px;font-size:13px}
}
`;

const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const smooth = (x) => { x = clamp(x); return x * x * (3 - 2 * x); };

function score(total, reduced, tune = 1) {
  try {
    if (reduced || isPortalAudioMuted()) return () => {};
    const eng = getEngine();
    if (!eng) return () => {};
    const { ctx, dry } = eng;
    const t0 = ctx.currentTime + 0.05;
    const out = ctx.createGain(); out.gain.value = 0.0001; out.connect(dry || ctx.destination);
    out.gain.setValueAtTime(0.0001, t0);
    out.gain.exponentialRampToValueAtTime(1, t0 + 2.5);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200; lp.Q.value = 0.3; lp.connect(out);
    const nodes = [];
    // Pad grave y oscuro (re menor abierto), sin agudos
    [[73.42, 0.05], [110, 0.035], [146.83, 0.022], [174.61, 0.014]].forEach(([f, v], i) => {
      const o = ctx.createOscillator(); o.type = i ? 'sine' : 'triangle'; o.frequency.value = f * tune;
      o.detune.value = (i % 2 ? 4 : -4);
      const g = ctx.createGain(); g.gain.value = v; o.connect(g); g.connect(lp); o.start(t0); o.stop(t0 + total + 1.5);
      nodes.push(o);
    });
    // Latido suave
    for (let t = 1.2; t < total - 2; t += 1.25) {
      [[0, 0.16], [0.24, 0.1]].forEach(([d, v]) => {
        const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(62, t0 + t + d); o.frequency.exponentialRampToValueAtTime(38, t0 + t + d + 0.18);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t0 + t + d); g.gain.exponentialRampToValueAtTime(v, t0 + t + d + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t0 + t + d + 0.3);
        o.connect(g); g.connect(lp); o.start(t0 + t + d); o.stop(t0 + t + d + 0.35);
      });
    }
    // Campana tenue al abrir los ojos y acorde final
    const bell = (at, f, v, dur) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f * tune;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t0 + at); g.gain.exponentialRampToValueAtTime(v, t0 + at + 0.04); g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
      o.connect(g); g.connect(lp); o.start(t0 + at); o.stop(t0 + at + dur + 0.1);
    };
    bell(1.6, 440, 0.04, 3);
    if (total > 20) [293.66, 349.23, 440, 523.25].forEach((f, i) => bell(total - 4.2 + i * 0.12, f, 0.03, 3.5));
    return () => {
      try {
        const n = ctx.currentTime;
        out.gain.cancelScheduledValues(n); out.gain.setValueAtTime(out.gain.value, n); out.gain.exponentialRampToValueAtTime(0.0001, n + 0.6);
        nodes.forEach((o) => { try { o.stop(n + 0.7); } catch {} });
      } catch {}
    };
  } catch { return () => {}; }
}

function particles(canvas) {
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, dpr = 1;
  const pts = [];
  const resize = () => {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  const N = w < 700 ? 70 : 140;
  for (let i = 0; i < N; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vy: 0.08 + Math.random() * 0.3, vx: (Math.random() - 0.5) * 0.12, r: 0.6 + Math.random() * 1.6, a: 0.2 + Math.random() * 0.7 });
  return {
    resize,
    draw(level) {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.y -= p.vy * (1 + level * 2); p.x += p.vx;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      }
      ctx.lineWidth = 0.5;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
          if (d < 6400) { ctx.strokeStyle = `rgba(255,50,80,${(1 - d / 6400) * 0.18 * level + 0.02})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(255,${70 + p.r * 30},${90 + p.r * 20},${p.a * (0.4 + level * 0.6)})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
    },
  };
}

function timeline(name, short, P) {
  if (short) {
    return {
      total: P.regreso[1] + 2.6,
      voices: [[0.9, P.regreso[0]]],
      chaps: [{ at: 1.0, out: P.regreso[1] + 1.6, kicker: `Expediente ${P.expediente}`, h: `De vuelta, <em>${name}</em>`, p: 'Sigues donde te quedaste.' }],
      subs: [[0.9, 0.9 + P.regreso[1], P.regreso[2]]],
      title: null,
    };
  }
  // Mismos tiempos que la versión 3D
  return {
    total: T3,
    voices: [[V3.saludo, P.saludo[0]], [V3.queEs, 'guia-que-es'], [V3.queTiene, 'guia-que-tiene'], [V3.objetivo, 'guia-objetivo'], [V3.tuPapel, 'guia-tu-papel'], [V3.competencia, 'guia-competencia'], [V3.cierre, P.cierre[0]]],
    chaps: chapters(name, P),
    subs: subtitles(P),
    title: TITLE3,
  };
}

function playTesterIntro2D({ perfil, reduced = false, onDone } = {}) {
  const id = perfil?.id || 'tester';
  const name = perfil?.name || 'Doctora';
  let seen = false;
  try { seen = Boolean(localStorage.getItem(seenKey(id))); } catch {}
  const short = seen || reduced;
  const P = personaOf(perfil);
  const tl = timeline(name, short, P);

  if (!document.getElementById(STYLE_ID)) {
    const st = document.createElement('style'); st.id = STYLE_ID; st.textContent = CSS; document.head.append(st);
  }
  const root = document.createElement('div');
  root.className = 'ci-tg';
  root.style.setProperty('--tg-acc', P.acc); root.style.setProperty('--tg-rgb', P.rgb);
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-label', 'Bienvenida a CALOT-OS');
  root.innerHTML = `
    <canvas aria-hidden="true"></canvas>
    <div class="ci-tg-guide" aria-hidden="true">
      <img src="${GUIA}" alt="" decoding="async">
      ${EYES.map(([x, y]) => `<span class="ci-tg-eye" style="left:${x * 100}%;top:${y * 100}%"></span>`).join('')}
    </div>
    <div class="ci-tg-vig" aria-hidden="true"></div>
    <div class="ci-tg-side"><div class="ci-tg-stack">
      ${tl.chaps.map((c, i) => `<section class="ci-tg-chap" data-i="${i}">
        <p class="ci-tg-kicker">${c.kicker}</p>
        <h2 class="ci-tg-h">${c.h}</h2>
        ${c.p ? `<p class="ci-tg-p">${c.p}</p>` : ''}
        ${c.mods ? `<div class="ci-tg-mods">${MODULES.map(([ic, t, d]) => `<div class="ci-tg-mod">${icon(ic)}<span><b>${t}</b><small>${d}</small></span></div>`).join('')}</div>` : ''}
      </section>`).join('')}
    </div></div>
    <div class="ci-tg-title" aria-hidden="true"><img src="${LOGO}" alt=""><b>CALOT<i>·</i>OS</b><small>Donde aprender medicina se vuelve tu mayor obsesión</small></div>
    <p class="ci-tg-sub" aria-live="polite"><span></span></p>
    <div class="ci-tg-grain" aria-hidden="true"></div>
    <button type="button" class="ci-tg-skip">Saltar · Esc</button>
    <div class="ci-tg-bar" aria-hidden="true"></div>`;
  document.body.append(root);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  const guide = root.querySelector('.ci-tg-guide');
  const img = guide.querySelector('img');
  img.addEventListener('error', () => { guide.classList.add('is-fallback'); img.src = LOGO; guide.querySelectorAll('.ci-tg-eye').forEach((e) => e.remove()); }, { once: true });
  const eyes = [...guide.querySelectorAll('.ci-tg-eye')];
  const chaps = [...root.querySelectorAll('.ci-tg-chap')];
  const mods = [...root.querySelectorAll('.ci-tg-mod')];
  const sub = root.querySelector('.ci-tg-sub');
  const subTxt = sub.querySelector('span');
  const title = root.querySelector('.ci-tg-title');
  const bar = root.querySelector('.ci-tg-bar');
  const pt = particles(root.querySelector('canvas'));
  const onResize = () => pt.resize();
  window.addEventListener('resize', onResize);

  prefetchVoice?.(tl.voices.map(([, v]) => v));
  const stopScore = score(tl.total, reduced, P.tune);
  tl.voices.forEach(([at, v]) => speak(v, { delay: at }).catch(() => {}));

  const start = performance.now();
  let raf = 0;
  let done = false;
  let lastSub = '';

  const finish = () => {
    if (done) return;
    done = true;
    cancelAnimationFrame(raf);
    try { localStorage.setItem(seenKey(id), String(Date.now())); } catch {}
    stopVoice(); stopScore();
    document.removeEventListener('keydown', onKey, true);
    window.removeEventListener('resize', onResize);
    root.classList.add('is-out');
    setTimeout(() => { root.remove(); document.body.style.overflow = prevOverflow; onDone?.(); }, 850);
  };
  const onKey = (e) => {
    if (['Escape', ' ', 'Enter', 'Spacebar'].includes(e.key)) { e.preventDefault(); e.stopPropagation(); finish(); }
  };
  document.addEventListener('keydown', onKey, true);
  root.addEventListener('click', finish);

  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const t = typeof window.__tgT === 'number' ? window.__tgT : (now - start) / 1000;
    if (t >= tl.total) { finish(); return; }
    const vl = getVoiceLevel();
    // Aparición del guía, respiración y deriva lenta
    const appear = short ? smooth(t / 1.2) : smooth((t - 1.4) / 2.6);
    const outro = tl.title ? 1 - smooth((t - tl.title[0]) / 1.6) * 0.75 : 1;
    const breathe = 1 + Math.sin(t * 1.3) * 0.0075 + 0.0075;
    const drift = Math.sin(t * 0.21) * 1.2;
    const desk = window.innerWidth > 820;
    guide.style.opacity = String(appear * outro);
    guide.style.transform = `translateX(${desk ? -78 + drift : -50 + drift * 0.6}%) scale(${breathe * (1.06 - appear * 0.06)})`;
    // Ojos: se encienden antes que el rostro y laten con la voz
    const eyeOn = short ? smooth((t - 0.2) / 0.6) : smooth((t - 0.6) / 1.2);
    const pulse = 0.75 + 0.25 * Math.sin(t * 2.2);
    eyes.forEach((e) => { e.style.opacity = String(eyeOn * (pulse + vl * 1.4) * (0.6 + outro * 0.4)); e.style.transform = `translate(-50%,-50%) scale(${1 + vl * 0.6})`; });
    // Capítulos
    tl.chaps.forEach((c, i) => chaps[i].classList.toggle('is-on', t >= c.at && t < c.out));
    const modsChap = tl.chaps.find((c) => c.mods);
    if (modsChap) mods.forEach((m, i) => m.classList.toggle('is-on', t >= modsChap.at + 0.8 + i * 1.25 && t < modsChap.out));
    // Subtítulos
    const s = tl.subs.find(([a, b]) => t >= a && t < b);
    const txt = s ? s[2] : '';
    if (txt !== lastSub) { lastSub = txt; if (txt) subTxt.textContent = txt; }
    sub.classList.toggle('is-on', Boolean(txt));
    if (tl.title) title.classList.toggle('is-on', t >= tl.title[0] && t < tl.title[1]);
    bar.style.width = `${(t / tl.total) * 100}%`;
    pt.draw(clamp(appear * 0.6 + vl));
  };
  raf = requestAnimationFrame(frame);
  return { skip: finish };
}

/** Vuelve a mostrar la intro completa (enlace «Ver intro otra vez»). */


// ───────────────────────── Versión 3D: el androide guía (primera visita) ─────────────────────────
// Mismo androide de ojos rojos que la intro de Mario, iluminado como aliado: penumbra cálida, gestos lentos,
// mira las tarjetas cuando las presenta y vuelve a mirarte cuando te habla a ti.

const ANDROID_ASSETS = new URL('../../assets/intro/', import.meta.url);
const VENDOR_THREE = new URL('../../vendor/three/', import.meta.url);

// Voces (inicio en s) ajustadas a la duración real de cada clip (el saludo más largo dura 7.6 s); nunca se pisan.
const V3 = { saludo: 3.0, queEs: 11.2, queTiene: 23.4, objetivo: 38.6, tuPapel: 51.4, competencia: 69.0, cierre: 84.6 };
const T3 = 96;
const TITLE3 = [88.2, 95.4];
// La coreografía base se escribió sobre otra duración: se reescala por tramos para caer en las mismas voces.
const T_BASE = 66;
const WARP = [[0, 0], [3.0, 3.2], [11.2, 6.9], [23.4, 19.0], [38.6, 32.6], [51.4, 42.6], [69.0, 48.5], [84.6, 55.0], [T3, T_BASE]];
function warp(t) {
  for (let i = 1; i < WARP.length; i++) {
    const [a, oa] = WARP[i - 1]; const [b, ob] = WARP[i];
    if (t <= b) return oa + (ob - oa) * clamp((t - a) / (b - a));
  }
  return T_BASE;
}

const lerp = (a, b, k) => a + (b - a) * k;
const rad = (d) => (d * Math.PI) / 180;
function track(t, keys) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (t <= keys[i][0]) { const [a, va] = keys[i - 1]; const [b, vb] = keys[i]; return lerp(va, vb, smooth((t - a) / (b - a))); }
  }
  return keys[keys.length - 1][1];
}
const portraitK = () => { try { return clamp((1.5 - window.innerWidth / Math.max(1, window.innerHeight)) / 0.9); } catch { return 0; } };

function sampleGuideBase(t) {
  const pk = portraitK();
  const pulse = 0.5 + 0.5 * Math.sin(t * Math.PI * 2 * 0.95);
  // Con tarjetas a la derecha, el androide se corre a la izquierda del cuadro (solo en horizontal)
  const side = (1 - pk) * track(t, [[0, 0], [6.4, 0], [7.6, 1], [53.8, 1], [55.2, 0], [T_BASE, 0]]);
  const shift = 0.21 * side;
  const cam = {
    px: shift + track(t, [[0, 0.3], [3.2, 0.22], [6.9, 0.06], [19, 0.02], [32.6, -0.03], [42.6, 0.0], [55, 0], [T_BASE, 0]]),
    py: track(t, [[0, 1.62], [T_BASE, 1.6]]),
    pz: track(t, [[0, 1.3], [3.2, 1.08], [6.9, 1.04], [19, 1.12], [32.6, 1.0], [42.6, 0.92], [55, 0.86], [60, 0.95], [T_BASE, 1.15]]),
    tx: shift,
    ty: track(t, [[0, 1.58], [6.9, 1.6], [T_BASE, 1.6]]),
    tz: 0,
    fov: track(t, [[0, 31], [6.9, 29], [42.6, 28], [55, 27.5], [T_BASE, 30]]),
    roll: 0,
  };
  cam.pz *= 1 - 0.45 * pk;
  cam.px *= 1 - 0.5 * pk;
  // Mira a la cámara al saludar y al hablarte; voltea hacia las tarjetas al presentarlas
  const yawDeg = track(t, [[0, -10], [3.2, -2], [6.9, 0], [9.5, 0], [11, 14], [16, 12], [19.4, 18], [30, 16], [32.6, 2], [41, 0], [42.6, 0], [55, 0], [T_BASE, 0]]) * (1 - pk * 0.6);
  const pitchDeg = track(t, [[0, 6], [3.2, 2], [4.4, 9], [5.6, 1], [32.6, 0], [33.6, 4], [35, 0], [55, 0], [56.5, 8], [58, 1], [T_BASE, 2]]);
  const tilt = track(t, [[0, 0.22], [3.0, 0.22], [5.5, 0.05], [T_BASE, 0.05]]);
  const eye = track(t, [[0, 0], [2.2, 0], [2.9, 1.3], [62, 1.2], [64.5, 0.5], [T_BASE, 0]]);
  const lit = track(t, [[0, 0], [2.0, 0], [3.2, 1], [62.5, 1], [65, 0.3], [T_BASE, 0]]);
  const scan = t >= 19.2 && t <= 22.4 ? lerp(1.72, 1.46, (t - 19.2) / 3.2) : -1;
  return {
    cam,
    yaw: rad(yawDeg),
    pitch: rad(pitchDeg),
    roll: 0,
    headT: [0, 0, 0],
    body: [0, 0, 0, tilt, 0],
    eye,
    cables: lit * 0.8 * (0.75 + 0.25 * pulse),
    lamp: 0,
    scalpel: null,
    hr: 57,
    key: lit * track(t, [[3, 0.18], [6.9, 0.3], [42.6, 0.36], [55, 0.4], [T_BASE, 0.3]]),
    rimLeft: lit * 0.55,
    rimRight: lit * 0.48,
    under: lit * track(t, [[3, 0.25], [19, 0.45], [55, 0.5], [T_BASE, 0.3]]),
    fill: lit * 0.9,
    halo: track(t, [[0, 0], [3, 0.06], [55, 0.12], [60, 0.16], [T_BASE, 0]]),
    mist: lit * 0.24,
    crackGlow: 0.05,
    crackVoice: 0.4,
    crackSpread: 0,
    scan,
    jawExtra: 0,
    squint: t > 42.6 && t < 63 ? 0.12 : 0,
    sway: 0.4,
    exposure: track(t, [[0, 0], [1.8, 0], [2.6, 1.05], [64.4, 1.05], [T_BASE, 0]]),
    bloom: 0.8,
    aberration: 0.0005,
    flicker: 1,
    motion: 1,
    time: t,
  };
}

// Variación por tester sobre la coreografía base: entrada de cámara, intensidad de ojos y halo.
function makeSample(P) {
  return (t) => {
    const f = sampleGuideBase(warp(t));
    const k = smooth(t / 11);           // la entrada propia se disuelve al empezar el «qué es»
    const end = smooth((t - V3.cierre) / 6);   // y vuelve un poco en el cierre
    const c = f.cam;
    if (P.cam === 'left') {
      // Te rodea desde la izquierda, bajo, como quien te estudia
      c.px += -0.42 * (1 - k) + Math.sin(t * 0.17) * 0.025 - 0.12 * end;
      c.py += -0.1 * (1 - k);
      f.yaw += -0.22 * (1 - k) - 0.08 * end;
    } else if (P.cam === 'above') {
      // Baja desde arriba y orbita despacio a la derecha
      c.py += 0.38 * (1 - k) + 0.06 * end;
      c.pz += 0.25 * (1 - k);
      c.px += 0.06 * Math.sin(t * 0.12) + 0.14 * end;
      f.pitch += 0.12 * (1 - k);
    } else {
      // Empieza pegado a los ojos y se aleja: primero te mira, luego te deja ver
      c.pz *= 0.5 + 0.5 * k - 0.12 * end;
      c.fov -= 6 * (1 - k);
      f.squint = Math.max(f.squint, 0.18 * (1 - k) + 0.15 * end);
    }
    // Énfasis final: al rematar su frase de cierre, ojos y boca se encienden y se quedan brillando
    const cEnd = V3.cierre + P.cierre[1];
    const emph = track(t, [[V3.cierre, 0], [cEnd - 2.2, 0.3], [cEnd - 0.6, 1], [cEnd + 1.6, 1], [T3 - 1.2, 0.7], [T3, 0]]);
    f.eye *= 1 + 0.25 * end + 1.1 * emph;
    f.mouthExtra = 0.6 * emph;
    f.halo += 0.08 * end + 0.14 * emph;
    f.crackGlow = (f.crackGlow || 0) + 0.25 * emph;
    return f;
  };
}

// Regreso corto: aparecen los ojos, te habla y se apaga.
function makeShortSample(P) {
  const T = P.regreso[1] + 2.6;
  return (t) => {
    const f = sampleGuideBase(60);
    const lit = track(t, [[0, 0], [0.5, 0], [1.2, 1], [T - 1.2, 1], [T, 0]]);
    const c = f.cam;
    c.px = P.cam === 'left' ? track(t, [[0, -0.2], [T, 0.02]]) : P.cam === 'above' ? track(t, [[0, 0.12], [T, -0.02]]) : 0;
    c.py = track(t, [[0, P.cam === 'above' ? 1.85 : 1.62], [2, 1.62], [T, 1.6]]);
    c.pz = track(t, [[0, P.cam === 'close' ? 0.55 : 1.2], [T, 0.9]]);
    const shift = 0.17 * (1 - portraitK()); // deja libre la tarjeta de la derecha
    c.px += shift; c.tx = shift;
    f.yaw = 0; f.pitch = rad(track(t, [[0, 4], [1.4, 0], [T, 2]]));
    f.eye = track(t, [[0, 0], [0.4, 0], [0.9, 1.35], [T - 0.8, 1.25], [T, 0]]);
    f.key *= lit; f.rimLeft = 0.55 * lit; f.rimRight = 0.48 * lit; f.fill = 0.9 * lit; f.under *= lit; f.mist = 0.24 * lit;
    f.cables *= lit; f.halo = 0.12 * lit; f.scan = -1; f.squint = 0.1;
    f.exposure = track(t, [[0, 0], [0.3, 0.2], [1.0, 1.05], [T - 0.7, 1.05], [T, 0]]);
    f.time = t;
    return f;
  };
}

function chapters(name, P) {
  return [
    { at: V3.saludo - 0.2, out: V3.queEs - 0.4, kicker: `Expediente ${P.expediente}`, h: `Bienvenida, <em>${name}</em>`, p: P.nota },
    { at: V3.queEs, out: V3.queTiene - 0.4, kicker: '01 · Quién soy', h: 'El guardián de <em>CALOT·OS</em>', p: 'Nací en el HGR 72, entre guardias y desvelos. Cirugía General, de R1 a R4.' },
    { at: V3.queTiene, out: V3.objetivo - 0.5, kicker: '02 · Lo que guardo', h: 'Todo lo que necesitas <em>estudiar</em>', mods: true },
    { at: V3.objetivo, out: V3.tuPapel - 0.5, kicker: '03 · Lo que mido', h: 'Lo mido <em>todo</em>', p: 'Cada día de estudio cuenta. Y si dejas de estudiar… me voy a enterar.' },
    { at: V3.tuPapel, out: V3.competencia - 0.6, kicker: '04 · Tu privilegio', h: 'Contigo me voy a <em>portar bien</em>', p: 'Botón de mensajes, arriba a la derecha: bugs, ideas, lo que te guste o te confunda. Le llega a Mario (él cree que manda).' },
    { at: V3.competencia, out: V3.cierre - 0.6, kicker: '05 · La competencia', h: 'Las tres van a <em>competir</em>', p: 'Juegos y sesiones de estudio cuentan. La mejor en las estadísticas gana recompensa… las demás, su compasión.' },
  ];
}

function subtitles(P) {
  return [
    [V3.saludo, V3.saludo + P.saludo[1], P.saludo[2]],
    [V3.queEs, V3.queTiene - 0.4, LINES.queEs], [V3.queTiene, V3.objetivo - 0.4, LINES.queTiene], [V3.objetivo, V3.tuPapel - 0.4, LINES.objetivo],
    [V3.tuPapel, V3.competencia - 0.4, LINES.tuPapel], [V3.competencia, V3.cierre - 0.4, LINES.competencia], [V3.cierre, V3.cierre + P.cierre[1] + 0.3, P.cierre[2]],
  ];
}

function guideOverlay(name, P, short) {
  const T = short ? P.regreso[1] + 2.6 : T3;
  const chaps = short
    ? [{ at: 1.0, out: T - 0.9, kicker: `Expediente ${P.expediente}`, h: `De vuelta, <em>${name}</em>`, p: 'Sigues donde te quedaste.' }]
    : chapters(name, P);
  const subs = short ? [[0.9, 0.9 + P.regreso[1], P.regreso[2]]] : subtitles(P);
  const title = short ? null : TITLE3;
  const el = document.createElement('div');
  el.className = 'ci-tg-ov';
  el.style.setProperty('--tg-acc', P.acc);
  el.style.setProperty('--tg-rgb', P.rgb);
  el.innerHTML = `
    <div class="ci-tg-side"><div class="ci-tg-stack">
      ${chaps.map((c, i) => `<section class="ci-tg-chap" data-i="${i}">
        <p class="ci-tg-kicker">${c.kicker}</p>
        <h2 class="ci-tg-h">${c.h}</h2>
        ${c.p ? `<p class="ci-tg-p">${c.p}</p>` : ''}
        ${c.mods ? `<div class="ci-tg-mods">${MODULES.map(([ic, tt, d]) => `<div class="ci-tg-mod">${icon(ic)}<span><b>${tt}</b><small>${d}</small></span></div>`).join('')}</div>` : ''}
      </section>`).join('')}
    </div></div>
    ${title ? `<div class="ci-tg-title is-3d"><b>CALOT<i>·</i>OS</b><small>Donde aprender medicina se vuelve tu mayor obsesión</small><p class="ci-tg-hello">Bienvenida, <em>${name}</em></p><p class="ci-tg-firma">${P.firma}</p></div>` : ''}
    <p class="ci-tg-sub" aria-live="polite"><span></span></p>
    <div class="ci-tg-bar"></div>`;
  const chapEls = [...el.querySelectorAll('.ci-tg-chap')];
  const mods = [...el.querySelectorAll('.ci-tg-mod')];
  const sub = el.querySelector('.ci-tg-sub');
  const subTxt = sub.querySelector('span');
  const titleEl = el.querySelector('.ci-tg-title');
  const bar = el.querySelector('.ci-tg-bar');
  let last = '';
  const update = (t) => {
    chaps.forEach((c, i) => chapEls[i].classList.toggle('is-on', t >= c.at && t < c.out));
    const m = chaps.find((c) => c.mods);
    if (m) mods.forEach((x, i) => x.classList.toggle('is-on', t >= m.at + 0.8 + i * 1.25 && t < m.out));
    const s = subs.find(([a, b]) => t >= a && t < b);
    const txt = s ? s[2] : '';
    if (txt !== last) { last = txt; if (txt) subTxt.textContent = txt; }
    sub.classList.toggle('is-on', Boolean(txt));
    if (titleEl) titleEl.classList.toggle('is-on', t >= title[0] && t < title[1]);
    bar.style.width = `${Math.min(100, (t / T) * 100)}%`;
  };
  return { el, update, T };
}

const CSS_3D = `
.ci-tg-ov{position:absolute;inset:0;z-index:4;pointer-events:none;overflow:hidden;color:#efe9ea;font-family:var(--font-sans,"Manrope",system-ui,sans-serif)}
.ci-tg-ov .ci-tg-side{right:clamp(20px,6vw,120px);width:min(440px,36vw)}
.ci-tg-ov .ci-tg-stack{align-items:center}
.ci-tg-ov .ci-tg-chap{align-self:center;height:max-content}
.ci-tg-ov .ci-tg-chap{background:linear-gradient(160deg,rgba(18,8,12,.72),rgba(8,4,6,.45));border:1px solid rgba(var(--tg-rgb,255,70,90),.2);border-radius:18px;padding:22px 24px;backdrop-filter:blur(8px);box-shadow:0 30px 80px -40px rgba(var(--tg-rgb,255,30,60),.6)}
.ci-tg-ov .ci-tg-sub{bottom:clamp(70px,12vh,120px);max-width:min(860px,92vw);margin:0 auto}
.ci-tg-ov .ci-tg-mods{grid-template-columns:1fr 1fr;gap:8px}
.ci-tg-ov .ci-tg-mod{padding:9px 11px;gap:10px;border-color:rgba(var(--tg-rgb,255,70,90),.22);box-shadow:0 0 22px -12px rgba(var(--tg-rgb,255,40,64),.8)}
.ci-tg-ov .ci-tg-mod svg{stroke:var(--tg-acc,#ff6b7d)}
.ci-tg-ov .ci-tg-mod b{font-size:13px}.ci-tg-ov .ci-tg-mod small{font-size:11px}
.ci-tg-ov .ci-tg-kicker,.ci-tg-ov .ci-tg-h em,.ci-tg-ov .ci-tg-title b i,.ci-tg-hello em{color:var(--tg-acc,#ff5a6e)}
.ci-tg-ov .ci-tg-h{text-shadow:0 0 30px rgba(var(--tg-rgb,255,40,64),.35)}
.ci-tg-ov .ci-tg-bar{z-index:3;background:linear-gradient(90deg,var(--tg-acc,#ff3a52),rgba(var(--tg-rgb,255,138,154),.5))}
@media (max-height:760px){.ci-tg-ov .ci-tg-mod small{display:none}.ci-tg-ov .ci-tg-h{font-size:clamp(22px,2.8vw,34px)}.ci-tg-ov .ci-tg-chap{padding:16px 18px}}
.ci-tg-ov .ci-tg-title{background:radial-gradient(ellipse at 50% 55%,rgba(0,0,0,.55),transparent 70%)}
.ci-tg-hello{margin:6px 0 0;font:italic 400 clamp(22px,3vw,38px)/1.1 var(--font-serif,"Fraunces",Georgia,serif);color:#f6f1f2}
.ci-tg-firma{margin:2px 0 0;font:600 11px/1.4 var(--font-mono,ui-monospace,monospace);letter-spacing:.3em;text-transform:uppercase;color:rgba(var(--tg-rgb,255,90,110),.85)}
.ci-tg-ov .ci-tg-kicker{letter-spacing:.24em}
@media (max-width:820px){
  .ci-tg-ov .ci-tg-side{left:14px;right:14px;width:auto;top:auto;bottom:clamp(120px,20vh,180px);transform:none}
  .ci-tg-ov .ci-tg-chap{padding:12px 14px;gap:8px}
  .ci-tg-ov .ci-tg-h{font-size:22px}
  .ci-tg-ov .ci-tg-p{display:none}
  .ci-tg-ov .ci-tg-mods{gap:6px}.ci-tg-ov .ci-tg-mod{padding:7px 9px}
  .ci-tg-ov .ci-tg-sub{bottom:76px}
}
`;

async function playTesterIntro3D({ perfil, short = false, onDone }) {
  const name = perfil?.name || 'Doctora';
  const P = personaOf(perfil);
  if (!document.getElementById(STYLE_ID)) { const st = document.createElement('style'); st.id = STYLE_ID; st.textContent = CSS; document.head.append(st); }
  if (!document.getElementById(`${STYLE_ID}-3d`)) { const st = document.createElement('style'); st.id = `${STYLE_ID}-3d`; st.textContent = CSS_3D; document.head.append(st); }
  const voices = short
    ? [[0.9, P.regreso[0]]]
    : [[V3.saludo, P.saludo[0]], [V3.queEs, 'guia-que-es'], [V3.queTiene, 'guia-que-tiene'], [V3.objetivo, 'guia-objetivo'], [V3.tuPapel, 'guia-tu-papel'], [V3.competencia, 'guia-competencia'], [V3.cierre, P.cierre[0]]];
  prefetchVoice(voices.map(([, v]) => v));
  const ov = guideOverlay(name, P, short);
  const timers = [];
  let stopScore = () => {};
  let cleaned = false;
  const cleanup = () => { if (cleaned) return; cleaned = true; timers.forEach(clearTimeout); stopVoice(); stopScore(); };
  let timedOut = false;
  let loadTimer = 0;
  const intro = await Promise.race([
    createAndroidIntro({
      doctor: name,
      assetBase: ANDROID_ASSETS,
      vendorBase: VENDOR_THREE,
      timeline: { sample: short ? makeShortSample(P) : makeSample(P), cues: [], TOTAL: ov.T, REDUCED_TOTAL: 5 },
      palette: P.palette,
      ui: { vitals: false, variant: 'ads', bars: 'adaptive' },
      overlay: ov.el,
      onFrame: (t) => ov.update(t),
      muteControl: {
        isMuted: () => isPortalAudioMuted(),
        toggle: () => { const next = !isPortalAudioMuted(); setPortalAudioMuted(next); if (next) stopVoice(); return next; },
      },
      onSkip: cleanup,
      onEnd: cleanup,
    }).then((inst) => { if (timedOut) { inst?.dispose?.(); return null; } return inst; }),
    new Promise((_, rej) => { loadTimer = setTimeout(() => { timedOut = true; rej(new Error('Carga 3D excedió 15 s')); }, 15000); }),
  ]);
  clearTimeout(loadTimer);
  stopScore = score(ov.T, false, P.tune);
  voices.forEach(([sec, clip]) => timers.push(setTimeout(() => { if (!cleaned) speak(clip, { interrupt: true }).catch(() => {}); }, sec * 1000)));
  intro.start();
  try { await intro.done; } finally {
    cleanup();
    try { localStorage.setItem(seenKey(perfil?.id || 'tester'), String(Date.now())); } catch {}
    onDone?.();
  }
}

// Tras recargar por cambio de perfil no hay gesto del usuario y el navegador bloquea el audio:
// una pantalla breve pide un toque, activa el sonido y entonces arranca la intro.
function audioGate(name, P = PERSONAS.chantal) {
  const eng = getEngine();
  if (!eng || eng.ctx.state === 'running') return Promise.resolve();
  if (!document.getElementById(`${STYLE_ID}-gate`)) {
    const st = document.createElement('style'); st.id = `${STYLE_ID}-gate`;
    st.textContent = `.ci-tg-gate{position:fixed;inset:0;z-index:430;background:#030304;display:grid;place-content:center;justify-items:center;gap:18px;text-align:center;cursor:pointer;color:#efe9ea;font-family:var(--font-sans,system-ui);transition:opacity .5s ease}
.ci-tg-gate.is-out{opacity:0;pointer-events:none}
.ci-tg-gate i{width:14px;height:14px;border-radius:50%;background:var(--tg-acc,#ff3a52);box-shadow:0 0 30px 8px rgba(var(--tg-rgb,255,40,64),.55);animation:ciTgGate 1.6s ease-in-out infinite}
.ci-tg-gate b{font:italic 400 clamp(24px,3.4vw,40px)/1.1 var(--font-serif,"Fraunces",Georgia,serif)}.ci-tg-gate b em{color:var(--tg-acc,#ff5a6e)}
.ci-tg-gate small{font:600 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.28em;text-transform:uppercase;color:rgba(239,233,234,.6)}
@keyframes ciTgGate{50%{transform:scale(1.5);opacity:.6}}`;
    document.head.append(st);
  }
  const el = document.createElement('div');
  el.className = 'ci-tg-gate';
  el.setAttribute('role', 'button');
  el.tabIndex = 0;
  el.style.setProperty('--tg-acc', P.acc); el.style.setProperty('--tg-rgb', P.rgb);
  el.innerHTML = `<i></i><b>${name ? `<em>${name}</em>, ` : ''}${P.gate}</b><small>Toca para comenzar · con sonido</small>`;
  document.body.append(el);
  el.focus({ preventScroll: true });
  return new Promise((resolve) => {
    const go = () => {
      el.removeEventListener('click', go);
      el.removeEventListener('touchend', go);
      el.removeEventListener('keydown', key);
      unlockPortalAudio();
      try { eng.ctx.resume(); } catch {}
      el.classList.add('is-out');
      setTimeout(() => el.remove(), 520);
      resolve();
    };
    const key = (e) => { if (['Enter', ' ', 'Escape'].includes(e.key)) { e.preventDefault(); go(); } };
    el.addEventListener('click', go);
    el.addEventListener('touchend', go, { passive: true });
    el.addEventListener('keydown', key);
  });
}

/** Entrada de las testers: intro 3D propia de cada una (completa la primera vez, regreso corto después); respaldo 2D. */
export async function playTesterIntro({ perfil, reduced = false, onDone } = {}) {
  const P = personaOf(perfil);
  // Mientras ella toca la pantalla de inicio, ya se descargan el modelo, el HDR y las voces
  try { prefetchAndroidIntro({ assetBase: ANDROID_ASSETS, vendorBase: VENDOR_THREE }); } catch {}
  prefetchVoice([P.saludo[0], P.regreso[0], 'guia-que-es']);
  await audioGate(perfil?.name, P);
  let seen = false;
  try { seen = Boolean(localStorage.getItem(seenKey(perfil?.id || 'tester'))); } catch {}
  const useReduced = Boolean(reduced || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  if (useReduced || !canRunAndroidIntro()) return playTesterIntro2D({ perfil, reduced: useReduced, onDone });
  playTesterIntro3D({ perfil, short: seen, onDone }).catch((err) => {
    console.warn('[intro-tester] Respaldo 2D:', err?.message || err);
    playTesterIntro2D({ perfil, onDone });
  });
  return null;
}

/** Vuelve a mostrar la intro completa (enlace «Ver intro otra vez»). */
export function replayTesterIntro(perfil) {
  try { localStorage.removeItem(seenKey(perfil?.id || 'tester')); } catch {}
  return playTesterIntro({ perfil });
}
