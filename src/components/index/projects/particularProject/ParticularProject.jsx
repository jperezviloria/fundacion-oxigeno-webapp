import React from "react"

import "./ParticularProject.css"

const ParticularProjectComponent = (props) =>{
    return (
        <div className="particular-project-component">
            <img 
            src={props.imageUrl}
            className="particular-project-component-image"
            alt="particular-project"  />
            <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ParticularProjectComponent;