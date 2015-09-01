import React from 'react';
import { Router, Route, Link } from 'react-router';
import App from './components/App';
import About from './components/About';

var routes = (
  <Route path="/" component={App}>
    <Route path="about" component={About}>
    </Route>
  </Route>
)

export default routes;
