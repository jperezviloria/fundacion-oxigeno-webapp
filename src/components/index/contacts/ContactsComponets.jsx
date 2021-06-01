import React from "react"
import SocialMediaComponent from "../../common/socialMedia/SocialMedia"

import ListOfCountries from "./ListOfCountries"

import "./ContactsComponents.css"

const ConstactsComponent = () =>{
    return (
        <div className="contacts-components">
            <h1>CONTACTANOS</h1>
            <p>telefono: +66 11 45454545</p>
            <p>emailo: oxigeno@email.com</p>
            <SocialMediaComponent
            style="contacts-components-images"/>
            <form className="contacts-components-form">
                <input
                className="contacts-components-inputs" 
                type="text" 
                placeholder="nombre y apellido" />
                <input 
                className="contacts-components-inputs" 
                type="text" 
                placeholder="email" />
                <input 
                className="contacts-components-inputs" 
                type="text" 
                placeholder="telefono" />
                <ListOfCountries
                style="contacts-components-list-countries"/>
                <textarea 
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