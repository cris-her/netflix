import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, SignUp, SignIn, Browse } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
