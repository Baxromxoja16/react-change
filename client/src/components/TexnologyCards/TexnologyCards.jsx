import React from "react";
import "./TexnologyCards.sass";

import html from "../../images/html-5.png";
import js from "../../images/javascript-1.png";
import css from "../../images/css.png";
import jq from "../../images/jquerylogo1.png";
import node from "../../images/node.png";
import mongo from "../../images/mongo.png";
import express from "../../images/expres.png";
import react from "../../images/react.png";

const TexnologyCards = () => {
  const logos = [html, js, css, jq, node, mongo, express, react]
  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src={logos[0]} alt="png" />
        </div>
        <p className="card_title">HTML</p>
      </div>
      <div className="card">
        <div className="card_img">
          <img src={logos[2]} alt="png" />
        </div>
        <p className="card_title">CSS</p>
      </div>
      <div className="card">
        <div className="card_img">
          <img src={logos[1]} alt="png" />
        </div>
        <p className="card_title">Java Script</p>
      </div>
      <div className="card">
        <div className="card_img">
          <img src={logos[3]} alt="png" />
        </div>
        <p className="card_title">JS JQUERY</p>
      </div>
      <div className="card">
        <div className="card_img">
          <img src={logos[4]} alt="png" />
        </div>
        <p className="card_title">NODE JS</p>
      </div>
      <div className="card">
        <div className="card_img">
          <img src={logos[5]} alt="png" />
        </div>
        <p className="card_title">Mongo DB</p>
      </div>
      <div className="card">
        <div className="card_img">
          <img src={logos[6]} alt="png" />
        </div>
        <p className="card_title">EXPRESS JS</p>
      </div>
      <div className="card">
        <div className="card_img">
          <img src={logos[7]} alt="png" />
        </div>
        <p className="card_title">JS REACT</p>
      </div>
    </>   
  );
};

export default TexnologyCards;
