import React, { useEffect, useState } from "react";
import {Link, Redirect} from "react-router-dom"
import HttpClient from "../../../../../service/axios"
import moment from "moment"
import {useForm} from "react-hook-form"
import {StyledModal, Imagen, YoutubeLink, FormToSave} from "./ModalAddStyle"

const Modal = ({ closeModal , id, internalMessage}) => {

    const {register, handleSubmit} = useForm()

    const [particularEvent, setParticularEvent] = useState([])
    const [youtubeLinks, setYoutubeLinks] = useState([])
    const [query, setQuery] = useState(false)

  let modalRef;

  const hideModal = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      closeModal();
    }
  };

  const getEventWitYoutubeLinksById = async(idValue) =>{
    await HttpClient.get(`http://localhost:5000/private-event/get/eventandyoutubelink/${idValue}`)
    .then((response) =>{
        console.log(response.data.data)
        setParticularEvent(response.data.data)
        setYoutubeLinks(response.data.data.youtubeLink)

    })
  }

  const verifyThatIsUniqueNumber = (list, position) =>{
    var isUnique = true
    list.map(particularPosition =>{
      if(position === particularPosition){
        isUnique = false
        
      }
    })
    return isUnique

  }

  const showMaxNumberOnArrayAndAddOne = (list) =>{
    var maxNumber = Math.max(...list)
    var finalValue = maxNumber + 1
    if(verifyThatIsUniqueNumber(list, finalValue) != true){
      return null
    }
    return finalValue
  }

  const createArray = (list) =>{
    if (list.length == 0){
      return 0
    }
    var LinksArray = []
    list.map(particular =>{
      LinksArray.push(particular.position)
    })
    return showMaxNumberOnArrayAndAddOne(LinksArray)
  }

  const saveYoutubeLink = async (data) =>{
    const positionChecked = createArray(youtubeLinks)
    const newYoutubeLink = {
      name: data.name,
      idEvent: id,
      link: data.link,
      position: positionChecked
    }
    console.log(newYoutubeLink)
    await HttpClient.post(`http://localhost:5000/private-event/save/youtubelink`, newYoutubeLink)
    .then(response =>{
      console.log(response)
      setQuery(true)
      
      
    })
  }



  useEffect(() => {
    getEventWitYoutubeLinksById(id)
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, [query]);

  return (
    <StyledModal>
      <div ref={(node) => (modalRef = node)} className="modal">
        <h1>{internalMessage}</h1>
        <hr />
        {/* <h4>
        {particularEvent.title}
        </h4>
        <h4>
        {moment(particularEvent.dates).format("DD/MM/YYYY")}
        </h4> */}
        <YoutubeLink>
        {youtubeLinks.map(p => (
          <>
          <p>{p.name}</p>
          <p>{p.link}</p>
          </>
        ))}
        </YoutubeLink>
        <FormToSave action="" onSubmit={handleSubmit(saveYoutubeLink)}>
          <input 
          {...register("name")} 
          required
          type="text" 
          placeholder="nombre del link"/>
          <input 
          {...register("link")} 
          required
          type="text" 
          placeholder="link de youtube"/>
          <button type="submit">guardar</button>
        </FormToSave>
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