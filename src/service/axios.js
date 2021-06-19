import axios from "axios"
import {config as dotenv} from "dotenv"
dotenv();

const HttpClient = axios.create({
    // baseURL: process.env.FUNDACION_OXIGENO_REACT_APP_BACKEND_URL,
    baseURL: "http://localhost:5000",
    timeout: 100000,
    headers:{
        "Content-Type":"application/json"
    }
});


HttpClient.interceptors.request.use(
    (config) => {
        // const token = JSON.parse(localStorage.getItem("token"));
        const token = localStorage.getItem("token")
        const header = token === null ? "" : "Bearer " + token;
        config.headers.Authorization = header;
        return config;
    },
    function(error){
        console.log("ERROR -> interceptor request");
        console.log(error);
        return Promise.reject(error)
    }
);


export default HttpClient;