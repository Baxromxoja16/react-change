import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./Header.sass";

const Header = () => {
  return (
    <header>
      <div className="contianer">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
