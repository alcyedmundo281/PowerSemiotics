import React from 'react';

interface ChecklistStep {
    label: string;
    text: string;
    accent: string;
}

interface HeaderProps {
    checklist: readonly ChecklistStep[];
}

const navigation = [
    { label: 'Inicio rápido', href: '#introduccion' },
    { label: 'Laboratorio', href: '#laboratorio' },
    { label: 'Módulos', href: '#modulo1' },
    { label: 'Plantillas', href: '#plantillas' },
    { label: 'Recursos', href: '#recursos' }
] as const;

const Header: React.FC<HeaderProps> = ({ checklist }) => {
    return (
        <header className="relative overflow-hidden border-b border-slate-800 bg-slate-900 text-slate-50">
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%)]"
                aria-hidden="true"
            ></div>
            <div className="relative container mx-auto flex flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
                <div className="max-w-3xl space-y-4">
                    <p className="text-xs uppercase tracking-[0.55em] text-sky-300">Powersemiotics · Medicina y Datos</p>
                    <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Estadísticos Descubiertos</h1>
                    <p className="text-base text-slate-200">
                        Un itinerario completo para interpretar datos clínicos reales. Descarga la base Chimborazo, sigue la guía
                        paso a paso y aplica los métodos en tu práctica sin depender de despliegues futuros.
                    </p>
                    <nav aria-label="Navegación principal" className="flex flex-wrap gap-3 text-sm font-semibold">
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="w-full max-w-sm space-y-4 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-200">Checklist inicial</h2>
                    <ul className="space-y-3 text-sm text-slate-100/90">
                        {checklist.map((step) => (
                            <li key={step.text} className="flex gap-3">
                                <span
                                    className={`mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${step.accent}`}
                                >
                                    {step.label}
                                </span>
                                <span>{step.text}</span>
                            </li>
                        ))}
                    </ul>
                    <a
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
                        href="#preparacion"
                    >
                        Comenzar ahora
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
