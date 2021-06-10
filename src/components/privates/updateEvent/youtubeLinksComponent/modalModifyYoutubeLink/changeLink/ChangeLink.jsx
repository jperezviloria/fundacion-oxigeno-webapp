import React, {useState} from "react"
import {useForm} from "react-hook-form"
import HttpClient from "../../../../../../service/axios"

import "./ChangeLink.css"

const ChangeLink = ({idToUse, closeModal}) =>{

    const {register, handleSubmit} = useForm()

    const onSubmitChangeLink = async(data) =>{
        const objectToChange = {
            id: idToUse,
            link: data.link
        }
        console.log(objectToChange)
        await HttpClient.put(`http://localhost:5000/private-event/update/youtubelink/link`, objectToChange)
        .then(response =>{
            console.log(response)
            closeModal()
        })

    }

    return (
        <form 
        onSubmit={handleSubmit(onSubmitChangeLink)}
        className="change-link"
        action="">
            <input 
            {...register("link")} 
            required
            placeholder="nuevo link"
            type="text" />
            <button type="submit">actualizar</button>
        </form>
        
    )
}

export default ChangeLink;
