import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Instruments
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import {
  middleware,
  sagaMiddleware,
} from './middlewares';

export const rootStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
