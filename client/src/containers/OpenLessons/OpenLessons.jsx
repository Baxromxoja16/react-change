import React from "react";
import "./OpenLessons.sass";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LessonHeader from "./LessonHeader/LessonHeader";
import LessonsCategory from "./LessonsCategory/LessonsCategory";

const OpenLessons = () => {
  return (
    <>
      <Navbar />
      <LessonHeader />
      <LessonsCategory />
      <Footer />
    </>
  );
};

export default OpenLessons;
