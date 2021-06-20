import React,{useState, useEffect, useContext} from "react"

import LoginComponent from "../../../components/login/LoginComponent"

import "./LoginPage.css"
import UserAuthContext from "../../../context/userAuth/UserAuthContext";
import {Redirect} from "react-router-dom";

const LoginPage = () =>{

    const {LoginUser, user, isAuthenticated, idRol, changeTrue} = useContext(UserAuthContext)

    const checkIfHaveAuthentication = () =>{
        if(localStorage.getItem("token") != null &&
            localStorage.getItem("logued") != null &&
            localStorage.getItem("email") != null &&
            localStorage.getItem("rol") != null){
            changeTrue()
        }
    }

    const decidedRedict = async() =>{
        const rol = await localStorage.getItem("rol")
        switch(rol){
            case 1:
                return "admin/secure/dashboard"
            case 2:
                return "admin/secure/dashboard"
        }
    }
    useEffect(()=>{
        //checkIfHaveAuthentication()
    },[])

    return (
        <div className="login-page">
            <LoginComponent/>
        </div>
        // !isAuthenticated
        //     ?<div className="login-page">
        //         <LoginComponent/>
        //     </div>
        //     :<Redirect to={ {pathname:`/${decidedRedict()}`}}/>
    )

}

export default LoginPage;