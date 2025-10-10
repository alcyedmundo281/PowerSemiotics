import React from 'react';

const navigation = [
    { label: 'Recursos', href: '#recursos' },
    { label: 'Visión', href: '#vision' },
    { label: 'Pedagogía', href: '#pedagogia' },
    { label: 'Currículo', href: '#curriculo' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Accesibilidad', href: '#accesibilidad' }
] as const;

const Header: React.FC = () => {
    return (
        <header className="relative overflow-hidden border-b border-white/10 bg-slate-900 text-slate-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]" aria-hidden="true"></div>
            <div className="relative container mx-auto flex flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
                <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.5em] text-sky-300">Powersemiotics · Medicina y Datos</p>
                    <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                        Estadísticos Descubiertos
                    </h1>
                    <p className="max-w-2xl text-base text-slate-200">
                        Transformamos la estadística en un lenguaje clínico comprensible. Este blueprint redefine la página como
                        un recurso insignia para profesionales que desean dominar la semiótica de los datos en salud.
                    </p>
                </div>
                <nav aria-label="Navegación principal" className="flex flex-wrap gap-3 text-sm font-semibold">
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            className="rounded-full border border-slate-100/20 bg-white/5 px-4 py-2 text-slate-100 transition duration-200 hover:bg-white/20"
                            href={item.href}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
