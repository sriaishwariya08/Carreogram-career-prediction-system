import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Militaryimg from "../components/Militaryimg";
import Militarydata from "../components/Militarydata";
const Military = () => {
  return (
    <div>
       <Navbar />
       <Militaryimg />
       <Militarydata />
       <Footer />
    </div>
  )
}

export default Military;