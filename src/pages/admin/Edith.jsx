import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Edith = () => {
  const [edit, setEdit] = useState(false);

  const { datos } = useOutletContext();
  const [correo, setCorreo] = useState(datos.email);
  const [iphone, setIphone] = useState(datos.phone);
  const [f_name, set_fName] = useState(datos.f_name);
  const [s_name, set_sName] = useState(datos.m_name);
  const [f_Lastname, set_fLastName] = useState(datos.f_lastname);
  const [s_Lastname, set_sLastName] = useState(datos.s_lastname);
  const [oldP, setOldP] = useState();
  const [newP, setNewP] = useState()
  const [confirmar, setConfirmar] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function actualizarDatos() {
    try {
      const revisar = await fetch(`https://www.hs-service.api.crealape.com/api/v1/users/${datos.id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          f_name: f_name,
          m_name: s_name,
          f_lastname: f_Lastname,
          s_lastname: s_Lastname,
          email: correo,
          phone: iphone,
        })
      })

      const answ = await revisar.json();
      console.log("cuando se ejecuta el cambio", answ)
      if (!revisar.ok) {
        alert("No se pudo actualizar")
        return
      } else {
        navigate("/admin")
        window.location.reload();
        alert("Actualizacion exitosa")
      }
      /* setEdit(false) */

    } catch (error) {
      console.error(error)
    } finally {
      /* navigate("/admin")
      window.location.reload(); */
      /* setLoading(false); */
    }

  }
  async function cambiarContraseña() {
    if (newP !== confirmar) {
      setError("Las contraseñas no coniciden")
      return
    }
    setError("")
    try {
      const revisar = await fetch(`https://www.hs-service.api.crealape.com/api/v1/auth/change-password`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          old_password: oldP,
          new_password: newP,

        })
      })


      const answ = await revisar.json();
      console.log("cambio de contraseña", answ)
      if (!revisar.ok) {
        alert("No se pudo cambiar la contraseña, credenciales incorrectas")
        return
      } else {
        navigate("/admin")
        window.location.reload();
        alert("Contraseña cambiada con exito")
      }

      /* setEdit(false) */

    } catch (error) {
      console.error(error)


    } finally {

      /* setLoading(false); */
    }

  }


  return (
    <div className=" bg-white p-10 rounded-2xl  ">
      <div className="  max-w-4xl mx-auto ">
        <div className=" w-full flex justify-between items-center mb-12 pb-6 border-b border-gray-900 pt-5">
          <h2 className="text-3xl font-bold text-gray-900">MI PERFIL</h2>
          <button
            onClick={() => setEdit(!edit)}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800 transition-all font-medium"
          >
            EDITAR PERFIL
          </button>
        </div>

        <div className="w-full  flex gap-12 mb-12">
          {!edit ? (
            <div className="flex flex-col lg:flex-row flex-1 space-y-8">
              <div className="w-full md:w-60 flex items-baseline justify-center ">
                <img
                  className=""
                  width="100"
                  height="100"
                  src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                  alt="user-male-circle"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-2 pb-2">
                  <label className=" font-bold text-gray-500 uppercase mb-1">
                    Nombre
                  </label>
                  <p className="font-medium uppercase mt-2">{f_name}</p>
                  <p className="font-medium uppercase mt-2">{s_name}</p>
                  <p className="font-medium uppercase mt-2">{f_Lastname}</p>
                  <p className="font-medium uppercase mt-2">{s_Lastname}</p>
                </div>
                <div className="pb-2">
                  <label className="block  font-bold text-gray-500 uppercase mb-1">
                    Número de Teléfono
                  </label>
                  <p className="font-medium uppercase mt-2">{iphone} </p>
                </div>

                <div className=" pb-2">
                  <label className="block  font-bold text-gray-500 uppercase mb-1">
                    E-mail
                  </label>
                  <p className="font-medium uppercase mt-2">{correo}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-100 flex-1 space-y-8">
              <div className="flex flex-col lg:flex-row ">
                <div className="w-full md:w-90 pb-6 flex items-baseline justify-center">
                  <img
                    width="100"
                    height="100"
                    src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                    alt="user-male-circle"
                  />
                </div>
                <div className="w-full flex flex-col gap-4 ">
                  <div className=" pb-2 flex flex-col gap-4 ">
                    <label className=" font-bold text-gray-500 uppercase mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={f_name}
                      placeholder={f_name}
                      onChange={(e) => set_fName(e.target.value)}
                      className="w-full bg-gray-100 focus:shadow-xl focus:outline-none transition-all placeholder-gray-400"
                    />
                    <input
                      type="text"
                      value={s_name}
                      placeholder={s_name}
                      onChange={(e) => set_sName(e.target.value)}
                      className="w-full bg-gray-100 focus:shadow-xl focus:outline-none transition-all placeholder-gray-400"
                    />
                    <input
                      type="text"
                      value={f_Lastname}
                      placeholder={f_Lastname}
                      onChange={(e) => set_fLastName(e.target.value)}
                      className="w-full bg-gray-100 focus:shadow-xl focus:outline-none transition-all placeholder-gray-400"
                    />
                    <input
                      type="text"
                      value={s_Lastname}
                      placeholder={s_Lastname}
                      onChange={(e) => set_sLastName(e.target.value)}
                      className="w-full bg-gray-100 focus:shadow-xl focus:outline-none transition-all placeholder-gray-400"
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
                      className="w-full bg-gray-100 focus:shadow-xl focus:outline-none transition-all placeholder-gray-400"
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
                      className="w-full bg-gray-100 focus:shadow-xl focus:outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                  <button onClick={actualizarDatos} className="px-4 py-3 rounded-lg text-white bg-blue-500 lg:bg-white lg:text-gray-900 hover:bg-blue-900 hover:text-white transition-all font-medium">
                    GUARDAR CAMBIOS
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
                    onChange={(e) => setOldP(e.target.value)}
                    type="password"
                    placeholder="Contraseña antigua"
                    className="w-full px-4 py-3 border-b border-gray-200300 focus:outline-none focus:border-gray-200900 transition-all placeholder-gray-400"
                  />
                  <input
                    onChange={(e) => setNewP(e.target.value)}
                    type="password"
                    placeholder="Contraseña nueva"
                    className="w-full px-4 py-3 border-b border-gray-200300 focus:outline-none focus:border-gray-200900 transition-all placeholder-gray-400"
                  />
                  <input
                    onChange={(e) => setConfirmar(e.target.value)}
                    type="password"
                    placeholder="Confirmar contraseña"
                    className="w-full px-4 py-3 border-b border-gray-200300 focus:outline-none focus:border-gray-200900 transition-all placeholder-gray-400"
                  />

                  {error && <p className="text-red-500">{error}</p>}
                  <button onClick={cambiarContraseña} className="w-full px-4 py-3 text-white rounded-lg bg-blue-500 lg:bg-white border-gray-200900 lg:text-gray-900 hover:bg-blue-900 hover:text-white transition-all font-medium">
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
