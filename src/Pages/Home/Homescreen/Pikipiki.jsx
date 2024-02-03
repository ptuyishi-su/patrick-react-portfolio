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
                                <h2> PIKI<span className="red-text">PIKI</span></h2>
                                <p className='text-medium'>Traveling made simple and accessible</p>
                                <p className="bold--heading"> Project Overview</p>
                                <p className='text-medium'>The Project objective was to to design a mobile app that showcases travel destinations and allows the user to book all the necessary travel accommodations to get there.</p>
                                <a  className='project--final-link' target="_blank" href="https://www.figma.com/proto/LDJNEXa5rfuanUL3BCkZJy/Patrick-Travel?page-id=3%3A2&type=design&node-id=3-3&viewport=310%2C381%2C0.07&t=MDas0q6Iv7OqP0qM-1&scaling=scale-down&starting-point-node-id=3%3A3">View Final Design 🔗</a>
                            </header>
                        </div>
                        <div className='project--header--img'>
                            <img src="./img/pikipiki-header.png" alt="project image showing the homepage" height={500} />
                        </div>
                    </div>
                    <main>
                    <div className='project--problem project--small'>
                                <div className='problem-description'>
                                    <p><strong>Team Members</strong></p>
                                    <p className='text-medium'>Patrick Tuyishime</p>
                                </div>
                                <div className='problem-description'>
                                    <p><strong>Role</strong></p>
                                    <p className='text-medium'>User Research</p>
                                    <p className='text-medium'>Hi-Fidelity Design</p>
                                    <p className='text-medium'>User Research</p>


                                </div>
                                <div className='problem-description'>
                                    <p><strong>Project Length</strong></p>
                                    <p className='text-medium'>4 Weeks</p>

                                </div>
                                <div className='problem-description'>
                                    <p><strong>Tools Used</strong></p>
                                    <p className='text-medium'>Figma</p>

                                </div>
                        </div>
                        <div className='project--problem--solution'>
                            <div className='project--problem'>
                                <div className='problem-description'>
                                    <p className="bold--heading">Problem</p>
                                    <p className='text-medium'>Many travelers face challenges in efficiently planning and booking their entire journey, often struggling with fragmented and time-consuming processes when searching for flights, hotels, and rental cars across multiple platforms. The lack of a unified and user-friendly mobile solution results in frustration and increased decision-making time.</p>
                                    <br />
                                    <p className="bold--heading">Solution</p>
                                    <p className='text-medium'>Our mobile app aims to streamline the travel planning and booking experience by providing a comprehensive and visually appealing platform. By integrating flights, hotels, and rental cars into a single app, users can effortlessly explore, compare, and book all necessary accommodations.</p>
                                </div>
                                <div className='problem--image'>
                                </div>
                                <img src="./img/pikipiki-header.png" alt="project image showing the homepage" height={500} />
                            </div>
                            
                        </div>
                        <div className='project--problem--solution'>
                            <div className='project--problem'>
                                <div className='problem-description'>
                                    <p className="bold--heading">Competitive Analysis</p>
                                    <p className='text-medium'>Competitive analysis was conducted to explore the features of popular travel apps, leveraging successful aspects, avoiding pitfalls, and identifying gaps for a competitive advantage. </p>
                                    <p><strong>Findings</strong></p>
                                    <li>Surface  key value points as early as possible.</li>
                                    <li>Re-use existing patterns and tools as much as possible.</li>
                                    <p><strong>Opportunities for Improvement</strong></p>
                                    <li>Search by category and filter</li>
                                    <li>Pricing Transparency</li>
                                    <li>Personalized Recommendations</li>
                                    <li>Itinerary Management</li>
                                    <li>Dynamic Onboarding</li>
                                </div>
                                <div className='problem--image'>
                                    <img src="./img/group 60.png" alt="project image showing the homepage" width={600}/>
                                    <img src="./img/group 60.png" alt="project image showing the homepage" width={600} />
                                </div>
                            </div>
                        </div>
                        <div className='project--problem--solution clean-border'>
                            <div className='project--problem'>
                                <div className='problem--image'>
                                        <img src="./img/group 62.png" alt="project image showing the homepage" width={600}/>
                                </div>
                                <div className='problem-description '>
                                    <p className="bold--heading">Ideation</p>
                                    <p className='text-medium'>With the users' pain points in mind, I was able to start putting pen to paper and coming up with as many ideas as I could to try and solve them. To do this, I used my HMW statements to create at least two ways I could solve those statements for each.</p>
                                </div>
                            </div>
                        </div>
                        <div className='project--problem--solution'>
                            <div className='project--problem'>
                                <div className='problem-description'>
                                    <div className='problem--image'>
                                        <img src="./img/layout-min.png" alt="project image showing the homepage" width={800}/>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='banner--img'>
                            <img src="/img/sliderBanner.png" alt="banner with a plane flying in the sunset"/>
                        </div> */}
                        <div className='project--problem--solution clean-border'>
                            <div className='project--problem'>
                                <div className='problem-description'>
                                    <p className="bold--heading ">Design</p>
                                    <p className='text-medium'>The design system for the  app serves as a cohesive framework, unifying visual and functional elements to create a consistent and memorable user experience. It encompasses a standardized set of design principles, color schemes, typography, and UI components.</p>
                                    <br />
                                    <br />
                                    <p className="bold--heading">High Fidelity Screens</p>
                                    <p className='text-medium'>Visual design played a pivotal role in the app design, as it greatly influenced user perception, engagement, and usability. Aesthetic appeal and intuitive layouts made complex travel plans more accessible and appealing to users, enhancing their overall experience.</p>
                                </div>
                                <div className='problem--image'>
                                        <img src="./img/group 64.png" alt="screenshort image showing high fidelity screens" width={600}/>
                                </div>
                            </div>
                        </div>
                        <div className='project--problem project--small'>
                                <div className='problem-description'>
                                    <img src="/img/screenshot1.png" alt="screenshort image showing high fidelity screens" height={500}/>

                                </div>
                                <div className='problem-description'>
                                    <img src="/img/screenshot2.png" alt="screenshort image showing high fidelity screens" height={500}/>
                                </div>
                                <div className='problem-description'>
                                    <img src="/img/screenshot3.png" alt="screenshort image showing high fidelity screens" height={500}/>
                                </div>
                                <div className='problem-description'>
                                    <img src="/img/screenshot5.png" alt="screenshort image showing high fidelity screens" height={500}/>
                                </div>
                        </div>
                        <p className="bold--heading">Personal Takeaway 🤔: </p>
                        <div className='project--problem project--small'>

                                <div className='problem-description'>
                                    <p><strong>Working Efficiently</strong></p>
                                    <p className='text-medium'>As I was juggling this design challenge with work and school, I had limited time to work. As a result, I learned what steps within the process to prioritize and how to complete them efficiently. </p>
                                </div>
                                <div className='problem-description'>
                                    <p><strong>Receiving Feedback</strong></p>
                                    <p className='text-medium'>Consulting with my design professor helped me take a step back, and figure out how I could improve my product. It helped widen my perspective and kept me from over-focusing on unnecessary details. </p>


                                </div>
                                <div className='problem-description'>
                                    <p><strong>Being Intentional</strong></p>
                                    <p className='text-medium'>As I was required to present my process biweekly, I learned that these checkins challenged us to create the most effective, impactful flow that would stand out and deliver the message clearly without making it feel rushed. </p>

                                </div>
                        </div>
                    </main>
                </div>
            </section>
            <Footer />
         
        </>
    );
}
