import React from "react"

import EmailListComponent from "../../../components/privates/emailList/EmailListComponent"
import ProfileAdminComponent from "../../../components/privates/profileAdmin/ProfileAdminComponent"

import "./AdminPage.css"

const AdminPage = () =>{
    return (
        <div >
            <div className="cuadro0">
                <div className="cuadro1">
                    <EmailListComponent/>
                </div>
                <div className="cuadro2">
                    <ProfileAdminComponent/>
                </div>
                <div className="cuadro3">
                </div>
                <div className="cuadro4">
                </div>
            </div>
            <div>
                <div className="cuadro5">
                </div>
            </div>
        </div>
    )
}


export default AdminPage;