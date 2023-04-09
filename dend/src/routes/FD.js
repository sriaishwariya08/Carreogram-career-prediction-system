import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FDimg from "../components/FDimg";
import FDdata from "../components/FDdata";
const FD = () => {
  return (
    <div>
       <Navbar />
       <FDimg />
       <FDdata />
       <Footer />
    </div>
  )
}

export default FD;