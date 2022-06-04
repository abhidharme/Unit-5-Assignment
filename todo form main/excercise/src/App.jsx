
import './App.css'
import { Route , Routes , Link , Navigate } from "react-router-dom"
import { Home } from './comonents/Home'
import { Login } from './comonents/Login'
import { TodosCreate } from './comonents/TodosCreate'
import { useSelector } from 'react-redux'
import { login } from './Redux/Login/action'
const PrivateRoute = ({ isAuthenticated  , children}) =>{
  return isAuthenticated ? children : <Navigate to="/login"  />
}


function App() {

  const { isAuthenticated } = useSelector((state) => state.login);

  return (
    <>
  
    <div>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/login">login</Link>
      <br></br>
      <Link to="/todo">todo</Link>
    </div>
    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path="/" element={
    <PrivateRoute isAuthenticated={isAuthenticated}><Home/></PrivateRoute>} />
    <Route path='/todo' element={<PrivateRoute isAuthenticated={isAuthenticated}><TodosCreate /></PrivateRoute>} />
  </Routes>
  </>
  )
}

export default App
