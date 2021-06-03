import React from "react"
import Swal from "sweetalert2"
import {useForm} from "react-hook-form"
import axios from "axios"
import HttpClient from "../../../service/axios"

const UserFactory = () =>{

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
            // await axios.post(`http://localhost:5000/private-auth/signup`, newUser)
            // .then(response =>{
            //     console.log(response)
            // })
            const token = localStorage.getItem("token")
            console.log(token)
            await HttpClient.post(`http://localhost:5000/private-auth/signup`, newUser)
            .then(response =>{
                console.log(response)
            })
        }
        
    }


    return (
        <form action="" onSubmit={handleSubmit(onSubmitGenerateUser)}>
            <input 
            {...register("emailUser")} 
            type="text" />
            <input 
            {...register("passwordUser")} 
            type="text" />
            <input 
            {...register("idRol")} 
            type="text" />
            <button>CREAR</button>
        </form>
    )
}

export default UserFactory;