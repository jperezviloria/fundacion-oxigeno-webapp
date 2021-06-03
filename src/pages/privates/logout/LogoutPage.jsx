import React,{useEffect,useState,useContext} from "react"

import UserAuthContext from "../../../context/userAuth/UserAuthContext"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


  const LogoutPage = () =>{
    const {LogoutUser, user, isAuthenticated} = useContext(UserAuthContext)

    const logoutFunction = () =>{
        LogoutUser()
    }

    useEffect(() =>{
        logoutFunction()
    },[])


      return(
        <Redirect to={ {pathname:`/login`}}/>
      )
  }

  export default LogoutPage;