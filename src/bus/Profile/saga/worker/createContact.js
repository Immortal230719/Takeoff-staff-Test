import { call, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { api } from 'api';

// Tools
import {
  profileCreateStart,
  profileCreateStop,
  profileCreateFill,
  profileCreatingError,
} from '../../actions';

export function* createContact({ payload }) {
  try {
    const token = Cookies.get('token');
    yield put(profileCreateStart());
    const result = yield call(api.contacts.create, payload, token);
    yield put(profileCreateFill(result));
  } catch (error) {
    yield call(profileCreatingError, error);
  } finally {
    yield put(profileCreateStop());
  }
}
