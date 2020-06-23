import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { LOGIN_FETCH_ASYNC } from '../types';

// Workers
import { fetchLogin } from './worker';

function* watchFetchLogin() {
  yield takeEvery(LOGIN_FETCH_ASYNC, fetchLogin);
}

export function* watchLogin() {
  yield all([
    call(watchFetchLogin),
  ]);
}
