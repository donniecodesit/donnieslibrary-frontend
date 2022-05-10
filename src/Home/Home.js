import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Games from '../Games/Games';
const secret = process.env.REACT_APP_SECRET;

export default function Home() {
  return (
    <Routes>
        <Route path="/" element={<Games admin={false} />} />
        <Route path={`/${secret}`} element={<Games admin={true} />} />
    </Routes>
  )
}