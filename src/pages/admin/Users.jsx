import React from "react";
import UsersList from "../../comps/admin/UsersList";

const Users = () => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="flex flex-col gap-5 border justify-center items-center text-2xl ">
        Estudiantes
      </div>
      <UsersList />
    </div>
  );
};

export default Users;
