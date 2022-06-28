import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Games from '../Games/_Games';
import Portfolio from '../Portfolio/_Portfolio';
import BotInfoPage from '../BotInfo/BotInfoPage';
import ProjectsPage from "../Projects/ProjectsPage";
const secret = process.env.REACT_APP_SECRET;

export default function Home() {
  return (
    <Routes>
        <Route path={"/"} element={<Navigate to="/portfolio" replace />}/>
        <Route path={"/games"} element={<Games admin={false} />} />
        <Route path={`/games/${secret}`} element={<Games admin={true} />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/prototonbot"} element={<BotInfoPage />} />
        <Route path={"/projects"} element={<ProjectsPage />} />
    </Routes>
  )
}