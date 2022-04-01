
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../Todo/action.js";
import { useState, useEffect } from "react";

export const Input = () => {
   const [input, setinput] = useState({});
   const dispatch = useDispatch();

   const addTodos = () => {
      (input.title === undefined || input.title === "") ? alert("Please enter todo") :  dispatch(addTodo(input));
      setinput({});
   }
   
    
   const handleChange = (e) => {
       const obj = {
           title: e.target.value,
           status: false,
           id: uuid()
       }
     setinput(obj);
   }
    return(
       <div className="inputPart">
           <input onChange = {handleChange} type="text" placeholder = "Enter todo here"/>
           <button onClick = {() => {addTodos()}}>Add Todo</button>
           </div>
    )
}