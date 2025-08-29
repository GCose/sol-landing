/**=================== 
 * Navigation Scroll 
 ====================*/
window.addEventListener(
  "scroll",
  () => {
    const nav = document.querySelector(".nav__container");
    if (window.scrollY > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  },
  { passive: true }
);

/**======================== 
* Fullscreen Menu Toggle 
=========================*/
const navToggle = document.getElementById("nav-toggle");
const fullscreenMenu = document.getElementById("fullscreen-menu");
const menuClose = document.getElementById("menu-close");
const menuLinks = document.querySelectorAll(".fullscreen-menu__link");

// Open menu
navToggle?.addEventListener("click", () => {
  navToggle.classList.add("active");
  fullscreenMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close menu
menuClose?.addEventListener("click", () => {
  closeMenu();
});

// Close menu when clicking on links
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Close menu function
function closeMenu() {
  navToggle.classList.remove("active");
  fullscreenMenu.classList.remove("active");
  document.body.style.overflow = "";
}

// Close menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && fullscreenMenu.classList.contains("active")) {
    closeMenu();
  }
});

/**=================== 
 * Smooth Scroll CTA 
 ====================*/
document.getElementById("hero-cta")?.addEventListener("click", () => {
  const nextSection =
    document.querySelector(".hero__section").nextElementSibling;
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
});

/**=========================
 * SCROLLREVEAL ANIMATIONS
 ==========================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 1000,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  reset: false,
  viewFactor: 0.2,
});

/**===============
 * MOBILE CHECK
 ================*/
const isMobile = window.innerWidth <= 768;

/**===============
 * HERO SECTION
 ================*/
sr.reveal(".hero__title--main", {
  origin: "left",
  interval: 150,
  delay: isMobile ? 100 : 200,
});
sr.reveal(".hero__part-image", {
  origin: "right",
  distance: "80px",
  delay: isMobile ? 200 : 800,
});
sr.reveal(".hero__subtitle--line1", {
  origin: "left",
  interval: 150,
  delay: isMobile ? 300 : 700,
});
sr.reveal(".hero__description", {
  origin: "left",
  delay: isMobile ? 400 : 600,
});
sr.reveal(".hero__features", {
  origin: "left",
  delay: isMobile ? 500 : 700,
});
sr.reveal(".hero__cta-section", {
  origin: "left",
  delay: isMobile ? 600 : 800,
});

/**===============
 * SECTION TITLES
 ================*/
sr.reveal(".intro__headline", {
  origin: "left",
  interval: 150,
  delay: isMobile ? 100 : 200,
});
sr.reveal(".why__headline, .highlights__headline", {
  origin: "left",
  interval: 150,
  delay: isMobile ? 100 : 200,
});
sr.reveal(".process__headline, .promise__headline", {
  origin: "left",
  interval: 150,
  delay: isMobile ? 100 : 200,
});
sr.reveal(".testimonials__headline, .promise__quote-text", {
  origin: "left",
  interval: 150,
  delay: isMobile ? 100 : 200,
});
sr.reveal(".contact__title", {
  origin: "left",
  interval: 150,
  delay: isMobile ? 100 : 200,
});
sr.reveal(".cta__headline", {
  origin: "left",
  interval: 150,
  delay: isMobile ? 100 : 200,
});

/**===============
 * INTRO SECTION
 ================*/
sr.reveal(".intro__body", {
  origin: "left",
  delay: isMobile ? 200 : 600,
});
sr.reveal(".intro__feature", {
  origin: "left",
  interval: 200,
  delay: isMobile ? 300 : 700,
});
sr.reveal(".intro__image", {
  origin: "bottom",
  distance: "40px",
  delay: isMobile ? 400 : 800,
});

/**===============
 * PROMISE SECTION
 ================*/
sr.reveal(".promise__details", {
  origin: "left",
  delay: isMobile ? 100 : 200,
});
sr.reveal(".promise__feature", {
  origin: "left",
  interval: 200,
  delay: isMobile ? 200 : 400,
});
sr.reveal(".promise__visual", {
  origin: "right",
  distance: "80px",
  delay: isMobile ? 300 : 500,
});

/**===================
 * HIGHLIGHTS SECTION
 ====================*/
sr.reveal(".highlights__product--left .highlights__product-content", {
  origin: "left",
  delay: isMobile ? 100 : 200,
});
sr.reveal(".highlights__product--left .highlights__product-image", {
  origin: "right",
  distance: "80px",
  delay: isMobile ? 200 : 800,
});
sr.reveal(".highlights__product--right .highlights__product-content", {
  origin: "right",
  delay: isMobile ? 100 : 200,
});
sr.reveal(".highlights__product--right .highlights__product-image", {
  origin: "left",
  distance: "80px",
  delay: isMobile ? 200 : 800,
});

/**===============
 * WHY SECTION
 ================*/
sr.reveal(".why__image-wrapper", {
  origin: "bottom",
  distance: "40px",
  delay: isMobile ? 100 : 200,
});
sr.reveal(".why__body", {
  origin: "left",
  delay: isMobile ? 200 : 800,
});
sr.reveal(".why__feature-item", {
  origin: "left",
  interval: 200,
  delay: isMobile ? 300 : 1400,
});

/**===============
 * PROCESS SECTION
 ================*/
sr.reveal(".process__step--left .process__step-content", {
  origin: "left",
  delay: isMobile ? 100 : 200,
});
sr.reveal(".process__step--left .process__step-visual", {
  origin: "right",
  distance: "80px",
  delay: isMobile ? 200 : 800,
});
sr.reveal(".process__step--right .process__step-content", {
  origin: "right",
  delay: isMobile ? 100 : 200,
});
sr.reveal(".process__step--right .process__step-visual", {
  origin: "left",
  distance: "80px",
  delay: isMobile ? 200 : 800,
});

/**===============
 * TESTIMONIALS SECTION
 ================*/
sr.reveal(".testimonials__card", {
  origin: "bottom",
  interval: 300,
  delay: isMobile ? 100 : 200,
});

/**===============
 * FAQ SECTION
 ================*/
sr.reveal(".faq__item", {
  origin: "bottom",
  interval: 200,
  delay: isMobile ? 100 : 200,
});

/**===============
 * CTA SECTION
 ================*/
sr.reveal(".cta__image", {
  origin: "right",
  distance: "80px",
  delay: isMobile ? 100 : 200,
});
