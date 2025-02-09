var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');
require('./index.css');

var rootElement = document.getElementById('root');
ReactDOM.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App, null)
  ),
  rootElement
);
