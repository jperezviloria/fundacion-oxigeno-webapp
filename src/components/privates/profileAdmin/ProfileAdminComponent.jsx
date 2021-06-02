import React from "react"

import "./ProfileAdminComponent.css"

const ProfileAdminComponent = () =>{
    return (
        <div className="profile-admin-component">
            <h2>Hola Julio Perez</h2>
            <img 
            src="https://i.imgur.com/Ah3Dyh9.png"
            className="profile-admin-component-image" 
            alt="" />
            <p>perezjulioernesto@gmail.com</p>
            <button
            type="button"
            className="profile-admin-component-button">modificar datos</button>
        </div>
    )
}

export default ProfileAdminComponent;