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
  return (
    <>
      <Navbar />
      <CowoHeader />
      <NoPractis />
      <Consultation />
      <Contact />
      <Coworking />
      <Footer />
    </>
  );
};

export default CoworkingPage;
