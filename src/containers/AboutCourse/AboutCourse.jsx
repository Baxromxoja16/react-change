import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CowoHeader from "../CoworkingPage/CowoHeader/CowoHeader";
import NoPractis from "../CoworkingPage/NoPractis/NoPractis";
import Contact from "../Home/Contact/Contact";
import Coworking from "../Home/Coworking/Coworking";
import Practice from "../Home/Practice/Practice";
import "./AboutCourse.sass";

const AboutCourse = () => {
  // for header
  const data = [
    {
      topInfo: "ПРОДОЛЖИТЕЛЬНОСТЬ",
      bottomInfo: "9 месяцев",
    },
    {
      topInfo: "ФОРМАТ ОБУЧЕНИЯ",
      bottomInfo: "офлайн",
    }
  ];

  const title = "Java development";
  // For noPractis
  const styleReverse = "row-reverse";
  const practisText =
    "Курсы программирования Java — современная комплексная программа обучения языку Java. Java – популярный язык программирования, на котором кодят игровые и мобильные приложения, десктоп-программы и огромное количество soft-продуктов для предприятий.";

  return (
    <div>
      <Navbar />
      <CowoHeader data={data} title={title} isButton={true} />
      <NoPractis
        styleReverse={styleReverse}
        practisText={practisText}
        title={title}
      />
      <Practice />
      <Contact />
      <Coworking />
      <Footer />
    </div>
  );
};

export default AboutCourse;
