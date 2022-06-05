import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Register } from '../../Redux/SignUp_Redux/action';

const SignUp = () => {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDesc] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");


  const dispatch = useDispatch();

  const handleSign = () => {
    const payload = {
      name,
      email,
      password,
      username,
      mobile,
      description
    }
    dispatch(Register(payload))
  }

  const {isAuthention} = useSelector((store)=>store.signData);
  console.log("isAuthention",isAuthention)
if(isAuthention){
    return <Navigate to="/login" />
}


const navi = useNavigate()
  return (
    <div>
      <h3>Sign_UP</h3>
      <div>
        <input type={"text"} placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} id="name" />
        <br></br>
        <input type={"email"} placeholder="email" required onChange={(e) => setEmail(e.target.value)} id="email" value={email} />
        <br></br>
        <input type={"text"} placeholder="password" required onChange={(e) => setPassword(e.target.value)} value={password} id="password" />
        <br></br>
        <input type={"text"} placeholder="username" required onChange={(e) => setUsername(e.target.value)} value={username} id="username" />
        <br></br>
        <input type={"number"} placeholder="mobile" required onChange={(e) => setMobile(e.target.value)} value={mobile} id="mobile" />
        <br></br>
        <input type={"text"} placeholder="description" required onChange={(e) => setDesc(e.target.value)} value={description} id="description" />
        <br></br>
        <button onClick={handleSign}>Sign up</button>
        <button onClick={()=>navi("/login")}  >Already registered go to LOGIN</button>
      </div>
    </div>
  )
}

export default SignUp