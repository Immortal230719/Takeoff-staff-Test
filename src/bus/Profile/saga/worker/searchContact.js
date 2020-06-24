import { call, put } from 'redux-saga/effects';
import { api } from 'api';
import Cookies from 'js-cookie';

// Tools
import {
  profileSearchStart,
  profileSearchStop,
  profileFillContacts,
  profileFetchingError,
} from '../../actions';

export function* searchContact({ payload }) {
  try {
    const token = Cookies.get('token');
    yield put(profileSearchStart());
    const results = yield call(api.contacts.search, payload, token);
    yield put(profileFillContacts(results));
  } catch (error) {
    yield call(profileFetchingError, error);
  } finally {
    yield put(profileSearchStop());
  }
}
