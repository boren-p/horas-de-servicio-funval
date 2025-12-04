import React from "react";
import { useReducer } from "react";

const initialState = {
  descrip: "",
  serviceType: 0,
  hours: 0,
  pdf: null,
  loading: false,
  error: null,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", state.descrip);
    formData.append("category_id", state.serviceType);
    formData.append("amount_reported", state.hours);
    formData.append("evidence", state.pdf);

    try {
      const respuesta = await fetch(
        "https://www.hs-service.api.crealape.com/api/v1/services",
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
    <div className="p-6 bg-gray-100 min-w-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">
          Reporte de Horas de Servicio
        </h2>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            value={state.descrip}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            rows="3"
            placeholder="Descripcion del servicio..."
            required
            onChange={(e) => {
              dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
            }}
          />
        </div>
        <div className="flex gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Tipo de servicio
            </label>
            <select
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
              value={state.serviceType}
              onChange={(e) => {
                dispatch({ type: "SET_SERVICE_TYPE", payload: e.target.value });
              }}
            >
              <option value="">Seleccione...</option>
              <option value={1}>Templo e Historia familiar, Indexacion</option>
              <option value={2}>Liderazgo</option>
              <option value={3}>Asistencia al templo</option>
              <option value={4}>Otro</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Horas Registradas
            </label>
            <input
              type="number"
              min="1"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
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
            className="w-full border rounded-lg p-2 bg-gray-100"
            onChange={(e) =>
              dispatch({ type: "SET_FILE", payload: e.target.files[0] })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow-md transition"
        >
          Enviar reporte
        </button>
      </form>
    </div>
  );
};

export default ReportService;
