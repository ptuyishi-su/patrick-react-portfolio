import { Link } from "react-router-dom"
export default function NavBar () {
    return (
        <div className="navbar--section">
            <div className="navbar--box">
                <div className="navbar--content">
                    <div className="navbar--logo">
                        <Link to="/Home">
                            <img src="/img/logo.png" alt=""/>
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
                                <Link to="/ContactPage">
                                    Contact
                                </Link>
                            </li>
                            <li className="navbar--resume">
                            <a href="https://drive.google.com/file/d/10XtCkx2VAVkGFr7j0cMw3ssE7L5Xxa0y/view" target="_blank" rel="noopener noreferrer">
                            Resume
                            </a>
                            </li>
                        </ul>                        
                    </div>
                </div>
            </div>
        </div>
    )
}