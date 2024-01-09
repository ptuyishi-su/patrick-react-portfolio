import { Link } from "react-router-dom"
import { useState, useEffect } from "react";


export default function NavBar () {
    const [ShowNav, setShowNav]= useState (false)

    const handleShowNav=()=>{
        setShowNav (!setShowNav)
    }
    
    
    
    return (
        <div className="navbar--section">
            <div className="navbar--box">
                <div className="navbar--content">
                    <div className="navbar--logo">
                        <Link to="/Home">
                            <img src="/img/logo.png" alt="logo image"/>
                        </Link>
                    </div>
                    <div className="navbar--buttons">
                        <ul>
                            <li className="navbar--work">
                                <Link to="/Work">
                                    Work
                                </Link>
                            </li>
                            <li className="navbar--about">
                                <Link to="/About">
                                    About
                                </Link>
                            </li>
                            <li className="navbar--contact">
                                <a href="https://www.linkedin.com/in/patricktuyishime/"  target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li className="navbar--resume">
                            <a href="https://drive.google.com/file/d/10XtCkx2VAVkGFr7j0cMw3ssE7L5Xxa0y/view" target="_blank" rel="noopener noreferrer">
                            Resume
                            </a>
                            </li>
                        </ul> 
                        <div className="menu--open">
                        <Link to="/Home">
                            <img src="/img/menu-open.png" alt=""/>
                        </Link>
                    </div>
                                          
                    </div>
                </div>
            </div>
        </div>
    )
}