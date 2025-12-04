import React from "react";
import Login from "./pages/Login";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Home2 from "./pages/admin/Home2";
import Users from "./pages/admin/Users";
import HomeStudent from "./pages/HomeStudent";
import { Routes, Route } from "react-router-dom";
import Services from "./comps/admin/Services";
import Edith from "./pages/admin/Edith";
import ProtecterRoute from "./comps/ProtecterRoute";

export default function App() {
  return (
    <Routes>
      {/* Ruta de admin */}
      <Route element={<ProtecterRoute RolUser={1} />}>
        <Route path="/admin" element={<HomeAdmin />}>
          <Route index element={<Home2 />} />
          <Route path="users" element={<Users />} />
          <Route path="edit" element={<Edith />} />
        </Route>
      </Route>


      {/* ruta de studens */}
      <Route path="/" element={<Login />} />
      <Route path="/student" element={<HomeStudent />} />
      <Route path="edit" element={<HomeStudent />} />
    </Routes>
  );
}
