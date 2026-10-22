const menuBtn = document.getElementById('menuBtn') || document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const sideMenu = document.getElementById('sideMenu') || document.querySelector('.side-menu');
const overlay = document.getElementById('overlay') || document.querySelector('.overlay');
const methodologyToggle = document.getElementById('methodologyToggle');
const methodologySubmenu = document.getElementById('methodologySubmenu');

function setMenuOpen(isOpen) {
    if (!menuBtn) return;
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');

    if (sideMenu) {
        sideMenu.classList.toggle('open', isOpen);
        sideMenu.setAttribute('aria-hidden', String(!isOpen));
    }

    if (overlay) {
        overlay.classList.toggle('show', isOpen);
        overlay.setAttribute('aria-hidden', String(!isOpen));
    }

    document.body.classList.toggle('menu-open', isOpen);
}

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
        setMenuOpen(!isOpen);
    });
}
if (menuClose) {
    menuClose.addEventListener('click', () => setMenuOpen(false));
}
if (overlay) {
    overlay.addEventListener('click', () => setMenuOpen(false));
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
});

document.querySelectorAll('.side-link:not(#methodologyToggle)').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
});

if (methodologyToggle && methodologySubmenu) {
    methodologyToggle.addEventListener('click', () => {
        const isExpanded = methodologyToggle.getAttribute('aria-expanded') === 'true';
        methodologyToggle.setAttribute('aria-expanded', String(!isExpanded));
        methodologySubmenu.hidden = isExpanded;
    });
}

if (methodologySubmenu) {
    methodologySubmenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });
}

const modal = document.getElementById('imageModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');

function openModal(titleText) {
    if (!modal || !modalTitle) return;
    modalTitle.textContent = titleText;
    modal.classList.add('active');
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

console.log('BugZero - Metodologías Ágiles cargado correctamente.');