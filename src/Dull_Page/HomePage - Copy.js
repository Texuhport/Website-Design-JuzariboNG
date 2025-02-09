import React from 'react';
import stamp from './Stamp.png'; 
import DataManagement from './SoftwareDev.png'
import InternetOfThings from './InternetOfThings.png'
import ITServices from './ProfITServices.png'
import Cybersecurity from './Cybersecurity.png'
import AnalyticsAI from './AnalyticsAI.png'
import Nationwide from './Nationwide.png'
import Infrastructure from './ITInfrastructure.png'
import ContactUs from './ContactUs.jpg'

function HomePage() {
  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Our Mission</h1>
      <p style={{ maxWidth: '1000px', margin: '5px', textAlign: 'center', fontSize:'20px'}}>Our mission is to enable innovative outcomes through intuitive technologies. We aim to be reliable allies for emerging businesses, utilizing technology to address unique business challenges while maintaining a platform-neutral stance. </p>
      <p style={{ maxWidth: '1000px', margin: '10px', textAlign: 'center', fontSize:'20px'}}> We believe that technology should simplify rather than complicate, enhancing human capability rather than replacing it, as we consider people and partnerships to be the core pillars of our solutions.</p>
    </div>
    <br></br>
    <br></br>
    <div>
    <h1>Core Services</h1>

    <div className="grid-container">
    {/* First row */}
    <div className="grid-item">
        <img src={ITServices} alt="A drawing of two wires with perfectly paired puzzle pieces on the end just waiting to be connected" />
        <h2>Professional IT Services</h2>
    </div>
    <div className="grid-item">
        <img src={Cybersecurity} alt="A wrench tool and some lines of code on a 2d computer drawing" />
        <h2>Cybersecurity</h2>
    </div>
    <div className="grid-item">
        <img src={DataManagement} alt="A  drawn computer with a shield on top of it. The shield has a lock on it." />
        <h2>Software App Development</h2>
    </div>

    {/* Second row */}
    <div className="grid-item">
        <img src={AnalyticsAI} alt="Two servers drawn with arrows depicting their strong connection" />
        <h2>Analytics & AI</h2>
    </div>
    <div className="grid-item">
        <img src={InternetOfThings} alt="A faceless drawn character with a headset on and a chat bubble by their head" />
        <h2>Internet Of Things</h2>
    </div>
    <div className="grid-item">
        <img src={Infrastructure} alt="A faceless drawn character with a headset on and a chat bubble by their head" />
        <h2>IT Infrastructure Services</h2>
    </div>
    </div>
    <div style={{ marginBottom: '100px' }}>
    </div>
    
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>About Our Team</h1>
      <p style={{ maxWidth: '1000px', margin: '20px', textAlign: 'left' }}>At Juzaribo, our guiding force is a seasoned leadership team with a rich background in a variety of fields, including high-performance computing infrastructure, big data, information management systems, business and commerce, finance, supply chain management, pharmaceuticals, and education. This team brings an average of over three decades of expertise from sectors such as oil and gas, international business, wealth management, finance, and IT infrastructure.</p>

      <p style={{ maxWidth: '1000px', margin: '20px', textAlign: 'left' }}>Our strength is further enhanced by a dedicated team of technical specialists, each bringing a broad spectrum of IT experience to the table. Juzaribo's depth of industry knowledge is significantly expanded through our wide-ranging network of partnerships. By leveraging our multidisciplinary expertise, we are committed to delivering innovative and impactful solutions to our clients.</p>
      <h2>Operational Reach</h2>
      <img src={Nationwide} alt="A 2D Outline of Nigeria with dots and lines representing a nationwide network branching from the headquarters in Abuja (the middle of the country)" className="network" />
      <p style={{ maxWidth: '1000px', margin: '20px', textAlign: 'center' }}>With headquarters in the Federal Capital Territory (FCT) Abuja, Nigeria, and satellite offices through our partners across major cities, our reach extends nationwide, allowing our services and ensuring clients receive prompt and efficient solutions regardless of their location. </p>
    </div>
    <img src={stamp} alt="A wheel showing the four pillars of Juzaribo Technology Ltd.: People, Partnerships, Processes and Technology" className="stamp" />
       <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div>
      <h2> Contact Us by Email at info@juzaribo.ng</h2>

      <a href="mailto:info@juzaribo.ng" className="email-button" subject="Contacting You From Your Website">
        Send Email
      </a>
      <br></br>
      <img src={ContactUs} alt="A drawing of two wires with perfectly paired puzzle pieces on the end just waiting to be connected" className="TeamMeet"/>
    </div>
    </div>
  );
}

export default HomePage;
