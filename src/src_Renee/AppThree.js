import React from 'react';
import './App.css'; // You can import your CSS file here if needed.



function AppThree() {
  return (
    
    
      <div className="container">
        <div className="about-me-box">
        <img  id ="placeholder-image" src="https://i.ibb.co/XpV84NL/mePage2.png" alt="image of Renee"  />          {/* <img id="placeholder-image" src="https://ibb.co/HXgYyRm" alt="image of Renee" /> */}
          <div id="name" >About Me | Renee Sewak</div>
          <div id="paragraph">
            As a dedicated and disciplined Computer Science student in my final year,
            I have eagerly embraced the challenges and opportunities that come with this exciting field.
            Beyond the classroom, I am a part-time worker in technology retail. This dual commitment
            has not only sharpened my technical abilities but also honed my time management and multitasking skills.
            My journey as a Computer Science major has been a long one. It was from my many trials and turbulations 
            I've come to discover my true passion for the field. Follow along as I continue to embark on this journey!
          </div>
        </div>
        <div className="right-container">
          <div className="role-box">
            <div id="Role">R O L E </div>
            <div id="role-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex 
              
              </div>
          </div>
          <div className="link-box">
          </div>
          <div className="education-box">
            <div id="Education">E D U C A T I O N </div>
           <img src="https://i.ibb.co/BZNzdmn/sfsu.png" alt="SFSU Logo" id="logo" />
           <img src="https://i.ibb.co/k2N8LzF/csm.png" alt="CSM logo" id="logo" />
            <ul id="Education-list">
              <div class= "schoolName">A.S. Mathematics, College of San Mateo</div>
              <div class= "schoolName">A.S. Computer Science, College of San Mateo</div>
              <div class= "schoolName">B.S. Computer Science, Minor in Mathematics, San Francisco State University (I.P)</div>
            </ul>
          </div>
        </div>
        <div className="right-container2">
          <div className="hobbies-box">
            <div id="hobbies">H O B B I E S </div>
            <div id="hobbies-paragraph">
              Outside of coding, I do have other hobbies. I've always enjoyed painting. Currently, I am working on
              a Medusa painting composed of just white, greys, and black.
              Additionally, I am a travelling connoisseur. Some of my favorite visits have been Fiji, the state of
              Alaska, Singapore, and Colombia. Any other places I should check out? Let me know!
            </div>
          </div>
          <div>
            
          </div>
          <div>
            <div className="language-box">
              <div class = "skills">
              <div id="languages">L A N G U A G E S</div>
              <div class = "languageName">HTML</div>
              <div class = "languageName">CSS</div>
              <div class = "languageName">C++</div>
              <div class = "languageName">Swift</div>
              <div class = "languageName">Java</div>
              </div>
            </div>
          </div>

          <div className="contact-box">
            <a href="mailto:sewakrenee@gmail.com" class="contact-button">Email </a>
            <a href="https://github.com/rsewak" class= "contact-button" target="_blank">GitHub</a>


            </div>
        </div>

        




      </div>
    );
}

export default AppThree;
