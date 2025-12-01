import React from "react";
import Login from "./pages/Login";
import HomeAdmin from "./pages/admin/HomeAdmin"
import Users from "./pages/admin/Users"
import HomeStudent from "./pages/HomeStudent"
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/admin" element={<HomeAdmin/>}/>
      <Route path="/users" element={<Users/>}>usuarios</Route>
      <Route path="/student" element={<HomeStudent/>}/>
    </Routes>
    </>
  );
}
