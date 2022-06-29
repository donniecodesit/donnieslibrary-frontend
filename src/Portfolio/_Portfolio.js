import "./_Portfolio.css";

import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import PhotoPane from "./PhotoPane";
import Skills from "./Skills";
import Projects from "./Projects";
import Comments from "./Comments";

export default function Portfolio() {
  const date = new Date();
  return (
    <>
      <div className="Portfolio">
        <main>
          <div className="col-lg-4">
            <PhotoPane />
            <Skills />
          </div>
          <div className="col-lg-8">
            <Introduction />
            <AboutMe />
            <Projects />
            <Comments />
          </div>
        </main>
      </div>
      <footer>
        <center>
          <small>Copyright © {date.getFullYear()} Donovan Laws.</small>
        </center>
      </footer>
    </>
  );
}
