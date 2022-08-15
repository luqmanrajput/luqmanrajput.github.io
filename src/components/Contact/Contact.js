import React from 'react';
import '../Contact/Contact.css';

const Contact = () => {
    return (
        <>
            <div id="contact">   
                <div className="container container-form">
                <div className=" contact__section">
                    <div className="contact__socials">
                        <div className="info">
                             <h1 className='title'>Contact Me</h1>
                            <div className="information">
                                <i class="fa-solid fa-location-dot icon"></i>
                                <p>Punjab, Pakistan</p>
                            </div>
                            <div className="information">
                                <i className="fa-solid fa-envelope icon"></i> 
                                <p>rajaluqmansarwar20@gmail.com</p>
                            </div>
                            <div className="information">
                            <i className="fa-solid fa-phone-square-alt icon"></i>
                                <p>+92 341 8889116</p>
                            </div>
                        </div>
                        <div className="social__icons">
                            <p><em> My Socials:</em></p>
                            <div className="social__icons">
                                <a href="https://www.facebook.com/luqmanrajput20">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/luqman.rajput_">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/luqman-rajput20/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/luqmanrajput">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className="social__icons">
                            <p><em>Download My Resume:</em></p>
                            <div className="social__icons">
                                <a href='images/resume.pdf'  download>
                                <i class="fa-solid fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* FOrm */}
                    <div className="contact-form">
                        <form action="https://formsubmit.co/rajaluqmansarwar20@gmail.com" method="POST" autocomplete="off">
                            <h2 className="title">Any queries? Reach me out!</h2>
                            <div className="input-container">
                                <label htmlFor="">Name</label>
                                <input type="text" name="name" className="input" required placeholder='Your Name' />
                            </div>
                            <div className="input-container">
                                <label htmlFor="">Email</label>
                                <input type="email" name="email" className="input" required placeholder='Your Email' />
                            </div>
                            <div className="input-container textarea">
                                <label htmlFor="">Message</label>
                                <textarea name="message" className="input" required placeholder='Your Message'></textarea>
                            </div>
                            <input type="submit" value="send" className="contact__btn" />
                        </form>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default Contact