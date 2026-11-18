/* =========================================================
   Home page: hero life (parallax, motes), stat counters, video facades
   ========================================================= */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hero = document.querySelector('.hero');

  /* ---------- hero atmosphere: rising motes (pure CSS animation, no rAF loop) ---------- */
  const motes = document.getElementById('heroMotes');
  if (motes && !reduce.matches) {
    const n = window.innerWidth < 700 ? 10 : 18, cols = ['#00d4ff', '#00d4ff', '#39ff14', '#a855f7'];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
      const m = document.createElement('i');
      m.style.cssText = `--x:${(Math.random() * 100).toFixed(1)}%;--s:${(2 + Math.random() * 2.5).toFixed(1)}px;--t:${(6 + Math.random() * 6).toFixed(1)}s;--dl:${(-Math.random() * 10).toFixed(1)}s;--dx:${(Math.random() * 60 - 30).toFixed(0)}px;--c:${cols[i % cols.length]}`;
      frag.appendChild(m);
    }
    motes.appendChild(frag);
  }

  /* ---------- hero parallax: touch-drag, mouse, gentle device tilt, scroll depth ---------- */
  (function parallax() {
    if (!hero || reduce.matches) return;
    const layers = [...hero.querySelectorAll('[data-depth]')].map(el => ({ el, d: parseFloat(el.dataset.depth) || 0.5, par: el.querySelector('.hc-par') || el }));
    if (!layers.length) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, sy = 0, visible = true, raf = 0, base = null;
    const MAX = window.innerWidth < 700 ? 10 : 18;     // px at depth 1
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    function frame() {
      raf = 0;
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      layers.forEach(l => {
        const k = 1.15 - l.d;                           // nearer layers (small depth value) move more
        l.par.style.setProperty('--px', (cx * MAX * k).toFixed(2) + 'px');
        l.par.style.setProperty('--py', (cy * MAX * 0.6 * k + sy * (0.18 + l.d * 0.12)).toFixed(2) + 'px');
      });
      if (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002) raf = requestAnimationFrame(frame);
    }
    const kick = () => { if (!raf && visible) raf = requestAnimationFrame(frame); };
    function aim(x, y) { const r = hero.getBoundingClientRect(); tx = clamp((x - r.left) / r.width * 2 - 1, -1, 1); ty = clamp((y - r.top) / r.height * 2 - 1, -1, 1); kick(); }
    hero.addEventListener('pointermove', e => aim(e.clientX, e.clientY), { passive: true });
    hero.addEventListener('touchmove', e => { const t = e.touches[0]; if (t) aim(t.clientX, t.clientY); }, { passive: true });
    hero.addEventListener('pointerleave', () => { tx = ty = 0; kick(); });
    hero.addEventListener('touchend', () => { tx = ty = 0; kick(); }, { passive: true });
    // device tilt – only where no permission prompt is needed (Android / most browsers)
    if ('DeviceOrientationEvent' in window && typeof DeviceOrientationEvent.requestPermission !== 'function' && window.matchMedia('(pointer: coarse)').matches) {
      window.addEventListener('deviceorientation', e => {
        if (!visible || e.gamma == null) return;
        if (!base) base = { g: e.gamma, b: e.beta };
        tx = clamp((e.gamma - base.g) / 18, -1, 1); ty = clamp((e.beta - base.b) / 18, -1, 1); kick();
      }, { passive: true });
    }
    // scroll depth: characters drift slower than the page
    let st = false;
    window.addEventListener('scroll', () => { if (st || !visible) return; st = true; requestAnimationFrame(() => { sy = clamp(window.scrollY, 0, 600) * 0.35; st = false; kick(); }); }, { passive: true });
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => { visible = en.isIntersecting; hero.classList.toggle('is-offscreen', !visible); }).observe(hero);
  })();

  /* ---------- stat counters: animate to the exact printed value (no more "4" → "4+") ---------- */
  (function counters() {
    const nums = document.querySelectorAll('.hero-stat-num[data-count]');
    if (!nums.length || reduce.matches || !('IntersectionObserver' in window)) return;
    function run(el) {
      const end = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now(), dur = 1100;
      (function step(t) {
        const p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = v + (p === 1 ? suf : '');
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { io.unobserve(en.target); setTimeout(() => run(en.target), 1300); } }), { threshold: 0.6 });
    nums.forEach(n => io.observe(n));
  })();

  /* ---------- video facades: the YouTube iframe is only created when tapped ---------- */
  document.querySelectorAll('.short-reel-container[data-yt]').forEach(box => {
    const btn = box.querySelector('.reel-facade'); if (!btn) return;
    btn.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = `https://www.youtube.com/embed/${encodeURIComponent(box.dataset.yt)}?autoplay=1&rel=0&playsinline=1`;
      f.title = box.dataset.title || 'LVL Gaming Café video';
      f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      f.allowFullscreen = true; f.loading = 'lazy'; f.referrerPolicy = 'strict-origin-when-cross-origin';
      box.replaceChildren(f);
    });
  });
})();
