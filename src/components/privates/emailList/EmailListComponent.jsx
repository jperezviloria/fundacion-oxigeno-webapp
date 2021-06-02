import React from "react"

import ParticularDescriptionComponent from "./particularDescriptionEmail/ParticularDescriptionEmailComponent"

import "./EmailListComponent.css"


const EmailListComponent = () =>{
    return (
        <div>
            <form action="" className="email-list-filters">
                <button
                className="email-list-filters-botton">Pendientes</button>
                <button
                className="email-list-filters-botton">Todos</button>
                <button
                className="email-list-filters-botton">Contestados</button>
            </form>
            <div className="email-list-particulars">
                <ParticularDescriptionComponent/>
                <ParticularDescriptionComponent/>
                <ParticularDescriptionComponent/>
                <ParticularDescriptionComponent/>
                <ParticularDescriptionComponent/>   
                <ParticularDescriptionComponent/>
                <ParticularDescriptionComponent/>
                <ParticularDescriptionComponent/>
                <ParticularDescriptionComponent/>
                <ParticularDescriptionComponent/>    
            </div>
        </div>
    )
}

export default EmailListComponent;