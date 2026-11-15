const journeyLink = document.querySelector('.button[href="#journey"]');
const journeyStatus = document.querySelector('#journey-status');

journeyLink?.addEventListener('click', () => {
  if (journeyStatus) {
    journeyStatus.textContent = 'First step: learning the basics. Keep going.';
  }
});
