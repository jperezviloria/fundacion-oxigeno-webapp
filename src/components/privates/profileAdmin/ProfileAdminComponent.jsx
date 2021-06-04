import React , {useState, useEffect}from "react"
import HttpClient from "../../../service/axios"
import Swal from "sweetalert2"

import "./ProfileAdminComponent.css"

const ProfileAdminComponent = () =>{

    const [personalInformation, setPersonalInformation] = useState([])

    const changeInformacion = () =>{
        Swal.fire({
            icon: 'question',
            title: 'Antes de borrar',
            text: 'Confirma para borrar al usuario',
            showCancelButton: true,
            cancelButtonText: 'volver',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
          }).then((result) =>{
                if(result.isConfirmed){
                    //sendWithHttpClient(id)
                    console.log("CONFIRMADO")
                }
          })

    }


    const gettingInformationFromLocalStorage = async() =>{
        console.log(localStorage.getItem("email"))
        const emailByLocalStorage = localStorage.getItem("email")
        await getUserByEmail(emailByLocalStorage);

    }

    const getUserByEmail = async(emailUser) =>{
        await HttpClient.get(`http://localhost:5000/user/getbyemail/${emailUser}`)
        .then((response) =>{
            setPersonalInformation(response.data.data)
            console.log(personalInformation)
        })
    } 
    
    useEffect(() =>{
        gettingInformationFromLocalStorage()
    },[])

    return (
        <div className="profile-admin-component">
            <h2>Hola {personalInformation.name} {personalInformation.surname}</h2>
            <img 
            src="https://i.imgur.com/Ah3Dyh9.png"
            className="profile-admin-component-image" 
            alt="" />
            <p>{personalInformation.email}</p>
            <button
            type="button"
            className="profile-admin-component-button"
            onClick={() => changeInformacion()}>modificar datos</button>
        </div>
    )
}

export default ProfileAdminComponent;