
import React from 'react';
import CreateUser from "../../comps/admin/CreateUser"
import Services from "../../comps/admin/Services"
import { useOutletContext } from "react-router-dom";

const Home2 = () => {
    const { nombre } = useOutletContext();
    return (
        <div className=" rounded-2xl p-2 flex flex-col gap-8>
            <h1>Bienvenido: {nombre}</h1>
            <CreateUser />
            <Services />
        </div>
    );
}


export default Home2;
