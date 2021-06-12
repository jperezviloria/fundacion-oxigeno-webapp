import React from "react"

import "./MainYoutubeComponent.css"

const MailYoutubeComponent = ({indexEvent, indexYoutubeLink, particularYoutubeLink, decideMainYoutubeLink}) =>{
    return (
    <div className="main-youtube">
        <h1>{particularYoutubeLink.name}</h1>
        <iframe className="main-youtube-iframe"  src={particularYoutubeLink.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
    )
}

export default MailYoutubeComponent;