import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Work() {
    return (
        <>   
            <section className='pikipiki--section'>
                <div className='project--section--box'>
                    <div className='project--section--header'>
                        <div className='project--header--description'>
                            <header>
                                <h2>PIKIPIKI</h2>
                                <p className='text-medium'>The App where traveling is simple and easy</p>
                                <p className="bold--heading">Project Overview</p>
                                <p className='text-medium'>The Project objective was to to design a mobile app that showcases travel destinations and allows the user to book all the necessary travel accommodations to get there.</p>
                            </header>
                        </div>
                        <div className='project--header--img'>
                            <img src="./img/pikipiki-header.png" alt="project image showing the homepage" height={665.98} />
                        </div>
                    </div>
                    <main>
                        <div className='project--problem--solution'>
                            <div className='project--problem'>
                                <p className="bold--heading">Problem</p>
                                <p className='text-medium'>Many travelers face challenges in efficiently planning and booking their entire journey, often struggling with fragmented and time-consuming processes when searching for flights, hotels, and rental cars across multiple platforms. The lack of a unified and user-friendly mobile solution results in frustration and increased decision-making time.</p>
                            </div>
                            <div className='project--solution'>
                                <p className="bold--heading">Solution</p>
                                <p className='text-medium'>Our mobile app aims to streamline the travel planning and booking experience by providing a comprehensive and visually appealing platform. By integrating flights, hotels, and rental cars into a single app, users can effortlessly explore, compare, and book all necessary accommodations.</p>

                            </div>
                        </div>
                        <div className="project--design--solutions">
                            <div className='ux--solutions'>
                                <p className="bold--heading"> UX Solution</p>
                                <ul className='text-medium'>
                                    <li>Unified User Journey: Implement a consistent navigation flow that guides users seamlessly through each step.</li>
                                    <li>Unified User Journey: Implement a consistent navigation flow that guides users seamlessly through each step.</li>
                                    <li>Unified User Journey: Implement a consistent navigation flow that guides users seamlessly through each step.</li>
                                    <li>Unified User Journey: Implement a consistent navigation flow that guides users seamlessly through each step.</li>
                                    
                                </ul>

                            </div>
                            <div className='ui--solutions'>
                                <p className="bold--heading">UI Solutions</p>
                            <ul className='text-medium'>
                                    <li>Unified User Journey: Implement a consistent navigation flow that guides users seamlessly through each step.</li>
                                    <li>Unified User Journey: Implement a consistent navigation flow that guides users seamlessly through each step.</li>
                                    <li>Unified User Journey: Implement a consistent navigation flow that guides users seamlessly through each step.</li>
                                    <li>Unified User Journey: Implement a consistent navigation flow that guides users seamlessly through each step.</li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="project--goods">
                            <div >
                                <div><p>53</p></div>
                                <div>
                                    <p className='text-medium'>screens</p>
                                </div>

                            </div>
                            <div>
                                <div><p>100+</p></div>
                                <div>
                                    <p className='text-medium'>Hours of project discovery,<br/>definition, development,<br/>and delivery</p>
                                </div>
                            </div>
                            <div>
                                <div><p>43</p></div>
                                <div>
                                    <p className='text-medium'>Flexible Components</p>
                                </div>
                            </div>
                        </div>
                        <div className='screen--display'>
                            <img src="./img/homescreens.png" alt="preview of app screens" height={534} />
                            <img src="./img/homescreens.png" alt="preview of app screens" height={534} />
                            <img src="./img/homescreens.png" alt="preview of app screens" height={534} />
                        </div>
                    </main>

                </div>
            </section>
            {/* <Footer /> */}
         
        </>
    );
}
