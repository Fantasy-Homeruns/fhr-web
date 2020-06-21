import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home/Home';
import HowItWorks from './home/HowItWorks';
import Faq from './home/Faq';
import Signup from './signup/Signup';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/howitworks' component={HowItWorks} />
        <Route path='/faq' component={Faq} />
        <Route path='/log-in' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
