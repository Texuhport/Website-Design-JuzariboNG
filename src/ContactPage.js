var React = require('react');
var ContactUs = require('./ContactUs.jpg');

function ContactPage() {
  return React.createElement('div', null,
    React.createElement('h3', null, 'Send us an email at info@juzaribo.ng'),
    React.createElement('a', { href: 'mailto:info@juzaribo.ng', className: 'email-button', subject: 'Contacting You From Your Website' }, 'Send Email'),
    React.createElement('br'),
    React.createElement('img', { src: ContactUs, alt: 'A drawing of two wires with perfectly paired puzzle pieces on the end just waiting to be connected', className: 'TeamMeet' })
  );
}

module.exports = ContactPage;
