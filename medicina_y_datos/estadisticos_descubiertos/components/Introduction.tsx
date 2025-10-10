import React from 'react';

const Introduction: React.FC = () => {
    return (
        <section className="text-center pt-8 pb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                ¡Bienvenido a la Misión!
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Has sido seleccionado para una misión crucial en el corazón de Ecuador. Como profesional de la salud, te
                enfrentarás a desafíos que pondrán a prueba tu razonamiento clínico y tus habilidades para interpretar
                datos. Tu aventura para desentrañar los misterios de la salud comunitaria empieza ahora.
            </p>
        </section>
    );
};

export default Introduction;