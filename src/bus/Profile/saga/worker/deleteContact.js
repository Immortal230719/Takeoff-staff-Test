import { call, put } from 'redux-saga/effects';
import { api } from 'api';
import Cookies from 'js-cookie';

// Tools
import {
  profileDeleteStart,
  profileDeleteStop,
  profileDeleteFill,
  profileDeletingError,
} from '../../actions';

export function* deleteContact({ payload }) {
  try {
    const token = Cookies.get('token');
    yield put(profileDeleteStart());
    yield call(api.contacts.delete, payload, token);
    yield put(profileDeleteFill(payload));
  } catch (error) {
    yield call(profileDeletingError, error);
  } finally {
    yield put(profileDeleteStop());
  }
}
