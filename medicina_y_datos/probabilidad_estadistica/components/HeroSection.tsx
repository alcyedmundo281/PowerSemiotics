
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1">
          <p className="uppercase tracking-wide text-sm font-semibold text-blue-600">
            Unidad 2
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Probabilidad y Estadística Clínica: del Dato al Juicio
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            La atención clínica moderna se construye sobre estimaciones de riesgo,
            comparaciones probabilísticas y decisiones bajo incertidumbre. Esta guía
            organiza los conceptos fundamentales de probabilidad y estadística para
            que puedas analizar evidencia, valorar pruebas diagnósticas y comunicar
            riesgos de forma responsable con tus pacientes y equipos.
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <p className="text-sm text-indigo-800 font-semibold uppercase">
                Al terminar sabrás
              </p>
              <ul className="mt-3 space-y-2 text-indigo-900 text-sm">
                <li><i className="fas fa-check mr-2"></i>Identificar tipos de probabilidades clínicas</li>
                <li><i className="fas fa-check mr-2"></i>Aplicar el Teorema de Bayes a casos reales</li>
                <li><i className="fas fa-check mr-2"></i>Seleccionar medidas descriptivas apropiadas</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
              <p className="text-sm text-emerald-800 font-semibold uppercase">
                Competencias clave
              </p>
              <ul className="mt-3 space-y-2 text-emerald-900 text-sm">
                <li><i className="fas fa-lightbulb mr-2"></i>Pensamiento bayesiano aplicado</li>
                <li><i className="fas fa-lightbulb mr-2"></i>Interpretación de evidencia clínica</li>
                <li><i className="fas fa-lightbulb mr-2"></i>Comunicación del riesgo</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 col-span-2">
              <p className="text-sm text-amber-800 font-semibold uppercase">
                Cómo usar esta guía
              </p>
              <p className="mt-3 text-amber-900 text-sm leading-relaxed">
                Avanza sección por sección. Cada bloque combina narrativas clínicas, fórmulas clave y
                recursos descargables. Utiliza los botones de resumen para repasar rápidamente los
                conceptos y los casos prácticos para ponerte a prueba.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
