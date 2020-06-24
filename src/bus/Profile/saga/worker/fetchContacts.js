import { api } from 'api';

// Workers
import { makeRequestWithSpinner } from 'workers';

// Tools
import {
  profileFetchingStart,
  profileFetchingStop,
  profileFillContacts,
  profileFetchingError,
} from '../../actions';

export function* fetchContacts() {
  const options = {
    fetcher: api.contacts.fetch,
    start: profileFetchingStart,
    stop: profileFetchingStop,
    fill: profileFillContacts,
    setErrorAction: profileFetchingError,
  };

  yield makeRequestWithSpinner(options);
}
