import axios from "axios";

export const SINGUP_LOADING = "SINGUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";


export const signLoading = () => ({
    type: SINGUP_LOADING
})

export const singSuccess = (payload) => ({
    type: SIGNUP_SUCCESS,
    payload
})

export const signError = () => ({
    type: SIGNUP_FAIL
})

export const Register = ( name, email, password, username, mobile, description ) => (dispatch) => {
    dispatch(signLoading());
    fetch(" https://masai-api-mocker.herokuapp.com/auth/register" , {
       method: "POST",
       body: JSON.stringify(name, email , password , username , mobile , description),
       headers: {
           "Content-Type" : "application/json"
       }
   }).then((res) => res.json())
   .then((res) =>{  
       dispatch(singSuccess(name, email , password , username , mobile , description))
     alert("Successfuly Registered")
   }) 
        .catch((err) => {
            dispatch(signError(alert(err.message)))
        })
}

