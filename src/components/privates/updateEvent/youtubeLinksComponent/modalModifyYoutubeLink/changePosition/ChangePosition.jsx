import React, {useState} from "react"
import {useForm} from "react-hook-form"
import HttpClient from "../../../../../../service/axios"

import "./ChangePosition.css"

const ChangePosition = ({idToUse, closeModal}) =>{
    const {register, handleSubmit} = useForm()

    const onSubmitChangePosition = async(data) =>{
        const objectToChange = {
            id: idToUse,
            position: data.position
        }
        console.log(objectToChange)
        await HttpClient.put(`http://localhost:5000/private-event/update/youtubelink/position`, objectToChange)
        .then(response =>{
            console.log(response)
            closeModal()
        })

    }

    return (
        <form 
        onSubmit={handleSubmit(onSubmitChangePosition)}
        action="" 
        className="change-position">
            <input 
            {...register("position")} 
            required
            placeholder="nueva posicion"
            type="text" />
            <button type="submit">actualizar</button>
        </form>
    )
}

export default ChangePosition;
