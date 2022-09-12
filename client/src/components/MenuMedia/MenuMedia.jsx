import React from "react";
import "./MenuMedia.sass";
import { Link } from "react-router-dom";

const MenuMedia = ({ setMenuActive }) => {
  return (
    <>
      <div className="menu_overlay" onClick={() => setMenuActive(false)}></div>
      <div className="menu_media">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/courses">КУРСЫ</Link>
          </li>
          <li>
            <Link to="/openlesson">ОТКРЫТЫЕ УРОКИ</Link>
          </li>
          <li>
            <Link to="/coworking">КОВОРКИНГ</Link>
          </li>
          <li>
            <Link to="/contact">КОНТАКТЫ</Link>
          </li>
          <li>
            <Link to="tel:+998935613300">+998 83 561 33 00</Link>
          </li>
          <li>
            <Link to="/">ЗАПИСАТЬСЯ</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuMedia;
