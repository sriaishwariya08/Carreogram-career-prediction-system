import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Journalimg from "../components/Journalimg";
import Journaldata from "../components/Journaldata";
const Journalist = () => {
  return (
    <div>
       <Navbar />
       <Journalimg />
       <Journaldata />
       <Footer />
    </div>
  )
}

export default Journalist;