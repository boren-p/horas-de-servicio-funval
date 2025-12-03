
import React from 'react';
import CreateUser from "../../comps/admin/CreateUser"
import Services from "../../comps/admin/Services"
import { useOutletContext } from "react-router-dom";

const Home2 = () => {
    const { nombre } = useOutletContext();
    return (
        <div className=" rounded-2xl p-2 flex flex-col gap-8">
            <div className='flex w-full flex-row-reverse'>
            <h1 className='font-semibold text-4xl'>Bienvenido, {nombre}</h1>
            </div>
            <CreateUser />
            <Services />
        </div>
    );
}


export default Home2;
