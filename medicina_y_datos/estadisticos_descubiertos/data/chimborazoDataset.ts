export type Registro = {
    id: string;
    edad: number;
    genero: 'Masculino' | 'Femenino';
    hipertension: 'Sí' | 'No';
    diabetes: 'Sí' | 'No';
    obesidad: 'Sí' | 'No';
    zona: 'Rural' | 'Urbano';
};

const chimborazoDatasetAssetFilenames = {
    html: 'muestra-base-datos-anonimizada-chimborazo.html',
    csv: 'muestra-base-datos-anonimizada-chimborazo.csv',
} as const;

const resolveDatasetAssetUrl = (filename: string) => {
    if (typeof window === 'undefined') {
        return `./${filename}`;
    }

    return new URL(filename, window.location.href).toString();
};

export const chimborazoDatasetAssets = {
    html: () => resolveDatasetAssetUrl(chimborazoDatasetAssetFilenames.html),
    csv: () => resolveDatasetAssetUrl(chimborazoDatasetAssetFilenames.csv),
};

export const chimborazoDataset: Registro[] = [
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
