import React from "react";
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
  pais: 0,
  controller: 0,
  reclutier: 0,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NOMBRE1":
      return { ...state, nombre1: action.payload };
    case "SET_NOMBRE2":
      return { ...state, nombre2: action.payload };
    case "SET_APELLIDO1":
      return { ...state, apellido1: action.payload };
    case "SET_APELLIDO2":
      return { ...state, apellido2: action.payload };
    case "SET_PAIS":
      return { ...state, pais: Number(action.payload) };
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
    case "SET_RECLUITER":
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
    if (state.escuela.length > 0) {
      state.escuela.forEach(num => {
        formData.append("schools[]", num);
      });
    } else {
      // enviar array vacío para ADMIN y otros roles que no requieren escuelas
      formData.append("schools[]", "");
    }
    formData.append("phone", state.phone);
    formData.append("role_id", state.rol);
    formData.append("country_id", state.pais)
    formData.append("controller_id", state.controller || "");
    formData.append("recruiter_id", state.reclutier || "");

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
    <div className=" flex items-center justify-center">
      <div className="w-full rounded-2xl shadow-xl overflow-hidden ">
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
                  value={state.nombre1}
                  onChange={(e) => {
                    dispatch({ type: "SET_NOMBRE1", payload: e.target.value })
                  }}
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
                  value={state.nombre2}
                  onChange={(e) => {
                    dispatch({ type: "SET_NOMBRE2", payload: e.target.value })
                  }}
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
                  value={state.apellido1}
                  onChange={(e) => {
                    dispatch({ type: "SET_APELLIDO1", payload: e.target.value })
                  }}
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
                  value={state.apellido2}
                  onChange={(e) => {
                    dispatch({ type: "SET_APELLIDO2", payload: e.target.value })
                  }}
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
                  value={state.email}
                  onChange={(e) => {
                    dispatch({ type: "SET_EMAIL", payload: e.target.value })
                  }}
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
                  Numero de Telefono
                </label>
                <input
                  /* value={state.phone} */
                  onChange={(e) => {
                    dispatch({ type: "SET_PHONE", payload: e.target.value })
                  }}
                  type="number"
                  id="number"
                  name="number"
                  placeholder="+21 235320320"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
                />
              </div>
            </div>

            {/* Escuela */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="password"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Contraseña
                </label>
                <input
                  value={state.password}
                  onChange={(e) => {
                    dispatch({ type: "SET_PASSWORD", payload: e.target.value })
                  }}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer"
                >
                </input>
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="country"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  País
                </label>
                <select
                  value={state.pais}
                  onChange={(e) => {
                    dispatch({ type: "SET_PAIS", payload: e.target.value })
                  }}
                  id="pais"
                  name="pais"
                  className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer text-sm"
                >
                  <option value="">Seleccion el País</option>
                  <option value={4}>Mexico</option>
                </select>
              </div>
            </div>


            {/* País Controlador y Rol Reclutador */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-5 ">
                <div className="flex flex-col pb-5">
                  <label className="pb-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Rol
                  </label>
                  <select
                    value={state.rol}
                    onChange={(e) => {
                      dispatch({ type: "SET_ROL", payload: e.target.value })
                    }}
                    id="rol"
                    name="rol"
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer text-sm"
                  >
                    <option value="">Seleccion el Rol</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Controller</option>
                    <option value={4}>Estudiante</option>
                  </select>
                </div>

                {state.rol === 4 && (
                  <div className="flex flex-col pb">
                    <label className=" pb-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Controller
                    </label>
                    <select
                      value={state.controller}
                      onChange={(e) => {
                        const val = e.target.value;
                        dispatch({ type: "SET_CONTROLLER", payload: val ? Number(val) : null });
                      }}
                      id="controlador"
                      name="controlador"
                      className="px-3 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer text-sm"
                    >
                      <option value="">Seleccione controller</option>
                      <option value={2}>Jorge Armando Sosa Nuñez</option>
                      <option value={24}>Diego Maradona</option>
                      <option value={28}>El jefaso</option>
                    </select>
                  </div>
                )}

              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex flex-col pb space-y-5 ">
                  {state.rol === 2 && (
                    <div className="flex flex-col pb-5">
                      <label className="pb-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Escuela
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          value={1}
                          type="checkbox"
                          name="schools"
                          checked={state.escuela.includes(1)}
                          onChange={(e) => {
                            const val = Number(e.target.value);

                            const newSchools = e.target.checked
                              ? [...state.escuela, val]
                              : state.escuela.filter(x => x !== val);

                            dispatch({ type: "SET_ESCUELA", payload: newSchools });
                          }
                          }
                          className="w-4 h-4"
                        />
                        <span>Programación</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="schools"
                          value={2}
                          checked={state.escuela.includes(2)}
                          onChange={(e) => {
                            const val = Number(e.target.value);

                            const newSchools = e.target.checked
                              ? [...state.escuela, val]
                              : state.escuela.filter(x => x !== val);

                            dispatch({ type: "SET_ESCUELA", payload: newSchools });
                          }
                          }
                          className="w-4 h-4"
                        />
                        <span>Ingles</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="schools"
                          value={3}
                          checked={state.escuela.includes(3)}
                          onChange={(e) => {
                            const val = Number(e.target.value);

                            const newSchools = e.target.checked
                              ? [...state.escuela, val]
                              : state.escuela.filter(x => x !== val);

                            dispatch({ type: "SET_ESCUELA", payload: newSchools });
                          }
                          }
                          className="w-4 h-4"
                        />
                        <span>Matematicas</span>
                      </label>

                    </div>
                  )}
                  {state.rol === 4 && (
                    <div className="flex flex-col pb-5">
                      <label className="pb-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Escuela
                      </label>
                      <select

                        value={state.escuela}
                        onChange={(e) => {
                          dispatch({ type: "SET_ESCUELA", payload: [Number(e.target.value)] })
                        }}
                        id="Escuela"
                        name="Escuela"
                        className="px-3 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer text-sm"
                      >
                        <option value="">Seleccione una escuela</option>
                        <option value={1}>Programación</option>
                        <option value={2}>Ingles</option>
                        <option value={3}>Matematicas</option>
                      </select>

                    </div>
                  )}

                  {state.rol === 4 && (
                    <div className="flex flex-col">
                      <label className="pb-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Reclutier
                      </label>
                      <select
                        value={state.reclutier}
                        onChange={(e) => {
                          dispatch({ type: "SET_RECLUITER", payload: Number(e.target.value) })
                        }}
                        id="reclutador"
                        name="reclutador"
                        className="px-3 py-3 border-2 border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all cursor-pointer text-sm"
                      >
                        <option value="">Seleccione reclutador</option>
                        <option value={3}>Edgar Diego Rodriguez</option>
                        <option value={27}>Gonzalo Perez</option>
                        <option value={85}>Roberto Revilla</option>
                      </select>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Botón Submit */}
            <button onClick={handleSubmit} type="submit" className="w-full py-4 bg-[#ffb443] text-white text-lg font-bold uppercase tracking-wide rounded-lg hover:scale-102 transition-all">
              Crear Usuario
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
