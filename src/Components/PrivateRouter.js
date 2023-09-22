import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = ({ children, ...routeProps }) => {
  const profile = false;

  if (!profile) {
    return <Redirect to="/signin"/>;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRouter;
