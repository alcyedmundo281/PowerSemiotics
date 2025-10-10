import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ResourceCenter from './components/ResourceCenter';

const checklistSteps = [
    { label: '1', text: 'Descarga el CSV o abre la hoja publicada.', accent: 'bg-sky-400/30 text-sky-100' },
    {
        label: '2',
        text: 'Revisa la guía de preparación y configura tus herramientas (Sheets, Excel, R o Python).',
        accent: 'bg-teal-400/30 text-teal-100'
    },
    {
        label: '3',
        text: 'Sigue los cuatro módulos en orden y documenta tus hallazgos en el cuaderno clínico.',
        accent: 'bg-rose-400/30 text-rose-100'
    }
] as const;

const preparationSteps = [
    {
        title: '1. Explora los datos',
        items: [
            <>
                Abre la hoja publicada y localiza las pestañas <strong>Datos</strong> y <strong>Diccionario</strong>.
            </>,
            <>Identifica variables clave: edad, sexo, procedencia y factores de riesgo.</>,
            <>Anota dudas clínicas que quieras responder con la información disponible.</>
        ]
    },
    {
        title: '2. Configura tus herramientas',
        items: [
            <>Excel, Google Sheets o LibreOffice para cálculos rápidos.</>,
            <>
                R o Python (Jupyter) para análisis reproducible: <code>read.csv()</code> o <code>pandas.read_csv()</code>.
            </>,
            <>Plantilla de cuaderno clínico para documentar hallazgos.</>
        ]
    },
    {
        title: '3. Establece tus reglas de decisión',
        items: [
            <>Define umbrales clínicos relevantes (ej. reducción ≥5&nbsp;mmHg).</>,
            <>Determina el alfa que usarás (recomendado 0.05) y justifica tu elección.</>,
            <>Lista posibles confusores a controlar (edad, comorbilidades).</>
        ]
    },
    {
        title: '4. Prepara tus entregables',
        items: [
            <>Planifica un resumen ejecutivo de una página por módulo.</>,
            <>Configura una carpeta compartida para gráficas y tablas.</>,
            <>Reserva 15 minutos finales para reflexión y discusión clínica.</>
        ]
    }
] as const;

const microSimulations = [
    {
        title: 'Exploración inicial',
        steps: [
            <>
                <strong>Filtra</strong> pacientes ≥65 años y calcula la media de presión arterial sistólica.
            </>,
            <>
                <strong>Cuenta</strong> cuántos provienen de zonas rurales vs. urbanas.
            </>,
            <>
                <strong>Resultado esperado:</strong> media ≈148&nbsp;mmHg; proporción rural 60%.
            </>
        ]
    },
    {
        title: 'Comparación de intervenciones',
        steps: [
            <>
                <strong>Selecciona</strong> pacientes que recibieron tratamiento antihipertensivo.
            </>,
            <>
                <strong>Aplica</strong> una t de muestras independientes vs. el grupo sin tratamiento.
            </>,
            <>
                <strong>Resultado esperado:</strong> diferencia media -6.2&nbsp;mmHg (IC95% -9.4, -3.0), p = 0.001.
            </>
        ]
    },
    {
        title: 'Pronóstico y riesgo',
        steps: [
            <>
                <strong>Modela</strong> la probabilidad de reingreso con regresión logística (riesgo alto vs. bajo).
            </>,
            <>
                <strong>Incluye</strong> edad, zona y diabetes como predictores.
            </>,
            <>
                <strong>Resultado esperado:</strong> OR diabetes 2.8 (IC95% 1.2-6.5); edad por década OR 1.4.
            </>
        ]
    }
] as const;

const moduleThemes = {
    teal: {
        container: 'border-teal-100 shadow-teal-100/40',
        heading: 'text-teal-700',
        panel: 'border-teal-100 bg-teal-50/60',
        accent: 'text-teal-600',
        link: 'text-teal-700 underline decoration-teal-400 underline-offset-4'
    },
    amber: {
        container: 'border-amber-100 shadow-amber-100/40',
        heading: 'text-amber-700',
        panel: 'border-amber-100 bg-amber-50/60',
        accent: 'text-amber-600',
        link: 'text-amber-700 underline decoration-amber-400 underline-offset-4'
    },
    rose: {
        container: 'border-rose-100 shadow-rose-100/40',
        heading: 'text-rose-700',
        panel: 'border-rose-100 bg-rose-50/60',
        accent: 'text-rose-600',
        link: 'text-rose-700 underline decoration-rose-400 underline-offset-4'
    },
    indigo: {
        container: 'border-indigo-100 shadow-indigo-100/40',
        heading: 'text-indigo-700',
        panel: 'border-indigo-100 bg-indigo-50/60',
        accent: 'text-indigo-600',
        link: 'text-indigo-700 underline decoration-indigo-400 underline-offset-4'
    }
} as const;

type ModuleThemeKey = keyof typeof moduleThemes;

const modules = [
    {
        id: 'modulo1',
        theme: 'teal' as ModuleThemeKey,
        title: 'Módulo 1 · Formular la pregunta clínica correcta',
        description:
            'Conviertes la incertidumbre clínica en una hipótesis comprobable con la estructura PICO. Diferencias variable independiente, dependiente y tipo de dato para anticipar el análisis.',
        highlights: [
            <>
                <strong>Lectura guiada:</strong> caso de hipertensión rural.
            </>,
            <>
                <strong>Actividad:</strong> completa la plantilla PICO con datos reales del dataset.
            </>,
            <>
                <strong>Apoyo visual:</strong> tabla de clasificación de variables con ejemplos.
            </>
        ],
        deliverable: 'Documento PICO + lista de variables con tipo y rol.',
        verification: '¿Cada elemento del PICO responde a la historia clínica y evita ambigüedades?',
        resources: [
            { label: 'Plantilla PICO', href: '#plantillas' },
            { label: 'Metadata módulos', href: './metadata.json' }
        ]
    },
    {
        id: 'modulo2',
        theme: 'amber' as ModuleThemeKey,
        title: 'Módulo 2 · Describir la cohorte y visualizar la historia',
        description:
            'Elaboras tablas de frecuencias, medidas de tendencia central y dispersión adaptadas a la distribución. Construyes visualizaciones que resalten patrones clínicamente relevantes.',
        highlights: [
            <>
                <strong>Ejemplo resuelto:</strong> mediana e IQR frente a outliers.
            </>,
            <>
                <strong>Actividad:</strong> histograma y boxplot por zona geográfica.
            </>,
            <>
                <strong>Tip clínico:</strong> traduce estadísticas a lenguaje para junta médica.
            </>
        ],
        deliverable: 'Dashboard de una página con tabla descriptiva y dos gráficos.',
        verification: '¿Las medidas corresponden al tipo de distribución? ¿Los gráficos son accesibles?',
        resources: [
            { label: 'Laboratorio: exploración inicial', href: '#laboratorio' },
            { label: 'Plantilla de dashboard', href: '#plantillas' }
        ]
    },
    {
        id: 'modulo3',
        theme: 'rose' as ModuleThemeKey,
        title: 'Módulo 3 · Comparar grupos y diferenciar azar de señal',
        description:
            'Seleccionas y ejecutas la prueba adecuada (t de Student, U de Mann-Whitney, χ²). Interpretas p-valores e intervalos de confianza desde la relevancia clínica.',
        highlights: [
            <>
                <strong>Guía de decisión:</strong> árbol para elegir la prueba correcta.
            </>,
            <>
                <strong>Ejemplo:</strong> reducción de presión arterial según tratamiento.
            </>,
            <>
                <strong>Actividad:</strong> redacta un párrafo de resultados para comité de ética.
            </>
        ],
        deliverable: 'Tabla con estadísticos clave + interpretación narrativa (≤120 palabras).',
        verification: '¿Se distingue significancia estadística y clínica? ¿Se reporta tamaño del efecto?',
        resources: [
            { label: 'Laboratorio: comparación de intervenciones', href: '#laboratorio' },
            { label: 'Tabla de pruebas', href: '#plantillas' }
        ]
    },
    {
        id: 'modulo4',
        theme: 'indigo' as ModuleThemeKey,
        title: 'Módulo 4 · Explorar relaciones y anticipar desenlaces',
        description:
            'Construyes modelos de correlación y regresión. Interpretas coeficientes, evalúas supuestos y comunicas implicaciones clínicas sin exagerar causalidad.',
        highlights: [
            <>
                <strong>Ejemplo guiado:</strong> regresión lineal para estimar presión arterial.
            </>,
            <>
                <strong>Actividad:</strong> correlaciones entre edad, IMC y riesgo cardiovascular.
            </>,
            <>
                <strong>Checklist:</strong> supuestos de normalidad, homocedasticidad y multicolinealidad.
            </>
        ],
        deliverable: 'Informe con coeficientes clave, gráficos de residuos y discusión clínica.',
        verification: '¿Se interpretan correctamente β y R²? ¿Se mencionan limitaciones y confusores?',
        resources: [
            { label: 'Laboratorio: pronóstico y riesgo', href: '#laboratorio' },
            { label: 'Plantilla de informe', href: '#plantillas' }
        ]
    }
] as const;

const resourceLibrary = [
    {
        title: 'Base de datos Chimborazo (CSV)',
        description:
            'Archivo anonimizado para uso formativo. Incluye variables demográficas, comorbilidades y desenlaces clínicos.',
        href: './muestra-base-datos-anonimizada-chimborazo.csv',
        cta: 'Descargar CSV'
    },
    {
        title: 'Hoja publicada para visualización rápida',
        description: 'Explora y filtra en línea sin necesidad de instalar software adicional.',
        href: './muestra-base-datos-anonimizada-chimborazo.html',
        cta: 'Abrir hoja',
        external: true
    },
    {
        title: 'Cuaderno clínico y plantilla PICO',
        description: 'Documento editable para registrar preguntas, variables, decisiones y hallazgos.',
        href: './plantillas/pico-planificacion.txt',
        cta: 'Descargar TXT'
    },
    {
        title: 'Metadata estructurada',
        description: 'JSON con descripciones de módulos, autores y resultados de aprendizaje para integraciones.',
        href: './metadata.json',
        cta: 'Ver metadata'
    }
] as const;

const progressChecks = [
    <>
        <strong>Autoevaluación:</strong> escala de confianza 1-5 en selección de pruebas, interpretación y comunicación.
    </>,
    <>
        <strong>Indicadores rápidos:</strong> número de decisiones clínicas respaldadas con evidencia cuantitativa.
    </>,
    <>
        <strong>Plan futuro:</strong> incorporar modelos multivariables, análisis de supervivencia y validación externa.
    </>
] as const;

const App: React.FC = () => {
    return (
        <div className="bg-slate-50 text-slate-800">
            <Header checklist={checklistSteps} />
            <main className="container mx-auto space-y-20 px-4 py-16 sm:px-6 lg:px-12">
                <Introduction />

                <section id="preparacion" className="rounded-3xl border border-emerald-100 bg-white px-8 py-12 shadow-xl shadow-emerald-100/40">
                    <div className="mx-auto max-w-4xl space-y-8">
                        <div className="space-y-3 text-center">
                            <p className="text-sm uppercase tracking-[0.35em] text-emerald-500">Preparación</p>
                            <h2 className="text-3xl font-bold text-slate-900">Antes de analizar: configura tu estación de trabajo</h2>
                            <p className="text-base text-slate-600">
                                Sigue estos pasos para replicar los ejemplos y abordar las tareas. Todas las herramientas sugeridas son gratuitas y multiplataforma.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            {preparationSteps.map((step) => (
                                <article key={step.title} className="flex h-full flex-col gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
                                    <h3 className="text-lg font-semibold text-emerald-700">{step.title}</h3>
                                    <ul className="space-y-2 text-sm text-emerald-900">
                                        {step.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="laboratorio" className="space-y-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm uppercase tracking-[0.35em] text-indigo-500">Laboratorio de datos</p>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900">Micro-simulaciones guiadas con la base Chimborazo</h2>
                        <p className="mt-4 text-base text-slate-600">
                            Practica antes, durante o después de cada módulo. Ejecuta los pasos con la hoja publicada o en tu entorno de análisis preferido; los resultados esperados sirven como referencia inmediata.
                        </p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {microSimulations.map((simulation) => (
                            <article key={simulation.title} className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-100 bg-white p-8 shadow-lg shadow-indigo-100/40">
                                <h3 className="text-lg font-semibold text-indigo-700">{simulation.title}</h3>
                                <ol className="space-y-3 text-sm text-slate-600">
                                    {simulation.steps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ol>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="modulo1" className="space-y-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm uppercase tracking-[0.35em] text-teal-600">Ruta de aprendizaje</p>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900">Cuatro módulos con entregables clínicos concretos</h2>
                        <p className="mt-4 text-base text-slate-600">
                            Cada módulo sigue la secuencia problema → análisis → interpretación → aplicación. Usa los cuadros de "Entrega" y "Verificación" para asegurar tu progreso.
                        </p>
                    </div>
                    {modules.map((module) => {
                        const theme = moduleThemes[module.theme];
                        return (
                            <article key={module.id} id={module.id} className={`space-y-6 rounded-3xl border bg-white p-10 shadow-xl ${theme.container}`}>
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="max-w-2xl space-y-3">
                                        <h3 className={`text-2xl font-semibold ${theme.heading}`}>{module.title}</h3>
                                        <p className="text-base text-slate-600">{module.description}</p>
                                        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
                                            {module.highlights.map((highlight, index) => (
                                                <li key={index}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`flex flex-col gap-4 rounded-2xl border ${theme.panel} p-6 text-sm text-slate-700`}>
                                        <div>
                                            <h4 className={`text-sm font-semibold uppercase tracking-[0.25em] ${theme.accent}`}>Entrega</h4>
                                            <p>{module.deliverable}</p>
                                        </div>
                                        <div>
                                            <h4 className={`text-sm font-semibold uppercase tracking-[0.25em] ${theme.accent}`}>Verificación</h4>
                                            <p>{module.verification}</p>
                                        </div>
                                        <div>
                                            <h4 className={`text-sm font-semibold uppercase tracking-[0.25em] ${theme.accent}`}>Recursos</h4>
                                            <ul className="list-disc pl-4">
                                                {module.resources.map((resource) => (
                                                    <li key={resource.href}>
                                                        <a className={theme.link} href={resource.href}>
                                                            {resource.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </section>

                <section id="plantillas" className="space-y-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm uppercase tracking-[0.35em] text-purple-500">Plantillas y ayudas visuales</p>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900">Descarga herramientas listas para usar</h2>
                        <p className="mt-4 text-base text-slate-600">
                            Copia estas plantillas directamente desde el sitio o descárgalas para trabajar en tu herramienta favorita.
                        </p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <article className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-purple-100 bg-white p-8 shadow-lg shadow-purple-100/50">
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-purple-700">Plantilla PICO y planificación de análisis</h3>
                                <p className="text-sm text-slate-600">Incluye tabla para variables, objetivos de análisis y notas clínicas.</p>
                                <div className="rounded-2xl border border-purple-100 bg-purple-50/50 p-4 text-left text-sm text-slate-700">
                                    <p className="font-semibold text-purple-700">Contenido</p>
                                    <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-xs">
Población (P):
Intervención (I):
Comparador (C):
Outcome (O):

Variables clave:
- Edad (numérica, independiente)
- Zona (categoría, modificadora)
- Presión sistólica (numérica, dependiente)

Notas clínicas iniciales:
-
-
                                    </pre>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-400"
                                    type="button"
                                    onClick={() => {
                                        const content =
                                            'Población (P):\nIntervención (I):\nComparador (C):\nOutcome (O):\n\nVariables clave:\n- Edad (numérica, independiente)\n- Zona (categoría, modificadora)\n- Presión sistólica (numérica, dependiente)\n\nNotas clínicas iniciales:\n-\n-';
                                        if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
                                            navigator.clipboard.writeText(content);
                                        }
                                    }}
                                >
                                    Copiar al portapapeles
                                </button>
                                <a
                                    className="inline-flex items-center justify-center rounded-full border border-purple-500 px-6 py-3 text-sm font-semibold text-purple-600 transition hover:bg-purple-50"
                                    href="./plantillas/pico-planificacion.txt"
                                    download
                                >
                                    Descargar TXT
                                </a>
                            </div>
                        </article>
                        <article className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-purple-100 bg-white p-8 shadow-lg shadow-purple-100/50">
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-purple-700">Dashboard descriptivo en Sheets</h3>
                                <p className="text-sm text-slate-600">Panel editable con fórmulas para medias, medianas, IQR y gráficos vinculados a la base Chimborazo.</p>
                                <div className="rounded-2xl border border-purple-100 bg-purple-50/50 p-4 text-left text-sm text-slate-700">
                                    <p className="font-semibold text-purple-700">Estructura sugerida</p>
                                    <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-xs">
Hoja 1 · Resumen cohortes
| Métrica | Zona Rural | Zona Urbana |
|---------|------------|-------------|
| N       |            |             |
| Promedio PAS |      |             |
| Mediana PAS  |      |             |
| IQR PAS      |      |             |

Hoja 2 · Visualizaciones
- Histograma PAS (bins=10)
- Boxplot PAS por zona
- Barras apiladas por factor de riesgo
                                    </pre>
                                </div>
                            </div>
                            <a
                                className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-400"
                                href="./plantillas/dashboard-descriptivo.csv"
                                download
                            >
                                Descargar CSV
                            </a>
                        </article>
                    </div>
                </section>

                <ResourceCenter resources={resourceLibrary} />

                <section className="rounded-3xl border border-slate-200 bg-white px-8 py-12 shadow-xl">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Seguimiento y mejora continua</p>
                            <h2 className="text-3xl font-bold text-slate-900">Cómo evaluar tu progreso y planear siguientes pasos</h2>
                            <p className="text-base text-slate-600">
                                Completa el registro de aprendizaje después de cada módulo, recopila preguntas emergentes y programa sesiones de discusión con tu equipo clínico.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <ul className="space-y-3 text-sm text-slate-600">
                                {progressChecks.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-slate-200 bg-slate-900 py-10 text-slate-200">
                <div className="container mx-auto flex flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
                    <p className="text-sm">© {new Date().getFullYear()} Powersemiotics · Estadísticos Descubiertos. Aprende a leer los datos como símbolos clínicos.</p>
                    <nav className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
                        <a className="hover:text-white" href="#introduccion">
                            Introducción
                        </a>
                        <a className="hover:text-white" href="#laboratorio">
                            Laboratorio
                        </a>
                        <a className="hover:text-white" href="#modulo1">
                            Módulos
                        </a>
                        <a className="hover:text-white" href="#recursos">
                            Recursos
                        </a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default App;
