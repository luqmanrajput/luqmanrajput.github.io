import React from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="container">
            <nav className="navbar">
                    <a className="navbar__logo" href="/">
                        <em>Luqman's Portfolio</em>
                    </a>
                    <ul>
                        <li>
                            <a href="#header">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
