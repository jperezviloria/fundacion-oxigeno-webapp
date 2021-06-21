import React, {useState} from "react"
import HttpClient from "../../../service/axios"
import {useForm} from "react-hook-form"
import {Redirect, Route} from "react-router-dom"

import "./ParticularPaymentComponent.css"

const ParticularPaymentComponet = () =>{

    const [paypalUrl, setPaypalUrl] = useState("")
    const [query, setQuery] = useState(false)

    const {register, handleSubmit} = useForm()

    const onSubmitPayment = async (data) => {
    
        const payment = {
            value: data.value
        };
        console.log(payment)
        console.log(typeof(payment.value))
        await HttpClient.post(`/paypal/create-payment`,payment)
        .then((response) =>{
            console.log(response.data.data.links[1].href)
            setPaypalUrl(response.data.data.links[1].href)
            setQuery(true)
        })
    }


    return (
        
        !query?<div className="particular-payment">
            <p>Tu donacion ayuda a nuestro proyecto</p>
            <form
            onSubmit={handleSubmit(onSubmitPayment)}
            className="particular-payment-form" 
            action="">
                <input 
                {...register("value")} 
                className="particular-payment-input"
                type="text" 
                placeholder="cantidad" />
                <button 
                className="particular-payment-button"
                type="submit"
                > DONAR</button>
            
            </form>
        </div>
        // :window.location.href = paypalUrl
        :
            <>
                {window.open(paypalUrl, '_blank')}
                <h1>Tu donación está en proceso</h1>
            </>

       
    )
}

export default ParticularPaymentComponet;