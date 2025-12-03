import { useState, useEffect, useRef } from "react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomeAdmin = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const menu = useRef(null);
  const hamburguesa = useRef(null);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-white max-w-full h-25 flex justify-between items-center bg-[#1F4E79]">
        {/* Menú Hamburguesa - Solo visible en móvil */}
        <div className="lg:hidden relative" ref={hamburguesa}>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                openMenu ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                openMenu ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                openMenu ? "-rotate-45 -translate-y-2" : ""
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
            src="/blanco.png"
            alt="Funval internacional"
            className="h-20  w-60"
          />
        </Link>

        {/* NAV en desktop */}
        <nav className="hidden lg:flex items-center justify-between  w-150 gap-10 text-2xl">
          <Link to="users">
            <nav>Usuarios</nav>
          </Link>
          <nav>(Escuelas)</nav>
          <nav>(Categorias)</nav>
        </nav>

        {/* Menú del usuario */}
        <nav className="relative pr-10" ref={menu}>
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
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors "
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* CONTENIDO */}
      <main className="grow w-full px-20 py-5 bg-[#f2f3f7] ">
        <Outlet />
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

        <div className="flex flex-col items-center justify-center text-white pr-10">
          <h2 className="font-medium tracking-widest text-2xl mb-3 ">
            Quiénes somos
          </h2>
          <p className="mb-1 w-100 font-medium">
            FUNVAL ofrece soluciones confiables e innovadoras, generando valor y
            confianza para sus clientes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomeAdmin;
