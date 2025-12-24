/**
 * Servicio para manejar la subida de archivos a Supabase Storage.
 */

window.UploadService = {
    /**
     * Sube un archivo al bucket especificado.
     * @param {File} file - El objeto de archivo a subir.
     * @param {string} bucket - El nombre del bucket en Supabase (ej. 'fotos').
     * @returns {Promise<string>} - La URL pública del archivo subido.
     */
    async uploadFile(file, bucket = 'fotos') {
        if (!window.supabaseClient) {
            throw new Error("Supabase client no inicializado.");
        }

        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { data, error } = await window.supabaseClient.storage
            .from(bucket)
            .upload(filePath, file);

        if (error) {
            throw error;
        }

        const { data: { publicUrl } } = window.supabaseClient.storage
            .from(bucket)
            .getPublicUrl(filePath);

        return publicUrl;
    }
};
