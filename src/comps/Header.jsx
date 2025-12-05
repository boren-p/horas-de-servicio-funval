import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ logout }) => {
  const [open, setOpen] = useState(false);

  const menuStudent = useRef(null);

  return (
    <header className="bg-blue-500  h-25 px-[5%] flex justify-between items-center">
      

      <nav className="flex items-center justify-between w-screen" ref={menuStudent}>
        <div className="flex items-center justify-between gap-10">
        <Link to="/student">
          <img src="/todo.png" alt="Funval internacional" className="h-15 " />
        </Link>
        <Link to="/student">
          <nav className="hidden text-2xl text-white md:flex">Home</nav>
        </Link>
        </div>

        <img
          className="h-15 w-auto cursor-pointer"
          src="https://img.icons8.com/pastel-glyph/64/FFFFFF/user-male-circle.png"
          alt="user-male-circle"
          onClick={() => setOpen(!open)}
        />
        {open && (
          <div className="fixed inset-0 z-10">
            <div onClick={() => {setOpen(false);}} className="absolute inset-0 backdrop-blur-md h-screen w-screen "/>
            <div className="absolute bg-blue-500 h-screen w-50 right-0 top-0 shadow-2xl">
            <Link to="/edit">
              <button
                className="w-full text-left px-4 py-5 my-10 text-white hover:bg-blue-100 hover:text-black transition-colors"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Ver Perfil
              </button>
            </Link>

            <button
              className="w-full text-left px-4 py-5 text-white hover:bg-blue-100 hover:text-black transition-colors "
              onClick={() => {
                setOpen(false);
                logout();
              }}
            >
              Cerrar Sesión
            </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
