import React from "react"
//import axios from "axios"
import {useForm} from "react-hook-form"

import "./LoginComponent.css"

const LoginComponent = () =>{

    const {register, handleSubmit} = useForm()

    const onSubmitLogin = async (data) => {
    
        const loginForm = {
          email: data.email,
          password: data.password
        };
        console.log(loginForm)
    }

    return (
        <div className="login-component" onSubmit={handleSubmit(onSubmitLogin)}>
            <h1>Login</h1>
            <form action="">
                <input
                
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
        </div>
    )

}

export default LoginComponent;