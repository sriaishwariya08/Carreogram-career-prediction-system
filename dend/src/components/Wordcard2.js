import "./WordcardStyles2.css";

import React from "react";

import {Link} from "react-router-dom"

const Wordcard2 = (props) => {
  return (
      <div className="project-card2">
        <img src={props.imgsrc} alt="doctor.jpg"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btn">
          <Link to={props.view} className="btn">Knowmore</Link>
           
          </div>
        </div>
      </div>
  )
}

export default Wordcard2