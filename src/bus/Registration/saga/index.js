import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { REGISTRATION_FETCH_ASYNC } from '../types';

// Workers
import { fetchRegistration } from './worker';

function* watchFetchRegistration() {
  yield takeEvery(REGISTRATION_FETCH_ASYNC, fetchRegistration);
}

export function* watchRegistration() {
  yield all([
    call(watchFetchRegistration),
  ]);
}
