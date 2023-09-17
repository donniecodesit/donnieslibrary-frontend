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
          <h6>23 | He/They | Peoria, AZ</h6>
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
          <h4>~ Professional Experiences ~</h4>
          <hr />
          <h5>Software Engineer at SPJ Solutions</h5>
          <p>Aug 2022 - Oct 2022</p>
          <ul>
            <li>
              • Refocused the readability of over 400 components by
              consolidating in-line styles with Emotion CSS.
            </li>
            <li>
              • Implemented tests utilizing TypeScript and Jest to validate the
              data returned from over 30 endpoints.
            </li>
            <li>
              • Established preparations for plans or tasks in sprint meetings
              daily with 5 to 19 members via Zoom.
            </li>
            <li>
              • Demonstrated the ability to complete anticipated goals within
              assigned time frames.
            </li>
          </ul>
          <hr />
          <h5>Freelance Chatbot Developer</h5>
          <p>Since Nov 2017</p>
          <ul>
            <li>
              • Programmed 3 iterations of interactive and functional chatbots
              for users on the Discord platform.
            </li>
            <li>
              • Itemized and managed feature ideas or plans with a co-developer
              in the style of user requests.
            </li>
            <li>
              • Designed and oversaw the MongoDB database which stored over
              50,000 profiles for users.
            </li>
            <li>
              • Transformed both the codebase and database while rewriting the
              bot from JavaScript to C#.
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
                  • Developed a chatbot application that users on Discord can
                  interact with for entertainment purposes.
                </li>
                <li>
                  • Programmed the chatbot with C# and Discord.Net, and managed
                  the database with MongoDB.
                </li>
                <li>
                  • Collaborated with colleagues to design features, appearance,
                  structure, and functionality.
                </li>
                <li>
                  Remodeled bot features for optimization when changes to the
                  Discord API occurred.
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
                  • Engineered a full-stack application to manage and book
                  reservations at restaurant tables.
                </li>
                <li>
                  • Programmed the application with PostgreSQL, Express, React,
                  and JavaScript.
                </li>
                <li>
                  • Controlled different environments during development,
                  including testing and production.
                </li>
                <li>
                  Formalized the features of the website on individual branches
                  to validate functionality.
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
