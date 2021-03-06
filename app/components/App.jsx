import React from 'react';
import { Link } from 'react-router';

var App = React.createClass({
  render () {
    return (
      <div>
        <div><Link to="/">App</Link></div>
        <div><Link to="/about">About</Link></div>
        <div>{ this.props.children }</div>
      </div>
    );
  }
});

export default App;
