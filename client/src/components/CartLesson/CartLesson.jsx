import React from "react";
import "./CartLesson.sass";

const CartLesson = ({ courseName, courseDate }) => {
  return (
    <div className="cart">
      <div className="cart_hover">
        <h4>{courseName}</h4>
        <p className="date">{courseDate}</p>
        <a href="tel:+998935613300" className="btn_cart_hover">+998 93 561 33 00</a>
      </div>
      <h4>{courseName}</h4>
      <p className="date">{courseDate}</p>
    </div>
  );
};

export default CartLesson;
