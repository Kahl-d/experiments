import React from "react";
import '../Components/app.css'

const Jigsaw = ()=>{
    return(
        <div id="quadrantContainer">
            <div className="axis" id="x-axis"></div>
            <div className="axis" id="y-axis"></div>
            <div className="origin"></div>

            <div id="minusx" className="quadrants"></div>
            <div id="minusy" className="quadrants"></div>
            <div id="minusxy" className="quadrants"></div>
        <div id="mainContainer">
        <div id="hi">Hi</div>
            <div id="hi2">Hi support</div>

            <div></div>
            <div id="journey1" className="journey">
                
                    <div id="journeyBack"></div>
            </div>
            <div id="journey2" className="journey">Journey</div>
            <div id="work"></div>
            <div id="project1">Projects</div>
            <div id="project2">Projects</div>
            
            <div id="interests">Interests</div>
            <div id="contact">Contacts</div>
                
            </div>
            
        </div>
    );
}

export default Jigsaw;