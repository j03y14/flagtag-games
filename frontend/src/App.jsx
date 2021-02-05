import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SigninPage from './pages/SinginPage';
// import AuthCallback from './components/signin/AuthCallback';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SigninPage} />
        {/* <Route path="/callback" component={AuthCallback} /> */}
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};
export default App;
