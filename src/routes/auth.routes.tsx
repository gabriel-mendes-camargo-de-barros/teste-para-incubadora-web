import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

const authRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default authRoutes;