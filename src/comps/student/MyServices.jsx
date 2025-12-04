import React, { useState, useEffect } from "react";

const MyServices = () => {
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
        const user = await myServicios.json();
        setServicios(user);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }

    traerServicios();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Mis Servicios Registrados
      </h2>

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
            {/* {console.log(servicios?.category)} */}
            {servicios?.map((serv) => (
              <tr key={serv.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{serv.category.name}</td>
                <td className="p-3 border-b">{serv.amount_reported}</td>
                <td className="p-3 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      serv.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : serv.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {serv.status}
                  </span>
                </td>
                <td className="p-3 border-b">
                  {serv.reviewer ? serv.reviewer.full_name : "Sin revisar"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
