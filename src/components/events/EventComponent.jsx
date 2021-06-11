import React, {useEffect, useState} from "react"
import HttpClient from "../../service/axios"
import moment from "moment"

import MainYoutubeComponent from "./mainYoutubeComponent/MainYoutubeComponent"
import SmallYoutubeComponent from "./smallYoutubeComponent/SmallYoutubeComponent"

import "./EventComponent.css"

const EventComponent = () =>{

    const [events, setEvents] = useState([])
    

    const gettingEventData = async() =>{
        await HttpClient.get(`http://localhost:5000/public-event/get/events-with-youtubelinks`)
        .then((response) =>{
            console.log(response)
            setEvents(response.data.data)


        })
    }

    const decideMainEvent = (position) =>{
        if(position === 0){
            return "event-component"
        }
        else if(position >=1){
            return "not-event-component"
        }
    }

    const decideMainYoutubeLink = (eventPosition, youtubeLinkPosition) =>{
        if(eventPosition === 0 && youtubeLinkPosition ===0){
            return "youtube-link-component"
        }
        else{
            return "not-youtube-link-component"
        }
    }
    const decideMainYoutubeLink2 = (eventPosition, youtubeLinkPosition, particularYoutubeLink) =>{
        if(eventPosition === 0 && youtubeLinkPosition ===0){
            return <MainYoutubeComponent particularYoutubeLink={particularYoutubeLink}/>
        }
        else{
            return <SmallYoutubeComponent particularYoutubeLink={particularYoutubeLink}/>
        }
    }

    useEffect(() =>{
        gettingEventData()
    },[])

    return (
        events.map((particular, indexEvent) =>(
            <div className={decideMainEvent(indexEvent)}>
                <img src={particular.imageurl} alt="" className={decideMainEvent(indexEvent)+"-image"}/>
                <h1>{particular.title}</h1>
                <h3>{moment(particular.dates).format("DD-MM-YYYY")}</h3>
                <p>{particular.description}</p>
                <ul className={decideMainEvent(indexEvent)+"-base-videos"}>
                    {(particular.youtubeLink).map((particularYoutubeLink, indexYoutubeLink) =>(
                        decideMainYoutubeLink2(indexEvent, indexYoutubeLink, particularYoutubeLink)
                        // <>
                        
                        // <p className={decideMainYoutubeLink(indexEvent, indexYoutubeLink)+"-title"}>
                        //     {particularYoutubeLink.name}
                        // </p>
                        // {/* <iframe className="presentation-component-video" src={particularYoutubeLink.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen play ></iframe> */}
                        // {/* <iframe width="420" height="315" src={particularYoutubeLink.link} frameborder="0"></iframe> */}
                        // <iframe className={decideMainYoutubeLink(indexEvent, indexYoutubeLink)+"-particular"} width="560" height="315" src={particularYoutubeLink.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                        
                        
                        // </>
                    ))}
                </ul>

            </div>
        ))
    )
}

export default EventComponent;