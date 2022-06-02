import { ADD_COUNT } from "./action";

export const reducer = (store = initState , {type , payload})=>{
    switch(type){
        case ADD_COUNT:
            return{...store,
            count: store.count + payload}
    
    default:
        return store;
            }
}