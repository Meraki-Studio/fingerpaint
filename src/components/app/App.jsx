import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from '../../containers/landing/Landing';
import Home from '../../containers/home/Home';
import Canvas from '../../containers/canvas/Canvas.jsx';
import Loading from '../../containers/loading/Loading';

import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </>
  );
}
