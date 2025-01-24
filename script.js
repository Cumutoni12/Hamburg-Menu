const hambarg = document.querySelector(".hambarg");
const navMenu = document.querySelector(".nav-menu");

hambarg.addEventListener("click", () => {
  hambarg.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    hambarg.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
