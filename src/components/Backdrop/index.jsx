import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const CustomBackdrop = ({ show }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={show}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

CustomBackdrop.propTypes = {
  show: PropTypes.bool.isRequired,
};
