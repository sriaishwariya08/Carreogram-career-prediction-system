import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bakerimg from "../components/Bakerimg";
import Bakerdata from "../components/Bakerdata";
const Baker = () => {
  return (
    <div>
       <Navbar />
       < Bakerimg />
       < Bakerdata />
       <Footer />
    </div>
  )
}

export default Baker;