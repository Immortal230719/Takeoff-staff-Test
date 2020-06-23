import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

// Reducers
import { registartionReducer } from 'bus/Registration/reducer';
import { loginReducer } from 'bus/Login/reducer';
import { profileReducer } from 'bus/Profile/reducer';

import { history } from './middlewares';

export const rootReducer = combineReducers({
  register: registartionReducer,
  profile: profileReducer,
  login: loginReducer,
  router: connectRouter(history),
  form: formReducer,
});
