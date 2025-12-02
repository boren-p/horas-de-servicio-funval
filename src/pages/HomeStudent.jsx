import React from "react";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import MyServices from "../comps/student/MyServices";
import ReportService from "../comps/student/ReportService";

import { useLocation } from "react-router-dom";
import { use } from "react";
import EditProfile from "../comps/EditProfile";

const HomeStudent = () => {
  const location = useLocation();
  const editar = location.pathname === "/edit";

  console.log("=== DEBUG ===");
  console.log("Ruta actual:", location.pathname);
  console.log("¿Es editar?:", editar);
  console.log("=============");

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
            Home del estudiante
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
