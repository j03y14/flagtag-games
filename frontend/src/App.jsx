import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SigninPage from './pages/SinginPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </Router>
  );
};
export default App;
