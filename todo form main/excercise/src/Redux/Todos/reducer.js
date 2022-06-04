
import { GET_TODOS_FAILURE ,  GET_TODOS_SUCCESS , GET_TODOS_LOADING} from "./action";

const initState  = {
    loading: false,
    todos: [],
    error: false,
};

export const todosReducer = (store = initState , {type , payload})=>{
    switch (type){
        case GET_TODOS_LOADING:
            return{...store ,
                 loading: true
                   };
        case GET_TODOS_SUCCESS:
            return {...store , 
                   loading:false,
                    todos: [...payload],
                    error: false        
                    };    
         case GET_TODOS_FAILURE:
             return {...store ,
                     loading:false, 
                     error: true,
                     todos:[]
                    };
         default:
             return store;
    }
};

//export { loginReducer };