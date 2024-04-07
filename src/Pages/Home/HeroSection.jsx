
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
                        <LazyLoadImage className="hero--image" src="img/hero_img3.png" alt="Patrick Profile" />
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
                                I’m a passionate web developer with a keen eye for design and a dedication to creating seamless user experiences with stunning UI design. My journey in web development has allowed me to wear multiple hats - from coding the front-end magic to designing the UI solutions. I'm looking forward to exploring new opportunities and creating experiences that simplify, uplift, and nurture human connection.
                            </p>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
    
}