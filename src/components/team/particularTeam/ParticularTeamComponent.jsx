import React, {useState, useEffect} from "react"
import HttpClient from "../../../service/axios"

import "./ParticularTeamComponent.css"

const ParticularTeamComponent = () =>{

    const [team, setTeam] = useState([])

    const getUserWhenHaveTrue = async() =>{
        await HttpClient.get(`http://localhost:5000/public/user/getall`)
        .then((response) =>{
            console.log(response)
            setTeam(response.data.data)
        })
    }

    useEffect(() =>{
        getUserWhenHaveTrue()
    },[])
    return (
        team.map((particular) =>(
            <div className="particular-team-component">
            <img 
            className="particular-team-component-image"
            src={particular.urlimage} 
            alt="particular-profile"/>
            <h3>{particular.name} {particular.surname}</h3>
            
        </div>
        ))
        
    )

}

export default ParticularTeamComponent;