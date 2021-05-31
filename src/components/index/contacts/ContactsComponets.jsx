import React from "react"
import SocialMediaComponent from "../../common/socialMedia/SocialMedia"

const ConstactsComponent = () =>{
    return (
        <div>
            <h1>CONTACTANOS</h1>
            <p>telefono: +66 11 45454545</p>
            <p>emailo: oxigeno@email.com</p>
            <SocialMediaComponent/>
            <div>
                <input 
                type="text" 
                placeholder="nombre y apellido" />
                <input 
                type="text" 
                placeholder="email" />
                <input 
                type="text" 
                placeholder="telefono" />
                <input 
                type="text" 
                placeholder="descripcion" />
                <input 
                type="text" 
                placeholder="pais" />
                <button type="submit">ENVIAR </button>
            </div>
        </div>
    )
}


export default ConstactsComponent;