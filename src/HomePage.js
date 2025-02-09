var React = require('react');
var stamp = require('./Stamp.png');
var DataManagement = require('./SoftwareDev.png');
var InternetOfThings = require('./InternetOfThings.png');
var ITServices = require('./ProfITServices.png');
var Cybersecurity = require('./Cybersecurity.png');
var AnalyticsAI = require('./AnalyticsAI.png');
var Nationwide = require('./Nationwide.png');
var Infrastructure = require('./ITInfrastructure.png');
var ContactUs = require('./ContactUs.jpg');
require('./App.css');

function HomePage() {
  return React.createElement('div', null,
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
      React.createElement('h1', null, 'Our Mission'),
      React.createElement('p', { style: { maxWidth: '1000px', margin: '5px', textAlign: 'center', fontSize: '20px' } }, 'Our mission is to enable innovative outcomes through intuitive technologies. We aim to be reliable allies for emerging businesses, utilizing technology to address unique business challenges while maintaining a platform-neutral stance.'),
      React.createElement('p', { style: { maxWidth: '1000px', margin: '10px', textAlign: 'center', fontSize: '20px' } }, 'We believe that technology should simplify rather than complicate, enhancing human capability rather than replacing it, as we consider people and partnerships to be the core pillars of our solutions.')
    ),
    React.createElement('div', null,
      React.createElement('h1', null, 'Core Services'),
      React.createElement('div', { className: 'grid-container' },
        React.createElement('div', { className: 'grid-item' },
          React.createElement('img', { src: ITServices, alt: 'Drawings of IT Professionals juxtapozed with graphs, technologies and each other. In the brand colors of orange and dark blue' }),
          React.createElement('h2', null, 'Professional IT Services')
        ),
        React.createElement('div', { className: 'grid-item' },
          React.createElement('img', { src: Cybersecurity, alt: 'A drawing of a team huddled around a table two sitting in front of laptops and one standing with their hand making a wing-like gesture.' }),
          React.createElement('h2', null, 'Cybersecurity')
        ),
        React.createElement('div', { className: 'grid-item' },
          React.createElement('img', { src: DataManagement, alt: 'A drawing of an IT Professional at their computer desk interacting with items floating out of the computer' }),
          React.createElement('h2', null, 'Software App Development')
        ),
        React.createElement('div', { className: 'grid-item' },
          React.createElement('img', { src: AnalyticsAI, alt: 'A drawing of an IT Professional looking at graphs and analytics' }),
          React.createElement('h2', null, 'Analytics & AI')
        ),
        React.createElement('div', { className: 'grid-item' },
          React.createElement('img', { src: InternetOfThings, alt: 'A drawing of a Computer Professional working on a decision tree or flow chart' }),
          React.createElement('h2', null, 'Internet Of Things')
        ),
        React.createElement('div', { className: 'grid-item' },
          React.createElement('img', { src: Infrastructure, alt: 'A drawing of an IT Professional facing the viewer with multiple devices at their standing desk' }),
          React.createElement('h2', null, 'IT Infrastructure Services')
        )
      )
    ),
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
      React.createElement('h1', null, 'About Our Team'),
      React.createElement('p', { style: { maxWidth: '1000px', margin: '20px', textAlign: 'left' } }, 'At Juzaribo, our guiding force is a seasoned leadership team with a rich background in a variety of fields, including high-performance computing infrastructure, big data, information management systems, business and commerce, finance, supply chain management, pharmaceuticals, and education. This team brings an average of over three decades of expertise from sectors such as oil and gas, international business, wealth management, finance, and IT infrastructure.'),
      React.createElement('p', { style: { maxWidth: '1000px', margin: '20px', textAlign: 'left' } }, "Our strength is further enhanced by a dedicated team of technical specialists, each bringing a broad spectrum of IT experience to the table. Juzaribo's depth of industry knowledge is significantly expanded through our wide-ranging network of partnerships. By leveraging our multidisciplinary expertise, we are committed to delivering innovative and impactful solutions to our clients."),
      React.createElement('img', { src: stamp, alt: 'The four pillars of Juzaribo Technology represented as a segmented wheel with the words: People -> Partnerships -> Processes -> Technology', className: 'stamp' }),
      React.createElement('h2', null, 'Operational Reach'),
      React.createElement('img', { src: Nationwide, alt: 'A 2D Outline of Nigeria with dots and lines representing a nationwide network branching from the headquarters in Abuja (the middle of the country)', className: 'network' }),
      React.createElement('p', { style: { maxWidth: '1000px', margin: '20px', textAlign: 'center' } }, 'With headquarters in the Federal Capital Territory (FCT) Abuja, Nigeria, and satellite offices through our partners across major cities, our reach extends nationwide, allowing our services and ensuring clients receive prompt and efficient solutions regardless of their location.')
    ),
    React.createElement('h2', null, 'Contact Us'),
    React.createElement('h3', null, 'Send us an email at info@juzaribo.ng'),
    React.createElement('a', { href: 'mailto:info@juzaribo.ng', className: 'email-button', subject: 'Contacting You From Your Website' }, 'Send Email'),
    React.createElement('br'),
    React.createElement('img', { src: ContactUs, alt: 'A photo of two hands shaking so firmly it looks AI-generated but it is not', className: 'TeamMeet' })
  );
}

module.exports = HomePage;
