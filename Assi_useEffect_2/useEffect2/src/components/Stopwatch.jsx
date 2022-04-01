
import { useEffect , useState } from "react";

export const Stopwatch = ()=>{


  
    const [show1 , setShow1] = useState(true);

   // const [inc , setInc] = useState(null);
    const [time , setTime] = useState(0);

    useEffect(()=>{
       const id= setInterval(()=>{
           
            setTime((prev)=>{
                if(prev ==50){
                    clearInterval(id);
                    return setShow1(show1? false : true)
                }
                return prev+1;
            })
        },500);
    

        return ()=>{
            clearInterval(id);  
        }
       

    },[]);

    

function getdata(val){
    setTime(val.target.value)
    
    console.log(val.target.value)
}

    return(
        <>
<input type="text" onChange={getdata}/>
         
{show1 ? <div>Timer:{time}</div> : "Time End"}


{/* <button onClick={function getdata(val){
        setTime(val.target.value)
        
        console.log(val.target.value)
    }}>add valu</button> */}
</>

    )}