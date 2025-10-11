
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          {/* Using a placeholder for the logo */}
          <div className="h-8 w-8 bg-indigo-500 rounded-full"></div>
          <span className="text-2xl font-bold gradient-text-header">
            Powersemiotics
          </span>
        </a>
        <div>
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            <i className="fas fa-arrow-left mr-2"></i>Volver a Medicina y Datos
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
