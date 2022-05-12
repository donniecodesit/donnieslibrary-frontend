import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  let {pathname} = useLocation();
  return (
    <div className="container-fluid my-2">
      <div className="header-container">
        <div className="col-5 header-start">
          <img src="http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png" className="header-icon" alt="react logo"/>
          <h1 className="portfolio-h1">All About Donnie!</h1>
        </div>
        <div className="col-2">
        </div>
        <div className="col-5" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div className="header-nav">
            <div>
              <a className="navigation-link" href="/portfolio" onClick={(event) => {
                  event.preventDefault(); 
                  navigate('/portfolio');
              }}>
                  Portfolio
              </a>
            </div>
            <div>
              <a className="navigation-link" href="/" onClick={(event) => {
                  event.preventDefault(); 
                  navigate('/games');
              }}>
                  Game Library
              </a>
            </div>
          </div>
          <div className="header-nav">
            {
              pathname === "/portfolio" && (
                <>
                  <div>
                    <a className="navigation-link" href="#intro">Intro</a>
                  </div>
                  <div>
                    <a className="navigation-link" href="#about">About</a>
                  </div>
                  <div>
                    <a className="navigation-link" href="#skills">Skills</a>
                  </div>
                  <div>
                    <a className="navigation-link" href="#projects">Projects</a>
                  </div>
                  <div>
                    <a className="navigation-link" href="#contact">Contact</a>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
