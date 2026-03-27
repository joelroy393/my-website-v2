/**
 * blobs.js
 * Subtle mouse-parallax on the background blobs.
 * Runs only on non-touch devices to avoid jank on mobile.
 */

(function () {
  const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches;
  if (isTouchDevice()) return;

  const blobs = document.querySelectorAll('.blob');
  if (!blobs.length) return;

  // Each blob gets a different parallax depth
  const depths = [0.012, 0.020, 0.008, 0.016];

  let mouseX = window.innerWidth  / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function tick() {
    currentX = lerp(currentX, mouseX, 0.04);
    currentY = lerp(currentY, mouseY, 0.04);

    const cx = currentX - window.innerWidth  / 2;
    const cy = currentY - window.innerHeight / 2;

    blobs.forEach((blob, i) => {
      const d = depths[i] || 0.01;
      blob.style.transform = `translate(${cx * d}px, ${cy * d}px)`;
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
