import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtecterRoute({ RolUser }) {
    const rol = Number(localStorage.getItem("role"))
    if (!rol) {
        return <Navigate to="/" replace />
    }
    if (rol !== RolUser) {
        if (rol === 1) return <Navigate to="/admin"></Navigate>
        if (rol === 4) return <Navigate to="/student"></Navigate>
    }
    return (
        <Outlet />
    )
}
