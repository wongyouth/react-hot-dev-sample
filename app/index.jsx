import React from 'react';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';

var history = createHashHistory();

var startApp = () => {
  React.render((
    <Router history={history} children={routes} />
  ), document.getElementById("app"));
};

var isIOS = () => {
  return navigator.userAgent.match(/iPhone OS/);
}

var hackIOS = () => {
  // somewhere in your app
  if(isIOS()) {
    document.body.style.marginTop = '20px';
  }
}

var log = msg => {
  var $log = document.getElementById('log');
  $log.innerHTML += msg + "\n";
}

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
  document.addEventListener('deviceready', hackIOS, false);
} else {
  startApp();
}
