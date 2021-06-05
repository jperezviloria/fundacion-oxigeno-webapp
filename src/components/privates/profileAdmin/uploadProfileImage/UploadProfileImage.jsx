import React, {useState, useCallback} from "react"
import {useDropzone} from 'react-dropzone'
import HttpClient from "../../../../service/axios"
import {Redirect} from "react-router-dom"
import "./UploadProfileImage.css"

const UploadProfileImage = ({idUser, setModifyInfo}) =>{ 

    const [query, setQuery] = useState(false)

    const changeInformacion = () =>{
        // setQuery(true)
        console.log("SUBIDO")
    }

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        console.log(file);
    
        const formData = new FormData();
        formData.append("image", file);

        HttpClient.post(`http://localhost:5000/user/update/upload-image/${idUser}`,formData,
        {
            headers:{
              "Content-Type":"multipart/form-data"
            }
        })
        .then(() => {
            console.log("file uploaded succesfully")
            setModifyInfo(false)
            }).catch(err => {
            console.log(err);
        });


      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return (
        !query ?<div className="profile-admin-component">
            <h2>CambiarImagen</h2>
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
            </div>
            <button
            type="button"
            className="profile-admin-component-button"
            onClick={() => changeInformacion()}>modificados</button>
        </div>
        : <Redirect to={ {pathname:`/admin/secure/dashboard`}}/>
    )
}

export default UploadProfileImage;