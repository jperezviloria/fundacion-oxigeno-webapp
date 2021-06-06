import React,{useEffect} from "react"
import Swal from "sweetalert2"
import {useForm} from "react-hook-form"
import HttpClient from "../../../../service/axios"

import "./CreateUserComponent.css"

const CreateUserComponent = () =>{

    const {register, handleSubmit} = useForm()


    const onSubmitGenerateUser = async (data) => {
    
        if(!data.emailUser){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email is require',
                footer: '<a href>Why do I have this issue?</a>'
              })
                
              }
         else if (!data.passwordUser){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is require',
                footer: '<a href>Why do I have this issue?</a>'
              })
            }
        else if (!data.idRol){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The Rol is require',
                footer: '<a href>Why do I have this issue?</a>'
                })
            }
        else if(data.emailUser && data.passwordUser && data.idRol ){
            const newUser = {
                emailUser: data.emailUser,
                passwordUser: data.passwordUser,
                idRol: parseInt(data.idRol)
            }
            console.log(newUser)
            const token = localStorage.getItem("token")
            console.log(token)
            await HttpClient.post(`http://localhost:5000/private-auth/signup`, newUser)
            .then(response =>{
                console.log(response)
            })
        }
        
    }

    const getAllUsers = async() =>{
        await HttpClient.get(`http://localhost:5000/user/getall`)
        .then(response =>{
            console.log(response)
        })
    }


    useEffect(() =>{
        getAllUsers()
    },[])





    return (
        <form 
        className="user-factory"
        onSubmit={handleSubmit(onSubmitGenerateUser)}>
            <h1>CREANDO</h1>
            <input 
            className="user-factory-input"
            {...register("emailUser")} 
            placeholder="email"
            type="text" />
            <input 
            className="user-factory-input"
            {...register("passwordUser")} 
            placeholder="password"
            type="text" />
            {/* <input 
            {...register("idRol")}
            
            type="text" /> */}
            <select
            className="user-factory-input"
            {...register("idRol")} 
            >
                <option value="0">seleccione</option>
                <option value="1">super administrador</option>
                <option value="2">usuario</option>
                
            </select>
            <button
            className="user-factory-button">CREAR</button>
        </form>
    )
}

export default CreateUserComponent;