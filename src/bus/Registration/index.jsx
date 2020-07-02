import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reset } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';

import { SignUpForm, CustomBackdrop, BackBtn } from 'components';
import { book } from 'routes/book';
import { registrationAsync, registrationErrorReset } from './actions';
import { getRegister } from './selectors';

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
    color: '#fff',
  },
});

export const Registration = ({ history }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { isFetching, error, errorMessage } = useSelector(getRegister)

  const submitRegistrationHandler = (values) => {
    dispatch(registrationAsync(values));
    dispatch(reset('signUp'));
    history.push(book.login);
  };

  const resetErrorHandler = () => {
    dispatch(registrationErrorReset())
  }

  return (
    <>
      { isFetching && (<CustomBackdrop show={isFetching} />) }
      <div className={styles.wrapper}>
        { error
          ? (
            <Typography align="center" variant="h3" component="h1" gutterBottom>
              {errorMessage}
              <Link onClick={resetErrorHandler} className={styles.linkBtn} to="/">
                <BackBtn>Back</BackBtn>
              </Link>
            </Typography>
          )
          : (

            <div className={styles.formWrapper}>
              <Typography align="center" variant="h3" component="h1" gutterBottom>
                Registration
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant="subtitle1"
                component="p"
              >
                Please, enter all Fields
              </Typography>
              <SignUpForm
                onSubmit={submitRegistrationHandler}
              />
              <Link className={styles.linkBtn} to="/">
                <BackBtn>Back</BackBtn>
              </Link>
            </div>
          )}
      </div>
    </>
  );
};

Registration.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}

Registration.defaultProps = {
  history: {},
}
