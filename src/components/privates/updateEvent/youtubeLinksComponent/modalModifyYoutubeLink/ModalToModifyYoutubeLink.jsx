import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Link, Redirect} from "react-router-dom"
import HttpClient from "../../../../../service/axios"
import moment from "moment"
import {useForm} from "react-hook-form"
import {FormToSave, YoutubeLink, Imagen, StyledModal} from "./ModalModifyStyle"
import SelectorFilter from "./selectorFilter/SelectorFilter"

import "./ModalModify.css"


const Modal = ({ closeModal , id, internalMessage}) => {

    const [particularEvent, setParticularEvent] = useState([])
    const [youtubeLinks, setYoutubeLinks] = useState([])
    const [query, setQuery] = useState(false)
    const [idToUse, setIdToUse] = useState(null)

  let modalRef;

  const hideModal = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      closeModal();
    }
  };

  const getEventWitYoutubeLinksById = async(idValue) =>{
    await HttpClient.get(`/private-event/get/eventandyoutubelink/${idValue}`)
    .then((response) =>{
        console.log(response.data.data)
        setParticularEvent(response.data.data)
        setYoutubeLinks(response.data.data.youtubeLink)

    })
  }

  const implementSelector = (particularId) =>{
    setIdToUse(particularId)
    setQuery(true)
  }


  useEffect(() => {
    getEventWitYoutubeLinksById(id)
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  return (
    // !query?
    <StyledModal>
    <div ref={(node) => (modalRef = node)} className="modal">
      {!query
      ?<>
      <h1>{internalMessage}</h1>
      <hr />
      <YoutubeLink>
      {youtubeLinks.map(p => (
        <div>
        <p>{p.name}</p>
        <p>{p.link}</p>
        <p>posicion: {p.position}</p>
        <button onClick={() =>implementSelector(p.id)}>🔵</button>
        </div>
      ))}
      </YoutubeLink>
      <div className="modal-btns">
        <Link to="/admin/secure/dashboard">
          <button onClick={closeModal}>Cerrar</button>
        </Link>
      </div>
      </>
      :<SelectorFilter 
      closeModal={closeModal} 
      idToUse={idToUse}/>}
    </div>
  </StyledModal>
  // :<SelectorFilter id={idToUse}/>
  );
};

export default Modal;