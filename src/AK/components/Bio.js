// src/components/Bio.js
import React from 'react';
import '../css/Bio.css'; 

function Bio() {
  return (
    <div className="bio-card">
      <div className="bio-header">
        <h2>About Me</h2>
      </div>
      <div className="bio-content">
        <p>
            I am leading the front-end for our CSC 648 project representing team 03. I have done several projects in HTML, CSS, JavaScript,
            C and Python. My recent project includes the filesystem 
            project which I completed in Summer 2023 for my CSC 415 class. I also have experience in working with React, Node.js, C++ and Java.
            I have done projects individually and in a group.
       </p>
      </div>
    </div>
  );
}

export default Bio;
