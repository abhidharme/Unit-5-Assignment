
import { useEffect , useState } from "react";

import axios from "axios";
export const Grocery1 = ()=>{

    const [text , setText] = useState("");
    const [grocerie , setGroceries] = useState([]);
    const [page , setPage] = useState(1)


    useEffect(()=>{
        getData();
    },[page])

    
   
        // DELETE request using axios inside useEffect React hook
       
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    

    const getData = ()=>{
        axios.get(`http://localhost:3001/grocerie?_limit=4&_page=${page}`).then((res)=>{
            setGroceries(res.data);
        });
    };



   return ( <div>
       
       <input type="text" onChange={(e) =>{
           setText(e.target.value)
       }}/>

       <button onClick={()=>{
           fetch("http://localhost:3001/grocerie" ,{
               method: "POST",
               body: JSON.stringify({title: text , purchased: false}),
               headers: {
                    "content-type": "application/json"
               },
           }).then(()=>{
               getData();
           })
       }}>add items</button>

     
      {grocerie.map((g)=>(
          <div id="box" key={g.id}>{g.title}</div>
      ))}

<div id="bn">
<button onClick={()=>{
    setPage(page-1)
}}>previous</button>

<button onClick={()=>{
    setPage(page+1)
}}>Next</button>

</div>

{/* <button onClick={()=>{
     axios.delete('http://localhost:3001/grocerie/${id}')
     .then(() => setGroceries("delete"));
}}>delete</button> */}

   </div>

   ) 
}






//-----------------------------------------------

// import { useEffect , useState } from "react";

// export const Grocery1 = ()=>{

//     const [counter , setCounter] = useState("")
//     const [counter1 , setCounter1] = useState("")

//     console.log("anhi1")

// useEffect(()=>{
//     console.log("M2")
// },[counter])

// useEffect(()=>{
//     console.log("N2")
// } , [counter1])

//     console.log("3")

//     return <div>todo
//         <button onClick={()=>{
//             setCounter(counter+1)
//         }}>add</button>
    

// <button onClick={()=>{
//     setCounter1(counter1+1)
// }}>add</button>
// </div>
// }