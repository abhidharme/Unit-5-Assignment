import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard/Dashboard'
import Profile from '../Components/Dashboard/Profile'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp'

const PrivateRoute = ({ isAuthenticated  , children=""}) =>{
  return isAuthenticated ? children : <Navigate to="/login"  />
}


const Routers = () => {


const { isAuthenticated } = useSelector((state)=>state.loginData)

  return (
    <div>
    <Routes>
    <Route path='/dashboard' element={<PrivateRoute isAuthenticated={isAuthenticated} ><Dashboard/></PrivateRoute>} />
    <Route path='/register' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<Profile/>} />
    </Routes>
    </div>
  )
}

export default Routers