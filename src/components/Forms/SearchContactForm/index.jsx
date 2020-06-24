import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';

import { renderTextField } from 'components';

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
  const requiredFields = ['name'];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'This field is required';
    }
  });
  return errors;
};

// Validate functions

const SearchContactForm = (props) => {
  const { handleSubmit } = props;
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
      </form>
    </>
  );
};

export default reduxForm({
  form: 'searchContact',
  validate,
})(SearchContactForm);

SearchContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
