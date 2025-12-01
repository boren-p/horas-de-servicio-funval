import React from 'react';
import Header from "../comps/Header"
import Footer from "../comps/Footer"
import MyServices from "../comps/student/MyServices"
import ReportService from "../comps/student/ReportService"


const HomeStudent = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Header/>
            home del estudiante
            <ReportService/>
            <MyServices/>
            <Footer/>
        </div>
    );
}

export default HomeStudent;
