import React from 'react';

interface Resource {
    title: string;
    description: string;
    href: string;
    cta: string;
    external?: boolean;
}

interface ResourceCenterProps {
    resources: readonly Resource[];
}

const ResourceCenter: React.FC<ResourceCenterProps> = ({ resources }) => {
    return (
        <section id="recursos" className="space-y-10">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">Centro de recursos</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-900">Acceso directo a archivos y guías clave</h2>
                <p className="mt-4 text-base text-slate-600">
                    Encuentra en un solo lugar los enlaces a la hoja publicada, el dataset, la metadata del proyecto y la guía
                    para ejecutar la experiencia en tu propio entorno.
                </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                {resources.map((resource) => (
                    <article
                        key={resource.href}
                        className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-emerald-100 bg-white p-8 shadow-lg shadow-emerald-100/60"
                    >
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-emerald-700">{resource.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{resource.description}</p>
                        </div>
                        <a
                            href={resource.href}
                            target={resource.external ? '_blank' : undefined}
                            rel={resource.external ? 'noreferrer' : undefined}
                            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-600"
                        >
                            {resource.cta}
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ResourceCenter;
