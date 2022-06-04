import { legacy_createStore , combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import loginreducer from "./LoginRedux/reducer";
import { todoreducer } from "./TodoRedux/reducer";

const rootReducer = combineReducers({
    todos: todoreducer,
   users: loginreducer
    
})

export const store = legacy_createStore(rootReducer , 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//console.log("state",store.getState())