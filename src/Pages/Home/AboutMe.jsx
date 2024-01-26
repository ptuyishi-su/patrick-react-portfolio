
import data from "../../data/index.json"


export default function AboutMe () {
    return (
        <section className="my--background--section">
            <div className="my--background--box">
                <div className="my--backgound--content">
                    <div className="my--background--img-text">
                        <div className= "my--background--headline">
                            <h2>Hi, there.</h2>
                        </div>
                        <div className="description--img--divider">
                            <div className="my--background--description">
                                <p className="text-md">
                                I am Patrick, a third-year student studying Information Technology with a concentration in Web Development and Project Management at Syracuse University. I explore all disciplines related to user design and enjoy projects with dynamic learning opportunities, where I can collaborate with experienced professionals and actively contribute to hands-on project development. I am especially eager to immerse myself in cross-functional teams and create ethical and inclusive designs. I believe in staying updated with the latest technology and always strive to push the boundaries of my skills. </p>
                                <p className="description-text">specialties</p>
                                <ul className="description-text">
                                    <li>User Experience/User Interface Design</li>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li>Figma + Sketch</li>
                                    <li>Sass</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                            <div className="background--img">
                                <img src="./img/back--img.png" alt="Patrick's profile image smiling with sunset background" height={463} />
                            </div>
                        </div>
                    </div>
                    {/* <div className="my--skills">
                        {data?.modes?.map((item,index) => (
                            <div 
                            key={index}
                            className="my--skills--card">
                                <img src={item.src} alt="skill--image" />
                                <h4 className="skill--description">{item.title} </h4>
                                <p>{item.description}</p>
                                <p> Dev Tools</p>
                                <div className="skills--tools">
                                    <ul className="text-medium">
                                        {item.tools.map(tool =>
                                        <li key={tool}>
                                            {tool}
                                        </li>
                                            )}
                                    </ul>
                                    <ul className="text-medium">
                                        {item.tools.map(tool =>
                                        <li key={tool}>
                                            {tool}
                                        </li>
                                            )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    )
}