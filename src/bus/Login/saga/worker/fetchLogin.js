import { api } from 'api';

// Workers
import { makeRequestWithSpinner } from 'workers';

// Tools
import {
  loginFetchingStart,
  loginFetchingStop,
  loginFill,
  loginFetchingError,
} from '../../actions';

export function* fetchLogin({ payload, history }) {
  const options = {
    fetcher: api.login,
    data: payload,
    fetcherParam: {},
    start: loginFetchingStart,
    stop: loginFetchingStop,
    fill: loginFill,
    setErrorAction: loginFetchingError,
    history,
    path: '/profile',
  };

  yield makeRequestWithSpinner(options);
}
