import React from "react";
import { useState } from "react";
import ReviewService from "./ReviewService";

const Services = () => {
  const [modal, setModal] = useState(false);

  function abrirModal() {
    setModal(true);
  }

  function cerrarModal() {
    setModal(false);
  }

  return (
    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden ">
      {/* Header de la card */}
      {modal && <ReviewService closeModal={cerrarModal} />}
      <div className=" border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">
          SERVICIOS NO REVISADOS
        </h2>
        <p className="text-xl text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors ">
          ver todos
        </p>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Exalumno
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Servicio
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                # de Horas
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-gray-600">datos</td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={abrirModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Ver más
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200"></div>
    </div>
  );
};

export default Services;
