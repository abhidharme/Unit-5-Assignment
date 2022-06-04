import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { LoginData } from '../../Redux/LoginRedux/action';


const initState = {
    name: "",
    email: "",
    password: ""
}



const Login = () => {

const [sign , setSign] = useState(initState);
const [emailcheck , setEmail]= useState("");
const [passwordcheck , setPassword] = useState("");
const dispatch = useDispatch();

const  {isAuth} = useSelector((store)=>store.users)
//console.log(token,isAuthenticated)
 if(isAuth){
     return <Navigate to="/" />
 }

const handleLogin = ()=>{
   const cred = {
        emailcheck,
        passwordcheck
    }
    dispatch(LoginData(cred))
}

const handleChange = (e)=>{
    const {id , value} = e.target;
    setSign({...sign , [id]:value}) 
}

const handleSign = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/user" , sign)
    .then(()=>alert("Register successfully"))
}

    return (
        <div>
            <h2>Sign UP</h2>

            <form onSubmit={handleSign} >
            <input type={"text"} placeholder="name" id='name'   onChange={handleChange} />
            <br></br>
                <input type={"email"} placeholder="email" id='email' onChange={handleChange} />
                <br></br>
                <input type={"password"} placeholder="password" id='password'  onChange={handleChange} />
                <br></br>
                <input type={"submit"} value="Submit" id='submit' />
            </form>

            <br></br>
            <hr></hr>
            <h2>Login </h2>
            <div>
            <input type={"text"} placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
            <input type={"password"} placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleLogin} >Login</button>
            </div>


        </div>
    )
}

export default Login