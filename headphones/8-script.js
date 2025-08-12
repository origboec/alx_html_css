document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById('primary-nav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    nav.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu after clicking a link (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Reset state when resizing above 480px (prevents stuck states)
  const mq = window.matchMedia('(min-width: 481px)');
  mq.addEventListener('change', (e) => {
    if (e.matches) {
      hamburger.classList.remove('is-open');
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});

