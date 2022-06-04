import {  createStore , applyMiddleware , compose , combineReducers } from "redux";
import  thunk  from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { todosReducer } from "./Todos/reducer";


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware = [thunk]; // add manual this line

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

export const rootReducer = combineReducers({
    login:loginReducer,
    todos: todosReducer  
})
export const store = createStore(rootReducer, enhancer);