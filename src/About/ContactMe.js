import React from "react";
import image from "../Images/socials.png";
import iconGit from "../Images/github.png";
import iconMail from "../Images/gmail.png";
import iconTwitter from "../Images/twitter.png";
import iconLinkedIn from "../Images/linkedin.png";

export default function ContactMe() {
  return (
    <article className="container-fluid my-3" id="contact">
      <section className="InfoRow">
        <div className="col-lg-5">
          <img src={image} alt="pink square" className="rounded" />
        </div>
        <div className="col-lg-7">
          <h2 className="portfolio-h2">Contact Me:</h2>
          <a href="https://github.com/donovanlaws" target="_blank" rel="noreferrer" >
            <img className="ico" src={iconGit} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/donovanlaws/" target="_blank" rel="noreferrer" >
            <img className="ico" src={iconLinkedIn} alt="LinkedIn Logo" />
          </a>
          <a href="mailto:donovanlaws@gmail.com">
            <img className="ico" src={iconMail} alt="GMail Logo" />
          </a>
          <a href="https://twitter.com/donovan_laws" target="_blank" rel="noreferrer" >
            <img className="ico" src={iconTwitter} alt="Twitter Logo" />
          </a>
        </div>
      </section>
    </article>
  );
}
