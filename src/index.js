import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";

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
        <Route path={"/projects"} element={<h2>No Content.</h2>} />
        <Route path={"/unknown"} element={<h2>No Content.</h2>} />
      </Routes>
      <footer>
        <small>Copyright © {date.getFullYear()} Donovan Laws.</small>
      </footer>
    </Router>
  </div>
);