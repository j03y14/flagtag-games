import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SigninPage from './pages/SinginPage';
import AuthCallback from './components/signin/AuthCallback';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SigninPage} />
        <Route path="/callback" component={AuthCallback} />
      </Switch>
    </Router>
  );
};
export default App;
