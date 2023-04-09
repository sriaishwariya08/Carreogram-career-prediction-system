import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Writerimg from "../components/Writerimg";
import Writerdata from "../components/Writerdata";
const Writer = () => {
  return (
    <div>
       <Navbar />
       <Writerimg />
       <Writerdata />
       <Footer />
    </div>
  )
}

export default Writer;