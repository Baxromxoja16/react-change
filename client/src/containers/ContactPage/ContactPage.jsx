import React from "react";
import "./ContactPage.sass";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Contact from "../Home/Contact/Contact";
import Coworking from "../Home/Coworking/Coworking";
import Footer from "../../components/Footer/Footer";
// import Maps from "../../components/Maps/Maps";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Contact />
      {/* <Maps /> */}
      <Coworking />
      <Footer />
    </>
  );
};

export default ContactPage;
