const methods = {
    scrum: {
        name: "Scrum",
        icon: "refresh-cw",
        tags: ["Sprints", "Roles definidos", "Revisiones frecuentes"],
        summary: "Un marco de trabajo iterativo que organiza el avance en ciclos cortos, con objetivos y revisiones frecuentes.",
        steps: [
            "Definí un objetivo de producto claro y priorizá el trabajo pendiente.",
            "Acordá un objetivo para el primer Sprint y elegí tareas alcanzables.",
            "Revisá el incremento con las personas interesadas y acordá mejoras para el siguiente ciclo."
        ]
    },
    kanban: {
        name: "Kanban",
        icon: "layout-dashboard",
        tags: ["Flujo continuo", "Trabajo visual", "Mejora continua"],
        summary: "Un método para visualizar el trabajo, cuidar el flujo de entrega y mejorar gradualmente el proceso existente.",
        steps: [
            "Representá las etapas reales del trabajo en un tablero compartido.",
            "Hacé explícitas las prioridades y limitá el trabajo que se realiza al mismo tiempo.",
            "Revisá bloqueos y tiempos de entrega para identificar mejoras."
        ]
    },
    waterfall: {
        name: "Cascada",
        icon: "workflow",
        tags: ["Etapas secuenciales", "Planificación", "Requisitos estables"],
        summary: "Un enfoque por etapas que puede ser adecuado cuando el alcance y los requisitos se conocen con anticipación.",
        steps: [
            "Documentá el alcance, los requisitos y los criterios de aceptación.",
            "Planificá las etapas, dependencias y entregables antes de iniciar.",
            "Validá cada etapa y registrá formalmente los cambios necesarios."
        ]
    },
    agile: {
        name: "Ágil",
        icon: "repeat-2",
        tags: ["Adaptabilidad", "Entregas incrementales", "Colaboración"],
        summary: "Un enfoque adaptable que prioriza entregas incrementales, colaboración y aprendizaje a partir de la retroalimentación.",
        steps: [
            "Dividí el objetivo del proyecto en incrementos pequeños y valiosos.",
            "Acordá una cadencia de revisión y mantené visibles las prioridades.",
            "Usá la retroalimentación para ajustar el plan y mejorar la forma de trabajar."
        ]
    }
};

const questions = [
    {
        title: "¿Qué tipo de proyecto vas a desarrollar?",
        options: [
            {
                label: "Un producto nuevo que irá evolucionando",
                description: "Esperamos aprender y ajustar la solución a medida que avancemos.",
                scores: { scrum: 3, kanban: 1, waterfall: 0, agile: 3 }
            },
            {
                label: "Un flujo continuo de solicitudes o mejoras",
                description: "El trabajo llega de forma frecuente y conviene priorizarlo continuamente.",
                scores: { scrum: 1, kanban: 3, waterfall: 0, agile: 2 }
            },
            {
                label: "Un proyecto con alcance conocido y etapas claras",
                description: "Hay entregables definidos y dependencias que se pueden planificar.",
                scores: { scrum: 1, kanban: 0, waterfall: 3, agile: 1 }
            }
        ]
    },
    {
        title: "¿Cómo está conformado el equipo?",
        options: [
            {
                label: "Un equipo pequeño que puede organizarse y decidir en conjunto",
                description: "Las personas pueden colaborar y asumir distintas responsabilidades.",
                scores: { scrum: 2, kanban: 3, waterfall: 1, agile: 3 }
            },
            {
                label: "Un equipo estable con responsabilidades diferenciadas",
                description: "Podemos reservar tiempo para planificar y revisar el trabajo en ciclos.",
                scores: { scrum: 3, kanban: 2, waterfall: 1, agile: 2 }
            },
            {
                label: "Varios grupos o áreas con dependencias entre sí",
                description: "La coordinación, la documentación y las aprobaciones son importantes.",
                scores: { scrum: 1, kanban: 1, waterfall: 3, agile: 1 }
            }
        ]
    },
    {
        title: "¿Qué tan claros y estables son los requisitos?",
        options: [
            {
                label: "Es probable que cambien al recibir comentarios",
                description: "Queremos validar ideas y adaptar el producto con frecuencia.",
                scores: { scrum: 3, kanban: 2, waterfall: 0, agile: 3 }
            },
            {
                label: "Son bastante estables y se pueden especificar desde el inicio",
                description: "Es posible acordar el alcance y planificarlo con anticipación.",
                scores: { scrum: 1, kanban: 0, waterfall: 3, agile: 1 }
            },
            {
                label: "Las prioridades cambian, pero el trabajo puede avanzar de manera continua",
                description: "Necesitamos responder a pedidos sin esperar al siguiente ciclo.",
                scores: { scrum: 1, kanban: 3, waterfall: 0, agile: 2 }
            }
        ]
    },
    {
        title: "¿Cómo participa el cliente o usuario?",
        options: [
            {
                label: "Puede revisar avances y dar feedback con frecuencia",
                description: "La colaboración durante el desarrollo es posible y deseable.",
                scores: { scrum: 3, kanban: 2, waterfall: 0, agile: 3 }
            },
            {
                label: "Participa principalmente en hitos o entregas acordadas",
                description: "Conviene definir de antemano qué se valida en cada etapa.",
                scores: { scrum: 1, kanban: 0, waterfall: 3, agile: 1 }
            },
            {
                label: "Envía solicitudes cuando surgen nuevas necesidades",
                description: "Es importante visualizar y volver a priorizar el trabajo pendiente.",
                scores: { scrum: 1, kanban: 3, waterfall: 0, agile: 2 }
            }
        ]
    },
    {
        title: "¿Qué forma de organizar el trabajo les resulta más natural?",
        options: [
            {
                label: "Planificar ciclos cortos con objetivos y revisiones",
                description: "El equipo puede reservar momentos regulares para inspeccionar y adaptar.",
                scores: { scrum: 3, kanban: 1, waterfall: 1, agile: 2 }
            },
            {
                label: "Mantener un flujo visible y priorizar de forma continua",
                description: "El equipo prefiere terminar tareas antes de iniciar otras nuevas.",
                scores: { scrum: 1, kanban: 3, waterfall: 0, agile: 2 }
            },
            {
                label: "Seguir etapas y aprobar entregables en una secuencia",
                description: "La planificación y la trazabilidad son necesidades centrales.",
                scores: { scrum: 0, kanban: 0, waterfall: 3, agile: 0 }
            },
            {
                label: "Adaptar la planificación según lo aprendido",
                description: "Nos interesa entregar valor en partes y revisar el rumbo regularmente.",
                scores: { scrum: 2, kanban: 2, waterfall: 0, agile: 3 }
            }
        ]
    }
];

const questionCount = document.getElementById("questionCount");
const progressTrack = document.querySelector(".progress-track");
const progressFill = document.getElementById("progressFill");
const stepLabels = document.getElementById("stepLabels");
const questionArea = document.getElementById("questionArea");
const surveyForm = document.getElementById("surveyForm");
const formError = document.getElementById("formError");
const previousButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const workspace = document.querySelector(".workspace");
const resultPanel = document.getElementById("resultPanel");
const menuToggle = document.getElementById("menuToggle");
const topNav = document.getElementById("topNav");
let currentQuestion = 0;

function renderQuestion() {
    const question = questions[currentQuestion];
    const selectedAnswer = surveyForm.elements[`question-${currentQuestion}`]?.value;

    questionCount.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
    progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));
    previousButton.disabled = currentQuestion === 0;
    nextButton.innerHTML = currentQuestion === questions.length - 1
        ? 'Ver recomendación <i data-lucide="arrow-right"></i>'
        : 'Siguiente <i data-lucide="arrow-right"></i>';
    formError.textContent = "";

    Array.from(stepLabels.children).forEach((step, index) => {
        step.classList.toggle("active", index === currentQuestion);
        step.classList.toggle("complete", index < currentQuestion);
    });

    const options = question.options.map((option, index) => {
        const inputId = `answer-${currentQuestion}-${index}`;
        const checked = selectedAnswer === String(index) ? " checked" : "";
        return `
            <div class="answer-option">
                <input id="${inputId}" type="radio" name="question-${currentQuestion}" value="${index}"${checked}>
                <label for="${inputId}">
                    <strong>${option.label}</strong>
                    <small>${option.description}</small>
                </label>
            </div>`;
    }).join("");

    questionArea.innerHTML = `
        <fieldset class="question-fieldset">
            <legend>${question.title}</legend>
            <div class="answer-options">${options}</div>
        </fieldset>`;
}

function getSelectedAnswers() {
    return questions.map((question, index) => {
        const selected = surveyForm.elements[`question-${index}`]?.value;
        return selected === undefined || selected === "" ? null : question.options[Number(selected)];
    });
}

function calculateScores(answers) {
    const scores = Object.fromEntries(
        Object.keys(methods).map((method) => [method, 0])
    );

    answers.forEach((answer) => {
        Object.entries(answer.scores).forEach(([method, score]) => {
            scores[method] += score;
        });
    });

    return scores;
}

function showResults() {
    const answers = getSelectedAnswers();
    const scores = calculateScores(answers);
    const rankedMethods = Object.keys(methods).sort((first, second) => scores[second] - scores[first]);
    const winnerKey = rankedMethods[0];
    const winner = methods[winnerKey];
    const highestPossibleScore = questions.length * 3;
    const matchPercentage = Math.round((scores[winnerKey] / highestPossibleScore) * 100);

    document.getElementById("resultSymbol").innerHTML = `<i data-lucide="${winner.icon}"></i>`;
    document.getElementById("winnerName").textContent = winner.name;
    document.getElementById("winnerSummary").textContent = winner.summary;
    document.getElementById("winnerScore").textContent = `${matchPercentage}%`;
    document.getElementById("scoreRingFill").style.width = `${matchPercentage}%`;
    document.getElementById("winnerTags").innerHTML = winner.tags
        .map((tag) => `<span>${tag}</span>`)
        .join("");

    document.getElementById("scoreBars").innerHTML = rankedMethods.map((methodKey) => {
        const percentage = Math.round((scores[methodKey] / highestPossibleScore) * 100);
        const winnerClass = methodKey === winnerKey ? " winner" : "";
        return `
            <div class="score-row${winnerClass}">
                <span>${methods[methodKey].name}</span>
                <div class="score-bar-track" role="img" aria-label="${methods[methodKey].name}: ${percentage}%">
                    <div class="score-bar-fill" style="width: ${percentage}%"></div>
                </div>
                <strong>${percentage}%</strong>
            </div>`;
    }).join("");

    const reasons = answers.map((answer, index) => ({
        score: answer.scores[winnerKey],
        text: `${questions[index].title} ${answer.description}`
    })).sort((first, second) => second.score - first.score).slice(0, 3);
    document.getElementById("reasonList").innerHTML = reasons
        .map((reason) => `<li>${reason.text}</li>`)
        .join("");

    document.getElementById("starterSteps").innerHTML = winner.steps
        .map((step, index) => `<div class="starter-step"><b>${index + 1}.</b><span>${step}</span></div>`)
        .join("");

    document.getElementById("answerSummary").innerHTML = answers
        .map((answer, index) => `
            <div>
                <strong>${questions[index].title}</strong>
                <span>${answer.label}</span>
            </div>`)
        .join("");

    resultPanel.classList.remove("hidden");
    workspace.classList.add("hidden");
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    refreshIcons();
}

function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }
}

surveyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = surveyForm.elements[`question-${currentQuestion}`]?.value;

    if (selected === undefined || selected === "") {
        formError.textContent = "Seleccioná una opción para continuar.";
        questionArea.querySelector("input")?.focus();
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion += 1;
        renderQuestion();
        return;
    }

    showResults();
});

previousButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion -= 1;
        renderQuestion();
    }
});

document.getElementById("editAnswersBtn").addEventListener("click", () => {
    resultPanel.classList.add("hidden");
    workspace.classList.remove("hidden");
    renderQuestion();
    workspace.scrollIntoView({ behavior: "smooth", block: "start" });
    questionArea.querySelector("input:checked")?.focus();
});

document.getElementById("restartBtn").addEventListener("click", () => {
    surveyForm.reset();
    currentQuestion = 0;
    resultPanel.classList.add("hidden");
    workspace.classList.remove("hidden");
    renderQuestion();
    workspace.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("downloadBtn").addEventListener("click", () => {
    const lines = [
        "BugZero - Resultado de la encuesta metodológica",
        `Metodología sugerida: ${document.getElementById("winnerName").textContent}`,
        `Coincidencia estimada: ${document.getElementById("winnerScore").textContent}`,
        "",
        "Resumen de respuestas:",
        ...getSelectedAnswers().map((answer, index) => `${index + 1}. ${questions[index].title} ${answer.label}`)
    ];
    const file = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "resultado-encuesta-metodologia.txt";
    link.click();
    URL.revokeObjectURL(downloadUrl);
});

document.getElementById("printBtn").addEventListener("click", () => window.print());

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    topNav.classList.toggle("is-open", !isOpen);
});

topNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        topNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
    });
});

renderQuestion();
refreshIcons();
