// --- JAVASCRIPT BÁSICO Y ENTENDIBLE ---

// Seleccionamos todas las pestañas de la sub-navegación
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Quitamos la clase 'active' de todas las solapas
        tabs.forEach(t => t.classList.remove('active'));
        
        // Se la agregamos únicamente a la solapa que el usuario presionó
        tab.classList.add('active');
        
        // Identificador de la pestaña seleccionada
        const selectedTab = tab.getAttribute('data-target');
        console.log("Cambiando dinámicamente a la sección:", selectedTab);
    });
});

// Seleccionamos todos los botones de "Ver imagen en grande"
const zoomButtons = document.querySelectorAll('.btn-large-img');

zoomButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        alert(`Abriendo vista ampliada de la tarjeta #${index + 1}`);
    });
});