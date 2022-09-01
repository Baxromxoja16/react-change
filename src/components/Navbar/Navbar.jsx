import React from "react";
import "./Navbar.sass";
import logo from "../../images/logo_icon.png";
import { Link } from "react-router-dom"

const Navbar = ({ setActive }) => {
  return (
    <nav>
      <a href="tel:+998935613300" className="number">
        +998 93 561 33 00
      </a>

      <ul className="menu">
        <li className="menu_item">
          <Link to="/courses">КУРСЫ</Link>
        </li>
        <li className="menu_item">
          <Link to="/openlesson">ОТКРЫТЫЕ УРОКИ</Link>
        </li>
        <li className="menu_item">
          <a href="#!">
            <img src={logo} alt="png" />
          </a>
        </li>
        <li className="menu_item">
          <Link to="/coworking">КОВОРКИНГ</Link>
        </li>
        <li className="menu_item">
          <Link to="contact">КОНТАКТЫ</Link>
        </li>
      </ul>

      <div className="right_menu">
        <a href="#!" className="language">
          UZ
        </a>
        <a className="signup" href="#!" onClick={() => setActive(true)} >
          ЗАПИСАТЬСЯ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
