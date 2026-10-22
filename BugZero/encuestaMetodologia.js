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


// ==========================================
// ESTADO DE LA ENCUESTA
// ==========================================

const state = {

    current: 0,

    answers: {}

};


// ==========================================
// ELEMENTOS DEL HTML
// ==========================================

const questionArea =
    document.getElementById("questionArea");

const formError =
    document.getElementById("formError");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");

const surveyPanel =
    document.querySelector(".survey-panel");

const resultPanel =
    document.getElementById("resultPanel");


// ==========================================
// FUNCIONES AUXILIARES
// ==========================================

function icon(name) {

    return `<i data-lucide="${name}"></i>`;

}


function refreshIcons() {

    if (window.lucide) {

        window.lucide.createIcons();

    }

}


// ==========================================
// MOSTRAR UNA PREGUNTA
// ==========================================

function renderQuestion() {

    const q = questions[state.current];

    const selected = state.answers[q.key];


    // Número de pregunta

    document.getElementById("questionCount").textContent =
        `Pregunta ${state.current + 1} de ${questions.length}`;


    // Actualizar progreso

    document.getElementById("progressFill").style.width =
        `${((state.current + 1) / questions.length) * 100}%`;


    // Actualizar indicadores

    document.querySelectorAll("#stepLabels span").forEach(
        (el, i) => {

            el.classList.toggle(
                "active",
                i === state.current
            );

            el.classList.toggle(
                "done",
                i < state.current
            );

        }
    );


    // Construir las opciones de la pregunta

    questionArea.innerHTML = `

        <div class="question-block">

            <h3 class="question-title">

                <span class="question-number">
                    ${state.current + 1}.
                </span>

                ${q.title}

            </h3>

            <p class="question-hint">
                ${q.hint}
            </p>

            <div
                class="options-grid"
                role="radiogroup"
                aria-label="${q.title}">

                ${q.options.map(o => `

                    <div
                        class="option-card ${
                            selected === o.value ? "selected" : ""
                        }"
                        role="radio"
                        aria-checked="${selected === o.value}"
                        tabindex="0"
                        data-value="${o.value}">

                        <span class="radio-dot"></span>

                        <span class="option-icon">
                            ${icon(o.icon)}
                        </span>

                        <span class="option-copy">

                            <strong>
                                ${o.title}
                            </strong>

                            <small>
                                ${o.desc}
                            </small>

                        </span>

                        <span class="option-check">
                            ${icon("check-circle-2")}
                        </span>

                    </div>

                `).join("")}

            </div>

        </div>

    `;


    // Activar las opciones

    questionArea
        .querySelectorAll(".option-card")
        .forEach(card => {

            const choose = () => {

                selectAnswer(
                    q.key,
                    card.dataset.value
                );

            };


            card.addEventListener("click", choose);


            card.addEventListener("keydown", e => {

                if (
                    e.key === "Enter" ||
                    e.key === " "
                ) {

                    e.preventDefault();

                    choose();

                }

            });

        });


    // Botón anterior

    prevBtn.disabled = state.current === 0;


    // Texto del botón siguiente

    nextBtn.innerHTML =

        state.current === questions.length - 1

            ? `Analizar respuestas ${icon("sparkles")}`

            : `Siguiente ${icon("arrow-right")}`;


    // Limpiar errores

    formError.textContent = "";


    refreshIcons();

}


// ==========================================
// SELECCIONAR UNA RESPUESTA
// ==========================================

function selectAnswer(key, value) {

    state.answers[key] = value;

    const q = questions[state.current];


    questionArea
        .querySelectorAll(".option-card")
        .forEach(card => {

            const selected =
                card.dataset.value === value;


            card.classList.toggle(
                "selected",
                selected
            );


            card.setAttribute(
                "aria-checked",
                String(selected)
            );

        });


    formError.textContent = "";

    refreshIcons();

}


// ==========================================
// AVANZAR A LA SIGUIENTE PREGUNTA
// ==========================================

function goNext() {

    const q = questions[state.current];


    // Verificar que se haya elegido una opción

    if (!state.answers[q.key]) {

        formError.textContent =
            "Elegí una opción para continuar.";

        return;

    }


    // Avanzar o analizar

    if (state.current < questions.length - 1) {

        state.current++;

        renderQuestion();


        surveyPanel.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    } else {

        showResult();

    }

}


// ==========================================
// VOLVER A LA PREGUNTA ANTERIOR
// ==========================================

function goPrev() {

    if (state.current > 0) {

        state.current--;

        renderQuestion();

    }

}


// ==========================================
// CALCULAR PUNTAJES
// ==========================================

function calculateScores() {

    const scores = {

        Scrum: 0,

        Kanban: 0,

        Agile: 0,

        Cascada: 0

    };


    // Recorrer cada pregunta y sumar puntos

    questions.forEach(q => {

        const answer = q.options.find(

            o => o.value === state.answers[q.key]

        );


        if (answer) {

            Object.entries(answer.scores).forEach(

                ([method, points]) => {

                    scores[method] += points;

                }

            );

        }

    });


    return scores;

}


// ==========================================
// COMPARAR LAS METODOLOGÍAS
// ==========================================

function scorePercentages(scores) {

    const raw = Object.entries(scores).map(

        ([name, score]) => ({

            name,

            score,

            percent: 0

        })

    );


    const maxScore = Math.max(

        ...raw.map(x => x.score)

    );


    // Obtener el total de puntos asignados

    const total =

        scores.Scrum +
        scores.Kanban +
        scores.Agile +
        scores.Cascada || 1;


    // Calcular porcentajes relativos

    raw.forEach(item => {

        item.percent = Math.round(

            item.score / total * 100

        );

    });


    // Encontrar la metodología con más puntos

    const winner = raw.reduce(

        (a, b) =>

            b.score > a.score ? b : a

    );


    // Detectar empates

    const tied = raw.filter(

        x => x.score === maxScore

    );


    return {

        raw,

        winner,

        tied,

        maxScore

    };

}


// ==========================================
// OBTENER EL TEXTO DE UNA RESPUESTA
// ==========================================

function getAnswerLabel(q) {

    const chosen = q.options.find(

        o => o.value === state.answers[q.key]

    );


    return chosen

        ? chosen.title

        : "Sin respuesta";

}


// ==========================================
// ANALIZAR Y MOSTRAR LOS RESULTADOS
// ==========================================

function showResult() {

    const scores = calculateScores();


    const {

        raw,

        winner,

        tied

    } = scorePercentages(scores);


    let chosen = winner;


    // Resolver empates según la preferencia de organización

    if (tied.length > 1) {

        const planning = state.answers.planning;


        const preferred = {

            sprints: "Scrum",

            flow: "Kanban",

            phases: "Cascada",

            mixed: "Agile"

        }[planning];


        chosen =

            tied.find(x => x.name === preferred) ||

            tied.find(x => x.name === "Agile") ||

            tied[0];

    }


    // Información de la metodología seleccionada

    const info = methodInfo[chosen.name];


    // Calcular el máximo posible para la metodología

    const maxPossible = questions.reduce(

        (total, q) =>

            total + Math.max(

                ...q.options.map(

                    o => o.scores[chosen.name]

                )

            ),

        0

    );


    // Porcentaje estimado de coincidencia

    const pct = Math.min(

        100,

        Math.round(

            chosen.score / maxPossible * 100

        )

    );


    // Ocultar la encuesta y mostrar resultados

    surveyPanel.classList.add("hidden");

    resultPanel.classList.remove("hidden");


    // Icono de la metodología

    document.getElementById("resultSymbol").innerHTML =

        icon(info.icon);


    // Nombre de la metodología

    document.getElementById("winnerName").textContent =

        chosen.name;


    // Explicación

    document.getElementById("winnerSummary").textContent =

        info.summary;


    // Porcentaje

    document.getElementById("winnerScore").textContent =

        `${pct}%`;


    document.getElementById("scoreRingFill").style.width =

        `${pct}%`;


    // Etiquetas

    document.getElementById("winnerTags").innerHTML =

        info.tags.map(

            tag => `<span>${tag}</span>`

        ).join("");


    // Ordenar metodologías de mayor a menor puntaje

    document.getElementById("scoreBars").innerHTML =

        raw

            .sort((a, b) => b.score - a.score)

            .map(item => `

                <div class="score-row ${
                    item.name === chosen.name ? "winner" : ""
                }">

                    <span class="score-row-label">

                        ${item.name}

                        ${item.name === chosen.name ? " ★" : ""}

                    </span>

                    <div class="score-track">

                        <div style="width: ${
                            Math.max(3, item.percent)
                        }%"></div>

                    </div>

                    <strong>
                        ${item.percent}%
                    </strong>

                </div>

            `).join("");


    // Explicar los motivos de la recomendación

    const extra = tied.length > 1

        ? `

            <li>

                ${icon("info")}

                <span>
                    Hubo un empate entre varias opciones.
                    Se priorizó tu preferencia de organización
                    para elegir la sugerencia principal.
                </span>

            </li>

        `

        : "";


    document.getElementById("reasonList").innerHTML =

        info.reasons.map(

            reason => `

                <li>

                    ${icon("check-circle-2")}

                    <span>${reason}</span>

                </li>

            `

        ).join("") + extra;


    // Mostrar los primeros pasos recomendados

    document.getElementById("starterSteps").innerHTML =

        info.steps.map(step => `

            <article class="starter-step">

                <span>
                    ${step[0].split(" · ")[0]}
                </span>

                <h4>
                    ${step[0].split(" · ")[1]}
                </h4>

                <p>
                    ${step[1]}
                </p>

            </article>

        `).join("");


    // Mostrar las respuestas elegidas

    document.getElementById("answerSummary").innerHTML =

        questions.map((q, i) => `

            <div class="answer-item">

                <span>

                    Pregunta ${i + 1} ·

                    ${
                        q.key === "project"

                            ? "Tipo de proyecto"

                            : q.key === "team"

                            ? "Equipo"

                            : q.key === "requirements"

                            ? "Requisitos"

                            : q.key === "feedback"

                            ? "Comentarios"

                            : "Organización"
                    }

                </span>

                <strong>
                    ${getAnswerLabel(q)}
                </strong>

            </div>

        `).join("");


    // Actualizar iconos

    refreshIcons();


    // Mostrar la pantalla de resultados

    resultPanel.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });


    // Guardar información para descargar el resultado

    resultPanel.dataset.winner = chosen.name;

    resultPanel.dataset.percent = pct;

    resultPanel.dataset.scores = JSON.stringify(scores);

}


// ==========================================
// REINICIAR LA ENCUESTA
// ==========================================

function resetSurvey() {

    state.current = 0;

    state.answers = {};


    // Ocultar resultados

    resultPanel.classList.add("hidden");


    // Mostrar encuesta

    surveyPanel.classList.remove("hidden");


    // Volver a la primera pregunta

    renderQuestion();


    surveyPanel.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


// ==========================================
// DESCARGAR EL RESULTADO COMO TXT
// ==========================================

function downloadResult() {

    const winner = resultPanel.dataset.winner;

    const pct = resultPanel.dataset.percent;

    const scores = JSON.parse(

        resultPanel.dataset.scores || "{}"

    );


    const info = methodInfo[winner];


    // Construir el contenido del archivo

    const lines = [

        "BUGZERO | RESULTADO DE ENCUESTA METODOLÓGICA",

        "============================================",

        "",

        `Metodología recomendada: ${winner}`,

        `Coincidencia estimada: ${pct}%`,

        "",

        info.summary,

        "",

        "¿Por qué se recomienda?",

        ...info.reasons.map(

            reason => `- ${reason}`

        ),

        "",

        "Puntajes relativos:",

        ...Object.entries(scores).map(

            ([method, points]) =>

                `- ${method}: ${points} puntos`

        ),

        "",

        "Respuestas:",

        ...questions.map(

            (q, i) =>

                `${i + 1}. ${q.title}\n   ${getAnswerLabel(q)}`

        ),

        "",

        "Nota: resultado orientativo basado en reglas de puntuación simples."

    ];


    // Crear el archivo

    const blob = new Blob(

        [lines.join("\n")],

        {

            type: "text/plain;charset=utf-8"

        }

    );


    // Crear enlace temporal de descarga

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");


    a.href = url;

    a.download = "resultado-encuesta-bugzero.txt";


    document.body.appendChild(a);

    a.click();

    a.remove();


    URL.revokeObjectURL(url);

}


// ==========================================
// BOTONES DE LA ENCUESTA
// ==========================================


// Siguiente / analizar

nextBtn.addEventListener(

    "click",

    goNext

);


// Anterior

prevBtn.addEventListener(

    "click",

    goPrev

);


// Editar las respuestas

document.getElementById("editAnswersBtn")

    .addEventListener("click", () => {

        resultPanel.classList.add("hidden");

        surveyPanel.classList.remove("hidden");


        surveyPanel.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });


// Realizar otra encuesta

document.getElementById("restartBtn")

    .addEventListener(

        "click",

        resetSurvey

    );


// Descargar TXT

document.getElementById("downloadBtn")

    .addEventListener(

        "click",

        downloadResult

    );


// Imprimir o guardar como PDF

document.getElementById("printBtn")

    .addEventListener(

        "click",

        () => window.print()

    );


// ==========================================
// MENÚ RESPONSIVE
// ==========================================

document.getElementById("menuToggle")

    .addEventListener("click", () => {

        const nav = document.getElementById("topNav");


        const open = nav.classList.toggle("open");


        document.getElementById("menuToggle")

            .setAttribute(

                "aria-expanded",

                String(open)

            );

    });


// Cerrar menú al seleccionar una sección

document.querySelectorAll("#topNav a")

    .forEach(a => {

        a.addEventListener("click", () => {

            document.getElementById("topNav")

                .classList.remove("open");

        });

    });


// ==========================================
// INICIAR LA PÁGINA
// ==========================================

renderQuestion();