import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* import { useNavigate } from "react-router-dom"; */

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /*  const navigate = useNavigate(); */

  async function formulario(e) {
    e.preventDefault();

    setError(null);

    if (!email || !password) {
      setError("Complete todos los campos");
      return;
    }

    setLoading(true);
    setError(null);
    console.log(email);
    console.log(password);

    try {
      const respuesta = await fetch(
        "https://www.hs-service.api.crealape.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await respuesta.json();
      localStorage.setItem("password", password)

      if (!respuesta.ok) {
        setError(data.message || "Error al iniciar sesión");
        setLoading(false);
        return;
      }
      console.log(data)

      const perfil = await fetch(
        "https://www.hs-service.api.crealape.com/api/v1/auth/profile",
        {
          method: "GET",
          credentials: "include", // Necesario para enviar cookie
        }
      );

      const user = await perfil.json();
      localStorage.setItem("role", user.role.id)
      console.log("Perfil:", user);

      if (user.role.id === 1) {
        navigate("/admin")
      } else if (user.role.id === 4) {
        navigate("/student")
      } else {
        navigate("/")
      }

    } catch (error) {
      setError("Error de conexión con el servidor", error.message);
      console.log(error)
      navigate("/");

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-full bg-cover bg-center flex items-center justify-center relative bg-[url(/geminis.png)]">
      <div className="absolute inset-0 bg-[url(/fondo.png)] bg-cover bg-no-repeat"></div>

      <div className="relative  z-10 bg-slate-200 bg-opacity-90 p-8 rounded-xl shadow-lg w-80 md:text-3xl md:p-10 md:w-100">
        <h2 className="text-2xl font-semibold mb-6 text-center ">
          Iniciar Sesión
        </h2>

        {error && (
          <p className="text-red-600 text-center text-sm mb-2">{error}</p>
        )}

        <form onSubmit={formulario} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium  md:text-xl">Correo</label>
            <input
              type="email"
              className="mt-1 p-2 rounded-lg text-xl   focus:outline-none focus:ring "
              placeholder="ejemplo@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium  md:text-xl">
              Contraseña
            </label>
            <input
              type="password"
              className="mt-1 p-2 rounded-lg focus:outline-none focus:ring "
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full text-xl bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
