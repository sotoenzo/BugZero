(() => {
// ==========================================
// PREGUNTAS DE LA ENCUESTA
// ==========================================

const questions = [

    // --------------------------------------
    // PREGUNTA 1
    // --------------------------------------

    {
        title: "¿Qué tipo de proyecto vas a desarrollar?",

        hint: "Elegí la opción que mejor describa tu proyecto.",

        key: "project",

        options: [

            {
                value: "software",

                icon: "monitor",

                title: "Software / Aplicación web",

                desc: "Desarrollo de una aplicación, sistema o plataforma digital.",

                scores: {
                    Scrum: 3,
                    Kanban: 2,
                    Agile: 3,
                    Cascada: 1
                }
            },

            {
                value: "mobile",

                icon: "smartphone",

                title: "Aplicación móvil",

                desc: "Una app para teléfonos o tabletas, con funciones que pueden crecer.",

                scores: {
                    Scrum: 3,
                    Kanban: 2,
                    Agile: 3,
                    Cascada: 1
                }
            },

            {
                value: "team",

                icon: "users-round",

                title: "Proyecto en equipo multidisciplinario",

                desc: "Varias personas con tareas, responsabilidades o especialidades diferentes.",

                scores: {
                    Scrum: 3,
                    Kanban: 2,
                    Agile: 2,
                    Cascada: 2
                }
            },

            {
                value: "process",

                icon: "settings",

                title: "Proceso interno / Mantenimiento",

                desc: "Mejorar un proceso existente, resolver incidencias o mantener un servicio.",

                scores: {
                    Scrum: 1,
                    Kanban: 3,
                    Agile: 2,
                    Cascada: 1
                }
            },

            {
                value: "fixed",

                icon: "clipboard-list",

                title: "Proyecto con entrega y alcance definidos",

                desc: "Un trabajo cuyo resultado esperado ya está bastante claro.",

                scores: {
                    Scrum: 1,
                    Kanban: 1,
                    Agile: 1,
                    Cascada: 3
                }
            }

        ]
    },


    // --------------------------------------
    // PREGUNTA 2
    // --------------------------------------

    {
        title: "¿Cuántas personas van a trabajar en el proyecto?",

        hint: "Pensá en quienes participan activamente del trabajo.",

        key: "team",

        options: [

            {
                value: "solo",

                icon: "user-round",

                title: "Una persona",

                desc: "Trabajo individual o casi sin coordinación con otros.",

                scores: {
                    Scrum: 0,
                    Kanban: 3,
                    Agile: 1,
                    Cascada: 2
                }
            },

            {
                value: "small",

                icon: "users",

                title: "2 a 4 personas",

                desc: "Equipo chico que puede hablar y coordinarse fácilmente.",

                scores: {
                    Scrum: 2,
                    Kanban: 3,
                    Agile: 3,
                    Cascada: 1
                }
            },

            {
                value: "medium",

                icon: "users-round",

                title: "5 a 9 personas",

                desc: "Necesitamos distribuir tareas y mantener al equipo alineado.",

                scores: {
                    Scrum: 3,
                    Kanban: 2,
                    Agile: 2,
                    Cascada: 1
                }
            },

            {
                value: "large",

                icon: "network",

                title: "10 personas o más",

                desc: "Hay varios grupos, áreas o dependencias que coordinar.",

                scores: {
                    Scrum: 2,
                    Kanban: 2,
                    Agile: 2,
                    Cascada: 3
                }
            }

        ]
    },


    // --------------------------------------
    // PREGUNTA 3
    // --------------------------------------

    {
        title: "¿Qué tan claros están los requisitos desde el principio?",

        hint: "Los requisitos son las funciones, condiciones y resultados que debe cumplir el proyecto.",

        key: "requirements",

        options: [

            {
                value: "clear",

                icon: "list-checks",

                title: "Están definidos y casi no van a cambiar",

                desc: "Sabemos qué hay que entregar y cuáles son las condiciones.",

                scores: {
                    Scrum: 1,
                    Kanban: 1,
                    Agile: 1,
                    Cascada: 3
                }
            },

            {
                value: "mostly",

                icon: "file-check",

                title: "La mayoría están claros, pero pueden aparecer cambios",

                desc: "Tenemos una idea firme y cierta flexibilidad.",

                scores: {
                    Scrum: 3,
                    Kanban: 2,
                    Agile: 3,
                    Cascada: 2
                }
            },

            {
                value: "evolving",

                icon: "git-branch",

                title: "Van a evolucionar mientras avanzamos",

                desc: "Necesitamos probar ideas, recibir comentarios y ajustar funciones.",

                scores: {
                    Scrum: 3,
                    Kanban: 2,
                    Agile: 3,
                    Cascada: 0
                }
            },

            {
                value: "unclear",

                icon: "compass",

                title: "Todavía no sabemos exactamente qué necesitamos",

                desc: "Queremos descubrir la mejor solución mientras la construimos.",

                scores: {
                    Scrum: 2,
                    Kanban: 2,
                    Agile: 3,
                    Cascada: 0
                }
            }

        ]
    },


    // --------------------------------------
    // PREGUNTA 4
    // --------------------------------------

    {
        title: "¿Con qué frecuencia esperás recibir comentarios o cambiar prioridades?",

        hint: "Pensá en la participación del cliente, docente, usuario o responsable del proyecto.",

        key: "feedback",

        options: [

            {
                value: "often",

                icon: "messages-square",

                title: "Frecuentemente",

                desc: "Queremos mostrar avances, recibir opiniones y adaptar el trabajo seguido.",

                scores: {
                    Scrum: 3,
                    Kanban: 2,
                    Agile: 3,
                    Cascada: 0
                }
            },

            {
                value: "weekly",

                icon: "calendar-check",

                title: "En revisiones periódicas",

                desc: "Nos sirve revisar avances cada cierto tiempo y planificar el siguiente ciclo.",

                scores: {
                    Scrum: 3,
                    Kanban: 2,
                    Agile: 2,
                    Cascada: 1
                }
            },

            {
                value: "asneeded",

                icon: "message-circle",

                title: "Cuando sea necesario",

                desc: "Preferimos trabajar y consultar cuando surja una duda o bloqueo.",

                scores: {
                    Scrum: 1,
                    Kanban: 3,
                    Agile: 2,
                    Cascada: 2
                }
            },

            {
                value: "final",

                icon: "flag",

                title: "Principalmente al final",

                desc: "El resultado se revisará cuando esté terminado o en hitos puntuales.",

                scores: {
                    Scrum: 0,
                    Kanban: 1,
                    Agile: 0,
                    Cascada: 3
                }
            }

        ]
    },


    // --------------------------------------
    // PREGUNTA 5
    // --------------------------------------

    {
        title: "¿Cómo preferís organizar las tareas y los tiempos?",

        hint: "Elegí la forma de trabajo que mejor encaje con el equipo.",

        key: "planning",

        options: [

            {
                value: "sprints",

                icon: "calendar-range",

                title: "En ciclos cortos con objetivos definidos",

                desc: "Planificar un período, trabajar, revisar y mejorar para el siguiente.",

                scores: {
                    Scrum: 4,
                    Kanban: 1,
                    Agile: 2,
                    Cascada: 1
                }
            },

            {
                value: "flow",

                icon: "columns-3",

                title: "En un tablero de tareas y flujo continuo",

                desc: "Mover tareas entre pendientes, en curso y terminadas, sin sprints obligatorios.",

                scores: {
                    Scrum: 1,
                    Kanban: 4,
                    Agile: 2,
                    Cascada: 0
                }
            },

            {
                value: "phases",

                icon: "workflow",

                title: "En etapas ordenadas, una después de otra",

                desc: "Análisis, diseño, desarrollo, pruebas y entrega con planificación previa.",

                scores: {
                    Scrum: 0,
                    Kanban: 0,
                    Agile: 0,
                    Cascada: 4
                }
            },

            {
                value: "mixed",

                icon: "repeat-2",

                title: "Combinando planificación y flexibilidad",

                desc: "Queremos tener objetivos claros, pero poder cambiar prioridades cuando haga falta.",

                scores: {
                    Scrum: 2,
                    Kanban: 2,
                    Agile: 4,
                    Cascada: 1
                }
            }

        ]
    }

];


// ==========================================
// INFORMACIÓN DE CADA METODOLOGÍA
// ==========================================

const methodInfo = {

    Scrum: {

        icon: "refresh-cw",

        summary:
            "Scrum parece encajar con un equipo que necesita objetivos cortos, coordinación frecuente y revisiones para mejorar en cada ciclo.",

        tags: [
            "Sprints",
            "Trabajo en equipo",
            "Revisión periódica"
        ],

        reasons: [

            "Tus respuestas favorecen dividir el trabajo en ciclos cortos con objetivos claros.",

            "Las revisiones frecuentes ayudan a detectar problemas antes de que se acumulen.",

            "La coordinación y la definición de responsabilidades pueden ayudar al equipo a mantener el foco."

        ],

        steps: [

            [
                "01 · Preparar",

                "Definan el objetivo del proyecto y armen una lista priorizada de tareas."
            ],

            [
                "02 · Planificar un sprint",

                "Elijan un conjunto realista de tareas para un ciclo corto, por ejemplo de una o dos semanas."
            ],

            [
                "03 · Revisar y mejorar",

                "Compartan avances, revisen el resultado y acuerden qué cambiar en el siguiente ciclo."
            ]

        ]

    },


    Kanban: {

        icon: "layout-dashboard",

        summary:
            "Kanban parece una buena opción si necesitás visualizar el trabajo, organizar prioridades y avanzar de forma continua sin sumar demasiadas reuniones.",

        tags: [
            "Tablero visual",
            "Flujo continuo",
            "Límites de tareas"
        ],

        reasons: [

            "Tus respuestas indican que ver el estado de cada tarea puede aportar claridad.",

            "Un flujo continuo permite cambiar prioridades cuando aparece trabajo urgente.",

            "Es una forma sencilla de empezar, especialmente en equipos pequeños o tareas de mantenimiento."

        ],

        steps: [

            [
                "01 · Crear el tablero",

                "Armen columnas como Pendiente, En curso, En revisión y Terminado."
            ],

            [
                "02 · Acordar prioridades",

                "Cada tarea debe tener una descripción clara, responsable y prioridad."
            ],

            [
                "03 · Revisar el flujo",

                "Detecten tareas trabadas y eviten empezar demasiadas cosas al mismo tiempo."
            ]

        ]

    },


    Cascada: {

        icon: "workflow",

        summary:
            "Cascada parece adecuada si el alcance y los requisitos están definidos, el resultado esperado es estable y necesitás organizar el trabajo por etapas.",

        tags: [
            "Etapas secuenciales",
            "Planificación previa",
            "Documentación"
        ],

        reasons: [

            "Tus respuestas sugieren que el resultado final puede describirse desde el comienzo.",

            "La organización por fases facilita definir entregables y puntos de control.",

            "Una planificación inicial clara puede ayudar cuando los cambios durante el desarrollo son poco probables."

        ],

        steps: [

            [
                "01 · Definir el alcance",

                "Documenten objetivos, requisitos, entregables y criterios de aceptación."
            ],

            [
                "02 · Planificar las fases",

                "Ordenen análisis, diseño, implementación, pruebas y entrega."
            ],

            [
                "03 · Validar cada etapa",

                "Revisen los entregables antes de avanzar y registren cualquier cambio acordado."
            ]

        ]

    },


    Agile: {

        icon: "repeat-2",

        summary:
            "Un enfoque Ágil parece encajar si necesitás adaptarte a cambios, validar ideas y entregar mejoras de manera gradual. Podés usar prácticas de Scrum o Kanban según el equipo.",

        tags: [
            "Adaptabilidad",
            "Entregas incrementales",
            "Feedback frecuente"
        ],

        reasons: [

            "Tus respuestas apuntan a que los requisitos pueden cambiar o descubrirse durante el trabajo.",

            "Validar versiones pequeñas permite aprender antes de invertir demasiado en una solución.",

            "La flexibilidad ayuda a priorizar lo que más valor aporta en cada momento."

        ],

        steps: [

            [
                "01 · Definir el valor",

                "Aclaren qué problema quieren resolver y qué resultado sería útil para los usuarios."
            ],

            [
                "02 · Dividir en entregas",

                "Separar el proyecto en mejoras pequeñas que se puedan revisar y probar."
            ],

            [
                "03 · Aprender y ajustar",

                "Recolecten comentarios, reordenen prioridades y mejoren el proceso periódicamente."
            ]

        ]

    }

};


// Estado y referencias de la interfaz
const state = { current: 0, answers: {} };
const questionArea = document.getElementById("questionArea");
const formError = document.getElementById("formError");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const surveyPanel = document.querySelector(".survey-panel");
const resultPanel = document.getElementById("resultPanel");
const progressFill = document.getElementById("progressFill");
const progressTrack = document.querySelector(".progress-track");
const questionCount = document.getElementById("questionCount");
const stepLabels = document.querySelectorAll("#stepLabels span");
const answerCategories = {
    project: "Tipo de proyecto",
    team: "Equipo",
    requirements: "Requisitos",
    feedback: "Comentarios",
    planning: "Organización"
};

function icon(name) {
    return `<i data-lucide="${name}"></i>`;
}

function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }
}

function renderQuestion() {
    const question = questions[state.current];
    const selectedAnswer = state.answers[question.key];
    const progress = ((state.current + 1) / questions.length) * 100;

    questionCount.textContent = `Pregunta ${state.current + 1} de ${questions.length}`;
    progressFill.style.width = `${progress}%`;
    progressTrack.setAttribute("aria-valuenow", String(state.current + 1));

    stepLabels.forEach((step, index) => {
        step.classList.toggle("active", index === state.current);
        step.classList.toggle("done", index < state.current);
    });

    questionArea.innerHTML = `
        <div class="question-block">
            <h3 class="question-title">
                <span class="question-number">${state.current + 1}.</span>
                ${question.title}
            </h3>
            <p class="question-hint">${question.hint}</p>
            <div class="options-grid" role="radiogroup" aria-label="${question.title}">
                ${question.options.map(option => `
                    <div
                        class="option-card ${selectedAnswer === option.value ? "selected" : ""}"
                        role="radio"
                        aria-checked="${selectedAnswer === option.value}"
                        tabindex="0"
                        data-value="${option.value}">
                        <span class="radio-dot"></span>
                        <span class="option-icon">${icon(option.icon)}</span>
                        <span class="option-copy">
                            <strong>${option.title}</strong>
                            <small>${option.desc}</small>
                        </span>
                        <span class="option-check">${icon("check-circle-2")}</span>
                    </div>
                `).join("")}
            </div>
        </div>
    `;

    questionArea.querySelectorAll(".option-card").forEach(card => {
        const choose = () => selectAnswer(question.key, card.dataset.value);

        card.addEventListener("click", choose);
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                choose();
            }
        });
    });

    prevBtn.disabled = state.current === 0;
    nextBtn.innerHTML = state.current === questions.length - 1
        ? `Analizar respuestas ${icon("sparkles")}`
        : `Siguiente ${icon("arrow-right")}`;
    formError.textContent = "";
    refreshIcons();
}

function selectAnswer(key, value) {
    state.answers[key] = value;

    questionArea.querySelectorAll(".option-card").forEach(card => {
        const isSelected = card.dataset.value === value;
        card.classList.toggle("selected", isSelected);
        card.setAttribute("aria-checked", String(isSelected));
    });

    formError.textContent = "";
    refreshIcons();
}

function goNext() {
    const question = questions[state.current];

    if (!state.answers[question.key]) {
        formError.textContent = "Elegí una opción para continuar.";
        return;
    }

    if (state.current === questions.length - 1) {
        showResult();
        return;
    }

    state.current += 1;
    renderQuestion();
    surveyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function goPrev() {
    if (state.current === 0) {
        return;
    }

    state.current -= 1;
    renderQuestion();
}

function calculateScores() {
    const scores = { Scrum: 0, Kanban: 0, Agile: 0, Cascada: 0 };

    questions.forEach(question => {
        const answer = question.options.find(
            option => option.value === state.answers[question.key]
        );

        if (!answer) {
            return;
        }

        Object.entries(answer.scores).forEach(([method, points]) => {
            scores[method] += points;
        });
    });

    return scores;
}

function scorePercentages(scores) {
    const results = Object.entries(scores).map(([name, score]) => ({
        name,
        score,
        percent: 0
    }));
    const maxScore = Math.max(...results.map(result => result.score));
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0) || 1;

    results.forEach(result => {
        result.percent = Math.round((result.score / total) * 100);
    });

    const winner = results.reduce((best, result) => (
        result.score > best.score ? result : best
    ));
    const tied = results.filter(result => result.score === maxScore);

    return { results, winner, tied };
}

function getAnswerLabel(question) {
    const selected = question.options.find(
        option => option.value === state.answers[question.key]
    );

    return selected ? selected.title : "Sin respuesta";
}

function getPreferredMethod() {
    return {
        sprints: "Scrum",
        flow: "Kanban",
        phases: "Cascada",
        mixed: "Agile"
    }[state.answers.planning];
}

function renderScoreBars(results, winnerName) {
    return [...results]
        .sort((first, second) => second.score - first.score)
        .map(result => `
            <div class="score-row ${result.name === winnerName ? "winner" : ""}">
                <span class="score-row-label">
                    ${result.name}${result.name === winnerName ? " ★" : ""}
                </span>
                <div class="score-track">
                    <div style="width: ${Math.max(3, result.percent)}%"></div>
                </div>
                <strong>${result.percent}%</strong>
            </div>
        `).join("");
}

function renderReasons(reasons, isTie) {
    const reasonItems = reasons.map(reason => `
        <li>${icon("check-circle-2")}<span>${reason}</span></li>
    `).join("");
    const tieMessage = isTie ? `
        <li>
            ${icon("info")}
            <span>
                Hubo un empate entre varias opciones. Se priorizó tu preferencia
                de organización para elegir la sugerencia principal.
            </span>
        </li>
    ` : "";

    return reasonItems + tieMessage;
}

function renderStarterSteps(steps) {
    return steps.map(([title, description]) => {
        const [number, label] = title.split(" · ");

        return `
            <article class="starter-step">
                <span>${number}</span>
                <h4>${label}</h4>
                <p>${description}</p>
            </article>
        `;
    }).join("");
}

function renderAnswerSummary() {
    return questions.map((question, index) => `
        <div class="answer-item">
            <span>Pregunta ${index + 1} · ${answerCategories[question.key]}</span>
            <strong>${getAnswerLabel(question)}</strong>
        </div>
    `).join("");
}

function showResult() {
    const scores = calculateScores();
    const { results, winner, tied } = scorePercentages(scores);
    const preferredMethod = getPreferredMethod();
    const chosen = tied.length > 1
        ? tied.find(result => result.name === preferredMethod)
            || tied.find(result => result.name === "Agile")
            || tied[0]
        : winner;
    const info = methodInfo[chosen.name];
    const maxPossible = questions.reduce((total, question) => (
        total + Math.max(...question.options.map(
            option => option.scores[chosen.name]
        ))
    ), 0);
    const percentage = maxPossible
        ? Math.min(100, Math.round((chosen.score / maxPossible) * 100))
        : 0;

    surveyPanel.classList.add("hidden");
    resultPanel.classList.remove("hidden");
    document.getElementById("resultSymbol").innerHTML = icon(info.icon);
    document.getElementById("winnerName").textContent = chosen.name;
    document.getElementById("winnerSummary").textContent = info.summary;
    document.getElementById("winnerScore").textContent = `${percentage}%`;
    document.getElementById("scoreRingFill").style.width = `${percentage}%`;
    document.getElementById("winnerTags").innerHTML = info.tags
        .map(tag => `<span>${tag}</span>`)
        .join("");
    document.getElementById("scoreBars").innerHTML = renderScoreBars(results, chosen.name);
    document.getElementById("reasonList").innerHTML = renderReasons(
        info.reasons,
        tied.length > 1
    );
    document.getElementById("starterSteps").innerHTML = renderStarterSteps(info.steps);
    document.getElementById("answerSummary").innerHTML = renderAnswerSummary();

    resultPanel.dataset.winner = chosen.name;
    resultPanel.dataset.percent = String(percentage);
    resultPanel.dataset.scores = JSON.stringify(scores);

    refreshIcons();
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetSurvey() {
    state.current = 0;
    state.answers = {};
    resultPanel.classList.add("hidden");
    surveyPanel.classList.remove("hidden");
    renderQuestion();
    surveyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showSurveyForEditing() {
    resultPanel.classList.add("hidden");
    surveyPanel.classList.remove("hidden");
    surveyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Eventos de la encuesta
nextBtn.addEventListener("click", event => {
    event.preventDefault();
    goNext();
});
prevBtn.addEventListener("click", goPrev);
document.getElementById("editAnswersBtn").addEventListener("click", showSurveyForEditing);
document.getElementById("restartBtn").addEventListener("click", resetSurvey);

renderQuestion();
})();