// Scroll engine: Lenis (inertial smooth scroll) + GSAP ScrollTrigger.
// Degrades gracefully: without the libraries or with reduced motion,
// content is simply shown and counters jump to their final values.
const g = window.gsap;
const ST = window.ScrollTrigger;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const enabled = Boolean(g && ST && !reduced);
export let lenis = null;
let ctx = null;

export function init() {
  if (!enabled) return;
  g.registerPlugin(ST);
  document.documentElement.classList.add('js-motion');
  if (window.Lenis) {
    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.95 });
    lenis.on('scroll', ST.update);
    g.ticker.add((t) => lenis.raf(t * 1000));
    g.ticker.lagSmoothing(0);
  }
}

/** Run a view's animations inside a revertible GSAP context. */
export function scope(root, fn) {
  if (ctx) { ctx.revert(); ctx = null; }
  stopMarquees();
  ST?.getAll().forEach((t) => t.kill());
  if (!enabled) { fallback(root); marquee(root); return; }
  ctx = g.context(() => fn(g, ST), root);
  // fonts/images can shift layout after first paint
  requestAnimationFrame(() => ST.refresh());
}

export function toTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}
export function refresh() { if (enabled) ST.refresh(); }

function fallback(root) {
  root.querySelectorAll('[data-count]').forEach((el) => { el.textContent = fmt(+el.dataset.count, el.dataset.dec); });
}
const fmt = (v, dec) => (dec ? v.toFixed(+dec) : Math.round(v).toString());

// ---------- reusable effects ----------

/** Staggered reveal: opacity + translateY + blur, batched as elements enter. */
export function reveal(root) {
  const items = root.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  g.set(items, { opacity: 0, y: 40, filter: 'blur(8px)' });
  ST.batch(items, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) => (batch.forEach((el) => el.classList.add('lit')), g.to(batch, {
      opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'expo.out', stagger: 0.08,
      clearProps: 'filter',
    })),
  });
}

/** Neon bottom lines draw in (ref 8249). */
export function drawLines(root) {
  root.querySelectorAll('.card-neon').forEach((el) => {
    g.fromTo(el, { '--line': 0 }, {
      '--line': 1, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });
}

/** Glows drift slower than content → depth. */
export function parallax(root) {
  root.querySelectorAll('[data-parallax]').forEach((el) => {
    const amt = parseFloat(el.dataset.parallax) || 60;
    g.fromTo(el, { yPercent: -amt / 2 }, {
      yPercent: amt / 2, ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

/** Count-up numbers. */
export function counters(root) {
  root.querySelectorAll('[data-count]').forEach((el) => {
    const end = +el.dataset.count; const obj = { v: 0 };
    g.to(obj, {
      v: end, duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate: () => { el.textContent = fmt(obj.v, el.dataset.dec); },
    });
  });
}

/** Progress bars fill when they appear. */
export function bars(root) {
  root.querySelectorAll('.progress > span').forEach((el) => {
    g.fromTo(el, { '--fill': 0 }, { '--fill': 1, duration: 1.3, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 95%' } });
  });
  root.querySelectorAll('.segbar').forEach((bar) => {
    g.from(bar.querySelectorAll('i.on'), {
      opacity: 0, scaleX: 0, transformOrigin: 'left', duration: 0.4, stagger: 0.07, ease: 'power2.out',
      scrollTrigger: { trigger: bar, start: 'top 95%' },
    });
  });
}

/** SVG paths draw with stroke-dashoffset. */
export function drawPaths(root, selector = '[data-draw]') {
  root.querySelectorAll(selector).forEach((p) => {
    const len = p.getTotalLength ? p.getTotalLength() : 400;
    g.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, {
      strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut',
      scrollTrigger: { trigger: p.closest('svg') || p, start: 'top 85%' },
    });
  });
}

/** Big page header compacts into a fixed glass bar after scrolling past it. */
export function compactHeader(root) {
  const head = root.querySelector('.page-head'); const bar = root.querySelector('.sticky-bar');
  if (!head || !bar) return;
  ST.create({
    trigger: head, start: 'bottom top+=40',
    onEnter: () => bar.classList.add('show'),
    onLeaveBack: () => bar.classList.remove('show'),
  });
  g.to(head, { opacity: 0.2, y: -30, scale: 0.98, transformOrigin: 'left bottom', ease: 'none', scrollTrigger: { trigger: head, start: 'top top+=60', end: 'bottom top', scrub: true } });
}

/** Split headings into letters (words kept intact) and reveal them on scroll. */
export function splitText(el) {
  if (el.dataset.split) return;
  el.dataset.split = '1';
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  const walk = (node) => {
    for (const n of [...node.childNodes]) {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.append(document.createTextNode(' ')); return; }
          const word = document.createElement('span'); word.className = 'sw'; word.setAttribute('aria-hidden', 'true');
          for (const ch of w) { const c = document.createElement('span'); c.className = 'sc'; c.textContent = ch; word.append(c); }
          frag.append(word);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') {
        // gradient text must stay one piece or its background-clip breaks
        if (n.classList.contains('grad-text')) { n.classList.add('sc'); n.setAttribute('aria-hidden', 'true'); } else walk(n);
      }
    }
  };
  walk(el);
}
export function splitReveal(root, selector = '.page-head h1, [data-split-reveal]') {
  root.querySelectorAll(selector).forEach((el) => {
    splitText(el);
    g.from(el.querySelectorAll('.sc'), {
      yPercent: 90, opacity: 0, rotateX: -70, filter: 'blur(6px)', transformOrigin: '50% 100%',
      duration: 1, ease: 'expo.out', stagger: 0.022, clearProps: 'filter',
      scrollTrigger: { trigger: el, start: 'top 92%' },
    });
  });
}

/** Infinite marquee; scrolling speeds it up and flips its direction. */
const marquees = new Set();
export function marquee(root) {
  if (reduced) return;
  root.querySelectorAll('[data-marquee] .mq-track').forEach((track) => {
    const anim = track.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: 38000, iterations: Infinity });
    marquees.add(anim);
    if (!enabled) return;
    let dir = 1;
    ST.create({
      trigger: track, start: 'top bottom', end: 'bottom top',
      onUpdate: (s) => {
        const v = s.getVelocity();
        if (Math.abs(v) > 40) dir = v > 0 ? 1 : -1;
        const target = dir * (1 + Math.min(Math.abs(v) / 260, 7));
        g.to(anim, { playbackRate: target, duration: 0.25, overwrite: true, onComplete: () => g.to(anim, { playbackRate: dir, duration: 1.2, ease: 'power2.out' }) });
      },
      onLeave: () => anim.pause(), onEnterBack: () => anim.play(), onEnter: () => anim.play(), onLeaveBack: () => anim.pause(),
    });
  });
}
export function stopMarquees() { marquees.forEach((a) => a.cancel()); marquees.clear(); }

/** Per-view cleanups (canvas loops, observers) run before the next view renders. */
const cleanups = [];
export function onCleanup(fn) { cleanups.push(fn); }
export function teardown() { while (cleanups.length) { try { cleanups.pop()(); } catch { /* ignore */ } } }
