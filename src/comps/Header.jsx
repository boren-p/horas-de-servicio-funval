import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuStudent = useRef(null);

  return (
    <header className="bg-[#173B63]  h-25 px-[5%] flex justify-between items-center">
      

      <nav className="relative flex items-center justify-between w-screen" ref={menuStudent}>
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
          <div className="absolute text-black right-0 mt-2 w-48 bg-white  rounded-lg shadow-lg z-10">
            <Link to="/edit">
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
  );
};

export default Header;
