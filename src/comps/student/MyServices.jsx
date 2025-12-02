import React from 'react';

const MyServices = () => {
    const estado = "Aprobado"
    return (
        <div className="max-w-4xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Mis Servicios Registrados</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="p-3 border-b">Nombre del servicio</th>
                            <th className="p-3 border-b">Horas reportadas</th>
                            <th className="p-3 border-b">Estado</th>
                            <th className="p-3 border-b">Revisado por</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="hover:bg-gray-50">
                            <td className="p-3 border-b">Nombre</td>
                            <td className="p-3 border-b">2</td>
                            <td className="p-3 border-b">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-semibold ${estado === "Aprobado"
                                        ? "bg-green-100 text-green-700"
                                        : estado === "Pendiente"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {estado}
                                </span>
                            </td>
                            <td className="p-3 border-b">
                                -
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyServices;
