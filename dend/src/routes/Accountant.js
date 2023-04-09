import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Accountantimg from "../components/Accountantimg";
import Accountantdata from "../components/Accountantdata";
const Accountant = () => {
  return (
    <div>
       <Navbar />
       < Accountantimg />
       < Accountantdata />
       <Footer />
    </div>
  )
}

export default Accountant;