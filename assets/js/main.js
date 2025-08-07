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
