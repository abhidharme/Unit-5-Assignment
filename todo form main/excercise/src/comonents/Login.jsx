import React from "react"
import { login } from "../Redux/Login/action";
import { useDispatch , useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Login = ()=> {

const [username , setUsername] = React.useState("");
const [password , setPassword]  = React.useState("");
const dispatch = useDispatch();

const {isAuthenticated,token} = useSelector((state) => state.login);
//console.log(token,isAuthenticated)


const handleSubmit = ()=>{
    const cred = {
        username,
        password
    }
   // console.log(payload);
   dispatch(login(cred))
};

if(isAuthenticated){
    return <Navigate to="/"/>
}

    return (
        <div>

         <input type="text"
         placeholder="enter username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
           />
           <br>
           </br>
           <input type="text"
           placeholder="Enter password"
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
            />
            <br></br>
            <button onClick={handleSubmit}>login</button>

        </div>
    )
}