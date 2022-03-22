

// import { useEffect , useState  } from "react";

// import axios from "axios";

// export const Grocery = ()=>{

//     const [text, setText] = useState("");

//     const [groceries , setGroceries] = useState([]);

//     const [page, setPage] = useState(1);
    
//     const getData = ()=>{
//         axios.get(`http://localhost:3000/grocerie?_limit=3&_page=${page}`).then((res)=>{
//             setGroceries(res,data);
//         });
//     };


//     return( <div>

//         <input type="text" onChange={(e)=>{
//             setText(e.target.value)
//         }} />
//         <button onClick={()=>{
//             fetch(`http://localhost:3000/grocerie` , {
//                 method: "POST",
//                 body: JSON.stringify({title:text , purchased:false}),
//                 headers:{
//                     "content-type": "application/json",
//                 },
//             }).then(()=>{
//                 getData();
//             });
//         }}> Save Grocery</button>
  
//          {groceries.map((g)=>{
//              <div key={g.id}>{g.title}</div>
//          })}


//          <button onClick={()=>{
//              setPage(page-1);
//          }}>prev</button>

//          <button onClick={()=>{
//              setPage(page+1);
//          }}>next</button>
       


//     </div>
    
    
    
    
    
//     )
// }