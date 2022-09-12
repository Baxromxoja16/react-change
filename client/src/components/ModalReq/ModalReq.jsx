import "./ModalReq.sass";
import React from "react";

const ModalReq = ({ active, setActive }) => {
  return (
    <>
      <div className="overlay" onClick={() => setActive(false)}></div>
      <div className={active ? "modal active" : "modal"}>
        <h2>Оставьте заявку</h2>
        <p className="modal_text">
          Заполните поля ниже и мы перезвоним вам в ближайшее время
        </p>
        <form>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Номер телефона" />
          <button>Отправить</button>
        </form>
      </div>
    </>
  );
};

export default ModalReq;
