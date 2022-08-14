import React from 'react'
import '../Portfolio/Portfolio.css'
const Portfolio = () => {
  return (
    <>
        <div id="portfolio">
            <div className="container">
                <h1 className="portfolio__title">Portfolio</h1>
                <div className="portfolio__projects">
                    <div className="project">
                        <img src='images/comingSoon.png' alt='...'/>
                        <div className="layer">
                            <h2>eNotes App</h2>
                            <p>The app allows you to create and manage notes.</p>
                            <a href="#services"><i className="fa-solid fa-anchor"></i></a>
                        </div>
                    </div>
                    <div className="project">
                        <img src='images/comingSoon.png' alt='...'/>
                        <div className="layer">
                            <h2>In Progress</h2>
                            <p>Will be uploaded here soon.</p>
                            <a href="#services"><i className="fa-solid fa-anchor"></i></a>
                        </div>
                    </div>
                    <div className="project">
                        <img src='images/comingSoon.png' alt='...'/>
                        <div className="layer">
                        <h2>In Progress</h2>
                            <p>Will be uploaded here soon.</p>
                            <a href="#services"><i className="fa-solid fa-anchor"></i></a>
                        </div>
                    </div>
                </div>
                <a className="btn" href='#header'>View More</a>
            </div>
        </div>
    </>
  )
}

export default Portfolio
