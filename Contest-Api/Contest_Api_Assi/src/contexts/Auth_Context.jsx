import {createContext,useState} from "react"

import axios from "axios"

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{

    const [loginstatus, setloginstatus] = useState({token:"login"})

    const handlelogin=(data)=>{

        setloginstatus(data)

    }
    return<AuthContext.Provider
    value={{loginstatus,handlelogin}}
    >{children}
    </AuthContext.Provider>
}
