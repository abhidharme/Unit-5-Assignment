import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import  logout  from '../../Redux/LoginRedux/action';

const Navbar = () => {

  const dispatch = useDispatch();
 
  return (
    <div style={{background:"red", display:"flex" , height:"50px" , justifyContent:"space-around"}}>
    <div>
    <Link style={{color:"white"}} to="/" >TODO LIST</Link>
    </div>
    <div>
    <Link style={{color:"white" }}  to="/login">Login</Link>
    </div>
    <div><Link to="/login" onClick={()=>dispatch(logout())}  style={{color:"white" }} >Logout</Link></div>
    </div>
  )
}

export default Navbar