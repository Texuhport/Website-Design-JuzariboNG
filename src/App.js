var React = require('react');
var Router = require('react-router-dom').BrowserRouter;
var Routes = require('react-router-dom').Routes;
var Route = require('react-router-dom').Route;
var Navbar = require('./Navbar');
var HomePage = require('./HomePage');
var ContactPage = require('./ContactPage');

function App() {
  return (
    React.createElement(Router, null,
      React.createElement("div", {className: "App"},
        React.createElement(Navbar, null),
        React.createElement(Routes, null,
          React.createElement(Route, {path: "/", element: React.createElement(HomePage, null)}),
          React.createElement(Route, {path: "/contact", element: React.createElement(ContactPage, null)})
        )
      )
    )
  );
}

module.exports = App;
