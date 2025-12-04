import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Edith = () => {
  const [edit, setEdit] = useState(false);

  const { nombre, phone, email } = useOutletContext();
  const [name, setName] = useState(nombre);
  const [correo, setCorreo] = useState(email);
  const [pais, setPais] = useState("bolivia");
  const [iphone, setIphone] = useState(phone);

  return (
    <div className=" bg-white p-10 rounded-2xl  ">
      <div className="  max-w-4xl mx-auto ">
        <div className=" w-full flex justify-between items-center mb-12 pb-6 border-b-2 border-gray-900 pt-5">
          <h2 className="text-3xl font-bold text-gray-900">MI PERFIL</h2>
          <button
            onClick={() => setEdit(!edit)}
            className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all font-medium"
          >
            EDITAR PERFIL
          </button>
        </div>

        <div className="w-full  flex gap-12 mb-12">
          {!edit ? (
            <div className="flex flex-col lg:flex-row flex-1 space-y-8">
              <div className="w-full lg:w-80 flex items-baseline justify-center ">
                <img
                  className=""
                  width="100"
                  height="100"
                  src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                  alt="user-male-circle"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="pb-2">
                  <label className=" font-bold text-gray-500 uppercase mb-1">
                    Nombre
                  </label>
                  <p className="font-medium uppercase mt-2">{nombre}</p>
                </div>
                <div className="pb-2">
                  <label className="block  font-bold text-gray-500 uppercase mb-1">
                    Número de Teléfono
                  </label>
                  <p className="font-medium uppercase mt-2">{phone} </p>
                </div>

                <div className=" pb-2">
                  <label className="block  font-bold text-gray-500 uppercase mb-1">
                    E-mail
                  </label>
                  <p className="font-medium uppercase mt-2">{email}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-100 flex-1 space-y-8">
              <div className="flex flex-col md:flex-row ">
                <div className="w-full  lg:w-80 flex items-baseline justify-center">
                  <img
                    width="100"
                    src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                    alt="user-male-circle"
                  />
                </div>
                <div className="flex flex-col gap-4 ">
                  <div className=" pb-2">
                    <label className=" font-bold text-gray-500 uppercase mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={name}
                      placeholder={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 transition-all placeholder-gray-400"
                    />
                  </div>
                  <div className="pb-2">
                    <label className="block  font-bold text-gray-500 uppercase mb-1">
                      Número de Teléfono
                    </label>
                    <input
                      value={iphone}
                      type="tel"
                      placeholder={iphone}
                      onChange={(e) => setIphone(e.target.value)}
                      className="w-full text-lg border-b-3 border-gray-300 focus:outline-none focus:border-gray-900 transition-all placeholder-gray-400"
                    />
                  </div>

                  <div className=" pb-2">
                    <label className="block  font-bold text-gray-500 uppercase mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={correo}
                      placeholder={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      className="w-full text-lg border-b-3 border-gray-300 focus:outline-none focus:border-gray-900 transition-all placeholder-gray-400"
                    />
                  </div>
                  <button className="px-4 py-3 rounded-lg text-white bg-gray-900 lg:bg-white border border-gray-900 lg:text-gray-900 hover:bg-gray-900 hover:text-white transition-all font-medium">
                    Guardar
                  </button>
                </div>
              </div>
              {/*  Contraseña */}
              <div className="mb-8 p-6 rounded-2xl bg-gray-100 w-full max-w-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 uppercase mb-4 text-center">
                  Contraseña
                </h3>
                <div className="space-y-4 w-full">
                  <input
                    type="password"
                    placeholder="Contraseña antigua"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 transition-all placeholder-gray-400"
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
                  <button className="w-full px-4 py-3 text-white rounded-lg border bg-gray-900 lg:bg-white border-gray-900 lg:text-gray-900 lg:hover:bg-gray-900 hover:text-white transition-all font-medium">
                    CAMBIAR CONTRASEÑA
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Información adicional */}
      </div>
    </div>
  );
};

export default Edith;
