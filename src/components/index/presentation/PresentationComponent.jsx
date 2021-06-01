import React, {useState, useEffect} from "react"
import Aos from "aos";

import "aos/dist/aos.css";
import "./PresentationComponent.css"

const PresentationComponent = () =>{

    useEffect(() =>{
        Aos.init({
            duration: 2000
        })
    },[])

    return (
        <div className="presentation-component">
            <h1 className="presentation-component-title">Acerca de nuestro proyecto</h1>
            <p>Fundación Oxígeno es una ONG que trabaja por los derechos de la niñez y adolescencia de Venezuela, la cual inició sus actividades desde el año 2000, en el estado Táchira y desde la fecha ha desarrollado diversos proyectos en el área, de la mano de organizaciones como: Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR), Comitato Internazionale per lo Svilupo dei Popoli (CISP), Consejo Noruego para los Refugiados (NRC), CEDNA-Táchira, CEDNA-Nueva Esparta, FUNDES, BID, CMDNA-Rafael Urdaneta, CMDNA-San Cristóbal, Organización Internacional para las Migraciones (OIM), CMDNA-Bolívar, entre otras.</p>
            <p>Comenzó su trabajo en el estado Nueva Esparta con el fin de poder brindar orientación integral estratégica a niños, niñas y adolescentes. Y realizó la investigación de la explotación sexual con fines comerciales de niños, niñas y adolescentes (ESCNNA), apoyados por Fundación Renacer de Colombia y ECPAT internacional, y además trabajan para el fortalecimiento y consolidación del Movimiento de Acción Nacional por la Niñez y Adolescencia (MANIA), que agrupa a organizaciones de adolescentes de más de 15 estados de Venezuela apoyados por CECODAP y Save The Children.</p>
            <iframe className="presentation-component-video" src="https://www.youtube.com/embed/qdsQGRZUVCs?controls=0?rel=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen play ></iframe>
            <div className="presentation-component-mision">
                <div 
                data-aos="fade-right"
                data-aos-offset="400"
                data-aos-duration="800">
                    <img 
                    className="presentation-component-mision-image"
                    src="https://cdn.pixabay.com/photo/2020/11/14/14/47/kids-5741934_960_720.png" alt="" />
                </div>
                <div 
                data-aos="fade-left"
                
                data-aos-offset="400"
                data-aos-duration="800">
                    <h2 
                    className="presentation-component-title">Nuestra Misión</h2>
                    <p>Fundación Oxígeno tiene con el propósito difundir los derechos de los niños, niñas y adolescentes, especialmente, en el área sexual. Trabajando con los derechos sexuales y reproductivos, con el propósito de tratar que los adolescentes entiendan la sexualidad de manera responsable, para evitar infecciones de transmisión sexual, iniciación temprana en la sexualidad y embarazo adolescente.</p>
                    <p>Con el fin de garantizar a todos los niños, niñas y adolescentes el ejercicio y disfrute pleno y efectivo de sus derechos humanos a una información adecuada que esté acorde con su desarrollo integral y a la salud, Fundación Oxígeno participó desde en el inicio en la ley que regula el uso de Internet, video juegos y otros multimedia, la cual fue aprobada por la Asamblea Nacional de la República Bolivariana de Venezuela, el 25 de marzo de 2006.</p>
                </div>
            </div>
            
        </div>
    )
}

export default PresentationComponent;