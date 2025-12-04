import React from 'react';
import { useEffect, useState } from 'react';

const ReviewService = ({ closeModal, servicio }) => {
    const { id } = servicio;
    const [servicios, setServicios] = useState();
    const [evidencia, setEvidencia] = useState(null);
    useEffect(() => {
        async function traerServicios() {
            try {
                const myServicios = await fetch(
                    `https://www.hs-service.api.crealape.com/api/v1/services/${id}`,
                    {
                        method: "GET",
                        credentials: "include", // Necesario para enviar cookie
                    }
                );
                const data = await myServicios.json();
                setServicios(data)
                console.log(data)

            } catch (error) {
                console.log(error)
            }

        }

        traerServicios();
    }, [id]);

    useEffect(() => {

        async function traerEvidencia() {
            try {
                const myServicios = await fetch(`https://www.hs-service.api.crealape.com/api/v1/evidence/${id}`, { credentials: "include" });

                const pdfBlob = await myServicios.blob();

                // Crear URL para mostrarlo
                const pdfUrl = URL.createObjectURL(pdfBlob);
                setEvidencia(pdfUrl)
                console.log(pdfUrl)


            } catch (error) {
                console.log(error)
            }

        }
        traerEvidencia();
    }, [id]);



    return (
        <div className="fixed inset-0 z-20 bg-black/50 flex justify-center items-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
                <h2 className="text-xl font-bold mb-2">Revisión del Servicio</h2>
                <div className='flex gap-3'>
                    <div>
                        {evidencia ? (
                            <iframe src={evidencia} className="w-full h-[600px]" />
                        ) : (
                            <p>Cargando evidencia...</p>
                        )}
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-bold'>Descripcion:</h2>
                        <p className="text-sm mb-4">
                            {servicios?.description}
                        </p>
                        <h2 className='font-bold'>Estudiante: </h2>
                        <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold">{servicios?.user?.f_name}</span>
                        </p>

                    </div>



                </div>


                <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                        Cerrar
                    </button>

                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                        Revisar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewService;
