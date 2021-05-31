import React from "react"

const SocialMediaComponent = ({style}) =>{
    return (
        <div>
            <img
            className={style} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"/>
            <img
            className={style} 
            src="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-de-icono-de-instagram-by-vexels.png"/>
            <img
            className={style} 
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"/>
            <img 
            className={style}
            src="https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-logotipo-del-icono-de-youtube-by-vexels.png"/>
            <img 
            className={style}
            src="https://img.icons8.com/color/452/twitch--v1.png"/>
        </div>
    )
}

export default SocialMediaComponent;