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

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log("BugZero - Metodologías Ágiles cargado correctamente.");