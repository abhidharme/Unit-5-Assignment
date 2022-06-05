import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import login from '../../Redux/LoginRedux/action';


const Login = () => {

  const [username , setUsername] = useState("");
  const [password, setPassword] = useState("");

 
  const dispatch = useDispatch();

const handleLogin = ()=>{
  const cred = {
    username,
    password
  }
  dispatch(login(cred))
}

const navi = useNavigate();
const {isAuthenticated} = useSelector((store)=>store.loginData)
//console.log("isAuthenticated",isAuthenticated)
if(isAuthenticated){
return <Navigate to="/dashboard" />
}


  return (
    <div>
    <input type={"text"} placeholder="username" onChange={(e)=>setUsername(e.target.value)} required id="username" value={username} />
    <input type={"text"} placeholder="password" onChange={(e)=>setPassword(e.target.value)} required id="password" value={password} />
    <button onClick={handleLogin}>Login</button>
    <button onClick={()=>navi("/register")} >GO TO SIGNUP</button>
    </div>
  )
}

export default Login