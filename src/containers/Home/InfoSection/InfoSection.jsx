import React from "react";
import "./InfoSection.sass";
import infoLeft from "../../../images/info_left.jpg";

const InfoSection = () => {
  return (
    <section className="info_section">
      <div className="container">
        <div className="main_info">
          <div className="info_left">
            <img src={infoLeft} alt="jpg" />
            <span>01</span>
          </div>
          <div className="info_right">
            <h2 className="info_title">
              Веб - программирование от нуля до профессионала
            </h2>
            <p className="info_text">
              Вы на практике научитесь создавать веб-приложения и
              интернет-магазины, получив индивидуальную помощь от наставника в
              процессе обучения. Cможете успешно стартовать в карьере в
              программировании и зарабатывать на этом, даже если вы новичок в
              разработке
            </p>
            <button className="btn_course">КУРСЫ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
