import React, {useEffect, useContext} from "react"

import HeaderPublic from "../publics/HeaderComponent"
import HeaderPrivateSuperUser from "../privates/superuser/HeaderComponent"
import HeaderPrivateUser from "../privates/user/HeaderComponent"

import UserAuthContext from "../../../../context/userAuth/UserAuthContext"

const HeaderFilter = () =>{


    const {isAuthenticated, idRol} = useContext(UserAuthContext)

    const filterHeader = () =>{
    
        if(isAuthenticated){
            switch(idRol){
                case 1: 
                    return <HeaderPrivateSuperUser/>
        
                case 2:
                    return <HeaderPrivateUser/>
                    
            }    
        }else if(!isAuthenticated) {
            return <HeaderPublic/>
        }

        // switch(isAuthenticated){
        //     case true: 
        //         return <StudentHeader/>
    
        //     case false:
        //         return <PublicHeader/>
                
        // }
    }


    useEffect(()=>{
        
        console.log(idRol)
        filterHeader()

    }, [])



    return (
        <div>
            {
                filterHeader()
            }
        </div>
    )
}

export default HeaderFilter;