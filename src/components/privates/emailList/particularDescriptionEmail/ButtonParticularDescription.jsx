import React, { useState } from 'react'
import styled from "styled-components";

import Modal from './ModalParicularDescription'


const Boton = styled.button`
    border-radius: 20px;
    border: 4px solid #4275a5;
    padding: 6px 15px;
    width: 100px;
    margin: 4px;
    font-weight: 900;
    text-align: center;
  @media only screen and (min-width: 310px) {
    padding: 10px 50px;
    /* margin-top:0px;
    margin-bottom: 0px; */
  }
  @media only screen and (min-width: 480px) {
    padding: 10px 100px;
    /* margin-top:0px;
    margin-bottom: 0px; */
  }
  @media only screen and (min-width: 768px) {
    
    padding: 0px 0px;
    border-radius: 100px;
    
    }
`


const Button = ({id}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }


  
  
  return (
    <div>
      <Boton type="submit"  onClick={openModal}  >Ver</Boton>
      {showModal && <Modal id={id} closeModal={closeModal} />}
    </div>
  )
}

export default Button