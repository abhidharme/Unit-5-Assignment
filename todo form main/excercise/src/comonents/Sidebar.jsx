import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../Redux/Login/action'
import { Profile } from './Profile'
import { TagState } from './TagState'


export const Sidebar = ({token , username , todos}) => {

    const dispatch = useDispatch();
  return (
    <div>
        <Profile token= {token} username={username}  />
        <hr>
        </hr>
        <TagState todos={todos} />
        <hr></hr>
        <button onClick={()=>dispatch(logout()) }>LOGout</button>
    </div>
  )
}
