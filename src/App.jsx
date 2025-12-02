import React from "react";
import Login from "./pages/Login";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Users from "./pages/admin/Users";
import HomeStudent from "./pages/HomeStudent";
import { Routes, Route } from "react-router-dom";
import Services from "./comps/admins/Services";
import Edith from "./pages/admin/Edith";

export default function App() {
  return (
    <Routes>
      {/* Ruta de admin */}
      <Route path="/admin" element={<HomeAdmin />}>
        <Route index element={<Users />} />
        <Route path="services" element={<Services />} />
        <Route path="edit" element={<Edith />} />
      </Route>

      {/* ruta de studens */}
      <Route path="/" element={<Login />} />
      <Route path="/student" element={<HomeStudent />} />
      <Route path="edit" element={<HomeStudent />} />
    </Routes>
  );
}
