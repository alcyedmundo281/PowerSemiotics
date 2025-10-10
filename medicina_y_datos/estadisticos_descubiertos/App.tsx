
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
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

    useEffect(() => {
        const fallbackSection = document.getElementById('dataset-fallback');

        if (fallbackSection) {
            fallbackSection.remove();
        }
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Introduction />

                <section id="mision" className="mb-16">
                    <div className="bg-white rounded-2xl shadow-xl border border-teal-100 p-8 transform hover:scale-105 transition-transform duration-300">
                        <TaskCard
                            icon="🎯"
                            title="Misión: Diagnóstico Comunitario"
                            description="Han sido asignados a un centro de salud rural en la provincia de Chimborazo. Su primera tarea es analizar los datos de prevalencia de ECNT. Usen Google Sheets para descubrir los secretos que esconden los números."
                            buttonText="Iniciar Misión"
                            colorTheme="teal"
                            onButtonClick={() => openModal('mision')}
                            isFeatured
                        />
                    </div>
                </section>

                <section id="herramientas" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Herramientas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    </div>
                </section>

                <section id="desafios" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Desafíos</h2>
                    <div className="grid grid-cols-1">
                        <TaskCard
                            icon="🧠"
                            title="Desafío: El Sesgo Oculto"
                            description="El cerebro usa atajos, pero en medicina, estos pueden llevar a errores. Analicen un caso clínico real y pongan a prueba su capacidad para identificar los sesgos cognitivos que podrían afectar el diagnóstico. ¿Están listos?"
                            buttonText="Empezar Desafío"
                            colorTheme="amber"
                            onButtonClick={() => openModal('sesgo')}
                        />
                    </div>
                </section>

                <section id="recursos">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recursos</h2>
                    <div className="md:col-span-2 flex justify-center">
                        <TaskCard
                            icon="📚"
                            title="Biblioteca de Recursos"
                            description="Explora los conceptos teóricos del razonamiento clínico, la estadística y los sesgos cognitivos que sustentan tu práctica."
                            buttonText="Abrir Biblioteca"
                            colorTheme="purple"
                            onButtonClick={() => openModal('recursos')}
                        />
                    </div>
                </section>
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