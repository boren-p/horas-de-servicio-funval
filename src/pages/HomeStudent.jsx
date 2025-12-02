import React from 'react';
import Header from "../comps/Header"
import Footer from "../comps/Footer"
import MyServices from "../comps/student/MyServices"
import ReportService from "../comps/student/ReportService"


const HomeStudent = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Header/>
            <div className='flex flex-row-reverse w-full'>
            <h1 className='font-semibold text-4xl'>Bienvenido $estudiante</h1>
            </div>
            <h1 className='font-semibold text-4xl'>Te faltan $numero horas de servicio</h1>
            <ReportService/>
            <MyServices/>
            <Footer/>
        </div>
    );
}

export default HomeStudent;
