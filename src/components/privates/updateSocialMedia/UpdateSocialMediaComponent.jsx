import React from "react"

import "./UpdateSocialMediaComponent.css"


const UpdateSocialMediaComponent = () =>{
    return (
        <div className="update-social-media">
            <h1>Administrar Redes Sociales</h1>
            <div className="update-social-media-all-bottons">
                <button 
                className="update-social-media-botton">Ver todos</button>
                <button
                className="update-social-media-botton">Modificar</button>
                <button
                className="update-social-media-botton">Agregar</button>
                <button
                className="update-social-media-botton">Eliminar</button>
            </div>
        </div>
    )
}

export default UpdateSocialMediaComponent;