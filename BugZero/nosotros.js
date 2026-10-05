const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  sideMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Cerrar menú");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
  sideMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  menuToggle.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
});
menuClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
document.querySelectorAll(".side-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
