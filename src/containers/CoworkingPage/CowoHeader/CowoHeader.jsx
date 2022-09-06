import React from "react";
import "./CowoHeader.sass";
import InfoComponent from "../../../components/InfoComponent/InfoComponent";

const CowoHeader = () => {
  const data = [
    {
      topInfo: "ВРЕМЯ РАБОТЫ",
      bottomInfo: "9:00 - 21:00",
    },
    {
      topInfo: "СТОИМОСТЬ",
      bottomInfo: "входит в обучение",
    },
  ];

  return (
    <header className="cowo_header">
      <div className="container">
        <h1>Коворкинг</h1>
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
