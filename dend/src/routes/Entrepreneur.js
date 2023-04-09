import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Entrepreneurimg from "../components/Entrepreneurimg";
import Entrepreneurdata from "../components/Entrepreneurdata";

const Entrepreneur = () => {
  return (
    <div>
       <Navbar />
       <Entrepreneurimg />
       <Entrepreneurdata />
       <Footer />
    </div>
  )
}

export default Entrepreneur;