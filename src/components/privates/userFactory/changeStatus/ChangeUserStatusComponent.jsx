import React,{useEffect, useState} from "react"
import Swal from "sweetalert2"
import {useForm} from "react-hook-form"
import HttpClient from "../../../../service/axios"
import Switch from "react-switch";

import "./ChangeUserStatusComponent.css"

const ChangeUserStatusComponent = () =>{

    const [allUsers, setAllUsers] = useState([])
    const [query, setQuery] = useState(false)
    const {register, handleSubmit} = useForm()

    const changeState = async(booleanValue) =>{
        
        return await booleanValue === true ?  false : true
        
    }

    const changeStateSlice = async (data) => {   
        
        const userToChange = {
            id: data.id,
            enable: await changeState(data.enable)
        }
        //console.log(userToChange)
        await sendWithHttpClient(userToChange)
        setQuery(changeState(query))
    }

    const sendWithHttpClient = async(userToChange) =>{
        await HttpClient.put(`/user/change/enable`, userToChange)
        .then(response =>{
            console.log(response)

        })
    }

    const getAllUsers = async() =>{
        await HttpClient.get(`/user/getall`)
        .then(response =>{
            setAllUsers(response.data.data)

        })
    }

    const checkStatus = async(enable) =>{
        return await enable === true ?  true : false
    }

    useEffect(async() =>{
        await getAllUsers()
    },[query])

    return (
        <div className="change-user-status">
            <h1>cambio</h1>
            <ul>
                {
                allUsers.map(particularUser =>(
                    <div className="change-user-status-particular">
                        <li> {particularUser.id} {particularUser.email}</li>
                        {/* <button onClick={console.log(particularUser.id)}>cambiar status</button> */}
                        <Switch
                        {...register("enable")}
                        onChange={(e) => changeStateSlice(particularUser)}  
                        checked={particularUser.enable}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={15}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}/>
                    </div>
                ))
                }
            </ul>
        </div>
    )
}

export default ChangeUserStatusComponent;