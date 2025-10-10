import React from 'react';
import { chimborazoDataset } from '../data/chimborazoDataset';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MisionModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden">
                <div className="p-8 max-h-[90vh] overflow-y-auto">
                    <h2 className="text-3xl font-bold mb-4 text-teal-600">Misión: Diagnóstico Comunitario</h2>
                    <div className="text-gray-700 space-y-6">
                        <div>
                            <p><strong>Escenario:</strong> Han sido asignados a un centro de salud rural en la provincia de Chimborazo, una región con una rica herencia cultural y desafíos de salud únicos.</p>
                            <p><strong>Objetivo:</strong> Su primera tarea es realizar un diagnóstico de salud comunitaria centrado en Enfermedades Crónicas No Transmisibles (ECNT).</p>
                            <p><strong>Herramientas:</strong> Usen la siguiente muestra de datos para analizar y responder a las preguntas de la misión.</p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Muestra de la Base de Datos Anonimizada - Chimborazo</h3>
                            <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                                    <tr>
                                        <th className="px-4 py-2 text-left">ID Paciente</th>
                                        <th className="px-4 py-2 text-left">Edad</th>
                                        <th className="px-4 py-2 text-left">Género</th>
                                        <th className="px-4 py-2 text-left">Hipertensión</th>
                                        <th className="px-4 py-2 text-left">Diabetes</th>
                                        <th className="px-4 py-2 text-left">Obesidad</th>
                                        <th className="px-4 py-2 text-left">Zona</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {chimborazoDataset.map((registro) => (
                                        <tr key={registro.id}>
                                            <td className="px-4 py-2 font-medium text-gray-900">{registro.id}</td>
                                            <td className="px-4 py-2 text-gray-700">{registro.edad}</td>
                                            <td className="px-4 py-2 text-gray-700">{registro.genero}</td>
                                            <td className="px-4 py-2 text-gray-700">{registro.hipertension}</td>
                                            <td className="px-4 py-2 text-gray-700">{registro.diabetes}</td>
                                            <td className="px-4 py-2 text-gray-700">{registro.obesidad}</td>
                                            <td className="px-4 py-2 text-gray-700">{registro.zona}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="mt-3 text-xs text-gray-500">
                                Este conjunto de datos es una simulación creada con fines ilustrativos.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Preguntas Guía</h3>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Calcular la prevalencia de hipertensión, diabetes y obesidad en la muestra.</li>
                                <li>Identificar los grupos de edad y género más afectados por estas condiciones.</li>
                                <li>¿Existe alguna diferencia notable en la prevalencia de ECNT entre las zonas rural y urbana?</li>
                                <li>Visualizar los datos para comunicar sus hallazgos de manera efectiva.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-8 py-4 flex justify-end items-center gap-4">
                    <a
                        href={`${import.meta.env.BASE_URL}muestra-base-datos-anonimizada-chimborazo.csv`}
                        download
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-500 px-6 py-2 font-bold text-teal-600 transition-colors duration-300 hover:bg-teal-50"
                    >
                        Descargar CSV
                    </a>
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