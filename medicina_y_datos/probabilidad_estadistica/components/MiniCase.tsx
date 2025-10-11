
import React from 'react';

const MiniCase: React.FC = () => {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <i className="fas fa-user-md text-blue-500"></i>
        Mini caso: dolor torácico en urgencias
      </h2>
      <p className="text-gray-600">
        Usa este itinerario para practicar la integración de probabilidades en un escenario de alto impacto.
      </p>
      <div className="space-y-4">
        <details className="group bg-blue-50 rounded-xl border border-blue-100 p-4 transition-all duration-300" open>
          <summary className="font-semibold text-blue-900 cursor-pointer flex items-center justify-between">
            Paso 1 · Estimar la probabilidad previa
            <i className="fas fa-chevron-down transition-transform group-open:rotate-180"></i>
          </summary>
          <p className="mt-3 text-sm text-blue-800">
            Revisa factores de riesgo, síntomas cardinales y electrocardiograma inicial. Estima un 30% de probabilidad de síndrome coronario agudo.
          </p>
        </details>
        <details className="group bg-green-50 rounded-xl border border-green-100 p-4 transition-all duration-300">
          <summary className="font-semibold text-green-900 cursor-pointer flex items-center justify-between">
            Paso 2 · Incorporar pruebas rápidas
            <i className="fas fa-chevron-down transition-transform group-open:rotate-180"></i>
          </summary>
          <p className="mt-3 text-sm text-green-800">
            Troponina ultrasensible con sensibilidad 99% y especificidad 85%. Resultado inicial negativo.
            La probabilidad posterior cae a ~5%, pero debes repetir a las 3 horas para descartar un ascenso tardío.
          </p>
        </details>
        <details className="group bg-purple-50 rounded-xl border border-purple-100 p-4 transition-all duration-300">
          <summary className="font-semibold text-purple-900 cursor-pointer flex items-center justify-between">
            Paso 3 · Revaluar con nueva evidencia
            <i className="fas fa-chevron-down transition-transform group-open:rotate-180"></i>
          </summary>
          <p className="mt-3 text-sm text-purple-800">
            Segundo valor de troponina permanece normal. Combina con un score clínico bajo y estratifica al paciente en categoría de bajo riesgo (&lt;1%).
          </p>
        </details>
        <details className="group bg-amber-50 rounded-xl border border-amber-100 p-4 transition-all duration-300">
          <summary className="font-semibold text-amber-900 cursor-pointer flex items-center justify-between">
            Paso 4 · Comunicar y documentar
            <i className="fas fa-chevron-down transition-transform group-open:rotate-180"></i>
          </summary>
          <p className="mt-3 text-sm text-amber-800">
            Explica al paciente que la probabilidad residual es muy baja, pero establece signos de alarma y plan de seguimiento. Documenta valores numéricos y fuente de las probabilidades.
          </p>
        </details>
      </div>
      <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-700">
        <p className="font-semibold text-gray-900">Punto de reflexión:</p>
        <p className="mt-2">
          Cada actualización de probabilidad requiere reconocer sesgos (anclaje, disponibilidad) y
          considerar costos de falsos negativos y falsos positivos. Usa listas de verificación y discute en equipo.
        </p>
      </div>
    </article>
  );
};

export default MiniCase;
