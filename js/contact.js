/**
 * Updated contact form with Web3Forms
 * Works with your existing HTML (id="contactForm")
 */

(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  if (!submitBtn) return;

  // Create message element for nice feedback
  let messageEl = form.querySelector('.form-message');
  if (!messageEl) {
    messageEl = document.createElement('div');
    messageEl.className = 'form-message';
    form.appendChild(messageEl);
  }

  function showMessage(text, type = 'success') {
    messageEl.textContent = text;
    messageEl.className = `form-message ${type}`;
    
    // Auto hide after 6 seconds
    setTimeout(() => {
      messageEl.className = 'form-message';
    }, 6000);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    
    // Required by Web3Forms
    formData.append("access_key", "24cbc538-2cd8-4e2e-b0cf-a5cdd32b19c9");

    // Optional but recommended
    formData.append("subject", formData.get("subject") || "New Message from joelroy393.com");
    formData.append("from_name", "Joel Roy Website");   // Appears in your email

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showMessage("Message sent successfully! I'll get back to you soon ✨", "success");
        form.reset();
      } else {
        showMessage(data.message || "Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      console.error(error);
      showMessage("Network error. You can email me directly at Joelroy393@gmail.com", "error");
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
})();