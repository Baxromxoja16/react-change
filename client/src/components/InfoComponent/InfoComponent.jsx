import React from "react";
import "./InfoComponent.sass";

const InfoComponent = ({ key, top, bottom }) => {
  return (
    <>
      <div className="cowo_info_component" key={key}>
        <p className="info_title">{top}</p>
        <p className="date">{bottom}</p>
      </div>
      <line className="cowoline"></line>
    </>
  );
};

export default InfoComponent;
