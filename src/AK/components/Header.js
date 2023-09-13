import React from 'react';
import Profilepicture from './Profilepicture';
import '../css/Header.css'; // Import your CSS file  

function Header() {
  return (
    <header>
      <h1>Anish Khadka</h1>
      <h2>CSC 648 Team 03</h2>
      <h3>Front-End Developer</h3>
      <Profilepicture />
    </header>
  );
}

export default Header;
