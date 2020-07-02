import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const useStyles = makeStyles((theme) => ({
  btnUp: {
    margin: theme.spacing(2),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#fff',
  },
}));

export const SignUpBtn = ({ children, onClick }) => {
  const styles = useStyles();

  return (
    <Button
      type="submit"
      variant="contained"
      color="inherit"
      size="large"
      className={styles.btnUp}
      endIcon={<AssignmentTurnedInIcon fontSize="large" color="inherit" />}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

SignUpBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

SignUpBtn.defaultProps = {
  onClick: () => false,
};
