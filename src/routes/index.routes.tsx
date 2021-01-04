import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AuthContext from '../contexts/auth';

import authRoutes from './auth.routes';
import appRoutes from './app.routes';


const Routes = () => {
  const { signed } = useContext(AuthContext);

  if (signed === true) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" exact component={appRoutes} />
        </Switch>
      </BrowserRouter >
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/auth" />
          </Route>
          <Route path="/auth" exact component={authRoutes} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default Routes;