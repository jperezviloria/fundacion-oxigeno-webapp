import React,{useState} from "react"
import Swal from "sweetalert2"
import {useForm} from "react-hook-form"
import HttpClient from "../../../service/axios"

import CreateUserComponent from "../../../components/privates/userFactory/createUser/CreateUserComponent"
import ChangeUserStatusComponent from "../../../components/privates/userFactory/changeStatus/ChangeUserStatusComponent"
import DeleteUserComponent from "../../../components/privates/userFactory/deleteStatus/DeleteUserComponent"


import "./UserFactory.css"

const UserFactory = () =>{

   

    const [selectionUserFactory, setSelectionUserFactory] = useState(null)

    const selectedCreateComponent = () =>{
        setSelectionUserFactory(<CreateUserComponent setSelectionUserFactory={setSelectionUserFactory} />)
    }

    const selectedUpdateComponent = () =>{
        setSelectionUserFactory(<ChangeUserStatusComponent/>)
    }

    const selectedDeleteComponent = () =>{
        setSelectionUserFactory(<DeleteUserComponent/>)
    }

    return (
        <div className="filter-factory-base">

        <div className="filter-factory">
            <button 
            className="filter-factory-botton"
            onClick={selectedCreateComponent}>Crear</button>
            <button 
            className="filter-factory-botton"
            onClick={selectedUpdateComponent}>Cambiar</button>
            <button 
            className="filter-factory-botton"
            onClick={selectedDeleteComponent}>Eliminar</button>
        </div>
        {selectionUserFactory}
        </div>
    )
}

export default UserFactory;