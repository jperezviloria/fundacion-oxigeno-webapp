import React, {useState} from "react"
import {useForm} from "react-hook-form"
import HttpClient from "../../../../../../service/axios"

import "./ChangeName.css"

const ChangeName = ({idToUse, closeModal}) =>{
    const {register, handleSubmit} = useForm()

    const onSubmitChangeName = async(data) =>{
        const objectToChange = {
            id: idToUse,
            name: data.name
        }
        console.log(objectToChange)
        await HttpClient.put(`/private-event/update/youtubelink/name`, objectToChange)
        .then(response =>{
            console.log(response)
            closeModal()
        })

    }

    return (
        <form 
        onSubmit={handleSubmit(onSubmitChangeName)}
        className="change-name"
        action="">
            <input 
            {...register("name")} 
            required
            placeholder="nuevo nombre"
            type="text" />
            <button type="submit">actualizar</button>
        </form>
    )
}

export default ChangeName;
