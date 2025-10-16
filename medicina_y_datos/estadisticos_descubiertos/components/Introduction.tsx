import React from 'react';

const overviewCards = [
    {
        title: 'Audiencia principal',
        description:
            'Estudiantes de medicina, residentes, investigadores clínicos y equipos asistenciales que necesitan reforzar su alfabetización estadística.'
    },
    {
        title: 'Resultados esperados',
        description:
            'Seleccionar pruebas adecuadas, interpretar salidas en contexto clínico y detectar sesgos frecuentes en literatura biomédica.'
    },
    {
        title: 'Duración sugerida',
        description: '4 sesiones de 60 minutos con práctica opcional adicional en el laboratorio de datos.'
    }
] as const;

const kitItems = [
    {
        badge: 'CSV',
        label: 'Descargar dataset anonimizado',
        href: './muestra-base-datos-anonimizada-chimborazo.csv'
    },
    {
        badge: 'Hoja',
        label: 'Abrir versión online',
        href: './muestra-base-datos-anonimizada-chimborazo.html',
        external: true
    },
    {
        badge: 'PICO',
        label: 'Plantilla de cuaderno clínico',
        href: './plantillas/pico-planificacion.txt',
        download: true
    },
    {
        badge: 'JSON',
        label: 'Metadata del proyecto',
        href: './metadata.json'
    }
] as const;

const Introduction: React.FC = () => {
    return (
        <section id="introduccion" className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-start">
            <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-sky-500">Por qué este laboratorio importa</p>
                <h2 className="text-3xl font-bold text-slate-900">
                    Aprende estadística clínica trabajando con un caso latinoamericano
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                    El material combina narrativa clínica y análisis de datos reales para enseñar a formular preguntas, describir
                    cohortes, comparar intervenciones y modelar relaciones. Cada bloque incluye ejemplos resueltos, tareas aplicadas
                    y criterios de éxito para validar tu comprensión sin esperar herramientas externas.
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                    {overviewCards.map((card) => (
                        <article
                            key={card.title}
                            className="rounded-3xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50"
                        >
                            <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                            <p className="mt-2 text-sm text-slate-600">{card.description}</p>
                        </article>
                    ))}
                </div>
            </div>
            <aside className="space-y-4 rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100/60">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Kit esencial</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                    {kitItems.map((item) => (
                        <li key={item.label} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-600">
                                {item.badge}
                            </span>
                            <a
                                className="text-slate-700 underline decoration-sky-400 decoration-2 underline-offset-4 hover:text-sky-600"
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noreferrer' : undefined}
                                download={item.download}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </section>
    );
};

export default Introduction;
