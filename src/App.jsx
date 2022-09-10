import "./App.css";
import Home from "./containers/Home/Home";
import { Routes, Route } from "react-router-dom"
import CoursesPage from "./containers/CoursesPage/CoursesPage";
import CoworkingPage from "./containers/CoworkingPage/CoworkingPage";
import OpenLessons from "./containers/OpenLessons/OpenLessons";
import ContactPage from "./containers/ContactPage/ContactPage";
import AboutCourse from "./containers/AboutCourse/AboutCourse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={< CoursesPage />} />
        <Route path="/coworking" element={<CoworkingPage />} />
        <Route path="/openlesson" element={<OpenLessons />} />
        <Route path="/aboutcourse" element={<AboutCourse />} />
      </Routes>
    </>
  );
}

export default App;
