export default function HeroSection (){
    return (
        <section className="hero--section" id="HeroSection">
            <div className="hero--section--box">
                <div className="hero--section--content">
                    <p className="text-lg">Hello, I’m Patrick Tuyishime</p>
                    <div className="hero--section--title">
                        <h1>Creative</h1>
                        <img className="Hero--image" src="img/hero_img.png" alt="Patrick Profile" />
                    </div>
                    <div>
                        <h1 className="title--designer">&lt;/&gt;Designer</h1>
                    </div>
                    <div className="hero--section--headline">
                        <div className="hero--headline-img">
                            <img src="img/spin-icon.png" alt="" />
                        </div>
                        <div className="hero--headline--description">
                            <p className="text-md">
                                A creative designer with a passion<br/> 
                            </p>
                            <p className="text-md">
                                for crafting visual experiences and<br/>
                            </p>
                            <p className="text-md">
                                creative websites.
                            </p>
                            <a href="" className="read--more--link">
                                <p className="text-sm">
                                    Read More
                                </p>
                                <img src="img/arrow.png" alt="" />
                            </a>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
    
}