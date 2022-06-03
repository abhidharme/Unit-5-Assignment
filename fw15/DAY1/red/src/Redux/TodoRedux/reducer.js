import { GET_TODOS_FAILURE , GET_TODOS_REQUEST , GET_TODOS_SUCCESS , ADD_TODOS_FAILURE , ADD_TODOS_REQUEST , ADD_TODOS_SUCCESS} from "./action";

const initSate = {
    loading: false,
    todos: [],
    error: false
}
export const todoreducer = (store = initSate , action) =>{
    switch(action.type){
        case GET_TODOS_REQUEST:
            return {...store ,
                 loading:true,
                error:false
            }
        case GET_TODOS_SUCCESS:
           // console.log(payload)
            return{...store,
                loading:false,
            todos: action.payload,
            error:false
         }    
         case GET_TODOS_FAILURE:
             return{...store,
            loading:false,
        error:true
    }
    case ADD_TODOS_REQUEST:
        return {...store ,
             loading:true,
            error:false
        }
    case ADD_TODOS_SUCCESS:
       // console.log(payload)
        return{...store,
            loading:false,
        todos: action.payload,
        error:false
     }    
     case ADD_TODOS_FAILURE:
         return{...store,
        loading:false,
    error:true
     }     
    default:  
           return store;
    }
}

