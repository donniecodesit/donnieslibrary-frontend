import React, { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

// Icons
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

// Styles
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-column-a">
        <div className="infoBox">
          <img
            className="personalPhoto"
            src="/images/personalshot.png"
            alt="A selfie of Donovan"
          />
          <h1>Donovan Laws</h1>
          <h5>Software Engineer</h5>
          <hr />
          <h6>22 | He/They | Peoria, AZ</h6>
          <h6>donovan.laws@gmail.com</h6>
          <hr />
          <a
            href="https://www.linkedin.com/in/donovanlaws/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin fill="#0274B3" />
          </a>
          <a
            href="https://github.com/donniecodesit"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub fill="hsl(var(--textColor))" />
          </a>
          <a
            href="https://twitter.com/donovan_laws"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitter fill="#55ADEE" />
          </a>
        </div>
        <div className="infoBox">
          <h5>Tech Drive</h5>
          <hr />
          <p>
            I can confidently say I love working with and organizing databases
            and information. I've created databases with both ElephantSQL and
            MongoDB. I've written back-end APIs with Node.js to use some of
            those databases, and I enjoy creating interactive web apps in React
            that make use of those APIS, as well as design and functionality. I
            usually deploy my projects with Vercel, some are with GitHub Pages
            if it's a static app!
          </p>
          <hr />
        </div>
        <div className="infoBox">
          <h5>Free Time Passion</h5>
          <hr />
          <p>
            In my free time, I enjoy gaming similarly to many others! You may
            find me participating in a monster-slaying party, a joke-filled
            party game, a jumpscare-filled horror game, or busting my fingers on
            some rhythm games. I am fascinated by Virtual Reality and the
            technology involved behind it, and I enjoy VRChat, where I have
            textured, scripted, and uploaded many personal avatars. I've also
            done texture commissions for people online too!
          </p>
          <hr />
        </div>
      </div>
      <div className="portfolio-column-b">
        <div className="infoBox">
          <h4>~ Need A Software Engineer? ~</h4>
          <hr />
          <p>
            Hey there, welcome! I am a Software Engineer who works with
            front-end and back-end applications, using a modern tech stack
            consisting of the skills you can see on this page! I'm actively
            seeking a job opportunity and would love to contribute to a role
            that my abilities are needed for. If you have any insights you'd be
            willing to share, please get in touch with me! I enjoy creating,
            organizing (definitely a "neat freak"), and improving code as it is
            worked on. I thrive on experimenting with creativity and challenges,
            problem-solving, and refactoring solutions, especially if it teaches
            me something new.
          </p>
          <hr />
        </div>
        <div className="infoBox">
          <h4>~ Previous Experiences ~</h4>
          <hr />
          <h5>Software Engineer at SPJ Solutions</h5>
          <p>Aug 2022 - Oct 2022</p>
          <ul>
            <li>
              • Consolidated and organized all of the styling in the codebase
              from in-line styles to a CSS library.
            </li>
            <li>
              • Optimized and cleaned up code created by developers who
              previously contributed to the codebase.
            </li>
            <li>
              • Created unit tests in Jest to test various endpoints for valid
              behavior before deployment.
            </li>
            <li>
              • Planned and prepared every work day and planned tasks in daily
              and weekly sprint meetings.
            </li>
            <li>
              • Completed all planned goals and tickets assigned within the
              expected time frames.
            </li>
          </ul>
          <hr />
          <h5>
            Discord Bot Developer <span>(Hobby)</span>
          </h5>
          <p>Since Nov 2017</p>
          <ul>
            <li>
              • Programmed 2 functional and interactive bot applications in
              JavaScript for user-end entertainment.
            </li>
            <li>
              • Formulated plans and ideas with the development team for
              features to implement.
            </li>
            <li>
              • Integrated efficient code, in addition, to visually appealing
              components the client sees.
            </li>
            <li>
              • Utilized a Mongo database, where upwards of 50,000 users' data
              was managed and stored.
            </li>
            <li>
              • Rewrote from JS to C# during a database change, introducing
              faster asynchronous API requests.
            </li>
          </ul>
          <hr />
        </div>
        <div className="infoBox">
          <h4>~ My Top Projects ~</h4>
          <hr />
          <div className="projectBox">
            <div className="projectInfo">
              <div className="projectMain">
                <h5>Prototon Discord Bot</h5>
                <a
                  href="https://github.com/donniecodesit/PrototonBot"
                  target="_blank"
                  rel="noreferrer"
                >
                  [GitHub]
                </a>
              </div>
              <ul>
                <li>
                  • Built with JavaScript, Node.JS, Discord.Net, C#, and
                  MongoDB.
                </li>
                <li>
                  • Developed a chatbot application that users can interact with
                  for entertainment purposes.
                </li>
                <li>
                  • Led and communicated with a small team of developers, and
                  implemented user requests and features.
                </li>
              </ul>
            </div>
            <img
              src="/project_images/prototonbot.png"
              alt="Screenshot of Discord Bot App"
            />
          </div>
          <div className="projectBox">
            <div className="projectInfo">
              <div className="projectMain">
                <h5>Personal Portfolio</h5>
                <a
                  href="https://github.com/donniecodesit/donnieslibrary-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  [GitHub]
                </a>
              </div>
              <ul>
                <li>
                  • Built with PERN stack to showcase my personal portfolio,
                  sharing information about me and my skill set.
                </li>
                <li>
                  • Created a one-page functional website with multiple routes
                  and pages featuring unique content.
                </li>
                <li>• Encouraged users like you to check out this page!</li>
              </ul>
            </div>
            <img
              src="/project_images/newportfolio.png"
              alt="Screenshot of Portfolio"
            />
          </div>
          <div className="projectBox">
            <div className="projectInfo">
              <div className="projectMain">
                <h5>Restaurant Reservations</h5>
                <a
                  href="https://github.com/donniecodesit/restaurant-reservation-system"
                  target="_blank"
                  rel="noreferrer"
                >
                  [GitHub]
                </a>
              </div>
              <ul>
                <li>
                  • Built a PERN stack application to book and edit
                  reservations, stored and managed with a database.
                </li>
                <li>
                  • Engineered multiple routes frontend and backend to manage
                  and edit reservations and tables using the API.
                </li>
                <li>
                  • Managed different environments for development, testing, and
                  production, alongside version control with GitHub.
                </li>
              </ul>
            </div>
            <img
              src="/project_images/restresapp.png"
              alt="Screenshot of Restaurant Reservation App"
            />
          </div>
          <hr />
        </div>
      </div>
      <div className="portfolio-column-c">
        <div className="infoBox">
          <h5>Languages Used:</h5>
          <hr />
          <ul>
            <li>JavaScript ES6</li>
            <li>TypeScript</li>
            <li>Some C#</li>
          </ul>
        </div>
        <div className="infoBox">
          <h5>Frontend Core Skills:</h5>
          <hr />
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="infoBox">
          <h5>Backend Core Skills:</h5>
          <hr />
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>SQL Script</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="infoBox">
          <h5>Other Skills & Tools:</h5>
          <hr />
          <ul>
            <li>Visual Studio Code</li>
            <li>Git & GitHub</li>
            <li>GitHub Pages</li>
            <li>Vercel</li>
            <li>Jest & Mocha</li>
            <li>Team Coordination</li>
            <li>Discord.NET (C#)</li>
            <li>Postman</li>
            <li>ElephantSQL</li>
            <li>Kdenlive (Video Editing)</li>
            <li>Paint Net (Image Editing)</li>
            <li>Unity (Scene Editing)</li>
            <li>Substance Painter (Texturing)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
