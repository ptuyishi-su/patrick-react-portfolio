
import data from "../../data/index.json"


export default function AboutMe () {
    return (
        <section className="my--background--section">
            <div className="my--background--box">
                <div className="my--backgound--content">
                    <div className= "my--background--headline">
                        <h3>About Me</h3>
                    </div>
                    <div className="my--background--description">
                        <p className="text-md">I’m a passionate web developer with a keen eye for design and a dedication to creating seamless user experiences with stunning UI design. My journey in web development has allowed me to wear multiple hats - from coding the front-end magic to designing the UI solutions. I believe in staying updated with the latest in technology and always strive to push the boundaries of my skills.</p>
                    </div>
                    <div className="my--skills">
                        {data?.modes?.map((item,index) => (
                            <div 
                            key={index}
                            className="my--skills--card">
                                <img src={item.src} alt="skill--image" />
                                <h4 className="skill--description"> I am a {item.title} </h4>
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
                    </div>
                </div>
            </div>
        </section>
    )
}