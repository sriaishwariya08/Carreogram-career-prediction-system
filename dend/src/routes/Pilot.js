import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pilotimg from "../components/Pilotimg";
import Pilotdata from "../components/Pilotdata";
const Pilot = () => {
  return (
    <div>
       <Navbar />
       <Pilotimg />
       <Pilotdata />
       <Footer />
    </div>
  )
}

export default Pilot;