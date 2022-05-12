import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Games from '../Games/_Games';
import About from '../About/_About';
const secret = process.env.REACT_APP_SECRET;

export default function Home() {
  return (
    <Routes>
        <Route path={"/"} element={<p style={{textAlign: 'right', margin: '40px', fontWeight: 'bold', fontSize: '30px'}}>⬆️ Click a link above to get started! ⬆️</p>} />
        <Route path={"/games"} element={<Games admin={false} />} />
        <Route path={`/games/${secret}`} element={<Games admin={true} />} />
        <Route path={"/portfolio"} element={<About />} />
    </Routes>
  )
}