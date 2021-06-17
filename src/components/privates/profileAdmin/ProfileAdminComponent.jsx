import React , {useState, useEffect, useCallback}from "react"
import HttpClient from "../../../service/axios"
import Swal from "sweetalert2"
import {useDropzone} from 'react-dropzone'

import PersonalCard from "./personalCard/PersonalCard"



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
        await HttpClient.get(`/user/getbyemail/${emailUser}`)
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
       
    )
}

export default ProfileAdminComponent;