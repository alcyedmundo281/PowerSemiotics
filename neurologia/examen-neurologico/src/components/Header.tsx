import React from 'react';

const Header: React.FC = () => (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white">
                    <i className="fas fa-brain text-xl"></i>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Neurología
                    </p>
                    <h1 className="text-lg font-semibold text-slate-800">
                        Examen Neurológico: Parte 1
                    </h1>
                </div>
            </div>
        </div>
    </header>
);

export default Header;