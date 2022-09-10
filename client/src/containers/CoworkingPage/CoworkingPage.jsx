import React from "react";
import "./CoworkingPage.sass";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Consultation from "../Home/Consultation/Consultation";
import Coworking from "../Home/Coworking/Coworking";
import Contact from "../Home/Contact/Contact";
import CowoHeader from "./CowoHeader/CowoHeader";
import NoPractis from "./NoPractis/NoPractis";

const CoworkingPage = () => {
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
  const title = "Коворкинг";

  // const aboutCoworking = [
  //   {
  //     text: "Доступ к интернету круглосуточно",
  //   },
  //   {
  //     text: "Посещение коворкинга входит в стоимость обучения",
  //   },
  //   {
  //     text: "Администратор коворкинга поможет по всем интересующим вас вопросам, которые касаются обучения",
  //   },
  //   {
  //     text: "Атмосфера помогает развитию коллективных навыков работы",
  //   },
  // ];
  const styleReverse = "row";
  return (
    <>
      <Navbar />
      <CowoHeader data={data} title={title} />
      <NoPractis styleReverse={styleReverse} />
      <Consultation />
      <Contact />
      <Coworking />
      <Footer />
    </>
  );
};

export default CoworkingPage;
