import React from "react";
import CreateUser from "../../comps/admin/CreateUser";
import Services from "../../comps/admin/Services";

const Home2 = () => {
  return (
    <div className=" rounded-2xl p-2">
      <CreateUser />
      <Services />
    </div>
  );
};

export default Home2;
