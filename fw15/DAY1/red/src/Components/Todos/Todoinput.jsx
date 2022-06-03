import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos, getTodos } from '../../Redux/TodoRedux/action';

export const Todoinput = () => {

const [text , setText] = useState("");

const dispatch = useDispatch();

const handleSubmit = () => {
    addTodos({
        title: text,
        dispatch
    })
    
}
  return (
    <div>
    <input type={"text"} value={text} onChange={(e)=> setText(e.target.value)}
    placeholder="Enter Title" />
    <button onClick={handleSubmit}>ADD TODO</button>
    </div>
  )
}
