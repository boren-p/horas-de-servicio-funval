import React, { useState } from "react";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import MyServices from "../comps/student/MyServices";
import ReportService from "../comps/student/ReportService";
import { useLocation } from "react-router-dom";
import EditProfile from "../comps/EditProfile";

const HomeStudent = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const editar = location.pathname === "/edit";

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
