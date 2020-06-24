import { call, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { api } from 'api';

// Tools
import {
  profileChangeStart,
  profileChangeStop,
  profileChangeFill,
  profileCreatingError,
} from '../../actions';

export function* changeContact({ payload }) {
  try {
    const token = Cookies.get('token');
    yield put(profileChangeStart());
    const result = yield call(api.contacts.change, payload.id, payload.data, token);
    yield put(profileChangeFill(result));
  } catch (error) {
    yield call(profileCreatingError, error);
  } finally {
    yield put(profileChangeStop());
  }
}
