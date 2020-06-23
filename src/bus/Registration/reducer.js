import {
  REGISTRATION_FETCH_START,
  REGISTRATION_FETCH_STOP,
  REGISTRATION_FILL,
  REGISTRATION_SET_FETCHING_ERROR,
  REGISTRATION_RESET_ERROR,
} from './types';

const initialState = {
  isFetching: false,
  error: false,
  errorMessage: '',
}

export const registartionReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case REGISTRATION_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case REGISTRATION_FILL:
      return {
        ...state,
        isFetching: false,
        error: false,
      }
    case REGISTRATION_FETCH_STOP:
      return {
        ...state,
        isFetching: false,
      }
    case REGISTRATION_SET_FETCHING_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
        errorMessage: payload,
      }
    case REGISTRATION_RESET_ERROR:
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
