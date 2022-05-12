import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Games from '../Games/_Games';
import About from '../About/_About';
const secret = process.env.REACT_APP_SECRET;

export default function Home() {
  return (
    <Routes>
        <Route path={"/"} element={<></>} />
        <Route path={"/games"} element={<Games admin={false} />} />
        <Route path={`/games/${secret}`} element={<Games admin={true} />} />
        <Route path={"/portfolio"} element={<About />} />
    </Routes>
  )
}