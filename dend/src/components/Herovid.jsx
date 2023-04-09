import React from 'react'
import herovid from "../assets/herovid.mp4"
import "./HerovidStyles.css";
import {Link} from "react-router-dom";

const Herovid = () => {
  return (
    <div className='main'>
      <div className='overlay'> </div>
      <video src={herovid} autoPlay loop muted/>
      <div className='content'>
        <h1>Carreogram, We care for you!</h1>
        <div>
          <Link to="http://localhost:8501/" className='btn'>KNOW YOUR CAREER</Link>
        </div>
      </div>
    </div>
  )
}

export default Herovid