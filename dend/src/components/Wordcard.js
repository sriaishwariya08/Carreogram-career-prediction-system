import "./WordcardStyles.css";

import React from "react";

import {Link} from "react-router-dom"

const Wordcard = (props) => {
  return (
      <div className="project-card1">
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

export default Wordcard