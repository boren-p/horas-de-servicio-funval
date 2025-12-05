import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ datos }) => {
  const user = {
    nombre: datos?.full_name,
    fNanme: datos?.f_name,
    sNanme: datos?.m_name,
    fLastname: datos?.f_lastname,
    sLastname: datos?.s_lastname,
    email: datos.email,
    phone: datos.phone ?? "Sin numero",
    escuela: datos.schools?.[0]?.name,
    nameContro: datos?.student?.controller?.full_name,
    numberContro: datos?.student?.controller?.phone,
    nameReclu: datos?.student?.recruiter?.full_name,
    numberReclu: datos?.student?.recruiter?.phone,
    id: datos?.id
  };


  const [f_name, set_fName] = useState(user.fNanme);
  const [s_name, set_sName] = useState(user.sNanme);
  const [f_Lastname, set_fLastName] = useState(user.fLastname);
  const [s_Lastname, set_sLastName] = useState(user.sLastname);
  const [correo, setCorreo] = useState(user.email);
  const [iphone, setIphone] = useState(user.phone);
  const [oldP, setOldP] = useState();
  const [newP, setNewP] = useState()
  const [confirmar, setConfirmar] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);
  console.log(user);

  async function actualizarDatos() {
    try {
      const revisar = await fetch(`https://www.hs-service.api.crealape.com/api/v1/users/${user.id}`, {
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
      /* setEdit(false) */

    } catch (error) {
      console.error(error)
    } finally {

      navigate("/student")
      window.location.reload();
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
        navigate("/student")
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
      <div className="  max-w-3xl mx-auto flex flex-col items-center  justify-center">
        <div className=" w-full flex justify-between items-center mb-12 pb-6 border-b border-gray-200900 pt-5">
          <h2 className="text-3xl font-bold text-gray-900">MI PERFIL</h2>
          <button
            onClick={() => setEdit(!edit)}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800 transition-all font-medium"
          >
            EDITAR PERFIL
          </button>
        </div>

        {/* Avatar y Campos principales */}
        <div className="  w-full  flex gap-12 mb-12">
          {/* Avatar */}

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
                  <p className="font-medium uppercase mt-2">{user.fNanme}</p>
                  <p className="font-medium uppercase mt-2">{user.sNanme}</p>
                  <p className="font-medium uppercase mt-2">{user.fLastname}</p>
                  <p className="font-medium uppercase mt-2">{user.sLastname}</p>
                </div>
                <div className="pb-2">
                  <label className="block  font-bold text-gray-500 uppercase mb-1">
                    Número de Teléfono
                  </label>
                  <p className="font-medium uppercase mt-2">{user.phone} </p>
                </div>

                <div className=" pb-2">
                  <label className="block  font-bold text-gray-500 uppercase mb-1">
                    E-mail
                  </label>
                  <p className="font-medium uppercase mt-2">{user.email}</p>
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
                      type="tel"
                      value={iphone}
                      placeholder={iphone}
                      onChange={(e) => setIphone(e.target.value)}
                      className="w-full text-lg bg-gray-100 focus:shadow-xl focus:outline-none transition-all placeholder-gray-400"
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
                      className="w-full text-lg bg-gray-100 focus:shadow-xl focus:outline-none transition-all placeholder-gray-400"
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
        <div className=" w-full space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-200200">
            <span className="font-bold text-gray-900 uppercase text-sm">
              Escuela
            </span>
            <span className="text-gray-600">{user.escuela}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200200">
            <span className="font-bold text-gray-900 uppercase text-sm">
              Controller
            </span>
            <span className="text-gray-600">
              {user.nameContro} -
              <span className="underline cursor-pointer hover:text-gray-900 transition-colors">
                {user.numberContro}
              </span>
            </span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-200200">
            <span className="font-bold text-gray-900 uppercase text-sm">
              Responsable
            </span>
            <span className="text-gray-600">
              {user.nameReclu}
              <span className="underline cursor-pointer hover:text-gray-900 transition-colors">
                - {user.numberReclu}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
