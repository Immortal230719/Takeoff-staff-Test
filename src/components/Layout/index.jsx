import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

export const Layout = ({ children, className, ...props }) => (
  <Container
    {...props}
    className={className}
    style={{
      zIndex: 1,
      position: 'relative',
    }}
    maxWidth="lg"
  >
    {children}
  </Container>
);

Layout.defaultProps = {
  className: '',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
