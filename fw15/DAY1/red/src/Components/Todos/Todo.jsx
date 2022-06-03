import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos } from '../../Redux/TodoRedux/action';
import { Todoinput } from './Todoinput';
import { TodoList } from './TodoList';


export const Todo = () => {

    const dispatch = useDispatch();
    
    useEffect(() =>{
     getTodos(dispatch);
    },[])


  return (
    <div>
    <Todoinput/>
    <br></br>
    <hr></hr>
    <TodoList/>
    <hr></hr>
    </div>
  )
}
