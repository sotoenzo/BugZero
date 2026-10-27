const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const developmentToggle = document.getElementById("developmentToggle");
const developmentSubmenu = document.getElementById("developmentSubmenu");
const interactiveToggle = document.getElementById("interactiveToggle");
const interactiveSubmenu = document.getElementById("interactiveSubmenu");
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

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
    if (menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
    } else {
      openMenu();
    }
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

document.querySelectorAll(".side-link:not(.submenu-trigger)").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

[[developmentToggle, developmentSubmenu], [interactiveToggle, interactiveSubmenu]].forEach(([toggle, submenu]) => {
  if (!toggle || !submenu) return;
  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    submenu.hidden = isExpanded;
  });
});

document.querySelectorAll(".side-submenu").forEach((submenu) => {
  submenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

if (contactForm && formSuccess) {
  contactForm.addEventListener("input", () => {
    formSuccess.hidden = true;
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    formSuccess.hidden = false;
    formSuccess.focus();
  });
}
