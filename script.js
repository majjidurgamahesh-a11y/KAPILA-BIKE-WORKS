/* ============================================
   KAPILA BIKE WORKS — Interactions
============================================ */

// Sticky navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Scroll reveal animations
const revealEls = document.querySelectorAll('.section, .card, .g-item, .review');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Contact form
function handleForm(e) {
  e.preventDefault();
  alert("Thank you! We'll contact you shortly. 🏍️");
  e.target.reset();
}

// Auto year in footer
document.getElementById('year').textContent = new Date().getFullYear();
