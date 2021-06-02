import React from "react"

import ParticularTeamComponent from "../../../components/team/particularTeam/ParticularTeamComponent"

import "./TeamPage.css"

const TeamPage = () =>{

    return (
        <div className="team-page">
            <ParticularTeamComponent/>
            <ParticularTeamComponent/>
            <ParticularTeamComponent/>
        </div>
    )

}

export default TeamPage;