const header = document.querySelector("#header");
const buttonNav = document.querySelector("#button-nav");
const navMenu = document.querySelector("#nav-menu");

document.addEventListener("DOMContentLoaded", () => {
  startApp();
});

function startApp() {
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const scrollSection = e.target.attributes.href.value;
      const section = document.querySelector(scrollSection);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}

buttonNav.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");

  if (!navMenu.classList.contains("hidden")) {
    header.style.height = "130rem";
  } else {
    header.style.height = "115rem";
  }
});
