import React from "react"

import "./PresentationComponent.css"

const PresentationComponent = () =>{
    return (
        <div className="presentation-component">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nisi ut reprehenderit laborum excepturi? Soluta quis fugiat explicabo sunt quisquam.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nisi ut reprehenderit laborum excepturi? Soluta quis fugiat explicabo sunt quisquam.</p>
            <iframe className="presentation-component-video" src="https://www.youtube.com/embed/qdsQGRZUVCs?controls=0?rel=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen play ></iframe>
        </div>
    )
}

export default PresentationComponent;