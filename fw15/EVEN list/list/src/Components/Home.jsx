import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Home = () => {
  
    const [arrsort, setArrsort]= useState("");
    const [products , setProducts] = useState([]);
    const [page , setPage] = useState(1);
    useEffect(()=>{
       axios.get("http://localhost:8080/prod",{
           params:{
            _page: page,
            _limit: 6
           }
       })
       .then((res)=>setProducts(res.data))
      
    },[page])


// const sortarr = (e)=>{
//   setArrsort(e.target.value)
// }

// useEffect(()=>{
//    sortarr();
//    console.log(arrsort)
// },[arrsort])




console.log(arrsort)

    return (
    <div>
   
   
    <div>
  <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit" component="div">
        Products
      </Typography>
      <div>
      <select onClick={(e)=>setArrsort(e.target.value)} style={{width:"350px" , borderRadius:"5px",  marginTop:"20px" ,  border:"none", outline:"none" , height:"30px" , boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}} >
      <option value="">Sort By</option>
            <option value='asc'>Price:Low-High</option>
            <option value='desc'>Price:High to low</option>
            <option value="rate">Rating: High to low</option>
            <option value="A - Z">A-Z</option>
        </select>
      </div>
    </Toolbar>
  </AppBar>
</Box>
  </div>
        
        <ImageList >
        <ImageListItem key="Subheader" cols={3}  style={{ height: 'auto'  }}>
        </ImageListItem >
        {products.map((item) => (
          <ImageListItem  className="hov" style={{boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",width:"250px" , padding:"10px" , height:"80%" }} key={item.image}>
            <img src={item.image} alt={"img"} style={{width:"100%" , height:"60%" }}/>
            <div style={{display:"flex" , justifyContent:"space-around"}} >
              <div >
                <h4>{item.title}</h4>
                <Button variant="contained"  color="secondary">
                 BUY NOW
                </Button>
              </div>
            <div>
              <h6>Price: ${item.price}</h6>
              <h6>Rating: {item.rating}</h6>
            </div>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    <div style={{marginLeft:"50%"}}>
    <Button style={{border:"1px solid black" ,  }}  disabled={page === 1} onClick={()=>setPage((page)=>page-1)}>Prev</Button>
    <Button style={{border:"1px solid black" ,  }} onClick={()=>setPage(page+1)}>Next</Button>
    </div>
   
    </div>
  )
}

export default Home