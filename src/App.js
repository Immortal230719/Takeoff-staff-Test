import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Other
import { rootStore } from './init/rootStore';
import { Routes } from './routes';
import { history } from './init/middlewares';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Ubuntu, Montserrat'].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#ddd',
    },
  },
});

export const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={rootStore}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
);
