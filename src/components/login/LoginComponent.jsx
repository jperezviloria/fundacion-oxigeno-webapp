import React,{useState, useContext, useEffect} from "react"
import axios from "axios"
import Swal from "sweetalert2"
import {useForm} from "react-hook-form"
import UserAuthContext from "../../context/userAuth/UserAuthContext"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

import "./LoginComponent.css"

const LoginComponent = () =>{

    const {LoginUser, user, isAuthenticated, idRol} = useContext(UserAuthContext)

    const {register, handleSubmit} = useForm()

    const onSubmitLogin = async (data) => {
    
        if(!data.email){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email is require',
                footer: '<a href>Why do I have this issue?</a>'
              })
                
              }
         else if (!data.password){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is require',
                footer: '<a href>Why do I have this issue?</a>'
              })
            }
        else if(data.email && data.password){
            LoginUser(data)
        }
        const loginForm = {
          email: data.email,
          password: data.password
        };
        console.log(loginForm)
    }


    const decidedRedict = () =>{
        switch(idRol){
            case 1:
                return "admin/secure/dashboard"
            case 2:
                return "admin/secure/dashboard"
        }
    }

    return (
        <div className="login-component" >
            {!isAuthenticated ?
                // <h1>Login</h1>
            <form action="" onSubmit={handleSubmit(onSubmitLogin)}>
                <input
                {...register("email")} 
                className="login-component-input"
                placeholder="username"
                type="text" />
                <input 
                {...register("password")} 
                className="login-component-input"
                placeholder="password"
                type="password" />
                <button className="login-component-button">entrar</button>
            </form>
            :<Redirect to={ {pathname:`/${decidedRedict()}`}}/>
            
            }
            
        </div>
    )

}

export default LoginComponent;