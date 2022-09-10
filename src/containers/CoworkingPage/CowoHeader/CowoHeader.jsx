import React from "react";
import "./CowoHeader.sass";
import InfoComponent from "../../../components/InfoComponent/InfoComponent";

const CowoHeader = ({ data, title, isButton }) => {
  const isMargin = isButton ? "28px" : "147px";
  return (
    <header className="cowo_header">
      <div className="container">
        <h1 style={{ marginBottom: isMargin }}>{title}</h1>

        {isButton ? (
          <button className="btn_send_form">Записаться</button>
        ) : null}

        <div className="cowo_info">
          {data.map((elem, index) => (
            <InfoComponent
              key={index}
              top={elem.topInfo}
              bottom={elem.bottomInfo}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default CowoHeader;
