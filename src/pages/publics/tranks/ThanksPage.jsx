import React from "react"
import {Link} from "react-router-dom";

import "./ThanksPage.css"

const ThanksPage = () =>{
    return (
       <div className="thanks-page-base">
           <img
               className="thanks-page-image"
               src="https://res.cloudinary.com/protobot/image/upload/v1622662918/qjlfhjzrinyyb6nlx74p.png"/>
           <h1 className="thanks-page-text">DE PARTE DE LA FUNDACION OXIGENO TE DECIMOS MUCHAS GRACIAS POR EL APOYO</h1>
           <Link
               className="thanks-page-button"
               to="/" >Ir al Inicio</Link>
       </div>
    )
}

export default ThanksPage;