import React from "react"
import SloganComponent from "../../components/index/slogan/SloganComponent"
import PresentationComponent from "../../components/index/presentation/PresentationComponent"
import ProjectComponent from "../../components/index/projects/ProjectsComponent"
import SponsorComponent from "../../components/index/sponsor/SponsorComponent"
import ContactsComponent from "../../components/index/contacts/ContactsComponets"

import "./IndexPage.css"

const IndexPage = () =>{
    return (
        <div className="index-page">
            <SloganComponent/>
            <PresentationComponent/>
            <ProjectComponent/>
            <SponsorComponent/>
            <ContactsComponent/>
        </div>
    )
}

export default IndexPage;