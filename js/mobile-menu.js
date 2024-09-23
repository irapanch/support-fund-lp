const burger = document.querySelector(".header-mobile-menu-btn");
const mobileModal = document.querySelector(".mobile-menu-section");
const closeModal = document.querySelectorAll(".js-close-mobile-menu");

burger.addEventListener("click", openModalMenu);
closeModal.forEach((button) => {
  button.addEventListener("click", closeModalMenu);
});

function openModalMenu() {
  mobileModal.classList.add("js-mobile-menu-open");
  document.body.classList.add("no-scroll");
}

function closeModalMenu() {
  mobileModal.classList.remove("js-mobile-menu-open");
  document.body.classList.remove("no-scroll");
}

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileModal.classList.remove("js-mobile-menu-open");
  document.body.classList.remove("no-scroll");
});
