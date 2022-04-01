import { ADD_AUTH } from "./action";

const initState = {
  token: JSON.parse(localStorage.getItem("token")) || null,
  isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
};

// reducer
export const authReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_AUTH:
      if (payload.token !== undefined) {
        localStorage.setItem("isLogged", JSON.stringify(true));
        localStorage.setItem("token", JSON.stringify(payload));
      }
      return {
        ...store,
        token: JSON.parse(localStorage.getItem("token")),
        isLogged: JSON.parse(localStorage.getItem("isLogged")),
      };
    default:
      return store;
      break;
  }
};
