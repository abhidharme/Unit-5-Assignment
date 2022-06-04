
export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

export const getTodosLoading = ()=>({
    type : GET_TODOS_LOADING
});

export const getTodosSuccess = (payload)=> ({
   type: GET_TODOS_SUCCESS , 
   payload
});

export const getTodosFailure = ()=> ({
    type: GET_TODOS_FAILURE
});


export const getTodosData = () => (dispatch)=>{
    dispatch(getTodosLoading());
   fetch("http://localhost:8080/todos" )
   .then((res) => res.json())
   .then((res) =>{dispatch(getTodosSuccess(res));})
   .catch((err)=> dispatch(getTodosFailure( )))
}