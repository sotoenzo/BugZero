// Funcionalidad del Modal para "Ver imagen en grande"
const modal = document.getElementById('imageModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');

function openModal(titleText) {
    modalTitle.textContent = titleText;
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

closeModalBtn.addEventListener('click', closeModal);

// Cerrar al hacer clic fuera del contenido del modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Cerrar con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Mensaje de consola para verificar carga correcta
console.log("BugZero - Metodologías Ágiles cargado correctamente.");