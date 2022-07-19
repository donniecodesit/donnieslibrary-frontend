import "./_Portfolio.css";

import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import PhotoPane from "./PhotoPane";
import Skills from "./Skills";
import Projects from "./Projects";
import Comments from "./Comments";
import VideoBox from "./VideoBox";

export default function Portfolio() {
  return (
    <>
      <div className="Portfolio">
        <h1 className="welcome-box" style={{width: "75%", marginTop: "15px", marginBottom: "0px"}}>Welcome to Donnie's Portfolio!</h1>
        <main>
          <div className="col-lg-4">
            <PhotoPane />
            <Skills />
            <VideoBox />
          </div>
          <div className="col-lg-8">
            <Introduction />
            <AboutMe />
            <Projects />
          </div>
        </main>
        <Comments />
      </div>
    </>
  );
}
