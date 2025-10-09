import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RecursosModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full">
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-purple-600">Biblioteca de Recursos</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-purple-800">Razonamiento Clínico</h3>
                            <p className="text-gray-700">
                                El arte y la ciencia de pensar a través de un problema clínico. Incluye el razonamiento deductivo, inductivo y abductivo. La clave es la metacognición: pensar sobre cómo estás pensando.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-purple-800">Estadística para Médicos</h3>
                            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                                <li><strong>Prevalencia:</strong> La proporción de una población que tiene una enfermedad en un momento específico.</li>
                                <li><strong>Incidencia:</strong> La tasa de nuevos casos de una enfermedad en un período de tiempo.</li>
                                <li><strong>Sensibilidad y Especificidad:</strong> Medidas de la precisión de una prueba diagnóstica.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-purple-800">Sesgos Cognitivos Comunes</h3>
                             <p className="text-gray-700">
                                Atajos mentales que pueden llevar a errores diagnósticos. Reconocerlos es el primer paso para mitigarlos. Incluyen el sesgo de confirmación, anclaje, disponibilidad y más.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-8 py-4 text-right">
                    <button
                        onClick={onClose}
                        className="bg-purple-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecursosModal;