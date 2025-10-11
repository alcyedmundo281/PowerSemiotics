
import React from 'react';

const LearningPaths: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <i className="fas fa-compass text-rose-500"></i>
        Rutas de aprendizaje sugeridas
      </h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-rose-900">1. Cimientos</h3>
          <p className="mt-3 text-sm text-rose-800">
            Revisa conceptos de combinatoria básica, reglas de suma y multiplicación. Practica con problemas breves
            de probabilidad condicional.
          </p>
        </div>
        <div className="bg-sky-50 border border-sky-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-sky-900">2. Probabilidad aplicada</h3>
          <p className="mt-3 text-sm text-sky-800">
            Analiza artículos clínicos. Identifica cómo reportan prevalencias, razones de verosimilitud e intervalos de confianza.
            Resume la información en tu libreta de guardia.
          </p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-emerald-900">3. Comunicación y liderazgo</h3>
          <p className="mt-3 text-sm text-emerald-800">
            Ensaya explicar resultados probabilísticos a pacientes y colegas. Utiliza metáforas numéricas
            ("7 de cada 10") y verifica comprensión.</p>
        </div>
      </div>
      <div className="mt-8 bg-gray-100 border border-gray-200 rounded-xl p-6 text-sm text-gray-700">
        <p className="font-semibold text-gray-900">Para profundizar:</p>
        <ul className="mt-3 space-y-2">
          <li>
            <i className="fas fa-book-open mr-2 text-indigo-500"></i>
            Explora calculadoras clínicas como el nomograma de Fagan o herramientas Bayes online para simular diferentes escenarios.
          </li>
          <li>
            <i className="fas fa-people-arrows mr-2 text-indigo-500"></i>
            Discute en sesiones de morbi-mortalidad cómo se construyeron las probabilidades que sustentaron las decisiones.
          </li>
          <li>
            <i className="fas fa-code mr-2 text-indigo-500"></i>
            Practica en R o Python con conjuntos de datos abiertos para reproducir análisis básicos y graficar distribuciones.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LearningPaths;
