
import { useEffect , useState } from "react";
import axios from "axios";

export const Forms = ()=>{
    const [formData , setFormData] = useState({
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        isMarried: "",
    });
    const [fdata , setFdata] = useState([]);


    const handleChange = (e)=>{
        let {id , value , checked , type} = e.target;
           value = type === "checkbox" ? checked : value;
        setFormData((prev)=>({...prev , [id]:value}));

        // if(id== "age"){
        //     setFormData({...formData , age:value})
        // }

         // if(id== "name"){
        //     setFormData({...formData , age:value})
        // }
    }

    const handleSubmit = (e)=>{
           e.preventDefault();
           axios.post("http://localhost:3001/formData" , formData).then(()=>{
               getData();
           })
    }
    
    useEffect(()=>{
        getData();
    },[])


    
    const getData = ()=>{
        axios.get(`http://localhost:3001/formData`).then((res)=>{
            setFdata(res.data);
        });
    };


   const {name , age , address , department , salary , isMarried} = formData;
    return (
        <>
        <form >
            
          
            <h3>signUp</h3>
            <input type="text" placeholder="enter name"  id="name" onChange={handleChange}/>
            <br/>
            <input type="number" placeholder="age" id="age"  onChange={handleChange}/>
            <br></br>
            <input type="text" placeholder="address" id="address"  onChange={handleChange}/>
            <br></br>
            <select id="department" value={department} onChange={handleChange}>
                <option value="Technical">Technical</option>
                <option value="Non-Technical">Non-Technical</option>
            </select>
            <br></br>
            <br/>
            <br></br>
            <input type="number" id="salary" placeholder="salary"  onChange={handleChange}/>
            <br></br>
            <label>IsMarried</label>
            <input type="checkbox" id="isMarried" checked={isMarried} onChange={handleChange}/>
            <br></br>
            <input type="submit" value="Submit form" onClick={handleSubmit} />
            
         
        </form>
        
     
                {/* {fdata.map((g)=>(
        // <div id="box" key={g.id}>{g.name}</div>   
         
    ))} */}

<table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>Address</th>
            <th>department</th>
            <th>salary</th>
            <th>isMarried</th>
          </tr>
        </thead>
        <tbody>
        {fdata.map((g)=>(
         <tr>
             <td>{g.name}</td>
             <td>{g.age}</td>
             <td>{g.address}</td>
             <td>{g.department}</td>
             <td>{g.salary}</td>
             <td>{g.isMarried == true ? "Yes":"No"}</td>
         </tr>
         
         ))}
        </tbody>
        
      </table>


    


        </>
    )
}