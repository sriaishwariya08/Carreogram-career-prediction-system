import React from "react";
import Navbar from "../components/Navbar";
import Herovid from "../components/Herovid"; 
import Footer from "../components/Footer"; 
import Work from "../components/Work"; 


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herovid/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home