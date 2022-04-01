import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../Todo/action.js";
import { changeStatus } from "../Todo/action.js";
import { makeDelete } from "../Todo/action.js";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
export const Table = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.todo.todo);

  const handleStatus = (id) => {
    dispatch(changeStatus(id));
  };

  const handleDelete = (id) => {
    dispatch(makeDelete(id));
  };

  return (
    <>
      <table border="1px solid black">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Title</th>
            <th>Status</th>
            <th>Remove Option</th>
          </tr>
        </thead>
        <tbody>
          { tasks.map((e, index) => (
            <tr key={uuid()}>
              <td>{index + 1}</td>
              <td>{e.title}</td>
              <td>
                {e.status ? "Complete" : "Incomplete"}{" "}
                <button
                  onClick={() => {
                    handleStatus(e.id);
                  }}
                >
                  Toggle
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(e.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
