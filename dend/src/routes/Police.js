import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Policeimg from "../components/Policeimg";
import Policedata from "../components/Policedata";
const Police = () => {
  return (
    <div>
       <Navbar />
        <Policeimg />
        <Policedata />
       <Footer />
    </div>
  )
}

export default Police;