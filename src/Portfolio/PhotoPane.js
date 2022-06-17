import React from 'react'
import ico_Git from "../Images/github.png";
import ico_Mail from "../Images/gmail.png";
import ico_Twitter from "../Images/twitter.png";
import ico_LinkedIn from "../Images/linkedin.png";

export default function PhotoPane() {
  return (
    <article className="container-fluid" id="contact">
      <section className="introbox">
        <div>
          <img src="https://avatars.githubusercontent.com/u/91988909?v=4" className="border border-secondary rounded-circle" alt="Donovan" style={{width: "15vw"}}/>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <h1 className="portfolio-h1">Donovan Laws</h1>
          <h2 className="portfolio-h2">Web Developer</h2>
          <h3 className="portfolio-h3">21, He/Him, Phoenix AZ</h3>
          <div>
            <a href="mailto:donovanlaws@gmail.com">
                <img className="ico" src={ico_Mail} alt="GMail Logo" />
            </a>
            <a href="https://github.com/donovanlaws" target="_blank" rel="noreferrer" >
                <img className="ico" src={ico_Git} alt="GitHub Logo" />
            </a>
            <a href="https://www.linkedin.com/in/donovanlaws/" target="_blank" rel="noreferrer" >
                <img className="ico" src={ico_LinkedIn} alt="LinkedIn Logo" />
            </a>
            <a href="https://twitter.com/donovan_laws" target="_blank" rel="noreferrer" >
                <img className="ico" src={ico_Twitter} alt="Twitter Logo" />
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}