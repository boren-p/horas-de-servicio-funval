import React from 'react';
import { useState } from 'react';

const ReviewService = () => {
    const [openModal, setOpenModal] = useState(false);
    function abrirModal() {
        setOpenModal(true);
    }
    function cerrarModal() {
        setOpenModal(false);
    }
    return (
        <div>
            <button
                onClick={abrirModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Revisar
            </button>
            {openModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
                        <h2 className="text-xl font-bold mb-2">Revisión del Servicio</h2>
                        <div className='flex gap-3'>
                            {/* PDF preview */}
                            <iframe
                                /* src={selectedService.pdfUrl} */
                                className="w-[40%] h-64 border rounded"
                                title="PDF Preview"
                            ></iframe>
                            <div className='flex flex-col gap-5'>
                                <p className="text-sm mb-4">
                                    Descripción: ---
                                </p>
                                <p className="text-sm text-gray-600 mb-2">
                                    Estudiante: <span className="font-semibold">Ejemplo</span>
                                </p>

                            </div>



                        </div>


                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={cerrarModal}
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
            )}

        </div>

    );
}

export default ReviewService;
