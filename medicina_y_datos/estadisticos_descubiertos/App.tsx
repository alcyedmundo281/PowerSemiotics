
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import DatasetAccessSection from './components/DatasetAccessSection';
import TaskCard from './components/TaskCard';
import MisionModal from './components/MisionModal';
import CalculadoraModal from './components/CalculadoraModal';
import SesgoModal from './components/SesgoModal';
import RecursosModal from './components/RecursosModal';
import GoogleSheetModal from './components/GoogleSheetModal';

type ModalType = 'mision' | 'calculadora' | 'sesgo' | 'recursos' | 'googleSheet' | null;

const App: React.FC = () => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const openModal = useCallback((modal: ModalType) => {
        setActiveModal(modal);
    }, []);

    const closeModal = useCallback(() => {
        setActiveModal(null);
    }, []);

    return (
        <>
            <Header />
            <main className="container mx-auto px-6 py-8">
                <Introduction />
                <DatasetAccessSection />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TaskCard
                        icon="🎯"
                        title="Misión: Diagnóstico Comunitario"
                        description="Han sido asignados a un centro de salud rural en la provincia de Chimborazo. Su primera tarea es analizar los datos de prevalencia de ECNT. Usen Google Sheets para descubrir los secretos que esconden los números."
                        buttonText="Iniciar Misión"
                        colorTheme="teal"
                        onButtonClick={() => openModal('mision')}
                    />
                    <TaskCard
                        icon="📊"
                        title="Base de Datos: Chimborazo"
                        description="Consulta, descarga y explora la hoja de cálculo con la muestra de registros anonimizados utilizada en la misión."
                        buttonText="Abrir Base de Datos"
                        colorTheme="emerald"
                        onButtonClick={() => openModal('googleSheet')}
                    />
                    <TaskCard
                        icon="💡"
                        title="Herramienta: Calculadora de Riesgo"
                        description="La GPC del MSP enfatiza la estratificación del riesgo cardiovascular. Utilicen esta herramienta simplificada para evaluar el riesgo de un paciente y entender cómo guiar las decisiones clínicas en la atención primaria."
                        buttonText="Abrir Herramienta"
                        colorTheme="indigo"
                        onButtonClick={() => openModal('calculadora')}
                    />
                    <TaskCard
                        icon="🧠"
                        title="Desafío: El Sesgo Oculto"
                        description="El cerebro usa atajos, pero en medicina, estos pueden llevar a errores. Analicen un caso clínico real y pongan a prueba su capacidad para identificar los sesgos cognitivos que podrían afectar el diagnóstico. ¿Están listos?"
                        buttonText="Empezar Desafío"
                        colorTheme="amber"
                        onButtonClick={() => openModal('sesgo')}
                    />
                    <TaskCard
                        icon="📚"
                        title="Biblioteca de Recursos"
                        description="Explora los conceptos teóricos del razonamiento clínico, la estadística y los sesgos cognitivos que sustentan tu práctica."
                        buttonText="Abrir Biblioteca"
                        colorTheme="purple"
                        onButtonClick={() => openModal('recursos')}
                    />
                </div>
            </main>

            <MisionModal isOpen={activeModal === 'mision'} onClose={closeModal} />
            <GoogleSheetModal isOpen={activeModal === 'googleSheet'} onClose={closeModal} />
            <CalculadoraModal isOpen={activeModal === 'calculadora'} onClose={closeModal} />
            <SesgoModal isOpen={activeModal === 'sesgo'} onClose={closeModal} />
            <RecursosModal isOpen={activeModal === 'recursos'} onClose={closeModal} />
        </>
    );
};

export default App;