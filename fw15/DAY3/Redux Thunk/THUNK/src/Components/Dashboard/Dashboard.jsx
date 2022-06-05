import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import gitUserdata from '../../Redux/Profile/action';
const Dashboard = () => {

    const [search , setSearch] = useState();  
    const [profile , setProfile] = useState({});
    const { token , username } = useSelector((state)=>state.loginData);




    // const handleSearch = ()=> ()=>{
    //         axios.get(`https://api.github.com/users/${search}`)
    //         .then((res)=>{console.log(res.data)})
    //         .catch((err)=>alert(err.message))
    // }

    useEffect(()=> {
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=> res.json())
        .then((res)=> setProfile(res))
        .catch((err) => console.log(err));
    },[]);


const dispatch = useDispatch()

const handleSearch = ()=>{
    dispatch(gitUserdata(search))
}
const navigate = useNavigate();
  return (
    <div>
       <h1>Dashboard</h1>
       <div>
       <h3>Wlecome {profile.name}</h3>
       <h5>Email: {profile.email}</h5>
       <h5>Mobile: {profile.mobile}</h5>
       <h5>Decsription: {profile.description}</h5>
       </div>
       <hr></hr>
       <br></br>
       <br></br>
       <br></br>
       <input type={"text"} placeholder="Enter user name" onChange={(e)=>setSearch(e.target.value)} />
    <Link to="/"><button onClick={handleSearch} >Search githu2b profile</button></Link>
  {/*<button onClick={()=>navigate("/")} >profile</button>*/}
       <br></br>
       <br></br>
       <br></br>
       <br></br>

       <hr></hr>
    </div>
  )
}

export default Dashboard