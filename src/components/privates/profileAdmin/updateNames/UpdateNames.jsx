import React, {useState} from "react"
import {useForm} from "react-hook-form"

import HttpClient from "../../../../service/axios"
import UploadProfileImage from "../uploadProfileImage/UploadProfileImage"
import "./UpdateNames.css"

const UpdateNames = ({idUser,setModifyInfo, name, surname, setUploadImage}) =>{ 


    const {register, handleSubmit} = useForm()

    const [query, setQuery] = useState(false)

    const changeInformacion = async(data) =>{
        
        const userUpdated ={
            idUser: idUser,
            name: data.name,
            surname: data.surname
        }
        console.log(userUpdated)
        await updateNameAndSurnameById(userUpdated)
        //setQuery(true)
    }

    const updateNameAndSurnameById = async(userUpdated) =>{

        await HttpClient.put(`http://localhost:5000/user/update/nameandsurname/`,userUpdated)
        .then((response) =>{
            if(response.status === 200){
                setQuery(true)
            }
            else if (response.status != 200){
                console.log("NO SE HA MODIFICADO")
            }
        })
    } 


    return (
        !query 
        ?<form 
        className="profile-admin-component" 
        onSubmit={handleSubmit(changeInformacion)}>
            <h2>Modificar datos</h2>
            <input 
            {...register("name")} 
            type="text"             
            placeholder="nombre" />
            <input 
            {...register("surname")} 
            type="text"     
            placeholder="apellido" />
            <button
            type="submit"
            className="profile-admin-component-button"
            >modificados</button>
        </form>
    :<UploadProfileImage 
    idUser = {idUser}
    setModifyInfo = {setModifyInfo}
    setUploadImage={setUploadImage}/>
    )
}

export default UpdateNames;