// --- JAVASCRIPT BÁSICO Y ENTENDIBLE ---

const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const methodologyToggle = document.getElementById('methodologyToggle');
const methodologySubmenu = document.getElementById('methodologySubmenu');

function setMenuOpen(isOpen) {
    if (!sideMenu || !overlay || !menuToggle) return;
    sideMenu.classList.toggle('open', isOpen);
    overlay.classList.toggle('show', isOpen);
    sideMenu.setAttribute('aria-hidden', String(!isOpen));
    overlay.setAttribute('aria-hidden', String(!isOpen));
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('menu-open', isOpen);
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
      setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
}
if (menuClose) {
  menuClose.addEventListener('click', () => setMenuOpen(false));
}
if (overlay) {
  overlay.addEventListener('click', () => setMenuOpen(false));
}
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenuOpen(false);
});
if (methodologyToggle && methodologySubmenu) {
  methodologyToggle.addEventListener('click', () => {
      const isExpanded = methodologyToggle.getAttribute('aria-expanded') === 'true';
      methodologyToggle.setAttribute('aria-expanded', String(!isExpanded));
      methodologySubmenu.hidden = isExpanded;
  });
}
if (sideMenu) {
  sideMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenuOpen(false));
  });
}

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.model-panel');

function activateTab(tab) {
    if (!tab || !tabs.length) return;
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

if (tabs.length) {
  activateTabFromHash();
  if (!window.location.hash) activateTab(tabs[0]);
  window.addEventListener('hashchange', activateTabFromHash);

  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          activateTab(tab);
          history.replaceState(null, '', `#${tab.dataset.target}`);
      });
  });
}