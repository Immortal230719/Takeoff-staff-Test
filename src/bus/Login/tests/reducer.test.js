import { initialState, loginReducer } from '../reducer';
import * as T from '../types';

describe('login reducer', () => {
  it('LOGIN_FETCH_START', () => {
    const action = {
      type: T.LOGIN_FETCH_START,
    }

    expect(loginReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
    })
  })

  it('LOGIN_FETCH_STOP', () => {
    const initialStateWhenLoading = {
      isLogged: false,
      isFetching: true,
      error: false,
      errorMessage: '',
    }
    const action = {
      type: T.LOGIN_FETCH_STOP,
    }

    expect(loginReducer(initialStateWhenLoading, action)).toEqual({
      ...initialState,
    })
  })

  it('LOGIN_FILL', () => {
    const action = {
      type: T.LOGIN_FILL,
      payload: 'accessToken',
    }

    expect(loginReducer(initialState, action)).toEqual({
      ...initialState,
      error: false,
      isLogged: true,
    })
  })

  it('LOGIN_SET_FETCHING_ERROR', () => {
    const action = {
      type: T.LOGIN_SET_FETCHING_ERROR,
      payload: 'errorMessage',
      error: true,
    }

    expect(loginReducer(initialState, action)).toEqual({
      ...initialState,
      error: action.error,
      errorMessage: action.payload,
    })
  })

  it('LOGIN_RESET_ERROR', () => {
    const initialStateWithError = {
      isLogged: false,
      isFetching: false,
      error: true,
      errorMessage: 'errorMessage',
    }
    const action = {
      type: T.LOGIN_RESET_ERROR,
    }

    expect(loginReducer(initialStateWithError, action)).toEqual({
      ...initialState,
      error: false,
      errorMessage: '',
    })
  })

  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(initialState)
  })
})
