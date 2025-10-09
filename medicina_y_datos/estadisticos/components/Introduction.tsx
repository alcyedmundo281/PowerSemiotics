import React from 'react';

const Introduction: React.FC = () => (
    <section className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Bienvenida a la misión</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Tu equipo acaba de llegar a Guamote, en la provincia de Chimborazo. El Ministerio de Salud Pública necesita
                    respuestas: ¿cómo evolucionan las enfermedades crónicas no transmisibles (ECNT) en la comunidad? ¿Qué pacientes
                    requieren una intervención intensiva inmediata? ¿Dónde se esconden los sesgos que distorsionan la práctica clínica?
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Las actividades combinan análisis cuantitativo con reflexión sobre los procesos cognitivos. Cada tarea está
                    alineada con el Modelo de Atención Integral en Salud Familiar, Comunitaria e Intercultural (MAIS-FCI).
                </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-lg text-slate-800 mb-2">Competencias a desarrollar</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Interpretación de indicadores epidemiológicos comunitarios.</li>
                    <li>• Estratificación del riesgo cardiovascular con datos locales.</li>
                    <li>• Identificación de sesgos cognitivos en escenarios de atención primaria.</li>
                    <li>• Integración de recursos bibliográficos para sustentar decisiones.</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Introduction;
