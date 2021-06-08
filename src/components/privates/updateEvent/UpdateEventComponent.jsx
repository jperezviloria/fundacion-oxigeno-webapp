import React, {useState} from "react"

import CreateEventComponent from "./createEventComponent/CreateEventComponent"
import DeleteEventComponent from "./deleteEventComponent/DeleteEventComponent"
import ChangeStatusComponent from './changeStatusEventComponent/ChangeStatusEventComponent'

import "./UpdateEventComponent.css"


const UpdateEventComponent = () =>{

    const [query, setQuery] = useState(false)
    const [chield, setChield] = useState(null)


    const implementCreate = () =>{
        setQuery(true)
        return setChield(<CreateEventComponent setChield={setChield}/>)
    }

    const implementDelete = () =>{
        setQuery(true)
        return setChield(<DeleteEventComponent/>)
    }

    const implementChangeStatus = () =>{
        setQuery(true)
        return setChield(<ChangeStatusComponent setChield={setChield}/>)
    }
    const implementUpdateTitle = () =>{
        setQuery(true)
        return setChield(<h1>update</h1>)
    }

    const implementYoutubeLinks = () =>{
        setQuery(true)
        return setChield(<h1>youtube</h1>)
    }




    return (
        <div className="event-component">
            <h1>Administrar Eventos</h1>
            <div className="event-component-all-bottons">
                <button 
                onClick={implementCreate}
                className="event-component-botton">Agregar Evento</button>
                <button
                onClick={implementDelete}
                className="event-component-botton">Eliminar Evento</button>
                <button
                onClick={implementChangeStatus}
                className="event-component-botton">Activar Evento</button>
                <button
                onClick={implementUpdateTitle}
                className="event-component-botton">Modificar Titulo o Descripcion</button>
                <button
                onClick={implementYoutubeLinks}
                className="event-component-botton">Link de Youtube</button>
                
            </div>
            {!query
            ?null
            :chield}
            
        </div>
    )    
}

export default UpdateEventComponent;
