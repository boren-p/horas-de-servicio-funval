import React from "react";
import { useState, useEffect } from "react";
import ReviewService from "./ReviewService";

const Services = () => {
  const [modal, setModal] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);



  function abrirModal(servicio) {
    setModal(true);
    setServicioSeleccionado(servicio);
  }

  function cerrarModal() {
    setModal(false);
  }
  const [servicios, setServicios] = useState();

  useEffect(() => {
    async function traerServicios() {
      try {
        const myServicios = await fetch(
          "https://www.hs-service.api.crealape.com/api/v1/services",
          {
            method: "GET",
            credentials: "include", // Necesario para enviar cookie
          }
        );
        const data = await myServicios.json();
        const filtrados = data.filter(serv => serv.reviewer === null);
        setServicios(filtrados)
        console.log(filtrados)

      } catch (error) {
        console.log(error)
      }

    }

    traerServicios();
  }, []);

  return (
    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden ">
      {/* Header de la card */}
      {modal && <ReviewService closeModal={cerrarModal} servicio={servicioSeleccionado} />}
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
            <tr className="bg-gray-50 border-b border-gray-200 ">
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Alumno
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Servicio
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                # de Horas
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {servicios?.map((serv) => (
              <tr
                key={serv.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-600">{serv.user.f_name}</td>
                <td className="px-6 py-4 text-gray-600">{serv.category.name}</td>
                <td className="px-6 py-4 text-gray-600">{serv.amount_reported}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => abrirModal(serv)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    Ver más
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200"></div>
    </div>
  );
};

export default Services;
