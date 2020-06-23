import {
  REGISTRATION_FETCH_START,
  REGISTRATION_FETCH_STOP,
  REGISTRATION_FILL,
  REGISTRATION_SET_FETCHING_ERROR,
  REGISTRATION_FETCH_ASYNC,
  REGISTRATION_RESET_ERROR,
} from './types';

export function registrationFetchingStart() {
  return {
    type: REGISTRATION_FETCH_START,
  }
}

export function registrationFetchingStop() {
  return {
    type: REGISTRATION_FETCH_STOP,
  }
}

export function registrationFill() {
  return {
    type: REGISTRATION_FILL,
  }
}

export function registrationAsync(data) {
  return {
    type: REGISTRATION_FETCH_ASYNC,
    payload: data,
  }
}

export function registrationFetchingError(message) {
  return {
    type: REGISTRATION_SET_FETCHING_ERROR,
    payload: message,
    error: true,
  }
}

export function registrationErrorReset() {
  return {
    type: REGISTRATION_RESET_ERROR,
  }
}
