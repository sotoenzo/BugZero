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

const agileMethods = {
    scrum: {
        name: 'Scrum',
        summary: 'Scrum es un marco de trabajo ágil e incremental diseñado para gestionar y desarrollar proyectos complejos. Se basa en entregas rápidas e iterativas llamadas Sprints (de 1 a 4 semanas), donde el equipo colabora activamente para adaptar el producto a las necesidades cambiantes del cliente de forma continua.',
        principios: [
            { title: 'Empirismo', icon: 'fa-flask', description: 'Las decisiones se apoyan en lo observado y aprendido durante el trabajo, no solo en predicciones iniciales.' },
            { title: 'Transparencia', icon: 'fa-eye', description: 'El trabajo, los avances y los obstáculos deben ser visibles para quienes realizan y reciben el producto.' },
            { title: 'Inspección', icon: 'fa-magnifying-glass-chart', description: 'El equipo revisa con frecuencia el progreso, el producto y la forma de trabajar para detectar desvíos.' },
            { title: 'Adaptación', icon: 'fa-arrows-rotate', description: 'Cuando una revisión muestra un problema o una oportunidad, se ajusta el plan o el trabajo cuanto antes.' },
            { title: 'Valores Scrum', icon: 'fa-heart', description: 'Compromiso, foco, apertura, respeto y coraje orientan las decisiones y la colaboración del equipo.' },
            { title: 'Autoorganización', icon: 'fa-people-group', description: 'Developers deciden cómo organizar el trabajo necesario para alcanzar el objetivo del Sprint.' }
        ],
        roles: [
            { title: 'Product Owner', icon: 'fa-compass', description: 'Maximiza el valor del producto y ordena el Product Backlog. Es una persona, no un comité.' },
            { title: 'Scrum Master', icon: 'fa-person-chalkboard', description: 'Ayuda a que Scrum se comprenda y aplique, y facilita la efectividad del equipo y de la organización.' },
            { title: 'Developers', icon: 'fa-code', description: 'Crean cada Sprint un Incremento utilizable y de calidad. El equipo reúne las habilidades necesarias para hacerlo.' }
        ],
        ceremonias: [
            { title: 'Sprint', icon: 'fa-calendar-days', description: 'Marco de tiempo fijo de un mes o menos en el que se crea un Incremento valioso y usable.' },
            { title: 'Sprint Planning', icon: 'fa-list-check', description: 'El equipo define por qué el Sprint es valioso, qué trabajo puede realizar y cómo lo llevará a cabo.' },
            { title: 'Daily Scrum', icon: 'fa-sun', description: 'Encuentro diario de 15 minutos para que Developers inspeccionen el avance hacia el Sprint Goal y ajusten su plan.' },
            { title: 'Sprint Review', icon: 'fa-people-arrows-left-right', description: 'El equipo y los interesados revisan el resultado del Sprint y conversan sobre los próximos pasos.' },
            { title: 'Sprint Retrospective', icon: 'fa-comments', description: 'El equipo identifica mejoras para elevar su calidad y efectividad en el siguiente Sprint.' }
        ],
        artefactos: [
            { title: 'Product Backlog', icon: 'fa-list-ul', description: 'Lista emergente y ordenada de lo necesario para mejorar el producto. Su compromiso es el Product Goal.' },
            { title: 'Sprint Backlog', icon: 'fa-list-check', description: 'Objetivo del Sprint, elementos elegidos del Product Backlog y plan para entregar el Incremento. Su compromiso es el Sprint Goal.' },
            { title: 'Incremento', icon: 'fa-cubes', description: 'Resultado integrado y usable que cumple la Definition of Done. Su compromiso es la Definition of Done.' }
        ]
    },
    kanban: {
        name: 'Kanban',
        summary: 'Kanban ayuda a gestionar y mejorar el flujo de trabajo. Se empieza con el proceso actual, se visualiza el trabajo y se introducen cambios evolutivos.',
        principios: [
            { title: 'Visualizar el flujo', icon: 'fa-table-columns', description: 'Un tablero muestra las etapas del trabajo y permite reconocer tareas, bloqueos y acumulaciones.' },
            { title: 'Limitar el WIP', icon: 'fa-gauge-high', description: 'Los límites de trabajo en curso reducen la sobrecarga y promueven terminar tareas antes de iniciar otras.' },
            { title: 'Gestionar el flujo', icon: 'fa-arrow-trend-right', description: 'Se observa cómo avanzan los elementos para identificar esperas y mejorar la entrega de valor.' },
            { title: 'Hacer explícitas las políticas', icon: 'fa-clipboard-check', description: 'Los criterios para iniciar, mover y finalizar el trabajo se acuerdan y quedan visibles para todos.' },
            { title: 'Crear ciclos de feedback', icon: 'fa-comments', description: 'Revisiones periódicas permiten coordinar la demanda, la entrega y la mejora del servicio.' },
            { title: 'Mejorar colaborativamente', icon: 'fa-people-group', description: 'Los cambios se prueban de forma evolutiva, usando datos y colaboración en todos los niveles.' }
        ],
        roles: [
            { title: 'No prescribe roles', icon: 'fa-people-group', description: 'Kanban puede aplicarse a los equipos y responsabilidades existentes; no exige cambiar la estructura organizativa.' },
            { title: 'Service Request Manager', icon: 'fa-inbox', description: 'Rol opcional del método Kanban que ayuda a entender y ordenar las solicitudes de trabajo.' },
            { title: 'Service Delivery Manager', icon: 'fa-truck-fast', description: 'Rol opcional que facilita el flujo y la entrega del servicio. Los nombres y responsabilidades se adaptan al contexto.' }
        ],
        ceremonias: [
            { title: 'No impone ceremonias', icon: 'fa-circle-info', description: 'Kanban no requiere reuniones fijas: cada equipo establece cadencias útiles para su servicio.' },
            { title: 'Replenishment', icon: 'fa-boxes-stacked', description: 'Se decide qué trabajo incorporar al sistema según capacidad, prioridades y políticas acordadas.' },
            { title: 'Reunión diaria de flujo', icon: 'fa-sun', description: 'El equipo revisa el tablero, los bloqueos y cómo hacer avanzar los elementos en curso.' },
            { title: 'Revisión del servicio', icon: 'fa-chart-line', description: 'Se analizan resultados y métricas para reconocer tendencias y elegir mejoras.' }
        ],
        artefactos: [
            { title: 'Tablero Kanban', icon: 'fa-table-columns', description: 'Representación visual del flujo, sus etapas y los límites de trabajo en curso.' },
            { title: 'Elementos de trabajo', icon: 'fa-ticket', description: 'Tarjetas que representan solicitudes o tareas y muestran su estado, prioridad y datos relevantes.' },
            { title: 'Políticas explícitas', icon: 'fa-clipboard-list', description: 'Reglas visibles que definen cómo se gestiona y mueve el trabajo entre etapas.' },
            { title: 'Métricas de flujo', icon: 'fa-chart-simple', description: 'WIP, throughput, tiempo de ciclo y antigüedad del trabajo ayudan a comprender el desempeño.' },
            { title: 'SLE', icon: 'fa-stopwatch', description: 'La expectativa de nivel de servicio estima cuánto tardará un elemento, normalmente con una probabilidad acordada.' }
        ]
    },
    xp: {
        name: 'XP (Extreme Programming)',
        summary: 'Extreme Programming es un enfoque ágil de ingeniería de software que prioriza calidad técnica, colaboración cercana y feedback frecuente para responder al cambio.',
        principios: [
            { title: 'Comunicación', icon: 'fa-comments', description: 'El equipo comparte información de forma directa para resolver dudas y coordinar el trabajo.' },
            { title: 'Simplicidad', icon: 'fa-wand-magic-sparkles', description: 'Se implementa la solución más sencilla que satisface las necesidades actuales, evitando complejidad innecesaria.' },
            { title: 'Feedback', icon: 'fa-reply', description: 'Pruebas, entregas frecuentes y opinión del cliente permiten corregir el rumbo rápidamente.' },
            { title: 'Coraje', icon: 'fa-shield-halved', description: 'El equipo puede refactorizar, descartar una solución inadecuada y hablar con claridad sobre los problemas.' },
            { title: 'Respeto', icon: 'fa-handshake', description: 'Las contribuciones de cada persona se valoran y el equipo comparte la responsabilidad por la calidad.' }
        ],
        roles: [
            { title: 'Cliente', icon: 'fa-user-tie', description: 'Aclara necesidades, prioriza historias y define criterios de aceptación junto con el equipo.' },
            { title: 'Programadores', icon: 'fa-code', description: 'Estiman, diseñan, programan y prueban el software en colaboración continua.' },
            { title: 'Coach', icon: 'fa-person-chalkboard', description: 'Acompaña la adopción de XP y ayuda al equipo a mantener sus prácticas y principios.' },
            { title: 'Tracker', icon: 'fa-chart-line', description: 'Ayuda a observar estimaciones, progreso e indicadores para detectar desvíos temprano.' },
            { title: 'Tester', icon: 'fa-vial-circle-check', description: 'Colabora con el cliente para definir y ejecutar pruebas de aceptación. En equipos pequeños, estas responsabilidades pueden compartirse.' }
        ],
        ceremonias: [
            { title: 'Planificación de release', icon: 'fa-calendar-plus', description: 'Cliente y equipo ordenan historias y acuerdan un alcance tentativo para una entrega.' },
            { title: 'Planificación de iteración', icon: 'fa-list-check', description: 'Se eligen historias para un ciclo breve y se descomponen en tareas de desarrollo.' },
            { title: 'Sincronización diaria', icon: 'fa-sun', description: 'El equipo coordina el trabajo, identifica impedimentos y busca colaboración inmediata.' },
            { title: 'Pruebas y aceptación', icon: 'fa-vial', description: 'Se comprueba el comportamiento esperado con pruebas automatizadas y criterios definidos con el cliente.' },
            { title: 'Retrospectiva', icon: 'fa-comments', description: 'El equipo revisa su proceso y acuerda cambios concretos para la siguiente iteración.' }
        ],
        artefactos: [
            { title: 'Historias de usuario', icon: 'fa-note-sticky', description: 'Describen necesidades desde la perspectiva de quien usa el producto y se detallan al conversar con el cliente.' },
            { title: 'Plan de release', icon: 'fa-calendar-days', description: 'Agrupa historias priorizadas y ofrece una previsión de entregas, que puede ajustarse con el aprendizaje.' },
            { title: 'Pruebas de aceptación', icon: 'fa-circle-check', description: 'Ejemplos verificables que muestran si una historia satisface las necesidades acordadas.' },
            { title: 'Código integrado', icon: 'fa-code-branch', description: 'Código probado e integrado con frecuencia. La programación en pareja y la propiedad colectiva son prácticas comunes de XP.' }
        ]
    }
};

const methodologyTabs = Array.from(document.querySelectorAll('.explorer-tab'));
const categoryTabs = Array.from(document.querySelectorAll('.category-tab'));
const agileSummary = document.getElementById('agile-summary');
const explorerSectionTitle = document.getElementById('explorerSectionTitle');
const explorerContent = document.getElementById('explorerContent');
const categoryTabList = document.getElementById('categoryTabs');
const agileIllustrationButton = document.getElementById('agileIllustrationButton');
const agileIllustrationImage = document.getElementById('agileIllustrationImage');
const agileImageLightbox = document.getElementById('agileImageLightbox');
const expandedAgileIllustration = document.getElementById('expandedAgileIllustration');
const agileImageLightboxClose = document.getElementById('agileImageLightboxClose');
const agileIllustrations = {
    scrum: {
        src: 'img/Ciclo%20SCRUM.png',
        alt: 'Ilustración del ciclo Scrum'
    },
    kanban: {
        src: 'img/Flujo%20Kanban.png',
        alt: 'Ilustración del flujo Kanban'
    },
    xp: {
        src: 'img/Bucle%20XP.png',
        alt: 'Ilustración del ciclo XP'
    }
};
const categoryNames = {
    principios: 'Principios',
    roles: 'Roles',
    ceremonias: 'Ceremonias',
    artefactos: 'Artefactos'
};
let selectedMethod = 'scrum';
let selectedCategory = 'principios';

function updateTabs(tabs, selectedTab) {
    tabs.forEach((tab) => {
        const isSelected = tab === selectedTab;
        tab.classList.toggle('active', isSelected);
        tab.setAttribute('aria-selected', String(isSelected));
        tab.tabIndex = isSelected ? 0 : -1;
    });
}

function renderExplorer() {
    const method = agileMethods[selectedMethod];
    const entries = method[selectedCategory];
    const activeCategoryTab = categoryTabs.find((tab) => tab.dataset.category === selectedCategory);

    agileSummary.textContent = method.summary;
    categoryTabList.setAttribute('aria-label', `Temas de ${method.name}`);
    explorerSectionTitle.textContent = `${categoryNames[selectedCategory]} de ${method.name}`;
    explorerContent.setAttribute('aria-labelledby', activeCategoryTab.id);
    explorerContent.replaceChildren(...entries.map((entry) => {
        const card = document.createElement('article');
        const icon = document.createElement('i');
        const title = document.createElement('h3');
        const description = document.createElement('p');

        card.className = 'topic-card';
        icon.className = `fa-solid ${entry.icon}`;
        icon.setAttribute('aria-hidden', 'true');
        title.textContent = entry.title;
        description.textContent = entry.description;
        card.append(icon, title, description);
        return card;
    }));
}

function addTabKeyboardNavigation(tabList, tabs, activateTab) {
    tabList.addEventListener('keydown', (event) => {
        const currentIndex = tabs.indexOf(event.target);
        if (currentIndex < 0) return;

        let nextIndex = currentIndex;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = tabs.length - 1;
        else return;

        event.preventDefault();
        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
    });
}

methodologyTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        selectedMethod = tab.dataset.method;
        updateTabs(methodologyTabs, tab);
        const illustration = agileIllustrations[selectedMethod];
        agileIllustrationImage.src = illustration.src;
        agileIllustrationImage.alt = illustration.alt;
        agileIllustrationButton.setAttribute('aria-label', `Ampliar ${illustration.alt.toLowerCase()}`);
        renderExplorer();
    });
});

categoryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        selectedCategory = tab.dataset.category;
        updateTabs(categoryTabs, tab);
        renderExplorer();
    });
});

addTabKeyboardNavigation(document.querySelector('.methodology-tabs'), methodologyTabs, (tab) => tab.click());
addTabKeyboardNavigation(categoryTabList, categoryTabs, (tab) => tab.click());
renderExplorer();

agileIllustrationButton.addEventListener('click', () => {
    expandedAgileIllustration.src = agileIllustrationImage.currentSrc || agileIllustrationImage.src;
    expandedAgileIllustration.alt = agileIllustrationImage.alt;
    agileImageLightbox.showModal();
});

agileImageLightboxClose.addEventListener('click', () => agileImageLightbox.close());
agileImageLightbox.addEventListener('click', (event) => {
    if (event.target === agileImageLightbox) agileImageLightbox.close();
});

console.log('BugZero - Metodologías Ágiles cargado correctamente.');