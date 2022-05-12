import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from './About/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <header className="Portfolio-header"><Header /></header>
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
);