// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation Trigger
window.addEventListener('scroll', () => {
  document.querySelectorAll('.feature-box').forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < window.innerHeight * 0.8) {
      box.style.opacity = '1';
      box.style.transform = 'translateY(0)';
    }
  });
});

 // Header Scroll Effect
 window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate-pop-in');
            }
        });
    });

    document.querySelectorAll('.service-card').forEach((el) => {
        observer.observe(el);
    });