import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

 
  return (
    <div style={{background:"red", display:"flex" , height:"50px" , justifyContent:"space-around"}}>
    <div>
    <Link style={{color:"white"}} to="/" >TODO LIST</Link>
    </div>
    <div>
    <Link style={{color:"white" }}  to="/login">Login</Link>
    </div>
    <div><Link to="/login"  style={{color:"white" }} >Logout</Link></div>
    </div>
  )
}

export default Navbar