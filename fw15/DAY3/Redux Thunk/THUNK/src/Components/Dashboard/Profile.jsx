import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

const {gituser} = useSelector((state)=>state.gituser)
console.log(gituser)
  return (
    <div>
    <h1>Git-Hub Profile</h1>
    <img src={gituser.avatar_url} style={{width:"120px", height:"120px", borderRadius:"50%"}} />
    <h4>Name: {gituser.name}</h4>
    <h5>Location: {gituser.location}</h5>
    <h6>Bio: {gituser.bio}</h6>
    </div>
  )
}

export default Profile