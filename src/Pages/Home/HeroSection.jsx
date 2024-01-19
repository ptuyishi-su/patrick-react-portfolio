
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


export default function HeroSection (){
    return (
        <section className="hero--section" id="HeroSection">
            <div className="hero--section--box">
                <div className="hero--section--content">
                    <p className="text-lg line-name">Hello, I’m Patrick Tuyishime</p>
                    <div className="hero--section--title">
                        <h1>Creative</h1>
                        <LazyLoadImage className="hero--image" src="img/hero_img.png" alt="Patrick Profile" />
                    </div>
                    <div className="designer">
                        <h1 className="title--designer">&lt;/&gt;Designer</h1>
                    </div>
                    <div className="hero--section--headline">
                        {/* <div className="hero--headline-img">
                            <LazyLoadImage src="img/spin-icon.png" alt="" />
                        </div> */}
                        <div className="hero--headline--description">
                            
                            <p className="text-md hero--headline--call">
                                I'm a junior Front-End Developer and designer based in New 
                                York, currently studying Information Management and Technology, with a strong interest in UI/UX design. I'm commited to creating visually stunning and user friendly experiences. I'm looking forward to exploring new opportunities to enhance my skills.
                            </p>
                            <Link to="/About" className="read--more--link">
                                <p className="text-sm">
                                    Read More
                                </p>
                                <LazyLoadImage src="img/arrow.png" alt="read more icon" />
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
    
}