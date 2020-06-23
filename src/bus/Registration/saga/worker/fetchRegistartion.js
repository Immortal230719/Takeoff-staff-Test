// API
import { api } from 'api';

// Workers
import { makeRequestWithSpinner } from 'workers';

// Tools
import {
  registrationFetchingStart,
  registrationFetchingStop,
  registrationFill,
  registrationFetchingError,
} from '../../actions';

export function* fetchRegistration({ payload }) {
  const options = {
    fetcher: api.registration,
    data: payload,
    fetcherParam: {},
    start: registrationFetchingStart,
    stop: registrationFetchingStop,
    fill: registrationFill,
    setErrorAction: registrationFetchingError,
  };

  yield makeRequestWithSpinner(options);
}
