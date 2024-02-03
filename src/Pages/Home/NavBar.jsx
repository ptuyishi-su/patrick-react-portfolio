import { Link } from "react-router-dom"
import { useState, useEffect } from "react";


export default function NavBar () {
    function showSidebar() {
        const sidebar=document.querySelector('.sidebar')
        sidebar.style.display= 'flex'
    }
    function hideSidebar (){
        const sidebar=document.querySelector('.sidebar')
        sidebar.style.display='none'
    }
    return (
        
        <nav className="navbar">
            <ul className="sidebar">
                <div className="sidebar--buttons">
                    <li  className="sidebar--close"><a href=""><img src="img/close-x.svg" alt="close menu icon" /></a></li>
                    <li> <a href="/work">Work</a></li>
                    <li> <a href="/About">About</a></li>
                    <li> <a href="https://www.linkedin.com/in/patricktuyishime/">LinkedIn</a></li>
                    <li> <a href="https://drive.google.com/file/d/10XtCkx2VAVkGFr7j0cMw3ssE7L5Xxa0y/view?usp=sharing">Resume</a></li>
                </div>
            </ul>
            <ul>
                <li className="nav--logo"> <a href="/Home"><img src="img/logo.png" alt="site logo" /></a></li>
                <div className="nav--buttons">
                <li className="nav--button"> <a href="/Home">Work</a></li>
                <li className="nav--button"> <a href="/About">About</a></li>
                <li className="nav--button"> <a href="https://www.linkedin.com/in/patricktuyishime/">LinkedIn</a></li>
                <li className="nav--button"> <a href="https://drive.google.com/file/d/10XtCkx2VAVkGFr7j0cMw3ssE7L5Xxa0y/view?usp=sharing">Resume</a></li>
                </div>
                <li 
                    onClick={showSidebar}               className="menu-close">
                        <a href="#">
                            <img src="img/menu-bars.svg" alt="menu icon" />
                        </a>
                </li>
            </ul>
        </nav>
    )
}