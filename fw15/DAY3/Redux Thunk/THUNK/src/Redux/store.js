import { legacy_createStore ,applyMiddleware , combineReducers ,  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Sing_reducer from "./SignUp_Redux/reducer";
import thunk from "redux-thunk";
import login_Reducer from "./LoginRedux/reducer";
import gitReducer from "./Profile/reducer";

const rootReducer = combineReducers({
 signData: Sing_reducer,
 loginData:  login_Reducer,
 gituser: gitReducer
})

 const store = legacy_createStore(rootReducer , 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    )

    export default store