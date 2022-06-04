import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos, getTodos } from '../../Redux/TodoRedux/action';

 const Todoinput = () => {

const [text , setText] = useState("");

const dispatch = useDispatch();

const handleSubmit = () => {
  dispatch(addTodos({
        title: text, 
    }))
    .then(()=>alert("done"))
    .then(()=>{dispatch(getTodos())})
    .catch((err)=>console.log(err.massege))
    
}
  return (
    <div>
    <input type={"text"} value={text} onChange={(e)=> setText(e.target.value)}
    placeholder="Enter Title" />
    <button onClick={handleSubmit}>ADD TODO</button>
    </div>
  )
}

export default  Todoinput
