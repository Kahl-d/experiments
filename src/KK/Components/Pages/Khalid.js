import React from "react";
import { Link } from "react-router-dom";
import './kk.css'


const Khalid = () => {
    return(
        <div id="portfolioContainer">
                <div id="portfolioLeft">
                    <Link id="portfolioLeftTop" to={"/"}>
                    {/* <div id="portfolioLeftTop"> */}
                    <ion-icon name="push-outline"></ion-icon>
                    <ion-icon name="footsteps-outline"></ion-icon>
                    <span>CSC 848*</span>
                    {/* </div> */}
                    </Link>

                    <div id="portfolioLeftBottom1">
                    <div className="edHead">Education</div>
                        
                    <div className="ed">
                            <div className="edinfo">

                            <div className="edName">The LNM Institute Of Information Technology</div>    
                            <div className="edRole">Bachelor of Tehcnology</div>
                            </div>
                    <img className="img1" src="https://i.ibb.co/XxdhmDn/Annual-Report-AY-2018-19-001-removebg.png" alt="graduation cap"/>
                            <div className="edLogo"></div>
                        </div>
                        <div className="ed">
                            <div className="edinfo">

                            <div className="edName">San Francisco State University</div>    
                            <div className="edRole">M.S. Data Science Artificial Intelligence</div>
                            </div>
                    <img className="img1" src="https://i.ibb.co/ZzD18sR/sfsu-logo-san-francisco-state-university-freelogovectors-net-1.webp" alt="graduation cap"/>
                            <div className="edLogo"></div>
                        </div>
                        
                    
                    <div className="edHead">Experience</div>
                        <div className="ed">
                            <div className="edinfo">

                            <div className="edName">Innovaccer</div>    
                            <div className="edRole">Healthcare Associate</div>
                            </div>
                    <img className="img1" src="https://i.ibb.co/h8J1mWD/8b1f77b31034c9e5ed8a8517b64648ae02db9fa2.png" alt="graduation cap"/>
                            <div className="edLogo"></div>
                        </div>
                        
                    
                    
                    </div>

                    <div id="portfolioLeftBottom2">
                    <img className="img2" src="https://i.ibb.co/XxdhmDn/Annual-Report-AY-2018-19-001-removebg.png" alt="graduation cap"/>
                    <img className="img3" src="https://i.ibb.co/ZzD18sR/sfsu-logo-san-francisco-state-university-freelogovectors-net-1.webp" alt="graduation cap"/>
                    <img className="img4" src="https://i.ibb.co/h8J1mWD/8b1f77b31034c9e5ed8a8517b64648ae02db9fa2.png" alt="graduation cap"/>
                    </div>

                </div>
                <div id="portfolioMiddle">
                    <div id="projectsHeader">
                        <div className="kHeaders">Skills</div>
                        <div id="projectsMiddle">
                        <ion-icon name="logo-html5"></ion-icon>
                        <ion-icon name="logo-css3"></ion-icon>
                        <ion-icon name="logo-javascript"></ion-icon>
                        <ion-icon name="logo-react"></ion-icon>
                        <ion-icon name="logo-python"></ion-icon>
                        <ion-icon name="podium-outline"></ion-icon>
                    </div>
                    </div>
                    
                    <div id="projectsMiddle2" className="kHeaders">Projects</div>
                    <div id="projectsBottom">
                    <div className="project">
                        <div className="projectHeader">
                            <ion-icon name="code-slash-outline"></ion-icon>
                            <div className="projectHeaderRight">
                                <div className="projectName">Information Retrieval System</div>
                                <div className="projectRole">January 2021</div>
                            </div>
                        </div>
                        <div className="projectContent">An implementation of a web page retrieval system. The program retrieves text from web pages and creates a local dictionary which is used as a pre-processed data structure to help score documents for a particular user query. When a query is entered, the program ranks the documents using a relevance judgment ranking function.</div>
                    </div>
                    <div className="project">
                        <div className="projectHeader">
                            <ion-icon name="code-slash-outline"></ion-icon>
                            <div className="projectHeaderRight">
                                <div className="projectName">Integrated Software Development</div>
                                <div className="projectRole">January 2021</div>
                            </div>
                        </div>
                        <div className="projectContent">Following the TSP approach document by Carnegie Melon department of Computer Science Engineering enabled me to experience software production in real-life software products and services. Under the supervision of TSP Coach, Prof. Philip L. Miller, the team worked on an issue associated with the front-end development of a website involving HTML, CSS, JS, React and other front-end libraries.</div>
                    </div>
                    <div className="project">
                        <div className="projectHeader">
                            <ion-icon name="code-slash-outline"></ion-icon>
                            <div className="projectHeaderRight">
                                <div className="projectName">Textual and Sentiment Analysis</div>
                                <div className="projectRole">January 2021</div>
                            </div>
                        </div>
                        <div className="projectContent">To understand how beliefs and common practices have evolved with time and further analyse different aspects of divinity, used IBM WATSON tone analyser API to get different average emotion scores for different texts belonging to different religions, scientific texts, novels etc.</div>
                    </div>
                    <div className="project">
                        <div className="projectHeader">
                            <ion-icon name="code-slash-outline"></ion-icon>
                            <div className="projectHeaderRight">
                                <div className="projectName">Face Morphing - Image Processing</div>
                                <div className="projectRole">January 2021</div>
                            </div>
                        </div>
                        <div className="projectContent">Implementation of different algorithms like the Delaunay Triangulation helped me understand pixel transformation and translations. Performed face morphing combining different techniques of the course.</div>
                    </div>
                    <div className="project">
                        <div className="projectHeader">
                            <ion-icon name="code-slash-outline"></ion-icon>
                            <div className="projectHeaderRight">
                                <div className="projectName">Information Visualization: COVID</div>
                                <div className="projectRole">January 2021</div>
                            </div>
                        </div>
                        <div className="projectContent">Worked with the d3 library of JavaScript to represent different trends related to COVID-19, using publicly available datasets to draw inferences and observe patterns.</div>
                    </div>
                    <div className="project">
                        <div className="projectHeader">
                            <ion-icon name="code-slash-outline"></ion-icon>
                            <div className="projectHeaderRight">
                                <div className="projectName">Social Network Analysis</div>
                                <div className="projectRole">January 2021</div>
                            </div>
                        </div>
                        <div className="projectContent">Using the network library of Python, performed a thorough analysis of datasets of real networks (High Energy Citation Network and Reddit Hyperlink Network), plotted graphs to observe trends and patterns, and calculated different centrality measures to draw inferences about the networks.</div>
                    </div>
                    <div className="project">
                        <div className="projectHeader">
                            <ion-icon name="code-slash-outline"></ion-icon>
                            <div className="projectHeaderRight">
                                <div className="projectName">California House Price and Predictions</div>
                                <div className="projectRole">January 2021</div>
                            </div>
                        </div>
                        <div className="projectContent">Using Data Analysis Techniques on a data set of Houses in California, learnt -Introduction to Machine Learning -Data operations like cleaning, filtering, and transforming data -Visualization and correlating data attributes using different graphical methods</div>
                    </div>
                    </div>
                </div>    
                <div id="portfolioRight">

                    {/* Hello dangerous code taken HELLO */}
                    <div id="portfolioRightOne">

<div className="hello-parent">
  
<svg className="hello-word" width="365" height="365" viewBox="0 0 365 365">
  
  
  <g id="H-letter">
  <line className="H-left-stroke" x1="17" y1="0" x2="17" y2="124" stroke="#000" fill="none" stroke-width="34" />
  <line className="H-mid-stroke" x1="33" y1="62" x2="68" y2="62" stroke="#000" fill="none" stroke-width="34" />
  <line className="H-right-stroke" x1="84" y1="0" x2="84" y2="124" stroke="#000" fill="none" stroke-width="34" />
  </g>
  
  <g id="E-letter">
    <line className="E-left-stroke" x1="138" y1="0" x2="138" y2="124" stroke="#000" fill="none" stroke-width="34" />
    <line className="E-top-stroke" x1="154" y1="17" x2="201" y2="17" stroke="#000" fill="none" stroke-width="34" />
    <line className="E-mid-stroke" x1="154" y1="62" x2="196" y2="62" stroke="#000" fill="none" stroke-width="34" />
    <line className="E-bottom-stroke" x1="154" y1="107" x2="201" y2="107" stroke="#000" fill="none" stroke-width="34" />
  </g>
  
  <g id="L-one-letter">
    <line className="L-one-long-stroke" x1="17" y1="153" x2="17" y2="277" stroke="#000" fill="none" stroke-width="34" />
    <line className="L-one-short-stroke" x1="33" y1="260" x2="77" y2="260" stroke="#000" fill="none" stroke-width="34" />
  </g>
  
  <g id="L-two-letter">
    <line className="L-two-long-stroke" x1="104" y1="153" x2="104" y2="277" stroke="#000" fill="none" stroke-width="34" />
    <line className="L-two-short-stroke" x1="120" y1="260" x2="164" y2="260" stroke="#000" fill="none" stroke-width="34" />
  </g>
  
  <g id="O-letter">
    <circle className="O-stroke" cx="231" cy="215" r="48" stroke="#000" fill="none" stroke-width="31" />
  </g>
  
  <g id="red-dot">
    
    <circle className="red-dot" cx="325" cy="260" r="20" fill="#FFFFFF" stroke="none" />


    
    <line x1="325" y1="260" x2="325" y2="260" stroke="#FFFFFF" class="red-dot" />
  </g>
  
  
</svg>
</div>

                    </div>

                    {/* Hello dangerous code taken HELLO */}

                </div>


        </div>
    );

};


export default Khalid;