import "./WordcardStyles.css";
import Wordcard from "./Wordcard"
import WorkCardData from "./WorkCardData"

import React from "react";


const Work = () => {
  return (
    <div className="work-container"> 
    <h1 className="project-heading">Careers we suggest</h1>
    <div className="project-container">
      {WorkCardData.map((val,ind)=>{
        return(
            <Wordcard
            key={ind} 
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            />
        )
      })}
    </div>
    </div>
  )
}

export default Work