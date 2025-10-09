import React from 'react';
import Modal from './Modal';

interface CalculadoraModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CalculadoraModal: React.FC<CalculadoraModalProps> = ({ isOpen, onClose }) => (
    <Modal title="Herramienta: Calculadora de Riesgo" icon="💡" isOpen={isOpen} onClose={onClose}>
        <p>
            Esta calculadora rápida resume los pasos de la Guía de Práctica Clínica del Ministerio de Salud Pública para la
            estratificación del riesgo cardiovascular. Úsenla como guía antes de acceder a herramientas más complejas.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
                <li><strong>Paso 1:</strong> Registrar edad, sexo, presión arterial y antecedentes familiares.</li>
                <li><strong>Paso 2:</strong> Identificar factores de riesgo adicionales: tabaquismo, IMC &gt; 30, diabetes.</li>
                <li><strong>Paso 3:</strong> Asignar nivel de riesgo y definir el plan de seguimiento trimestral.</li>
            </ul>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm">
                <p className="font-semibold mb-2 text-slate-700">Recursos complementarios</p>
                <ul className="space-y-1 text-slate-600">
                    <li>
                        <a className="text-indigo-600 hover:underline" href="https://www.msp.gob.ec/"
                            target="_blank" rel="noreferrer">Ficha técnica MSP</a>
                    </li>
                    <li>
                        <a className="text-indigo-600 hover:underline" href="https://www.bmj.com/content/371/bmj.m3324"
                            target="_blank" rel="noreferrer">BMJ: manejo integral del riesgo</a>
                    </li>
                </ul>
            </div>
        </div>
    </Modal>
);

export default CalculadoraModal;
