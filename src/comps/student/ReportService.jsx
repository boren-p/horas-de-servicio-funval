import React from 'react';

const ReportService = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <form
                className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4"
            >
                <h2 className="text-2xl font-bold text-center">Reporte de Horas de Servicio</h2>

                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        Descripción
                    </label>
                    <textarea
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        rows="3"
                        placeholder="Descripcion del servicio..."
                        required
                    />
                </div>
                <div className='flex gap-4'>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Tipo de servicio
                        </label>
                        <select
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="Servicio comunitario">Templo e Historia familiar, Indexacion</option>
                            <option value="Servicio en la iglesia">Liderazgo</option>
                            <option value="Ayuda social">Asistencia al templo</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Horas Registradas
                        </label>
                        <input
                            type="number"
                            min="1"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Ej: 3"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        Cargar Pdf
                    </label>
                    <input
                        type="file"
                        className="w-full border rounded-lg p-2 bg-gray-100"
                    /* onChange={(e) => setArchivo(e.target.files[0])} */
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow-md transition"
                >
                    Enviar reporte
                </button>
            </form>
        </div>
    );
}

export default ReportService;
