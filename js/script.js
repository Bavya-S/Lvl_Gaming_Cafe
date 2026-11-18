/* =========================================================
   LVL core script – shared by every page.
   Every block is null-safe, so a page can omit any element.
   ========================================================= */
(function () {
  'use strict';
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isPhone = window.matchMedia('(max-width: 900px)');

  /* ---------- 1. Background particles (cheap on phones, deferred, paused when hidden) ---------- */
  (function particles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = 0, H = 0, running = false, raf = 0, last = 0, ps = [], streaks = [];
    const COLORS = ['#00d4ff', '#a855f7', '#ff2d55', '#39ff14'];
    const rand = (a, b) => a + Math.random() * (b - a);

    function size() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;        // DPR capped at 1 – the layer is a soft glow anyway
      const phone = isPhone.matches, n = phone ? 22 : 70, s = phone ? 0 : 12;
      ps = Array.from({ length: n }, (_, i) => ({ x: rand(0, W), y: rand(0, H), r: rand(0.6, 1.9), vx: rand(-0.25, 0.25), vy: rand(-0.45, -0.1), c: i % COLORS.length }));
      streaks = Array.from({ length: s }, () => ({ x: rand(0, W), y: rand(0, H), len: rand(30, 90), v: rand(1, 2.5) }));
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      // one path + one fill per colour instead of one per particle
      for (let c = 0; c < COLORS.length; c++) {
        ctx.beginPath();
        for (let i = 0; i < ps.length; i++) {
          const p = ps[i]; if (p.c !== c) continue;
          p.x += p.vx; p.y += p.vy;
          if (p.y < -5) { p.y = H + 5; p.x = rand(0, W); }
          if (p.x < -5) p.x = W + 5; else if (p.x > W + 5) p.x = -5;
          ctx.moveTo(p.x + p.r, p.y); ctx.arc(p.x, p.y, p.r, 0, 6.2832);
        }
        ctx.globalAlpha = 0.6; ctx.fillStyle = COLORS[c]; ctx.fill();
      }
      if (streaks.length) {
        ctx.globalAlpha = 0.12; ctx.strokeStyle = '#00d4ff'; ctx.lineWidth = 1; ctx.beginPath();
        streaks.forEach(s => { s.y += s.v; if (s.y > H + s.len) { s.y = -s.len; s.x = rand(0, W); } ctx.moveTo(s.x, s.y); ctx.lineTo(s.x, s.y + s.len); });
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    function loop(t) {
      if (!running) return;
      raf = requestAnimationFrame(loop);
      if (t - last < (isPhone.matches ? 50 : 33)) return;   // ~20fps phones, ~30fps desktop
      last = t; draw();
    }
    function start() { if (running || reduceMotion.matches || document.hidden) return; running = true; raf = requestAnimationFrame(loop); }
    function stop() { running = false; cancelAnimationFrame(raf); }
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { size(); if (!running) draw(); }, 200); });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    reduceMotion.addEventListener?.('change', () => { reduceMotion.matches ? (stop(), draw()) : start(); });
    size(); draw();
    // start the animation only after the page has loaded and the hero entrance is done
    const go = () => setTimeout(start, 2200);
    document.readyState === 'complete' ? go() : window.addEventListener('load', go, { once: true });
  })();

  /* ---------- 2. Loader (first visit of a session, ~1.2s) ---------- */
  function startHero() { root.classList.add('hero-go'); }
  (function loader() {
    const el = document.getElementById('loader');
    const seen = (() => { try { return sessionStorage.getItem('siteInitialized'); } catch (e) { return null; } })();
    if (!el || seen || reduceMotion.matches) { el && el.remove(); requestAnimationFrame(startHero); return; }
    const texts = ['INITIALIZING SYSTEMS...', 'LOADING ASSETS...', 'READY.'];
    const label = document.getElementById('loaderText'); let i = 0;
    const t = setInterval(() => { if (label && i < texts.length - 1) label.textContent = texts[++i]; }, 350);
    setTimeout(() => {
      clearInterval(t); el.classList.add('hidden');
      try { sessionStorage.setItem('siteInitialized', 'true'); } catch (e) {}
      setTimeout(() => el.remove(), 600);
      startHero();
    }, 1000);
  })();
  window.addEventListener('pageshow', e => { if (e.persisted) { root.classList.remove('is-leaving'); startHero(); } });

  /* ---------- 3. Navigation: header state, drawer, history, focus trap ---------- */
  (function nav() {
    const bar = document.getElementById('mainNav');
    const btn = document.getElementById('hamburger');
    const drawer = document.getElementById('mobileNav');
    const scrim = document.getElementById('navScrim');
    const closeBtn = document.getElementById('drawerClose');
    if (bar) {
      let ticking = false;
      const upd = () => { bar.classList.toggle('scrolled', window.scrollY > 8); ticking = false; };
      window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
      upd();
    }
    if (!btn || !drawer) return;
    let open = false, pushed = false, lastFocus = null;
    const focusables = () => [...drawer.querySelectorAll('a[href],button:not([disabled])')];

    function setOpen(v, fromPop) {
      if (v === open) return;
      open = v;
      btn.setAttribute('aria-expanded', String(v));
      btn.setAttribute('aria-label', v ? 'Close menu' : 'Open menu');
      drawer.classList.toggle('open', v);
      scrim && scrim.classList.toggle('open', v);
      document.body.classList.toggle('menu-open', v);
      if (v) {
        drawer.removeAttribute('inert'); lastFocus = document.activeElement;
        history.pushState({ lvlMenu: 1 }, ''); pushed = true;            // phone Back button closes the menu
        setTimeout(() => (closeBtn || drawer).focus(), 60);
      } else {
        drawer.setAttribute('inert', '');
        if (pushed && !fromPop) { pushed = false; history.back(); } else pushed = false;
        lastFocus && lastFocus.focus && lastFocus.focus();
      }
    }
    window.toggleMobileNav = () => setOpen(!open);          // kept for backwards compatibility
    btn.addEventListener('click', () => setOpen(!open));
    closeBtn && closeBtn.addEventListener('click', () => setOpen(false));
    scrim && scrim.addEventListener('click', () => setOpen(false));
    // menu closes after selecting an item (same-page anchors included)
    drawer.addEventListener('click', e => { if (e.target.closest('a[href]')) { pushed = false; setOpen(false, true); } });
    window.addEventListener('popstate', () => { if (open) setOpen(false, true); });
    document.addEventListener('keydown', e => {
      if (!open) return;
      if (e.key === 'Escape') return setOpen(false);
      if (e.key === 'Tab') {
        const f = focusables(); if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    });
    // leaving phone layout (rotate / resize) closes the drawer
    window.matchMedia('(min-width: 901px)').addEventListener?.('change', m => { if (m.matches && open) setOpen(false); });
  })();

  /* ---------- 4. Hide the bottom dock while the on-screen keyboard is up ---------- */
  document.addEventListener('focusin', e => { if (e.target.matches('input,textarea,select')) document.body.classList.add('kb-open'); });
  document.addEventListener('focusout', () => setTimeout(() => { if (!document.activeElement || !document.activeElement.matches('input,textarea,select')) document.body.classList.remove('kb-open'); }, 80));

  /* ---------- 5. Scroll reveal (opacity/transform only) ---------- */
  (function reveal() {
    const els = document.querySelectorAll('.fade-in');
    if (!els.length) return;
    if (!('IntersectionObserver' in window) || reduceMotion.matches) { els.forEach(e => e.classList.add('visible')); return; }
    const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } }), { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    els.forEach(e => io.observe(e));
    window.lvlObserve = el => io.observe(el);
  })();

  /* ---------- 6. Image reveal for [data-reveal] ---------- */
  document.querySelectorAll('img[data-reveal]').forEach(img => {
    const on = () => img.classList.add('is-in');
    img.complete ? on() : img.addEventListener('load', on, { once: true });
  });

  /* ---------- 7. Link hardening + page-transition fallback ---------- */
  document.querySelectorAll('a[target="_blank"]').forEach(a => { if (!/noopener/.test(a.rel)) a.rel = (a.rel + ' noopener noreferrer').trim(); });
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target || a.hasAttribute('download')) return;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin || !/\.html$/.test(u.pathname) && u.pathname !== '/') return;
    if (u.pathname === location.pathname) return;
    if (reduceMotion.matches) return;
    e.preventDefault(); root.classList.add('is-leaving');
    setTimeout(() => { location.href = u.href; }, 170);
  });

  /* ---------- 8. In-page anchors: smooth scroll + move focus for keyboard/AT users ---------- */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute('href').slice(1); const t = id && document.getElementById(id);
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
    if (!t.hasAttribute('tabindex')) t.setAttribute('tabindex', '-1');
    t.focus({ preventScroll: true });
  });
})();
