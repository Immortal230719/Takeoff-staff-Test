// Core
import { put, call } from 'redux-saga/effects';

import { errorHandler } from './errorHandler';

export function* makeRequestWithSpinner(options) {
  const {
    fetcher,
    data,
    start,
    stop,
    fill,
    setErrorAction,
    history,
    path,
  } = options;

  try {
    yield put(start());
    const result = yield call(fetcher, data);
    yield put(fill(result));
    if (path) {
      history.push(path);
    }
  } catch (error) {
    yield call(errorHandler, error, setErrorAction);
  } finally {
    yield put(stop());
  }
}
