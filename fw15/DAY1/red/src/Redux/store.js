import { legacy_createStore , combineReducers } from "redux";
import { todoreducer } from "./TodoRedux/reducer";


const rootReducer = combineReducers({
    todos: todoreducer
})

export const store = legacy_createStore(rootReducer)

//console.log("state",store.getState())