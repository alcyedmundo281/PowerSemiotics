import React from 'react';
import Modal from './Modal';

interface SesgoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SesgoModal: React.FC<SesgoModalProps> = ({ isOpen, onClose }) => (
    <Modal title="Desafío: El Sesgo Oculto" icon="🧠" isOpen={isOpen} onClose={onClose}>
        <p>
            Analicen el caso clínico de Rosa Guamán, agricultora de 52 años. Presenta fatiga persistente y dolor en el pecho
            intermitente. El médico rural sospecha ansiedad debido a los antecedentes de duelo reciente.
        </p>
        <p>
            Discutan cuáles sesgos cognitivos podrían estar influyendo en la valoración inicial y cuáles estrategias utilizarían
            para mitigarlos.
        </p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Sesgo de anclaje:</strong> ¿Estamos dando demasiado peso al evento emocional reciente?</li>
            <li><strong>Sesgo de disponibilidad:</strong> ¿Qué otros diagnósticos deberíamos considerar según la epidemiología local?</li>
            <li><strong>Sesgo de confirmación:</strong> ¿Cómo validaríamos las hipótesis con datos objetivos?</li>
        </ul>
        <p className="text-sm text-slate-500">
            Sugiere registrar la discusión en un acta de equipo y contrastarla con la guía de razonamiento clínico del MSP para
            sistematizar el aprendizaje.
        </p>
    </Modal>
);

export default SesgoModal;
