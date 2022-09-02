import React, { useState } from "react";
import ModalReq from "../../../components/ModalReq/ModalReq";
import Navbar from "../../../components/Navbar/Navbar";
import "./Header.sass";
import { Link } from "react-router-dom"

const Header = () => {

  const [popUp, setPopUp] = useState(false)

  return (
    <header>
      {
        popUp ? <ModalReq active={popUp} setActive={setPopUp} /> : null
      }
      <div className="container">
        <Navbar setActive={setPopUp} />
        <div className="hero">
          <h1 className="title">Освойте профессию с нуля и зарабатывайте</h1>
          <p className="title_text">
            Расширенный курс по веб - программированию
          </p>
          <div className="buttons">
            <Link to="/courses" className="btn_about_course">О курсе</Link>
            <button className="btn_singin" onClick={() => setPopUp(true)}>Записаться</button>
          </div>
        </div>
      </div>
    </header> 
  );
};

export default Header;