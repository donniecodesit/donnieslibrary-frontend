import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import './_Portfolio.css';

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <main>
        <Introduction />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
    </div>
  );
}