import React from 'react'
import { useSelector } from 'react-redux'

export const TodoList = () => {

     const  todos = useSelector((store)=>store.todos.todos);
     const loading = useSelector((state)=>state.todos.loading)
    console.log(todos);
  return (
    <div>

    <h4>Todos</h4>
    {loading && <div>loading</div>}   
    {todos.map((e)=>(
      <div key={e.id} >{e.title}</div>
    ))}
    </div>
  )
}
