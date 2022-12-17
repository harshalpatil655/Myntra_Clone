import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionTypes";

export const signup = (data) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });

  return axios
    .post("http://localhost:8080/signup", data)
    .then((res) => dispatch({ type: SIGNUP_SUCCESS }))
    .catch((err) => {
      return dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};

export const login = (data) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post("http://localhost:8080/login", data)
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => {
      return dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};
