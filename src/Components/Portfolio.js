import React from "react";
import '../Components/portfolio.css'
import reactImg from './output-onlinegiftools.gif';
import dataViz from './data-visualization.png';


const Portfolio = ()=>{
    return(

        <div id="mainContainer">
            <div id="upperContainer" className="containers">
            <div id="upperLeft" className="upperContainers">
                <div id="connectLeft">Empty</div>
                <div id="connectRight">Connect</div>
            </div>
                <div id="upperRight" className="upperContainers">
                    <div id="bioLeft">
                        <img id="qr" src="https://i.ibb.co/wLfYJCs/My-Instagram-QR-Code.png"/>
                    </div>
                    <div id="bioRight">
                        <div id="bioRLeft"></div>
                        <div id="bioRMiddle"></div>
                        <div id="bioRRight">
                            
                        </div>
                    </div>
                </div>
                
            </div>
            <div id="lowerContainer" className="containers">
                <div id="lowerLeft" className="lowerContainers">
                    <div id="education" className="edContainers">
                        <div className="edHead">Education</div>
                        <div className="lists"> 
                            <div className="listDiv">
                            <span className="items1">The LNM</span>
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
                <div id="lowerMiddle" className="lowerContainers">
                    <span id="skillHead">Skills</span>
                    <div>
                        <img className="img2" src={reactImg}/>
                        <span>React</span>
                    </div>

                    <div>
                        <img className="img3" src={dataViz}/>
                        <span>Data Visualization</span>
                    </div>

                </div>
                <div id="lowerRight" className="lowerContainers">
                
                <div id="project1" className="projects">
                    <div className="edHead">Information Retrieval System</div>
                    <div className="projectDesc">An implementation of a web page retrieval system. The program retrieves text from web pages and creates a local dictionary which is used as a pre-processed data structure to help score documents for a particular user query. When a query is entered, the program ranks the documents using a relevance judgment ranking function.</div>
                    <div className="projectIcons">
                        <ion-icon name="logo-python"></ion-icon>
                    </div>
                </div>
                <div id="project5" className="projects">
                    <div className="edHead">Integrated Software Development</div>
                    <div className="projectDesc">Following the TSP approach document by Carnegie Melon department of Computer Science Engineering enabled me to experience software production in real-life software products and services. Under the supervision of TSP Coach, Prof. Philip L. Miller, the team worked on an issue associated with the front-end development of a website involving HTML, CSS, JS, React and other front-end libraries.</div>
                    <div className="projectIcons">
                        <ion-icon name="logo-html5"></ion-icon>
                        <ion-icon name="logo-css3"></ion-icon>
                        <ion-icon name="logo-javascript"></ion-icon>
                        <ion-icon name="logo-react"></ion-icon>
                    </div>
                </div>
                <div id="project2" className="projects">
                    <div className="edHead">Textual and Sentiment Analysis</div>
                    <div className="projectDesc">To understand how beliefs and common practices have evolved with time and further analyse different aspects of divinity, used IBM WATSON tone analyser API to get different average emotion scores for different texts belonging to different religions, scientific texts, novels etc.</div>
                    <div className="projectIcons">
                        <ion-icon name="logo-python"></ion-icon>
                        <ion-icon name="analytics-outline"></ion-icon>
                    </div>
                </div>
                <div id="project7" className="projects">
                    <div className="edHead">Face Morphing - Image Processing</div>
                    <div className="projectDesc">Implementation of different algorithms like the Delaunay Triangulation helped me understand pixel transformation and translations. Performed face morphing combining different techniques of the course.</div>
                    <div className="projectIcons">
                        <ion-icon name="contrast-outline"></ion-icon>
                        <ion-icon name="logo-python"></ion-icon>
                    </div>
                </div>
                <div id="project3" className="projects">
                    <div className="edHead">Information Visualization: COVID</div>
                    <div className="projectDesc">Worked with the d3 library of JavaScript to represent different trends related to COVID-19, using publicly available datasets to draw inferences and observe patterns.</div>
                    <div className="projectIcons">
                        <ion-icon name="logo-python"></ion-icon>
                    </div>
                </div>
                <div id="project4" className="projects">
                    <div className="edHead">Social Network Analysis</div>
                    <div className="projectDesc">Using the network library of Python, performed a thorough analysis of datasets of real networks (High Energy Citation Network and Reddit Hyperlink Network), plotted graphs to observe trends and patterns, and calculated different centrality measures to draw inferences about the networks.</div>
                    <div className="projectIcons">
                        <ion-icon name="logo-python"></ion-icon>
                        <ion-icon name="analytics-outline"></ion-icon>
                    </div>
                </div>
                <div id="project6" className="projects">
                    <div className="edHead">California House Price and Predictions</div>
                    <div className="projectDesc">Using Data Analysis Techniques on a data set of Houses in California, learnt -Introduction to Machine Learning -Data operations like cleaning, filtering, and transforming data -Visualization and correlating data attributes using different graphical methods</div>
                    <div className="projectIcons">
                    </div>
                </div>
                
                
                </div>
            </div>
        </div>
    )

}

export default Portfolio;