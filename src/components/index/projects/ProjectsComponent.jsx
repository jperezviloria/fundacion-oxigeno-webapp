import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';

import ParticularProject from "./particularProject/ParticularProject"

import "./ProjectsComponent.css"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


SwiperCore.use([Autoplay,Pagination,Navigation]);

const ProjectsComponent = () =>{
    return (
        <div
        className="project-component-swiper">
            <h1>NUESTROS PROYECTOS</h1>
            <Swiper 
            spaceBetween={30} 
            centeredSlides={true} 
            autoplay={{
            "delay": 2500,
            "disableOnInteraction": true,
            "pauseOnMouseEnter":true}} 
            pagination={{
            "clickable": true}} 
            navigation={true}>
                <SwiperSlide >
                    <ParticularProject
                    imageUrl="https://res.cloudinary.com/protobot/image/upload/v1623427784/lineaesperanza-logo_qxtydn.png"
                    title="Línea Esperanza"
                    description="La Línea Esperanza es un programa de atención On Line que es llevado por Psicólogos Cristianos de Iberoamérica donde se brinda apoyo en el reestablecimiento de la Salud Mental a aquellas personas que necesitan orientación y acompañamiento emocional. Visita nuestra página web: www.lineaesperanza.com"/>
                </SwiperSlide>
                <SwiperSlide>
                <ParticularProject
                    imageUrl="https://res.cloudinary.com/protobot/image/upload/v1623980108/WhatsApp_Image_2021-06-17_at_11.47.03_AM_vltrur.jpg"
                    title="El CEVAB"
                    description="El Centro Venezolano de Atención BioPsicoSocial (CEVAB) es un programa de atención que brinda apoyo y acompañamiento Terapéutico y de Salud Mental y física a la población del Estado Nueva Esparta. El CEVAB es la suma de Voluntades de diversos programas que adelanta la Fundación Oxígeno en unión de otras instituciones como Fundación Al taller del maestro, entre otras. Se centra en brindar apoyo biopsicosocial a la población vulnerable del estado Nueva Esparta."/>
                </SwiperSlide>
                <SwiperSlide>
                    <ParticularProject
                        imageUrl="https://res.cloudinary.com/protobot/image/upload/v1623980423/WhatsApp_Image_2021-06-17_at_1.48.34_PM_vakjop.jpg"
                        title="Trabajo comunitario de sensibilización"
                        description="Programa de trabajo con las comunidades de sensibilización en materia de Trata, tráfico, prostitución, explotación sexual."/>
                </SwiperSlide>
                <SwiperSlide>
                <ParticularProject
                    imageUrl="https://res.cloudinary.com/protobot/image/upload/v1623983139/WhatsApp_Image_2021-06-17_at_1.04.36_PM_gr1aaz.jpg"
                    title="La Fundación Oxígeno cuenta con un Programa psicoeducativo en las instituciones públicas y privadas, con charlas relacionadas con derechos sexuales y reproductivos de los niños, niñas y adolescentes."
                    description="Programa de trabajo con las comunidades de sensibilización en materia de Trata, tráfico, prostitución, explotación sexual."/>
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default ProjectsComponent;