import React, { useState, useEffect } from "react";

const UserList = () => {
  const [datos, setDatos] = useState();
  const [rol, setRol] = useState("")
  const [estado, setEstado] = useState("")
  const [busqueda, setBusqeuda] = useState("")
  const [resultado, setResultado] = useState()

  useEffect(() => {
    async function traerServicios() {
      try {
        const myServicios = await fetch(
          "https://www.hs-service.api.crealape.com/api/v1/users?r=200",
          {
            method: "GET",
            credentials: "include", // Necesario para enviar cookie
          }
        );
        const dato = await myServicios.json();
        setDatos(dato);
      } catch (error) {
        console.log(error);
      }
    }

    traerServicios();
  }, []);

  useEffect(() => {
    let filtrados = datos;

    if (rol !== "") {
      filtrados = filtrados.filter((r) => r.role.name === rol)
    }
    if (estado !== "") {
      filtrados = filtrados.filter((r) => r.status === estado)
    }
    if (busqueda.trim() !== "") {
      filtrados = filtrados.filter((r) => `${r.f_name} ${r.f_lastname}`.toLowerCase().includes(busqueda.toLowerCase()));
    }

    setResultado(filtrados)
  }, [rol, estado, datos, busqueda])

  return (
    <div className="w-full  min-h-screen overflow-auto ">

      <div className="bg-white rounded-xl shadow-xl overflow-auto ">
        <div className=" border-b border-gray-200 px-6 py-5 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Usuarios</h2>
          <div className="flex flex-row w-full gap-6 ">
            {/* Buscador */}
            <div className="flex gap-2 w-full h-12 mt-8">
              <input
                value={busqueda}
                onChange={(e) => setBusqeuda(e.target.value)}
                type="text"
                placeholder="Escribiendo..."
                className=" flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

            </div>
            {/*FILTROS*/}
            <div className="flex flex-col justify-center items-center ">
              <h2 className="text-xl font-bold mb-2 ">Filtros</h2>
              <div className="flex gap-15 justify-center items-center my-4">
                <div className="flex flex-col">
                  <label className="text-md font-bold" htmlFor="">Rol</label>
                  <select
                    value={rol}
                    onChange={
                      (e) => setRol(e.target.value)
                    }
                    name="" id="">
                    <option value="">Todos</option>
                    <option value="Admin">Admin</option>
                    <option value="Controller">Controller</option>
                    <option value="Student">Estudiante</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-md font-bold" htmlFor="">Estado</label>
                  <select
                    value={estado}
                    onChange={
                      (e) => setEstado(e.target.value)
                    }
                    name="" id="">
                    <option value="">Todos</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* Tabla */}

        <div className="w-full flex justify-center items-center">
          <table className="w-full max-w-4xl ">
            <thead className="">

              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Estado
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Nombre
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Rol
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Celular
                </th>
                <th className=" md:py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll">
              {resultado?.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                >
                  <td className=" md:py-4 text-gray-600">{item.status}</td>
                  <td className=" md:py-4 text-gray-600">{item.f_name + " " + item.f_lastname}</td>
                  <td className=" md:py-4 text-gray-600">{item.role?.name}</td>
                  <td className="text-lg flex items-center justify-center  md:py-4 text-gray-600">
                    {item.phone ? item.phone : "sin celular"}
                  </td>
                  <td className=" md:py-4 text-gray-600">{item.email}</td>
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
