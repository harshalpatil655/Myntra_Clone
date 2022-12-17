import {
  CARTDATA_FAILURE,
  CARTDATA_REQUEST,
  CARTDATA_SUCCESS,
  MENSDATA_FAILURE,
  MENSDATA_REQUEST,
  MENSDATA_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  cart: [],
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case MENSDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case MENSDATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case MENSDATA_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case CARTDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CARTDATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };
    }
    case CARTDATA_FAILURE: {
      return {
        ...state,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
