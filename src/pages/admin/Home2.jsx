import React from 'react';
import CreateUser from "../../comps/admin/CreateUser"
import Services from "../../comps/admin/Services"
import { useOutletContext } from "react-router-dom";

const Home2 = () => {
    const { nombre } = useOutletContext();
    return (
        <div>
            <h1>Bienvenido: {nombre}</h1>
            <CreateUser />
            <Services />
        </div>
    );
}

export default Home2;
