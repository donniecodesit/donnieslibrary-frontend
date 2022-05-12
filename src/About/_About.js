import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import './_About.css';

export default function About() {
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