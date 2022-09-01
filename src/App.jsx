import "./App.css";
import Home from "./containers/Home/Home";
import { Routes, Route } from "react-router-dom"
import Contact from "./containers/ContactPage/ContactPage";
import CoursesPage from "./containers/CoursesPage/CoursesPage";
import CoworkingPage from "./containers/CoworkingPage/CoworkingPage";
import OpenLessons from "./containers/OpenLessons/OpenLessons";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={< CoursesPage />} />
        <Route path="/coworking" element={<CoworkingPage />} />
        <Route path="/openlesson" element={<OpenLessons />} />
      </Routes>
    </>
  );
}

export default App;
