import React, { useState } from 'react'


import Modal from './ModalSmallYoutubeLink'
import {Boton} from "./ButtonSmallYoutubeStyle"




const Button = ({id, message, internalMessage}) => {
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

export default Button