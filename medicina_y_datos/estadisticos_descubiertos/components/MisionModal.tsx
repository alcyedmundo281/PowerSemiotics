import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MisionModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full">
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4 text-teal-600">Misión: Diagnóstico Comunitario</h2>
                    <div className="text-gray-700 space-y-4">
                        <p>
                            <strong>Escenario:</strong> Han sido asignados a un centro de salud rural en la provincia de Chimborazo, una región con una rica herencia cultural y desafíos de salud únicos. La población local depende de su pericia para comprender y abordar sus problemas de salud más apremiantes.
                        </p>
                        <p>
                            <strong>Objetivo:</strong> Su primera tarea es realizar un diagnóstico de salud comunitaria centrado en Enfermedades Crónicas No Transmisibles (ECNT). El Ministerio de Salud Pública ha recopilado datos de prevalencia, pero necesitan ser analizados para revelar las historias que esconden.
                        </p>
                        <p>
                            <strong>Herramientas:</strong> Se les ha proporcionado acceso a una hoja de cálculo de Google Sheets con los datos anonimizados. Deberán usar sus habilidades de análisis de datos para:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Calcular la prevalencia de hipertensión, diabetes y obesidad.</li>
                            <li>Identificar los grupos de edad y género más afectados.</li>
                            <li>Visualizar los datos para comunicar sus hallazgos de manera efectiva.</li>
                        </ul>
                        <p>
                            Esta misión es el primer paso para desarrollar intervenciones de salud pública que realmente marquen la diferencia en la comunidad.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-100 px-8 py-4 text-right">
                    <button
                        onClick={onClose}
                        className="bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MisionModal;