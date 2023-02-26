import "./contact.css";
import contactPic from "../../assets/contact.jpg";

import React from "react";

function About() {
  return (
    <>
      <h1 className="contact-h1" id="contact">Contact Me</h1>
      <div className="contact">
        <div className="contact-img">
          <img src={contactPic} alt="Ankur Sharma looking at mobile" />
        </div>
        <div className="contact-text">
          <p>
            <a
              href="https://www.instagram.com/naturealikephotography/"
              target="_blank"
              rel="noreferrer"
              className="contact-btn contact-btn-1"
            >
              Nature Alike Photography
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/naturealikephotography/"
              target="_blank"
              rel="noreferrer"
              className="contact-btn contact-btn-2"
            >
              Ankur Sharma
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
