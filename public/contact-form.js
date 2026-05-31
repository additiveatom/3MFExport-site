(function () {
  var form = document.getElementById('tmf-contact-form');
  if (!form) return;
  var status = form.querySelector('.tmf-contact-status');
  var button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Sending…';
    status.className = 'tmf-contact-status tmf-contact-status--pending';
    button.disabled = true;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        }).catch(function () {
          return { ok: res.ok, data: {} };
        });
      })
      .then(function (result) {
        if (result.ok && result.data.success) {
          form.reset();
          if (window.hcaptcha && typeof window.hcaptcha.reset === 'function') {
            try { window.hcaptcha.reset(); } catch (e) { /* widget not rendered yet */ }
          }
          status.textContent = 'Sent. We\'ll reply by email — usually within a couple business days.';
          status.className = 'tmf-contact-status tmf-contact-status--success';
        } else {
          status.textContent =
            (result.data && result.data.message) ||
            'Something went wrong sending the message. Please try again, or reach us via the Discord channel above.';
          status.className = 'tmf-contact-status tmf-contact-status--error';
        }
      })
      .catch(function () {
        status.textContent = 'Network error. Please try again, or reach us via the Discord channel above.';
        status.className = 'tmf-contact-status tmf-contact-status--error';
      })
      .finally(function () {
        button.disabled = false;
      });
  });
})();
