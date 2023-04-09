import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import AboutContent from '../components/AboutContent';
import Heroimg2 from '../components/Heroimg2';
import Work3 from "../components/Work3"; 

const Aboutus = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2/>
      <AboutContent/>
      <Work3/>
      <Footer/>
    </div>
  )
}

export default Aboutus