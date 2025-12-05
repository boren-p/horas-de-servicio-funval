import React from "react";
import { useReducer, useState, useEffect } from "react";
import Loader from "../Loader"

const initialState = {
  descrip: "",
  serviceType: 0,
  hours: 0,
  pdf: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_DESCRIPTION":
      return { ...state, descrip: action.payload };
    case "SET_HOURS":
      return { ...state, hours: Number(action.payload) };
    case "SET_SERVICE_TYPE":
      return { ...state, serviceType: Number(action.payload) };
    case "SET_FILE":
      return { ...state, pdf: action.payload };
    case "RESET":
      return initialState;

    default:
      return state;
  }
}
const ReportService = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [cath, setCath] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", state.descrip);
    formData.append("category_id", state.serviceType);
    formData.append("amount_reported", state.hours);
    formData.append("evidence", state.pdf);

    try {
      setLoading(true)
      const respuesta = await fetch(
        "https://www.hs-service.api.crealape.com/api/v1/services",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      const answ = await respuesta.json();
      console.log(answ)
      setLoading(false)

      if (!respuesta.ok || answ.message === "error") {
        setError(true);
      } else {
        setError(false);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }

    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    async function showCath() {
      try {
        const answ = await fetch("https://www.hs-service.api.crealape.com/api/v1/categories", {
          method: "GET",
          credentials: "include"
        })

        const cath = await answ.json();
        setCath(cath)

      } catch (error) {

      }

    }
    showCath();
  }, [])

  return (
    <div className="relative my-5 bg-gray-100 ">
      {loading && <Loader />}
      <form
        onSubmit={handleSubmit}
        className="max-w-full mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">
          REPORTE DE HORAS DE SERVICIO
        </h2>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            value={state.descrip}
            className="w-full bg-gray-100 rounded-lg p-2 focus:shadow-lg"
            rows="3"
            placeholder="Descripcion del servicio..."
            required
            onChange={(e) => {
              dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-1">
              Tipo de servicio
            </label>
            <select
              className="w-full bg-gray-100 rounded-lg p-2 focus:shadow-lg "
              required
              value={state.serviceType}
              onChange={(e) => {
                dispatch({ type: "SET_SERVICE_TYPE", payload: e.target.value });
              }}
            >
              <option value="">Seleccione...</option>
              {cath.map((ct) => (
                <option key={ct.id} value={ct.id}>{ct.name}</option>
              ))}
            </select>
          </div>

          <div className="min-w-50">
            <label className="block font-medium text-gray-700 mb-1">
              Horas Registradas
            </label>
            <input
              type="number"
              min="1"
              className="w-full bg-gray-100 rounded-lg p-2 focus:outline-none focus:shadow-lg "
              placeholder="Ej: 3"
              required
              value={state.hours}
              onChange={(e) => {
                dispatch({ type: "SET_HOURS", payload: e.target.value });
              }}
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Cargar Pdf
          </label>
          <input
            type="file"
            className="w-full bg-gray-100 rounded-lg p-2  appearance-none"
            placeholder="Seleccionar archivo (solo PDF)..."
            onChange={(e) =>
              dispatch({ type: "SET_FILE", payload: e.target.files[0] })
            }
          />

        </div>

        {error && <div className="w-full flex justify-center">
          <p className="text-red-500">ERROR: intenta de nuevo</p>
        </div>}

        <button
          type="submit"
          className="px-6 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-800 transition-all font-medium"
        >
          ENVIAR REPORTE
        </button>
      </form>
    </div>
  );
};

export default ReportService;
