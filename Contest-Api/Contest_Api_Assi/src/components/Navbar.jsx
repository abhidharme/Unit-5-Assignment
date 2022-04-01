import {useContext,useState} from "react"
import { AuthContext } from '../contexts/Auth_Context'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import axios from "axios";

export default function ButtonAppBar() {

    const [show,setshow]=useState(true);

    const {handlelogin} = useContext(AuthContext)

    const data={
     email: "eve.holt@reqres.in",
    password: "cityslicka"

    }

    const login =()=>{

       console.log(data)

        if(show){
        axios.post("https://reqres.in/api/login",data).then((res)=>{
        console.log(res.data)
        handlelogin(res.data)
        setshow(false)
        
         })
         }

        else{
            setshow(true)
            handlelogin({token:"login"})

            }
          }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Button color="inherit" onClick={()=>(login())}>{show?"login":"logout"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


