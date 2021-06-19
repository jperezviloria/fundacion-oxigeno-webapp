import React, {useState} from "react"
import HttpClient from "../../../service/axios"

import ParticularDescriptionComponent from "./particularDescriptionEmail/ParticularDescriptionEmailComponent"

import "./EmailListComponent.css"
import { useEffect } from "react/cjs/react.development"


const EmailListComponent = () =>{


    const [emailList, setEmailList] = useState([])
    const [confirmEmail, setConfirmEmail] = useState(false)

    const getEmailListWithEnableFalse = async () =>{
        const nameParticularUrl = "getunchecked"
        await implementingHttpClient(nameParticularUrl)
    }
    
    const getAllEmailList = async() =>{
        const nameParticularUrl = "getall"
        await implementingHttpClient(nameParticularUrl)
    }
    
    const implementingHttpClient = async(particularUrl) =>{
        await HttpClient.get(`/contact-form/${particularUrl}`)
        .then((response) =>{
            console.log(response.data.data)
            setEmailList(response.data.data)

            
        })
    }

    useEffect(async()=>{
        await getEmailListWithEnableFalse()
    },[confirmEmail])

    return (
        <div className="email-list">
            <form action="" className="email-list-filters">
                <button
                onClick={getEmailListWithEnableFalse}
                type="button"
                className="email-list-filters-botton">Pendientes</button>
                <button
                onClick={getAllEmailList}
                type="button"
                className="email-list-filters-botton">Todos</button>
            </form>
            <div className="email-list-particulars">
                {emailList.map((particularEmailList) =>(
                    <ParticularDescriptionComponent 
                    id={particularEmailList.id}
                    name={particularEmailList.name}
                    date={particularEmailList.dates}
                    enable={particularEmailList.enable}
                    setConfirmEmail={setConfirmEmail}/>
                )    
                )}
                {/* <ParticularDescriptionComponent/> */}
                 
            </div>
        </div>
    )
}

export default EmailListComponent;