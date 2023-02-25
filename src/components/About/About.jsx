import "./about.css"
import aboutPic from "../../assets/ankur-about.jpg"

import React from 'react'

function About() {
  return (
    <>
        <h1 className="about-h1">Personal Info</h1>
        <div className="about">
            <div className="about-text">
                <p className="about-text-p1">Hi, I am Ankur Sharma.</p>
                <p className="about-text-p2">I may not be a professional photographer with a DSLR Camera. But, I am someone who is passionate about photography and nature. That passion keeps me driven to capture the beauty of the nature even with a smartphone.</p>
            </div>
            <div className="about-img">
                <img src={aboutPic} alt="Ankur Sharma standing on a hill" />
            </div>
        </div>
    </>
  )
}

export default About