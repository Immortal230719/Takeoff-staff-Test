// Core
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const middleware = [sagaMiddleware];

export { history, middleware, sagaMiddleware };
