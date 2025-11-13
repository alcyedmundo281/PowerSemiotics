import React from 'react';
import Section from './Section';
import Card from './Card';
import Quiz from './Quiz';

const questions = [
  {
    question: '¿Cuál es el principal objetivo de la primera parte del examen neurológico?',
    options: [
      'Realizar un diagnóstico definitivo.',
      'Orientar decisiones diagnósticas tempranas.',
      'Evaluar la función motora y cerebelosa.',
      'Descartar patologías psiquiátricas.'
    ],
    correctAnswer: 'Orientar decisiones diagnósticas tempranas.'
  },
  {
    question: '¿Qué componente del estado mental debe evaluarse primero?',
    options: ['Memoria', 'Lenguaje', 'Nivel de conciencia y alerta', 'Funciones ejecutivas'],
    correctAnswer: 'Nivel de conciencia y alerta'
  }
];

const TeacherMaterials: React.FC = () => (
    <Section id="rubrica" subtitle="Evaluación formativa" title="Rúbrica y Autoevaluación">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card title="Rúbrica simplificada" description="Utilice esta rúbrica para asignar retroalimentación cuantitativa durante la práctica supervisada.">
                {/* Simplified rubric table */}
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-2 text-left">Criterio</th>
                            <th className="px-4 py-2 text-left">Puntaje</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                        <tr>
                            <td className="px-4 py-2">Secuencia y sistemática</td>
                            <td className="px-4 py-2">/3</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Técnica NC II</td>
                            <td className="px-4 py-2">/3</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <Card title="Autoevaluación" description="Responda las siguientes preguntas para verificar su comprensión de los conceptos clave.">
                <Quiz questions={questions} />
            </Card>
        </div>
    </Section>
);

export default TeacherMaterials;