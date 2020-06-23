import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded';

const useStyles = makeStyles((theme) => ({
  btnReset: {
    margin: theme.spacing(2),
    background:
      'linear-gradient(45deg, rgb(98, 219, 250) 30%, rgb(1, 200, 207) 90%)',
    color: '#fff',
  },
}));

export const ResetBtn = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Button
      type="reset"
      variant="contained"
      color="inherit"
      size="large"
      className={styles.btnReset}
      endIcon={<RotateLeftRoundedIcon fontSize="large" color="inherit" />}
      {...props}
    >
      {children}
    </Button>
  );
};

ResetBtn.propTypes = {
  children: PropTypes.node.isRequired,
};
