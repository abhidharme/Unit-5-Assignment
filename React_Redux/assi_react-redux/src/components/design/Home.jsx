import { useState, useEffect } from "react";
import { addTodo } from "../Redux/actions.js";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

export const Home = () => {
  const [input, setinput] = useState("");
  const [todo, settodo] = useState({});

  const todos = useSelector((store) => store.todos);

  const dispatch = useDispatch();

  const getData = () => {
    fetch("http://localhost:2500/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addTodo(data));
      });
  };
  // console.log(todos);

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    const obj = {
      title: value,
      status: false,
    };
    settodo(obj);
  };

  const addTodoServer = () => {
    fetch("http://localhost:2500/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getData();
    });
  };

  return (
    <div className="home">
      <div className="inputPart">
        <input
          onChange={handleChange}
          type="text"
          placeholder =" add todo here"
        />
        <button onClick={addTodoServer}>Add Todo</button>
      </div>

      <table border="1px solid black">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Todo Task</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((el, index) => (
            <tr key={uuid()}>
              <td>
                <Link to={`/todo/${el.id}`}>{index + 1}</Link>
              </td>
              <td>
                <Link to={`/todo/${el.id}`}>{el.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
