
import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid} from "uuid";
import { getTodosData } from "../Redux/Todos/action";

const initState = {
    title: "",
    description: "",
    subtasks: [],
    status: "",
    tags: {official: false , personal: false , others: false},
    date: "",
}

const reducer = (state , {type ,payload})=>{
    switch(type){
        case "UPDATE_TITLE":
               return {...state , title:payload}
        case "UPDATE_DESCRIPTION":
               return {...state , description:payload}   
        case "UPDATE_CHECKBOX":
               return {...state , status:payload}    
        case "UPDATE_TAGS":
               return {...state , tags: { ...state.tags , ...payload}}  
        case "CHANGE_DATE":
               return {...state , date:payload}  
        case "UPDATE_SUBTASK":
               return {...state , subtasks: [...state.subtasks , payload] };  
        case "TOGGLE_SUBTASK":
            const subtaskAfterToggle = state.subtasks.map((el)=>
            el.id === payload.id ? {...el , subtaskStatus: payload.status} : el);  
            return { ...state , subtasks: subtaskAfterToggle};     
        case "DELETE_SUBTASK":
            const  subtasksAfterDelete = state.subtasks.filter(
                (el) => el.id !== payload
            );
            return {...state , subtasks: subtasksAfterDelete }    
        case "RESET":
            return {...initState };                          
            default:
                throw new Error("please give proper action")
    }
}

export const TodosCreate = ()=> {

   const [subtaskInputValue , setSubtaskInputValue  ] = useState("")

    const [state , dispatch] = useReducer(reducer , initState);


    const { title , description  , subtasks , status , tags , date} = state;
    const {official , personal , others} = tags
     
    const reducDispatch = useDispatch();

    const createNewTask = () => {
        const payload = {  ...state };

        fetch(`http://localhost:8080/todos` , {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(()=> reducDispatch(getTodosData()))
        .then(()=> reducDispatch({type: "RESET"}))
    }

    return (
        <div>
            <input type="text" 
            placeholder="TITLE"
            value={title}
            onChange={(e)=>
            dispatch({type: "UPDATE_TITLE" , payload: e.target.value})}
            />
            <br></br>
            <input type="text" 
            placeholder="description"
            value={description}
            onChange={(e)=>
            dispatch({type: "UPDATE_DESCRIPTION" , payload: e.target.value})}
            />
            <div>
            <label>
                <input type="radio" 
                checked={status === "Todo"}
                onChange={(e)=> dispatch({type: "UPDATE_CHECKBOX" , payload: "Todo"}) 
                }/>
                 Todo
                </label>
                <br></br>
            <label>
                <input type="radio" 
                checked={status === "InProgress"}
                onChange={(e)=> dispatch({type: "UPDATE_CHECKBOX" , payload: "InProgress"}) 
                }/>
                 Inprogress
                </label>
                <br></br>
                <label>
                <input type="radio" 
                checked={status === "Done"}
                onChange={(e)=> dispatch({type: "UPDATE_CHECKBOX" , payload: "Done"}) 
                }/>
                 Done
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox"
                    checked={official} onChange={(e)=> dispatch({type:"UPDATE_TAGS" , payload: {official: e.target.checked}})} />
                    OFFICIAL
                </label>
                <br></br>
                <label>
                    <input type="checkbox"
                    checked={personal} onChange={(e)=> dispatch({type:"UPDATE_TAGS" , payload: {personal : e.target.checked}})} />
                    PERSONAL
                </label>
                <br></br>
                <label>
                    <input type="checkbox"
                    checked={others} onChange={(e)=> dispatch({type:"UPDATE_TAGS" , payload: {others : e.target.checked}}) } />
                    OTHRES
                </label>
                <br></br>
                <br></br>
                <br></br>
               <input 
                type="date"
               value={date}
               onChange={(e)=>
                   dispatch({type: "CHANGE_DATE" , payload: e.target.value})
               } />
               <br></br>
                <br></br>
                <br></br>
                <h1>Create Subtasks</h1>
                <input type="text"
                value={subtaskInputValue} 
                onChange = {(e)=> setSubtaskInputValue(e.target.value)} />
                <button onClick={()=>{
                    const payload = {
                        id: uuid(),
                        subtaskTitle: subtaskInputValue,
                        subtaskStatus: false
                    };
                    dispatch({type: "UPDATE_SUBTASK" , payload});
                    setSubtaskInputValue("");
                }}>ADD SUBTASK</button>
                <div>
                    {subtasks.map((subtask)=>(
                        <div key={subtask.id} style={{display: "flex"}}>
                            <label>
                                <input 
                                type="checkbox" 
                                checked={subtask.subtaskStatus}
                                onChange={(e)=>
                                dispatch({
                                    type: "TOGGLE_SUBTASK",
                                    payload: {id: subtask.id , status: e.target.checked}
                                })} />
                                {subtask.subtaskTitle}
                            </label>
                            <button onClick={()=> 
                                 dispatch({ type:"DELETE_SUBTASK" , payload: subtask.id}) }>
                                DELETE
                                </button>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={createNewTask}>Create New Task</button>
        </div>
    )
}