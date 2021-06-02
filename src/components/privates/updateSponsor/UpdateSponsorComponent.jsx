import React from "react"

import "./UpdateSponsorComponent.css"


const UpdateSponsorComponent = () =>{
    return (
        <div className="update-sponsor-component">
            <h1>Administrar Aliados</h1>
            <div className="update-sponsor-component-all-bottons">
                <button 
                className="update-sponsor-component-botton">Ver todos</button>
                <button
                className="update-sponsor-component-botton">Modificar</button>
                <button
                className="update-sponsor-component-botton">Agregar</button>
                <button
                className="update-sponsor-component-botton">Eliminar</button>
            </div>
        </div>
    )
}

export default UpdateSponsorComponent;