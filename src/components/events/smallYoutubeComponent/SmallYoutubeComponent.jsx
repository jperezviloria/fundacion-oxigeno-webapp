import React, {useState} from "react"
import ModalSmallYoutubeLink from "./modalSmallYoutube/ModalSmallYoutubeLink"

import "./SmallYoutubeComponent.css"

const SmallYoutubeComponent = ({particularYoutubeLink}) =>{

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    }
  
    const closeModal = () => {
      setShowModal(false);
    }


    return (
    <div className="small-youtube" onClick={openModal} >
        <iframe onClick={openModal} className="small-youtube-iframe" src={particularYoutubeLink.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>{particularYoutubeLink.name}</p>
        {showModal && <ModalSmallYoutubeLink setShowModal={setShowModal} youtubeLink={particularYoutubeLink.link}/>}
    </div>
    )
}

export default SmallYoutubeComponent;