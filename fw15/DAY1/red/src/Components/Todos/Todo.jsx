import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos } from '../../Redux/TodoRedux/action';
import Navbar from '../Navbar/Navbar';
import  Todoinput  from './Todoinput';
import  TodoList  from './TodoList';


const Todo = () => {

    const dispatch = useDispatch();
    
    useEffect(() =>{
     dispatch(getTodos());
    },[])


  return (
    <div>
    <Navbar/>
    <br></br>
    <Todoinput/>
    <br></br>
    <hr></hr>
    <TodoList/>
    <hr></hr>
    </div>
  )
}
export default Todo