// --- JAVASCRIPT BÁSICO Y ENTENDIBLE ---

const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const siteMenu = document.getElementById('siteMenu');
const menuOverlay = document.getElementById('menuOverlay');
const methodologyToggle = document.getElementById('methodologyToggle');
const methodologySubmenu = document.getElementById('methodologySubmenu');

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
methodologyToggle.addEventListener('click', () => {
    const isExpanded = methodologyToggle.getAttribute('aria-expanded') === 'true';
    methodologyToggle.setAttribute('aria-expanded', String(!isExpanded));
    methodologySubmenu.hidden = isExpanded;
});
siteMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
});

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.model-panel');

function activateTab(tab) {
    tabs.forEach(t => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', String(isActive));
        t.tabIndex = isActive ? 0 : -1;
    });
    panels.forEach(panel => {
        panel.hidden = panel.id !== tab.dataset.target;
    });
}

function activateTabFromHash() {
    const panel = document.getElementById(window.location.hash.slice(1));
    if (!panel || !panel.matches('.model-panel')) return;

    const tab = document.querySelector(`.tab[data-target="${panel.id}"]`);
    if (tab) {
        activateTab(tab);
        panel.scrollIntoView({ block: 'start' });
    }
}

activateTabFromHash();
if (!window.location.hash) activateTab(tabs[0]);
window.addEventListener('hashchange', activateTabFromHash);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab);
        history.replaceState(null, '', `#${tab.dataset.target}`);
    });
});