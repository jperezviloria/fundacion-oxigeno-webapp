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
                <a href="https://protobot.dev"
                   target="_blank"
                   rel="noopener noreferrer">
                <img
                className="footer-julioperez-images" 
                src="https://res.cloudinary.com/protobot/image/upload/v1624291408/Protobot2_qdpx39.png"
                alt="protobot" />
                </a>
                <a href="https://www.linkedin.com/in/jperezviloria/"
                   target="_blank"
                   rel="noopener noreferrer">
                <img
                className="footer-julioperez-images" 
                src="https://res.cloudinary.com/protobot/image/upload/v1624291467/dUHYq7K_ljgvfd.png"
                alt="linkedin-julio-perez"/>
                </a>
                <a href="https://github.com/julioperezdev"
                   target="_blank"
                   rel="noopener noreferrer">
                <img
                className="footer-julioperez-images" 
                src="https://res.cloudinary.com/protobot/image/upload/v1624291396/github_PNG58_eucah0.png"
                alt="github-protobot"/>
                </a>
                <a href="https://www.instagram.com/julioperez.dev/"
                   target="_blank"
                   rel="noopener noreferrer">
                <img
                className="footer-julioperez-images" 
                src="https://res.cloudinary.com/protobot/image/upload/v1624291407/instagram-logo_ogbhuo.png"
                alt="instagram-protobot"/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=1227615902"
                   target="_blank"
                   rel="noopener noreferrer">
                <img
                className="footer-julioperez-images" 
                src="https://res.cloudinary.com/protobot/image/upload/v1624291401/facebook_logos_PNG19751_uvvdve.png"
                alt="facebook-protobot"/>
                </a>
            </div>
            
        </div>
    )
}

export default FooterComponent;