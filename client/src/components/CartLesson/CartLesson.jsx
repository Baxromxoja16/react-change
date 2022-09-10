import React from "react";
import "./CartLesson.sass";

const CartLesson = ({ courseName, courseDate }) => {
  return (
    <div className="cart">
      <div className="cart_hover">
        <h4>{courseName}</h4>
        <p className="date">{courseDate}</p>
        <button className="btn_cart_hover">Записаться</button>
      </div>
      <h4>{courseName}</h4>
      <p className="date">{courseDate}</p>
    </div>
  );
};

export default CartLesson;
