import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Link, Redirect} from "react-router-dom"
import HttpClient from "../../../../service/axios"
import moment from "moment"

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  .modal {
    width: 390px;
    height: 400px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 2px;
    position: relative;
    padding: 10px;
    border-radius: 15px;
    animation-name: grow-modal;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;
    @keyframes grow-modal {
      0% {
        opacity: 0.2;
      }
      25% {
        opacity: 0.4;
      }
      50% {
        opacity: 0.6;
      }
      75% {
        opacity: 0.8;
      }
      100% {
        width: 400px;
        height: 400px;
        opacity: 0.9;
      }
    }
    h4 {
      text-align: center;
      color: #444;
      font-size: 1rem;
      font-weight: 100;
      font-family: "Roboto", sans-serif;
      text-align: justify;
      width: 80%;
      margin: 0 auto;
    }
    .modal-btns {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      word-spacing: 20px;
      a {
        text-decoration: none;
      }
      button {
        padding: 8px 30px;
        border-radius: 20px;
        border: 4px solid #127681;
        font-weight: 800;
      }
    }
  }
  @media only screen and (min-width: 310px) {
    .modal {
      h4 {
        font-size: 1.5rem;
      }
      .modal-btns {
        button {
          padding: 8px 50px;
        }
      }
    }
  }
`;

const Imagen = styled.img`
  width: 60px;
  display: flex;
  margin: 0 auto;
  @media only screen and (min-width: 310px) {
    width: 100px;
  }
`;

const Modal = ({ closeModal , id}) => {

    const [particularContactForm, setParticularContactForm] = useState([])

  let modalRef;

  const hideModal = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      closeModal();
    }
  };

  const getUserById = async(idValue) =>{
    await HttpClient.get(`/contact-form/getbyid/${idValue}`)
    .then((response) =>{
        console.log(response.data.message)
        setParticularContactForm(response.data.message)

    })
  }


  useEffect(() => {
    getUserById(id)
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  return (
    <StyledModal>
      <div ref={(node) => (modalRef = node)} className="modal">
        <h1>Detallas del email</h1>
        <hr />
        <h4>
            {particularContactForm.name}
        </h4>
        <h4>
        {particularContactForm.email}
        </h4>
        <h4>
        {particularContactForm.phone}
        </h4>
        <h4>
        {particularContactForm.country}
        </h4>
        <h4>
        {moment(particularContactForm.dates).format("DD/MM/YYYY HH:MM:SS")}
        </h4>
        <h4>
        {particularContactForm.description}
        </h4>
        <div className="modal-btns">
          <Link to="/admin/secure/dashboard">
            <button onClick={closeModal}>Cerrar</button>
          </Link>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;