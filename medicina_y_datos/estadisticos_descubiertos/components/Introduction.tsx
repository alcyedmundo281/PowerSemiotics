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
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-slate-100 shadow-2xl">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.35),_transparent_65%)] lg:block" aria-hidden="true"></div>
            <div className="relative mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-6">
                    <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">
                        Blueprint 2025
                    </p>
                    <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                        Alineamos narrativa, pedagogía y tecnología en una sola experiencia
                    </h2>
                    <p className="text-base text-slate-200">
                        El rediseño coloca la misión educativa al frente: guiar a profesionales de la salud en el arte de
                        traducir datos en símbolos clínicos accionables. El recorrido está pensado para leerse de arriba hacia
                        abajo como una historia completa.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/50 transition-transform duration-200 hover:-translate-y-0.5"
                            href="#curriculo"
                        >
                            Explorar la secuencia curricular
                        </a>
                        <a
                            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:bg-white/10"
                            href="#implementacion"
                        >
                            Ver la hoja de ruta
                        </a>
                    </div>
                </div>
                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-teal-200">Lectura guiada</h3>
                    <ul className="mt-5 space-y-4 text-sm text-slate-100/90">
                        <li className="flex gap-3">
                            <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-400/30 text-xs font-bold text-teal-200">
                                1
                            </span>
                            <span>
                                Define la identidad y el público objetivo en la sección <strong>Visión</strong>.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-400/30 text-xs font-bold text-sky-200">
                                2
                            </span>
                            <span>
                                Sigue el hilo pedagógico y los módulos para entender cómo se construye la maestría.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-400/30 text-xs font-bold text-rose-200">
                                3
                            </span>
                            <span>
                                Cierra con accesibilidad e implementación para pasar del concepto a la acción coordinada.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
