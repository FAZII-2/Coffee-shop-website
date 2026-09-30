/* ================================================================
   BREWED & BEYOND — CONTACT FORM
   contact.js — Validation · Submission · UX Feedback
   ================================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const form        = document.getElementById('reservation-form-el');
  const successMsg  = document.getElementById('form-success');
  if (!form) return;

  // ── Validation Rules ───────────────────────────────────────────
  const validators = {
    name: {
      validate: v => v.trim().length >= 2,
      message:  'Please enter your full name (at least 2 characters).'
    },
    email: {
      validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      message:  'Please enter a valid email address.'
    },
    date: {
      validate: v => {
        if (!v) return false;
        const selected = new Date(v);
        const today    = new Date();
        today.setHours(0, 0, 0, 0);
        return selected >= today;
      },
      message: 'Please select a date from today or later.'
    },
    time: {
      validate: v => v !== '',
      message:  'Please select a preferred time.'
    },
    guests: {
      validate: v => {
        const n = parseInt(v, 10);
        return !isNaN(n) && n >= 1 && n <= 20;
      },
      message: 'Please select the number of guests (1–20).'
    }
  };

  // ── Field Validation ───────────────────────────────────────────
  function validateField(name, value) {
    const rule = validators[name];
    if (!rule) return true;
    return rule.validate(value);
  }

  function showFieldError(fieldName, show) {
    const input    = form.querySelector(`[name="${fieldName}"]`);
    const errorMsg = form.querySelector(`#error-${fieldName}`);
    if (!input) return;
    if (show) {
      input.classList.add('error');
      if (errorMsg) errorMsg.classList.add('visible');
    } else {
      input.classList.remove('error');
      if (errorMsg) errorMsg.classList.remove('visible');
    }
  }

  // ── Real-time Validation (on blur) ────────────────────────────
  Object.keys(validators).forEach(fieldName => {
    const input = form.querySelector(`[name="${fieldName}"]`);
    if (!input) return;

    input.addEventListener('blur', () => {
      const isValid = validateField(fieldName, input.value);
      showFieldError(fieldName, !isValid);
    });

    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        const isValid = validateField(fieldName, input.value);
        showFieldError(fieldName, !isValid);
      }
    });
  });

  // ── Set min date for date input ────────────────────────────────
  const dateInput = form.querySelector('[name="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // ── Form Submit ────────────────────────────────────────────────
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isFormValid = true;

    // Validate all fields
    Object.keys(validators).forEach(fieldName => {
      const input = form.querySelector(`[name="${fieldName}"]`);
      if (!input) return;
      const isValid = validateField(fieldName, input.value);
      showFieldError(fieldName, !isValid);
      if (!isValid) isFormValid = false;
    });

    if (!isFormValid) {
      // Scroll to first error
      const firstError = form.querySelector('.form-input.error, .form-select.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    // Simulate API call (replace with real endpoint)
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Show success state
    form.style.opacity = '0';
    form.style.transform = 'scale(0.97)';
    form.style.transition = 'opacity 0.3s, transform 0.3s';

    setTimeout(() => {
      form.style.display = 'none';
      if (successMsg) {
        successMsg.classList.add('visible');
      }
    }, 350);

    // Reset button (in case user navigates back)
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });

});
