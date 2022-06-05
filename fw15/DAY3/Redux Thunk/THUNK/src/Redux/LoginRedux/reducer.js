import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "./action";

const initState = {
    loading: false,
    isAuthenticated: false,
    token: "",
    username: "",
    error: ""
}

const login_Reducer = (store=initState , {type, payload}) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...store,
                loading: true,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...store,
                loading: false,
                isAuthenticated: true,
                token: payload.token,
                username: payload.username,
                error: false
            }
        case LOGIN_FAIL:
            return {
                ...store,
                loading:false, 
                isAuthenticated: false,
                token: "",
                username: "",
                error: true
            }
        default:
            return store;
    }
}

export default login_Reducer;