import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
});

const validate = (values) => {
  const errors = {};
  const requiredFields = ['name', 'email'];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'This field is required';
    }
  });

  if (
    values.email
    && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

// Validate functions

const CreateContactForm = (props) => {
  const {
    handleSubmit, reset, pristine, submitting, invalid,
  } = props;
  const styles = useStyles();

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Field
          margin="dense"
          id="Name"
          name="name"
          label="Name"
          variant="outlined"
          type="text"
          component={renderTextField}
        />
        <Field
          margin="dense"
          id="Email"
          name="email"
          label="Email"
          variant="outlined"
          type="text"
          multiline
          rowsMax="4"
          component={renderTextField}
        />
        <div className={styles.flex}>
          <ResetBtn disabled={pristine || submitting} onClick={reset}>
            Reset
          </ResetBtn>
          {submitting && <CircularProgress />}
          <SubmitBtn disabled={pristine || submitting || invalid}>
            Create
          </SubmitBtn>
        </div>
      </form>
    </>
  );
};

export default reduxForm({
  form: 'createContact',
  validate,
})(CreateContactForm);

CreateContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};
