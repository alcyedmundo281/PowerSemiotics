import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CalculadoraModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [age, setAge] = useState(55);
    const [hdl, setHdl] = useState(50);
    const [ldl, setLdl] = useState(130);
    const [pressure, setPressure] = useState(120);
    const [risk, setRisk] = useState<number | null>(null);

    const calculateRisk = () => {
        // Simplified risk calculation for demonstration
        let score = 0;
        if (age > 60) score += 2;
        if (hdl < 40) score += 1;
        if (ldl > 160) score += 1;
        if (pressure > 140) score += 2;
        setRisk(score * 5); // Example percentage
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full">
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4 text-indigo-600">Herramienta: Calculadora de Riesgo Cardiovascular</h2>
                    <p className="text-gray-700 mb-6">
                        Utilice esta herramienta simplificada para estimar el riesgo cardiovascular a 10 años. Ingrese los datos del paciente para obtener una evaluación basada en factores clave.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Edad</label>
                            <input type="number" value={age} onChange={e => setAge(parseInt(e.target.value))} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Colesterol HDL (mg/dL)</label>
                            <input type="number" value={hdl} onChange={e => setHdl(parseInt(e.target.value))} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Colesterol LDL (mg/dL)</label>
                            <input type="number" value={ldl} onChange={e => setLdl(parseInt(e.target.value))} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Presión Arterial Sistólica (mmHg)</label>
                            <input type="number" value={pressure} onChange={e => setPressure(parseInt(e.target.value))} className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button onClick={calculateRisk} className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                            Calcular Riesgo
                        </button>
                    </div>
                    {risk !== null && (
                        <div className="mt-8 p-6 bg-indigo-100 rounded-lg text-center">
                            <h3 className="text-2xl font-bold text-indigo-800">Riesgo Estimado: {risk}%</h3>
                            <p className="text-indigo-700 mt-2">Este es un valor de referencia. Consulte las guías clínicas para una evaluación completa.</p>
                        </div>
                    )}
                </div>
                <div className="bg-gray-100 px-8 py-4 text-right">
                    <button onClick={onClose} className="bg-gray-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CalculadoraModal;