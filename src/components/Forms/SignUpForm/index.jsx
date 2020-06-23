import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';

import { SubmitBtn, ResetBtn, renderTextField } from 'components';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '0 auto',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  inputText: {
    '& label': {
      color: '#fff',
    },
    '& div': {
      color: '#fff',
      '& fieldset': {
        border: 'none',
        background: 'inherit',
      },
    },
  },
});

const valueTrim = (value) => value && value.trim();

const validate = (values) => {
  const errors = {};
  const requiredFields = ['name', 'email', 'password', 'password_confirmation'];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.name && values.name.length < 2) {
    errors.name = 'Your name must be more than two character';
  }
  if (
    values.email
    && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (values.password !== values.password_confirmation) {
    errors.password_confirmation = 'Passwords entered do not match';
  }
  return errors;
};

// Validate functions

const SignUpComponent = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    invalid,
  } = props;
  const styles = useStyles();

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Field
          className={styles.inputText}
          margin="dense"
          id="Name"
          name="name"
          label="Name"
          variant="outlined"
          component={renderTextField}
        />
        <Field
          className={styles.inputText}
          margin="dense"
          id="Email"
          name="email"
          label="Email"
          variant="outlined"
          component={renderTextField}
          normalize={valueTrim}
        />
        <Field
          className={styles.inputText}
          margin="dense"
          id="Password"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          component={renderTextField}
        />
        <Field
          className={styles.inputText}
          margin="dense"
          id="ConfirmPassword"
          name="password_confirmation"
          label="ConfirmPassword"
          variant="outlined"
          type="password"
          component={renderTextField}
        />
        <div className={styles.flex}>
          <ResetBtn disabled={pristine || submitting} onClick={reset}>
            Reset
          </ResetBtn>
          <SubmitBtn disabled={pristine || submitting || invalid}>
            Submit
          </SubmitBtn>
        </div>
      </form>
    </>
  );
};

export default reduxForm({
  form: 'signUp',
  validate,
})(SignUpComponent);

SignUpComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};
