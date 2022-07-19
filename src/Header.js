import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  let {pathname} = useLocation();

  const handleClick = (event, page) => {
    event.preventDefault();
    const hrefArray = event.target.href.split("/");
    const href = hrefArray[hrefArray.length - 1];
    switch(href) {
      case "portfolio":
        navigate('/portfolio');
        break;
      case "prototonbot":
        navigate("/prototonbot");
        break;
      case "games":
        navigate("/games");
        break;
      case "projects":
        navigate("/projects");
        break;
      default:
        navigate("/");
    }
  }

  const returnLinks = () => {
    switch (pathname) {
      case "/portfolio":
        return (
          <div className="header-nav" style={{borderTop: "1px solid #d0abfa", paddingTop: "10px"}}>
            <div>
              <a className="navigation-link" href="#contact">Contact</a>
            </div>
            <div>
              <a className="navigation-link" href="#intro">Intro</a>
            </div>
            <div>
              <a className="navigation-link" href="#skills">Skills</a>
            </div>
            <div>
              <a className="navigation-link" href="#about">About</a>
            </div>
            <div>
              <a className="navigation-link" href="#projects">Projects</a>
            </div>
          </div>
        )
      case "/prototonbot":
        return (
          <div className="header-nav" style={{borderTop: "1px solid #d0abfa", paddingTop: "10px"}}>
            <div>
              <a className="navigation-link" href="#info">Info</a>
            </div>
            <div>
              <a className="navigation-link" href="#usage">Usage</a>
            </div>
            <div>
              <a className="navigation-link" href="#features">Features</a>
            </div>
            <div>
              <a className="navigation-link" href="#commands">Commands</a>
            </div>
          </div>
        )
      default:
        return (
          <div className="header-nav" style={{borderTop: "1px solid #d0abfa", paddingTop: "10px"}}>
            <div>
              <a className="navigation-link invisible" href="#header">Top</a>
            </div>
          </div>
        );
    }
  }

  return (
    <div className="container-fluid my-2 slideFromTop" id="header">
      <div className="header-container">
        <div className="col-lg-5 col-md-5 header-start slideFromLeft">
          <img src={"./project_images/websitelogo.png"} className="header-icon" alt="website logo"/>
          <h1 className="header-title">All About Donnie!</h1>
        </div>
        <div className="col-lg-7 col-md-7 slideFromRight" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div className="header-nav" style={{marginBottom: "10px"}}>
            <div>
              <a className={`navigation-link${pathname === "/portfolio" ? "-active" : ""}`} href="/portfolio" onClick={handleClick}>
                  Portfolio
              </a>
            </div>
            <div>
              <a className={`navigation-link${pathname === "/projects" ? "-active" : ""}`} href="/projects" onClick={handleClick}>
                  Projects
              </a>
            </div>
            <div>
              <a className={`navigation-link${pathname === "/prototonbot" ? "-active" : ""}`} href="/prototonbot" onClick={handleClick}>
                  Discord Bot
              </a>
            </div>
            <div>
              <a className={`navigation-link${pathname === "/games" ? "-active" : ""}`} href="/games" onClick={handleClick}>
                  Game Library
              </a>
            </div>
          </div>
          {returnLinks()}
        </div>
      </div>
    </div>
  );
}
