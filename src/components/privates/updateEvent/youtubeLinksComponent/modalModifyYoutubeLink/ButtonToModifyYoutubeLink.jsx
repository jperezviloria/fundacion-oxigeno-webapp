import React, { useState } from 'react'
import styled from "styled-components";

import Modal from './ModalToModifyYoutubeLink'

import {Boton} from "./ButtonModifyStyle"




const ButtonToModifyYoutubeLink = ({id, message, internalMessage}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }


  
  
  return (
    <div>
      <Boton type="submit"  onClick={openModal}  >{message}</Boton>
      {showModal && <Modal id={id} closeModal={closeModal} internalMessage={internalMessage}/>}
    </div>
  )
}

export default ButtonToModifyYoutubeLink