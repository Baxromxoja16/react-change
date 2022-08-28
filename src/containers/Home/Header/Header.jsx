import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./Header.sass";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Navbar />
        <div className="hero">
          <h1 className="title">Освойте профессию с нуля и зарабатывайте</h1>
          <p className="title_text">
            Расширенный курс по веб - программированию
          </p>
          <div className="buttons">
            <button className="btn_about_course">О курсе</button>
            <button className="btn_singin">Записаться</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
