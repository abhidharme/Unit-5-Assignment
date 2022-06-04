export const LOGIN_LOADING = "LOGIN_LOADING"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL  = "LOGIN_FAIL"
export const LOGOUT = "LOGOUT";
import axios from "axios";

export const loginLoading = ()=> ({
  type: LOGIN_LOADING
});

export const loginSuccess = (users) => ({
    type: LOGIN_SUCCESS , 
    payload: users
}) ;

export const loginFail = ()=> ({
    type: LOGIN_FAIL
  });

  
const logout = ()=> ({
  type: LOGOUT
});

export default logout

  export const LoginData  = (cred)=> (dispatch)=>{
    dispatch(loginLoading());
    return axios({
          url: "http://localhost:8080/user",
          method: "GET"
      })
      //.then((res)=>console.log(res.data))
      .then((res) => {
         // console.log("user",res.data, cred)
          res.data.map((el)=>{
              if(el.email == cred.emailcheck && el.password == cred.passwordcheck){
                  dispatch(loginSuccess(el))
                  console.log("yes")
                 
              }
            //   else{
            //       dispatch(loginFail(alert("Invalid Details please try again")))
            //   }
          })
      })
      .catch((err)=>dispatch(loginFail(err.message)))
     
  }
