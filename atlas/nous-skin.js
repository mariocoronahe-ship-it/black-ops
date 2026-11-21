// NOUS skin for Atlas modules: glass bar back to the app, the statue watching
// from the background, and neon headings that switch on when they appear.
(function () {
  var back = '../#/atlas';

  // module links that pointed to the old portal now return to NOUS
  document.querySelectorAll('a[href="index.html"]').forEach(function (a) { a.setAttribute('href', back); });

  var bar = document.createElement('div');
  bar.className = 'nous-bar';
  bar.innerHTML = '<a class="nous-logo" href="../#/inicio" aria-label="CALOT-OS"><img src="../assets/calot-logo.png?v=20261121s" alt="" style="width:28px;height:28px;border-radius:7px;vertical-align:middle;margin-right:8px"><b class="s">ca</b>lot<small>OS · ATLAS 3D</small></a>' +
    '<a class="nous-back" href="' + back + '">← Atlas</a>';
  document.body.insertBefore(bar, document.body.firstChild);

  var statue = document.createElement('div');
  statue.className = 'nous-statue';
  statue.setAttribute('aria-hidden', 'true');
  statue.innerHTML = '<img src="egypt-ref.jpg" alt=""><i class="eye l"></i><i class="eye r"></i>';
  document.body.appendChild(statue);

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // the statue sinks and darkens slowly as you read
  if (!reduced) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        statue.style.transform = 'translateY(' + (y * 0.12) + 'px)';
        statue.style.opacity = String(Math.max(0.07, 0.2 - y / 6000));
        ticking = false;
      });
    }, { passive: true });
  }

  // neon tubes flicker on the first time a heading enters the screen
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('nous-lit'); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('h1, h2, .eyebrow').forEach(function (el) { io.observe(el); });
  }
})();
