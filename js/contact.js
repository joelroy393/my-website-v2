/**
 * contact.js
 * Basic contact form validation + submission feedback.
 *
 * To actually send emails, swap the submitForm() function with
 * a real service like Formspree, EmailJS, or your own backend.
 *
 * Formspree example:
 *   1. Sign up at https://formspree.io
 *   2. Create a form and copy the endpoint URL
 *   3. Replace FORMSPREE_URL below with your endpoint
 */

(function () {
  const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'; // ← replace this

  const form = document.getElementById('contactForm');
  if (!form) return;

  const messageEl = document.createElement('div');
  messageEl.className = 'form-message';
  form.appendChild(messageEl);

  // ── Validation helpers ────────────────────────────────────
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = `form-message ${type}`;
  }

  function clearMessage() {
    messageEl.className = 'form-message';
  }

  // ── Submit ───────────────────────────────────────────────
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessage();

    const name    = form.querySelector('[name="name"]').value.trim();
    const email   = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    // Client-side validation
    if (!name) {
      showMessage('Please enter your name.', 'error');
      return;
    }
    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }
    if (!message) {
      showMessage('Please write a message.', 'error');
      return;
    }

    const btn = form.querySelector('.submit-btn');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      // ── Option A: Formspree ──────────────────────────────
      // Uncomment and replace URL once you have a Formspree account:
      //
      // const res = await fetch(FORMSPREE_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      //   body: JSON.stringify({ name, email, subject: form.querySelector('[name="subject"]').value, message }),
      // });
      // if (!res.ok) throw new Error('Server error');

      // ── Option B: Demo mode (no backend) ─────────────────
      await new Promise(resolve => setTimeout(resolve, 800));

      showMessage('Message sent! I\'ll get back to you soon ✨', 'success');
      form.reset();
    } catch (err) {
      showMessage('Something went wrong. Try emailing me directly at Joelroy393@gmail.com', 'error');
    } finally {
      btn.textContent = 'Send it over ✨';
      btn.disabled = false;
    }
  });

})();
