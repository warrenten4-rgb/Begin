const journeyLink = document.querySelector('.button[href="#journey"]');
const journeyStatus = document.querySelector('#journey-status');

journeyLink?.addEventListener('click', () => {
  if (journeyStatus) {
    journeyStatus.textContent = 'First step: learning the basics. Keep going.';
  }
});

// Reveal page elements as they enter the viewport while scrolling.
const revealElements = document.querySelectorAll(
  '.hero > div, .section-head, .card, .quote, footer'
);

if ('IntersectionObserver' in window) {
  revealElements.forEach((element, index) => {
    element.classList.add('reveal-on-scroll');
    if (element.classList.contains('card')) {
      element.style.transitionDelay = `${(index % 3) * 100}ms`;
    }
  });

  document.body.classList.add('reveal-ready');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
}
