import "./_Portfolio.css";

import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import PhotoPane from "./PhotoPane";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Portfolio() {
  return (
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
        </div>
      </main>
    </div>
  );
}
