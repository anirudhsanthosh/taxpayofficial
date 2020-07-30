window.onload = () => {};

const scrolling = () => {
  const heroSection = document.querySelector(".hero-section");
  const nav = document.querySelector("nav");
  const hero = document.querySelector(".hero");
  const screenHeight = window.innerHeight;

  if (heroSection) {
    if (this.scrollY > this.innerHeight / 8) {
      heroSection.classList.add("active");
      nav.classList.remove("disabled");
    } else {
      heroSection.classList.remove("active");
      nav.classList.add("disabled");
    }
  }
  if (hero) {
    if (hero.getBoundingClientRect().top < screenHeight) {
      document.querySelector(".tagline").classList.add("fade-in-left");
      document.querySelector(".hero-image").classList.add("fade-in-right");
    } else {
      document.querySelector(".tagline").classList.remove("fade-in-left");
      document.querySelector(".hero-image").classList.remove("fade-in-right");
    }
  }
};

document.querySelector(".toggle").addEventListener("click", function () {
  const nav = document.querySelector("nav");

  nav.className.indexOf("show") === -1
    ? nav.classList.add("show")
    : nav.classList.remove("show");
});
window.onscroll = scrolling;
