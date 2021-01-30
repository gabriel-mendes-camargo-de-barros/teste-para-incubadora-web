import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
            <Route path="/" exact>
              <Redirect to="/auth" />
            </Route>
        <Route path="/auth" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;