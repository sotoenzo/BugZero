const sdlcSteps = [
    {
        title: 'Requisitos',
        description: 'Se identifican y documentan las necesidades, objetivos y restricciones del producto. Una buena definición de requisitos alinea al equipo y reduce cambios costosos durante el desarrollo.'
    },
    {
        title: 'Diseño',
        description: 'Se define cómo funcionará la solución: su arquitectura, componentes, datos e interfaz. El diseño sirve como guía para construir un producto coherente y sostenible.'
    },
    {
        title: 'Desarrollo',
        description: 'El equipo transforma el diseño en código, implementa las funcionalidades acordadas y mantiene el trabajo alineado con los estándares de calidad del proyecto.'
    },
    {
        title: 'Pruebas',
        description: 'Se verifica que el software cumpla los requisitos y se detectan defectos antes de su entrega. Las pruebas pueden abarcar componentes, integraciones y el producto completo.'
    },
    {
        title: 'Despliegue',
        description: 'La versión validada se prepara y publica en el entorno donde será utilizada. La planificación del despliegue ayuda a reducir interrupciones y facilita una puesta en marcha segura.'
    },
    {
        title: 'Mantenimiento',
        description: 'Luego de la entrega, el software se supervisa y actualiza para corregir problemas, responder a nuevas necesidades y conservar su seguridad y funcionamiento.'
    }
];

const sdlcButtons = Array.from(document.querySelectorAll('.sdlc-step-button'));
const sdlcDetailNumber = document.getElementById('sdlc-detail-number');
const sdlcDetailTitle = document.getElementById('sdlc-detail-title');
const sdlcDetailDescription = document.getElementById('sdlc-detail-description');

function activateSdlcStep(index) {
    const step = sdlcSteps[index];
    if (!step || !sdlcDetailNumber || !sdlcDetailTitle || !sdlcDetailDescription) return;

    sdlcButtons.forEach((button, buttonIndex) => {
        const isActive = buttonIndex === index;
        button.closest('.sdlc-step').classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    sdlcDetailNumber.textContent = `ETAPA ${index + 1}`;
    sdlcDetailTitle.textContent = step.title;
    sdlcDetailDescription.textContent = step.description;
}

sdlcButtons.forEach((button) => {
    button.addEventListener('click', () => {
        activateSdlcStep(Number(button.dataset.sdlcStep));
    });
});

if ('IntersectionObserver' in window && window.matchMedia('(max-width: 768px)').matches) {
    const observer = new IntersectionObserver((entries) => {
        const visibleStep = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => {
                const viewportCenter = window.innerHeight / 2;
                const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2;
                const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2;
                return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
            })[0];

        if (visibleStep) {
            const button = visibleStep.target.querySelector('.sdlc-step-button');
            activateSdlcStep(Number(button.dataset.sdlcStep));
        }
    }, {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
    });

    document.querySelectorAll('.sdlc-step').forEach((step) => observer.observe(step));
}
