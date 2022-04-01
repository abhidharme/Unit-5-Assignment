import { createStore, combineReducers } from "redux";
import { authReducer } from "../Auth/reducer";
import { todoReducer } from "../Todo/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export const store =
createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
