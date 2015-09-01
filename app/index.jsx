import React from 'react';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';

var history = createHashHistory();

React.render((
  <Router history={history} children={routes} />
), document.getElementById("app"));
