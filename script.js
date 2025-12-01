document.addEventListener('DOMContentLoaded', () => {
  const countElement = document.querySelector('.testimonial-count strong');
  let currentCount = 0;
  const targetCount = 10000;
  
  function animateCount() {
    if (currentCount < targetCount) {
      currentCount += 100;
      countElement.textContent = currentCount.toLocaleString();
      setTimeout(animateCount, 10);
    }
  }
  
  animateCount();
});
