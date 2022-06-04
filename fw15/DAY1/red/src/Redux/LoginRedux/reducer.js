import { useEffect } from "react";
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "./action";

const initState = {
    loading: false,
    isAuth: false,
    users: null,
    error: false
}


 const loginreducer = (store = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...store,
                loading: true,
                isAuth: false,
                error: false
            };
        case LOGIN_SUCCESS:
           // console.log(users)
            localStorage.setItem("userData", JSON.stringify({isAuth:true}))
            return {
                ...store,
                loading: false,
                isAuth: true,
                users: {...payload} ,
                error: false
                
            }
        case LOGIN_FAIL:
            return {
                ...store,
                loading: false,
                isAuth: false,
                users:null,
                error: true
            }
            default:
            return store;
    }
}

export default loginreducer