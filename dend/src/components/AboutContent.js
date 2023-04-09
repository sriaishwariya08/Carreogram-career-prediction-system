import "./AboutContentStyles.css"

import React from 'react'
import abt2 from "../assets/abt2.jpg"
import about from "../assets/about.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who are we?</h1>
            <p>We "CARREOGRAM" assist students identify their ideal careers or professions based on their interests and skillsets possesed. Through our service we connect with students and help them have a better understanding on themselves.</p>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={abt2} className="img" alt="abt2.jpg" />
                </div>
                <div className="img-stack bottom">
                    <img src={about} className="img" alt="about.jpg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent