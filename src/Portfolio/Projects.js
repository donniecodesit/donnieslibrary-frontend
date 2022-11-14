import React from "react";
import img_project1 from "../Images/project1.png";
import img_project2 from "../Images/project2.png";
import img_project3 from "../Images/project3.png";

export default function Projects() {
  return (
    <article className="container-fluid slideFromRight" id="projects">
      <section className="InfoRow">
        <div>
          <h2 className="portfolio-h2">My Projects:</h2>
        </div>
        <div className="project-row">
          <div className="col-lg-8">
            <div className="project-info">
              <h3 className="project-title">PrototonBot Discord Bot</h3>
              <a href="https://github.com/donniecodesit/PrototonBot" target="_blank" rel="noreferrer" className="project-link">[GitHub]</a>
            </div>
            <ul className="portfolio-ul">
              <li className="project-li">
                Built with JavaScript, Node.JS, Discord.Net, C#, and MongoDB.
              </li>
              <li className="project-li">
                Developed a chatbot application that users could interact with for entertainment purposes.
              </li>
              <li className="project-li">
                Led and communicated with a small team of developers, implemented user requests and features.
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <img src={img_project2} alt="pink square" className="rounded project-image" />
          </div>
        </div>
        <div className="project-row">
          <div className="col-lg-8">
            <div className="project-info">
              <h3 className="project-title">All About Donnie</h3>
              <a href="https://github.com/donniecodesit/donnieslibrary-frontend" target="_blank" rel="noreferrer" className="project-link">[GitHub]</a>
            </div>
            <ul className="portfolio-ul">
              <li className="project-li">
                Built with PERN stack to showcase my personal portfolio, giving users information to learn about me.
              </li>
              <li className="project-li">
                Created a one-page functional website with multiple routes and pages featuring unique content.
              </li>
              <li className="project-li">
                Encouraged users like you to check out this page!
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <img src={img_project3} alt="pink square" className="rounded project-image" />
          </div>
        </div>
        <div className="project-row">
          <div className="col-lg-8">
            <div className="project-info">
              <h3 className="project-title">Restaurant Reservation App</h3>
              <a href="https://github.com/donniecodesit/restaurant-reservation-system" target="_blank" rel="noreferrer" className="project-link">[GitHub]</a>
            </div>
            <ul className="portfolio-ul">
              <li className="project-li">
                Built a PERN stack application to book and edit reservations,
                stored an managed with a database.
              </li>
              <li className="project-li">
                Engineered multiple routes frontend and backend to manage and edit
                reservations and tables using the API.
              </li>
              <li className="project-li">
                Managed different environments for development, testing, and
                production, alongside version control with GitHub.
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <img src={img_project1} alt="pink square" className="rounded project-image" />
          </div>
        </div>
      </section>
    </article>
  );
}
