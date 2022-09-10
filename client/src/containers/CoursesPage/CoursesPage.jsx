import React from 'react'
import './CoursesPage.sass'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Course from './Course/Course'
import Contact from "../Home/Contact/Contact.jsx"
import Coworking from "../Home/Coworking/Coworking.jsx"

const CoursesPage = () => {
  return (
    <>
      <Navbar />
      <Course />
      <Contact/>
      <Coworking/>
      <Footer/>
    </>
  )
}

export default CoursesPage