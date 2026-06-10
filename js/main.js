/* ============================================================
   tomchard.uk — main.js
   Scroll-triggered reveals. Pair with css/animations.css.
   Add .reveal-scroll, .reveal-left, .reveal-right or
   .draw-line to any element. Siblings that share a parent
   are staggered automatically — no extra classes needed.
   ============================================================ */

(function () {
  'use strict';

  var SELECTOR = '.reveal-scroll, .reveal-left, .reveal-right, .draw-line';
  var STAGGER_MS = 90;   /* delay between siblings */
  var STAGGER_CAP = 450; /* never wait longer than this */

  var reducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var els = document.querySelectorAll(SELECTOR);
  if (!els.length) return;

  /* No observer support or reduced motion: show everything */
  if (reducedMotion || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  /* Stagger siblings: each element's delay is based on its
     position among reveal elements sharing the same parent */
  els.forEach(function (el) {
    var siblings = el.parentElement
      ? el.parentElement.querySelectorAll(':scope > ' + SELECTOR.split(', ').join(', :scope > '))
      : [el];
    var index = Array.prototype.indexOf.call(siblings, el);
    if (index > 0) {
      var delay = Math.min(index * STAGGER_MS, STAGGER_CAP);
      el.style.setProperty('--reveal-delay', (delay / 1000) + 's');
    }
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  els.forEach(function (el) { io.observe(el); });
})();
