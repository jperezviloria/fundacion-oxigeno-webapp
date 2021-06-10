import React, {useState, useEffect} from "react"
import HttpClient from "../../../../service/axios"
import Swal from "sweetalert2"
import moment from "moment"
import ButtonAddYoutubeLink from "./modalAddYoutubeLink/ButtonAddYoutubeLink"
import ButtonToModifyYoutubeLink from "./modalModifyYoutubeLink/ButtonToModifyYoutubeLink"
import "./YoutubeLinksComponent.css"


const YoutubeLinksComponent = () =>{


    const [events, setEvents] = useState([])
    const [query, setQuery] = useState(false)

    const allEvents = async() =>{
        await HttpClient.get(`http://localhost:5000/private-event/getall`)
        .then((response) =>{
            setEvents(response.data.data)
            console.log(response.data.data)
        })
    }

    const addYoutubeLink = async(id) =>{
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
                    //sendWithHttpClient(id)
                    console.log("agregar")
                    setQuery(true)
                }
          })
    }
    const modifyYoutubeLink = async(id) =>{
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
                    //sendWithHttpClient(id)
                    console.log("modificar")
                    setQuery(true)
                }
          })
    }

    const sendWithHttpClient = async (id) =>{
        await HttpClient.delete(`http://localhost:5000/private-event/deletebyid/${id}`)
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
            <div className="youtube-links-event-component">
                <img src={gettingImage(particularEvent.imageurl)} alt="" />
                <p>{particularEvent.title}</p>
                <p>{moment(particularEvent.dates).format("DD/MM/YYYY")}</p>
                {/* <button 
                className="youtube-links-event-component-button"
                onClick={() => addYoutubeLink(particularEvent.id)}>🟢</button>
                <button 
                className="youtube-links-event-component-button"
                onClick={() => modifyYoutubeLink(particularEvent.id)}>🟡</button> */}
                <ButtonAddYoutubeLink
                message="agregar"
                internalMessage="agregar links de youtube"
                id={particularEvent.id}/>
                <ButtonToModifyYoutubeLink
                message="modificar"
                internalMessage="modificar links de youtube"
                id={particularEvent.id}/>
            </div>
        ))}
        </div>
    )
}


export default YoutubeLinksComponent;