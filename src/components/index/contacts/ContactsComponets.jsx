import React, {useState} from "react"
import HttpClient from "../../../service/axios"
import {useForm} from "react-hook-form"

import SocialMediaComponent from "../../common/socialMedia/SocialMedia"

import ListOfCountries from "./ListOfCountries"

import "./ContactsComponents.css"

const ConstactsComponent = () =>{

    const {register, handleSubmit} = useForm()

    const [names, setNames] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [description, setDescription] = useState("")

    const onSubmitContacts = async (data) => {
    
        const constactsForm = {
            name: data.names,
            email: data.email,
            phone: data.phone,
            description: data.description,
            country: data.country
        };
        
        console.log(constactsForm)
        await HttpClient.post(`http://localhost:5000/contact-form/smtp/send`, constactsForm)
        .then(() =>{
        setNames("")
        setEmail("")
        setPhone("")
        setDescription("")
        })
    }

    return (
        <div className="contacts-components">
            <h1>CONTACTANOS</h1>
            <p>telefono: +66 11 45454545</p>
            <p>emailo: oxigeno@email.com</p>
            <SocialMediaComponent
            style="contacts-components-images"/>
            <form className="contacts-components-form" onSubmit={handleSubmit(onSubmitContacts)}>
                <input
                {...register("names")} 
                value={names}
                onChange={(e) => setNames(e.target.value)}
                className="contacts-components-inputs" 
                required
                type="text" 
                placeholder="nombre y apellido *" />
                <input 
                {...register("email")}
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contacts-components-inputs" 
                type="text" 
                placeholder="email *" />
                <input 
                {...register("phone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                className="contacts-components-inputs" 
                type="text" 
                placeholder="telefono" />
                <ListOfCountries
                register={register}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style="contacts-components-list-countries"/>
                <textarea 
                {...register("description")} 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="contacts-components-inputs-description" 
                type="text" 
                placeholder="descripcion" />
                <button 
                className="contacts-components-button"
                type="submit">ENVIAR </button>
            </form>
        </div>
    )
}


export default ConstactsComponent;