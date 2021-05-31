import React from "react"

import "./ParticularProject.css"

const ParticularProjectComponent = (props) =>{
    return (
        <div className="particular-project-component">
            <img 
            src={props.imageUrl}
            className="particular-project-component-image"  />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ParticularProjectComponent;