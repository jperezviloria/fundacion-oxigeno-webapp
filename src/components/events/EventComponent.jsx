import React, {useEffect, useState} from "react"
import HttpClient from "../../service/axios"
import moment from "moment"

import MainYoutubeComponent from "./mainYoutubeComponent/MainYoutubeComponent"
import SmallYoutubeComponent from "./smallYoutubeComponent/SmallYoutubeComponent"

import "./EventComponent.css"

const EventComponent = () =>{

    const [events, setEvents] = useState([])
    

    const gettingEventData = async() =>{
        await HttpClient.get(`/public-event/get/events-with-youtubelinks`)
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
            // <div className={decideMainEvent(indexEvent)}>
            <div className="event-component">
                <div className="event-component-titles">
                <p>{particular.title}</p>
                <p>{moment(particular.dates).format("DD-MM-YYYY")}</p>
                </div>
                <img src={particular.imageurl} alt="" className="event-component-image"/>
                <p className="event-component-description">{particular.description}</p>
                {/* <ul className={decideMainEvent(indexEvent)+"-base-videos"}> */}
                <div className="event-component-base-videos">
                    {(particular.youtubeLink).map((particularYoutubeLink, indexYoutubeLink) =>(
                        decideMainYoutubeLink2(indexEvent, indexYoutubeLink, particularYoutubeLink)
                    ))}
                </div>

            </div>
        ))
    )
}

export default EventComponent;