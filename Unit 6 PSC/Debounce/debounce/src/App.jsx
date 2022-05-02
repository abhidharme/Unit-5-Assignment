import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState([])
  const [movies , setMovie] = useState("");


  useEffect(()=>{
    axios.get(`http://www.omdbapi.com/?s=${movies}&apikey=584c41cc&i=tt`)
    .then((Response)=>setCount(Response.data.Search))
  },[movies])

 
  function debounce(func){
    return function(...args){
      const context = this;
      if(search_time){
        clearTimeout(search_time);
       }

      var search_time = setTimeout(function(){
        func.apply(context,args)
      
  },8000)
    }
    }
    
    

    


  console.log(count);

  const handleSearch = (e)=>{
    setMovie(e.target.value)
  }

  //const Output = useCallback(debounce(handleSearch))
  
  
  return (
    <div className="App">
      <input type="tetx" placeholder='enter movie name'
      onKeyUp={debounce(handleSearch)} />


      {count != undefined && 
        <div>
        {
          count.map((e)=>
          <div key={e.id}>
            <p>{e.Title}</p>
            <img src={e.Poster}  style={{width:"130px" , height:"140px" }}/>
          </div>)
        }
        </div>
      }
    </div>


  )

  
}

export default App
