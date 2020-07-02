import * as actionCreator from '../actions';
import * as T from '../types';

describe('actions', () => {
  it('loginFetchingStart', () => {
    const expectedAction = {
      type: T.LOGIN_FETCH_START,
    }
    expect(actionCreator.loginFetchingStart()).toEqual(expectedAction);
  });

  it('loginFetchingStop', () => {
    const expectedAction = {
      type: T.LOGIN_FETCH_STOP,
    }
    expect(actionCreator.loginFetchingStop()).toEqual(expectedAction);
  });
});
