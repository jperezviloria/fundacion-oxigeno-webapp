import axios from "axios"

const HttpClient = axios.create({
    baseURL: "http://localhost:5000",
    //baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 100000,
    headers:{
        "Content-Type":"application/json"
    }
});


HttpClient.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem("token"));

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