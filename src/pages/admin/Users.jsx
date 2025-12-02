import React from "react";
import Header from "../../comps/Header";
import Footer from "../../comps/Footer";
import UsersList from "../../comps/admins/UsersList";

const Users = () => {
  return (
    <div className="flex flex-col gap-5">
      listas de usuarios
      <UsersList />
    </div>
  );
};

export default Users;
