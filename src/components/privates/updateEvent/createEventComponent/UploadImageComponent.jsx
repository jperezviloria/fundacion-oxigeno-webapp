import React, {useState, useCallback} from "react"
import {useDropzone} from 'react-dropzone'
import HttpClient from "../../../../service/axios"
import {Redirect} from "react-router-dom"
import "./UploadImageComponent.css"

const UploadProfileImage = ({idEvent, setModifyInfo, setUploadImage, setChield}) =>{ 

    const [query, setQuery] = useState(false)

    const changeInformacion = () =>{
        // setQuery(true)
        console.log("SUBIDO")
    }


    const pauseComp = (millis) =>{
        var date = new Date();
        var curDate = null;
        do { curDate = new Date(); }
        while(curDate-date < millis);
    }

    const onDrop = useCallback( async acceptedFiles => {
        const file = acceptedFiles[0];
        console.log(file);
    
        const formData = new FormData();
        formData.append("image", file);

        await HttpClient.put(`/private-event/update/upload-image/${idEvent}`,formData,
        {
            headers:{
              "Content-Type":"multipart/form-data"
            }
        })
        .then(() => {
            console.log("file uploaded succesfully")
            
            // setModifyInfo(false)
            setUploadImage(true)
            //pauseComp(2000)
            setModifyInfo(false)
            setQuery(true)
            setChield(null)
            
            }).catch(err => {
            console.log(err);
        });
        

      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return (
        !query ?<div className="upload-image-event-component">
            <h2>Cambiar Imagen</h2>
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Coloca la imagen del evento aqui ...</p> :
                    <p>Coloca la imagen del evento aqui, o presiona click y seleccione la imagen</p>
            }
            </div>
            <button
            type="button"
            className="upload-image-event-component-button"
            onClick={() => changeInformacion()}>modificados</button>
        </div>
        : <Redirect to={ {pathname:`/admin/secure/dashboard`}}/>
    )
}

export default UploadProfileImage;