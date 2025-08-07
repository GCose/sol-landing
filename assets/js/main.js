/**=================== 
 * Navigation Scroll 
 ====================*/
window.addEventListener(
  "scroll",
  () => {
    const nav = document.querySelector(".nav__container");
    if (window.scrollY > 100) {
      nav.style.background = "rgba(11, 9, 6, 0.95)";
      nav.style.mixBlendMode = "normal";
    } else {
      nav.style.background = "transparent";
      nav.style.mixBlendMode = "difference";
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
