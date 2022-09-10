import React from "react";
import "./NoPractis.sass";
import practis_img from "../../../images/practis_img.jpg";
import practis_back from "../../../images/practis_back.jpg";
// import Icon from "../../../components/icons/Icon.jsx";

const NoPractis = ({ styleReverse,title }) => {
  return (
    <section className="no_practis">
      <div className="container-big">
        <div className="row" style={{ flexDirection: styleReverse }}>
          <div className="practis_left_img">
            <img className="front" src={practis_img} alt="" />
            <img className="back" src={practis_back} alt="" />
          </div>
          <div className="practis_right_info">
            <h2>{title}</h2>
            <p className="practis_info_text">
              Мы рады представить вашему вниманию наш современный коворкинг, в
              котором вы можете практиковать полученные знания.
            </p>
            <button className="practis_info_btn">Консультация</button>
          </div>
        </div>
        {/* <div className="row_bottom">
          <h3>Преимущества нашего коворкинга:</h3>
          <ul className="about_coworking">
            {aboutCoworking.map((x, i) => (
              <li className="about_item" key={i}>
                <span>
                  <Icon />
                </span>{" "}
                {x.text}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default NoPractis;
