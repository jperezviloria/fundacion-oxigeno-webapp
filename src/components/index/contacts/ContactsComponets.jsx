import React from "react"
//import axios from "axios"
import {useForm} from "react-hook-form"

import SocialMediaComponent from "../../common/socialMedia/SocialMedia"

import ListOfCountries from "./ListOfCountries"

import "./ContactsComponents.css"

const ConstactsComponent = () =>{

    const {register, handleSubmit} = useForm()

    const onSubmitContacts = async (data) => {
    
        const constactsForm = {
            names: data.names,
            email: data.email,
            phone: data.phone,
            description: data.description
        };
        console.log(constactsForm)
    }

    return (
        <div className="contacts-components">
            <h1>CONTACTANOS</h1>
            <p>telefono: +66 11 45454545</p>
            <p>emailo: oxigeno@email.com</p>
            <SocialMediaComponent
            style="contacts-components-images"/>
            <form className="contacts-components-form" onSubmit={handleSubmit(onSubmitContacts)}>
                <input
                {...register("names")} 
                className="contacts-components-inputs" 
                type="text" 
                placeholder="nombre y apellido" />
                <input 
                {...register("email")} 
                className="contacts-components-inputs" 
                type="text" 
                placeholder="email" />
                <input 
                {...register("phone")} 
                className="contacts-components-inputs" 
                type="text" 
                placeholder="telefono" />
                <ListOfCountries
                style="contacts-components-list-countries"/>
                <textarea 
                {...register("description")} 
                className="contacts-components-inputs-description" 
                type="text" 
                placeholder="descripcion" />
                <button 
                className="contacts-components-button"
                type="submit">ENVIAR </button>
            </form>
        </div>
    )
}


export default ConstactsComponent;