import React from "react"

const SocialMediaComponent = ({style}) =>{
    return (
        <div>
            <a href="https://www.facebook.com/ONGOxigeno">
            <img
            className={style} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
            alt="facebook"/>
            </a>
            <a href="https://www.instagram.com/oxigenovenezuela/">
            <img
            className={style} 
            src="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-de-icono-de-instagram-by-vexels.png"
            alt="instagram"/>
            </a>
            
        </div>
    )
}

export default SocialMediaComponent;