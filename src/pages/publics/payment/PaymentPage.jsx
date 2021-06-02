import React from "react"


import ParticularPaymentComponent from "../../../components/payment/particularPayment/ParticularPaymentComponent"

import "./PaymentPage.css"

const PaymentPage = () =>{
    return (
        <div className="payment-page">
            <p>Desde Fundación Oxígeno seguimos adelante con nuestro programas y proyectos a favor de la población Venezolana.</p>
            <p> Nuestro programa Línea Esperanza sigue beneficiando a más personas en Venezuela e Iberoamerica. </p>
            <p>Tu apoyo es vital para continuar ayudando a más personas.Gracias por ser parte de la transformación de nuestra nación</p>
            <ParticularPaymentComponent/>
        </div>
    )
}

export default PaymentPage;