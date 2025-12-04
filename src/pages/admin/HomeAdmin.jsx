import { useState, useEffect, useRef } from "react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const HomeAdmin = () => {
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
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen ">
      <header className="text-white w-full h-25 flex justify-between items-center bg-[#1F4E79]">
        {/* Menú Hamburguesa - Solo visible en móvil */}
        <div className="lg:hidden relative" ref={hamburguesa}>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${openMenu ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${openMenu ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${openMenu ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </button>

          {/* Menú desplegable móvil*/}
          {openMenu && (
            <div className="absolute text-black left-0 mt-2 w-56 bg-white  rounded-lg shadow-lg z-20">
              <Link to="/admin">
                <button
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors "
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  Usuarios
                </button>
              </Link>

              <button
                className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors "
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                Escuelas
              </button>
              <button
                className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                Categorías
              </button>
            </div>
          )}
        </div>
        <Link to="/admin">
          <img
            src="/todo.png"
            alt="Funval internacional"
            className="h-20 w-auto max-w-full"
          />
        </Link>

        {/* NAV en desktop */}
        <nav className="hidden border lg:flex items-center justify-between  w-[150px] gap-10 text-2xl">
          <Link to="users">
            <nav>Usuarios</nav>
          </Link>
          <nav>(Escuelas)</nav>
          <nav>(Categorias)</nav>
        </nav>

        {/* Menú del usuario */}
        <nav className="relative " ref={menu}>
          <img
            className=" cursor-pointer"
            width="50"
            height="50"
            src="https://img.icons8.com/pastel-glyph/64/FFFFFF/user-male-circle.png"
            alt="user-male-circle"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="absolute text-black right-0 mt-2 w-48 bg-white  rounded-lg shadow-lg z-10">
              <Link to="edit">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Editar Perfil
                </button>
              </Link>

              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors border-t"
                onClick={cerrarSesion}
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* CONTENIDO */}

      <main className=" w-auto px-[5%] py-5 ">
        <Outlet
          context={{
            nombre: datos.full_name,
            phone: datos.phone,
            email: datos.email,
          }}
        />
      </main>

      <footer className="bg-[#1F4E79] flex justify-between w-full h-40 ">
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

        <div className="border border-black flex flex-col items-center justify-center text-white ">
          <h2 className="font-medium tracking-widest text-2xl mb-3 ">
            Quiénes somos
          </h2>
          <p className="mb-1 w-[200px] font-medium">
            FUNVAL ofrece soluciones confiables e innovadoras, generando valor y
            confianza para sus clientes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomeAdmin;
