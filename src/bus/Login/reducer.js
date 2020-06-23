import {
  LOGIN_FETCH_START,
  LOGIN_FETCH_STOP,
  LOGIN_FILL,
  LOGIN_SET_FETCHING_ERROR,
  LOGIN_RESET_ERROR,
} from './types';

const initialState = {
  isFetching: false,
  error: false,
  errorMessage: '',
}

export const loginReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case LOGIN_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case LOGIN_FILL:
      return {
        ...state,
        isFetching: false,
        error: false,
      }
    case LOGIN_FETCH_STOP:
      return {
        ...state,
        isFetching: false,
      }
    case LOGIN_SET_FETCHING_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
        errorMessage: payload,
      }
    case LOGIN_RESET_ERROR:
      return {
        ...state,
        isFetching: false,
        error: false,
        errorMessage: '',
      }
    default:
      return state;
  }
}
