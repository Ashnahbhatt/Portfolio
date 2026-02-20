/* ===== Mobile Menu ===== */
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ===== Navbar Scroll Effect ===== */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 40) {
    navbar.style.background = "rgba(255,255,255,0.9)";
    navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,0.12)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.65)";
    navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
  }
});

/* ===== Scroll Reveal Animation ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===== Testimonial Slider ===== */
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial() {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");
  index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 3500);
showTestimonial();
/* tap flip for mobile */
document.querySelectorAll(".skill-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    card.querySelector(".skill-inner").classList.toggle("flip");
  });
});
/* tap flip for mobile */
document.querySelectorAll(".skill-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    card.querySelector(".skill-inner").classList.toggle("flip");
  });
});
