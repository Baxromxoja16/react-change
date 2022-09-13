import React, { useState } from "react";
import "./Navbar.sass";
import logo from "../../images/logo_icon.png";
import { Link } from "react-router-dom";
import MediaLogo from "../MediaComponents/MediaLogo";
import MediaBars from "../MediaComponents/MediaBars";
import ModalReq from "../ModalReq/ModalReq";
import MenuMedia from "../MenuMedia/MenuMedia";

const Navbar = ({ setActive, active }) => {
  const [menuMedia, setMenuMedia] = useState(false);

  return (
    <>
      {active ? <ModalReq active={active} setActive={setActive} /> : null}
      {menuMedia ? <MenuMedia setMenuActive={setMenuMedia} /> : null}
      <div className="nav">
        <div className="container">
          <nav>
            <MediaLogo />
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
                <Link to="/">
                  <img src={logo} alt="png" />
                </Link>
              </li>
              <li className="menu_item">
                <Link to="/coworking">КОВОРКИНГ</Link>
              </li>
              <li className="menu_item">
                <Link to="/contact">КОНТАКТЫ</Link>
              </li>
            </ul>
            <div className="right_menu">
              <a href="#!" className="language">
                UZ
              </a>
              <MediaBars setActive={setActive} setMenuActive={setMenuMedia} />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
