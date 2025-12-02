import React from "react";

const Edith = () => {
  return (
    <div className="bg-white px-10 rounded-2xl ">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 pb-6 border-b-2 border-gray-900 pt-5">
          <h2 className="text-3xl font-bold text-gray-900">MI PERFIL</h2>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all font-medium">
            EDITAR PERFIL
          </button>
        </div>

        {/* Avatar y Campos principales */}
        <div className="flex gap-12 mb-12">
          {/* Avatar */}
          <div className="">
            <div className="w-30 h-30 flex items-center justify-center">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                alt="user-male-circle"
              />
            </div>
          </div>

          {/* Campos */}
          <div className="flex-1 space-y-8">
            <div className="border-b focus:outline-none focus:border-gray-900 pb-2">
              <label className=" text-xs font-bold text-gray-500 uppercase mb-1">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full text-lg focus:outline-none focus:border-gray-900 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="border-b  focus:border-gray-900 pb-2">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                País
              </label>
              <input
                type="text"
                placeholder="País"
                className="w-full text-lg focus:outline-none  focus:border-gray-900 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="border-b  focus:outline-none focus:border-gray-900 border-gray-300 pb-2">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                Número de Teléfono
              </label>
              <input
                type="tel"
                placeholder="Número de teléfono"
                className="w-full text-lg focus:outline-none focus:border-gray-900 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="border-b focus:outline-none focus:border-gray-900 border-gray-300 pb-2">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Correo"
                className="w-full text-lg focus:outline-none focus:border-gray-900 text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/*  Contraseña */}
        <div className="mb-8 p-6  rounded-2xl bg-gray-100 ">
          <h3 className="text-sm font-bold text-gray-900 uppercase mb-4">
            Contraseña
          </h3>
          <div className="space-y-4">
            <button className="w-full px-4 py-3 rounded-lg border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all font-medium">
              CAMBIAR CONTRASEÑA
            </button>
            <input
              type="password"
              placeholder="Contraseña antigua"
              className="w-full px-4 py-3 border-b-2 border-gray-300  focus:border-gray-900 transition-all placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="Contraseña nueva"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 transition-all placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 transition-all placeholder-gray-400"
            />
          </div>
        </div>

        {/* Información adicional */}
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="font-bold text-gray-900 uppercase text-sm">
              Escuela
            </span>
            <span className="text-gray-600">solo texto</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="font-bold text-gray-900 uppercase text-sm">
              Controlador
            </span>
            <span className="text-gray-600">
              solo texto -{" "}
              <span className="underline cursor-pointer hover:text-gray-900 transition-colors">
                CONTACTO
              </span>
            </span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="font-bold text-gray-900 uppercase text-sm">
              Responsable
            </span>
            <span className="text-gray-600">
              solo texto -{" "}
              <span className="underline cursor-pointer hover:text-gray-900 transition-colors">
                CONTACTO
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edith;
