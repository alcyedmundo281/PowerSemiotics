
import React from 'react';

const ProbabilityFundamentals: React.FC = () => {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg">1</span>
          Fundamentos de probabilidad clínica
        </h2>
        <p className="mt-4 text-gray-600">
          Toda estimación clínica comienza con la probabilidad de un evento: la presencia de una enfermedad,
          una respuesta terapéutica o la aparición de un desenlace adverso. Reconocer cómo se genera esa
          probabilidad es clave para no sobredimensionar ni subestimar la incertidumbre.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-blue-900">Frecuentista</h3>
            <p className="mt-2 text-sm text-blue-800">
              Estima la probabilidad como la frecuencia relativa observada en grandes muestras.
              Ideal para describir poblaciones y construir pruebas diagnósticas estandarizadas.
            </p>
            <p className="mt-4 text-xs text-blue-700 uppercase tracking-wide">Pregúntate</p>
            <p className="text-sm text-blue-900">
              ¿Qué tan seguido aparece este hallazgo cuando la enfermedad está presente?
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
            <h3 className="font-semibold text-purple-900">Bayesiano</h3>
            <p className="mt-2 text-sm text-purple-800">
              Actualiza una probabilidad previa con nueva información. Fundamental para decisiones individuales,
              donde el contexto clínico modifica la interpretación de la evidencia.
            </p>
            <p className="mt-4 text-xs text-purple-700 uppercase tracking-wide">Pregúntate</p>
            <p className="text-sm text-purple-900">
              ¿Cómo cambia mi sospecha inicial tras obtener este resultado diagnóstico?
            </p>
          </div>
        </div>
      </div>

      <div className="border border-dashed border-gray-200 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
          <i className="fas fa-flask text-indigo-600"></i>
          Laboratorio mental: prueba PCR para influenza
        </h3>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Situación clínica</p>
            <p className="mt-2 text-gray-700">
              Brote comunitario. Prevalencia estimada (probabilidad previa) de influenza A: <strong>15%</strong>.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Desempeño de la prueba</p>
            <ul className="mt-2 text-gray-700 space-y-2 text-sm">
              <li>Sensibilidad: <strong>92%</strong></li>
              <li>Especificidad: <strong>95%</strong></li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Pregunta</p>
            <p className="mt-2 text-gray-700">
              ¿Cuál es la probabilidad posterior de influenza si la prueba es positiva?
            </p>
          </div>
        </div>
        <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <p className="font-semibold text-indigo-900">Aplicando Bayes con proporciones:</p>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-indigo-900 text-sm">
            <li>De 1 000 pacientes, 150 tendrán influenza (15%).</li>
            <li>La prueba detectará 138 verdaderos positivos (92% de 150) y generará 43 falsos positivos (5% de 850).</li>
            <li>Probabilidad posterior = 138 / (138 + 43) = <strong>76%</strong>.</li>
          </ol>
          <p className="mt-4 text-indigo-800 text-sm">
            Este valor predictivo positivo debe comunicarse junto con el contexto: un resultado positivo no confirma al 100%,
            pero aumenta sustancialmente la sospecha clínica y justifica aislar y tratar al paciente.
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProbabilityFundamentals;
