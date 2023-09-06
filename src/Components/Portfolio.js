import React from "react";
import '../Components/portfolio.css'


const Portfolio = ()=>{
    return(

        <div id="mainContainer">
            <div id="upperContainer" className="containers">
                <div id="upperLeft" className="upperContainers">Bio</div>
                <div id="upperRight" className="upperContainers">Connect</div>
            </div>
            <div id="lowerContainer" className="containers">
                <div id="lowerLeft" className="lowerContainers">Education</div>
                <div id="lowerMiddle" className="lowerContainers">Skills</div>
                <div id="lowerRight" className="lowerContainers">Projects</div>
            </div>
        </div>
    )

}

export default Portfolio;