import { ADD_TODO } from "./action";
import { CHANGE_STATUS } from "./action";
import { MAKE_DELETE } from "./action";

const initState = {
  todo: JSON.parse(localStorage.getItem("todos")) || []
};

// reducer function

export const todoReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      localStorage.setItem("todos", JSON.stringify([...store.todo, payload]));
      return { ...store, todo: JSON.parse(localStorage.getItem("todos")) };
      break;
    case MAKE_DELETE:
      const newTodos = store.todo.filter((el) => el.id !== payload);
      localStorage.setItem("todos", JSON.stringify([...newTodos]));
      return { ...store, todo: JSON.parse(localStorage.getItem("todos")) };
      break;
    case CHANGE_STATUS:
      store.todo.map((e) => { if(e.id === payload){ 
          e.status = e.status ? false : true;
          console.log(e)
      }});
      localStorage.setItem("todos", JSON.stringify(store.todo));
      return { ...store, todo: JSON.parse(localStorage.getItem("todos")) };
      break;
    default:
      return store;
      break;
  }
};
