// --- JAVASCRIPT BÁSICO Y ENTENDIBLE ---

const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const siteMenu = document.getElementById('siteMenu');
const menuOverlay = document.getElementById('menuOverlay');

function setMenuOpen(isOpen) {
    siteMenu.classList.toggle('open', isOpen);
    menuOverlay.classList.toggle('open', isOpen);
    siteMenu.setAttribute('aria-hidden', String(!isOpen));
    menuOverlay.setAttribute('aria-hidden', String(!isOpen));
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
}

menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});
menuClose.addEventListener('click', () => setMenuOpen(false));
menuOverlay.addEventListener('click', () => setMenuOpen(false));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenuOpen(false);
});
siteMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
});

// Seleccionamos todas las pestañas de la sub-navegación
const tabs = document.querySelectorAll('.tab');

function activateTab(tab) {
    tabs.forEach(t => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-pressed', String(isActive));
    });
}

const initialTab = document.getElementById(window.location.hash.slice(1));
if (initialTab && initialTab.matches('.tab')) {
    activateTab(initialTab);
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab);
        history.replaceState(null, '', `#${tab.id}`);
    });
});

// Seleccionamos todos los botones de "Ver imagen en grande"
const zoomButtons = document.querySelectorAll('.btn-large-img');

zoomButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        alert(`Abriendo vista ampliada de la tarjeta #${index + 1}`);
    });
});