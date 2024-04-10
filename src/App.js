import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home/Home';
import HowItWorks from './home/HowItWorks';
import Faq from './home/Faq';
import Equality from './home/Equality';
import OpenSource from './home/OpenSource';
import Jackie from './home/Jackie';
import Signup from './signup/Signup';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Home} />
        <Route path='/howitworks' component={HowItWorks} />
        <Route path='/faq' component={Faq} />
        <Route path='/equality' component={Equality} />
        <Route path='/open-source' component={OpenSource} />
        <Route path='/jackie-robinson' component={Jackie} />
        <Route path='/signup' component={Signup} />
        <Route path='/log-in' component={Login} />
        <Route path='/new-dashboard' component={Dashboard} />
        {/* <Route
          path="/log-in"
          component={() => {
            global.window && (global.window.location.href = 'https://admin.fantasyhomeruns.com/log-in');
            return null;
          }} /> */}
        {/* <Route
          path="/signup"
          component={() => {
            global.window && (global.window.location.href = 'https://admin.fantasyhomeruns.com/signup');
            return null;
          }} /> */}
        <Route
          path="/dashboard"
          component={() => {
            global.window && (global.window.location.href = 'https://admin.fantasyhomeruns.com/dashboard');
            return null;
          }} />
      </div>
    </Router>
  );
}

export default App;
