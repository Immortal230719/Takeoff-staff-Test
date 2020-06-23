import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

const useStyles = makeStyles({
  btnBack: {
    background:
      'linear-gradient(45deg, rgb(91, 163, 246) 30%, rgb(7, 103, 212) 90%)',
    color: '#fff',
    width: '100%',
    marginTop: '15px',
  },
});

export const BackBtn = ({ children, className }) => {
  const styles = useStyles();

  return (
    <Button
      variant="contained"
      size="large"
      className={`${styles.btnBack} ${className}`}
      endIcon={<HomeSharpIcon fontSize="large" color="inherit" />}
    >
      {children}
    </Button>
  );
};

BackBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BackBtn.defaultProps = {
  className: '',
}
