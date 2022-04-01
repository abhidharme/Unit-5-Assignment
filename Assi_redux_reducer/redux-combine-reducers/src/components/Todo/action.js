
// action type
export const ADD_TODO = "ADD_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const MAKE_DELETE = "MAKE_DELETE";

// action dispatcher 
export const addTodo = (todo) => ({type: ADD_TODO, payload: todo});

export const changeStatus = (item) => ({type: CHANGE_STATUS, payload: item});

export const makeDelete = (item) => ({type: MAKE_DELETE, payload: item});