
// action type
export const ADD_TODO = "ADD_TODO";

// action creator == dispatcher
export const addTodo = (data) => ({type: ADD_TODO, payload: data });

