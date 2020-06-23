import React from 'react';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux-form';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { LoginForm, CustomBackdrop, BackBtn } from 'components';
import { getLogin } from './selectors';
import { loginAsync, loginErrorReset } from './actions';
// import { loadLoginForm } from 'actions/sagaWatcherActions';

const useStyles = makeStyles({
  linkBtn: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    zIndex: 1,
    position: 'relative',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  },
  formWrapper: {
    position: 'relative',
    width: '600px',
    padding: '15px',
    borderRadius: '15px',
  },
});

export const Login = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { isFetching, error, errorMessage } = useSelector(getLogin)

  const submitHandler = (values) => {
    // eslint-disable-next-line react/prop-types
    const { history } = props;
    dispatch(loginAsync(values, history));
    dispatch(reset('login'));
  };

  const resetErrorHandler = () => {
    dispatch(loginErrorReset())
  }

  return (
    <>
      { isFetching && (<CustomBackdrop show={isFetching} />) }
      <div className={styles.wrapper}>
        { error
          ? (
            <Typography align="center" variant="h3" component="h1" gutterBottom>
              {errorMessage}
              <Link onClick={resetErrorHandler} className={styles.linkBtn} to="/login">
                <BackBtn>Back</BackBtn>
              </Link>
            </Typography>
          )
          : (
            <div className={styles.formWrapper}>
              <Typography
                color="primary"
                align="center"
                variant="h3"
                component="h1"
                gutterBottom
              >
                Login
              </Typography>
              <Typography
                color="primary"
                align="center"
                gutterBottom
                variant="subtitle1"
                component="p"
              >
                Please, enter all Fields
              </Typography>
              <LoginForm onSubmit={submitHandler} />
              <Link className={styles.linkBtn} to="/">
                <BackBtn>Back</BackBtn>
              </Link>
            </div>
          )}
      </div>
    </>
  );
};
