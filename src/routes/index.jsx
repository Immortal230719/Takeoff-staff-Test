import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';

// pages
import { Registration } from 'bus/Registration';
import { Main } from 'bus/Main';
import { Login } from 'bus/Login';
import { Profile } from 'bus/Profile';

// wrapped component
import { Layout } from 'components';

import { book } from './book';

export const Routes = () => (
  <Layout>
    <Switch>
      <Route
        exact
        component={Main}
        path={book.root}
      />
      <Route
        exact
        component={Registration}
        path={book.registration}
      />
      <Route
        exact
        component={Login}
        path={book.login}
      />
      <Route
        exact
        component={Profile}
        path={book.profile}
      />
      <Redirect to={book.root} />
    </Switch>
  </Layout>
);
