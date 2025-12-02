import React from "react";

const EstudiantesTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className=" border-b border-gray-200 px-6 py-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Estudiantes</h2>

        {/* Buscador */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Escribiendo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg">
            Buscar
          </button>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Escuela
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Controlador
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Responsable
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Horas Reportadas
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Contacto
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EstudiantesTable;
