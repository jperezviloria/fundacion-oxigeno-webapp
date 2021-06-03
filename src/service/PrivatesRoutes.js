import React, {Component, useContext} from "react"
import {Route, Redirect} from "react-router-dom"
import UserAuthContext from "../context/userAuth/UserAuthContext"

const emailUser = true;

const PrivateRoutes = ({ component: Component, ...opt}) =>{
    const {email} = useContext(UserAuthContext)

    return (<Route 
    {...opt}
    render={(props) =>{
        if(email){
            return <Component{...props}/>;
        }else{
            return (
                <Redirect
                to={{pathname:"/login", state:{from : props.location}}}/>
            )
        }
    }}/>
    );
}

export default PrivateRoutes;