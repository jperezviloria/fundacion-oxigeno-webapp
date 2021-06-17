import React,{useEffect,useState} from "react"
import Swal from "sweetalert2"
import {useForm} from "react-hook-form"
import HttpClient from "../../../../service/axios"


import "./DeleteUserComponent.css"

const DeleteUserComponent = () =>{

    const [allUsers, setallUsers] = useState([])
    const [query, setQuery] = useState(false)

    const {register, handleSubmit} = useForm()


    const onSubmitDeleteByID = async (id) => {
        
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
                    sendWithHttpClient(id)
                }
          })
        
      
        
    }
        
    const sendWithHttpClient = async(id) =>{
        await HttpClient.delete(`/user/delete/${id}`)
        .then(response =>{
            console.log(response)
            setQuery(true)
        })
    }

    const getAllUsers = async() =>{
        await HttpClient.get(`/user/getall`)
        .then(response =>{
            setallUsers(response.data.data)
        })
    }


    useEffect(() =>{
        getAllUsers()
    },[query])

    return (
        <div className="delete-user">
            <h1>eliminar</h1>
            <ul>
                {
                allUsers.map(particularUser =>(
                    <div className="delete-user-particular">
                        <li> {particularUser.id} {particularUser.email}</li>
                        <button onClick={()=>{onSubmitDeleteByID(particularUser.id)}}>eliminar</button>
                    </div>
                ))
                }
            </ul>
        </div>
    )
}

export default DeleteUserComponent;