import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import Header from './components/Header';
import Bio from './components/Bio';
import Intro from './components/Intro';
import Contact from './components/Contact';

function AppTwo() {
  const [selectedComponent, setSelectedComponent] = useState('bio');

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };
  
  const handleSidebarToggle = () => {
    setSelectedComponent(selectedComponent === 'collapsed' ? 'bio' : 'collapsed');
  };
  

  return (
    <div className="App">
      
      <nav className={`sidebar ${selectedComponent === 'collapsed' ? 'collapsed' : ''}`}>
  <button onClick={() => handleSidebarToggle()}>
    {/* {selectedComponent === 'collapsed' ? 'Expand' : 'Collapse'} */}
    {selectedComponent === 'collapsed' ? '>>>' : '<<<'}

  </button>
  <h2 className="sidebar-title">MyPortfolio</h2>

        <ul>
          <li
            className={selectedComponent === 'intro' ? 'active' : ''}
            onClick={() => handleComponentChange('intro')}
          >
            Intro
          </li>
          <li
            className={selectedComponent === 'bio' ? 'active' : ''}
            onClick={() => handleComponentChange('bio')}
          >
            Bio
          </li>

          <li
            className={selectedComponent === 'contact' ? 'active' : ''}
            onClick={() => handleComponentChange('contact')}
          >
            Contact
          </li>
        </ul>
      </nav>

      

      <main className="main-content">
        <Header />
        {selectedComponent === 'bio' && <Bio />}
        {selectedComponent === 'intro' && <Intro />}
        {selectedComponent === 'contact' && <Contact />}
      </main>
    </div>

    
  );
}

export default AppTwo;
