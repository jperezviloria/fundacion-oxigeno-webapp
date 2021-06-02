import React from "react"
//import axios from "axios"
import {useForm} from "react-hook-form"

import "./ParticularPaymentComponent.css"

const ParticularPaymentComponet = () =>{

    const {register, handleSubmit} = useForm()

    const onSubmitPayment = async (data) => {
    
        const payment = {
            value: data.value
        };
        console.log(payment)
    }


    return (
        <div className="particular-payment">
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
                type="submit"> DONAR</button>
            </form>
        </div>
    )
}

export default ParticularPaymentComponet;