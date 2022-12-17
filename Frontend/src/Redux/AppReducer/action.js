import axios from "axios";
import {
  CARTDATA_REQUEST,
  CARTDATA_SUCCESS,
  MENSDATA_FAILURE,
  CARTDATA_FAILURE,
  MENSDATA_REQUEST,
  MENSDATA_SUCCESS,
} from "./actionTypes";

let token = localStorage.getItem("token");

export const mensData = (params) => async (dispatch) => {
  dispatch({ type: MENSDATA_REQUEST });

  return await axios
    .get("http://localhost:8080/data/mensdata", params)
    .then((res) => dispatch({ type: MENSDATA_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: MENSDATA_FAILURE }));
};

export const cartData = () => async (dispatch) => {
  dispatch({ type: CARTDATA_REQUEST });

  return await axios
    .get("http://localhost:8080/cart", {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => dispatch({ type: CARTDATA_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: CARTDATA_FAILURE }));
};

export const postcart = (data) => async (dispatch) => {
  dispatch({ type: CARTDATA_REQUEST });

  return axios
    .post("http://localhost:8080/cart/cartdata", data, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => dispatch({ type: CARTDATA_SUCCESS }))
    .catch((err) => {
      return dispatch({ type: CARTDATA_FAILURE });
    });
};
