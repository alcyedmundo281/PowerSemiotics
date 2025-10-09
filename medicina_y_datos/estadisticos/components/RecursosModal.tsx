import React from 'react';
import Modal from './Modal';

interface RecursosModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RecursosModal: React.FC<RecursosModalProps> = ({ isOpen, onClose }) => (
    <Modal title="Biblioteca de Recursos" icon="📚" isOpen={isOpen} onClose={onClose}>
        <p>
            Amplíen el análisis con lecturas y herramientas recomendadas para docentes y estudiantes de ciencias de la salud en el
            contexto ecuatoriano.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
                <li>
                    <a className="text-purple-600 hover:underline" href="https://www.paho.org/es/documentos/mais-fci"
                        target="_blank" rel="noreferrer">
                        Modelo MAIS-FCI - OPS
                    </a>
                </li>
                <li>
                    <a className="text-purple-600 hover:underline" href="https://cloud.msp.gob.ec/index.php/s/9X6E8ksr4sM2mzm"
                        target="_blank" rel="noreferrer">
                        Guía práctica clínica ECNT
                    </a>
                </li>
                <li>
                    <a className="text-purple-600 hover:underline" href="https://ebm-tools.knowledgetranslation.net/"
                        target="_blank" rel="noreferrer">
                        Calculadoras de medicina basada en evidencia
                    </a>
                </li>
            </ul>
            <ul className="space-y-2">
                <li>
                    <a className="text-purple-600 hover:underline" href="https://hbr.org/2020/09/cognitive-biases-in-health-care"
                        target="_blank" rel="noreferrer">
                        Harvard Business Review: sesgos en salud
                    </a>
                </li>
                <li>
                    <a className="text-purple-600 hover:underline" href="https://ourworldindata.org/"
                        target="_blank" rel="noreferrer">
                        Bases de datos internacionales comparativas
                    </a>
                </li>
                <li>
                    <a className="text-purple-600 hover:underline" href="https://statquest.org/"
                        target="_blank" rel="noreferrer">
                        StatQuest: estadística explicada paso a paso
                    </a>
                </li>
            </ul>
        </div>
    </Modal>
);

export default RecursosModal;
