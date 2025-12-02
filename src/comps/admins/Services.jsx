import React from 'react';
import { useState } from 'react';
import ReviewService from './ReviewService';

const Services = () => {

    const [openModal, setOpenModal] = useState(false);
    function abrirModal() {
        setOpenModal(true);
    }
    function cerrarModal() {
        setOpenModal(false);
    }

    return (
        <div>
            <div className='border w-full flex flex-col items-center justify-center p-2'>
                SERVICIOS NO REVISADOS
                <div className='flex flex-row-reverse w-full'>
                    <button>ver todos</button>
                </div>
                <table className="border-collapse border border-gray-300 w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ALUMNO</th>
                            <th className="border border-gray-300 px-4 py-2">SERVICIO</th>
                            <th className="border border-gray-300 px-4 py-2"># DE HORAS</th>
                            <th className="border border-gray-300 px-4 py-2"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">data</td>
                            <td className="border border-gray-300 px-4 py-2">data</td>
                            <td className="border border-gray-300 px-4 py-2">data</td>
                            <td onClick={abrirModal}
                                className="px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700">Ver más</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {openModal && <ReviewService cerrar={cerrarModal}></ReviewService>}
        </div>

    );
}

export default Services;
