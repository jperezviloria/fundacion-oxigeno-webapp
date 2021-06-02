import React from "react"
import "./FooterComponent.css"

const FooterComponent = () =>{
    return (
        <div className="footer-julioperez">
            <div>
                <p>
                    © 2021 FUNDACION OXIGENO BY <a className = "footer-julioperez-href" href="www.protobot.dev">JULIO PEREZ </a> 
                    - SOFTWARE DEVELOPER
                </p>
            </div>
            <div className="footer-julioperez-all-images">
                <img
                className="footer-julioperez-images" 
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQEQ_A5PK1TODQ/company-logo_200_200/0/1618621958527?e=2159024400&v=beta&t=JH5VQ-0IhXOYsqYIJkpsmmeDmhqR9YRcjgZmclI92CY"
                alt="protobot" />
                <img
                className="footer-julioperez-images" 
                src="https://www.pngitem.com/pimgs/m/254-2545120_gray-github-icon-png-transparent-png.png" 
                alt="github-protobot"/>
                <img
                className="footer-julioperez-images" 
                src="https://www.pinclipart.com/picdir/big/366-3665404_instagram-logo-grey-dark-gray-instagram-icon-clipart.png" 
                alt="instagram-protobot"/>
                <img
                className="footer-julioperez-images" 
                src="https://www.cafelapalma.com/wp-content/uploads/2015/12/facebook-logo-grey.png" 
                alt="facebook-protobot"/>
                
            </div>
            
        </div>
    )
}

export default FooterComponent;