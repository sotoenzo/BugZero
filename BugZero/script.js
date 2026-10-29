const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const qualityToggle = document.getElementById('qualityToggle');
const qualitySubmenu = document.getElementById('qualitySubmenu');
const developmentToggle = document.getElementById('developmentToggle');
const developmentSubmenu = document.getElementById('developmentSubmenu');
const methodsToggle = document.getElementById('methodsToggle');
const methodsSubmenu = document.getElementById('methodsSubmenu');
const resourceToggle = document.getElementById('resourceToggle');
const resourceSubmenu = document.getElementById('resourceSubmenu');
const interactiveToggle = document.getElementById('interactiveToggle');
const interactiveSubmenu = document.getElementById('interactiveSubmenu');

function openMenu(){
  if (!sideMenu || !overlay || !menuToggle) return;
  sideMenu.classList.add('open');
  overlay.classList.add('show');
  sideMenu.setAttribute('aria-hidden', 'false');
  overlay.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Cerrar menú');
  document.body.classList.add('menu-open');
}

function closeMenu(){
  if (!sideMenu || !overlay || !menuToggle) return;
  sideMenu.classList.remove('open');
  overlay.classList.remove('show');
  sideMenu.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
  document.body.classList.remove('menu-open');
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    if (menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  });
}
if (menuClose) {
  menuClose.addEventListener('click', closeMenu);
}
if (overlay) {
  overlay.addEventListener('click', closeMenu);
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

[[qualityToggle, qualitySubmenu], [developmentToggle, developmentSubmenu], [methodsToggle, methodsSubmenu], [resourceToggle, resourceSubmenu], [interactiveToggle, interactiveSubmenu]].forEach(([toggle, submenu]) => {
  if (!toggle || !submenu) return;
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    submenu.hidden = isExpanded;
  });
});

// close menu + mark active link on nav click
const sideLinks = document.querySelectorAll('.side-link:not(.submenu-trigger)');
sideLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.side-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    closeMenu();
  });
});
document.querySelectorAll('.side-submenu').forEach(submenu => {
  submenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});

// highlight active section link on scroll
const sections = ['inicio','calidad','desarrollo','metodologias','recursos','nosotros','contacto']
  .map(id => document.getElementById(id)).filter(Boolean);

const linkMap = {};
document.querySelectorAll('.side-link').forEach(l => {
  const href = l.getAttribute('href');
  if (href && href.startsWith('#')) linkMap[href.slice(1)] = l;
});

if (sections.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (linkMap[id]) {
          document.querySelectorAll('.side-link').forEach(l => l.classList.remove('active'));
          linkMap[id].classList.add('active');
        }
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
}
