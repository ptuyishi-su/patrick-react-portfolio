import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <section className="footer--section" id="myFooter">
            <div className="footer--section--container">
                <div className="footer--content">
                    <img src="/img/hero_img.png" alt="Patrick Profile" className="footer-hero"/>
                    <h1 className="footer--title">Say Hello.</h1>
                    <div className="footer--email">
                        <a  href="mailto:Ptuyishi@syr.edu">
                            <p className="text-medium">Ptuyishi@syr.edu</p>
                        </a>
                    </div>
                    <div className="footer--socials">
                        <ul className="footer-social-links">
                            <li>
                                <a href="https://github.com/ptuyishi-su">
                                    <img src="/img/github.svg" alt="linkedin Icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/patricktuyishime/">
                                        <img src="/img/linkedin.svg" alt="linkedin Icon" />
                                    </a>
                            </li>
                            <li>
                                <a href="https://www.behance.net/patricktuyishi2">
                                    <img src="/img/behance.svg" alt="linkedin Icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <p className="footer--message">Made with 💖 by Patrick</p>
                </div>
            </div>
        </section>
    )
}