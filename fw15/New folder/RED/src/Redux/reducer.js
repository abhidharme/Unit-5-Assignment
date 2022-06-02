import { ADD_COUNT } from "./action";
import { store } from "./store";

export const reducer = (store , {type , payload}) =>{
    switch(type){
        case ADD_COUNT:
            return {...store , count: store.count + payload}
              default:  
           return store;
    }
}

