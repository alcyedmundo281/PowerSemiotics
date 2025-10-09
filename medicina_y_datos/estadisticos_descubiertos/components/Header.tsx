import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-6 py-4">
                <h1 className="text-3xl font-bold">Estadísticos al Descubierto: Misión Ecuador</h1>
                <p className="mt-2 text-lg">Una aventura de aprendizaje en medicina y datos</p>
            </div>
        </header>
    );
};

export default Header;