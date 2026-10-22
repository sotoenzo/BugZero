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
const illustrativeImage = document.getElementById('illustrativeImage');
const illustrativeImageButton = document.getElementById('illustrativeImageButton');
const imageLightbox = document.getElementById('imageLightbox');
const expandedIllustrativeImage = document.getElementById('expandedIllustrativeImage');
const imageLightboxClose = document.getElementById('imageLightboxClose');
const modelIllustrations = {
  cascada: {
    src: 'img/Ilustracion_modeloEnCascada.jpg',
    alt: 'Ilustración del modelo de cascada'
  },
  'modelo-v': {
    src: 'img/Ilustracion_modeloEnV.jpg',
    alt: 'Ilustración del modelo en V'
  },
  iterativo: {
    src: 'img/Ilustracion_modelo_It_Incre.jpg',
    alt: 'Ilustración del modelo iterativo e incremental'
  }
};

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
    const illustration = modelIllustrations[tab.dataset.target];
    if (illustrativeImage && illustration) {
      illustrativeImage.src = illustration.src;
      illustrativeImage.alt = illustration.alt;
      illustrativeImageButton.setAttribute('aria-label', `Ampliar ${illustration.alt.toLowerCase()}`);
    }
}

  if (illustrativeImageButton && imageLightbox && expandedIllustrativeImage) {
    illustrativeImageButton.addEventListener('click', () => {
      expandedIllustrativeImage.src = illustrativeImage.currentSrc || illustrativeImage.src;
      expandedIllustrativeImage.alt = illustrativeImage.alt;
      imageLightbox.showModal();
    });
  }

  if (imageLightboxClose && imageLightbox) {
    imageLightboxClose.addEventListener('click', () => imageLightbox.close());
    imageLightbox.addEventListener('click', event => {
      if (event.target === imageLightbox) imageLightbox.close();
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