import React from "react";
import { Link } from "react-router-dom";

import '../Pages/about.css'



const AboutUs = () => {
    return( 
        <div id="aboutUsContainer">
        <div id="homeHeader">
        <ion-icon name="flower-outline"></ion-icon>
        <div id="navLinks">
        
            <div className="navBtns">
            <Link className="links" to="/"><ion-icon name="home-outline"></ion-icon></Link>
            <span>Home</span>
            </div>
            <div className="navBtns">
            <Link className="links" to="/AboutUs"><ion-icon name="people-outline"></ion-icon></Link>
            <span>About Us</span>
            </div>

        </div>
        </div>
        <p id="intro">In an age of relentless stress and mental strain, [App's Name] offers a haven of support and understanding. Tailored especially for students, our platform provides a sanctuary where individuals can unburden themselves anonymously, free from the weight of judgment. At the heart of our mission is the belief that vulnerability is a strength, not a weakness. By sharing, viewing, and eventually connecting with like-minded souls, we hope to weave a tapestry of mutual support and companionship. But that's not all — as we grow, we're excited to offer tools to further alleviate academic pressures, such as our notes app and specialized resources for study-related stress. Behind this vision is a dedicated team passionate about mental well-being, striving to make a positive impact on each user's life. Welcome to [Your App's Name], where your voice matters, and you're never alone.</p>
        <p id="meet">Team Members</p>
        <div id="aboutUsTeam">
            <Link className="linklink" to={"/Khalid"}>
            <div className="teamMember">
                <div className="teamMemberHeader">
                    <ion-icon name="person-outline"></ion-icon>
                    <div className="headerRight">
                        <div className="teamMemberName">Khalid Mehtab Khan</div>
                        <div className="teamMemberRole">Team Lead</div>
                    </div>
                    <ion-icon name="footsteps-outline"></ion-icon>
                </div>
                <div className="teamMemberContent">I am wild still very wise.</div>
            </div>
            </Link>
            
            <Link className="linklink">
            <div className="teamMember">
                <div className="teamMemberHeader">
                    <ion-icon name="person-outline"></ion-icon>
                    <div className="headerRight">
                        <div className="teamMemberName">Dat Vo</div>
                        <div className="teamMemberRole">Backend Developer</div>
                    </div>
                    <ion-icon name="cog-outline"></ion-icon>
                </div>
                <div className="teamMemberContent">I am wild still very wise.</div>
            </div>
            </Link>
            <Link className="linklink" to={"/AppOne"}>
            <div className="teamMember">
                <div className="teamMemberHeader">
                    <ion-icon name="person-outline"></ion-icon>
                    <div className="headerRight">
                        <div className="teamMemberName">Jacob Perez</div>
                        <div className="teamMemberRole">Github Master | Backend Developer</div>
                    </div>
                    <ion-icon name="document-attach-outline"></ion-icon>
                </div>
                <div className="teamMemberContent">I am wild still very wise.</div>
            </div>
            </Link>
            <Link className="linklink" to={"/Renee"}>
            <div className="teamMember">
                <div className="teamMemberHeader">
                    <ion-icon name="person-outline"></ion-icon>
                    <div className="headerRight">
                        <div className="teamMemberName">Renee Sewak</div>
                        <div className="teamMemberRole">Scrum Master | Frontend Developer</div>
                    </div>
                    <ion-icon name="flashlight-outline"></ion-icon>
                </div>
                <div className="teamMemberContent">I am wild still very wise.</div>
            </div>
            </Link>
            <Link className="linklink" to={"/AK"}>
            <div className="teamMember">
                <div className="teamMemberHeader">
                    <ion-icon name="person-outline"></ion-icon>
                    <div className="headerRight">
                        <div className="teamMemberName">Anish Khadka</div>
                        <div className="teamMemberRole">Frontend Developer</div>
                    </div>
                    <ion-icon name="library-outline"></ion-icon>
                </div>
                <div className="teamMemberContent">I am wild still very wise.</div>
            </div>
            </Link>
        </div>
        </div>

    );


};


export default AboutUs;