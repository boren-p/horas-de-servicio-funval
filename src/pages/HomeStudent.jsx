import React from "react";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import MyServices from "../comps/student/MyServices";
import ReportService from "../comps/student/ReportService";
import { useLocation } from "react-router-dom";
import EditProfile from "../comps/EditProfile";
import { useEffect, useState } from "react";

const HomeStudent = () => {
  const location = useLocation();
  const editar = location.pathname === "/edit";

  const [datos, setDatos] = useState({})


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
        setDatos(user)

      } catch (error) {
        console.log(error)
      }

    }

    traerDatos();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header />
      </div>
      <main className="grow w-full px-4 py-5">
        {editar ? (
          <EditProfile />
        ) : (
          <div>
            <h1>Bienvenido: {datos.full_name}</h1>
            <ReportService />
            <MyServices />
          </div>
        )}
      </main>
      <div className="w-full mt-auto h-20 border flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default HomeStudent;
