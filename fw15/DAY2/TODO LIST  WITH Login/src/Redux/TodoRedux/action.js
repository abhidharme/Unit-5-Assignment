
import axios from "axios";
export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";
export const ADD_TODOS_REQUEST = "ADD_TODOS_REQUEST";
export const ADD_TODOS_SUCCESS = "ADD_TODOS_SUCCESS";
export const ADD_TODOS_FAILURE = "ADD_TODOS_FAILURE";


export const gettodosRequest = ()=>({
    type:GET_TODOS_REQUEST
})

export const gettodosSuccess = (data) => ({
    type: GET_TODOS_SUCCESS , 
    payload: data
}) ;

export const gettodosFailure = ()=>({
    type:GET_TODOS_FAILURE
})



export const getTodos = () => (dispatch) =>{
    dispatch(gettodosRequest());
  return axios({
        url: "http://localhost:8080/grocery",
        method: "GET"
    })
    .then((res) => {
        dispatch(gettodosSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(gettodosFailure())
    })
}




export const addtodosRequest = ()=>({
    type:ADD_TODOS_REQUEST
})

export const addtodosSuccess = (data) => ({
    type: ADD_TODOS_SUCCESS , 
    payload: data
}) ;

export const addtodosFailure = ()=>({
    type:ADD_TODOS_FAILURE
})



export const addTodos = ({title })=> (dispatch) =>{
    dispatch(addtodosRequest());
    return axios({
        url: "http://localhost:8080/grocery",
        method: "POST",
        data:{
            title,
            status:false
        }
    })
    .then((res) => {
        dispatch(addtodosSuccess())
    })
    .catch((err)=>{
        dispatch(addtodosFailure())
    })
}
