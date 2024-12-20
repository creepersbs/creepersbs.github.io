// Loading animation
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader-wrapper');
    
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1500);
  
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
  
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  });