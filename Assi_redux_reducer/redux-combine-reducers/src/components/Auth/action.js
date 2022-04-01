//action type 
export const ADD_AUTH = "ADD_AUTH";

//action dispatcher
export const addAuth = (token) => ({type: ADD_AUTH, payload: token});
