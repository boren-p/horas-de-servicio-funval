import React from 'react';
import Header from '../../comps/Header';
import Footer from '../../comps/Footer';
import CreateUser from "../../comps/admin/CreateUser"
import Services from '../../comps/admin/Services';
import ReviewService from "../../comps/admin/ReviewService"

const HomeAdmin = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Header/>
            home del administrador
            <CreateUser/>
            <Services/>
            <ReviewService/>
            <Footer/>
        </div>
    );
}

export default HomeAdmin;
