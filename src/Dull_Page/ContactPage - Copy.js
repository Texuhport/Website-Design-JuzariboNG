import React from 'react';
import ContactUs from './ContactUs.jpg'
function ContactPage() {
  return (
    <div>
      <h3>Send us an email at info@juzaribo.ng</h3>

      <a href="mailto:info@juzaribo.ng" className="email-button" subject="Contacting You From Your Website">
        Send Email
      </a>
      <br></br>
      <img src={ContactUs} alt="A drawing of two wires with perfectly paired puzzle pieces on the end just waiting to be connected" className="TeamMeet"/>
    </div>
  );
}

export default ContactPage;
