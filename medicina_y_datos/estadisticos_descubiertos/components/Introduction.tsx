import React from 'react';

const Introduction: React.FC = () => {
    return (
        <section className="text-center py-12">
            <h2 className="text-4xl font-bold mb-4">¡Bienvenido a la Misión!</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Has sido seleccionado para una misión crucial en el corazón de Ecuador. Como profesional de la salud, te enfrentarás a desafíos que pondrán a prueba tu razonamiento clínico y tus habilidades para interpretar datos. Tu aventura para desentrañar los misterios de la salud comunitaria empieza ahora.
            </p>
        </section>
    );
};

export default Introduction;