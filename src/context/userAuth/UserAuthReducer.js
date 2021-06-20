import {LOGIN, LOGOUT, CHANGETRUE} from "../types"

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case LOGIN:
            localStorage.setItem("email", payload.user.email);
            localStorage.setItem("token", payload.token);
            localStorage.setItem("logued", true);
            localStorage.setItem("rol", payload.user.idrol);
            return{
                ...state,
                email: payload.user.email,
                token: payload.token,
                isAuthenticated: true,
                idRol: payload.user.idrol,
            }
        case LOGOUT:
            // why always clear localstorage?
            localStorage.clear()
            return{
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                idRol: null,
            }
        case CHANGETRUE:
            return{
                ...state,
                isAuthenticated: true,
            }
        default:
            return state;
    }
}