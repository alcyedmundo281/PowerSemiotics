import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';

const visionPillars = [
    {
        title: 'De la estadística a la semiótica de datos',
        description:
            'Integramos la filosofía de Powersemiotics para que cada análisis estadístico revele símbolos clínicos con significado profundo.'
    },
    {
        title: 'Diseñado para profesionales del cuidado',
        description:
            'Estudiantes de medicina, residentes y clínicos con agendas demandantes encuentran aquí rutas claras, aplicables y breves.'
    },
    {
        title: 'Competencias para la práctica basada en evidencia',
        description:
            'Evaluar métodos, elegir pruebas pertinentes, traducir hallazgos en significado clínico e identificar sesgos.'
    }
] as const;

const pedagogyHighlights = [
    {
        title: 'Casos como brújula',
        subtitle: 'Aprendizaje centrado en tareas',
        points: [
            'Cada módulo abre con una pregunta clínica auténtica.',
            'La estadística aparece como la herramienta necesaria para resolver el caso.',
            'La narrativa refuerza la motivación profesional.'
        ]
    },
    {
        title: 'Modelo instruccional híbrido',
        subtitle: "Gagné + Merrill",
        points: [
            'Secuencias previsibles de atención, práctica y evaluación.',
            'Retroalimentación inmediata y guiada en cada paso.',
            'Activación de conocimientos previos para anclar conceptos nuevos.'
        ]
    },
    {
        title: 'Currículo modular',
        subtitle: 'Microlecciones reutilizables',
        points: [
            'Módulos autoconclusivos que caben en una sesión clínica.',
            'Estructura estable: objetivos, caso, guía, práctica, evaluación.',
            'Escalamiento gradual de la complejidad estadística.'
        ]
    }
] as const;

const moduleRoadmap = [
    {
        title: '1. Fundamentos: formular la pregunta',
        question: '¿Cómo convertir una incertidumbre clínica en un problema investigable?',
        objectives: [
            'Construir preguntas PICO claras.',
            'Reconocer variables dependientes e independientes.',
            'Clasificar tipos de datos y escalas de medición.'
        ],
        concepts: 'PICO, roles de variables, niveles de medición',
        activity: 'Constructor interactivo de preguntas clínicas.',
        assessment: 'Escenarios cortos para identificar variables y objetivos.'
    },
    {
        title: '2. Describir la historia que cuentan los datos',
        question: '¿Qué resúmenes y visualizaciones iluminan mejor el problema?',
        objectives: [
            'Elegir medidas de tendencia central y dispersión según la distribución.',
            'Seleccionar visualizaciones que respeten el tipo de dato.',
            'Interpretar los cambios producidos por valores atípicos.'
        ],
        concepts: 'Estadísticos descriptivos, distribución, visualización',
        activity: 'Gráficas dinámicas que responden a filtros y outliers.',
        assessment: 'Interpretar narrativas visuales en minicasos.'
    },
    {
        title: '3. Comparar grupos: señal vs. ruido',
        question: '¿El contraste observado es real o fruto del azar?',
        objectives: [
            'Elegir entre t de Student y Chi-cuadrado con base en la estructura de datos.',
            'Formular hipótesis nula y alternativa pertinentes.',
            'Explicar p-valores, intervalos de confianza y relevancia clínica.'
        ],
        concepts: 'Inferencia, hipótesis, significancia',
        activity: 'Árbol de decisiones para seleccionar pruebas.',
        assessment: 'Interpretar salidas estadísticas y redactar conclusiones.'
    },
    {
        title: '4. Explorar relaciones y predicciones',
        question: '¿Cómo describimos y anticipamos comportamientos entre variables?',
        objectives: [
            'Interpretar la fuerza y dirección de correlaciones.',
            'Distinguir correlación de causalidad.',
            'Leer coeficientes de regresión y su significado clínico.'
        ],
        concepts: 'Correlación, regresión lineal, confusión',
        activity: 'Laboratorio para trazar líneas de tendencia y comparar modelos.',
        assessment: 'Casos clínicos con outputs de regresión reales.'
    }
] as const;

const engagementLayers = [
    {
        title: 'Visualizaciones vivas',
        description:
            'Gráficas interactivas creadas con tecnologías modernas convierten cada dataset en un espacio explorable.',
        details: ['Filtros por subgrupos.', 'Exploración punto a punto.', 'Paletas accesibles y contrastadas.']
    },
    {
        title: 'Virtual Data Lab',
        description:
            'Un microsimulador que replica el flujo analítico completo: explorar, elegir la prueba, ejecutar, interpretar.',
        details: [
            'Casos clínicos guían la navegación de datos.',
            'Retroalimentación guiada en cada decisión.',
            'Resultados inmediatos listos para discusión en equipo.'
        ]
    },
    {
        title: 'Tutoría impulsada por IA',
        description:
            'Un asistente socrático que cuestiona, sugiere y refuerza la comprensión sin revelar la respuesta completa.',
        details: ['Dialoga sobre la elección de métodos.', 'Detecta malinterpretaciones frecuentes.', 'Sugiere recursos de refuerzo.']
    }
] as const;

const accessibilityFocus = {
    principles: [
        'Diseño claro, tipografía legible y ritmo visual que reduce carga cognitiva.',
        'Experiencia totalmente adaptable de escritorio a móvil para jornadas clínicas intensas.',
        'Auditorías WCAG 2.1 AA con foco en contraste, navegación por teclado y equivalentes textuales.'
    ],
    checklist: [
        'Alt text narrativo para imágenes y gráficos.',
        'Controles y simulaciones accesibles con teclado y lector de pantalla.',
        'Capacidades multimedia subtituladas y descriptivas.'
    ]
} as const;

const implementationPhases = [
    {
        phase: 'Fase 1 · Fundamentos',
        duration: '1-2 meses',
        focus: 'Definición curricular detallada, wireframes de alta fidelidad y prototipo del módulo Fundamentos con PICO Builder.'
    },
    {
        phase: 'Fase 2 · Núcleo interactivo',
        duration: '3-4 meses',
        focus: 'Desarrollo de módulos 2-4, primeras versiones de visualizaciones y lanzamiento beta del Virtual Data Lab.'
    },
    {
        phase: 'Fase 3 · Lanzamiento y expansión',
        duration: '2-3 meses',
        focus: 'Iteraciones guiadas por usuarios, ampliación del laboratorio con nuevos casos y auditoría de accesibilidad previa al despliegue público.'
    }
] as const;

const App: React.FC = () => {
    return (
        <div className="bg-slate-100 min-h-screen text-slate-800">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-20">
                <Introduction />
                <ResourceCenter resources={resourceLibrary} />

                <section id="vision" className="space-y-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Identidad estratégica</p>
                        <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
                            Un recurso premium para descifrar la semiótica de los datos clínicos
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            La página se reorganiza para contar una historia coherente: quién aprende aquí, qué dominará y
                            por qué cada paso importa para la práctica clínica basada en evidencia.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {visionPillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="rounded-3xl border border-teal-100 bg-white/90 p-8 shadow-lg shadow-teal-100/40 backdrop-blur-sm"
                            >
                                <h3 className="text-xl font-semibold text-teal-700">{pillar.title}</h3>
                                <p className="mt-3 text-base leading-relaxed text-slate-600">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="pedagogia" className="space-y-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Arquitectura pedagógica</p>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900">Cómo guiamos el descubrimiento</h2>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {pedagogyHighlights.map((item) => (
                            <article
                                key={item.title}
                                className="flex h-full flex-col gap-4 rounded-3xl bg-gradient-to-br from-indigo-600/10 via-white to-white p-8 shadow-xl"
                            >
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">{item.subtitle}</p>
                                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">{item.title}</h3>
                                </div>
                                <ul className="mt-2 space-y-3 text-sm leading-relaxed text-slate-600">
                                    {item.points.map((point) => (
                                        <li key={point} className="flex items-start gap-3">
                                            <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="curriculo" className="space-y-12">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Mapa curricular</p>
                        <h2 className="mt-4 text-4xl font-bold text-slate-900">Secuencia que construye maestría clínica</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Cada módulo incrementa la complejidad de forma deliberada. Desde formular preguntas precisas hasta
                            interpretar modelos predictivos, la narrativa guía el viaje.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {moduleRoadmap.map((module) => (
                            <div
                                key={module.title}
                                className="rounded-3xl border border-amber-100 bg-white p-8 shadow-lg shadow-amber-100/50"
                            >
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="max-w-2xl space-y-4">
                                        <h3 className="text-2xl font-semibold text-amber-600">{module.title}</h3>
                                        <p className="text-lg font-medium text-slate-800">{module.question}</p>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            {module.objectives.map((objective) => (
                                                <li key={objective} className="flex items-start gap-3">
                                                    <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-amber-400"></span>
                                                    <span>{objective}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-6 w-full max-w-sm rounded-2xl bg-amber-50 p-6 text-sm text-amber-900 lg:mt-0">
                                        <dl className="space-y-3">
                                            <div>
                                                <dt className="font-semibold uppercase tracking-wider text-amber-700">Conceptos clave</dt>
                                                <dd className="mt-1">{module.concepts}</dd>
                                            </div>
                                            <div>
                                                <dt className="font-semibold uppercase tracking-wider text-amber-700">Experiencia interactiva</dt>
                                                <dd className="mt-1">{module.activity}</dd>
                                            </div>
                                            <div>
                                                <dt className="font-semibold uppercase tracking-wider text-amber-700">Evaluación</dt>
                                                <dd className="mt-1">{module.assessment}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="experiencia" className="space-y-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-rose-500">Engagement profundo</p>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900">Interacciones que despiertan el pensamiento clínico</h2>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {engagementLayers.map((layer) => (
                            <article
                                key={layer.title}
                                className="flex h-full flex-col justify-between gap-4 rounded-3xl bg-white p-8 shadow-xl shadow-rose-100/60"
                            >
                                <div>
                                    <h3 className="text-2xl font-semibold text-rose-600">{layer.title}</h3>
                                    <p className="mt-3 text-base text-slate-600">{layer.description}</p>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                                    {layer.details.map((detail) => (
                                        <li key={detail} className="flex items-start gap-3">
                                            <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-rose-400"></span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="accesibilidad" className="grid gap-10 lg:grid-cols-2">
                    <div className="rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-2xl">
                        <p className="text-xs uppercase tracking-[0.4em] text-teal-300">Experiencia universal</p>
                        <h2 className="mt-4 text-3xl font-semibold">Principios de diseño</h2>
                        <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200">
                            {accessibilityFocus.principles.map((principle) => (
                                <li key={principle} className="flex items-start gap-3">
                                    <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-teal-400"></span>
                                    <span>{principle}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl border border-slate-300 bg-white p-8 shadow-xl">
                        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Checklist WCAG 2.1 AA</p>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900">Implementación práctica</h2>
                        <ul className="mt-6 space-y-3 text-sm text-slate-600">
                            {accessibilityFocus.checklist.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-slate-500"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section id="implementacion" className="space-y-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Hoja de ruta</p>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900">Del concepto al lanzamiento</h2>
                        <p className="mt-4 text-base text-slate-600">
                            Un plan escalonado para transformar la visión en un recurso vivo que evoluciona con la comunidad
                            médica.
                        </p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {implementationPhases.map((phase) => (
                            <article
                                key={phase.phase}
                                className="flex h-full flex-col gap-4 rounded-3xl bg-gradient-to-br from-sky-600/10 via-white to-white p-8 shadow-xl"
                            >
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">{phase.duration}</p>
                                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">{phase.phase}</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-600">{phase.focus}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl bg-gradient-to-r from-teal-500 via-indigo-500 to-sky-600 p-10 text-slate-50 shadow-2xl">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl space-y-4">
                            <h2 className="text-3xl font-bold">Próximo paso: construir el prototipo vivo</h2>
                            <p className="text-base text-slate-100/90">
                                Este blueprint reorganiza el contenido para que cualquier colaborador comprenda de un vistazo la
                                identidad, la pedagogía y el camino de implementación. Actúa como brújula para diseñadores,
                                desarrolladores e instructores.
                            </p>
                        </div>
                        <a
                            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
                            href="#vision"
                        >
                            Revisar los pilares clave
                        </a>
                    </div>
                </section>
            </main>
            <footer className="border-t border-slate-200 bg-white/60 py-6">
                <div className="container mx-auto px-4 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Powersemiotics · Estadísticos Descubiertos
                </div>
            </footer>
        </div>
    );
};

export default App;
