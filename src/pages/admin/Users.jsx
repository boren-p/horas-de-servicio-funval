import React from 'react';
import Header from '../../comps/Header';
import Footer from '../../comps/Footer';
import UsersList from "../../comps/admin/UsersList"

const Users = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Header/>
            <UsersList/>
            <Footer/>
        </div>
    );
}

export default Users;
