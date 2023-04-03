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
          <h1>Donovan Laws</h1>
          <h5>Software Engineer</h5>
          <hr />
          <img
            className="personalPhoto"
            src="/images/personalshot.png"
            alt="A selfie of Donovan"
          />
          <hr />
          <h6>22 He/Him Peoria, AZ</h6>
          <h6>donovan.laws@gmail.com</h6>
          <p>I prefer email first!</p>
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
          <h5>The Tech Side, The Nerd Side</h5>
          <hr />
          <p>
            With my knowledge and experiences I can confidently say that I enjoy
            working with and organizing databases and information. I've managed
            databases in both ElephantSQL/PostreSQL and MongoDB. I enjoy
            creating websites in React, both with impressive design and
            functionality, with the purpose of displaying information or solving
            a task. My projects are usually deployed with Vercel, or GitHub
            pages when it's a static url page. Check out my projects to see
            things I've done!
          </p>
          <hr />
          <p>
            When not programming, I sometimes do the occasional game stream, and
            can often be found playing solo or online games. You may find me as
            a participant in a monster slaying party, a joke filled party game,
            a jumpscare filled horror game, or breaking my fingers on some
            rhythm games. I am fascinated by Virtual Reality and the tech
            involved behind it, and enjoy VRChat, where I have textured,
            scripted, and uploaded many personal avatars. I've also done texture
            commissions for people online too!
          </p>
          <hr />
        </div>
      </div>
      <div className="portfolio-column-b">
        <img
          src="/images/phoenixnight.png"
          alt="Nighttime Phoenix Arizona Landscape"
          className="phxImage"
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            marginBottom: "8px",
            borderRadius: "20px",
            filter: "drop-shadow(0px 0px 1px hsl(var(--textColor)))",
          }}
        />
        <div className="infoBox">
          <h4>Need A Software Engineer? Here's My Introduction!</h4>
          <hr />
          <p>
            A Software Engineer versed in front-end development and back-end
            development using a modern tech stack consisting of PostgreSQL,
            Express, React, and Node in JavaScript! I am actively seeking roles
            to continue my professional experiences! I have relevant experiences
            professionally and recreationally listed below, as well as a few
            examples of my bigger projects.
          </p>
          <hr />
          <p>
            Born and raised in North Carolina and moved to Arizona in 2019!
            Before I got into development, I was a Content Creator and Streamer
            on YouTube and Twitch. The content I featured was about helping
            users write commands for a mod engine using text/command scripts.
            While not related to tech, my audience grew and reached over 54,000
            people, and helped me learned how to instruct, assist, and help
            others who are having technical issues.
          </p>
          <hr />
          <p>
            In 2017, I created a Discord Bot using Discord.js and worked on it
            between 2017 - 2020. Then bot had gained way more activity and
            hundreds of users. In 2020, I rewrote the project in C# using
            Discord.NET, and moved from a flat-file database to MongoDB. In 2021
            my interest in the industry grew, and from November 2021 to April
            2022 I was enrolled in Thinkful's Software Engineering Immersion
            Program. I have studied, learned, and improved my skills in Node,
            React, Express, and other supporting libraries or programs. From
            August 2022 to October 2022, I was working at SPJ Solutions
            remotely, and further improved my skills during that role. The team
            was effected by a layoff in October 2022 and I have been on the job
            search since then, while still being human and trying to live other
            parts of life too!
          </p>
          <hr />
        </div>
        <div className="infoBox">
          <h4>Relevant Experiences!</h4>
          <hr />
          <h5>Software Engineer at SPJ Solutions</h5>
          <p>Aug 2022 - Oct 2022</p>
          <ul>
            <li>
              • Consolidated and organized all of the styling in the codebase
              from in-line styles to a CSS library.
            </li>
            <li>
              • Optimized and cleaned up code created by developers previously
              contributed to the codebase.
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
          <h5>Discord Bot Developer as Hobby</h5>
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
              • Integrated efficient code in addition to visually appealing
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
          <h4>My Top Projects</h4>
          <hr />
          <div className="projectBox">
            <div className="projectInfo">
              <div className="projectMain">
                <h5>Prototon Discord Bot</h5>
                <a href="noweher">[GitHub]</a>
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
                  • Led and communicated with a small team of developers,
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
                <a href="noweher">[GitHub]</a>
              </div>
              <ul>
                <li>
                  • Built with PERN stack to showcase my personal portfolio,
                  sharing information about me and my skillset.
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
                <a href="noweher">[GitHub]</a>
              </div>
              <ul>
                <li>
                  • Built a PERN stack application to book and edit
                  reservations, stored an managed with a database.
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
          <h5>Languages:</h5>
          <hr />
          <ul>
            <li>JavaScript ES6</li>
            <li>TypeScript</li>
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
