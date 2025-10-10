import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-4xl font-extrabold tracking-tight">
                    Estadísticos al Descubierto: Misión Ecuador
                </h1>
                <p className="mt-2 text-xl opacity-90">
                    Una aventura de aprendizaje en medicina y datos
                </p>
            </div>
        </header>
    );
};

export default Header;