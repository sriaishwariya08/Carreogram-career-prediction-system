import "./WordcardStyles3.css";
import Wordcard3 from "./Wordcard3"
import WorkCardData3 from "./WorkCardData3"

import React from "react";


const Work3 = () => {
  return (
    <div className="work-container"> 
    <h1 className="project-heading">Team behind Carreogram</h1>
    <div className="project-container">
      {WorkCardData3.map((val,ind)=>{
        return(
            <Wordcard3
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

export default Work3