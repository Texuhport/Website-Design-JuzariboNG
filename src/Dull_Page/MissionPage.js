import React from 'react';
import stamp from './Stamp.png'; 
import ITSupport from './E2EITSupport.png'
import SoftwareDev from './SoftwareDev.png'
import HelpCenter from './HelpCenterServices.png'
import Cybersecurity from './Cybersecurity.png'
import CloudComputing from './CloudComputing.png'
import Nationwide from './Nationwide.png'
function HomePage2() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ marginBottom: '100px' }}>
     
      <h1>Our Mission: Drive Innovation with Intuitive Technologies </h1>
      <p style={{ maxWidth: '900px', margin: '20px', textAlign: 'left' }}>We enable superior outcomes by developing reliable and empowering connections to remove hurdles to business growth </p>
    </div>
    <h1>Core Services</h1>
    <div className="grid-container">
        {/* First row */}
        <div className="grid-item">
          <img src={ITSupport} alt="A drawing of two wires with perfectly paired puzzle pieces on the end just waiting to be connected" />
          <h2>End-To-End IT Support</h2>
        </div>
        <div className="grid-item">
          <img src={SoftwareDev} alt="A wrench tool and some lines of code on a 2d computer drawing" />
          <h3>High-Fidelity Software Development</h3>
        </div>
        <div className="grid-item">
          <img src={Cybersecurity} alt="A  drawn computer with a shield on top of it. The shield has a lock on it." />
          <h3>Cybersecurity Solutions</h3>
        </div>

        {/* Second row */}
        <div className="grid-item">
          <img src={CloudComputing} alt="Two servers drawn with arrows depicting their strong connection" />
          <h3>Cloud Computing Services</h3>
        </div>
        <div className="grid-item">
          <img src={HelpCenter} alt="A faceless drawn character with a headset on and a chat bubble by their head" />
          <h3>Help Desk Support</h3>
        </div>
      </div>
      <div style={{ marginBottom: '100px' }}>
      </div>
    <h1>Operational Reach</h1>
    <img src={Nationwide} alt="A 2D Outline of Nigeria with dots and lines representing a nationwide network branching from the headquarters in Abuja (the middle of the country)" className="network" />
    <p style={{ maxWidth: '1000px', margin: '20px', textAlign: 'left' }}>With headquarters in the Federal Capital Territory (FCT) Abuja, Nigeria, and satellite offices through our partners across major cities, our reach extends nationwide, allowing our services and ensuring clients receive prompt and efficient solutions regardless of their location. </p>
    </div>
  );
}




export default HomePage2;
