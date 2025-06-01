const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  const isActive = sidebar.classList.toggle('active');
  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
