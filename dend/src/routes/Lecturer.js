import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lecturerimg from "../components/Lecturerimg";
import Lecturerdata from "../components/Lecturerdata";
const Lecturer = () => {
  return (
    <div>
       <Navbar />
       <Lecturerimg />
       <Lecturerdata />
       <Footer />
    </div>
  )
}

export default Lecturer;