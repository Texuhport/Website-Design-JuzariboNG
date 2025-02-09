var React = require('react');
require('./Navbar.css'); // Make sure this file exists and is correctly imported
var logo = require('./Logoribo.png');

function Navbar() {
  return React.createElement('nav', { className: 'navbar' },
    React.createElement('div', { className: 'nav-item' }),
    React.createElement('a', { href: '/' },
      React.createElement('img', { src: logo, alt: 'Jozoribo Technology Ltd. Logo', className: 'logo' })
    ),
    React.createElement('div', { className: 'links' },
      React.createElement('a', { href: '/' }, 'Home'),
      React.createElement('a', { href: '/contact' }, 'Contact')
    )
  );
}

module.exports = Navbar;
