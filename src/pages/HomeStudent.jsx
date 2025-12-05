import Header from "../comps/Header";
import Footer from "../comps/Footer";
import MyServices from "../comps/student/MyServices";
import ReportService from "../comps/student/ReportService";
import { useLocation, useNavigate } from "react-router-dom";
import EditProfile from "../comps/EditProfile";
import { useEffect, useState } from "react";
import Loader from "../comps/Loader"

const HomeStudent = () => {
  const [loading, setLoading] = useState(false)
  const nav = useNavigate();
  const location = useLocation();
  const editar = location.pathname === "/edit";

  const [datos, setDatos] = useState({});

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
      } catch (error) {
        console.log(error);
      }
    }

    traerDatos();
  }, []);

  console.log(datos);

  async function cerrarSesion() {
    try {
      setLoading(true)
      const logout = await fetch(
        "https://www.hs-service.api.crealape.com/api/v1/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include"
        }
      );
      if (logout) {
        localStorage.clear();
        setLoading(false)
        nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" relative flex flex-col min-h-screen">
      {loading&& <Loader/>}
      <div>
        <Header logout={ cerrarSesion } />
      </div>
      <main className="grow w-full px-[5%] py-5 bg-[#f2f3f7]">
        {editar ? (
          <EditProfile datos={datos} />
        ) : (
          <div>
            <div className="w-full flex flex-row-reverse">
            <h1 className="text-3xl font-semibold">
              Bienvenido: {datos.full_name}
            </h1>
            </div>
            <ReportService />
            <MyServices />
          </div>
        )}
      </main>
      <div className="w-full mt-auto h-30 flex items-center justify-center bg-blue-500 ">
        <Footer />
      </div>
    </div>
  );
};

export default HomeStudent;
