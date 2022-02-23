import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from '../../containers/landing/Landing';
import Home from '../../containers/home/Home';
import Canvas from '../../containers/canvas/Canvas.jsx';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}
