import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./Header.sass";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="home_header">
      <div className="container">
        <Navbar />
        <div className="hero">
          <h1 className="title">Освойте профессию с нуля и зарабатывайте</h1>
          <p className="title_text">
            Расширенный курс по веб - программированию
          </p>
          <div className="buttons">
            <Link to="/courses" className="btn_about_course">
              О курсе
            </Link>
            <button className="btn_singin" >
              Записаться
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
