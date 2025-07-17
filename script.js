// ✅ Updated script.js with visibility fix

// Loader removal and reveal sections
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader-wrapper');

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';

      // ✅ Ensure all animated elements are visible after load
      document.querySelectorAll('.section-container, .details-container, .project-img, article')
        .forEach(el => el.classList.add('visible'));

    }, 500);
  }, 1000);
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.section-container, .details-container, .project-img, article');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 0.9;

    if (elementPosition < screenPosition) {
      element.classList.add('visible');
    }
  });
};

// Set initial state for animation
document.querySelectorAll('.section-container, .details-container, .project-img, article').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when clicking on a link
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});

// Initialize animations on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
