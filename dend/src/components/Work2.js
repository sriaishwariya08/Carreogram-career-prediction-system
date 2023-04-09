import "./WordcardStyles2.css";
import Wordcard2 from "./Wordcard2"
import WorkCardData2 from "./WorkCardData2"

import React from "react";


const Work2 = () => {
  return (
    <div className="work-container"> 
    <h1 className="project-heading">Careers we suggest</h1>
    <div className="project-container">
      {WorkCardData2.map((val,ind)=>{
        return(
            <Wordcard2
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

export default Work2