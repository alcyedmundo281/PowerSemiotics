import React, { useMemo } from 'react';

type Registro = {
    id: string;
    edad: number;
    genero: 'Masculino' | 'Femenino';
    hipertension: 'Sí' | 'No';
    diabetes: 'Sí' | 'No';
    obesidad: 'Sí' | 'No';
    zona: 'Rural' | 'Urbano';
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const dataset: Registro[] = [
    { id: 'CH-001', edad: 68, genero: 'Masculino', hipertension: 'Sí', diabetes: 'No', obesidad: 'No', zona: 'Rural' },
    { id: 'CH-002', edad: 45, genero: 'Femenino', hipertension: 'No', diabetes: 'Sí', obesidad: 'Sí', zona: 'Rural' },
    { id: 'CH-003', edad: 22, genero: 'Masculino', hipertension: 'No', diabetes: 'No', obesidad: 'Sí', zona: 'Urbano' },
    { id: 'CH-004', edad: 58, genero: 'Femenino', hipertension: 'Sí', diabetes: 'Sí', obesidad: 'Sí', zona: 'Urbano' },
    { id: 'CH-005', edad: 71, genero: 'Masculino', hipertension: 'Sí', diabetes: 'No', obesidad: 'Sí', zona: 'Rural' },
    { id: 'CH-006', edad: 34, genero: 'Femenino', hipertension: 'No', diabetes: 'No', obesidad: 'No', zona: 'Urbano' },
    { id: 'CH-007', edad: 52, genero: 'Femenino', hipertension: 'Sí', diabetes: 'Sí', obesidad: 'No', zona: 'Rural' },
    { id: 'CH-008', edad: 19, genero: 'Femenino', hipertension: 'No', diabetes: 'No', obesidad: 'Sí', zona: 'Urbano' },
    { id: 'CH-009', edad: 61, genero: 'Masculino', hipertension: 'Sí', diabetes: 'Sí', obesidad: 'Sí', zona: 'Urbano' },
    { id: 'CH-010', edad: 28, genero: 'Masculino', hipertension: 'No', diabetes: 'No', obesidad: 'No', zona: 'Rural' },
    { id: 'CH-011', edad: 55, genero: 'Femenino', hipertension: 'No', diabetes: 'Sí', obesidad: 'Sí', zona: 'Urbano' },
    { id: 'CH-012', edad: 75, genero: 'Masculino', hipertension: 'Sí', diabetes: 'No', obesidad: 'No', zona: 'Rural' },
    { id: 'CH-013', edad: 49, genero: 'Masculino', hipertension: 'Sí', diabetes: 'No', obesidad: 'Sí', zona: 'Urbano' },
    { id: 'CH-014', edad: 63, genero: 'Femenino', hipertension: 'Sí', diabetes: 'Sí', obesidad: 'Sí', zona: 'Rural' },
    { id: 'CH-015', edad: 25, genero: 'Femenino', hipertension: 'No', diabetes: 'No', obesidad: 'Sí', zona: 'Urbano' },
    { id: 'CH-016', edad: 59, genero: 'Masculino', hipertension: 'Sí', diabetes: 'No', obesidad: 'Sí', zona: 'Rural' },
    { id: 'CH-017', edad: 42, genero: 'Masculino', hipertension: 'No', diabetes: 'No', obesidad: 'No', zona: 'Urbano' },
    { id: 'CH-018', edad: 66, genero: 'Femenino', hipertension: 'Sí', diabetes: 'No', obesidad: 'No', zona: 'Rural' },
    { id: 'CH-019', edad: 31, genero: 'Femenino', hipertension: 'No', diabetes: 'No', obesidad: 'Sí', zona: 'Urbano' },
    { id: 'CH-020', edad: 70, genero: 'Masculino', hipertension: 'Sí', diabetes: 'Sí', obesidad: 'No', zona: 'Rural' },
];

const GoogleSheetModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const googleSheetEmbedUrl = `${import.meta.env.BASE_URL}muestra-base-datos-anonimizada-chimborazo.html`;
    const googleSheetDownloadUrl = `${import.meta.env.BASE_URL}muestra-base-datos-anonimizada-chimborazo.csv`;

    const csvContent = useMemo(() => {
        const header = 'ID_Paciente,Edad,Género,Hipertensión,Diabetes,Obesidad,Zona';
        const body = dataset
            .map((registro) =>
                [
                    registro.id,
                    registro.edad,
                    registro.genero,
                    registro.hipertension,
                    registro.diabetes,
                    registro.obesidad,
                    registro.zona,
                ].join(',')
            )
            .join('\n');

        return `${header}\n${body}`;
    }, []);

    const handleCopyCsv = () => {
        void navigator.clipboard.writeText(csvContent);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full overflow-hidden">
                <div className="p-8 space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1 space-y-2">
                            <h2 className="text-3xl font-bold text-emerald-600">Muestra de la Base de Datos Anonimizada - Chimborazo</h2>
                            <p className="text-gray-700">
                                Accede a la hoja de cálculo que acompaña la misión. Puedes explorar la vista incrustada, abrir la hoja publicada en una nueva pestaña o descargar la muestra en formato CSV para trabajar sin conexión.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 w-full lg:w-auto">
                            <a
                                href={googleSheetEmbedUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-emerald-600"
                            >
                                Abrir en Google Sheets
                            </a>
                            <a
                                href={googleSheetDownloadUrl}
                                download
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500 px-4 py-2 font-semibold text-emerald-600 transition-colors duration-200 hover:bg-emerald-50"
                            >
                                Descargar CSV
                            </a>
                            <button
                                type="button"
                                onClick={handleCopyCsv}
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                            >
                                Copiar datos al portapapeles
                            </button>
                        </div>
                    </div>

                    <div>
                        <iframe
                            title="Vista publicada en Google Sheets"
                            src={googleSheetEmbedUrl}
                            className="w-full h-80 rounded-lg border border-gray-200"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                            Si la vista embebida no se muestra correctamente, utiliza el botón "Abrir en Google Sheets" para acceder al archivo directamente.
                        </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Vista previa rápida</h3>
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                            <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                                <tr>
                                    <th className="px-4 py-2 text-left">ID Paciente</th>
                                    <th className="px-4 py-2 text-left">Edad</th>
                                    <th className="px-4 py-2 text-left">Género</th>
                                    <th className="px-4 py-2 text-left">Hipertensión</th>
                                    <th className="px-4 py-2 text-left">Diabetes</th>
                                    <th className="px-4 py-2 text-left">Obesidad</th>
                                    <th className="px-4 py-2 text-left">Zona</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {dataset.map((registro) => (
                                    <tr key={registro.id}>
                                        <td className="px-4 py-2 font-medium text-gray-900">{registro.id}</td>
                                        <td className="px-4 py-2 text-gray-700">{registro.edad}</td>
                                        <td className="px-4 py-2 text-gray-700">{registro.genero}</td>
                                        <td className="px-4 py-2 text-gray-700">{registro.hipertension}</td>
                                        <td className="px-4 py-2 text-gray-700">{registro.diabetes}</td>
                                        <td className="px-4 py-2 text-gray-700">{registro.obesidad}</td>
                                        <td className="px-4 py-2 text-gray-700">{registro.zona}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-500">
                        Esta muestra de datos es ficticia y se publica con fines educativos para la misión "Diagnóstico Comunitario".
                    </p>
                </div>
                <div className="bg-gray-100 px-8 py-4 text-right">
                    <button
                        onClick={onClose}
                        className="bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleSheetModal;
