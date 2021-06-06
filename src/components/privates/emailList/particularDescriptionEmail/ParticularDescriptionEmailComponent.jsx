import React, {useState, useEffect} from "react"
import moment from "moment"
import ButtonParticularDescription from "./ButtonParticularDescription"

import HttpClient from "../../../../service/axios"

import "./ParticularDescriptionEmailComponent.css"

const ParticularDescriptionEmailComponent = ({name, date, id, enable,setConfirmEmail}) =>{


    //const [confirmEmail, setConfirmEmail] = useState(false)

    const changeEnable = async() =>{
        await HttpClient.put(`http://localhost:5000/contact-form/change-status/${id}`)
        .then(() =>{
            setConfirmEmail(true)
        })
    }

    const defineStyle = (enableValue) =>{
        if(enableValue){
            return "particular-description-email-true"
        }
        else if(!enableValue){
            return "particular-description-email-false"
        }
    }

    // useEffect(() =>{

    // }, [confirmEmail])

    return (
        <div className={defineStyle(enable)}>
            <p 
            className="particular-description-email-info">{name}</p>
            <p
            className="particular-description-email-info">{moment(date).format("DD/MM/YYYY")}</p>
            {/* <button
            className="particular-description-email-button">ver</button> */}
            <ButtonParticularDescription
            id={id}/>
            {!enable
            ?<button
            onClick={changeEnable}
            className="particular-description-email-button">finalizar</button>
            :null}
            
        </div>
    )
}

export default ParticularDescriptionEmailComponent;