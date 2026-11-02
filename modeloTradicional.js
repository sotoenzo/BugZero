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