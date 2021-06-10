import React, {useState} from "react"
import {Link, Redirect} from "react-router-dom"
import Swal from "sweetalert2"
import HttpClient from "../../../../../../service/axios"

import ChangeName from "../changeName/ChangeName"
import ChangeLink from "../changeLink/ChangeLink"
import ChangePosition from "../changePosition/ChangePosition"
import DeleteYoutubeLink from "../deleteYoutubeLink/DeleteYoutubeLink"

import "./SelectorFilter.css"

const SelectorFilter = ({closeModal, style, idToUse}) =>{

    const [query, setQuery] = useState(false)
    const [chield, setChield] = useState(null)


    const implementDelete = () =>{
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
                    HttpClient.delete(`http://localhost:5000/private-event/delete/youtubelinkbyid/${idToUse}`)
                    .then(response =>{
                        console.log(response)
                        setChield(null)
                        closeModal()
                    })
                }
          })
    }

    const implementChangeName = () =>{
        setQuery(true)
        return setChield(<ChangeName idToUse={idToUse} closeModal={closeModal}/>)
    }
    const implementChangeLink = () =>{
        setQuery(true)
        return setChield(<ChangeLink idToUse={idToUse} closeModal={closeModal}/>)
    }

    const implementChangePosition = () =>{
        setQuery(true)
        return setChield(<ChangePosition idToUse={idToUse} closeModal={closeModal}/>)
    }

    return (
        !query
        ?<div className="selector-filter">
        <button
        onClick={implementChangePosition}>cambiar posicion</button>
        <button
        onClick={implementChangeLink}>cambiar link</button>
        <button
        onClick={implementChangeName}>cambiar nombre</button>
        <button
        onClick={implementDelete}>eliminar link</button>
        <div className="modal-btns">
        <Link to="/admin/secure/dashboard">
          <button onClick={closeModal}>Cerrar</button>
        </Link>
      </div>
        </div>
        
        :chield
    )
}

export default SelectorFilter;
