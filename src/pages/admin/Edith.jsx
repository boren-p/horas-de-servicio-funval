import React from "react";

const Edith = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* Header con título y botón */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl">MI PERFIL</h1>
        <button className="border border-gray-400 px-6 py-2">
          EDITAR PERFIL
        </button>
      </div>

      {/* Sección con imagen y datos personales */}
      <div className="flex gap-8 mb-8">
        <div className="">
          <img
            className="mr-20 border "
            width="120"
            height="120"
            src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
            alt="user-male-circle"
          />
        </div>

        <div className="grow space-y-4">
          <div className="flex gap-4 items-center">
            <label className="w-48">NOMBRE</label>
            <input
              type="text"
              placeholder="input || nombre"
              className="grow border border-gray-400 px-4 py-2"
            />
          </div>

          <div className="flex gap-4 items-center">
            <label className="w-48">PAIS</label>
            <input
              type="text"
              placeholder="input || pais"
              className="grow border border-gray-400 px-4 py-2"
            />
          </div>

          <div className="flex gap-4 items-center">
            <label className="w-48">NUMERO DE TELEFONO</label>
            <input
              type="text"
              placeholder="input || numero de telefono"
              className="grow border border-gray-400 px-4 py-2"
            />
          </div>

          <div className="flex gap-4 items-center">
            <label className="w-48">E-MAIL</label>
            <input
              type="email"
              placeholder="input || correo"
              className="grow border border-gray-400 px-4 py-2"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex gap-4 items-start mb-4">
          <label className="w-48">CONTRASEÑA</label>
          <button className="border border-gray-400 px-4 py-1">
            cambiar contraseña
          </button>
        </div>

        <div className="ml-52 space-y-3">
          <input
            type="password"
            placeholder="contraseña antigua"
            className="w-full max-w-md border border-gray-400 px-4 py-2"
          />
          <input
            type="password"
            placeholder="contraseña nueva"
            className="w-full max-w-md border border-gray-400 px-4 py-2"
          />
          <input
            type="password"
            placeholder="confirmar contraseña"
            className="w-full max-w-md border border-gray-400 px-4 py-2"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <label className="w-48">ESCUELA</label>
          <span className="text-gray-600">solo texto</span>
        </div>

        <div className="flex gap-4">
          <label className="w-48">CONTROLLER</label>
          <span className="text-gray-600">solo texto - CONTACTO</span>
        </div>

        <div className="flex gap-4">
          <label className="w-48">RESPONSABLE</label>
          <span className="text-gray-600">solo texto - CONTACTO</span>
        </div>
      </div>
    </div>
  );
};

export default Edith;
