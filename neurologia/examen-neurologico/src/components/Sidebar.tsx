import React from 'react';
import {
    CompassIcon, ListCheckIcon, StarOfLifeIcon, StethoscopeIcon, DiagramProjectIcon,
    ClipboardListIcon, RankingStarIcon, BookOpenIcon, LightbulbIcon, ToolboxIcon
} from './Icons';

const navItems = [
    { href: '#prologo', text: 'Prólogo clínico', icon: <CompassIcon /> },
    { href: '#enfoque', text: 'Algoritmo de aproximación', icon: <ListCheckIcon /> },
    { href: '#puntos-clave', text: 'Puntos clave', icon: <StarOfLifeIcon /> },
    { href: '#componentes', text: 'Componentes esenciales', icon: <StethoscopeIcon /> },
    { href: '#mapa-nervios', text: 'Mapa de nervios craneales', icon: <DiagramProjectIcon /> },
    { href: '#checklist', text: 'Guía de práctica', icon: <ClipboardListIcon /> },
    { href: '#rubrica', text: 'Rúbrica formativa', icon: <RankingStarIcon /> },
    { href: '#guia-estudio', text: 'Guía de estudio', icon: <BookOpenIcon /> },
    { href: '#perlas', text: 'Perlas y errores', icon: <LightbulbIcon /> },
    { href: '#recursos', text: 'Recursos accionables', icon: <ToolboxIcon /> }
];

const Sidebar: React.FC = () => (
    <aside className="lg:sticky lg:top-28 space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Mapa del módulo
            </h2>
            <nav className="mt-4 space-y-1" id="module-nav">
                {navItems.map((item, index) => (
                    <a key={index} href={item.href} className="nav-link">
                        <span className="flex items-center gap-3 py-2 px-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-indigo-50">
                            {item.icon}
                            {item.text}
                        </span>
                    </a>
                ))}
            </nav>
        </div>
    </aside>
);

export default Sidebar;