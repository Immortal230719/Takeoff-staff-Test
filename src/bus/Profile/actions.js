import {
  PROFILE_FETCH_CONTACTS_START,
  PROFILE_FETCH_CONTACTS_STOP,
  PROFILE_FILL_CONTACTS,
  PROFILE_SET_FETCHING_ERROR,
  PROFILE_FETCH_ASYNC,
  PROFILE_RESET_ERROR,
} from './types';

export function profileFetchingStart() {
  return {
    type: PROFILE_FETCH_CONTACTS_START,
  }
}

export function profileFetchingStop() {
  return {
    type: PROFILE_FETCH_CONTACTS_STOP,
  }
}

export function profileFillContacts({ data }) {
  return {
    type: PROFILE_FILL_CONTACTS,
    payload: data,
  }
}

export function profileAsyncContacts() {
  return {
    type: PROFILE_FETCH_ASYNC,
  }
}

export function profileFetchingError(message) {
  return {
    type: PROFILE_SET_FETCHING_ERROR,
    payload: message,
    error: true,
  }
}

export function profileErrorReset() {
  return {
    type: PROFILE_RESET_ERROR,
  }
}
