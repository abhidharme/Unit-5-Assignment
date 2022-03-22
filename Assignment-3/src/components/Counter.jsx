import { useState } from "react";



export function Counter(){
  const [counter , setCounter] = useState(0);

  const handleChange=(value)=>{
    
    
      setCounter(counter+value);
  
    
  }

  const MhandleChange=(value)=>{
    setCounter(counter*value);
  }
  

 return ( <div className="App">
   <div id="back"><h1>Counter:{counter}</h1></div>
    

  <button onClick={()=>handleChange(1)}>Increment</button>

  <button onClick={()=>handleChange(-1)}>Decrement</button>

  <button onClick={()=>MhandleChange(2)}>Double</button>


  </div>
 )
}