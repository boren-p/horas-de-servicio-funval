import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../comps/Loader";
/* import { useNavigate } from "react-router-dom"; */

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false)
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
    <div className="h-screen w-full bg-cover bg-center bg-[url(/geminis.png)]">
      {loading && <Loader />}
      <div className="absolute inset-0 bg-[url(/fondo.png)] bg-cover bg-no-repeat"></div>

      <div className="relative flex items-center justify-center h-screen">
        <div className="z-10 bg-blue-200 bg-opacity-90 p-8 rounded-xl shadow-lg w-80 md:text-3xl md:p-10 md:w-100">
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

            <div className=" relative flex flex-col">
              <label className="text-sm font-medium  md:text-xl">
                Contraseña
              </label>
              <input
                type={show ? "text" : "password"}
                className="mt-1 p-2 rounded-lg"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="absolute right-3 top-12" type="button" onClick={() => setShow(!show)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              </button>
            </div>

            <button
              type="submit"
              className="mt-4 w-full text-xl bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
