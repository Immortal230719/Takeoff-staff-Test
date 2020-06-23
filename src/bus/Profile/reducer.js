import {
  PROFILE_FETCH_CONTACTS_START,
  PROFILE_FETCH_CONTACTS_STOP,
  PROFILE_FILL_CONTACTS,
  PROFILE_SET_FETCHING_ERROR,
  PROFILE_RESET_ERROR,
} from './types';

const initialState = {
  contacts: [],
  isFetching: false,
  error: false,
  errorMessage: '',
}

export const profileReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case PROFILE_FETCH_CONTACTS_START:
      return {
        ...state,
        isFetching: true,
      }
    case PROFILE_FILL_CONTACTS:
      return {
        ...state,
        contacts: [...payload],
        isFetching: false,
        error: false,
      }
    case PROFILE_FETCH_CONTACTS_STOP:
      return {
        ...state,
        isFetching: false,
      }
    case PROFILE_SET_FETCHING_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
        errorMessage: payload,
      }
    case PROFILE_RESET_ERROR:
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
