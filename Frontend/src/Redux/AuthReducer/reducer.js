import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: localStorage.getItem("token") || "",
  name: "",
  message: "",
};
const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...initialState,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isError: true,
        message: payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        name: payload.name,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        message: payload.response.data,
      };
    default: {
      return state;
    }
  }
};

export { reducer };
