import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentInd from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
  btnIn: {
    margin: theme.spacing(2),
    background:
      'linear-gradient(45deg, rgb(70, 160, 89) 30%, rgb(0, 180, 105) 90%)',
    color: '#fff',
  },
}));

export const LoginBtn = ({ children, onClick }) => {
  const styles = useStyles();

  return (
    <Button
      variant="contained"
      size="large"
      className={styles.btnIn}
      endIcon={<AssignmentInd fontSize="large" color="inherit" />}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

LoginBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

LoginBtn.defaultProps = {
  onClick: () => false,
};
