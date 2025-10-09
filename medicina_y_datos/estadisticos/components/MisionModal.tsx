import React from 'react';
import Modal from './Modal';

interface MisionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MisionModal: React.FC<MisionModalProps> = ({ isOpen, onClose }) => (
    <Modal title="Misión: Diagnóstico Comunitario" icon="🎯" isOpen={isOpen} onClose={onClose}>
        <p>
            Analicen el set de datos suministrado por la Dirección Distrital de Salud. Se trata de información anonimizada sobre
            300 hogares de las parroquias Palmira y Cebadas. El objetivo es identificar tendencias y zonas de mayor vulnerabilidad
            frente a ECNT.
        </p>
        <ol className="list-decimal list-inside space-y-2">
            <li>Importen la hoja <strong>"ECNT_Chimborazo"</strong> en Google Sheets o Excel.</li>
            <li>Calculen prevalencias, tasas de crecimiento anual y clasifiquen a los pacientes por riesgo cardiovascular.</li>
            <li>Prepararen una breve síntesis con recomendaciones para la brigada comunitaria.</li>
        </ol>
        <p className="text-sm text-slate-500">
            Tip: utilicen las funciones de tablas dinámicas y gráficos comparativos para comunicar hallazgos de forma clara al
            equipo de promoción de la salud.
        </p>
        <a
            href="https://docs.google.com/spreadsheets/d/1mtoX9Sg8b3V_BusEV6c8FoU37TZi8U4t"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-700"
        >
            Abrir hoja de datos
            <span aria-hidden>↗</span>
        </a>
    </Modal>
);

export default MisionModal;
