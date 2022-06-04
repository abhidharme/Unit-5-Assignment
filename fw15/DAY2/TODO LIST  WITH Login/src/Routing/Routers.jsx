import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes , useRoutes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Todo from '../Components/Todos/Todo'

 const PrivateRoute = ({isAuth , children="nothing"}) =>{
   return isAuth ? children : <Navigate to="/login" />
 }

const Routers = () => {

  const  {isAuth} = useSelector((store)=>store.users)
  console.log(isAuth)
//  const item = JSON.parse(localStorage.getItem('userLoginData'));
// const [auth , setAuth] = useState(false);
// useEffect(()=>{
//     setAuth(item)
// },[])
// localStorage.setItem("userLoginData" , JSON.stringify(isAuth)) || [];
// const isAuth = JSON.parse(localStorage.getItem('userLoginData'));
// console.log(isAuth)

  return (
    <Routes>
    <Route path='/' element={<PrivateRoute isAuth={isAuth} ><Todo/></PrivateRoute>} />
    <Route path='/login' element={<Login/>}  />

    </Routes>

    // const routes = useRoutes([
    //     { path: '/', element: <Todo /> },
     
    // ]);

    // return routes;

  )
}

export default Routers