window.addEventListener("scroll", () => {
  document
    .querySelector(".navigation")
    .classList.toggle("active", window.scrollY > 0);
});

const navTrigger = document.querySelector(".burger");
const nav = document.querySelector(".navigation nav");
const navTimes = document.querySelector(".nav--close ");

navTrigger.addEventListener("click", () => {
  nav.classList.add("active");
});
navTimes.addEventListener("click", () => {
  nav.classList.remove("active");
});

gsap.registerPlugin(ScrollTrigger);

const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top 60%",
  },
});

footerTl.from(".footer-anim", {
  opacity: 0,
  y: "30px",
  stagger: 0.3,
});
