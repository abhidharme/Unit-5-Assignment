import axios from "axios";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginLoading = () => ({
    type: LOGIN_LOADING
})

export const loginSuccess = (payload)=>({
    type: LOGIN_SUCCESS,
    payload
})

export const loginError = ()=> ({
    type: LOGIN_FAIL
})

 const login = (cred) => (dispatch)=>{
     dispatch(loginLoading());
     axios.post("https://masai-api-mocker.herokuapp.com/auth/login", cred)
     .then((response)=>dispatch(loginSuccess({username:cred.username , token: response.data.token})))
     .catch((err)=>dispatch(loginError(alert(err.message))))
 } 

 export default login

