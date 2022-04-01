import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Todo = () => {
  const {id} = useParams();
  const [todo, settodo] = useState({});

  const getTodo = () => {
    fetch(`http://localhost:2500/todos/${id}`).then((res) => res.json()).then((data) => settodo(data));
  }
  useEffect(() => {
   getTodo();
  }, [])
  
  return (
    <div className="todo">
      <h3>Todo Task: {todo.title !== undefined ? todo.title: "To do got removed"}</h3>
      <div className="status">
        <h3>Status: {todo.status === undefined ? "Removed": todo.status ? "Complete": "Incomplete"}</h3>
        <button onClick = {() => {
          const obj = {
            ...todo,
            status: todo.status ? false: true
          }
          fetch(`http://localhost:2500/todos/${todo.id}`, {
            method: "PATCH",
            body: JSON.stringify(obj),
            headers: {
              "content-type": "application/json"
            }
          }).then(() => {getTodo()});
        }}>Complete Status</button>
      </div>
      <button onClick = {() => {
        fetch(`http://localhost:2500/todos/${todo.id}`, {
          method: "DELETE"
        }).then(() => {getTodo()});
      }}>Remove Todo</button>
    </div>
  );
};
