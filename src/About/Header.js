import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
  return (
    <div className="container-fluid my-2">
      <div className="InfoRow">
        <div className="col-lg-5">
          <h1 className="portfolio-h1">Donovan Laws</h1>
          <h2 className="portfolio-h2">Web Developer</h2>
        </div>
        <div className="col-lg-7">
          <div className="InfoRow">
            <div>
              <a className="Portfolio-link" href="#intro">Introduction</a>
            </div>
            <div>
              <a className="Portfolio-link" href="#about">About</a>
            </div>
            <div>
              <a className="Portfolio-link" href="#skills">Skills</a>
            </div>
            <div>
              <a className="Portfolio-link" href="#projects">Projects</a>
            </div>
            <div>
              <a className="Portfolio-link" href="#contact">Contact</a>
            </div>
            <div>
              <a className="Portfolio-link" href="/" onClick={(event) => {
                  event.preventDefault(); 
                  navigate('/');
              }}>
                  Game Library
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
