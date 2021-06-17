import React, {useState, useEffect} from "react"
import HttpClient from "../../../../service/axios"
import Swal from "sweetalert2"
import moment from "moment"

import "./ChangeStatusEventComponent.css"

const ChangeStatusEventComponent = ({setChield}) =>{

    const [events, setEvents] = useState([])
    const [query, setQuery] = useState(false)

    const allEvents = async() =>{
        await HttpClient.get(`/private-event/get/withstatusfalse`)
        .then((response) =>{
            setEvents(response.data.data)
            console.log(response.data.data)
        })
    }
    const changeStatusParticularEvent = async(id) =>{
        Swal.fire({
            icon: 'question',
            title: 'Antes de activar',
            text: 'Confirma para activar el evento',
            showCancelButton: true,
            cancelButtonText: 'volver',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, activar!'
          }).then((result) =>{
                if(result.isConfirmed){
                    sendWithHttpClient(id)
                    setQuery(true)
                    setChield(true)
                }
          })
    }

    const sendWithHttpClient = async (id) =>{
        await HttpClient.put(`/private-event/update/change-true-status/${id}`)
        .then(response =>{
            console.log(response)
            
            
        })
    }
    const gettingImage = (image) =>{
        if(image === null){
            return "https://img.icons8.com/pastel-glyph/2x/cancel.png"
        }
        else if(image != null){
            return image
        }
    }

    useEffect (() =>{
        allEvents()
    },[query])


    return (
        <div className="update-management-chield">
            {events.map(particularEvent => (
            <div className="change-status-event-component">
                <img src={gettingImage(particularEvent.imageurl)} alt="" />
                <p>{particularEvent.title}</p>
                <p>{moment(particularEvent.dates).format("DD/MM/YYYY")}</p>
                <button 
                className="change-status-event-component-button"
                onClick={() => changeStatusParticularEvent(particularEvent.id)}>Activar</button>
            </div>
        ))}
        </div>
    )
}

export default ChangeStatusEventComponent;