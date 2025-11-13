import React from 'react';
import Section from './Section';
import Card from './Card';

const StudentMaterials: React.FC = () => (
    <Section id="guia-estudio" subtitle="Materiales para el estudiante" title="Guía de estudio Semana 1: Introducción a la Neurología">
        <p className="text-base text-slate-600 leading-relaxed">
            Distribuya este esquema como e-book o documento editable para que la cohorte prepare y repase la evaluación de estado mental y pares craneales I-VI.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <Card title="Introducción" description="Bienvenida a la asignatura, relevancia del razonamiento clínico y objetivos de aprendizaje semanales.">
                <ul className="text-sm text-slate-600 space-y-2">
                    <li>Historia clínica neurológica: cronología, síntomas positivos/negativos.</li>
                    <li>Importancia del examen de tamizaje completo.</li>
                </ul>
            </Card>
            <Card title="Conceptos clave" description="Diagramas de SNC/SNP, localización anatómica y relación síntoma-vía.">
                <ul className="text-sm text-slate-600 space-y-2">
                    <li>Dominio por dominio del estado mental.</li>
                    <li>Pasos prácticos para orientación, series, recuerdo y comandos.</li>
                </ul>
            </Card>
            <Card title="Pares craneales I-VI" description="Tabla con número, nombre, función principal y maniobra de exploración.">
                <ul className="text-sm text-slate-600 space-y-2">
                    <li>NC I: técnica y situaciones clínicas relevantes.</li>
                    <li>NC II: agudeza visual, campos, hemianopsias, fondo y papiledema.</li>
                </ul>
            </Card>
        </div>
    </Section>
);

export default StudentMaterials;