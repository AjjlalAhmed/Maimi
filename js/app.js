const navBar = document.getElementById("nav-bar");
const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
  if (navBar.classList.contains("toggle")) {
    navBar.classList.remove("toggle");
  } else {
    navBar.classList.add("toggle");
  }
});
