import React from "react";

const UsersList = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full border">
        <input type="text" placeholder="escribir..." className="" />
        <button>buscar</button>
      </div>
      <table className="border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">ESTADO</th>
            <th className="border border-gray-300 px-4 py-2">NOMBRE</th>
            <th className="border border-gray-300 px-4 py-2">ESCUELA</th>
            <th className="border border-gray-300 px-4 py-2">CONTROLLER</th>
            <th className="border border-gray-300 px-4 py-2">RESPONSABLE</th>
            <th className="border border-gray-300 px-4 py-2">
              HORAS REPORTADAS
            </th>
            <th className="border border-gray-300 px-4 py-2">CONTACTO</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">data</td>
            <td className="border border-gray-300 px-4 py-2">data</td>
            <td className="border border-gray-300 px-4 py-2">data</td>
            <td className="border border-gray-300 px-4 py-2">data</td>
            <td className="border border-gray-300 px-4 py-2">data</td>
            <td className="border border-gray-300 px-4 py-2">data</td>
            <td className="border border-gray-300 px-4 py-2">data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
