import React from "react";

// Icons
import { SiGmail, SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

// Images
import personalPhoto from "../../images/personalshot.png";
import phoenixNight from "../../images/phoenixnight.png";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";

// Styles
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-column-a">
        <div className="infoBox">
          <img
            className="personalPhoto"
            src={personalPhoto}
            alt="Camera facing Donovan"
          />
          <h1>Donovan Laws</h1>
          <h5>Software Engineer</h5>
          <hr />
          <h6>22 He/Him | Peoria, AZ</h6>
          <hr />
          <a
            href="mailto:donovan.laws@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail fill="#CA3737" />
          </a>
          <a
            href="https://twitter.com/donovan_laws"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitter fill="#55ADEE" />
          </a>
          <a
            href="https://github.com/donniecodesit"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub fill="hsl(var(--textColor))" />
          </a>
          <a
            href="https://www.linkedin.com/in/donovanlaws/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin fill="#0274B3" />
          </a>
        </div>
      </div>
      <div className="portfolio-column-b">
        <div className="infoBox">
          <h4>Need a Software Engineer?</h4>
          <hr />
          <p>
            Welcome to my portfolio! Contact information and skills are on the
            sides of the page. If you'd like to see my projects or works, check
            out the Projects tab. Want to know more about me or what I can
            provide? Keep reading! ♥
          </p>
          <hr />
          <img
            src={phoenixNight}
            alt="Nighttime Phoenix Arizona Landscape"
            className="phxImage"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              marginBottom: "8px",
            }}
          />
          <hr />
        </div>
        <div className="infoBox">
          <h5>My Introduction & About Me!</h5>
          <hr />
          <p>
            I am a Software Engineer and Web Developer who is still always
            learning and looking to learn more in development. I was born and
            grew up in North Carolina and in 2019 moved across the country to
            reside in Arizona with friends who supported my career path.
          </p>
          <p>
            Before I got into tech, I was a Content Creator and Streamer on
            YouTube and Twitch, I had been working to make a career out of that
            before I found more passion in creating applications after working
            on personal programming projects. My YouTube audience has grown and
            reached over 53,000 people, and while not related to tech, was super
            critical at teaching me how to instruct, assist, and help others who
            are having technical issues. The content I made on my channel was
            supporting and helping users write commands for a mod engine that
            accepted text commands with arguments.
          </p>
          <hr />
          <p>
            During this time period in 2017 I started a Discord Bot Project in
            JavaScript, and between 2017 and 2020 as I worked on that bot it
            started gaining more activity and being actively used with hundreds
            of users. In 2020, I rewrote the project in C# using Discord.NET and
            moved from a flat-file database to a MongoDB database.
          </p>
          <p>
            In 2021 my interest in tech and web development expanded, and from
            November 2021 to April 2022 I enrolled in and actively developed in
            Thinkful's Software Engineering Immersion Program. Since then I have
            learned, maintained, and improved my skills in Node, React, Express,
            and other libraries depending on the project. From August 2022 to
            October 2022 I was employed remotely with SPJ Solutions, with an
            amazing team of engineers, and further improved my capabilities
            during that role. The team was effected by a layoff in October 2022
            and I have been seeking employment during 2022 and 2023.
          </p>
          <hr />
        </div>
        <div className="infoBox">
          <h5>Anything else?</h5>
          <hr />
          <p>
            With all of my knowledge combined, as well as a 5 month program,
            ceritification of completion, and web dev experience under my belt,
            I can confidently say I enjoy working with and organizing databases.
            I've written databases using services like ElephantSQL and MongoDB.
            My frontend projects have all been in React. I deploy my projects
            using services like Vercel, and GitHub Pages when it's a one page
            site. Please browse my projects and connect with me if you'd like
            to!
          </p>
          <hr />
          <p>
            Apart from programming and working on applications, I sometimes do
            the occasional stream, and I can often be found spending a lot of my
            free time playing games solo or online. You may find me as a
            participant in a monster slaying party, a joke filled party game, a
            jumpscare filled horror game, or just breaking my fingers on some
            rhythm games. I am fascinated by Virtual Reality and enjoy VRChat,
            where I have textured, scripted, and uploaded many personal avatars.
            I've even done texture commissions for others online before.
          </p>
        </div>
        <div className="infoBox">
          <h5>My Biggest Projects</h5>
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
            <img src={project2} alt="Screenshot of Discord Bot App" />
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
            <img src={project3} alt="Screenshot of Portfolio" />
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
              src={project1}
              alt="Screenshot of Restaurant Reservation App"
            />
          </div>
          <hr />
        </div>
      </div>
      <div className="portfolio-column-c">
        <div className="infoBox">
          <h5>Languages:</h5>
          <ul>
            <li>JavaScript ES6</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="infoBox">
          <h5>Frontend Skills:</h5>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="infoBox">
          <h5>Backend Skills:</h5>
          <ul>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>SQL Script</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="infoBox">
          <h5>Other Skills & Tools:</h5>
          <ul>
            <li>Visual Studio Code</li>
            <li>Git & GitHub</li>
            <li>GitHub Pages</li>
            <li>Vercel</li>
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
