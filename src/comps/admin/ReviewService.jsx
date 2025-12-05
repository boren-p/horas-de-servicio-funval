import React from 'react';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

const ReviewService = ({ closeModal, servicio }) => {
    const { id } = servicio;
    const [servicios, setServicios] = useState();
    const [evidencia, setEvidencia] = useState(null);
    const [revisar, setRevisar] = useState(false);
    const [amount_approved, setAmount_approved] = useState("");
    const [comment, setComment] = useState("");
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(false);

    function reviewer() {
        setRevisar(true);
    }

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

    async function aprobar() {
        setLoading(true)
        try {
            const revisar = await fetch(`https://www.hs-service.api.crealape.com/api/v1/review/${id}`,{
                method: "PATCH",
                credentials: "include",
                headers: {
                        "accept": "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        amount_approved: Number(amount_approved),
                        comment:comment,
                        status:"1"
                    })
            })
            
            
            const answ = await revisar.json();
            console.log(answ)
            
            closeModal();
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    
    }
    async function desaprobar() {
        setLoading(true)
            try {
                const myServicios = await fetch(`https://www.hs-service.api.crealape.com/api/v1/review/${id}`, {
                    method: "PATCH",
                    credentials: "include",
                    headers: {
                        "accept": "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        amount_approved: Number(amount_approved),
                        comment,
                        status: "2",
                    }),
                });

                const data = await myServicios.json();
                console.log("PATCH", data);
                closeModal();
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
        }

    return (
        <div className="fixed inset-0 z-20 backdrop-blur-2xl flex justify-center items-center p-4">
            {loading && <Loader/>}
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold mb-2">{servicios?.category?.name} - {servicios?.amount_reported} Horas de servicio</h2>
                    <button onClick={closeModal} className='font-bold text-3xl'>X</button>
                </div>

                <div className='flex gap-3'>
                    <div>
                        {evidencia ? (
                            <iframe src={evidencia} className="w-full h-[600px]" />
                        ) : (
                            <div className="max-w-sm p-4 border border-gray-200200 rounded shadow animate-pulse md:p-6 dark:border-gray-200400">
                                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
                                    <svg
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                    >
                                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                    </svg>
                                </div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400" />
                                <div className="flex items-center mt-4">
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
                                    >
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                    <div>
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2" />
                                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400" />
                                    </div>
                                </div>
                                <span className="sr-only">Loading...</span>
                            </div>

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
                        {revisar && (
                            <div className='flex flex-col'>
                                <label className='font-bold'>Horas aprobadas</label>
                                <input
                                    value={amount_approved}
                                    onChange={(e) => setAmount_approved(e.target.value)}
                                    className='border rounded-2xl px-3 py-1' type="number" placeholder='Ejm 5 ' />
                                <label className='font-bold'>Comentarios</label>
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    rows={5}
                                    className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-gray-500 resize-none"
                                    placeholder="Escribe tus comentarios aquí..."
                                />

                            </div>
                        )}
                    </div>
                </div>

                {!revisar && (
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                        >
                            Cerrar
                        </button>

                        <button
                            onClick={reviewer}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                            Revisar
                        </button>
                    </div>
                )}
                {revisar && (
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            onClick={() => {
                                desaprobar()
                            }}
                            className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-gray-400"
                        >
                            Desaprobar
                        </button>

                        <button
                            onClick={() => {
                                aprobar()
                            }}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                            Aprobar
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default ReviewService;
