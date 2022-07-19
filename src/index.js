// React Components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Page Components
import Header from './Header';
import Games from './Games/_Games';
import Portfolio from './Portfolio/_Portfolio';
import BotInfoPage from './BotInfo/BotInfoPage';
import ProjectsPage from "./Projects/ProjectsPage";

// Styling
import './index.css';
import './animations.css';

// Variables
const secret = process.env.REACT_APP_SECRET;
const root = ReactDOM.createRoot(document.getElementById('root'));
const date = new Date();

root.render(
  <Router>
    <header className="global-header"><Header /></header>
    <Routes>
        <Route path={"/"} element={<Navigate to="/portfolio" replace />}/>
        <Route path={"/games"} element={<Games admin={false} />} />
        <Route path={`/games/${secret}`} element={<Games admin={true} />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/prototonbot"} element={<BotInfoPage />} />
        <Route path={"/projects"} element={<ProjectsPage />} />
    </Routes>
    <footer className="slideFromBottom">
      <small>Copyright © {date.getFullYear()} Donovan Laws.</small>
    </footer>
  </Router>
);