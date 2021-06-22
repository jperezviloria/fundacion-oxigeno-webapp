import React, { useEffect, useState } from "react";
import {Link, Redirect} from "react-router-dom"
import HttpClient from "../../../../service/axios"
import moment from "moment"
import {useForm} from "react-hook-form"
import {StyledModal, Imagen, YoutubeLink, FormToSave} from "./ModalSmallYoutubeStyle"

const Modal = ({ closeModal, setShowModal, youtubeLink}) => {

  let modalRef;

  const hideModal = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      setShowModal(false)
    }
  };
  

  useEffect(() => {
    
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  return (
    <StyledModal>
      <div ref={(node) => (modalRef = node)} className="modal">
      <iframe src={youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/*<button onDoubleClick={() => setShowModal(false)} onSelect={() => setShowModal(false)} >Cerrar</button>*/}
          <a href="/eventos">cerrar</a>
      </div>
    </StyledModal>
  );
};

export default Modal;