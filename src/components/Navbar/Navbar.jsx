import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Components
import ThemeChanger from "../ThemeChanger/ThemeChanger";

// Icons
import {
  BsFillHouseFill,
  BsFillFolderFill,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";

// Styles
import "./navbar.css";

export default function Navbar() {
  let navigate = useNavigate(); //navigate is used to go to different paths
  let { pathname } = useLocation(); //useLocation returns pathname, the current path

  return (
    <div className="navbar" id="navbar" color-scheme="light">
      <div className="navbar-content">
        <div className="navbar-content-left">
          <div className="navigation-svg" onClick={() => navigate("/")}>
            <BsFillHouseFill />
            <p className={pathname === "/" ? "active" : "inactive"}>Home</p>
          </div>
          <div className="navigation-svg" onClick={() => navigate("/projects")}>
            <BsFillFolderFill />
            <p className={pathname === "/projects" ? "active" : "inactive"}>
              Projects
            </p>
          </div>
        </div>
        <div className="navbar-content-middle">
          <h3>
            Donovan's{" "}
            {pathname === "/"
              ? "Portfolio"
              : pathname === "/projects"
              ? "Projects"
              : "???"}
          </h3>
        </div>
        <div className="navbar-content-right">
          <div className="navigation-svg" onClick={() => navigate("/unknown")}>
            <BsFillGrid3X3GapFill />
            <p className={pathname === "/unknown" ? "active" : "inactive"}>
              Unknown
            </p>
          </div>
          <div className="navigation-svg">
            <ThemeChanger />
            <p>Theme</p>
          </div>
        </div>
      </div>
    </div>
  );
}
