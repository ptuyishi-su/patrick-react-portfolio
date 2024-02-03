import data from "../../data/index.json"
import { Link } from "react-router-dom";
import React from "react"; 
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MyPortfoliio (){
    return (
        <section className="portfolio--section" id="myPortfolio">
            <div className="portfolio--section--box">
                <div className="portfolio--section--title">
                    <h3>Recent Work</h3>
                </div>
                <div className="portfolio--section--display">
                    {data?.skills?.map((item, index) => (
                        <div 
                            key={index} 
                            className="portfolio--section--card"
                            // style={{ backgroundColor: item.backgroundColor }}
                        >
                            <div className="portfolio--section--img">
                            <a href={item.link} target= {item.target} >
                                <LazyLoadImage src={item.src[0]} alt="projects picture display" height={400}/>
                            </a>
                            </div>
                            <div className="portfolio--section--card--content">
                            {/* fix this later to include the project logo in the json data file */}
                            <LazyLoadImage src={item.src[1]} alt="project logo and title" height={50} className="portfolio-logo" />
                            <a href={item.link} target= {item.target} className="project--section--link">
                                <h3 className="project--section--title">
                                    {item.title}
                                </h3>
                            </a>
                                <p className="projection--section--description">
                                    {item.description}
                                </p>
                                <div className="roles-skills">
                                    {item.experience}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}