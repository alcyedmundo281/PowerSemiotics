import React, { useState, useCallback } from 'react';
// import Header from './components/Header';
// import Introduction from './components/Introduction';
// import TaskCard from './components/TaskCard';
// import MisionModal from './components/MisionModal';
// import CalculadoraModal from './components/CalculadoraModal';
// import SesgoModal from './components/SesgoModal';
// import RecursosModal from './components/RecursosModal';

type ModalType = 'mision' | 'calculadora' | 'sesgo' | 'recursos' | null;

const App: React.FC = () => {
    // const [activeModal, setActiveModal] = useState<ModalType>(null);

    // const openModal = useCallback((modal: ModalType) => {
    //     setActiveModal(modal);
    // }, []);

    // const closeModal = useCallback(() => {
    //     setActiveModal(null);
    // }, []);

    return (
        <>
            {/* <Header /> */}
            <main className="container mx-auto px-6 py-8">
                {/* <Introduction /> */}
                <div style={{ padding: '2rem', textAlign: 'center', border: '1px dashed #ccc', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Aplicación en Desarrollo</h1>
                    <p style={{ marginBottom: '0.5rem' }}>Algunos componentes visuales están deshabilitados temporalmente debido a que faltan archivos en el repositorio.</p>
                    <p>La funcionalidad principal de la aplicación se restaurará cuando se proporcionen los archivos del directorio <strong>components</strong>.</p>
                </div>
                {/*
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
                */}
            </main>

            {/*
            <MisionModal isOpen={activeModal === 'mision'} onClose={closeModal} />
            <CalculadoraModal isOpen={activeModal === 'calculadora'} onClose={closeModal} />
            <SesgoModal isOpen={activeModal === 'sesgo'} onClose={closeModal} />
            <RecursosModal isOpen={activeModal === 'recursos'} onClose={closeModal} />
            */}
        </>
    );
};

export default App;
