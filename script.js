const navBtn = document.querySelector(".hamburger");
const mobileNavBar = document.querySelector(".mobile-nav-bar");
navBtn.addEventListener("click", navAnimation);

function navAnimation() {
  navBtn.classList.add("lines");
  mobileNavBar.classList.add("hamburger-animate");
}
