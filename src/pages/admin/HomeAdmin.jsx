import { useState, useEffect, useRef } from "react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Loader from "../../comps/Loader";

const HomeAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const menu = useRef(null);
  const hamburguesa = useRef(null);
  const [datos, setDatos] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function traerDatos() {
      try {
        const perfil = await fetch(
          "https://www.hs-service.api.crealape.com/api/v1/auth/profile",
          {
            method: "GET",
            credentials: "include", // Necesario para enviar cookie
          }
        );
        const user = await perfil.json();

        setDatos(user);
        setEmail(user.email);
        setPassword(localStorage.getItem("password"));
      } catch (error) {
        console.log(error);
      }
    }

    traerDatos();
  }, []);

  console.log("M", datos);

  async function cerrarSesion() {
    setLoading(true);
    try {
      const logout = await fetch(
        "https://www.hs-service.api.crealape.com/api/v1/auth/logout",
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
      if (logout) {
        localStorage.clear();
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(datos);

  return (
    <div className="relative flex flex-col w-full min-h-screen ">
      {loading && <Loader />}
      <header className="text-white w-full h-25 px-[5%] flex justify-between items-center bg-blue-500">
        {/* Menú Hamburguesa - Solo visible en móvil */}
        <div className="lg:hidden relative" ref={hamburguesa}>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex flex-col gap-1.5 p-2 hover:bg-blue-100 rounded"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${openMenu ? "rotate-45 tranblue-y-2" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${openMenu ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${openMenu ? "-rotate-45 -tranblue-y-2" : ""
                }`}
            ></span>
          </button>

          {/* Menú desplegable móvil*/}
          {openMenu && (
            <div className="fixed inset-0 z-10">
              <div onClick={() => { setOpenMenu(false); }} className="absolute inset-0 backdrop-blur-md h-screen w-screen " />
              <div className="absolute bg-blue-500 h-screen w-50 left-0 top-0 shadow-2xl">
                <Link to="/admin">
                  <button
                    className="w-full text-left px-4 py-5 my-10 text-white hover:bg-blue-100 hover:text-black transition-colors "
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                  >
                    Home
                  </button>
                </Link>

                <Link to="users">
                  <button
                    className="w-full text-left px-4 py-5 text-white hover:bg-blue-100 hover:text-black transition-colors "
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                  >
                    Usuarios
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* logo y rutas */}
        <div className="  flex gap-5  ">
          <Link to="/admin">
            <img
              src="/todo.png"
              alt="Funval internacional"
              className="h-15 w-auto max-w-full"
            />
          </Link>

          {/* table*/}
          <nav className="hidden  lg:flex items-center justify-between w-[200px] gap-10 text-2xl">
            <Link to="/admin">
              <nav>Home</nav>
            </Link>
            <Link to="users">
              <nav>Usuarios</nav>
            </Link>
          </nav>
        </div>

        {/* Menú del usuario */}
        <nav className="relative" ref={menu}>
          <img
            className=" cursor-pointer"
            width="50"
            height="50"
            src="https://img.icons8.com/pastel-glyph/64/FFFFFF/user-male-circle.png"
            alt="user-male-circle"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="fixed inset-0 z-10">
              <div onClick={() => { setOpen(false); }} className="absolute inset-0 backdrop-blur-md h-screen w-screen " />
              <div className="absolute bg-blue-500 h-screen w-50 right-0 top-0 shadow-2xl">
                <Link to="edit">
                  <button
                    className="w-full text-left px-4 py-5 my-10 text-white hover:bg-blue-100 hover:text-black transition-colors "
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Ver Perfil
                  </button>
                </Link>

                <button
                  className="w-full text-left px-4 py-5 text-white hover:bg-blue-100 hover:text-black transition-colors "
                  onClick={cerrarSesion}
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* CONTENIDO */}

      <main className="h-full w-auto px-[5%] py-5 bg-[#f2f3f7] ">
        <Outlet
          context={{
            datos
          }}
        />
      </main>

      <footer className="bg-blue-500 flex justify-around w-full h-40 ">
        <div className="flex  items-center justify-center pl-5 gap-4  ">
          <a
            href="https://www.youtube.com/channel/UC3mlp-KW6mSDrsfsp8OOlIQ"
            target="_blank"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
              alt="youtube"
            />
          </a>

          <div className="h-12 w-12 ">
            <a
              href="https://www.facebook.com/fundet?mibextid=LQQJ4d"
              target="_blank"
            >
              <img
                width="50"
                height="20"
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
              />
            </a>
          </div>
          <div className="h-10 w-10">
            <a
              href="https://www.instagram.com/funvalinternacional/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="instagram"
              />
            </a>
          </div>
        </div>

        <div className=" w-[250px] flex flex-col justify-center items-center text-white ">
          <h2 className="font-medium tracking-widest text-2xl mb-3 ">
            Quiénes somos
          </h2>
          <p className="mb-1 w-full flex justify-center items-center  font-medium">
            FUNVAL ofrece soluciones confiables e innovadoras, generando valor y
            confianza para sus clientes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomeAdmin;
