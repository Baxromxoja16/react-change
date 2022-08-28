import React from "react";
import "./TexnologyCards.sass";
import html from "../../images/html-5.png";

const TexnologyCards = () => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={html} alt="" />
      </div>
      <p className="card_title">HTML</p>
    </div>
  );
};

export default TexnologyCards;
