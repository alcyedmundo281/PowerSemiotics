import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SesgoModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [selection, setSelection] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const correctAnwser = 'confirmacion';

    const handleSelection = (bias: string) => {
        setSelection(bias);
        setShowFeedback(true);
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full">
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4 text-amber-600">Desafío: El Sesgo Oculto</h2>
                    <div className="text-gray-700 space-y-4">
                        <p className="font-bold">Caso Clínico:</p>
                        <p>
                            Un paciente de 45 años, fumador, se presenta con dolor torácico atípico. El médico de urgencias, al ver el antecedente de tabaquismo, rápidamente sospecha de un síndrome coronario agudo y se enfoca en las pruebas cardíacas, minimizando otros posibles diagnósticos como el reflujo gastroesofágico o la costocondritis, a pesar de que el dolor se alivia con antiácidos.
                        </p>
                        <p className="font-bold mt-4">¿Qué sesgo cognitivo es más evidente en este caso?</p>
                        <div className="space-y-3">
                            <button onClick={() => handleSelection('anclaje')} className={`block w-full text-left p-3 rounded-lg border ${selection === 'anclaje' ? 'bg-gray-200' : ''}`}>
                                <strong>Sesgo de Anclaje:</strong> Confiar demasiado en la primera información obtenida.
                            </button>
                            <button onClick={() => handleSelection('confirmacion')} className={`block w-full text-left p-3 rounded-lg border ${selection === 'confirmacion' ? 'bg-gray-200' : ''}`}>
                                <strong>Sesgo de Confirmación:</strong> Buscar e interpretar información que confirma las propias creencias preexistentes.
                            </button>
                            <button onClick={() => handleSelection('disponibilidad')} className={`block w-full text-left p-3 rounded-lg border ${selection === 'disponibilidad' ? 'bg-gray-200' : ''}`}>
                                <strong>Heurístico de Disponibilidad:</strong> Sobreestimar la probabilidad de eventos que son más fáciles de recordar.
                            </button>
                        </div>
                         {showFeedback && (
                            <div className={`mt-4 p-4 rounded-lg ${selection === correctAnwser ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {selection === correctAnwser ? (
                                    <p><strong>¡Correcto!</strong> El médico se centró en confirmar su sospecha inicial (problema cardíaco) debido al tabaquismo, ignorando evidencia que apuntaba a otras causas.</p>
                                ) : (
                                    <p><strong>Inténtalo de nuevo.</strong> Si bien otros sesgos pueden estar presentes, el más prominente aquí es la tendencia a buscar y favorecer información que confirma una hipótesis inicial.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-gray-100 px-8 py-4 text-right">
                    <button
                        onClick={onClose}
                        className="bg-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-300"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SesgoModal;