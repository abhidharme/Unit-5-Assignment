import { GIT_DATA } from "./action";
const initState = {
  gituser:[]
}
const gitReducer = (store = initState , {type, payload}) =>{
switch(type){
    case GIT_DATA:
        
        return{
            ...store,
            gituser: payload
        }
        
        default:
            return store;
}

}

export default gitReducer