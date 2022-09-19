import "./App.css";
import Home from "./containers/Home/Home";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "./containers/CoursesPage/CoursesPage";
import CoworkingPage from "./containers/CoworkingPage/CoworkingPage";
import OpenLessons from "./containers/OpenLessons/OpenLessons";
import ContactPage from "./containers/ContactPage/ContactPage";
import AboutCourse from "./containers/AboutCourse/AboutCourse";
import AdminPage from "./containers/AdminPage/AdminPage";
import AdminHome from "./containers/AdminPage/AdminHome/AdminHome";
import AdminCourse from "./containers/AdminPage/AdminCourse/AdminCourse";
import AdminOpenLesson from "./containers/AdminPage/AdminOpenLesson/AdminOpenLesson";
import AdminContact from "./containers/AdminPage/AdminContact/AdminContact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coworking" element={<CoworkingPage />} />
        <Route path="/openlesson" element={<OpenLessons />} />
        <Route path="/aboutcourse" element={<AboutCourse />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="/admin/home" element={<AdminHome/>}/>
          <Route path="/admin/courses" element={<AdminCourse/>}/>
          <Route path="/admin/openlesson" element={<AdminOpenLesson/>}/>
          <Route path="/admin/contact" element={<AdminContact />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
