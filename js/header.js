const headerBurger = document.querySelector(".header__burger-button");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active");
  headerNav.classList.toggle("active");
});

headerNav.addEventListener("click", (event) => {
  if (event.currentTarget !== event.target) {
    headerBurger.classList.remove("active");
    headerNav.classList.remove("active");
  }
});
