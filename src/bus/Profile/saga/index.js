import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import {
  PROFILE_FETCH_ASYNC,
  PROFILE_DELETE_CONTACT_ASYNC,
  PROFILE_CREATE_CONTACT_ASYNC,
  PROFILE_SEARCH_CONTACT_ASYNC,
} from '../types';

// Workers
import {
  fetchContacts, deleteContact, createContact, searchContact,
} from './worker';

function* watchFetchContacts() {
  yield takeEvery(PROFILE_FETCH_ASYNC, fetchContacts);
}

function* watchDeleteContact() {
  yield takeEvery(PROFILE_DELETE_CONTACT_ASYNC, deleteContact);
}

function* watchCreateContact() {
  yield takeEvery(PROFILE_CREATE_CONTACT_ASYNC, createContact);
}

function* watchSearchContact() {
  yield takeEvery(PROFILE_SEARCH_CONTACT_ASYNC, searchContact);
}

export function* watchProfile() {
  yield all([
    call(watchFetchContacts),
    call(watchDeleteContact),
    call(watchCreateContact),
    call(watchSearchContact),
  ]);
}
