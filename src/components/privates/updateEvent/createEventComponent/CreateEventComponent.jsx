import React , {useState, useEffect}from "react"
import {useForm} from "react-hook-form"
import HttpClient from "../../../../service/axios"
import UploadImageComponent from "./UploadImageComponent"

import "./CreateEventComponent.css"

const CreateEventComponent = ({setChield}) =>{


    const {handleSubmit, register} = useForm()

    const [modifyInfo, setModifyInfo] = useState(false)
    const [newEventResponse, setNewEventResponse] = useState([])
    const [uploadImage, setUploadImage] = useState(false)


    const onSubmitCreateEvent = async(data) =>{
        const eventToCreate = {
            title: data.title,
            description: data.description,
            date: data.date
        }
        console.log(eventToCreate)
        await HttpClient.post(`http://localhost:5000/private-event/save/title-description`,eventToCreate)
        .then((response) =>{
            console.log(response)
            setNewEventResponse(response.data.message)
            setModifyInfo(true)
        })

    }

    useEffect(() =>{

    }, [uploadImage])

    return (
        <div className="create-event-component">
            <h1>Crear Evento</h1>
            {
                !modifyInfo
                ?<form action="" onSubmit={handleSubmit(onSubmitCreateEvent)}>
                    <input 
                    required
                    {...register("title")} 
                    type="text" 
                    placeholder="titulo"/>
                    <input 
                    required
                    {...register("description")} 
                    type="text" 
                    placeholder="descripcion"/>
                    <input 
                    required
                    {...register("date")} 
                    type="date" 
                    />
                    <button
                    type="submit">Crear</button>
                </form>
                :<UploadImageComponent
                idEvent = {newEventResponse.id}
                setUploadImage={setUploadImage}
                setModifyInfo={setModifyInfo}
                setChield={setChield}/>
            }
        </div>
    )
}

export default CreateEventComponent;