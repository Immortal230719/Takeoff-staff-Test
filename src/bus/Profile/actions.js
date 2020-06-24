import {
  PROFILE_FETCH_CONTACTS_START,
  PROFILE_FETCH_CONTACTS_STOP,
  PROFILE_FILL_CONTACTS,
  PROFILE_SET_FETCHING_ERROR,
  PROFILE_FETCH_ASYNC,
  PROFILE_RESET_ERROR,
  PROFILE_DELETE_CONTACT_START,
  PROFILE_DELETE_CONTACT_STOP,
  PROFILE_DELETE_CONTACT_ASYNC,
  PROFILE_DELETE_CONTACT_FILL,
  PROFILE_DELETE_ERROR_RESET,
  PROFILE_SET_DELETING_ERROR,
  PROFILE_CREATE_CONTACT_START,
  PROFILE_CREATE_CONTACT_STOP,
  PROFILE_CREATE_CONTACT_ASYNC,
  PROFILE_CREATE_CONTACT_FILL,
  PROFILE_CREATE_ERROR_RESET,
  PROFILE_SET_CREATING_ERROR,
  PROFILE_SEARCH_CONTACT_START,
  PROFILE_SEARCH_CONTACT_STOP,
  PROFILE_SEARCH_CONTACT_FILL,
  PROFILE_SEARCH_CONTACT_ASYNC,
} from './types';

// get contacts
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

// delete contacts

export function profileDeleteStart() {
  return {
    type: PROFILE_DELETE_CONTACT_START,
  }
}
export function profileDeleteStop() {
  return {
    type: PROFILE_DELETE_CONTACT_STOP,
  }
}
export function profileDeleteFill(id) {
  return {
    type: PROFILE_DELETE_CONTACT_FILL,
    payload: id,
  }
}
export function profileAsyncDelete(id) {
  return {
    type: PROFILE_DELETE_CONTACT_ASYNC,
    payload: id,
  }
}
export function profileDeletingError(message) {
  return {
    type: PROFILE_SET_DELETING_ERROR,
    payload: message,
    error: true,
  }
}
export function profileDeleteErrorReset() {
  return {
    type: PROFILE_DELETE_ERROR_RESET,
  }
}

// create contact

export function profileCreateStart() {
  return {
    type: PROFILE_CREATE_CONTACT_START,
  }
}
export function profileCreateStop() {
  return {
    type: PROFILE_CREATE_CONTACT_STOP,
  }
}
export function profileCreateFill({ data }) {
  return {
    type: PROFILE_CREATE_CONTACT_FILL,
    payload: data,
  }
}
export function profileAsyncCreate(data) {
  return {
    type: PROFILE_CREATE_CONTACT_ASYNC,
    payload: data,
  }
}
export function profileCreatingError(message) {
  return {
    type: PROFILE_SET_CREATING_ERROR,
    payload: message,
    error: true,
  }
}
export function profileCreateErrorReset() {
  return {
    type: PROFILE_CREATE_ERROR_RESET,
  }
}

// search contact

export function profileSearchStart() {
  return {
    type: PROFILE_SEARCH_CONTACT_START,
  }
}
export function profileSearchStop() {
  return {
    type: PROFILE_SEARCH_CONTACT_STOP,
  }
}
export function profileSearchFill({ data }) {
  return {
    type: PROFILE_SEARCH_CONTACT_FILL,
    payload: data,
  }
}
export function profileAsyncSearch(data) {
  return {
    type: PROFILE_SEARCH_CONTACT_ASYNC,
    payload: data,
  }
}
