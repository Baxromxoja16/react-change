import "./ModalReq.sass";
import React from "react";
import { useState } from "react";

const ModalReq = ({ active, setActive }) => {

  const [changeInpName, setChangeInpName] = useState("")
  const [changeInpNumber, setChangeInpNumber] = useState("")
  const [messageError, setMessageError] = useState("")

  function regiterHandler(e) {
    if (changeInpName === "" || changeInpNumber === "") {
      e.preventDefault()
      setMessageError("Iltimos formani to'g'ri to'ldiring ")
    }
    console.log(changeInpName, changeInpNumber);
  }

  function handleChange(e) {
    e.preventDefault()
    const target = e.target

    const numberLength = target.value.length > 13 ? setChangeInpNumber(changeInpNumber) : target.value

    target.placeholder === "Имя" ? setChangeInpName(target.value) : setChangeInpNumber(numberLength)

    if (e.target.placeholder === "Номер телефона") {
      phoneValidation() ? setMessageError("") : setMessageError("Raqam noto'g'ri kiritildi")
    }
  }

  function phoneValidation() {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return !(!changeInpNumber || regex.test(changeInpNumber) === false);
  }

  return (
    <>
      <div className="overlay" onClick={() => setActive(false)}></div>
      <div className={active ? "modal active" : "modal"}>
        <h2>Оставьте заявку</h2>
        <p className="modal_text">
          Заполните поля ниже и мы перезвоним вам в ближайшее время
        </p>
        <form onSubmit={regiterHandler}>
          <input type="text" className={!!messageError ? "errorMessage" : ""} placeholder="Имя" onChange={handleChange} />
          <input type="tel" className={!!messageError ? "errorMessage" : ""} placeholder="Номер телефона" onChange={handleChange} />
          <p className="errorMessage">{messageError}</p>
          <button>Отправить</button>
        </form>
      </div>
    </>
  );
};

export default ModalReq;
