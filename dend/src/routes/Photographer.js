import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Photoimg from "../components/Photoimg";
import Photodata from "../components/Photodata";
const Photographer = () => {
  return (
    <div>
       <Navbar />
       <Photoimg />
       <Photodata />
       <Footer />
    </div>
  )
}

export default Photographer;