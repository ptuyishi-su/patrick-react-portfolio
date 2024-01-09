import data from "../../data/index.json"
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
                                <LazyLoadImage src={item.src} alt="Traveling-App" />
                            </div>
                            <div className="portfolio--section--card--content">
                                <h3 className="project--section--title">
                                    {item.title}
                                </h3>
                                <p className="projection--section--description">
                                    {item.description}
                                </p>
                                <div className="discover--link">
                                <a href={item.link} className="read--more--link">
                                    <p className="text-sm">
                                        Read More
                                    </p>
                                    <LazyLoadImage src="img/arrow.png" alt="" />
                                </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}