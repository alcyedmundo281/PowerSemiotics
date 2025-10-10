import React from 'react';
import { chimborazoDataset, chimborazoDatasetAssets } from '../data/chimborazoDataset';

const DatasetAccessSection: React.FC = () => {
    const googleSheetEmbedUrl = chimborazoDatasetAssets.html();
    const googleSheetDownloadUrl = chimborazoDatasetAssets.csv();

    return (
        <section className="bg-white rounded-2xl shadow-xl border border-emerald-100 px-8 py-10 mb-12" id="base-datos-chimborazo">
            <div className="flex flex-col lg:flex-row gap-8 lg:items-start lg:justify-between">
                <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-extrabold text-emerald-600">Base de Datos: Chimborazo</h2>
                    <p className="text-lg text-gray-700">
                        Ponemos a tu disposición la muestra anonimizada que se utiliza en la misión. Puedes descargarla directamente
                        en formato CSV o abrir la hoja publicada para trabajar desde Google Sheets sin abandonar la plataforma.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                        <a
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-emerald-600"
                            href={googleSheetEmbedUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Abrir hoja publicada
                        </a>
                        <a
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500 px-4 py-2 font-semibold text-emerald-600 transition-colors duration-200 hover:bg-emerald-50"
                            href={googleSheetDownloadUrl}
                            download
                        >
                            Descargar CSV (≈0.8 KB)
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 max-w-2xl">
                        La tabla contiene 20 registros ficticios entregados por el Ministerio de Salud Pública para fines formativos.
                        Cada fila representa a un paciente anonimizado con su edad, factores de riesgo y zona de procedencia.
                    </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full lg:max-w-md overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-emerald-500 text-emerald-50 uppercase tracking-wide">
                            <tr>
                                <th className="px-3 py-2 text-left">ID</th>
                                <th className="px-3 py-2 text-left">Edad</th>
                                <th className="px-3 py-2 text-left">Género</th>
                                <th className="px-3 py-2 text-left">HTA</th>
                                <th className="px-3 py-2 text-left">DM</th>
                                <th className="px-3 py-2 text-left">Obesidad</th>
                                <th className="px-3 py-2 text-left">Zona</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {chimborazoDataset.slice(0, 6).map((registro) => (
                                <tr key={registro.id}>
                                    <td className="px-3 py-2 font-semibold text-gray-900">{registro.id}</td>
                                    <td className="px-3 py-2 text-gray-700">{registro.edad}</td>
                                    <td className="px-3 py-2 text-gray-700">{registro.genero}</td>
                                    <td className="px-3 py-2 text-gray-700">{registro.hipertension}</td>
                                    <td className="px-3 py-2 text-gray-700">{registro.diabetes}</td>
                                    <td className="px-3 py-2 text-gray-700">{registro.obesidad}</td>
                                    <td className="px-3 py-2 text-gray-700">{registro.zona}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="mt-3 text-xs text-gray-500">
                        Vista previa de los primeros registros. Descarga el CSV para obtener la muestra completa o abre la hoja publicada
                        para consultarla en línea.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DatasetAccessSection;
