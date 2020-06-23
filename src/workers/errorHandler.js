import { put } from 'redux-saga/effects';

export function* errorHandler(error, errorAction) {
  const {
    response: { status, data },
  } = error;
  switch (status) {
    case 404:
      yield put(errorAction(data));
      break;
    case 400:
      yield put(errorAction(data));
      break;
    default:
      throw new Error(data);
  }
}
