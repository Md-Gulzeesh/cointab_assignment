import {
  ADD_USER_ERROR,
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
  DELETE_USER_ERROR,
  DELETE_USER_LOADING,
  DELETE_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from "./user.actionType";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  totalPages: 0,
  length: 0,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        USER: payload.USER,
        totalPages: payload.totalPages,
        length: payload.length,
      };
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        USER: payload.USER,
      };
    }
    case ADD_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        USER: [],
      };
    }
    case DELETE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
