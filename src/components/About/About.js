import React,{useState} from "react";
import '../About/About.css'
const About = () => {
    const [skills, setSkills] = useState(false);
    const [education, setEducation] = useState(false);
    const skillsHandler=()=>{
        if (education===true) {
            // Will first hide the education
            setEducation(false);
            // And afterwards will handle skills open/close
                if(skills===false){
                    setSkills(true);
                }
                else{
                    setSkills(false);
                }
        }
        else{
            if(skills===false){
                setSkills(true);
            }
            else{
                setSkills(false);
            }
        }
    }
    const educationHandler=()=>{
        if (skills===true) {
            // Will first hide the skills
            setSkills(false);
                // And afterwards will handle education open/close
                if(education===false){
                    setEducation(true);
                }
                else{
                    setEducation(false);
                }
        } else {
            if(education===false){
                setEducation(true);
            }
            else{
                setEducation(false);
            }
        }
    }
    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="about__section">
                        {/* Image */}
                        <div className="about__img">
                            <img src='images/luqmanSarwar.jpeg' alt="..." />
                        </div>
                        {/* About Details*/}
                        <div className="about__details">
                            <h1 className="aboutme__title">About Me</h1>
                            <p>
                                I consider handling things,  with responsibility & proper planning, to be of a greater priority. I like to present my devotion,
                                dedication and commitment to achieve the goals despite of the hurdles thfromcome along the way.
                            </p>
                            {/* About Additionals */}
                             <div className="about__extras">
                                <p className={`extras__headings ${skills?"active__extras":""}`} onClick={skillsHandler}>Skills</p>
                                <p className={`extras__headings ${education?"active__extras":""}`} onClick={educationHandler}>Education</p>
                             </div>
                            <div className={`extras__content ${skills? "active__content":" " }`}>
                                <ul>
                                    <li><span>Web Development</span><br/>Web App Development</li>
                                    <li><span>Web Development</span><br/>Web App Development</li>
                                    <li><span>Web Development</span><br/>Web App Development</li>
                                </ul>
                            </div>
                            <div className={`extras__content ${education? "active__content":" " }`}>
                                <ul>
                                    <li>
                                        <span>2018-2022</span><br></br>BS Software Engineering 
                                        <span style={{color:"white",fontWeight:"bold"}}> / </span>
                                        University Of Gujrat
                                    </li>
                                    <li>
                                        <span>2016-2018</span><br></br>Intermediate 
                                        <span style={{color:"white",fontWeight:"bold"}}> / </span>
                                         Army Public College Sarai Alamgir
                                    </li>
                                    <li>
                                        <span>2014-2016</span><br></br>Matriculation 
                                        <span style={{color:"white",fontWeight:"bold"}}> / </span>
                                        Army Public School College Sarai Alamgir
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
