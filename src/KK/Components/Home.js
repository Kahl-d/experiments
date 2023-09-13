import React from "react";
import { Link } from "react-router-dom";




const Home = () => {
    return(
        <div id="homeContainer">
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
        <div id="comingSoonPost">
            <div className="postTitle">
            <ion-icon name="happy-outline"></ion-icon>
            <div className="postDetails">
            <div className="postName">@csc848T03</div>
            <div className="postAltText">Software Engineer</div>

            </div>
            
            </div>
            <div className="postContent">We, are a work in progress.<ion-icon name="library-outline"></ion-icon></div>
        </div>    
        </div>
    );


};



export default Home;