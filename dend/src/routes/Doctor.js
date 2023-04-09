import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Docimg from "../components/Docimg";
import Docdata from "../components/Docdata";
const Doctor = () => {
  return (
    <div>
       <Navbar />
       <Docimg />
       <Docdata />
       <Footer />
    </div>
  )
}

export default Doctor;