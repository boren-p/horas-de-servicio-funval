import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" h-25 border flex justify-between items-center">
      <img src="/logo 2023.png" alt="Funval internacional" className="h-20" />
      <nav>
        <Link to="/edit">
          <img
            className="mr-20 border "
            width="50"
            height="50"
            src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
            alt="user-male-circle"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
