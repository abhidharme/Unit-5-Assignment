import { SIGNUP_FAIL, SIGNUP_SUCCESS, SINGUP_LOADING } from "./action";


const initState = {
    loading: false,
    isAuthention: false,
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
    error: false
}

const Sing_reducer = (store = initState, { type, payload }) => {
    switch (type) {
        case SINGUP_LOADING: {
            return {
                ...store,
                loading: true,
                isAuthention: false,
                error: false
            }
        }
        case SIGNUP_SUCCESS:
            return {
                ...store,
                loading: false,
                name: payload.name,
                email: payload.email,
                password: payload.password,
                username: payload.username,
                mobile: payload.mobile,
                description: payload.description,
                isAuthention: true,
                error: false
            };
        case SIGNUP_FAIL:
            return {
                ...store,
                loading: false,
                isAuthention: false,
                error: true
            }
        default:
            return store
    }


}

export default Sing_reducer