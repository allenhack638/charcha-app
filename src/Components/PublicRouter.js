import React from 'react';
import { Redirect } from 'react-router-dom/';
import { Route } from 'react-router-dom';

const PublicRouter = ({ children, ...routeProps }) => {
  const profile = false;

  if (profile) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRouter;
