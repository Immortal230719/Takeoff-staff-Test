import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { SignUpBtn, LoginBtn } from 'components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(112, 112, 112)',
    height: '100vh',
  },
  links: {
    textDecoration: 'none',
  },
});

export const Main = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Link to="/login" className={styles.links}>
        <LoginBtn>Login</LoginBtn>
      </Link>
      <Link to="/registration" className={styles.links}>
        <SignUpBtn>Sign Up</SignUpBtn>
      </Link>
    </Box>
  );
};
