
import { ADD_TODO } from "./actions";

// reducer 
export const reducer = (store, {type, payload}) => {
    switch (type) {
        case ADD_TODO:
            return {...store, todos: [...payload]}
        default:
            return store
    }
}

