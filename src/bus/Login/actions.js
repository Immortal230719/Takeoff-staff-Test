import {
  LOGIN_FETCH_START,
  LOGIN_FETCH_STOP,
  LOGIN_FILL,
  LOGIN_SET_FETCHING_ERROR,
  LOGIN_FETCH_ASYNC,
  LOGIN_RESET_ERROR,
} from './types';

export function loginFetchingStart() {
  return {
    type: LOGIN_FETCH_START,
  }
}

export function loginFetchingStop() {
  return {
    type: LOGIN_FETCH_STOP,
  }
}

export function loginFill() {
  return {
    type: LOGIN_FILL,
  }
}

export function loginAsync(data, history) {
  return {
    type: LOGIN_FETCH_ASYNC,
    payload: data,
    history,
  }
}

export function loginFetchingError(message) {
  return {
    type: LOGIN_SET_FETCHING_ERROR,
    payload: message,
    error: true,
  }
}

export function loginErrorReset() {
  return {
    type: LOGIN_RESET_ERROR,
  }
}
