const board = document.getElementById('kanbanBoard');
const columns = Array.from(board.querySelectorAll('.kanban-column'));
let draggedCard = null;

const scrumPhases = {
  backlog: {
    type: 'Artefacto',
    title: 'Pila de Producto (Product Backlog)',
    objective: 'Es la fuente única y ordenada del trabajo que el Scrum Team podría realizar para mejorar el producto. El Product Owner es responsable de gestionarla y comunicar el Product Goal.'
  },
  planning: {
    type: 'Evento',
    title: 'Planificación del Sprint (Sprint Planning)',
    objective: 'El Scrum Team define por qué el Sprint es valioso, qué trabajo puede realizarse y cómo se llevará a cabo.'
  },
  'sprint-backlog': {
    type: 'Artefacto',
    title: 'Pila del Sprint (Sprint Backlog)',
    objective: 'Es el plan de Developers para el Sprint: reúne el Sprint Goal, los elementos seleccionados de la Pila de Producto y un plan accionable para entregar el Incremento.'
  },
  daily: {
    type: 'Evento',
    title: 'Scrum Diario (Daily Scrum)',
    objective: 'Es un evento de 15 minutos para que Developers inspeccionen el progreso hacia el Sprint Goal y adapten su plan para las próximas 24 horas.'
  },
  sprint: {
    type: 'Evento',
    title: 'Sprint',
    objective: 'Es un período fijo de un mes o menos que contiene el trabajo necesario para alcanzar el Sprint Goal. Un nuevo Sprint comienza inmediatamente después de que termina el anterior.'
  },
  increment: {
    type: 'Artefacto',
    title: 'Incremento',
    objective: 'Es un paso concreto hacia el Product Goal. Cada Incremento se suma a los anteriores y debe ser utilizable, cumplir la Definition of Done y aportar valor.'
  },
  review: {
    type: 'Evento',
    title: 'Revisión del Sprint (Sprint Review)',
    objective: 'El Scrum Team inspecciona el resultado del Sprint y determina adaptaciones futuras.'
  },
  retro: {
    type: 'Evento',
    title: 'Retrospectiva del Sprint (Sprint Retrospective)',
    objective: 'El Scrum Team planifica formas de aumentar la calidad y la efectividad a partir de lo ocurrido durante el Sprint.'
  }
};

const scrumEventDialog = document.getElementById('scrumEventDialog');
const scrumEventType = document.getElementById('scrumEventType');
const scrumEventTitle = document.getElementById('scrumEventTitle');
const scrumEventObjective = document.getElementById('scrumEventObjective');
const scrumEventClose = scrumEventDialog.querySelector('.scrum-event-close');

function showScrumPhase(phaseKey) {
  const phase = scrumPhases[phaseKey];
  if (!phase) return;

  scrumEventType.dataset.type = phase.type.toLowerCase();
  scrumEventType.textContent = `${phase.type} de Scrum`;
  scrumEventTitle.textContent = phase.title;
  scrumEventObjective.textContent = phase.objective;
  scrumEventDialog.showModal();
}

document.querySelectorAll('.diagram-phase').forEach((phase) => {
  phase.addEventListener('click', () => showScrumPhase(phase.dataset.phase));
  phase.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    showScrumPhase(phase.dataset.phase);
  });
});

scrumEventClose.addEventListener('click', () => scrumEventDialog.close());
scrumEventDialog.addEventListener('click', (event) => {
  if (event.target === scrumEventDialog) scrumEventDialog.close();
});

function updateColumnCounts() {
  columns.forEach((column) => {
    const count = column.querySelectorAll('.task-card').length;
    column.querySelector('.task-count').textContent = String(count);
  });
}

function moveCard(card, destination) {
  const source = card.closest('.kanban-column');
  if (!source || source === destination) return;

  destination.querySelector('.column-tasks').append(card);
  card.setAttribute(
    'aria-label',
    `${card.querySelector('h5').textContent}. ${destination.querySelector('h4').textContent}. Usa las flechas izquierda y derecha para cambiar de columna.`
  );
  updateColumnCounts();
}

board.querySelectorAll('.task-card').forEach((card) => {
  card.addEventListener('dragstart', (event) => {
    draggedCard = card;
    card.classList.add('is-dragging');
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', card.id);
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('is-dragging');
    columns.forEach((column) => column.classList.remove('is-drop-target'));
    draggedCard = null;
  });

  card.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    const currentIndex = columns.indexOf(card.closest('.kanban-column'));
    const nextIndex = currentIndex + (event.key === 'ArrowRight' ? 1 : -1);
    if (nextIndex < 0 || nextIndex >= columns.length) return;

    event.preventDefault();
    moveCard(card, columns[nextIndex]);
    card.focus();
  });
});

columns.forEach((column) => {
  column.addEventListener('dragover', (event) => {
    if (!draggedCard) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    column.classList.add('is-drop-target');
  });

  column.addEventListener('dragleave', (event) => {
    if (!column.contains(event.relatedTarget)) column.classList.remove('is-drop-target');
  });

  column.addEventListener('drop', (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('text/plain');
    const card = document.getElementById(cardId) || draggedCard;
    if (card) moveCard(card, column);
    column.classList.remove('is-drop-target');
  });
});

updateColumnCounts();
