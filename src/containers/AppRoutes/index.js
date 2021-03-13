import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from '../../configs/routes';

const NotFound = lazy(() => import('../NotFound'));

const AppRoutes = () => {
  const { HOME, BOOKS, NOT_FOUND } = routes;
  return (
    <Switch>
      <Route path={[HOME.path, BOOKS.path]} exact component={NotFound} />
      <Route path={NOT_FOUND.path} component={NotFound} />
      <Redirect to={NOT_FOUND.path} />
    </Switch>
  );
};

export default AppRoutes;
