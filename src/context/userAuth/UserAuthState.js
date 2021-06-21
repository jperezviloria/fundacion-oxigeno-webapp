import React, {useReducer} from "react"
import UserAuthContext from "./UserAuthContext"
import UserAuthReducer from "./UserAuthReducer"
import axios from "axios"
import Swal from "sweetalert2"
import HttpClient from "../../service/axios"


const UserAuthState = (props) =>{


    const initialState = {
        email: null,
        token: null,
        isAuthenticated: false,
        idRol: null,
    }

    const [state, dispatch] = useReducer(UserAuthReducer, initialState)

    const LoginUser = async(userAuth) =>{

        const response = await HttpClient.post(`/auth/signin`, userAuth)
        console.log(response.data)
        if(response.data.status === 400){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.data.message,
                footer: '<a href>Why do I have this issue?</a>'
              })
        }
        else if (response.data.status === 200){
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Entraste al sistema',
                text: response.data.message,
                
              })
        }
    }

    const changeTrue = () =>{
        dispatch({
            type:'CHANGETRUE',
            payload: initialState
        })
    }
    const LogoutUser = () =>{
        dispatch({
            type: 'LOGOUT',
            payload: initialState
        })
        
        
    }

    return (
        <UserAuthContext.Provider value = {{
            email: state.email,
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            idRol: state.idRol,
            LoginUser,
            LogoutUser,
            changeTrue,
        }}>
            {props.children}
        </UserAuthContext.Provider>
    )

}

export default UserAuthState;