import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Scientistimg from "../components/Scientistimg";
import Scientistdata from "../components/Scientistdata";
const Scientist = () => {
  return (
    <div>
       <Navbar />
       <Scientistimg />
       <Scientistdata />
       <Footer />
    </div>
  )
}

export default Scientist;