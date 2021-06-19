import styled from "styled-components"


export const StyledModal = styled.div`
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
    width: 890px;
    height: 500px;
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
        height: 500px;
        opacity: 0.9;
      }
    }
    h4 {
      text-align: center;
      color: #444;
      font-size: 1rem;
      font-weight: 100;
      font-family: "Roboto", sans-serif;
      width: 80%;
      margin: 0 auto;
      

    }
    .modal-btns {
      display: flex;
      justify-content: center;
      margin-top: 10px;
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

export const Imagen = styled.img`
  width: 60px;
  display: flex;
  margin: 0 auto;
  @media only screen and (min-width: 310px) {
    width: 100px;
  }
`;

export const YoutubeLink = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  border-radius: 10px;
  text-align: center;

  padding: 0;
  margin: 0;
  overflow-x: hidden;
  height: 320px;

  div {
    
    border: 2px solid #152590;
    margin: 10px auto;
    width: 260px;
    border-radius: 15px;
  }

  p {
    display: grid;
    font-size: 10px;
  }

  button {
    height: 30px;
  }

  @media only screen and (min-width: 480px) {
    div {
      width: 360px;
    }
  }
  @media only screen and (min-width: 768px) {
    div {
      width: 560px;
    }
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1200px) {
    div{
      width: 760px;
    }
  }
`

export const FormToSave = styled.form`
  display: grid;
  /* grid-template-columns: repeat(2, 50%); */
  text-align: center;
  
  padding: 0;
  margin: 0;
  
  input{
    border: 2px solid blue;
    border-radius: 4px;
    width: 80%;
    margin: 4px auto;
    font-size: 10px;
  }
  button{
    width: 50%;
    padding: 6px;
    margin: 0px auto;
    border: 2px solid black;
    border-radius: 5px;
  }
`