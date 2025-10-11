
import React from 'react';

const TranslationTable: React.FC = () => {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <i className="fas fa-table text-emerald-500"></i>
        Tabla de traducción clínica
      </h2>
      <p className="mt-4 text-gray-600">
        Utiliza esta tabla para conectar los conceptos estadísticos con decisiones concretas de práctica clínica.
      </p>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-4 py-3">Concepto</th>
              <th className="px-4 py-3">Interpretación clínica</th>
              <th className="px-4 py-3">Uso recomendado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-800">Medidas de tendencia central</td>
              <td className="px-4 py-4 text-gray-700">Resumen del comportamiento promedio o típico de una variable (media, mediana, moda).</td>
              <td className="px-4 py-4 text-gray-700">Describe a grandes grupos; elige la mediana cuando hay asimetrías marcadas.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-4 font-semibold text-gray-800">Medidas de dispersión</td>
              <td className="px-4 py-4 text-gray-700">Cuantifican la variabilidad (rango intercuartílico, desviación estándar).</td>
              <td className="px-4 py-4 text-gray-700">Evalúa si la muestra es homogénea; útiles al comparar tratamientos.</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-800">Intervalos de confianza</td>
              <td className="px-4 py-4 text-gray-700">Rango de valores compatibles con los datos y la incertidumbre del muestreo.</td>
              <td className="px-4 py-4 text-gray-700">Prefiere IC 95% en informes clínicos; analiza su amplitud para valorar precisión.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-4 font-semibold text-gray-800">Pruebas de hipótesis</td>
              <td className="px-4 py-4 text-gray-700">Evalúan si los datos apoyan una diferencia o asociación específica.</td>
              <td className="px-4 py-4 text-gray-700">Reporta siempre el <em>p</em>-valor junto a la magnitud del efecto y el tamaño de la muestra.</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-800">Razones de verosimilitud</td>
              <td className="px-4 py-4 text-gray-700">Cuantifican cuánto cambia la probabilidad de enfermedad con un hallazgo.</td>
              <td className="px-4 py-4 text-gray-700">Combina LR+ y LR- con nomogramas de Fagan para decisiones rápidas.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default TranslationTable;
