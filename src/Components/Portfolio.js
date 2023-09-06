import React from "react";
import '../Components/portfolio.css'


const Portfolio = ()=>{
    return(

        <div id="mainContainer">
            <div id="upperContainer" className="containers">
            <div id="upperLeft" className="upperContainers">
                <div id="connectLeft">Empty</div>
                <div id="connectRight">Connect</div>
            </div>
                <div id="upperRight" className="upperContainers">
                    <div id="bioLeft">Code</div>
                    <div id="bioRight">Bio</div>
                </div>
                
            </div>
            <div id="lowerContainer" className="containers">
                <div id="lowerLeft" className="lowerContainers">
                    <div id="education" className="edContainers">
                        <div className="edHead">Education</div>
                        <div className="lists"> 
                            <div className="listDiv">
                            <span className="items1">Laxmi Nivas Mittal</span>
                            <span className="items1">Institute of Information Technology</span>

                            <span className="items2">Bachelor of Technology</span>
                            <span className="items2">Computer Science and Engineering</span>

                            </div>
                            <img className="img1" src="https://i.ibb.co/XxdhmDn/Annual-Report-AY-2018-19-001-removebg.png" alt="graduation cap"/>
                        </div>
                        <div className="lists">
                        <div className="listDiv">
                            <span className="items1">San Francisco State University</span>
                            <span className="items2">Master of Science</span>
                            <span className="items2">Data Science and Artificial Intelligence</span>
                        </div>
                        <img className="img1" src="https://i.ibb.co/ZzD18sR/sfsu-logo-san-francisco-state-university-freelogovectors-net-1.webp" alt="graduation cap"/>

                        </div>
                    </div>
                    <div id="experience" className="edContainers">
                        <div className="edHead">Experience</div>
                        <div className="lists">
                            <div className="listDiv">
                                <span className="items1">Innovaccer Inc.</span>
                                <span className="items2">Healthcare Associate</span>
                            </div>
                        <img className="img1" src="https://i.ibb.co/h8J1mWD/8b1f77b31034c9e5ed8a8517b64648ae02db9fa2.png" alt="graduation cap"/>

                        </div>
                    </div>
                </div>
                <div id="lowerMiddle" className="lowerContainers">Skills</div>
                <div id="lowerRight" className="lowerContainers">Projects</div>
            </div>
        </div>
    )

}

export default Portfolio;