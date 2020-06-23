import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { PROFILE_FETCH_ASYNC } from '../types';

// Workers
import { fetchContacts } from './worker';

function* watchFetchContacts() {
  yield takeEvery(PROFILE_FETCH_ASYNC, fetchContacts);
}

export function* watchProfile() {
  yield all([
    call(watchFetchContacts),
  ]);
}
