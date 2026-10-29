const glossaryTerms = [
  ["Accesibilidad", "Grado en que un producto, servicio o contenido puede ser utilizado por personas con diversas capacidades y necesidades."],
  ["Aseguramiento de la calidad (QA)", "Conjunto planificado de actividades y procesos destinados a prevenir defectos y brindar confianza en que se cumplirán los requisitos de calidad."],
  ["Automatización de pruebas", "Uso de herramientas y scripts para ejecutar pruebas y comparar resultados con los esperados, reduciendo tareas manuales repetitivas."],
  ["Backlog", "Lista priorizada de trabajo pendiente. En Scrum, el Product Backlog reúne el trabajo conocido necesario para mejorar el producto."],
  ["Bloqueo", "Impedimento que evita o retrasa que un elemento de trabajo avance por el flujo previsto."],
  ["Calidad del software", "Grado en que un producto satisface necesidades y requisitos en un contexto de uso; comprende características como seguridad, confiabilidad y usabilidad."],
  ["Caso de prueba", "Conjunto de condiciones, datos, pasos y resultados esperados que permite comprobar un comportamiento específico."],
  ["Ciclo de vida del software", "Etapas y actividades por las que pasa el software, desde la identificación de una necesidad hasta su mantenimiento o retiro."],
  ["Ciclo de vida de desarrollo de software (SDLC)", "Modelo que organiza actividades como análisis, diseño, construcción, pruebas, entrega y mantenimiento de un sistema."],
  ["Criterio de aceptación", "Condición verificable que debe cumplir una funcionalidad o elemento de trabajo para considerarse aceptable."],
  ["Defecto", "Imperfección en un componente o producto que puede causar que no cumpla un requisito o produzca un resultado incorrecto."],
  ["Deuda técnica", "Costo futuro de mantenimiento o cambio generado por decisiones técnicas que priorizaron una solución rápida frente a una solución más sostenible."],
  ["Definition of Done (DoD)", "Acuerdo compartido que describe el estado de calidad que debe alcanzar un incremento de producto para considerarse terminado."],
  ["Despliegue", "Acción de instalar o publicar una versión del software en un entorno donde puede ejecutarse, como pruebas o producción."],
  ["Disponibilidad", "Grado en que un sistema está operativo y accesible cuando se necesita."],
  ["Eficiencia del desempeño", "Capacidad de un producto para responder a requisitos de rendimiento considerando recursos y tiempos de respuesta."],
  ["Épica", "Iniciativa amplia que suele dividirse en historias de usuario o tareas más pequeñas para facilitar su planificación y entrega."],
  ["Error humano", "Acción o decisión de una persona que puede introducir una equivocación en requisitos, diseño, código, configuración o uso."],
  ["Escalabilidad", "Capacidad de un sistema para soportar el crecimiento de usuarios, datos o carga sin degradar excesivamente su servicio."],
  ["Estimación", "Aproximación del esfuerzo, duración o complejidad que podría requerir un trabajo; no es una garantía exacta."],
  ["Evento de Scrum", "Instancia formal del marco Scrum que crea oportunidades regulares de inspección y adaptación, como la Sprint Review o la Daily Scrum."],
  ["Fallo", "Evento en el que un sistema o componente no realiza una función requerida durante su operación."],
  ["Flujo de trabajo", "Secuencia y reglas mediante las cuales los elementos de trabajo avanzan desde el inicio hasta su finalización."],
  ["Gestión de configuración", "Identificación y control de cambios en elementos del software y sus versiones para preservar consistencia y trazabilidad."],
  ["Historia de usuario", "Descripción breve de una necesidad desde la perspectiva de quien obtiene valor, que puede acompañarse de criterios de aceptación."],
  ["Incremento", "Resultado utilizable que se produce en Scrum y que se integra con los incrementos anteriores, cumpliendo la Definition of Done."],
  ["Ítem de trabajo", "Unidad de trabajo visualizada y gestionada dentro de un sistema de flujo, por ejemplo una tarea, incidencia o solicitud."],
  ["Kanban", "Estrategia para optimizar el flujo de valor mediante la visualización del trabajo, su gestión activa y la mejora del flujo."],
  ["Lead time", "Tiempo transcurrido desde que se solicita o inicia un elemento hasta que se entrega, según los puntos de inicio y fin acordados."],
  ["Mantenibilidad", "Facilidad con que un producto puede analizarse, corregirse, probarse o modificarse sin introducir problemas innecesarios."],
  ["Métrica", "Medida cuantitativa definida para observar una característica, actividad o resultado; requiere contexto para interpretarse correctamente."],
  ["Mejora continua", "Práctica de revisar resultados y procesos de manera frecuente para identificar y realizar cambios que aporten valor."],
  ["Norma ISO/IEC 25010", "Estándar que define un modelo de características de calidad de productos de software y tecnología de la información para especificar y evaluar calidad."],
  ["Prueba de aceptación", "Prueba que evalúa si un producto o funcionalidad satisface criterios de aceptación o necesidades acordadas."],
  ["Prueba de integración", "Prueba que verifica la interacción entre componentes, servicios o sistemas que colaboran."],
  ["Prueba de regresión", "Prueba repetida después de un cambio para verificar que funciones existentes continúan comportándose correctamente."],
  ["Prueba de software (testing)", "Actividad que evalúa un producto, sus componentes o documentos para encontrar defectos y obtener información sobre su calidad."],
  ["Pruebas de extremo a extremo (E2E)", "Pruebas que recorren un flujo completo de uso a través de varios componentes, desde la perspectiva del usuario o sistema externo."],
  ["Pruebas exploratorias", "Enfoque en el que aprender, diseñar y ejecutar pruebas se realiza de forma iterativa, guiada por observaciones y riesgos."],
  ["Pruebas funcionales", "Pruebas que comprueban qué funciones ofrece el sistema y si se comportan según los requisitos especificados."],
  ["Pruebas no funcionales", "Pruebas que evalúan características como rendimiento, seguridad, confiabilidad, compatibilidad o accesibilidad."],
  ["Requisito", "Necesidad o condición que un producto, servicio o proceso debe satisfacer y que puede expresarse de forma verificable."],
  ["Retrospectiva", "Evento de Scrum en el que el equipo inspecciona cómo trabajó y acuerda mejoras para su forma de colaborar."],
  ["Riesgo", "Posible evento o condición incierta que, si ocurre, puede afectar objetivos, calidad, plazos o personas usuarias."],
  ["Scrum", "Marco de trabajo liviano que ayuda a personas y equipos a generar valor mediante soluciones adaptativas para problemas complejos."],
  ["Seguridad", "Grado en que un producto protege información y datos frente a accesos, usos o modificaciones no autorizados."],
  ["Sprint", "Evento de duración fija en Scrum que contiene el trabajo y los demás eventos necesarios para alcanzar un objetivo del Sprint."],
  ["Stakeholder", "Persona, grupo u organización que puede afectar, verse afectada o tener interés en un producto, decisión o resultado."],
  ["Tiempo de ciclo (cycle time)", "Tiempo que transcurre desde que un elemento empieza a trabajarse hasta que se completa, según las políticas del flujo."],
  ["Usabilidad", "Grado en que personas usuarias determinadas pueden alcanzar objetivos con efectividad, eficiencia y satisfacción en un contexto de uso."],
  ["Validación", "Confirmación, mediante evidencia, de que el producto satisface necesidades previstas en el contexto de uso."],
  ["Verificación", "Confirmación, mediante evidencia, de que un producto o elemento cumple requisitos y especificaciones definidos."],
  ["Velocidad", "Medida empírica usada por algunos equipos Scrum para observar el trabajo completado por Sprint; no es una medida universal de productividad."],
  ["WIP (trabajo en curso)", "Cantidad de elementos que ya comenzaron pero todavía no se completaron dentro de un flujo de trabajo."],
  ["WCAG", "Pautas de Accesibilidad para el Contenido Web del W3C, que incluyen criterios de éxito verificables para hacer la web más accesible."]
];

const alphabetIndex = document.getElementById("alphabetIndex");
const glossaryList = document.getElementById("glossaryList");
const glossarySearch = document.getElementById("glossarySearch");
const termCount = document.getElementById("termCount");
const glossaryEmpty = document.getElementById("glossaryEmpty");
let selectedLetter = "";

function normalizeText(value) {
  return value.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function renderAlphabet() {
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((letter) => {
    const button = document.createElement("button");
    const hasTerms = glossaryTerms.some(([term]) => normalizeText(term).startsWith(letter.toLowerCase()));
    button.type = "button";
    button.textContent = letter;
    button.setAttribute("aria-label", `Filtrar términos por ${letter}`);
    button.setAttribute("aria-pressed", "false");
    button.disabled = !hasTerms;
    button.addEventListener("click", () => {
      selectedLetter = selectedLetter === letter ? "" : letter;
      glossarySearch.value = "";
      renderGlossary();
    });
    alphabetIndex.append(button);
  });
}

function renderGlossary() {
  const query = normalizeText(glossarySearch.value.trim());
  const terms = glossaryTerms
    .filter(([term, definition]) => {
      const matchesLetter = !selectedLetter || normalizeText(term).startsWith(selectedLetter.toLowerCase());
      const searchableText = normalizeText(`${term} ${definition}`);
      const matchesQuery = !query || query.split(/\s+/).every((part) => searchableText.includes(part));
      return matchesLetter && matchesQuery;
    })
    .sort(([termA], [termB]) => termA.localeCompare(termB, "es", { sensitivity: "base" }));
  const letters = new Map();

  terms.forEach(([term, definition]) => {
    const letter = term.normalize("NFD").replace(/[\u0300-\u036f]/g, "").charAt(0).toLocaleUpperCase("es");
    if (!letters.has(letter)) letters.set(letter, []);
    letters.get(letter).push([term, definition]);
  });

  glossaryList.replaceChildren();
  letters.forEach((items, letter) => {
    const heading = document.createElement("h3");
    heading.className = "glossary-letter";
    heading.textContent = letter;
    glossaryList.append(heading);
    items.forEach(([term, definition]) => {
      const row = document.createElement("article");
      row.className = "glossary-term";
      const title = document.createElement("h3");
      const description = document.createElement("p");
      title.textContent = term;
      description.textContent = definition;
      row.append(title, description);
      glossaryList.append(row);
    });
  });

  termCount.textContent = `${terms.length} ${terms.length === 1 ? "término" : "términos"} en el glosario.`;
  glossaryEmpty.hidden = terms.length > 0;
  alphabetIndex.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.textContent === selectedLetter);
    button.setAttribute("aria-pressed", String(button.textContent === selectedLetter));
  });
}

renderAlphabet();
renderGlossary();
glossarySearch.addEventListener("input", () => {
  selectedLetter = "";
  renderGlossary();
});

const resourceTabs = Array.from(document.querySelectorAll(".resource-tab"));
const resourcePanels = Array.from(document.querySelectorAll(".resource-panel"));

function activateResourceTab(tab, moveFocus = false) {
  resourceTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-selected", String(isActive));
    item.tabIndex = isActive ? 0 : -1;
  });
  resourcePanels.forEach((panel) => {
    const isActive = panel.id === tab.getAttribute("aria-controls");
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
  if (moveFocus) tab.focus();
}

resourceTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateResourceTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % resourceTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + resourceTabs.length) % resourceTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = resourceTabs.length - 1;
    activateResourceTab(resourceTabs[nextIndex], true);
  });
});

const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");
const quizQuestions = Array.from(quizForm.querySelectorAll(".quiz-question"));

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  const unanswered = [];

  quizQuestions.forEach((question, index) => {
    const answer = question.querySelector(`input[name="q${index + 1}"]:checked`);
    const correctValue = question.dataset.answer;
    const labels = Array.from(question.querySelectorAll("label"));
    labels.forEach((label) => {
      label.classList.remove("is-correct", "is-incorrect");
      const input = label.querySelector("input");
      if (input.value === correctValue) label.classList.add("is-correct");
      if (answer && input === answer && input.value !== correctValue) label.classList.add("is-incorrect");
    });
    if (!answer) unanswered.push(index + 1);
    else if (answer.value === correctValue) score += 1;
  });

  const explanations = quizQuestions.map((question, index) => {
    return `<li><strong>${String(index + 1).padStart(2, "0")}.</strong> ${question.dataset.explanation}</li>`;
  }).join("");
  const completionMessage = unanswered.length
    ? `<p>Te faltan responder las preguntas: ${unanswered.join(", ")}. El puntaje considera solo las respondidas.</p>`
    : "";
  quizResult.innerHTML = `<strong>Resultado: ${score} de ${quizQuestions.length} respuestas correctas.</strong>${completionMessage}<ol>${explanations}</ol>`;
  quizResult.hidden = false;
  quizResult.focus();
});

quizForm.addEventListener("reset", () => {
  quizQuestions.forEach((question) => {
    question.querySelectorAll("label").forEach((label) => label.classList.remove("is-correct", "is-incorrect"));
  });
  quizResult.hidden = true;
  quizResult.replaceChildren();
});

const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
  sideMenu.setAttribute("aria-hidden", "false");
  overlay.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
  menuClose.focus();
}

function closeMenu(restoreFocus = true) {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
  sideMenu.setAttribute("aria-hidden", "true");
  overlay.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
  if (restoreFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  if (menuToggle.getAttribute("aria-expanded") === "true") closeMenu();
  else openMenu();
});
menuClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") closeMenu();
});

[
  ["qualityToggle", "qualitySubmenu"],
  ["developmentToggle", "developmentSubmenu"],
  ["methodsToggle", "methodsSubmenu"],
  ["resourceToggle", "resourceSubmenu"],
  ["interactiveToggle", "interactiveSubmenu"]
].forEach(([toggleId, submenuId]) => {
  const toggle = document.getElementById(toggleId);
  const submenu = document.getElementById(submenuId);
  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    submenu.hidden = isExpanded;
  });
});

sideMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMenu(false));
});
