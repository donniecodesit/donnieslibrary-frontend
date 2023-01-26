import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Games from "./components/Games/Games";
import HueChanger from "./components/ColorChangers/HueChanger";

// Styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const date = new Date();

root.render(
  <div className="App">
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path={"/"} element={<Portfolio />} />
        <Route path={"/portfolio"} element={<Navigate to="/" replace />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/games"} element={<Games />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <HueChanger />
      <footer>
        <small>Copyright © 2022 - {date.getFullYear()} Donovan Laws.</small>
      </footer>
    </Router>
  </div>
);
