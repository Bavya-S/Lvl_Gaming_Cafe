// ===================== BOOKING / WHATSAPP FORM =====================
(function () {
  const WA_NUMBER = '919962270902';
  const form = document.getElementById('bookingForm');
  if (!form) return;
  const err = document.getElementById('bookError');
  const phoneEl = document.getElementById('bookPhone');

  function showError(msg) {
    err.textContent = msg; err.hidden = false;
    phoneEl.setAttribute('aria-invalid', 'true'); phoneEl.focus();
  }
  // Builds the exact WhatsApp message (same wording as before) and URL-encodes every part,
  // so names containing &, #, + or emoji can no longer truncate or corrupt the message.
  window.buildBookingUrl = function (v) {
    const msg = `Hello LVL Gaming Café! I'd like to book a slot.\n\nName: ${v.name || '(not provided)'}\nPhone: ${v.phone}\nConsole: ${v.console_ || 'Not specified'}\nPreferred Time: ${v.time || 'Flexible'}\n\nPlease confirm availability. Thank you!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const phone = phoneEl.value.trim();
    const digits = phone.replace(/\D/g, '');
    if (!digits) return showError('Please enter your phone number.');
    if (digits.length < 10) return showError('Please enter a valid phone number (at least 10 digits).');
    err.hidden = true; phoneEl.removeAttribute('aria-invalid');
    const url = window.buildBookingUrl({
      name: document.getElementById('bookName').value.trim(),
      phone,
      console_: document.getElementById('bookConsole').value,
      time: document.getElementById('bookTime').value.trim()
    });
    const w = window.open(url, '_blank', 'noopener,noreferrer');
    if (!w) window.location.href = url; // pop-up blocked → navigate in the same tab
  });
  phoneEl.addEventListener('input', () => { err.hidden = true; phoneEl.removeAttribute('aria-invalid'); });
})();
