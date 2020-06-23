// Core
import { all } from 'redux-saga/effects';

// Watchers
import { watchRegistration } from '../bus/Registration/saga';
import { watchLogin } from '../bus/Login/saga';
import { watchProfile } from '../bus/Profile/saga';

export function* rootSaga() {
  yield all([
    watchRegistration(),
    watchLogin(),
    watchProfile(),
  ]);
}
