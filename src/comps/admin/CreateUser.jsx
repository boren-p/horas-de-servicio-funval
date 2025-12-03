import React, { useState } from "react";
import { useReducer } from 'react';

const initialState = {
  nombre1: "",
  nombre2: "",
  apellido1: "",
  apellido2: "",
  email: "",
  password: "",
  escuela: [],
  phone: 0,
  rol: 0,
  controller: 0,
  reclutier: 0,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NOMBRE1":
      return { ...state, nonmbre1: action.payload };
    case "SET_NOMBRE2":
      return { ...state, nonmbre2: action.payload };
    case "SET_APELLIDO1":
      return { ...state, apellido1: action.payload };
    case "SET_APELLIDO2":
      return { ...state, apellido2: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_ESCUELA":
      return { ...state, escuela: action.payload };
    case "SET_PHONE":
      return { ...state, phone: Number(action.payload) };
    case "SET_ROL":
      return { ...state, rol: Number(action.payload) };
    case "SET_CONTROLLER":
      return { ...state, controller: Number(action.payload) };
    case "SET_RECLUTIER":
      return { ...state, reclutier: Number(action.payload) };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function NuevoUsuarioCard() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("f_name", state.nombre1);
    formData.append("s_name", state.nombre2);
    formData.append("f_lastname", state.apellido1);
    formData.append("s_lastname", state.apellido2);
    formData.append("email", state.email);
    formData.append("password", state.password);
    formData.append("schools", state.escuela);
    formData.append("phone", state.phone);
    formData.append("role_id", state.rol);
    formData.append("controller_id", state.controller);
    formData.append("recruiter_id", state.reclutier);

    try {
      const respuesta = await fetch(
        "https://www.hs-service.api.crealape.com/api/v1/users/",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      console.log("Respuesta del servidor", await respuesta.json());

    } catch (error) {
      console.log(error);
    }

    dispatch({ type: "RESET" });
  };


  return (
    <div className="min-h-screen p-4  flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden ">
        {/* Header con gradiente llamativo */}
        <div className="bg-[#1F4E79] px-8 py-6 text-center">
          <h2 className="text-white text-xl md:text-3xl font-bold tracking-wide uppercase">
            Nuevo Usuario
          </h2>
        </div>

        {/* Contenido del formulario */}
        <div className="p-6 md:p-10 bg-white border-[#3E7CB1]">
          <div className="space-y-6">
            {/* Nombres */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="nombre1"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Nombre 1
                </label>
                <input
                  type="text"
                  id="nombre1"
                  name="nombre1"
                  placeholder="Ingrese primer nombre"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="nombre2"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Nombre 2
                </label>
                <input
                  type="text"
                  id="nombre2"
                  name="nombre2"
                  placeholder="Ingrese segundo nombre"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
                />
              </div>
            </div>

            {/* Apellidos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="apellido1"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Apellido 1
                </label>
                <input
                  type="text"
                  id="apellido1"
                  name="apellido1"
                  placeholder="Ingrese primer apellido"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="apellido2"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Apellido 2
                </label>
                <input
                  type="text"
                  id="apellido2"
                  name="apellido2"
                  placeholder="Ingrese segundo apellido"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
                />
              </div>
            </div>

            {/* Email y Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="password"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
                />
              </div>
            </div>

            {/* Escuela */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="escuela"
                className="text-xs font-bold text-gray-700 uppercase tracking-wider"
              >
                Escuela
              </label>
              <select
                id="escuela"
                name="escuela"
                className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer"
              >
                <option value="escuela1">escuela 1</option>
                <option value="escuela2">escuela 2</option>
                <option value="escuela3">escuela 3</option>
              </select>
            </div>

            {/* País Controlador y Rol Reclutador */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-5 ">
                <div className="flex flex-col">
                  <label className="pb-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                    País
                  </label>
                  <select
                    id="pais"
                    name="pais"
                    className="px-3 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer text-sm"
                  >
                    <option value="pais1">País 1</option>
                    <option value="pais2">País 2</option>
                    <option value="pais3">País 3</option>
                  </select>
                </div>
                <div className="flex flex-col pb">
                  <label className=" pb-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Controller
                  </label>
                  <select
                    id="controlador"
                    name="controlador"
                    className="px-3 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer text-sm"
                  >
                    <option value="controlador1">Controlador 1</option>
                    <option value="controlador2">Controlador 2</option>
                    <option value="controlador3">Controlador 3</option>
                  </select>
                </div>

              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex flex-col pb">
                  <div className="flex flex-col pb-5">
                    <label className="pb-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Rol
                    </label>
                    <select
                      id="rol"
                      name="rol"
                      className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer text-sm"
                    >
                      <option value="1">Admin</option>
                      <option value="2">Controller</option>
                      <option value="4">Estudiante</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="pb-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Reclutier
                    </label>
                    <select
                      id="reclutador"
                      name="reclutador"
                      className="px-3 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer text-sm"
                    >
                      <option value="recluter1">Recluter 1</option>
                      <option value="recluter2">Recluter 2</option>
                      <option value="recluter3">Recluter 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón Submit */}
            <button className="w-full py-4 bg-[#ffb443] text-white text-lg font-bold uppercase tracking-wide rounded-lg hover:scale-102 transition-all">
              Crear Usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
