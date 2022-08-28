import React from "react";
import "./Navbar.sass";
import logo from "../../images/logo_icon.png";

const Navbar = () => {
  return (
    <nav>
      <a href="+998935613300" className="number">
        +998 93 561 33 00
      </a>

      <ul className="menu">
        <li className="menu_item">
          <a href="#!">КУРСЫ</a>
        </li>
        <li className="menu_item">
          <a href="#!">ОТКРЫТЫЕ УРОКИ</a>
        </li>
        <li className="menu_item">
          <a href="#!">
            <img src={logo} alt="png" />
          </a>
        </li>
        <li className="menu_item">
          <a href="#!">КОВОРКИНГ</a>
        </li>
        <li className="menu_item">
          <a href="#!">КОНТАКТЫ</a>
        </li>
      </ul>

      <div className="right_menu">
        <a href="#!" className="language">
          UZ
        </a>
        <a className="signup" href="#!">
          ЗАПИСАТЬСЯ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
