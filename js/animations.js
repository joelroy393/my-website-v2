/**
 * animations.js
 * Scroll-triggered fade-in reveal for cards, sections, blog rows.
 * Uses IntersectionObserver — no dependencies.
 */

(function () {

  // Elements to animate in
  const SELECTORS = [
    '.card',
    '.skill-card',
    '.blog-card',
    '.stat-bubble',
    '.section-title',
    '.section-sub',
    '.ctf-banner',
    '.about-wrap',
    '.contact-form',
  ];

  // Base hidden state injected via JS so CSS still works without JS
  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Tag every matching element
  document.querySelectorAll(SELECTORS.join(', ')).forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger cards in a grid
    if (el.classList.contains('card') || el.classList.contains('skill-card')) {
      el.style.transitionDelay = `${(i % 6) * 0.07}s`;
    }
  });

  // Observe and reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

})();
