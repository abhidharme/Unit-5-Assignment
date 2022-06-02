import { INCREMENT_COUNTER , DECREMENT_COUNTER } from "./action";

export const CountReducer = (store , {type , payload})=>{
   switch(type){
       case INCREMENT_COUNTER:
           return{...store,
        count: store.count + payload}
        case DECREMENT_COUNTER:
            return{...store,
            count: store.count - payload}
        default:
            return store;
   }    
}