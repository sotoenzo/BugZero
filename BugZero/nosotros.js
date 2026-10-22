const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const methodologyToggle = document.getElementById("methodologyToggle");
const methodologySubmenu = document.getElementById("methodologySubmenu");

function openMenu() {
  if (!sideMenu || !overlay || !menuToggle) return;
  sideMenu.classList.add("open");
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  sideMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Cerrar menú");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  if (!sideMenu || !overlay || !menuToggle) return;
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
  sideMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  document.body.classList.remove("menu-open");
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
  });
}
if (menuClose) {
  menuClose.addEventListener("click", closeMenu);
}
if (overlay) {
  overlay.addEventListener("click", closeMenu);
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
document.querySelectorAll(".side-link:not(#methodologyToggle)").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

if (methodologyToggle && methodologySubmenu) {
  methodologyToggle.addEventListener("click", () => {
    const isExpanded = methodologyToggle.getAttribute("aria-expanded") === "true";
    methodologyToggle.setAttribute("aria-expanded", String(!isExpanded));
    methodologySubmenu.hidden = isExpanded;
  });
}

if (methodologySubmenu) {
  methodologySubmenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
