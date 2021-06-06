import React, {useState} from "react"


import "./PersonalCard.css"

const PersonalCard = ({name, surname,email,modifyInfo, setModifyInfo, urlImage}) =>{ 


    const changeInformacion = () =>{
        setModifyInfo(true)
    }

    return (
        <div className="profile-admin-component">
            <h2>Hola {name} {surname}</h2>
            <img 
            // src="https://i.imgur.com/Ah3Dyh9.png"
            src={urlImage}
            className="profile-admin-component-image" 
            alt="" />
            <p>{email}</p>
            <button
            type="button"
            className="profile-admin-component-button"
            onClick={() => changeInformacion()}>modificar datos</button>
        </div>
    )
}

export default PersonalCard;