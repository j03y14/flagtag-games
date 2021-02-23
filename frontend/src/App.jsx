import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SigninPage from '@pages/SinginPage';
import AuthCallbackPage from '@pages/AuthCallbackPage';
import MainPage from '@pages/MainPage';
import GameSelectionPage from '@pages/GameSelectionPage';
import AuthRoute from './routes/AuthRoute';

// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SigninPage} />
        <Route path="/callback/:social" component={AuthCallbackPage} />
        <Route path="/gameselection" component={GameSelectionPage} />
        <Route path="/" component={MainPage} />
        <AuthRoute path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};
export default App;
