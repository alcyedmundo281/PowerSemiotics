import React from 'react';

const Header: React.FC = () => (
    <header className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-12 shadow-lg">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
                <p className="uppercase tracking-[0.35em] text-teal-200 text-xs md:text-sm mb-2">Programa MAIS-FCI</p>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                    Estadísticos al Descubierto: <br className="hidden md:block" />
                    <span className="text-teal-100">Misión Ecuador</span>
                </h1>
                <p className="mt-4 text-teal-100 max-w-2xl">
                    Una misión inmersiva para equipos de atención primaria en la Sierra ecuatoriana. Practica el razonamiento
                    clínico y domina las herramientas estadísticas que respaldan cada decisión.
                </p>
            </div>
            <div className="bg-white/15 border border-white/25 rounded-xl px-6 py-4 max-w-sm">
                <h2 className="font-semibold text-lg mb-1">Objetivo Principal</h2>
                <p className="text-sm text-teal-100">
                    Analizar datos comunitarios, estratificar riesgos y detectar sesgos clínicos para diseñar estrategias
                    efectivas de prevención de enfermedades crónicas no transmisibles.
                </p>
            </div>
        </div>
    </header>
);

export default Header;
