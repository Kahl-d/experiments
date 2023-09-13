import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../css/Contact.css';

const Contact = () => {
  return (
    <div className="Contact-container">
      <div className="Contact-info">
        <h1> Contact </h1>
        <p>
          <FaPhone /> <a href="tel:510-363-4485">510-363-4485</a>
        </p>
        <p>
          <FaEnvelope /> <a href="mailto:akhadka2@sfsu.edu">akhadka2@sfsu.edu</a>
        </p>
        <p>
          <FaLinkedin /> <a href="https://www.linkedin.com/in/anish-khadka-55025b11b">LinkedIn</a>
        </p>
        <p>
          <FaGithub /> <a href="https://www.github.com/AnishKhadka862">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
