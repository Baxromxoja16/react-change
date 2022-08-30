import React from "react";
import TexnologyCards from "../../../components/TexnologyCards/TexnologyCards";
import "./Texnology.sass";

const Texnology = () => {

  return (
    <section className="texnology">
      <div className="container">
        <h2>Вы сможете изучить:</h2>
        <div className="texnology_cards">
          <TexnologyCards />
        </div>
      </div>
    </section>
  );
};

export default Texnology;
