import React from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
    return (
        <div id="header">
            <div className="container">
                <nav className="header__navbar">
                    <a className="navbar__logo" href="/">
                        <em>Luqman's Portfolio</em>
                    </a>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">Portfolio</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__text">
                    <h1>Raja Luqman Sarwar</h1>
                    <p>
                        <span>Web Developer</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
