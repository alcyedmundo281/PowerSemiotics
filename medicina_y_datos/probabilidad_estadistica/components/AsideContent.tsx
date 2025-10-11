
import React from 'react';

const AsideContent: React.FC = () => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900">Mapa conceptual</h3>
        <ul className="mt-4 space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-1 text-blue-500 text-xs"><i className="fas fa-circle"></i></span>
            <span>
              <strong>Probabilidad previa:</strong> Prevalencia local, historia del paciente y mecanismos
              fisiopatológicos.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-blue-500 text-xs"><i className="fas fa-circle"></i></span>
            <span>
              <strong>Probabilidad condicional:</strong> Desempeño de pruebas o hallazgos clínicos específicos.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-blue-500 text-xs"><i className="fas fa-circle"></i></span>
            <span>
              <strong>Probabilidad posterior:</strong> Resultado de actualizar la sospecha inicial con la nueva
              evidencia.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold">Checklist de conversación clínica</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li><i className="fas fa-comment-medical mr-2"></i>¿Qué probabilidad teníamos antes de la prueba?</li>
          <li><i className="fas fa-comment-medical mr-2"></i>¿Qué margen de error posee el estudio utilizado?</li>
          <li><i className="fas fa-comment-medical mr-2"></i>¿Cómo cambia el manejo según cada resultado posible?</li>
          <li><i className="fas fa-comment-medical mr-2"></i>¿Qué riesgos alternativos debemos monitorizar?</li>
        </ul>
      </div>
    </>
  );
};

export default AsideContent;
