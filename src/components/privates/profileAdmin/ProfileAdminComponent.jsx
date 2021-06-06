import React , {useState, useEffect, useCallback}from "react"
import HttpClient from "../../../service/axios"
import Swal from "sweetalert2"
import {useDropzone} from 'react-dropzone'

import PersonalCard from "./personalCard/PersonalCard"


import "./ProfileAdminComponent.css"
import UpdateNames from "./updateNames/UpdateNames"

const ProfileAdminComponent = () =>{

    const [personalInformation, setPersonalInformation] = useState([])
    const [modifyInfo, setModifyInfo] = useState(false)
    const [uploadImage, setUploadImage] = useState(false)
    
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const changeInformacion = () =>{
        setModifyInfo(true)
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
    
    useEffect(async() =>{
        await gettingInformationFromLocalStorage()
    },[uploadImage])

    return (
        !modifyInfo
        ?<PersonalCard
        name={personalInformation.name}
        surname={personalInformation.surname}
        email={personalInformation.email}
        urlImage={personalInformation.urlimage}
        modifyInfo={modifyInfo}
        setModifyInfo={setModifyInfo}
        />
        :<UpdateNames
        idUser={personalInformation.id}
        setModifyInfo={setModifyInfo}
        name={personalInformation.name}
        surname={personalInformation.surname}
        setUploadImage={setUploadImage}/>
        // ?<div className="profile-admin-component">
        //     <h2>Hola {personalInformation.name} {personalInformation.surname}</h2>
        //     <img 
        //     src="https://i.imgur.com/Ah3Dyh9.png"
        //     className="profile-admin-component-image" 
        //     alt="" />
        //     <p>{personalInformation.email}</p>
        //     <button
        //     type="button"
        //     className="profile-admin-component-button"
        //     onClick={() => changeInformacion()}>modificar datos</button>
        // </div>
        // :<div className="profile-admin-component">
        //     <h2>Modificar datos</h2>
        //     <div {...getRootProps()}>
        //     <input {...getInputProps()} />
        //     {
        //         isDragActive ?
        //         <p>Drop the files here ...</p> :
        //         <p>Drag 'n' drop some files here, or click to select files</p>
        //     }
        //     </div>
        //     <input type="text" placeholder="nombre" />
        //     <input type="text" placeholder="apellido" />
        //     <p>{personalInformation.email}</p>
        //     <button
        //     type="button"
        //     className="profile-admin-component-button"
        //     onClick={() => changeInformacion()}>modificados</button>
        // </div>
    )
}

export default ProfileAdminComponent;