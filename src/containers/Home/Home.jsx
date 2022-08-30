import React from "react";
import Along from "./Along/Along";
import Comments from "./Comments/Comments";
import Consultation from "./Consultation/Consultation";
import CoursFor from "./CoursFor/CoursFor";
import Header from "./Header/Header";
import "./Home.sass";
import InfoSection from "./InfoSection/InfoSection";
import Practice from "./Practice/Practice";
import Texnology from "./Texnology/Texnology";

const Home = () => {
  return (
    <>
      <Header />
      <InfoSection />
      <Texnology />
      <Along />
      <CoursFor />
      <Practice />
      <Consultation />
      <Comments />
    </>
  );
};

export default Home;
