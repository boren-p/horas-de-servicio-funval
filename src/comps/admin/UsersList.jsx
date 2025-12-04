import React from "react";

const UserList = () => {
  const datos = [
    {
      estado: "Activo",
      nombre: "Juan Pérez",
      escuela: "Tecnología",
      controlador: "María López",
      responsable: "Carlos Gómez",
      horas: 12,
      contacto: "juan@example.com",
    },
    {
      estado: "Pendiente",
      nombre: "Ana Torres",
      escuela: "Administración",
      controlador: "Luis Ramos",
      responsable: "Sofía Díaz",
      horas: 8,
      contacto: "ana@example.com",
    },
  ];

  return (
    <div className="w-full   overflow-auto">
      <div className="bg-white rounded-xl shadow-xl overflow-auto ">
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
        <div>
          <table className=" w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Estado
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Nombre
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Escuela
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Controlador
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Responsable
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Horas Reportadas
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Contacto
                </th>
              </tr>
            </thead>
            <tbody>
              {datos.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                >
                  <td className=" md:py-4 text-gray-600">{item.estado}</td>
                  <td className=" md:py-4 text-gray-600">{item.nombre}</td>
                  <td className=" md:py-4 text-gray-600">{item.escuela}</td>
                  <td className=" md:py-4 text-gray-600">{item.controlador}</td>
                  <td className=" md:py-4 text-gray-600">{item.responsable}</td>
                  <td className="text-lg flex items-center justify-center  md:py-4 text-gray-600">
                    {item.horas}
                  </td>
                  <td className=" md:py-4 text-gray-600">{item.contacto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
