import React from "react";
import Along from "./Along/Along";
import Comments from "./Comments/Comments";
import Consultation from "./Consultation/Consultation";
import Contact from "./Contact/Contact";
import CoursFor from "./CoursFor/CoursFor";
import Coworking from "./Coworking/Coworking";
import Footer from "../../components/Footer/Footer";
import Header from "./Header/Header";
import "./Home.sass";
import InfoSection from "./InfoSection/InfoSection";
import News from "./News/News";
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
      {/* <Comments /> */}
      <News />
      <Contact />
      <Coworking />
      <Footer />
    </>
  );
};

export default Home;
