import { useEffect, useState } from "react"
import styled from "styled-components";


const ProfileCard = styled.div`
padding: 25px;

`

export const Profile = ({username , token})=>{
    const [profile , setProfile] = useState({});

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

    //console.log(profile)
    return (
    <ProfileCard>
        <h3>Profile Details</h3>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Username: {profile.username}</p>
        <p>Mobile: {profile.mobile}</p>
        {/* <p>Description: {profile.description}</p> */}
    </ProfileCard>
    )
}